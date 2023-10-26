(ns mazeboard.api.response
  (:require
   [ring.util.response :refer [response]]
   [cheshire.core :as json]))

(defn json-response [status body]
  {:status status
   :headers {"Content-Type" "application/json"}
   :body (json/encode body)})

(defn bad-request [& errors]
  (json-response 400 {:errors errors}))

(defn error [status & errors]
  (json-response status {:errors errors}))

(defn json-success [body]
  (response (json/encode body)))

(defn created [url]
  (json-response 201 {:href {:location url}}))

(defn accepted
  ([] {:status 202})
  ([url]
   (json-response 202 {:href {:location url}})))

(defn no-content []
  {:status 204})
