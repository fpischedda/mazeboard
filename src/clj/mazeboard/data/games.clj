(ns mazeboard.data.games
  (:require [monger.collection :as mc]
            [monger.operators :refer :all]
            [monger.result :refer [updated-existing?]]
            [mazeboard.data.utils :refer [paged-filter gen-id]]
            [mazeboard.data.connection :refer [database]]))

(defn create [user-id max-players]
  (mc/insert-and-return database "games" {:_id (gen-id)
                                          :created-by user-id
                                          :max-players max-players
                                          :players [user-id]
                                          :free-player-slots (- max-players 1)
                                          :status :created}))
(defn details [game-id]
  (mc/find-one-as-map database "games" {:_id game-id}))

(defn by-user [user-id page page-size]
  (paged-filter database "games" page page-size {:players {$in [user-id]}}))

(defn join [game-id user-id]
  (let [res (mc/update database "games"
                       {:_id game-id :free-player-slots {$gt 0}
                        :players {$nin [user-id]} :status :created}
                       {$addToSet {:players user-id} $inc {:free-player-slots -1}})]
    (if (updated-existing? res)
      {:res :ok}
      {:errors [{:code :unable-to-join :text "unable to join"}]})))

(defn leave [game-id user-id]
  (let [res (mc/update database "games"
                       {:_id game-id
                        :players {$in [user-id]} :status :created}
                       {$pull {:players user-id} $inc {:free-player-slots 1}})]
    (if (updated-existing? res)
      {:res :ok}
      {:errors [{:code :unable-to-leave :text "unable to leave"}]})))

(defn start [game-id board]
  (mc/update database "games"
             {:_id game-id
              :free-player-slots 0
              :status :created}
             {$set {:status :running :board-history [board]}}))

(defn close [game-id user]
  (let [res (mc/update database "games"
                       {:_id game-id
                        :created-by user}
                       {$set {:status :closed}})]
    (if (updated-existing? res)
      {:res :ok}
      {:errors [{:code :cannot-close-game :text "cannot close game"}]})))

(defn update [game-id user max-players]
  (let [res (mc/update database "games"
                       {:_id game-id
                        :status :created
                        :created-by user}
                       {$set {:max-players max-players}})]
    (if (updated-existing? res)
      {:res :ok}
      {:errors [{:code :cannot-update-game :text "cannot update game"}]})))
