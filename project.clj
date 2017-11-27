(defproject mazeboard "0.1.0-SNAPSHOT"
  :description "An implementation of the Mazeboard game"
  :url "https://francesco.pischedda.info"
  :license {:name "AGPL V3 License"
            :url "https://www.gnu.org/licenses/agpl-3.0.en.html"}
  :dependencies [[org.clojure/clojure "1.9.0-beta4"]
                 [org.clojure/clojurescript "1.9.946"]
                 [http-kit "2.2.0"]
                 [liberator "0.15.1"]
                 [yogthos/config "0.9"]
                 [mount "0.1.11"]
                 [compojure "1.6.0"]
                 [ring "1.6.3"]
                 [rum "0.10.8"]
                 [org.roman01la/citrus "3.0.0"]
                 [bidi "2.1.2"]
                 [kibu/pushy "0.3.8"]
                 [venantius/accountant "0.2.0"]
                 [org.roman01la/citrus "3.0.0"]
                 [com.novemberain/monger "3.1.0"]
                 [buddy/buddy-hashers "1.3.0"]
                 [buddy/buddy-auth "2.1.0"]
                 [cheshire "5.8.0"]
                 [danlentz/clj-uuid "0.1.7"]
                 [cljs-http "0.1.43"]]
  :main ^:skip-aot mazeboard.core
  :plugins [[lein-ring "0.8.11"]
            [lein-midje "3.2.1"]
            [lein-cljsbuild "1.1.5"]
            [lein-figwheel "0.5.10-SNAPSHOT"]
            [org.clojure/tools.nrepl "0.2.12"]]
  :ring {:handler mazeboard.api/handler}
  :source-paths ["src/clj" "src/cljc"]
  :target-path "target/%s"
  :test-paths ["test" "test/mazeboard"]
  :profiles {:uberjar {:aot :all
                       :resource-paths ["config/prod"]}
             :dev {:dependencies [[midje "1.9.0-alpha11"]
                                  [lein-midje "3.2.1"]
                                  [org.clojure/tools.nrepl "0.2.12"]]
                   :resource-paths ["config/dev"]}}

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src/cljs" "src/cljc"]

                :figwheel {:on-jsload "mazeboardui.core/on-js-reload"}

                :compiler {:main mazeboardui.core
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/mazeboardui.js"
                           :output-dir "resources/public/js/compiled/out"
                           :source-map-timestamp true}}
               ;; This next build is an compressed minified build for
               ;; production. You can build this with:
               ;; lein cljsbuild once min
               {:id "min"
                :source-paths ["src/cljs" "src/common"]
                :compiler {:output-to "resources/public/js/compiled/mazeboardui.js"
                           :main mazeboardui.core
                           :optimizations :advanced
                           :pretty-print false}}]}

  :figwheel {;; :http-server-root "public" ;; default and assumes "resources"
             ;; :server-port 3449 ;; default
             ;; :server-ip "127.0.0.1"

             :css-dirs ["resources/public/css"] ;; watch and update CSS

             ;; Start an nREPL server into the running figwheel process
             ;; :nrepl-port 7888

             ;; Server Ring Handler (optional)
             ;; if you want to embed a ring handler into the figwheel http-kit
             ;; server, this is for simple ring servers, if this
             ;; doesn't work for you just run your own server :)
             ;; :ring-handler hello_world.server/handler

             ;; To be able to open files in your editor from the heads up display
             ;; you will need to put a script on your path.
             ;; that script will have to take a file path and a line number
             ;; ie. in  ~/bin/myfile-opener
             ;; #! /bin/sh
             ;; emacsclient -n +$2 $1
             ;;
             ;; :open-file-command "myfile-opener"

             ;; if you want to disable the REPL
             ;; :repl false

             ;; to configure a different figwheel logfile path
             ;; :server-logfile "tmp/logs/figwheel-logfile.log"
             })
