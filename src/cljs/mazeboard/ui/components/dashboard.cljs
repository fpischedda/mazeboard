(ns mazeboard.ui.components.dashboard
  (:require
   [accountant.core :refer [navigate!]]
   [citrus.core :as citrus]
   [clojure.string :refer [join]]
   [rum.core :as rum]
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]
   [mazeboard.ui.dom :as dom]
   [mazeboard.ui.effects.dashboard :refer [create-game start-game delete-game update-game load-games]]
   [mazeboard.ui.utils :refer [error-message show-message input label-input]]
   [mazeboard.ui.config :as config]))

(defn toggle-game-editing [game-id]
  (let [show-elem (dom/q (str "#item-show-" game-id))
        edit-elem (dom/q (str "#item-edit-" game-id))]
    (dom/toggle-class! show-elem "hidden")
    (dom/toggle-class! edit-elem "hidden")))

(rum/defc game-start [r token game-id]
  [:button {:on-click (fn [e]
                        (toggle-game-editing game-id)
                        (start-game r token game-id))}
   "Start"])

(rum/defc game-delete [r token game-id]
  [:button {:on-click (fn [e]
                        (toggle-game-editing game-id)
                        (delete-game r token game-id))}
   "Delete"])

(rum/defc game-update [r token game-id]
  [:button {:on-click (fn [e]
                        (toggle-game-editing game-id)
                        (update-game r
                                     token
                                     game-id
                                     (dom/value
                                      (dom/q (str "#max-players-" game-id)))))}
   "Update"])

(rum/defc game-cancel-edit [game_id]
  [:button {:on-click #(toggle-game-editing game_id)} "Cancel"])

(rum/defc game-new-button [r token]
  [:button {:on-click (fn[e]
                        (create-game r
                                     token
                                     (dom/value
                                      (dom/q "#max-players"))
                                     (dom/value
                                      (dom/q "#board-size"))))}
   "Create game"])

(rum/defc game-form-new [r token]
  [:ul.new-game-form "Create new game"
   [:li (label-input "Max players"
                     {:type "text" :name "max-players" :id "max-players"})]
   [:li (label-input "Board size"
                     {:type "text" :name "board-size" :id "board-size"})]
   [:li (game-new-button r token)]])

(defn single-or-list [value sep]
  (if (string? value)
    value
    (join sep value)))

(defn play-game [game-id]
  (navigate! (str "/game/" game-id)))

(rum/defc game-item [r token item]
  (let [{:keys [_id status created-by board-size max-players free-player-slots players]} item]
    [:tr.item {:on-click (if (= "running" status)
                           (fn [e] (play-game _id))
                           (fn [e] (toggle-game-editing _id))) :id (str "item-show-" _id) :key _id}
     [:td status] [:td created-by] [:td board-size] [:td max-players] [:td free-player-slots] [:td (single-or-list players " ")] [:td ""]]))

(rum/defc game-edit-item [r token item]
  (let [{:keys [_id status created-by board-size max-players free-player-slots players]} item]
    [:tr.item-edit.hidden {:id (str "item-edit-" _id) :key _id}
     [:td status]
     [:td created-by]
     [:td board-size]
     [:td (input "text" (str "max-players-" _id) max-players)]
     [:td free-player-slots]
     [:td (single-or-list players " ")]
     [:td
      (game-start r token _id)
      (game-delete r token _id)
      (game-update r token _id)
      (game-cancel-edit token _id)]]))

(rum/defc refresh-button [r token]
  [:button.refresh-button {:on-click #(load-games r token)}
   "Refresh"])

(defn game-lines [r token game]
  [(game-item r token game)
   (game-edit-item r token game)])

(rum/defc game-list [r token games]
  [:div.games
   [:h3 "Your games!!!"]
   (refresh-button r token)
   [:table.game-list
    [:thead
     [:tr
      [:td "Status"] [:td "Created by"] [:td "Board size"] [:td "Max players"] [:td "Slots left"] [:td "Players"] [:td ""]]]
    [:tbody
     (map #(game-lines r token %1) games)]]
   [:div.new-game (game-form-new r token)]])

(rum/defc dashboard < rum/reactive [r]
  (let [{games :games} (rum/react (citrus/subscription r [:dashboard]))
        token (get-in (rum/react (citrus/subscription r [:login])) [:profile :token])]
    (cond
      (nil? token) (navigate! "/login")
      (nil? games) (load-games r token))
    [:div
     (game-list r token games)]
    ))
