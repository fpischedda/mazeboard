(ns mazeboard.tile)

(defn make-tile
  "creates a tile represented as a vector index 0 is north, 1 is east etc"
  [north east south west]
  [north east south west])

(defn random-wall
  "randomize a wall; a wall can be :open or :solid"
  []
  (if (> (rand) 0.5) :solid :open))

(defn fix-solid-walls
  "open one tile wall if all are closed"
  [tile]
  (if (some #{:open} tile)
    tile
    (assoc tile (int (* 3.9 (rand))) :open)))

(defn random-tile
  "randomize a tile"
  []
  (fix-solid-walls (make-tile (random-wall) (random-wall) (random-wall) (random-wall))))

(defn rotate-tile-left
  "Rotate a tile counterclockwise"
  [tile]
  (conj (subvec tile 1 4) (first tile)))

(defn rotate-tile-right
  "Rotate a tile counterclockwise"
  [tile]
  (into (subvec tile 3) (subvec tile 0 3)))

(defn rotate-tile
  "rotate a tile in the specified direction: > 0 = right otherwise left"
  [dir tile]
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

(def wall-name {0 :north 1 :east 2 :south 3 :west})

(defn open-walls [tile] (filter #(not (nil? %)) (map-indexed
                                  (fn [idx wall]
                                    (if (= :open wall) (wall-name idx) nil))
                                  tile)))

(def direction-fn {:north #(nth % 0) 
                   :east #(nth % 1) 
                   :south #(nth % 2) 
                   :west #(nth % 3)})

(defn wall-at
  "return the tile wall at the specified direction (:north, :east etc)"
  [tile side]
  ((direction-fn side) tile))

(defn side-open?
  "returns true if the wall at the specified side is open"
  [tile side]
  (= (wall-at tile side) :open))
