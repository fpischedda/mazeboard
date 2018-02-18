(ns mazeboard.game
  (:require [mazeboard.board :as board]
            [mazeboard.player :as player]
            [mazeboard.tile :as tile]
            [mazeboard.dice :as dice]))

(defn make-players [names width height]
  "creates players data based on names and board size"
  (let [corners [[0 0]
                 [0 (- width 1)]
                 [(- height 1) (- width 1)]
                 [(- height 1) 0]]]
    (map-indexed #(player/make-player %2 (get corners %1)) names)))

(defn make-fake-players [width height]
  "creates a couple of fake players"
  (make-players ["fra" "afr"] width height))

(defn init-game
  "creates a game as an hash map, if a tile function is not provided use tile/random-time"
  ([player-names width height dice-type]
   (init-game player-names width height dice-type tile/random-tile))

  ([player-names width height dice-type tile-fn]
   {:players (make-players player-names width height)
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

(defn tile-at-position [position board]
  "returns the tile at the specified position"
  (board/tile-at board
                 (:row position)
                 (:col position)))

(defn can-move-from-here? [position board direction]
  "returns true if the player can move from the specified position"
  (tile/is-open? direction (tile-at-position position board)))

(def swap-dir {:north :south :east :west :south :north :west :east})

(defn can-move-to-there? [position board direction]
  "returns true if the player can move to this position"
  (tile/is-open? (direction swap-dir) (tile-at-position position board)))

(defn valid-move? [position new-position game direction]
  "returns true if the new position is valid, false otherwise"
  (let [board (:board game)]
    (and (board/is-inside? board (:row new-position) (:col new-position))
         (can-move-from-here? position board direction)
         (can-move-to-there? new-position board direction))))

(def move-functions {:north {:row dec :col identity}
                     :south {:row inc :col identity}
                     :east  {:row identity :col inc}
                     :west  {:row identity :col dec}})

(defn calculate-next-position [position direction]
  "returns the new position based on current one and the move"
  (let [move-fn (direction move-functions)]
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
        position (player/player-position player)
        direction (:direction move)
        next-position (calculate-next-position position direction)]
    (if (valid-move? position next-position game direction)
      ((set-current-player-position game next-position)
       (assoc game :current-player (next-player)))
      game)))

(defn handle-rotation [game move]
  "handles the rotation of the specified tile"
  (let [row (:row move)
        col (:col move)
        dir (:direction move)]
    (board/rotate-board-tile game row col dir)))

(defn is-winning-position? [game position]
  "returns true if the specified position is the winning one"
  (= (:end-position game) position))

(defn winner [game]
  "returns the winner if any or nil"
  (first (filter #(is-winning-position? game (:position %)) (:players game))))

(defn handle-turn [game move]
  (let [move-type (:type move)
        move-data (:data move)]
    (if (= move-type :move)
     (handle-movement game move-data)
     (handle-rotation game move-data))))

(defn validate-move-format [game move user]
  (let [player (game-current-player game)]
    (if-not (= user (:username player))
      {:errors [{:type :wrong-player}]}
      (when-not (contains? #{:move :rotate} (:type move))
        :errors [{:type :wrong-move-type}]))))
