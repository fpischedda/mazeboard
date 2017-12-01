(ns mazeboard.ui.core
  (:require [accountant.core :refer [configure-navigation!]]
            [bidi.bidi :as bidi]
            [citrus.core :as citrus]
            [rum.core :as rum]
            [clojure.string :as string]
            [mazeboard.player :as player]
            [mazeboard.board :as board]
            [mazeboard.ui.dom :as dom]
            [mazeboard.ui.components.app :as app]
            [mazeboard.ui.controllers.dashboard :as dashboard]
            [mazeboard.ui.controllers.login :as login]
            [mazeboard.ui.controllers.router :as router-ctrl]
            [mazeboard.ui.handlers.local-storage :refer [local-storage]]
            [mazeboard.ui.handlers.navigation :refer [goto]]
            [mazeboard.ui.handlers.session :refer [set-token]]
            [mazeboard.ui.handlers.http :refer [http]]
            [mazeboard.ui.router :as router]))

(enable-console-print!)

(def routes
  ["/" [["" :dashboard]
        ["index.html" :login]
        ["login" :login]
        ["logout" :logout]
        [["game/" :id] :game]]])

(defonce reconciler
  (citrus/reconciler {:state (atom {})
                      :controllers {:dashboard dashboard/control
                                    :login login/control
                                    :router router-ctrl/control}
                      :effect-handlers {:http http
                                        :goto goto
                                        :set-token set-token
                                        :local-storage local-storage}}))

(citrus/broadcast-sync! reconciler :init)
(citrus/dispatch-sync! reconciler :login :load-profile :profile)

(router/start! #(citrus/dispatch! reconciler :router :push %) routes)

(configure-navigation!
 {
  :nav-handler #(citrus/dispatch! reconciler :router :push (bidi/match-route routes %))
  :path-exists? (fn [path]
                  (boolean (bidi/match-route routes path)))})
;; render
(rum/mount (app/App reconciler)
           (dom/q "#app"))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
