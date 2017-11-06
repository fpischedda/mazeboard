(ns mazeboard.api.games)

(defn user-games [req]
  {:status 200
   :headers {"Content-Type" "application/json"}
   :body "[]"})

(defn make-move []
  {:status 200
   :headers {"Content-Type" "application/json"}
   :body "[]"})

(defn abandon-game [req]
  {:status 200
   :headers {"Content-Type" "application/json"}
   :body "[]"})
