(ns mazeboard.api.authorization
  (:require
   [buddy.auth :refer [authenticated?]]
   [buddy.auth.accessrules :refer [error]]))

(defn any-access [req]
  true)

(defn authenticated-user
  [request]
  (println request)
  (if (authenticated? request)
    true
    (error "Only authenticated users allowed")))

(def rules [{:pattern #"^/api/v1/login$"
             :handler any-access}
            {:pattern #"^/api/v1/register$"
             :handler any-access}
            {:pattern #"^/.*"
             :handler authenticated-user}
            ])
