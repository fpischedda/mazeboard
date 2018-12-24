(ns mazeboard.api.response
  (:require
   [ring.util.response :refer [response]]
   [cheshire.core :as json]))

(defn json-response [status body]
  {:status status
   :body (json/encode body)})

(defn error [status & errors]
  (json-response status {:errors errors}))

(defn json-success [body]
  (response (json/encode body)))

(defn created [url]
  {:status 201
   :headers {"Location" url}})
