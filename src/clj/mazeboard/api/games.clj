(ns mazeboard.api.games
  (:require
   [cheshire.core :as json]
   [mazeboard.api.utils :refer [success]]
   [mazeboard.data.games :as games]
   [mazeboard.game :as game-logic]))

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

(defn current-turn [req]
  "returns the current turn with options"
  (json/encode (games/current-turn (game-id req))))

(defn apply-turn [req]
  (let [id (game-id req)
        user (:username (:identity req))
        move (:move (:params req))
        turn (games/current-turn id)]
    (if-let [errors (game-logic/validate-move-format turn move)]
      (json-encode errors)
      (josn/encode (game-logic/handle-turn turn move user)))))

(defn abandon-game [req]
  (let [id (game-id req)
        user (:username (:identity req))]
    (json/encode (games/close id user))))
