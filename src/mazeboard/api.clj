(ns mazeboard.api
  (:require [liberator.core :refer [resource defresource]]
            [ring.middleware.params :refer [wrap-params]]
            [compojure.core :refer [defroutes ANY]]
            [mazeboard.game :as game]))

(defroutes app
  (ANY "/new-game" []
       (resource
         :available-media-types ["application/json"]
         :handle-ok (fn [context]
                      (game/init-game (game/make-fake-players 5 5) 5 5 :coin)))))

(def handler 
  (-> app 
      wrap-params))
