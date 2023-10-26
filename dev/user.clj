(ns user
  (:require [portal.api :as portal]))

(comment
  (def p (portal/open))

  (add-tap #'portal/submit)

  (require '[clojure.repl.deps :refer [add-lib]])

  (add-lib 'org.clojure/core.match)
  
  ,)
