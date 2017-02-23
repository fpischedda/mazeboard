(ns mazeboard.game
  (:require [clojure.pprint :as pprint]
            [mazeboard.board :as board]
            [mazeboard.player :as player]
            [mazeboard.tile :as tile]
            [mazeboard.dice :as dice]))

(defn make-fake-players [width height]
  "creates a couple of fake players"
  [(player/make-player "fra" 0 0)
   (player/make-player "arf" 0 (- width 1))])

(defn init-game
  "creates a game as an hash map"
  ([players width height dice-type]
   (init-game players width height dice-type tile/random-tile))

  ([players width height dice-type tile-fn]
   {:players players
    :current-player 0
    :dice (dice/from-dice-type dice-type)
    :end-position {:row (int (/ height 2))
                   :col (int (/ width 2))}
    :board (board/make-board width height tile-fn)}))

(defn game-current-player [game]
  "returns the current player"
  (get (:players game) (:current-player game)))

(defn game-current-player-position [game]
  "returns the position of the current player"
  (player/player-position (game-current-player game)))

(defn tile-at-position [position game]
  "returns the tile at the specified position"
  (board/tile-at (:board game)
                 (:row position)
                 (:col position)))

(defn can-move-from-here [position game direction]
  "returns true if the player can move from the specified position"
  (tile/is-open? direction (tile-at-position position game)))

(def swap-dir {:north :south :east :west :south :north :west :east})

(defn can-move-to-here [position game direction]
  "returns true if the player can move to this position"
  (tile/is-open? (direction swap-dir) (tile-at-position position game)))

(defn valid-move [position new-position game move]
  "returns true if the new position is valid, false otherwise"
  (and (board/is-inside? (:board game) (:row new-position) (:col new-position))
       (can-move-from-here position game move)
       (can-move-to-here new-position game move)))

(def move-functions {:north {:row dec :col identity}
                     :south {:row inc :col identity}
                     :east  {:row identity :col inc}
                     :west  {:row identity :col dec}})

(defn calculate-next-position [position move]
  "returns the new position based on current one and the move"
  (let [move-fn ((get move 1) move-functions)]
    {:row ((:row move-fn) (:row position))
    :col ((:col move-fn) (:col position))}))

(defn set-current-player-position [game position]
  "sets the position for the current player"
  (assoc (game-current-player game) :position position))

(defn next-player [game]
  "returns the index of the next player"
  (let [player-index (:current-player game)]
    (if (= player-index (count (:players game)))
     0
     (inc player-index))))

(defn is-winning-position? [game position]
  "returns true if the specified position is the winning one"
  (= (:end-position game) position))

(defn handle-movement [game move]
  "handle the movement of the current player"
  (let [player (game-current-player game)
        position (player/player-position player)
        next-position (calculate-next-position position move)]
    (if (valid-move position next-position game move)
      ((set-current-player-position game next-position)
       (assoc game :current-player (next-player)))
      game)))

(defn handle-rotation [game move]
  "handles the rotation of the specified tile"
  (let [row (get move 2)
        col (get move 3)
        dir (get move 4)]
    (board/rotate-board-tile game row col dir)))

(defn winner [game]
  "returns the winner if any or nil"
  (first (filter #(is-winning-position? game (:position %)) (:players game))))

(defn handle-turn [game move]
  (let [move-type (get move 0)]
    (if (= move-type :move)
     (handle-movement game move)
     (handle-rotation game move))))

(defn print-game [game]
  (pprint/pprint game))
