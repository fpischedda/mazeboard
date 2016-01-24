(defproject mazeboard "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [liberator "0.13"]
                 [compojure "1.3.4"]
                 [ring/ring-core "1.2.1"]
                 ]
  :main ^:skip-aot mazeboard.core
  :plugins [[lein-ring "0.8.11"] [lein-midje "3.2"]]
  :ring {:handler mazeboard.api/handler}
  :target-path "target/%s"
  :test-paths ["test" "test/mazeboard"]
  :profiles {:uberjar {:aot :all}
             :dev {:dependencies [[midje "1.8.3"]]}})
