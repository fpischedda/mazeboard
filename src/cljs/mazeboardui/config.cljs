(ns mazeboardui.config)

(def api-url "http://localhost:8080/api/v1/")

(def login-url (str api-url "login"))
(def profile-url (str api-url "profile"))
(def game-list-url (str api-url "game/"))
(def game-new-url (str api-url "game/"))
(defn game-detail-url [game-id]
  (str game-list-url game-id "/"))
