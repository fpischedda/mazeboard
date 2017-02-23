(ns mazeboardui.core
  (:require [reagent.core :as reagent :refer [atom]]
            [clojure.string :as string]
            [mazeboard.player :as player]
            [mazeboard.board :as board]))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload

(def app-state (atom (board/make-board 10 10)))

(def player (atom (player/make-player "Player 1" 1 1)))

(def wall-names {0 :north 1 :east 2 :south 3 :west})

(defn solid-wall-names [tile]
  (filter #(not (nil? %))
          (map-indexed (fn [idx wall]
                         (if (= wall :solid) (wall-names idx) nil))
                       tile)))

(defn keyword-to-class [wall]
  (str "solid-" wall))

(defn tile-wall-classes [tile]
  (string/join " " (map #(-> % name
                             keyword-to-class)
                        (solid-wall-names tile))))

(defn tile-view [tile player]
  [:div.tile {:class (tile-wall-classes tile)}
    (when (not (nil? player)) (:name player))])

(defn board-row-view [row]
  [:div.board-row
   (doall (for [tile row] (tile-view tile player)))])

(defn board-view [board]
  [:div.board
   (doall (for [row (:tiles board)] (board-row-view row)))])

(defn game-view [game]
  [:div
   [:h1 "Mazeboard game client"]
   [board-view (:board @game)]])

(reagent/render-component [game-view app-state]
                          (. js/document (getElementById "app")))


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
