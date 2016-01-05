(ns mazeboard.dice)


(defn make-dice []
  "Create a dice (a dice is a vector of tuples in the form of :command :opt)"
  [[:move :up] [:move :left] [:move :down] [:move :right]
   [:turn :left] [:turn :right]])

(defn make-coin []
  "Create a coin (this is a vector of tuples in the form of :command :opt)"
  [[:move nil] [:turn nil]])

(defn roll-dice [dice]
  "return a random element of the dice"
  (get dice (rand-int (count dice))))
