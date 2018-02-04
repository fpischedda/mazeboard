(ns mazeboard.ui.effects.game
  (:require
   [citrus.core :as citrus]))

(defn load-game [r game-id]
  (citrus/dispatch! r
                    :game
                    :load-game
                    game-id))
