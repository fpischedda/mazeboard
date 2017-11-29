(ns mazeboardui.app
  (:require
   [citrus.core :as citrus]
   [rum.core :as rum]
   [mazeboardui.components.dashboard :as dashboard]
   [mazeboardui.components.profile :as profile]
   [mazeboardui.components.login :as login]))

(rum/defc App < rum/reactive [r]
  (let [{route :handler params :route-params} (rum/react (citrus/subscription r [:router]))
        {user :profile} (rum/react (citrus/subscription r [:login]))
        {token :token} (rum/react (citrus/subscription r [:dashboard]))]
    [:div
     (profile/bar user)
     [:p "Mazeboard UI"]
     (case route
       :dashboard (dashboard/dashboard r)
       :login (login/login r)
       :logout (login/logout r)
       (login/login r))]))

