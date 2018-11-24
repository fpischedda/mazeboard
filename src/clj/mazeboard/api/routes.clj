(ns mazeboard.api.routes
  (:require [compojure.core :refer [defroutes context GET POST PATCH DELETE ANY OPTIONS]]
            [mazeboard.api.auth :refer [routes] :rename {routes auth-routes}]
            [mazeboard.api.invites :as invites]
            [mazeboard.api.games :refer [routes] :rename {routes games-routes}]))

(defroutes routes
  (context "/api/v1" []
           (OPTIONS ":url{.*}" [url] "")
           (auth-routes)
           (context "/invites" []
                    (GET "/" [] invites/received-by-user)
                    (POST "/" [] invites/create)
                    (context "/:id" [id]
                             (GET "/" [] invites/details)
                             (POST "/accept" [] invites/accept)
                             (POST "/decline" [] invites/decline)
                             (DELETE "/" [] invites/delete)))
           games-routes))
