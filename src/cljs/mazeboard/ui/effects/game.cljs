(ns mazeboard.ui.effects.game
  (:require
   [citrus.core :as citrus]))

(defn load-game [r token game-id]
  (citrus/dispatch! r
                    :game
                    :load-game
                    token
                    game-id))
