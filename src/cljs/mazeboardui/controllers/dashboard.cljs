(ns mazeboardui.controllers.dashboard
  (:require
   [hbfe.config :as config]
   [clojure.string :refer [split]]))

(defn auth-header [token]
  {"Authorization" (str "Token " token)})

(defn load-games-effect [token]
  {:http
   {:url config/game-list-url
    :method :get
    :params {:headers (auth-header token)}
    :success-fn :game-list-loaded
    :error-fn :game-list-loaded-error}})

(def initial-state {})

(defmulti control (fn [event] event))

(defmethod control :init [event args state]
  {:state initial-state})

(defmethod control :set-token [event [token] state]
  {:state (assoc state :token token)})

(defmethod control :load-games [event args state]
  (load-games-effect (:token state)))

(defmethod control :game-list-loaded [event [response] state]
  (let [gamesitories (:body response)]
    {:state (assoc state :gamesitories gamesitories)}))

(defmethod control :game-list-loaded-error [event args state]
  {:state state})

(defmethod control :delete-game [event [game-id] state]
  {:state state
   :http {:url (config/gamesitory-detail-url game-id)
          :method :delete
          :params {:headers (auth-header (:token state))}
          :success-fn :game-deleted-successful
          :error-fn :game-deleted-error}})

(defmethod control :game-deleted-successful [event args state]
  (load-games-effect (:token state)))

(defmethod control :game-deleted-error [event args state]
  {:state state})

(defmethod control :create-game [event args state]
  (let [[name url branches targets] args
        tracked-branches (split branches #" ")
        target-list (split targets #" ")]
    {:state state
     :http {:url config/gamesitory-new-url
            :method :post
            :success-fn :game-created-successful
            :error-fn :game-created-error
            :params {:headers (auth-header (:token state))
                     :json-params {:name name
                                   :url url
                                   :tracked_branches tracked-branches
                                   :targets target-list}}}}))

(defmethod control :game-created-successful [event args state]
  (load-games-effect (:token state)))

(defmethod control :game-created-error [event args state]
  {:state state})

(defmethod control :update-game [event args state]
  (let [[game-id max-users] args]
    {:state state
     :http {:url (config/game-detail-url game-id)
            :method :patch
            :success-fn :game-updated-successful
            :error-fn :game-updated-error
            :params {:headers (auth-header (:token state))
                     :json-params {:max-players max-players}}}}))

(defmethod control :game-updated-successful [event args state]
  (load-games-effect (:token state)))

(defmethod control :game-updated-error [event args state]
  {:state state})
