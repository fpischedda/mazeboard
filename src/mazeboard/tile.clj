(ns mazeboard.tile)

(defn make-tile [north east south west]
  "creates a tile represented as a vector index 0 is north, 1 is east etc"
  [north east south west])

(defn random-wall []
  "randomize a wall; a wall can be :open or :solid"
  (if (> (rand) 0.5) :solid :open))

(defn random-tile []
  "randomize a tile"
  (make-tile (random-wall) (random-wall) (random-wall) (random-wall)))

(defn rotate-tile-left [tile]
  "Rotate a tile counterclockwise"
  (conj (subvec tile 1 4) (first tile)))

(defn rotate-tile-right [tile]
  "Rotate a tile counterclockwise"
  (into (subvec tile 3) (subvec tile 0 3)))

(defn rotate-tile [dir tile]
  "rotate a tile in the specified direction: > 0 = right otherwise left"
  (if (= dir :right)
    (rotate-tile-right tile)
    (rotate-tile-left tile)))

(defn at-north [tile]
  (get tile 0))

(defn at-east [tile]
  (get tile 1))

(defn at-south [tile]
  (get tile 2))

(defn at-west [tile]
  (get tile 3))

(def direction-fn {:north #(get % 0) 
                   :east #(get % 1) 
                   :south #(get % 2) 
                   :west #(get % 3)})

(defn wall-at [dir tile]
  "return the tile wall at the specified direction (:north, :east etc)"
  ((direction-fn dir) tile))
