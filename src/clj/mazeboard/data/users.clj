(ns mazeboard.data.users
  (:require [monger.collection :as mc]
            [buddy.hashers :as hashers]
            [mazeboard.data.utils :refer [paged-filter]]
            [mazeboard.data.connection :refer [database]]))

(defn get-hash [text]
  (hashers/derive text))

(defn all [page page-size]
  (paged-filter database "users" page page-size {}))

(defn create [username password]
  (mc/insert-and-return database "users" {:_id username
                                          :password (get-hash password)}))

(defn exists [username password]
  (let [user (mc/find-one-as-map database "users" {:_id username})]
    (hashers/check password (:password user))))

