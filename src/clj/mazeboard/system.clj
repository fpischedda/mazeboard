(ns mazeboard.system
  (:require [mount.core :refer [defstate]]
            [mazeboard.data.connection :refer [database]]
            [mazeboard.api.server :refer [server]])
  (:gen-class))

(defstate system
  :start {:database database
          :server server})

(defn -main [& _args]
  (println "Starting mazeboard service...")
  (println (mount/start))
  (println "Ready to accept http connections at " (-> config :http :port))
  (println "Ready to accept nrepl connections at " (-> config :nrepl :port))

  (loop []
    (Thread/sleep 1000)
    (recur))
  (println "Stopping mazeboard service")
  (mount/stop))
