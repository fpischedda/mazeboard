(ns mazeboard.api.games
  (:require
   [cheshire.core :as json]
   [compojure.core :refer [context GET POST PATCH DELETE]]
   [mazeboard.api.response :refer [error json-bad-request json-success created accepted]]
   [mazeboard.data.games :as games]
   [mazeboard.dice :as dice]
   [mazeboard.game :as game-logic]))

(defn game-id [req]
  "returns the game id taking it from the request parameters"
  (:id (:route-params req)))

(defn get-user [req]
  "extracts username from request"
  (:usr (:identity req)))

(defn game-url [game]
  (str "/games/" (:_id game)))

(defn create [req]
  (let [user (get-user req)
        params (:params req)
        max-players (Integer. (:max-players params))
        board-size (Integer. (:board-size params))
        game (games/create user max-players board-size :coin)]
    (created (game-url game))))

(defn details [req]
  (let [id (game-id req)]
    (json-success (games/details id))))

(defn join [req]
  (let [user (get-user req)
        id (game-id req)]
    (games/join id user)
    (accepted)))

(defn leave [req]
  (let [user (get-user req)
        id (game-id req)]
    (games/leave id user)
    (accepted)))

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
          (json-success (games/current-turn id))
          (json-bad-request res))))))

(defn user-games [req]
  (let [user (get-user req)]
    (json/encode (games/by-user user 0 10))))

(defn update-max-players [req]
  (let [id (game-id req)
        user (get-user req)
        max-players (Integer. (:max-players (:params req)))]
    (json-success (games/update-max-players id user max-players))))

(defn current-turn [req]
  "returns the current turn with options"
  (json-success (games/current-turn (game-id req))))

(defn apply-turn [req]
  (let [id (game-id req)
        user (get-user req)
        move (:move (:params req))
        turn (games/current-turn id)]
    (if-let [errors (game-logic/validate-move-format turn move)]
      (error errors)
      (json-success (game-logic/handle-turn turn move user)))))

(defn abandon-game [req]
  (let [id (game-id req)
        user (get-user req)]
    (json/encode (games/close id user))))

(def routes (context "/games" []
                     (GET "/" [] user-games)
                     (POST "/" [] create)
                     (context "/:id" [id]
                              (GET "/" [] details)
                              (PATCH "/" [] update-max-players)
                              (GET "/current-turn" [] current-turn)
                              (POST "/turn" [] apply-turn)
                              (POST "/join" [] join)
                              (POST "/leave" [] leave)
                              (POST "/start" [] start)
                              (DELETE "/" [] abandon-game))))
