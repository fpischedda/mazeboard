(ns mazeboard.api.games
  (:require
   [cheshire.core :as json]
   [mazeboard.api.utils :refer [success]]
   [mazeboard.data.games :as games]))

(defn create [req]
  (let [user (:username (:identity req))]
    (json/encode (games/create user 2))))

(defn details [req]
  (let [id (:id (:route-params req))]
    (json/encode (games/details id))))

(defn join [req]
  (let [user (:username (:identity req))
        id (:id (:route-params req))]
    (json/encode (games/join id user))))

(defn leave [req]
  (let [user (:username (:identity req))
        id (:id (:route-params req))]
    (json/encode (games/leave id user))))

(defn user-games [req]
  (success []))

(defn make-move [req id]
  (success []))

(defn abandon-game [req id]
  (success []))
