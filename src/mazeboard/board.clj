(ns mazeboard.board
  (:require [mazeboard.tile :as tile]))

(defn make-board-row [size tile-fn]
  "creates a board row"
  (into [] (repeatedly size tile-fn)))
  ;(for [t (range size)] (tile-fn)) 

(defn make-board 
  "creates a board, if no tile-fn function is provided tile/random-tile will be used"
  ([width height] (make-board width height tile/random-tile))
  ([width height tile-fn]
   {:width width :height height
    :tiles (into [] (repeatedly height (fn [] (make-board-row width tile-fn))))}))

(defn tile-at [board row col]
  "return the tile at specified coordinates"
  (get (get (:tiles board) row) col))

(defn update-board [board row col new-tile]
  "replace the tile at row-col with the new tile"
  (assoc (get (:tiles board) row) col new-tile))

(defn rotate-board-tile [board row col dir]
  "rotate a board tile identified by row col coordinates"
  (update-board board row col (tile/rotate-tile dir (tile-at board row col))))
