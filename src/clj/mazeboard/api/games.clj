(ns mazeboard.api.games
  (:require
   [cheshire.core :as json]
   [mazeboard.api.utils :refer [success]]
   [mazeboard.data.games :as games]
   [mazeboard.dice :as dice]
   [mazeboard.game :as game-logic]))

(defn game-id [req]
  "returns the game id taking it from the request parameters"
  (:id (:route-params req)))

(defn get-user [req]
  "extracts username from request"
  (:username (:identity req)))

(defn create [req]
  (let [user (get-user req)
        params (:params req)
        max-players (Integer. (:max-players params))
        board-size (Integer. (:board-size params))]
    (json/encode (games/create user max-players board-size :coin))))

(defn details [req]
  (let [id (game-id req)]
    (json/encode (games/details id))))

(defn join [req]
  (let [user (get-user req)
        id (game-id req)]
    (json/encode (games/join id user))))

(defn leave [req]
  (let [user (get-user req)
        id (game-id req)]
    (json/encode (games/leave id user))))

(defn start [req]
  (let [user (get-user req)
        id (game-id req)
        game (games/details id)
        size (:board-size game)
        dice-type (:dice-type game)
        board (game-logic/init-game (:players game) size size dice-type)
        move (dice/roll-dice (:dice board))]
    (when game
      (let [res (games/start id user board move)]
        (if (= (:res res) :ok)
          (json/encode (games/current-turn id))
          (json/encode res))))))

(defn user-games [req]
  (let [user (get-user req)]
    (json/encode (games/by-user user 0 10))))

(defn update-max-players [req]
  (let [id (game-id req)
        user (get-user req)
        max-players (Integer. (:max-players (:params req)))]
    (json/encode (games/update-max-players id user max-players))))

(defn current-turn [req]
  "returns the current turn with options"
  (json/encode (games/current-turn (get-in req [:params :id]))))

(defn apply-turn [req]
  (let [id (game-id req)
        user (get-user req)
        move (:move (:params req))
        turn (games/current-turn id)]
    (if-let [errors (game-logic/validate-move-format turn move)]
      (json/encode errors)
      (json/encode (game-logic/handle-turn turn move user)))))

(defn abandon-game [req]
  (let [id (game-id req)
        user (get-user req)]
    (json/encode (games/close id user))))
