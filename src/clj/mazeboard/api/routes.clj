(ns mazeboard.api.routes
  (:require [mazeboard.api.auth :as auth]
            [mazeboard.api.invites :as invites]
            [mazeboard.api.games :as games]))

(def routes
  ["/api/v1" {:options
              (fn [_request]
                {:headers {"Access-Control-Allow-Origin" "*"
                           "Access-Control-Allow-Methods" "GET,PUT,POST,PATCH,DELETE,OPTIONS"
                           "Access-Control-Allow-Headers" "X-Requested-With,Content-Type,Cache-Control, Authorization"}})}
   auth/routes
   invites/routes
   games/routes])
