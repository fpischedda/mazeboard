(ns mazeboard.board
  (:require [mazeboard.tile :as tile]))

(defn make-board-row [size tile-fn]
  "creates a board row"
  (vec (repeatedly size tile-fn)))

(defn make-board-tiles [width height tile-fn]
  "create board tiles matrix of dimensions width X height"
  (vec (repeatedly height (fn [] (make-board-row width tile-fn)))))

(defn make-board
  "creates a board, if no tile-fn function is provided tile/random-tile will be used"
  ([width height] (make-board width height tile/random-tile))
  ([width height tile-fn]
   {:width width :height height
    :tiles (make-board-tiles width height tile-fn)}))

(defn tile-at [board row col]
  "return the tile at specified coordinates"
  (get (get (:tiles board) row) col))

(defn update-board [board row col new-tile]
  "replace the tile at row-col with the new tile"
  (assoc (get-in board [:tiles row col]) new-tile))

(defn rotate-board-tile [board row col dir]
  "rotate a board tile identified by row col coordinates"
  (update-board board row col (tile/rotate-tile dir (tile-at board row col))))

(defn board-width [board]
  "returns board width"
  (:width board))

(defn board-height [board]
  "returns board height"
  (:height board))

(defn is-inside? [board row col]
  "returns true if the position is inside the board, false otherwise"
  (and
   (>= row 0) (< row (board-height board))
   (>= col 0) (< col (board-width board))))
