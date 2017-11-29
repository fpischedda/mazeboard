(ns mazeboard.ui.handlers.navigation
  (:require
   [accountant.core :refer [navigate!]]))

(defn goto [_ _ {:keys [url]}]
  (navigate! url))
