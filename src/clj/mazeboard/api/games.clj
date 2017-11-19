(ns mazeboard.api.games
  (:require
   [mazeboard.api.utils :refer [success]]
   [mazeboard.data.games :as games]))

(defn create [req]
  (let [game (games/create "usera" 2)]
    (success game)))

(defn join [req]
  (let [res (games/join "game-id" "userb")]
    (success {:res :ok})))

(defn leave [req]
  (let [res (games/leave "game-id" "userb")]
    (success {:res :ok})))

(defn user-games [req]
  (success "[]"))

(defn make-move []
  (success "[]"))

(defn abandon-game [req]
  (success "[]"))
