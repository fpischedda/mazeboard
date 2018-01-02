(ns mazeboard.ui.controllers.dashboard
  (:require
   [mazeboard.ui.config :as config]
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
  (let [games (:body response)]
    {:state (assoc state :games games)}))

(defmethod control :game-list-loaded-error [event args state]
  {:state state})

(defmethod control :delete-game [event [game-id] state]
  {:state state
   :http {:url (config/game-detail-url game-id)
          :method :delete
          :params {:headers (auth-header (:token state))}
          :success-fn :game-deleted-successful
          :error-fn :game-deleted-error}})

(defmethod control :game-deleted-successful [event args state]
  (load-games-effect (:token state)))

(defmethod control :game-deleted-error [event args state]
  {:state state})

(defmethod control :create-game [event args state]
  (let [[max-players board-size] args]
    {:state state
     :http {:url config/game-new-url
            :method :post
            :success-fn :game-created-successful
            :error-fn :game-created-error
            :params {:headers (auth-header (:token state))
                     :with-credentials? false
                     :json-params {:max-players max-players
                                   :board-size board-size}}}}))

(defmethod control :game-created-successful [event args state]
  (load-games-effect (:token state)))

(defmethod control :game-created-error [event args state]
  {:state state})

(defmethod control :update-game [event args state]
  (let [[game-id max-players] args]
    {:state state
     :http {:url (config/game-detail-url game-id)
            :method :patch
            :success-fn :game-updated-successful
            :error-fn :game-updated-error
            :params {:headers (auth-header (:token state))
                     :with-credentials? false
                     :json-params {:max-players max-players}}}}))

(defmethod control :game-updated-successful [event args state]
  (load-games-effect (:token state)))

(defmethod control :game-updated-error [event args state]
  {:state state})

(defmethod control :start-game [event args state]
  (let [[game-id] args]
    {:state state
     :http {:url (config/game-start-url game-id)
            :method :post
            :success-fn :game-started-successful
            :error-fn :game-started-error
            :params {:headers (auth-header (:token state))
                     :with-credentials? false}}}))

(defmethod control :game-started-successful [event args state]
  (load-games-effect (:token state)))

(defmethod control :game-started-error [event args state]
  {:state state})
