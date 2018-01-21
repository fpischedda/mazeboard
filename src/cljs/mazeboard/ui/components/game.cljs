(ns mazeboard.ui.components.game
  (:require
   [citrus.core :as citrus]
   [rum.core :as rum]
   [mazeboard.ui.utils :refer [tile-wall-classes]]))

(defn players-at-pos [players row-index col-index]
  "returns all players at the specified position"
  (filter #(= {:row row-index :col col-index} (:position %)) players))

(rum/defc tile [row-index col-index tile players]
  [:div.tile {:class (tile-wall-classes tile)
              :key (str "tile-" row-index "-" col-index)}
   (map #(:name %) (players-at-pos players row-index col-index))])

(rum/defc row [row-index row players]
  [:div.board-row {:key (str "row-" row-index)}
   (map-indexed #(tile row-index %1 %2 players) row)])

(rum/defc board [{:keys [board players end-position]}]
  [:div.board
   (map-indexed #(row %1 %2 players) (:tiles board))])

(defn load-game [r game-id]
  (citrus/dispatch! r
                    :game
                    :load-game
                    game-id))

(rum/defc game < rum/reactive [r params]
  [:div
   [:h1 "Mazeboard game client"]
   [:a {:href "/"} "<-"]
   (let [{game :game} (rum/react (citrus/subscription r [:game]))]
     (if (nil? game)
       (do
         (load-game r (:id params))
         "Loading game...")
       (board game)))])
