(ns mazeboard.player)

(defn make-player [name start-row start-col]
  "return a plist that defines a player with a name and a position"
  {:name name :position {:row start-row :col start-col}})

(defn player-position [player]
  "returns the player's position"
  (:position player))
