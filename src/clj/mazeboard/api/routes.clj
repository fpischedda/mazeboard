(ns mazeboard.api.routes
  (:require [compojure.core :refer [defroutes context GET POST PATCH DELETE ANY]]
            [mazeboard.game :as game]))

(defn user-invites [req]
  "hello")

(defn create-invite [req]
  "hello")

(defn delete-invite [req]
  "hello")

(defn user-games [req]
  "hello")

(defn make-move [req]
  "hello")

(defn abandon-game [req]
  "hello")

(defroutes routes
  (context "/api/v1" []
           (context "/invites" []
                    (GET "/" [] user-invites)
                    (POST "/" [] create-invite)
                    (DELETE "/:id" [] delete-invite))
           (context "/games" []
                    (GET "/" [] user-games)
                    (context "/:id" []
                             (POST "/:id" [] make-move)
                             (DELETE "/:id" [] abandon-game)))))

