(ns mazeboard.t-game
  (:use midje.sweet)
  (:require [mazeboard.game :as game]))

(def position {:row 1 :col 1})

(def the-game (game/init-game (game/make-fake-players 5 5) 5 5 :coin))

(facts "The game relies on a couple of utility functions"
       (fact "Use calculate-next-position to change the position"
             (game/calculate-next-position position [:move :north]) => {:row 0 :col 1}
             (game/calculate-next-position position [:move :east]) => {:row 1 :col 2}
             (game/calculate-next-position position [:move :south]) => {:row 2 :col 1}
             (game/calculate-next-position position [:move :west]) => {:row 1 :col 0})
       (fact "Use next-player to get the next active player"
             (game/next-player the-game) => 1))
