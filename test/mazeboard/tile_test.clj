(ns mazeboard.tile-test
  (:use midje.sweet)
  (:require [mazeboard.tile :as tile]))

(def the-tile (tile/make-tile :solid :solid :open :open))

(facts "Tile is an array of four elements that can be :solid or :open"
       (fact "Tiles is composed of four elements"
             (tile/make-tile :solid :solid :solid :solid) => [:solid :solid :solid :solid])
       (fact "I can get the tile wall at :north :east :south :west"
             (tile/wall-at :north the-tile) => :solid
             (tile/wall-at :east the-tile) => :solid
             (tile/wall-at :south the-tile) => :open
             (tile/wall-at :west the-tile) => :open)
       (fact "Tiles can be rotated clockwise or counterclockwise"
             (tile/rotate-tile-left the-tile) => [:solid :open :open :solid]
             (tile/rotate-tile-right the-tile) => [:open :solid :solid :open]
             (tile/rotate-tile :left the-tile) => [:solid :open :open :solid]
             (tile/rotate-tile :right the-tile) => [:open :solid :solid :open]
             )
       )
