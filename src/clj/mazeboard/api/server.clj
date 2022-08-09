(ns mazeboard.api.server
  (:require [mazeboard.api.routes :refer [routes]]
            [mazeboard.config :as config]
            [mazeboard.api.authorization :refer [rules]]
            [mount.core :refer [defstate]]
            [reitit.ring :as ring]
            [reitit.swagger :as swagger]
            [reitit.swagger-ui :as swagger-ui]
            [ring.middleware.json :refer [wrap-json-params]]
            [ring.middleware.keyword-params :refer [wrap-keyword-params]]
            [buddy.auth.backends :as backends]
            [buddy.auth.middleware :refer [wrap-authentication
                                           wrap-authorization]]
            [buddy.auth.accessrules :refer [wrap-access-rules]]
            [aleph.http :as http]))

(defn gen-auth-backend [auth-secret]
  (backends/jws {:secret auth-secret}))

(def access-options {:rules rules})

(defn allow-cross-origin
  "middleware function to allow cross origin"
  [handler]
  (fn [request]
    (let [response (handler request)]
      (-> response
          (assoc-in [:headers "Access-Control-Allow-Origin"]  "*")
          (assoc-in [:headers "Access-Control-Allow-Methods"] "GET,PUT,POST,PATCH,DELETE,OPTIONS")
          (assoc-in [:headers "Access-Control-Allow-Headers"] "X-Requested-With,Content-Type,Cache-Control, Authorization")))))

(defn gen-handler [auth-secret]
  (ring/ring-handler
   (ring/router
    [routes
     ["" {:no-doc true}
      ["/swagger.json" {:get (swagger/create-swagger-handler)}]
      ["/api-docs/*" {:get (swagger-ui/create-swagger-ui-handler)}]]]

    {:data {:muuntaja m/instance
            :middleware [wrap-cookies
                         wrap-session
                         wrap-params
                         wrap-keyword-params
                         wrap-json-params
                         allow-cross-origin
                         [wrap-access-rules access-options]
                         [wrap-authorization auth-backend]
                         [wrap-authentication auth-backend]
                         muuntaja/format-middleware]}})))

(mount/defstate http-server
  :start (http/start-server (gen-handler (:auth-secret auth-secret))
                            {:port (-> config :api-server :port)})
  :stop (.close http-server))

(comment
  (mount/start)
  (mount/stop)
  ,)
