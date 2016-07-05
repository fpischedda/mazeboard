(ns mazeboard.system
  (require [mount.core :refer [defstate]]))

(defstate web-server
  :start (create-web-server)
  :stop (destroy-web-server web-server))
