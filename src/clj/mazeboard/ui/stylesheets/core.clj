(ns mazeboard.ui.stylesheets.core
  (:require
   [garden.def :refer [defstyles]]))

  (def default-padding "2px 10px")

(defstyles style
  [:.profile {:background-color "#eee" :padding default-padding}
   [:div {:display "flex" :justify-content "space-between"}
    [:.greeting {:text-color "#333"}]
    [:.logout {}]]])

