(ns mazeboard.game-test
  (:require
   [clojure.test :refer [are deftest is testing]]
   [mazeboard.game :as game]
   [mazeboard.tile :as tile]))

(def position {:row 1 :col 1})

(defn fake-tile-fn [] (tile/make-tile :solid :open :solid :open))

(def fake-tile (fake-tile-fn))

(def the-game (game/init-game
               (game/make-fake-players 5 5) 5 5 :coin fake-tile-fn))

(deftest test-game-utilities
  (testing "Use calculate-next-position to change the position"
    (are [direction expected]
        (= (game/calculate-next-position position direction) expected)

      :up    {:row 0 :col 1}
      :right {:row 1 :col 2}
      :down  {:row 2 :col 1}
      :left  {:row 1 :col 0}))
  
  (testing "Mapping a direction to its opposite"
    (are [direction opposite]
        (= (game/swap-dir direction) opposite)
    :up    :down
    :right :left
    :down  :up
    :left  :right))

  (testing "Testing tile-at-position"
    (is (= (game/tile-at-position {:row 0 :col 0} (:board the-game)) fake-tile)))

  (testing "Check if a provided position is a winning one"
    (is (= (game/is-winning-position? the-game {:row 0 :col 0}) false)))

  (testing "The player in the ending position is the winner"
    (is (nil? (game/winner the-game))))

  (testing "Assign positions for two players"
    (is (= (game/make-players ["one" "two"] 4 4)
           [{:name "one"
             :position {:row 0
                        :col 0}}
            {:name "two"
             :position {:row 0
                        :col 3}}
            ]))))
