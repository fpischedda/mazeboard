(ns mazeboard.api.server
  (:require [mazeboard.api.routes :refer [routes]]
            [mazeboard.config :refer [config]]
            [mazeboard.api.authorization :refer [rules]]
            [mount.core :refer [defstate]]
            [compojure.handler :refer [site]]
            [buddy.auth.backends :as backends]
            [buddy.auth.middleware :refer [wrap-authentication
                                           wrap-authorization]]
            [buddy.auth.accessrules :refer [wrap-access-rules]]
            [org.httpkit.server :refer [run-server]]))

(defonce server-instance (atom nil))

(def auth-backend (backends/jws {:secret (:auth-secret config)}))

(def access-options {:rules rules})

(def app (-> (site #'routes)
             (wrap-access-rules access-options)
             (wrap-authorization auth-backend)
             (wrap-authentication auth-backend)))

(defn start []
  (let [api-server (:api-server config)]
    (println "starting api server " api-server)
    (reset! server-instance (run-server app api-server))))

(defn stop []
  (when-not (nil? @server-instance)
    (println "quitting api server")
    ;; graceful shutdown: wait 100ms for existing requests to be finished
    ;; :timeout is optional, when no timeout, stop immediately
    (@server-instance :timeout 100)
    (reset! server-instance nil)))

(defstate server
  :start (start)
  :stop (stop))
