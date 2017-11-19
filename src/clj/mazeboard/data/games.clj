(ns mazeboard.data.games
  (:require [monger.collection :as mc]
            [monger.operators :refer :all]
            [mazeboard.data.connection :refer [database]]))

(defn create [user-id max-players]
  (mc/insert-and-return database "games" {:created-by user-id
                                          :max-players max-players
                                          :players [user-id]
                                          :players-size 1
                                          :status :created}))
(defn details [game-id]
  (mc/find-one-as-map database "games" {:_id game-id}))

(defn join [game-id user-id]
  (mc/update database "games"
             {:_id game-id :players-size {$lt :max-players}
              :players {$nin [user-id]} :status :created}
             {$addToSet {:players user-id} $inc {:players-size 1}}))

(defn leave [game-id user-id]
  (mc/update database "games"
             {:_id game-id
              :players {$in [user-id]} :status :created}
             {$pull {:players user-id} $inc {:players-size -1}}))

