(ns mazeboard.api.response
  (:require
   [ring.util.response :refer [response]]
   [cheshire.core :as json]))

(defn json-response [status body]
  {:status status
   :body (json/encode body)})

(defn bad-request [& errors]
  (json-response 400 {:errors errors}))

(defn error [status & errors]
  (json-response status {:errors errors}))

(defn json-success [body]
  (response (json/encode body)))

(defn created [url]
  {:status 201
   :headers {"Location" url}})

(defn accepted
  ([] {:status 202})
  ([url]
   {:status 202
    :headers {"Location" url}}))

(defn no-content []
  {:status 204})
