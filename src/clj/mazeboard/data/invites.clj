(ns mazeboard.data.invites
  (:require [monger.collection :as mc]
            [mazeboard.data.connection :refer [database]]))

(defn create [inviting-user invited-user]
  (mc/insert-and-return database "invites" {:inviting inviting-user
                                            :invited invited-user
                                            :status :created}))

(defn update-status [invite-id status]
  (mc/update-by-id database "invites" invite-id {:status status}))

(defn accept [invite-id]
  (update-status invite-id :accepted))

(defn decline [invite-id]
  (update-status invite-id :declined))
