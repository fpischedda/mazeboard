(ns mazeboard.ui.components.profile
  (:require
   [rum.core :as rum]
   ))

(rum/defc bar [{:keys [token username email]}]
  [:div.profile
   (if (nil? token)
     [:a {:href "/login"} "Login"]
     [:div
      [:span.greeting (str "Hello " username)]
      [:span.logout [:a {:href "/logout"} "Logout"]]])])
