(ns mazeboard.ui.stylesheets.core
  (:require
   [garden.def :refer [defstyles]]))

(def default-padding "2px 10px")
(def small-padding "1px 5px")

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
    [:tbody {:background-color "#eaeaea"}]]])

