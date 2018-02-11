(ns mazeboard.core
  (:require [mount.core :as mount]
            [mazeboard.system :refer [system]])
  (:gen-class))

(defn -main
  "Mazeboard server executable"
  [& args]
  (println "starting server: " (:server (:config system)))
  (mount/start))
