(ns mazeboard.t-dice
  (:use midje.sweet)
  (:require [mazeboard.dice :as dice]))

(facts "A dice is an array of possible moves"
       (fact "Create a dice by specifying its type as a symbol"
             (dice/from-dice-type :dice) => [[:move :up] [:move :left]
                                        [:move :down] [:move :right]
                                        [:turn :left] [:turn :right]])
       (fact "Create a coin by specifying its type as a symbol"
             (dice/from-dice-type :coin) => [[:move nil] [:turn nil]])
       )
