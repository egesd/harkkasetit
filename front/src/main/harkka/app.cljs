(ns harkka.app
  (:require [reagent.core :as r]
            [reagent.dom :as rd]))

(defn some-component []
  [:div
   [:h3 "I am a component!"]
   [:p.someclass
    "I have " [:strong "bold"]
    [:span {:style {:color "red"}} " and red"]
    " text."]])


(defn mountit []
  (rd/render [some-component]
             (.-body js/document)))


