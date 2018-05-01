(ns mazeboard.ui.components.game
  (:require
   [citrus.core :as citrus]
   [rum.core :as rum]
   [mazeboard.ui.utils :refer [tile-wall-classes]]
   [mazeboard.ui.effects.game :refer [load-game]]))

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

(rum/defc current-turn [current-player move players]
  (let [player-name (:name (get players current-player))]
    [:div.turn "current turn"
     [:div.current-player (str player-name "'s turn")]
     [:div.move (str "player " player-name " can " (get move 0))]]))


(rum/defc board [{:keys [board players end-position current-player move]}]
  [:div.game
   [:div.board
    (map-indexed #(row %1 %2 players) (:tiles board))]
   [:div {:style {:clear :both}}]
   (current-turn current-player move players)])

(rum/defc game < rum/reactive [r params]
  [:div
   [:h1 "Mazeboard game client"]
   [:a {:href "/"} "<-"]
   (let [{game :game} (rum/react (citrus/subscription r [:game]))
         token (get-in (rum/react (citrus/subscription r [:login])))]
     (if (nil? game)
       (do
         (load-game r (:id token params))
         "Loading game...")
       (board game)))])
