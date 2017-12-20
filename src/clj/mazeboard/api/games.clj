(ns mazeboard.api.games
  (:require
   [cheshire.core :as json]
   [mazeboard.api.utils :refer [success]]
   [mazeboard.data.games :as games]))

(defn game-id [req]
  "returns the game id taking it from the request parameters"
  (:id (:route-params req)))

(defn create [req]
  (let [user (:username (:identity req))
        max-players (Integer. (:max-players (:params req)))]
    (json/encode (games/create user max-players))))

(defn details [req]
  (let [id (game-id req)]
    (json/encode (games/details id))))

(defn join [req]
  (let [user (:username (:identity req))
        id (game-id req)]
    (json/encode (games/join id user))))

(defn leave [req]
  (let [user (:username (:identity req))
        id (game-id req)]
    (json/encode (games/leave id user))))

(defn user-games [req]
  (let [user (:username (:identity req))]
    (json/encode (games/by-user user 0 10))))

(defn update [req]
  (let [id (game-id req)
        user (:username (:identity req))
        max-players (Integer. (:max-players (:params req)))]
    (json/encode (games/update id user max-players))))

(defn turn-options [req]
  "returns the current user's turn options"
  (let [turn (games/current-turn (game-id req))
        user (:username (:identity req))]
    (if (= (:user turn) user)
      (json/encode (:options turn))
      (json/encode []))))

(defn apply-turn [req]
  (success []))

(defn abandon-game [req]
  (let [id (game-id req)
        user (:username (:identity req))]
    (json/encode (games/close id user))))
