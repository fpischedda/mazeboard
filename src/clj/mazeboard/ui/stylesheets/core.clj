(ns mazeboard.ui.stylesheets.core
  (:require
   [garden.def :refer [defstyles]]))

(def default-padding "2px 10px")
(def small-padding "1px 5px")
(def wall "solid 4px red")

(defstyles style
  [:body {:background-color "#eee" :text-color "222" :padding default-padding}]
  [:.hidden {:display :none}]
  [:.profile {:background-color "#ddd" :padding small-padding}
   [:div {:display :flex :justify-content :space-between}
    [:.greeting {:text-color "#333"}]
    [:.logout {}]]]
  [:div.games {:padding small-padding}
   [:table {:border "1px black"}
    [:thead {:background-color "#dddddd"}]
    [:tbody {:background-color "#eaeaea"}]]]
  [:.tile {:float :left
              :background-color "#333300"
              :display :table
              :width "64px"
              :height "64px"
              :border "solid 4px black"
              :margin "0.2em"
              :color :white}]
  [:div.board-row {:clear :both}]
  [:dib.board {:margin-left :auto
               :margin-right :auto}]
  [:.solid-north {:border-top wall}]
  [:.solid-east {:border-right wall}]
  [:.solid-south {:border-bottom wall}]
  [:.solid-west {:border-left wall}])

