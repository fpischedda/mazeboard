(ns mazeboard.ui.components.game
  (:require
   [citrus.core :as citrus]
   [rum.core :as rum]
   [mazeboard.ui.utils :refer [tile-wall-classes]]))

(rum/defc tile [tile player]
  [:div.tile {:class (tile-wall-classes tile)}
   (when (not (nil? player)) (:name player))])

(rum/defc board-row [row]
  [:div.board-row
   (doall (for [tile row] (tile tile nil)))])

(rum/defc board [board]
  [:div.board
   (doall (for [row (:tiles board)] (board-row row)))])

(rum/defc game [game]
  [:div
   [:h1 "Mazeboard game client"]
   [board (:board game)]])
