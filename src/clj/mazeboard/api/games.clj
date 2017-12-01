(ns mazeboard.api.games
  (:require
   [cheshire.core :as json]
   [mazeboard.api.utils :refer [success]]
   [mazeboard.data.games :as games]))

(defn create [req]
  (let [user (:username (:identity req))
        max-players (Integer. (:max-players (:params req)))]
    (json/encode (games/create user max-players))))

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
  (let [user (:username (:identity req))]
    (json/encode (games/by-user user 0 10))))

(defn update [req]
  (let [id (:id (:route-params req))
        user (:username (:identity req))
        max-players (Integer. (:max-players (:params req)))]
    (json/encode (games/update id user max-players))))

(defn make-move [req]
  (success []))

(defn abandon-game [req]
  (let [id (:id (:route-params req))
        user (:username (:identity req))]
    (json/encode (games/close id user))))
