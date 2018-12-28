(ns mazeboard.api.auth
  (:require
   [clj-time.core :as time]
   [compojure.core :refer [defroutes context POST]]
   [buddy.hashers :as hashers]
   [buddy.sign.jwt :as jwt]
   [cheshire.core :as json]
   [mazeboard.config :as config]
   [mazeboard.data.users :as users]
   [mazeboard.api.response :as response]))

(defn get-hash [text]
  (hashers/derive text))

(defn check-user-password [user password]
  (hashers/check password (:password user)))

(defn get-token-claims [username]
  {:usr username
   :exp (time/plus (time/now) (time/seconds (config/get :session-expiration-seconds)))})

(defn get-token [username]
  (jwt/sign (get-token-claims username) (config/get :auth-secret)))

(defn login-success-response [username]
  (response/json-success {:token (get-token username)
                          :username username}))

(def login-fail-response (response/error 401 {:code :login/invalid-credentials
                                              :text "Invalid credentials"}))

(defn login
  [request]
  (let [data (:params request)
        username (:username data)]
    (if-let [user (some? (users/get-by-username username))]
      (if (check-user-password user (:password data))
        (login-success-response username)
        login-fail-response)
      login-fail-response)))

(defn register [request]
  (let [data (:params request)
        username (:username data)]
    (if (nil? (users/get-by-username username))
      (do
        (users/create
          username
          (:email data)
          (get-hash (:password data)))
        (login-success-response username))
      (response/bad-request {:code :registration/user-exists
                             :text (str "Username " username " already exists")}))))

(def routes
  (context "/auth" []
           (POST "/login" [] login)
           (POST "/register" [] register)))
