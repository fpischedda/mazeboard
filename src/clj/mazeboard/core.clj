(ns mazeboard.core
  (:require [mazeboard.api.server :as server])
  (:gen-class))

(defn -main
  "Mazeboard game executable"
  [& args]
  (server/run {:port 8080}))
