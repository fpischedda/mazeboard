(ns mazeboard.data.connection
  (:require [monger.core :as mg]
            [mount.core :refer [defstate]]
            [mazeboard.config :as config]))

(defstate connection
  :start (mg/connect-via-uri (config/get :mongodb))
  :stop (mg/disconnect (:conn connection)))

(defstate database
  :start (:db connection))
