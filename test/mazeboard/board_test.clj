(ns mazeboard.board-test
  (:require
   [clojure.test :refer [deftest is testing]]
   [mazeboard.board :as board]
   [mazeboard.tile :as tile]))

(defn fake-tile-fn [] (tile/make-tile :solid :open :solid :open))

(def fake-tile (fake-tile-fn))

(def fake-row [fake-tile])

(def fake-board {:width 1 :height 1 :tiles [fake-row]})

(deftest board-utils
  (testing "making a row of width 1"
    (is (= fake-row
           (board/make-board-row 1 fake-tile-fn))))
  (testing "make-board with tile creation function"
    (is (= fake-board
           (board/make-board 1 1 fake-tile-fn))))
  (testing "get a tile with tile-at macro"
    (is (= fake-tile
           (board/tile-at fake-board 0 0))))
  (testing "check if a position is inside a board"
    (is (board/is-inside? fake-board 0 0)))
  (testing "update-board should replace the specified tile with the provided one"
    (is (= [:open :open :open :open]
           (board/tile-at
            (board/set-tile fake-board 0 0 [:open :open :open :open])
            0 0)))))
