(ns mazeboard.data.games
  (:require [monger.collection :as mc]
            [monger.operators :refer :all]
            [monger.result :refer [updated-existing?]]
            [mazeboard.data.utils :refer [paged-filter gen-id]]
            [mazeboard.data.connection :refer [database]]
            [mazeboard.game :as game-logic]))

(defn create [user-id max-players board-size dice-type]
  (mc/insert-and-return database "games" {:_id (gen-id)
                                          :created-by user-id
                                          :max-players max-players
                                          :board-size board-size
                                          :dice-type dice-type
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

(defn filter-invalid-moves [board [type data]]
  [type (if (= :turn type)
          data
          (let [position (game-logic/game-current-player-position board)]
            (into [] (filter #(game-logic/valid-move?
                               position
                               (game-logic/calculate-next-position position %)
                               (:board board) %)
                             data))))])

(defn start [game-id user board move]
  "starts the specified game setting the first board status"
  (let [filtered-move (filter-invalid-moves board move)
        res (mc/update database "games"
                       {:_id game-id
                        :created-by user
                        :status :created}
                       {$set {:status :running
                              :turns [(assoc board :move filtered-move)]}})]
    (if (updated-existing? res)
      {:res :ok}
      {:errors [{:code :cannot-start-game :text "cannot start game"}]})))

(defn close [game-id user]
  (let [res (mc/update database "games"
                       {:_id game-id
                        :created-by user}
                       {$set {:status :closed}})]
    (if (updated-existing? res)
      {:res :ok}
      {:errors [{:code :cannot-close-game :text "cannot close game"}]})))

(defn update-max-players [game-id user max-players]
  "updates the maximum number of players remving extra players if needed"
  (let [res (mc/update database "games"
                       {:_id game-id
                        :status :created
                        :created-by user}
                       {$set {:max-players max-players}}
                       {$push {:players {$slice max-players}}})]
    (if (updated-existing? res)
      {:res :ok}
      {:errors [{:code :cannot-update-game :text "cannot update game"}]})))

(defn current-turn [game-id]
  (let [game (mc/find-one-as-map database "games"
                                 {:_id game-id :status :running}
                                 {:turns {$slice -1}})]
    (when-not (nil? game)
      (get-in game [:turns 0]))))
