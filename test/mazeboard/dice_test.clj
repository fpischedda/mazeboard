(ns mazeboard.dice-test
  (:require
   [clojure.test :refer [deftest is testing]]
   [mazeboard.dice :as dice]))

(deftest testing-dice
  (testing "Create a dice by specifying its type as a symbol"
    (is (= {:type ::dice/dice
            :faces [[:move [:up]] [:move [:left]]
                    [:move [:down]] [:move [:right]]
                    [:turn [:left]] [:turn [:right]]]}
           (dice/from-dice-type ::dice/dice))))

  (testing "Create a coin by specifying its type as a symbol"
    (is (= {:type ::dice/coin
            :faces [[:move [:left :right :up :down]]
                    [:turn [:left :right]]]}
           (dice/from-dice-type ::dice/coin))))
  )
