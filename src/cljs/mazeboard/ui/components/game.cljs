(ns mazeboard.ui.components.game
  (:require
   [citrus.core :as citrus]
   [rum.core :as rum]
   [mazeboard.ui.utils :refer [tile-wall-classes]]))

(defn players-at-pos [players row-index col-index]
  "returns all players at the specified position"
  (filter players #(and (= (:row %1) row-index) (= (:col %1) col-index))))

(rum/defc tile [row-index col-index tile players]
  [:div.tile {:class (tile-wall-classes tile)}
   (map (players-at-pos players row-index col-index) #(:name %1))])

(rum/defc row [row-index row players]
  [:div.board-row
   (map-indexed row #(tile row-index %1 %2 players))])

(rum/defc board [{:keys [board players end-position]}]
  [:div.board
   (map-indexed (:tiles board) #(row %1 %2))])

(rum/defc game < rum/reactive [r]
  (let [{game :game} (rum/react (citrus/subscription r [:game]))])
  [:div
   [:h1 "Mazeboard game client"]
   (board game)])
