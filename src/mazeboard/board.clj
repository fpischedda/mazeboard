(ns mazeboard.board
  (:require [mazeboard.tile :as tile]))

(defn make-board-row [size]
  "creates a board row"
  (for [t (range size)] (tile/random-tile)))

(defn make-board [width height]
  "creates a board"
  {:width width :height height
   :tiles (for [r (range height)] (make-board-row width))})

(defmacro tile-at [board row col]
  "return the tile at specified coordinates"
  (let [tiles (:tiles board)
        tiles-row (get tiles row)
        curr-tile (get tiles-row col)]
    curr-tile))

(defn update-board [board row col new-tile]
  "replace the tile at row-col with the new tile"
  (assoc (get (:tiles board) row) col new-tile))

(defn rotate-board-tile [board row col dir]
  "rotate a board tile identified by row col coordinates"
  (update-board board row col (tile/rotate-tile dir (tile-at board row col))))
