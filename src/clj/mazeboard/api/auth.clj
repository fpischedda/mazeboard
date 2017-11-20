(ns mazeboard.api.auth
  (:require [buddy.sign.jwt :as jwt]
            [cheshire.core :as json]
            [mazeboard.config :refer [config]]
            [mazeboard.data.users :as users]))

(defn login
  [request]
  (let [data (:params request)
        user-exists (users/exists (:username data)
                                  (:password data))
        token (jwt/sign {:user (:username data)} (:auth-secret config))]
    (if user-exists
      (json/encode {:token token})
      (json/encode {:errors [{:code :user-not-found
                              :text "user not found"}]}))))

(defn register [req]
  (let [data (:params req)
        user-id (:_id (users/create (:username data) (:password data)))
        token (jwt/sign {:user (:username data)} (:auth-secret config))]
    (if user-id
      (json/encode {:token token})
      (json/encode {:errors [{:code :unable-to-register
                              :text "unable to register"}]}))))
