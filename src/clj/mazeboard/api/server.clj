(ns mazeboard.api.server
  (:require [mazeboard.api.routes :refer [routes]]
            [compojure.handler :refer [site]]
            [org.httpkit.server :refer [run-server]]))

(defn run [params]
  (run-server (site #'routes) params))
