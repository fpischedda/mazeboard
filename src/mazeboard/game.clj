(ns mazeboard.game
  (:require [clojure.pprint :as pprint]
            [mazeboard.board :as board]
            [mazeboard.tile :as tile]
            [mazeboard.dice :as dice]))

(defn make-player [name start-row start-col]
  "return a plist that defines a player with a name and a position"
  {:name name :position {:row start-row :col start-col}})

(defn make-fake-players [width height]
  "creates a couple of fake players"
  [(make-player "fra" 0 0)
   (make-player "arf" 0 (- width 1))])

(defn init-game 
  "creates a game as an hash map"
  ([players width height dice-type]
   (init-game players width height dice-type tile/random-tile))

  ([players width height dice-type tile-fn]
   {:players players
    :current-player 0
    :dice (if (= dice-type :dice)
            (dice/make-dice)
            (dice/make-coin))
    :board (board/make-board width height tile-fn)}))

(defmacro game-current-player [game]
  "returns the current player"
  (get (:players game) (:current-player game)))

(defmacro player-position [player]
  "returns the players position"
  (:position player))

(defmacro game-current-player-position [game]
  "returns the position of the current player"
  (player-position (game-current-player game)))

(defn tile-at-position [position game]
  "returns the tile at the specified position"
  (board/tile-at (:board game)
                 (:row position)
                 (:col position)))

(defn can-move-from-here [position game direction] 
  "returns true if the player can move from the specified position"
  (let [wall (tile/wall-at direction
                           (tile-at-position position game))]
    (= wall :open)))

(def swap-dir {:north :south :east :west :south :north :west :east})

(defn can-move-to-here [position game direction] 
  "returns true if the player can move to this position"
  (let [wall (tile/wall-at (direction swap-dir) 
                           (tile-at-position position game))]
    (= wall :open)))

(defn valid-move [position new-position game move]
  (and (can-move-from-here position game move)
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

(defn handle-movement [game move]
  "handle the movement of the current player"
  (let [player (game-current-player game)
        position (player-position player)
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

(defn handle-turn [game move]
  (let [move-type (get move 0)]
    (if (= move-type :move)
     (handle-movement game move)
     (handle-rotation game move))))

(defn print-game [game]
  (pprint/pprint game))
