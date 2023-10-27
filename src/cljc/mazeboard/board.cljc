(ns mazeboard.board
  (:require [mazeboard.tile :as tile]))

(defn make-board-row
  "creates a board row"
  [size tile-fn]
  (vec (repeatedly size tile-fn)))

(defn make-board-tiles
  "create board tiles matrix of dimensions width X height"
  [width height tile-fn]
  (vec (repeatedly height (fn [] (make-board-row width tile-fn)))))

(defn make-board
  "creates a board, if no tile-fn function is provided tile/random-tile will be used"
  ([width height] (make-board width height tile/random-tile))
  ([width height tile-fn]
   {:width width :height height
    :tiles (make-board-tiles width height tile-fn)}))

(defn tile-at
  "return the tile at specified coordinates"
  [board row col]
  (get-in board [:tiles row col]))

(defn update-board
  "replace the tile at row-col with the new tile"
  [board row col new-tile]
  (assoc-in board [:tiles row col] new-tile))

(defn rotate-board-tile
  "rotate a board tile identified by row col coordinates"
  [board row col dir]
  (update-board board row col (tile/rotate-tile dir (tile-at board row col))))

(defn board-width
  "returns board width"
  [board]
  (:width board))

(defn board-height
  "returns board height"
  [board]
  (:height board))

(defn is-inside?
  "returns true if the position is inside the board, false otherwise"
  [board row col]
  (and
   (>= row 0) (< row (board-height board))
   (>= col 0) (< col (board-width board))))
