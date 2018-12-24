(ns mazeboard.api.invites
  (:require
   [mazeboard.data.invites :as invites]
   [mazeboard.api.response :refer [json-success]]))

(defn received-by-user [req]
  (json-success []))

(defn sent-by-user [req]
  (json-success []))

(defn create [req]
  (let [invitation (invites/create "usera" "userb")]
    (json-success invitation)))

(defn details [req]
  (json-success []))

(defn accept [req]
  (json-success []))

(defn decline [req]
  (json-success []))

(defn delete [req]
  (json-success []))
