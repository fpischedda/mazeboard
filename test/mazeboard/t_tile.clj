(ns mazeboard.t-tile
  (:use midje.sweet)
  (:require [mazeboard.tile :as tile]))

(def the-tile (tile/make-tile :solid :solid :open :open))
(def solid-tile (tile/make-tile :solid :solid :solid :solid))

(facts "Tile is an array of four elements that can be :solid or :open"
       (fact "Tiles is composed of four elements"
             (tile/make-tile :solid :solid :solid :solid) => [:solid :solid :solid :solid])
       (fact "I can get the tile wall at :north :east :south :west"
             (tile/wall-at :north the-tile) => :solid
             (tile/wall-at :east the-tile) => :solid
             (tile/wall-at :south the-tile) => :open
             (tile/wall-at :west the-tile) => :open)
       (fact "I can check if a tile wall is open or not"
             (tile/is-open? :north the-tile) => false
             (tile/is-open? :east the-tile) => false
             (tile/is-open? :south the-tile) => true
             (tile/is-open? :west the-tile) => true)
       (fact "I can fetch the names of open walls in a tile"
             (tile/open-walls the-tile) => [:south :west])
       (fact "Tiles can be rotated clockwise or counterclockwise"
             (tile/rotate-tile-left the-tile) => [:solid :open :open :solid]
             (tile/rotate-tile-right the-tile) => [:open :solid :solid :open]
             (tile/rotate-tile :left the-tile) => [:solid :open :open :solid]
             (tile/rotate-tile :right the-tile) => [:open :solid :solid :open]
             )
       (fact "Tiles should not have four closed walls"
             (some #{:open} (tile/fix-solid-walls solid-tile)) => :open)
       )
