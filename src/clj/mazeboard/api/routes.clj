(ns mazeboard.api.routes
  (:require [compojure.core :refer [defroutes context GET POST PATCH DELETE ANY]]
            [mazeboard.game :as game]))

(defroutes routes
  (context "/api/v1" []
           (context "/invites" []
                    (GET / [] user-invites)
                    (POST / [] create-invite)
                    (DELETE "/:id" [] delete-invite))
           (context "/games" []
                    (GET / [] user-games)
                    (context "/:id" []
                             (POST "/:id" [] make-move)
                             (DELETE "/:id" [] abandon-game)))))

