(ns mazeboard.t-board
  (:use midje.sweet)
  (:require [mazeboard.board :as board]
            [mazeboard.tile :as tile]))

(defn fake-tile-fn [] (tile/make-tile :solid :open :solid :open))

(def fake-tile (fake-tile-fn))

(def fake-row [fake-tile])

(def fake-board {:width 1 :height 1 :tiles [fake-row]})

(facts "Board related functions"
       (fact "making a row of width 1"
             (board/make-board-row 1 fake-tile-fn) => fake-row)
       (fact "make-board with tile creation function"
             (board/make-board 1 1 fake-tile-fn) => fake-board)
       (fact "get a tile with tile-at macro"
             (board/tile-at fake-board 0 0) => fake-tile)
       (fact "check if a position is inside a board"
             (board/is-inside? fake-board 0 0) => true)
       (fact "update-board should replace the specified tile with the provided one"
             (board/tile-at
              (board/update-board fake-board 0 0 [:open :open :open :open])
              0 0) => [:open :open :open :open]))
