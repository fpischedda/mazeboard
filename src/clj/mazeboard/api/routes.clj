(ns mazeboard.api.routes
  (:require [compojure.core :refer [defroutes context GET POST PATCH DELETE ANY]]
            [mazeboard.api.auth :as auth]
            [mazeboard.api.invites :as invites]
            [mazeboard.api.games :as games]))

(defroutes routes
  (context "/api/v1" []
           (POST "/login" [] auth/login)
           (POST "/register" [] auth/register)
           (context "/invites" []
                    (GET "/" [] invites/received-by-user)
                    (POST "/" [] invites/create)
                    (context "/:id" [id]
                             (GET "/" [] invites/details)
                             (POST "/accept" [] invites/accept)
                             (POST "/decline" [] invites/decline)
                             (DELETE "/" [] invites/delete)))
           (context "/games" []
                    (GET "/" [] games/user-games)
                    (POST "/" [] games/create)
                    (context "/:id" [id]
                             (GET "/" [] games/make-move)
                             (POST "/move" [] games/make-move)
                             (DELETE "/" [] games/abandon-game)))))

