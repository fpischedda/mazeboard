(ns mazeboard.ui.config)

(def api-url "http://localhost:8080/api/v1/")

(def login-url (str api-url "login"))
(def profile-url (str api-url "profile"))
(def game-list-url (str api-url "games/"))
(def game-new-url (str api-url "games/"))
(defn game-detail-url [game-id]
  (str game-list-url game-id "/"))
(defn game-start-url [game-id]
  (str (game-detail-url game-id) "start"))
(defn game-current-turn-url [game-id]
  (str (game-detail-url game-id) "current-turn"))
(defn game-make-move-url [game-id]
  (str (game-detail-url game-id) "make-move"))
