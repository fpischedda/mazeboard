(ns mazeboard.data.utils
  (:require [monger.collection :as mc]
            [monger.query :as mq]
            [clj-uuid :as uuid]
            [mazeboard.data.connection :refer [database]]))

(defn paged-filter [database collection page page-size filters-map]
  (mq/with-collection database collection
    (mc/find-maps filters-map)
    (mq/skip (* page page-size))
    (mq/limit page-size)))

(defn gen-id []
  (str (uuid/v1)))
