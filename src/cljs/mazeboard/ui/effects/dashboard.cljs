(ns mazeboard.ui.effects.dashboard
  (:require
   [citrus.core :as citrus]))

(defn create-game [r max-players board-size]
  (citrus/dispatch! r
                    :dashboard
                    :create-game
                    max-players
                    board-size))

(defn start-game [r game-id]
  (citrus/dispatch! r
                    :dashboard
                    :start-game
                    game-id))

(defn delete-game [r game-id]
  (citrus/dispatch! r
                    :dashboard
                    :delete-game
                    game-id))

(defn update-game [r game-id max-players]
  (citrus/dispatch! r
                    :dashboard
                    :update-game
                    game-id
                    max-players))

(defn load-games [r]
  (citrus/dispatch! r
                    :dashboard
                    :load-games))
