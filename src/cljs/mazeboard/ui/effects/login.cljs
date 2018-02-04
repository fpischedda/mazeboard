(ns mazeboard.ui.effects.login
  (:require
   [citrus.core :as citrus]))

(defn login [r username password]
  (citrus/dispatch! r
                    :login
                    :authenticate
                    username
                    password))

(defn logout [r]
  (citrus/dispatch! r :login :logout))
