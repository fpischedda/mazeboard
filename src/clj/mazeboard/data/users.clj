(ns mazeboard.data.users
  (:require [monger.collection :as mc]
            [buddy.hashers :as hashers]
            [mazeboard.data.connection :refer [database]]))

(defn get-hash [text]
  hashers/derive text)

(defn create-user [username password]
  (mc/insert-and-return database "users" {:username username
                                          :password (get-hash password)}))

