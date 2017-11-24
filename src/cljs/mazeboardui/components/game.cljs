(ns mazeboardui.components.game
  (:require
   [citrus.core :as citrus]
   [rum.core :as rum]
   [mazeboad.utils :refer [tile-wall-classes]]))

(rum/defc tile-view [tile player]
  [:div.tile {:class (tile-wall-classes tile)}
   (when (not (nil? player)) (:name player))])

(rum/defc board-row-view [row]
  [:div.board-row
   (doall (for [tile row] (tile-view tile player)))])

(rum/defc board-view [board]
  [:div.board
   (doall (for [row (:tiles board)] (board-row-view row)))])

(rum/defc game-view [game]
  [:div
   [:h1 "Mazeboard game client"]
   [board-view (:board game)]])
