(ns mazeboard.system
  (require [mount.core :refer [defstate]]))

(defn create-web-server
  "creates a web serverv"
  []
  ())

(defn destroy-web-server
  "destroy the web serverv"
  [server]
  ())

(defn destroy-web-server [] ())

(defstate web-server
  :start (create-web-server)
  :stop (destroy-web-server web-server))
