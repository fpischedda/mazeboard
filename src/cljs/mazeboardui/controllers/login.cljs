(ns mazeboard.ui.controllers.login
  (:require
   [mazeboard.ui.config :as config]))

(def initial-state {})

(defmulti control (fn [event] event))

(defmethod control :init []
  {:state initial-state})

(defmethod control :set-token [event _ state]
  {:state state})

(defmethod control :load-profile [_ [key]]
  {:local-storage
   {:op :get
    :key key
    :on-ready :profile-loaded}})

(defmethod control :profile-loaded [_ [raw-profile]]
  (let [profile (js->clj (.parse js/JSON raw-profile) :keywordize-keys true)]
    (if-not (nil? profile)
    {:state profile
     :set-token (get-in profile [:profile :token])
     :goto {:url "/"}}
    {:state initial-state})))

(defmethod control :authenticate [event args state]
  (let [[username password] args]
    {:state state
     :http {:url config/login-url
            :method :post
            :success-fn :login-successful
            :error-fn :login-error
            :params {:with-credentials? false
                     :form-params {:username username
                                   :password password}}}}))

(defmethod control :login-successful [event [response] state]
  (let [{:keys [error token username]} (:body response)
        profile {:profile {:token token
                           :username username
                           :email email}}]
    (if (nil? errors)
      {:state profile
       :local-storage {:op :set
                       :key :profile
                       :value (.stringify js/JSON (clj->js profile))}
       :set-token (get-in profile [:profile :token])
       :goto {:url "/"}}
      {:state {:error (get-in [0 :text] errors)}})))

(defmethod control :login-error [event args state]
  {:state {:error "Network error, please try again in a minute"}})

(defmethod control :logout [event args state]
  {:state {}
   :goto {:url "/login"}})
