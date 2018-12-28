(ns mazeboard.api.routes
  (:require [compojure.core :refer [defroutes context GET POST DELETE ANY OPTIONS]]
            [mazeboard.api.auth :as auth]
            [mazeboard.api.invites :as invites]
            [mazeboard.api.games :as games]))

(defroutes routes
  (context "/api/v1" []
           (OPTIONS ":url{.*}" [url] "")
           auth/routes
           invites/routes
           games/routes))
