(ns mazeboard.ui
  (:require
   [citrus.core :as citrus]
   [rum.core :as rum]
   [hbfe.components.dashboard :as dashboard]
   [hbfe.components.profile :as profile]
   [hbfe.components.login :as login]))

(rum/defc App < rum/reactive [r]
  (let [{route :handler params :route-params} (rum/react (citrus/subscription r [:router]))
        {user :profile} (rum/react (citrus/subscription r [:login]))
        {token :token} (rum/react (citrus/subscription r [:dashboard]))]
    [:div
     (profile/bar user)
     [:p "New Dashboard based on rum and citrus"]
     (case route
       :dashboard (dashboard/dashboard r)
       :login (login/login r)
       :logout (login/logout r)
       (login/login r))]))

