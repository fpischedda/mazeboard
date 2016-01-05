(ns mazeboard.core
  (:require [mazeboard.game :as game]
            [mazeboard.dice :as dice])
  (:gen-class))

(def the-game (game/init-game (game/make-fake-players 5 5) 5 5 :coin))

(defn -main
  "Mazeboard game executable"
  [& args]
  (game/print-game the-game)
  (let [move (dice/roll-dice (the-game :dice))]
    (def the-game (game/handle-turn the-game move)))
  (game/print-game the-game))
