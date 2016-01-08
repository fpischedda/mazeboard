(ns mazeboard.tile-test
  (:use midje.sweet)
  (:require [mazeboard.tile :as tile]))

(facts "Tile is an array of four elements that can be :solid or :open"
       (fact "Tiles is composed of four elements"
             (tile/make-tile :solid :solid :solid :solid) => [:solid :solid :solid :solid])
       (fact "I can get the tile wall at :north :east :south :west"
             (tile/wall-at :north (tile/make-tile :solid :open :solid :open)) => :solid
             (tile/wall-at :east (tile/make-tile :solid :open :solid :open)) => :open
             (tile/wall-at :south (tile/make-tile :solid :open :solid :open)) => :solid
             (tile/wall-at :west (tile/make-tile :solid :open :solid :open)) => :open)
       (fact "Tiles can be rotated clockwise or counterclockwise"
             (tile/rotate-tile-left (tile/make-tile :solid :solid :open :open)) => [:solid :open :open :solid]
             (tile/rotate-tile-right (tile/make-tile :solid :solid :open :open)) => [:open :solid :solid :open]
             (tile/rotate-tile :left (tile/make-tile :solid :solid :open :open)) => [:solid :open :open :solid]
             (tile/rotate-tile :right (tile/make-tile :solid :solid :open :open)) => [:open :solid :solid :open]
             )
       )
