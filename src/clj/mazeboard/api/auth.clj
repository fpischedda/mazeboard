(ns mazeboard.api.auth
  (:require
   [clj-time.core :as time]
   [compojure.core :refer [defroutes context POST]]
   [buddy.hashers :as hashers]
   [buddy.sign.jwt :as jwt]
   [cheshire.core :as json]
   [mazeboard.config :refer [config]]
   [mazeboard.data.users :as users]
   [mazeboard.api.response :as response]))

(defn get-hash [text]
  (hashers/derive text))

(defn check-user-password [user password]
  (hashers/check password (:password user)))

(defn get-token-claims [username]
  {:usr username
   :exp (time/plus (time/now) (time/seconds (:session-expiration-seconds config)))})

(defn get-token [username]
  (jwt/sign (get-token-claims username) (:auth-secret config)))

(defn succesful-login-response [username]
  (response/json-success {:token (get-token username)
                          :username username}))

(defn login
  [request]
  (let [data (:params request)
        username (:username data)]
    (if-let [user (some? (users/get-by-username username))]
      (if (check-user-password user (:password data))
        (succesful-login-response username)
        (response/error 401 {:code :login/invalid-credetials
                             :text "Invalid credentials"}))
      (response/error 400 {:code :login/user-not-found
                           :text "User not found"}))))

(defn register [request]
  (let [data (:params request)
        username (:username data)]
    (if-let [user (nil? (users/get-by-username username))]
      (response/error 400 {:code :registration/user-exists
                           :text ("Username " username " already exists")}))
    (do
      (users/create
       username
       (:email data)
       (:password data))
      (succesful-login-response username))))

(def routes (context "/auth" []
                     (POST "/login" [] login)
                     (POST "/register" [] register)))
