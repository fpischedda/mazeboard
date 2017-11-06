(ns mazeboard.api.server
  (:require [mazeboard.api.routes :refer [routes]]
            [org.httpkit.server :refer [run-server]]))

(defc run [params]
  (run-server (site #'routes) params))
