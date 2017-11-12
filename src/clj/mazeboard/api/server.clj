(ns mazeboard.api.server
  (:require [mazeboard.api.routes :refer [routes]]
            [mazeboard.config :refer [config]]
            [mount.core :refer [defstate]]
            [compojure.handler :refer [site]]
            [org.httpkit.server :refer [run-server]]))

(defstate server
  :start (run-server (site #'routes) (:server config)))
