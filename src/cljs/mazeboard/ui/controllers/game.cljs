(ns mazeboard.ui.controllers.game
  (:require
   [mazeboard.ui.config :as config]
   [mazeboard.ui.utils :refer [auth-header]]
   [mazeboard.ui.utils :refer [str->obj obj->str]]))

(defn load-turn-effect [token game-id]
  {:http
   {:url (config/game-current-turn-url game-id)
    :method :get
    :params {:headers (auth-header token)}
    :success-fn :game-turn-loaded
    :error-fn :game-turn-loaded-error}})

(def initial-state {})

(defmulti control (fn [event] event))

(defmethod control :init []
  {:state initial-state})

(defmethod control :set-token [event [token] state]
  {:state (assoc state :token token)})

(defmethod control :load-game [event [game-id] state]
  (load-turn-effect (:token state) game-id))

(defmethod control :game-turn-loaded [event [response] state]
  (let [body (:body response)]
    {:state (assoc state :game body)}))

(defmethod control :game-turn-loaded-error [event args state]
  {:state {:error "Network error, please try again in a minute"}})

(defmethod control :make-move [event args state]
  (let [[move parameters] args]
    {:state state
     :http {:url config/game-make-move-url
            :method :post
            :success-fn :make-move-successful
            :error-fn :make-move-error
            :params {:with-credentials? false
                     :json-params {:move move
                                   :parameters parameters}}}}))

(defmethod control :make-move-successful [event [response] state]
  (let [body (:body response)
        {:keys [token username errors]} body
        profile {:profile {:token token
                           :username username}}]
    (if (nil? errors)
      {:state profile
       :local-storage {:op :set
                       :key :profile
                       :value (obj->str profile)}
       :set-token token
       :goto {:url "/"}}
      {:state {:error (get-in [0 :text] errors)}})))
