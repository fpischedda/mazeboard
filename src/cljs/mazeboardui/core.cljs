(ns mazeboardui.core
  (:require [rum.core :as rum]
            [clojure.string :as string]
            [mazeboard.player :as player]
            [mazeboard.board :as board]
            [mazeboardui.handlers.local-storage :refer [local-storage]]
            [mazeboardui.handlers.navigation :refer [goto]]
            [mazeboardui.handlers.session :refer [set-token]]
            [mazeboardui.handlers.http :refer [http]]))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload

(def app-state (atom (board/make-board 10 10)))

(def player (atom (player/make-player "Player 1" 1 1)))

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
(rum/mount (ui/App reconciler)
           (dom/q "#app"))
(reagent/render-component [game-view app-state]
                          (. js/document (getElementById "app")))


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
