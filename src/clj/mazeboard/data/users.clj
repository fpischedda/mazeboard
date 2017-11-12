(ns mazeboard.data.users
  (:require [monger.collection :as mc]
            [monger.query :as mq]
            [buddy.hashers :as hashers]
            [mazeboard.data.connection :refer [database]]))

(defn get-hash [text]
  hashers/derive text)

(defn paged-filter [page page-size filters-map]
  (mq/with-collection database "users"
    (mc/find-maps filters-map)
    (mq/skip (* page page-size))
    (mq/limit page-size)))

(defn all [page page-size]
  (paged-filter page page-size {}))

(defn create-user [username password]
  (mc/insert-and-return database "users" {:_id username
                                          :password (get-hash password)}))

