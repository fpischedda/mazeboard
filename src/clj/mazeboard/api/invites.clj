(ns mazeboard.api.invites
  (:require
   [compojure.core :refer [defroutes context GET POST DELETE]]
   [mazeboard.data.invites :as invites]
   [mazeboard.api.response :refer [json-success]]))

(defn received-by-user [req]
  (json-success []))

(defn sent-by-user [req]
  (json-success []))

(defn create [req]
  (let [invitation (invites/create "usera" "userb")]
    (json-success invitation)))

(defn details [req]
  (json-success []))

(defn accept [req]
  (json-success []))

(defn decline [req]
  (json-success []))

(defn delete [req]
  (json-success []))

(def routes
  (context "/invites" []
           (GET "/" [] received-by-user)
           (POST "/" [] create)
           (context "/:id" [id]
                    (GET "/" [] details)
                    (POST "/accept" [] accept)
                    (POST "/decline" [] decline)
                    (DELETE "/" [] delete))))
