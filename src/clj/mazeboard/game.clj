(ns mazeboard.game
  (:require [mazeboard.board :as board]
            [mazeboard.player :as player]
            [mazeboard.tile :as tile]
            [mazeboard.dice :as dice]))

(defn make-players
  "creates players data based on names and board size"
  [names width height]
  (let [corners [[0 0]
                 [0 (- width 1)]
                 [(- height 1) (- width 1)]
                 [(- height 1) 0]]]
    (map-indexed #(player/make-player %2 (get corners %1)) names)))

(defn make-fake-players
  "creates a couple of fake players"
  [width height]
  (make-players ["fra" "afr"] width height))

(defn init-game
  "creates a game as a map, if a tile function is not provided use tile/random-tile"
  ([player-names width height dice-type]
   (init-game player-names width height dice-type tile/random-tile))

  ([player-names width height dice-type tile-fn]
   {:players (make-players player-names width height)
    :current-player 0
    :dice (dice/from-dice-type dice-type)
    :end-position {:row (int (/ height 2))
                   :col (int (/ width 2))}
    :board (board/make-board width height tile-fn)}))

(defn game-current-player
  "returns the current player based on the current turn"
  [game]
  (let [players (:players game)]
    (nth players (mod (dec (:turn-number game)) (count players)))))

(defn game-current-player-position
  "returns the position of the current player"
  [game]
  (player/player-position (game-current-player game)))

(defn tile-at-position
  "returns the tile at the specified position"
  [position board]
  (board/tile-at board
                 (:row position)
                 (:col position)))

(defn can-move-from-here?
  "returns true if the player can move from the specified position"
  [position board direction]
  (tile/is-open? direction (tile-at-position position board)))

(def swap-dir {:up :down :right :left :down :up :left :right})

(defn can-move-to-there?
  "returns true if the player can move to this position"
  [position board direction]
  (tile/is-open? (direction swap-dir) (tile-at-position position board)))

(defn valid-move?
  "returns true if the new position is valid, false otherwise"
  [position new-position board direction]
  (and (board/is-inside? board (:row new-position) (:col new-position))
      (can-move-from-here? position board direction)
      (can-move-to-there? new-position board direction)))

(def move-functions {:up (fn [pos] (update pos :row dec))
                     :down (fn [pos] (update pos :row inc))
                     :right (fn [pos] (update pos :col inc))
                     :left (fn [pos] (update pos :col dec))})

(defn calculate-next-position
  "returns the new position based on current one and the move"
  [position direction]
  ((get move-functions direction) position))

(defn set-current-player-position
  "sets the position for the current player"
  [game position]
  (assoc (game-current-player game) :position position))

(defn handle-movement
  "handle the movement of the current player"
  [game move]
  (let [player (game-current-player game)
        position (player/player-position player)
        direction (:direction move)
        next-position (calculate-next-position position direction)]
    (if (valid-move? position next-position (:board game) direction)
      ((set-current-player-position game next-position)
       (update game :turn-number inc))
      game)))

(defn handle-rotation
  "handles the rotation of the specified tile"
  [game move]
  (let [{:keys [row col direction]} move]
    (board/rotate-board-tile game row col direction)))

(defn is-winning-position?
  "returns true if the specified position is the winning one"
  [game position]
  (= (:end-position game) position))

(defn winner
  "returns the winner if any or nil"
  [game]
  (first (filter #(is-winning-position? game (:position %)) (:players game))))

(defn handle-turn [game move]
  (let [move-type (:type move)
        move-data (:data move)]
    (if (= move-type :move)
     (handle-movement game move-data)
     (handle-rotation game move-data))))

(defn validate-move [game move user]
  (let [player (game-current-player game)]
    (if-not (= user (:username player))
      {:errors [{:type :wrong-player}]}
      (when-not (contains? #{:move :rotate} (:type move))
        {:errors [{:type :wrong-move-type}]}))))
