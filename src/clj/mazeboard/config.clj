(ns mazeboard.config
  (:require [mount.core :refer [defstate]]
            [config.core :refer [env]]))

(defn get [ken]
  (get env key))

(defstate config
  :start env)
