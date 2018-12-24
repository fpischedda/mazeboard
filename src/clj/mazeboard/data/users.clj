(ns mazeboard.data.users
  (:require [monger.collection :as mc]
            [mazeboard.data.utils :refer [paged-filter]]
            [mazeboard.data.connection :refer [database]]))

(def user-collection "users")

(defn all [page page-size]
  (paged-filter database user-collection page page-size {}))

(defn create [username email hashed-password]
  (mc/insert-and-return database user-collection {:_id username
                                                  :email email
                                                  :password hashed-password}))

(defn get-by-username [username]
  (mc/find-one-as-map database user-collection {:_id username}))
