(ns mazeboard.ui.utils
  (:require
   [clojure.string :as string]
   [rum.core :as rum]
   [clojure.string :as str]))


(rum/defc input [type name value]
   [:input {:type type :name name :id name :value value :on-change (fn[e] false)}])

(rum/defc label-input [label property-map]
  [:label label
   [:input property-map]])

(defn error-message [response]
  (get-in response [:body :error :message]))

(rum/defc message-label [text]
  [:label.error text])

(defn show-message [element-id text]
  (rum/mount (message-label text)
             (js/document.getElementById element-id)))

(def wall-names {0 :north 1 :east 2 :south 3 :west})

(defn solid-wall-names [tile]
  (filter #(not (nil? %))
          (map-indexed (fn [idx wall]
                         (if (= wall :solid) (wall-names idx) nil))
                       tile)))

(defn keyword-to-class [wall]
  (str "solid-" wall))

(defn tile-wall-classes [tile]
  (string/join " " (map #(-> % name
                             keyword-to-class)
                        (solid-wall-names tile))))

(defn str->obj [text]
  (js->clj (.parse js/JSON text) :keywordize-keys true))

(defn obj->str [obj]
  (.stringify js/JSON (clj->js obj)))
