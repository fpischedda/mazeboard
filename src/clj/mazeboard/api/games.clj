(ns mazeboard.api.games
  (:require
   [mazeboard.api.utils :refer [success]]
   [mazeboard.data.games :as games]))

(defn create [req]
  (let [game (games/create "usera" 2)]
    (success game)))

(defn join [req id]
  (let [res (games/join id "userb")]
    (success {:res :ok})))

(defn leave [req id]
  (let [res (games/leave id "userb")]
    (success {:res :ok})))

(defn user-games [req]
  (success []))

(defn make-move [req id]
  (success []))

(defn abandon-game [req id]
  (success []))
