(ns mazeboard.api.t-auth
  (:use midje.sweet)
  (:require [ring.mock.request :as mock]
            [mount.core :as mount]
            [cheshire.core :as json]
            [mazeboard.config :as config]
            [mazeboard.data.users :as users]
            [mazeboard.api.auth :refer [get-hash]]
            [mazeboard.api.server :refer [gen-app]]))

(def login-payload {:username "test-user"
                    :password "one-password"})

(def login-fail-response
  {:status 401
   :body (json/encode {:errors [{:code :login/invalid-credentials,
                                 :text "Invalid credentials"}]})})

(def register-user-response {:status 200
                             :body (contains "token")})

(def register-user-payload {:username "test-user"
                            :email "test@mazeboard.com"
                            :password "one-password"})

(def register-user-exists-response
  {:status 400
   :body (json/encode {:errors [{:code :registration/user-exists
                                 :text "Username test-user already exists"}]})})

(def register-user-response {:status 200
                             :body (contains "token")})

(def api (gen-app "secret"))

(facts "Testing login"
  (fact "Failing login"
    (api (->
           (mock/request :post "/api/v1/auth/login")
           (mock/json-body login-payload))) => (contains login-fail-response)
    (provided (users/get-by-username "test-user") => nil))

  (fact "Successful login"
    (api (->
           (mock/request :post "/api/v1/auth/login")
           (mock/json-body login-payload))) => (contains login-fail-response)
    (provided
      (users/get-by-username (:username login-payload)) => {:_id (:username login-payload)
                                                            :password (get-hash (:password login-payload))})))

(facts "Testing registration"
  (fact "Register a user fails when username exists"
    (api
      (->
        (mock/request :post "/api/v1/auth/register")
        (mock/json-body register-user-payload))) => (contains register-user-exists-response)
    (provided
      (users/get-by-username (:username register-user-payload)) => {:_id "test-user"}))

  (fact "Register a user"
    (api
      (->
        (mock/request :post "/api/v1/auth/register")
        (mock/json-body register-user-payload))) => (contains register-user-response)
    (provided
      (config/get :session-expiration-seconds) => 100
      (config/get :auth-secret) => "secret"
      (users/get-by-username (:username register-user-payload)) => nil
      (users/create
        (:username register-user-payload)
        (:email register-user-payload)
        (get-hash (:password register-user-payload))) => {:_id "test-user"})))
