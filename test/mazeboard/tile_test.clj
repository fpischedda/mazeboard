(ns mazeboard.tile-test
  (:require
   [clojure.test :refer [are deftest is testing]]
   [mazeboard.tile :as tile]))

(def the-tile (tile/make-tile :solid :solid :open :open))
(def solid-tile (tile/make-tile :solid :solid :solid :solid))

(deftest tile
  (testing "Tiles is composed of four elements"
    (is (= (tile/make-tile :solid :solid :solid :solid) [:solid :solid :solid :solid])))
  (testing "I can get the tile wall at :north :east :south :west"
    (are [direction type]
        (= (tile/wall-at the-tile direction) type)

      :north :solid
      :east  :solid
      :south :open
      :west  :open))
  
  (testing "I can check if a tile wall is open or not"
    (are [direction open?]
        (= (tile/side-open? the-tile direction) open?)

      :north false
      :east  false
      :south true
      :west  true))
  
  (testing "I can fetch the names of open walls in a tile"
    (is (= (tile/open-walls the-tile) [:south :west])))

  (testing "Tiles can be rotated clockwise or counterclockwise"
    (are [direction walls]
        (= (tile/rotate-tile :left the-tile) [:solid :open :open :solid])
      :left  [:solid :open :open :solid]
      :right [:open :solid :solid :open]))
  
  (testing "Tiles should not have four closed walls"
    (is (= (some #{:open} (tile/fix-solid-walls solid-tile)) :open)))
  )
