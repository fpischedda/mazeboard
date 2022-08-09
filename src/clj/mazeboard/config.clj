(ns mazeboard.config
  (:require [mount.core :refer [defstate]]
            [config.core :refer [load-env]]))

(defstate config
  :start (load-env))
