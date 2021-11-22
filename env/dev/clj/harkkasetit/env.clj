(ns harkkasetit.env
  (:require
    [selmer.parser :as parser]
    [clojure.tools.logging :as log]
    [harkkasetit.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[harkkasetit started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[harkkasetit has shut down successfully]=-"))
   :middleware wrap-dev})
