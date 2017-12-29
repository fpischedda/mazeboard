(ns mazeboard.t-game
  (:use midje.sweet)
  (:require [mazeboard.game :as game]
            [mazeboard.tile :as tile]))

(def position {:row 1 :col 1})

(defn fake-tile-fn [] (tile/make-tile :solid :open :solid :open))

(def fake-tile (fake-tile-fn))

(def the-game (game/init-game
                (game/make-fake-players 5 5) 5 5 :coin fake-tile-fn))

(facts "Game related functions"
       (fact "Use calculate-next-position to change the position"
             (game/calculate-next-position position :north) => {:row 0 :col 1}
             (game/calculate-next-position position :east) => {:row 1 :col 2}
             (game/calculate-next-position position :south) => {:row 2 :col 1}
             (game/calculate-next-position position :west) => {:row 1 :col 0})
       (fact "Use next-player to get the next active player index"
             (game/next-player the-game) => 1)
       (fact "Mapping a direction to its opposite"
             (:north game/swap-dir) => :south
             (:east game/swap-dir) => :west
             (:south game/swap-dir) => :north
             (:west game/swap-dir) => :east)
       (fact "Testing tile-at-position"
             (game/tile-at-position {:row 0 :col 0} (:board the-game)) => fake-tile)
       (fact "Check if a provided position is a winning one"
             (game/is-winning-position? the-game {:row 0 :col 0}) => false)
       (fact "The player in the ending position is the winner"
             (game/winner the-game) => nil)
       (fact "Assign positions for two players"
             (game/make-players ["one" "two"] 4 4) => [
                                                       {:name "one"
                                                        :position {:row 0
                                                                   :col 0}}
                                                       {:name "two"
                                                        :position {:row 0
                                                                   :col 3}}
                                                       ]))
