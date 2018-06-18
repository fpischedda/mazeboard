(ns mazeboard.ui.effects.dashboard
  (:require
   [citrus.core :as citrus]))

(defn create-game [r token max-players board-size]
  (citrus/dispatch! r
                    :dashboard
                    :create-game
                    token
                    max-players
                    board-size))

(defn start-game [r token game-id]
  (citrus/dispatch! r
                    :dashboard
                    :start-game
                    token
                    game-id))

(defn delete-game [r token game-id]
  (citrus/dispatch! r
                    :dashboard
                    :delete-game
                    token
                    game-id))

(defn update-game [r token game-id max-players]
  (citrus/dispatch! r
                    :dashboard
                    :update-game
                    token
                    game-id
                    max-players))

(defn load-games [r token]
  (citrus/dispatch! r
                    :dashboard
                    :load-games
                    token))
