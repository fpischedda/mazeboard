(ns mazeboard.ui.components.dashboard
  (:require
   [accountant.core :refer [navigate!]]
   [citrus.core :as citrus]
   [clojure.string :refer [join]]
   [rum.core :as rum]
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]
   [mazeboard.ui.dom :as dom]
   [mazeboard.ui.utils :refer [error-message show-message input label-input]]
   [mazeboard.ui.config :as config]))

(defn toggle-game-editing [game-id]
  (let [show-elem (dom/q (str "#item-show-" game-id))
        edit-elem (dom/q (str "#item-edit-" game-id))]
    (dom/toggle-class! show-elem "hidden")
    (dom/toggle-class! edit-elem "hidden")))

(rum/defc game-start [r game-id]
  [:button {:on-click (fn [e]
                        (toggle-game-editing game-id)
                        (citrus/dispatch! r
                                          :dashboard
                                          :start-game
                                          game-id))}
   "Start"])

(rum/defc game-delete [r game-id]
  [:button {:on-click (fn [e]
                          (toggle-game-editing game-id)
                          (citrus/dispatch! r
                                            :dashboard
                                            :delete-game
                                            game-id))}
   "Delete"])

(defn update-game [r game-id max-players]
  (citrus/dispatch! r
                    :dashboard
                    :update-game
                    game-id
                    max-players))

(rum/defc game-update [r game-id]
  [:button {:on-click (fn [e]
                        (toggle-game-editing game-id)
                        (update-game r game-id
                                     (dom/value
                                      (dom/q (str "#max-players-" game-id)))))}
   "Update"])

(rum/defc game-cancel-edit [game_id]
  [:button {:on-click #(toggle-game-editing game_id)} "Cancel"])

(defn create-game [r max-players board-size]
  (citrus/dispatch! r
                    :dashboard
                    :create-game
                    max-players
                    board-size))

(rum/defc game-new-button [r]
  [:button {:on-click (fn[e]
                        (create-game r
                                     (dom/value
                                      (dom/q "#max-players"))
                                     (dom/value
                                      (dom/q "#board-size"))))}
   "Create game"])

(rum/defc game-form-new [r]
  [:ul.new-game-form "Create new game"
   [:li (label-input "Max players"
                     {:type "text" :name "max-players" :id "max-players"})]
   [:li (label-input "Board size"
                    {:type "text" :name "board-size" :id "board-size"})]
   [:li (game-new-button r)]])

(defn single-or-list [value sep]
  (if (string? value)
    value
    (join sep value)))

(rum/defc game-item [r item]
  (let [{:keys [_id status created-by board-size max-players free-player-slots players]} item]
    [:tr.item {:on-click (fn [e] (toggle-game-editing _id)) :id (str "item-show-" _id) :key _id}
     [:td status] [:td created-by] [:td board-size] [:td max-players] [:td free-player-slots] [:td (single-or-list players " ")] [:td ""]]))

(rum/defc game-edit-item [r item]
  (let [{:keys [_id status created-by board-size max-players free-player-slots players]} item]
    [:tr.item-edit.hidden {:id (str "item-edit-" _id) :key _id}
     [:td status]
     [:td created-by]
     [:td board-size]
     [:td (input "text" (str "max-players-"  _id) max-players)]
     [:td free-player-slots]
     [:td (single-or-list players " ")]
     [:td (game-start r _id) (game-delete r _id) (game-update r _id) (game-cancel-edit _id)]]))

(rum/defc refresh-button [r]
  [:button.refresh-button {:on-click (fn [e] (citrus/dispatch! r
                                                        :dashboard
                                                        :load-games))}
   "Refresh"])

(defn game-lines [r game]
  [(game-item r game)
   (game-edit-item r game)])

(rum/defc game-list [r games]
  [:div.games
   [:h3 "Your games"]
   (refresh-button r)
   [:table.game-list
    [:thead
     [:tr
      [:td "Status"] [:td "Created by"] [:td "Board size"] [:td "Max players"] [:td "Slots left"] [:td "Players"] [:td ""]]]
    [:tbody
     (map #(game-lines r %1) games)]]
   [:div.new-game (game-form-new r)]])

(rum/defc dashboard < rum/reactive [r]
  (let [{:keys [token games]} (rum/react (citrus/subscription r [:dashboard]))]
    (cond
      (nil? token) (navigate! "/login")
      (nil? games) (citrus/dispatch! r
                                     :dashboard
                                     :load-games))
    [:div
     (game-list r games)]
    ))
