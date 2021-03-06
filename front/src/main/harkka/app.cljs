(ns harkka.app
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [reagent.dom :as rd]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [harkka.config :as config]))

(defn some-component []
  [:div
   [:h3 config/api-url]
   [:p.someclass
    "I have " [:strong "bold"]
    [:span {:style {:color "red"}} " and red"]
    " text."]])


(defn mountit []
  (rd/render [some-component]
             (.-body js/document)))


