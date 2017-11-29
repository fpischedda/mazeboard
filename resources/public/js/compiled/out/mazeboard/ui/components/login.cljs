(ns mazeboard.ui.components.login
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [citrus.core :as citrus]
   [rum.core :as rum]
   [cljs.core.async :refer [<!]]
   [mazeboard.ui.dom :as dom]
   [mazeboard.ui.utils :refer [error-message show-message label-input]]
   [mazeboard.ui.config :as config]))

(rum/defc login-button [r]
  [:button {:on-click #(citrus/dispatch! r
                                         :login
                                         :authenticate
                                         (dom/elem-value "#username")
                                         (dom/elem-value "#password"))}
   "Login"])

(rum/defc login < rum/reactive [r]
  (let [{error :error profile :profile} (rum/react (citrus/subscription r [:login]))]
    [:div.login-box
     [:h2 "Mazeboard Dashboard"]
     [:div.login-form
      (label-input "Username"
                   {:type "text" :name "username" :id "username"})
      (label-input "Password"
                   {:type "password" :name "password" :id "password"})
      (login-button r)]
     [:div#messages error]]))

(rum/defc logout [r]
  (citrus/dispatch! r :login :logout)
  [:div "Logged out"])
