(ns mazeboard.system
  (:require [mount.core :refer [defstate]]
            [mazeboard.data.connection :refer [database]]
            [mazeboard.api.server :refer [server]]))

(defstate system
  :start {:database database
          :server server})
