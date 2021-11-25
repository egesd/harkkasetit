goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33982 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33982(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33983 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33983(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32644 = coll;
var G__32645 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32644,G__32645) : shadow.dom.lazy_native_coll_seq.call(null,G__32644,G__32645));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32683 = arguments.length;
switch (G__32683) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32717 = arguments.length;
switch (G__32717) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32730 = arguments.length;
switch (G__32730) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32754 = arguments.length;
switch (G__32754) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32847 = arguments.length;
switch (G__32847) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32852 = arguments.length;
switch (G__32852) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32858){if((e32858 instanceof Object)){
var e = e32858;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32858;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32862 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32863 = null;
var count__32864 = (0);
var i__32865 = (0);
while(true){
if((i__32865 < count__32864)){
var el = chunk__32863.cljs$core$IIndexed$_nth$arity$2(null,i__32865);
var handler_33991__$1 = ((function (seq__32862,chunk__32863,count__32864,i__32865,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32862,chunk__32863,count__32864,i__32865,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33991__$1);


var G__33992 = seq__32862;
var G__33993 = chunk__32863;
var G__33994 = count__32864;
var G__33995 = (i__32865 + (1));
seq__32862 = G__33992;
chunk__32863 = G__33993;
count__32864 = G__33994;
i__32865 = G__33995;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32862);
if(temp__5753__auto__){
var seq__32862__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32862__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32862__$1);
var G__33996 = cljs.core.chunk_rest(seq__32862__$1);
var G__33997 = c__4679__auto__;
var G__33998 = cljs.core.count(c__4679__auto__);
var G__33999 = (0);
seq__32862 = G__33996;
chunk__32863 = G__33997;
count__32864 = G__33998;
i__32865 = G__33999;
continue;
} else {
var el = cljs.core.first(seq__32862__$1);
var handler_34000__$1 = ((function (seq__32862,chunk__32863,count__32864,i__32865,el,seq__32862__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32862,chunk__32863,count__32864,i__32865,el,seq__32862__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34000__$1);


var G__34001 = cljs.core.next(seq__32862__$1);
var G__34002 = null;
var G__34003 = (0);
var G__34004 = (0);
seq__32862 = G__34001;
chunk__32863 = G__34002;
count__32864 = G__34003;
i__32865 = G__34004;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33017 = arguments.length;
switch (G__33017) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33022 = cljs.core.seq(events);
var chunk__33023 = null;
var count__33024 = (0);
var i__33025 = (0);
while(true){
if((i__33025 < count__33024)){
var vec__33039 = chunk__33023.cljs$core$IIndexed$_nth$arity$2(null,i__33025);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33039,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33039,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34006 = seq__33022;
var G__34007 = chunk__33023;
var G__34008 = count__33024;
var G__34009 = (i__33025 + (1));
seq__33022 = G__34006;
chunk__33023 = G__34007;
count__33024 = G__34008;
i__33025 = G__34009;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33022);
if(temp__5753__auto__){
var seq__33022__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33022__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33022__$1);
var G__34010 = cljs.core.chunk_rest(seq__33022__$1);
var G__34011 = c__4679__auto__;
var G__34012 = cljs.core.count(c__4679__auto__);
var G__34013 = (0);
seq__33022 = G__34010;
chunk__33023 = G__34011;
count__33024 = G__34012;
i__33025 = G__34013;
continue;
} else {
var vec__33042 = cljs.core.first(seq__33022__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33042,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33042,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34014 = cljs.core.next(seq__33022__$1);
var G__34015 = null;
var G__34016 = (0);
var G__34017 = (0);
seq__33022 = G__34014;
chunk__33023 = G__34015;
count__33024 = G__34016;
i__33025 = G__34017;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33054 = cljs.core.seq(styles);
var chunk__33055 = null;
var count__33056 = (0);
var i__33057 = (0);
while(true){
if((i__33057 < count__33056)){
var vec__33080 = chunk__33055.cljs$core$IIndexed$_nth$arity$2(null,i__33057);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33080,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33080,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34018 = seq__33054;
var G__34019 = chunk__33055;
var G__34020 = count__33056;
var G__34021 = (i__33057 + (1));
seq__33054 = G__34018;
chunk__33055 = G__34019;
count__33056 = G__34020;
i__33057 = G__34021;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33054);
if(temp__5753__auto__){
var seq__33054__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33054__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33054__$1);
var G__34022 = cljs.core.chunk_rest(seq__33054__$1);
var G__34023 = c__4679__auto__;
var G__34024 = cljs.core.count(c__4679__auto__);
var G__34025 = (0);
seq__33054 = G__34022;
chunk__33055 = G__34023;
count__33056 = G__34024;
i__33057 = G__34025;
continue;
} else {
var vec__33086 = cljs.core.first(seq__33054__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33086,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33086,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34026 = cljs.core.next(seq__33054__$1);
var G__34027 = null;
var G__34028 = (0);
var G__34029 = (0);
seq__33054 = G__34026;
chunk__33055 = G__34027;
count__33056 = G__34028;
i__33057 = G__34029;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33097_34030 = key;
var G__33097_34031__$1 = (((G__33097_34030 instanceof cljs.core.Keyword))?G__33097_34030.fqn:null);
switch (G__33097_34031__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34033 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_34033,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_34033,"aria-");
}
})())){
el.setAttribute(ks_34033,value);
} else {
(el[ks_34033] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33414){
var map__33416 = p__33414;
var map__33416__$1 = cljs.core.__destructure_map(map__33416);
var props = map__33416__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33416__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33420 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33420,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33420,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33420,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33428 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33428,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33428;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33440 = arguments.length;
switch (G__33440) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33462){
var vec__33463 = p__33462;
var seq__33464 = cljs.core.seq(vec__33463);
var first__33465 = cljs.core.first(seq__33464);
var seq__33464__$1 = cljs.core.next(seq__33464);
var nn = first__33465;
var first__33465__$1 = cljs.core.first(seq__33464__$1);
var seq__33464__$2 = cljs.core.next(seq__33464__$1);
var np = first__33465__$1;
var nc = seq__33464__$2;
var node = vec__33463;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33469 = nn;
var G__33470 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33469,G__33470) : create_fn.call(null,G__33469,G__33470));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33471 = nn;
var G__33472 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33471,G__33472) : create_fn.call(null,G__33471,G__33472));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33474 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33474,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33474,(1),null);
var seq__33478_34036 = cljs.core.seq(node_children);
var chunk__33479_34037 = null;
var count__33480_34039 = (0);
var i__33481_34040 = (0);
while(true){
if((i__33481_34040 < count__33480_34039)){
var child_struct_34041 = chunk__33479_34037.cljs$core$IIndexed$_nth$arity$2(null,i__33481_34040);
var children_34042 = shadow.dom.dom_node(child_struct_34041);
if(cljs.core.seq_QMARK_(children_34042)){
var seq__33508_34043 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34042));
var chunk__33510_34044 = null;
var count__33511_34045 = (0);
var i__33512_34046 = (0);
while(true){
if((i__33512_34046 < count__33511_34045)){
var child_34047 = chunk__33510_34044.cljs$core$IIndexed$_nth$arity$2(null,i__33512_34046);
if(cljs.core.truth_(child_34047)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34047);


var G__34048 = seq__33508_34043;
var G__34049 = chunk__33510_34044;
var G__34050 = count__33511_34045;
var G__34051 = (i__33512_34046 + (1));
seq__33508_34043 = G__34048;
chunk__33510_34044 = G__34049;
count__33511_34045 = G__34050;
i__33512_34046 = G__34051;
continue;
} else {
var G__34052 = seq__33508_34043;
var G__34053 = chunk__33510_34044;
var G__34054 = count__33511_34045;
var G__34055 = (i__33512_34046 + (1));
seq__33508_34043 = G__34052;
chunk__33510_34044 = G__34053;
count__33511_34045 = G__34054;
i__33512_34046 = G__34055;
continue;
}
} else {
var temp__5753__auto___34056 = cljs.core.seq(seq__33508_34043);
if(temp__5753__auto___34056){
var seq__33508_34058__$1 = temp__5753__auto___34056;
if(cljs.core.chunked_seq_QMARK_(seq__33508_34058__$1)){
var c__4679__auto___34059 = cljs.core.chunk_first(seq__33508_34058__$1);
var G__34060 = cljs.core.chunk_rest(seq__33508_34058__$1);
var G__34061 = c__4679__auto___34059;
var G__34062 = cljs.core.count(c__4679__auto___34059);
var G__34063 = (0);
seq__33508_34043 = G__34060;
chunk__33510_34044 = G__34061;
count__33511_34045 = G__34062;
i__33512_34046 = G__34063;
continue;
} else {
var child_34064 = cljs.core.first(seq__33508_34058__$1);
if(cljs.core.truth_(child_34064)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34064);


var G__34065 = cljs.core.next(seq__33508_34058__$1);
var G__34066 = null;
var G__34067 = (0);
var G__34068 = (0);
seq__33508_34043 = G__34065;
chunk__33510_34044 = G__34066;
count__33511_34045 = G__34067;
i__33512_34046 = G__34068;
continue;
} else {
var G__34069 = cljs.core.next(seq__33508_34058__$1);
var G__34070 = null;
var G__34071 = (0);
var G__34072 = (0);
seq__33508_34043 = G__34069;
chunk__33510_34044 = G__34070;
count__33511_34045 = G__34071;
i__33512_34046 = G__34072;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34042);
}


var G__34073 = seq__33478_34036;
var G__34074 = chunk__33479_34037;
var G__34075 = count__33480_34039;
var G__34076 = (i__33481_34040 + (1));
seq__33478_34036 = G__34073;
chunk__33479_34037 = G__34074;
count__33480_34039 = G__34075;
i__33481_34040 = G__34076;
continue;
} else {
var temp__5753__auto___34077 = cljs.core.seq(seq__33478_34036);
if(temp__5753__auto___34077){
var seq__33478_34078__$1 = temp__5753__auto___34077;
if(cljs.core.chunked_seq_QMARK_(seq__33478_34078__$1)){
var c__4679__auto___34079 = cljs.core.chunk_first(seq__33478_34078__$1);
var G__34080 = cljs.core.chunk_rest(seq__33478_34078__$1);
var G__34081 = c__4679__auto___34079;
var G__34082 = cljs.core.count(c__4679__auto___34079);
var G__34083 = (0);
seq__33478_34036 = G__34080;
chunk__33479_34037 = G__34081;
count__33480_34039 = G__34082;
i__33481_34040 = G__34083;
continue;
} else {
var child_struct_34084 = cljs.core.first(seq__33478_34078__$1);
var children_34085 = shadow.dom.dom_node(child_struct_34084);
if(cljs.core.seq_QMARK_(children_34085)){
var seq__33519_34086 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34085));
var chunk__33521_34087 = null;
var count__33522_34088 = (0);
var i__33523_34089 = (0);
while(true){
if((i__33523_34089 < count__33522_34088)){
var child_34090 = chunk__33521_34087.cljs$core$IIndexed$_nth$arity$2(null,i__33523_34089);
if(cljs.core.truth_(child_34090)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34090);


var G__34091 = seq__33519_34086;
var G__34092 = chunk__33521_34087;
var G__34093 = count__33522_34088;
var G__34094 = (i__33523_34089 + (1));
seq__33519_34086 = G__34091;
chunk__33521_34087 = G__34092;
count__33522_34088 = G__34093;
i__33523_34089 = G__34094;
continue;
} else {
var G__34095 = seq__33519_34086;
var G__34096 = chunk__33521_34087;
var G__34097 = count__33522_34088;
var G__34098 = (i__33523_34089 + (1));
seq__33519_34086 = G__34095;
chunk__33521_34087 = G__34096;
count__33522_34088 = G__34097;
i__33523_34089 = G__34098;
continue;
}
} else {
var temp__5753__auto___34099__$1 = cljs.core.seq(seq__33519_34086);
if(temp__5753__auto___34099__$1){
var seq__33519_34100__$1 = temp__5753__auto___34099__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33519_34100__$1)){
var c__4679__auto___34101 = cljs.core.chunk_first(seq__33519_34100__$1);
var G__34102 = cljs.core.chunk_rest(seq__33519_34100__$1);
var G__34103 = c__4679__auto___34101;
var G__34104 = cljs.core.count(c__4679__auto___34101);
var G__34105 = (0);
seq__33519_34086 = G__34102;
chunk__33521_34087 = G__34103;
count__33522_34088 = G__34104;
i__33523_34089 = G__34105;
continue;
} else {
var child_34106 = cljs.core.first(seq__33519_34100__$1);
if(cljs.core.truth_(child_34106)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34106);


var G__34107 = cljs.core.next(seq__33519_34100__$1);
var G__34108 = null;
var G__34109 = (0);
var G__34110 = (0);
seq__33519_34086 = G__34107;
chunk__33521_34087 = G__34108;
count__33522_34088 = G__34109;
i__33523_34089 = G__34110;
continue;
} else {
var G__34111 = cljs.core.next(seq__33519_34100__$1);
var G__34112 = null;
var G__34113 = (0);
var G__34114 = (0);
seq__33519_34086 = G__34111;
chunk__33521_34087 = G__34112;
count__33522_34088 = G__34113;
i__33523_34089 = G__34114;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34085);
}


var G__34115 = cljs.core.next(seq__33478_34078__$1);
var G__34116 = null;
var G__34117 = (0);
var G__34118 = (0);
seq__33478_34036 = G__34115;
chunk__33479_34037 = G__34116;
count__33480_34039 = G__34117;
i__33481_34040 = G__34118;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33574 = cljs.core.seq(node);
var chunk__33575 = null;
var count__33576 = (0);
var i__33577 = (0);
while(true){
if((i__33577 < count__33576)){
var n = chunk__33575.cljs$core$IIndexed$_nth$arity$2(null,i__33577);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34119 = seq__33574;
var G__34120 = chunk__33575;
var G__34121 = count__33576;
var G__34122 = (i__33577 + (1));
seq__33574 = G__34119;
chunk__33575 = G__34120;
count__33576 = G__34121;
i__33577 = G__34122;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33574);
if(temp__5753__auto__){
var seq__33574__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33574__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33574__$1);
var G__34123 = cljs.core.chunk_rest(seq__33574__$1);
var G__34124 = c__4679__auto__;
var G__34125 = cljs.core.count(c__4679__auto__);
var G__34126 = (0);
seq__33574 = G__34123;
chunk__33575 = G__34124;
count__33576 = G__34125;
i__33577 = G__34126;
continue;
} else {
var n = cljs.core.first(seq__33574__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34127 = cljs.core.next(seq__33574__$1);
var G__34128 = null;
var G__34129 = (0);
var G__34130 = (0);
seq__33574 = G__34127;
chunk__33575 = G__34128;
count__33576 = G__34129;
i__33577 = G__34130;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33585 = arguments.length;
switch (G__33585) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33596 = arguments.length;
switch (G__33596) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33621 = arguments.length;
switch (G__33621) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34144 = arguments.length;
var i__4865__auto___34145 = (0);
while(true){
if((i__4865__auto___34145 < len__4864__auto___34144)){
args__4870__auto__.push((arguments[i__4865__auto___34145]));

var G__34146 = (i__4865__auto___34145 + (1));
i__4865__auto___34145 = G__34146;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33651_34147 = cljs.core.seq(nodes);
var chunk__33652_34148 = null;
var count__33653_34149 = (0);
var i__33654_34150 = (0);
while(true){
if((i__33654_34150 < count__33653_34149)){
var node_34151 = chunk__33652_34148.cljs$core$IIndexed$_nth$arity$2(null,i__33654_34150);
fragment.appendChild(shadow.dom._to_dom(node_34151));


var G__34152 = seq__33651_34147;
var G__34153 = chunk__33652_34148;
var G__34154 = count__33653_34149;
var G__34155 = (i__33654_34150 + (1));
seq__33651_34147 = G__34152;
chunk__33652_34148 = G__34153;
count__33653_34149 = G__34154;
i__33654_34150 = G__34155;
continue;
} else {
var temp__5753__auto___34156 = cljs.core.seq(seq__33651_34147);
if(temp__5753__auto___34156){
var seq__33651_34157__$1 = temp__5753__auto___34156;
if(cljs.core.chunked_seq_QMARK_(seq__33651_34157__$1)){
var c__4679__auto___34158 = cljs.core.chunk_first(seq__33651_34157__$1);
var G__34159 = cljs.core.chunk_rest(seq__33651_34157__$1);
var G__34160 = c__4679__auto___34158;
var G__34161 = cljs.core.count(c__4679__auto___34158);
var G__34162 = (0);
seq__33651_34147 = G__34159;
chunk__33652_34148 = G__34160;
count__33653_34149 = G__34161;
i__33654_34150 = G__34162;
continue;
} else {
var node_34163 = cljs.core.first(seq__33651_34157__$1);
fragment.appendChild(shadow.dom._to_dom(node_34163));


var G__34164 = cljs.core.next(seq__33651_34157__$1);
var G__34165 = null;
var G__34166 = (0);
var G__34167 = (0);
seq__33651_34147 = G__34164;
chunk__33652_34148 = G__34165;
count__33653_34149 = G__34166;
i__33654_34150 = G__34167;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33643){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33643));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33677_34168 = cljs.core.seq(scripts);
var chunk__33678_34169 = null;
var count__33679_34170 = (0);
var i__33680_34171 = (0);
while(true){
if((i__33680_34171 < count__33679_34170)){
var vec__33702_34172 = chunk__33678_34169.cljs$core$IIndexed$_nth$arity$2(null,i__33680_34171);
var script_tag_34173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33702_34172,(0),null);
var script_body_34174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33702_34172,(1),null);
eval(script_body_34174);


var G__34175 = seq__33677_34168;
var G__34176 = chunk__33678_34169;
var G__34177 = count__33679_34170;
var G__34178 = (i__33680_34171 + (1));
seq__33677_34168 = G__34175;
chunk__33678_34169 = G__34176;
count__33679_34170 = G__34177;
i__33680_34171 = G__34178;
continue;
} else {
var temp__5753__auto___34179 = cljs.core.seq(seq__33677_34168);
if(temp__5753__auto___34179){
var seq__33677_34180__$1 = temp__5753__auto___34179;
if(cljs.core.chunked_seq_QMARK_(seq__33677_34180__$1)){
var c__4679__auto___34181 = cljs.core.chunk_first(seq__33677_34180__$1);
var G__34182 = cljs.core.chunk_rest(seq__33677_34180__$1);
var G__34183 = c__4679__auto___34181;
var G__34184 = cljs.core.count(c__4679__auto___34181);
var G__34185 = (0);
seq__33677_34168 = G__34182;
chunk__33678_34169 = G__34183;
count__33679_34170 = G__34184;
i__33680_34171 = G__34185;
continue;
} else {
var vec__33710_34186 = cljs.core.first(seq__33677_34180__$1);
var script_tag_34187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33710_34186,(0),null);
var script_body_34188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33710_34186,(1),null);
eval(script_body_34188);


var G__34189 = cljs.core.next(seq__33677_34180__$1);
var G__34190 = null;
var G__34191 = (0);
var G__34192 = (0);
seq__33677_34168 = G__34189;
chunk__33678_34169 = G__34190;
count__33679_34170 = G__34191;
i__33680_34171 = G__34192;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33714){
var vec__33715 = p__33714;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33715,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33715,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33723 = arguments.length;
switch (G__33723) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33732 = cljs.core.seq(style_keys);
var chunk__33733 = null;
var count__33734 = (0);
var i__33735 = (0);
while(true){
if((i__33735 < count__33734)){
var it = chunk__33733.cljs$core$IIndexed$_nth$arity$2(null,i__33735);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34198 = seq__33732;
var G__34199 = chunk__33733;
var G__34200 = count__33734;
var G__34201 = (i__33735 + (1));
seq__33732 = G__34198;
chunk__33733 = G__34199;
count__33734 = G__34200;
i__33735 = G__34201;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33732);
if(temp__5753__auto__){
var seq__33732__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33732__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33732__$1);
var G__34202 = cljs.core.chunk_rest(seq__33732__$1);
var G__34203 = c__4679__auto__;
var G__34204 = cljs.core.count(c__4679__auto__);
var G__34205 = (0);
seq__33732 = G__34202;
chunk__33733 = G__34203;
count__33734 = G__34204;
i__33735 = G__34205;
continue;
} else {
var it = cljs.core.first(seq__33732__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34206 = cljs.core.next(seq__33732__$1);
var G__34207 = null;
var G__34208 = (0);
var G__34209 = (0);
seq__33732 = G__34206;
chunk__33733 = G__34207;
count__33734 = G__34208;
i__33735 = G__34209;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k33737,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__33743 = k33737;
var G__33743__$1 = (((G__33743 instanceof cljs.core.Keyword))?G__33743.fqn:null);
switch (G__33743__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33737,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__33747){
var vec__33748 = p__33747;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33748,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33748,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33736){
var self__ = this;
var G__33736__$1 = this;
return (new cljs.core.RecordIter((0),G__33736__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33738,other33739){
var self__ = this;
var this33738__$1 = this;
return (((!((other33739 == null)))) && ((((this33738__$1.constructor === other33739.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33738__$1.x,other33739.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33738__$1.y,other33739.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33738__$1.__extmap,other33739.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k33737){
var self__ = this;
var this__4509__auto____$1 = this;
var G__33751 = k33737;
var G__33751__$1 = (((G__33751 instanceof cljs.core.Keyword))?G__33751.fqn:null);
switch (G__33751__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33737);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__33736){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__33752 = cljs.core.keyword_identical_QMARK_;
var expr__33753 = k__4511__auto__;
if(cljs.core.truth_((pred__33752.cljs$core$IFn$_invoke$arity$2 ? pred__33752.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33753) : pred__33752.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33753)))){
return (new shadow.dom.Coordinate(G__33736,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33752.cljs$core$IFn$_invoke$arity$2 ? pred__33752.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33753) : pred__33752.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33753)))){
return (new shadow.dom.Coordinate(self__.x,G__33736,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__33736),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__33736){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33736,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33741){
var extmap__4542__auto__ = (function (){var G__33756 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33741,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33741)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33756);
} else {
return G__33756;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33741),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33741),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k33765,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__33769 = k33765;
var G__33769__$1 = (((G__33769 instanceof cljs.core.Keyword))?G__33769.fqn:null);
switch (G__33769__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33765,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__33784){
var vec__33785 = p__33784;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33785,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33785,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33764){
var self__ = this;
var G__33764__$1 = this;
return (new cljs.core.RecordIter((0),G__33764__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33766,other33767){
var self__ = this;
var this33766__$1 = this;
return (((!((other33767 == null)))) && ((((this33766__$1.constructor === other33767.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33766__$1.w,other33767.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33766__$1.h,other33767.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33766__$1.__extmap,other33767.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k33765){
var self__ = this;
var this__4509__auto____$1 = this;
var G__33816 = k33765;
var G__33816__$1 = (((G__33816 instanceof cljs.core.Keyword))?G__33816.fqn:null);
switch (G__33816__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33765);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__33764){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__33817 = cljs.core.keyword_identical_QMARK_;
var expr__33818 = k__4511__auto__;
if(cljs.core.truth_((pred__33817.cljs$core$IFn$_invoke$arity$2 ? pred__33817.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33818) : pred__33817.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33818)))){
return (new shadow.dom.Size(G__33764,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33817.cljs$core$IFn$_invoke$arity$2 ? pred__33817.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33818) : pred__33817.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33818)))){
return (new shadow.dom.Size(self__.w,G__33764,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__33764),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__33764){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33764,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33768){
var extmap__4542__auto__ = (function (){var G__33821 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33768,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33768)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33821);
} else {
return G__33821;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33768),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33768),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__34219 = (i + (1));
var G__34220 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34219;
ret = G__34220;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33834){
var vec__33838 = p__33834;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33838,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33838,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33845 = arguments.length;
switch (G__33845) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34222 = ps;
var G__34223 = (i + (1));
el__$1 = G__34222;
i = G__34223;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33850 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33850,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33850,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33850,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33855_34224 = cljs.core.seq(props);
var chunk__33856_34225 = null;
var count__33857_34226 = (0);
var i__33858_34227 = (0);
while(true){
if((i__33858_34227 < count__33857_34226)){
var vec__33867_34228 = chunk__33856_34225.cljs$core$IIndexed$_nth$arity$2(null,i__33858_34227);
var k_34229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33867_34228,(0),null);
var v_34230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33867_34228,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_34229);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34229),v_34230);


var G__34232 = seq__33855_34224;
var G__34233 = chunk__33856_34225;
var G__34234 = count__33857_34226;
var G__34235 = (i__33858_34227 + (1));
seq__33855_34224 = G__34232;
chunk__33856_34225 = G__34233;
count__33857_34226 = G__34234;
i__33858_34227 = G__34235;
continue;
} else {
var temp__5753__auto___34236 = cljs.core.seq(seq__33855_34224);
if(temp__5753__auto___34236){
var seq__33855_34237__$1 = temp__5753__auto___34236;
if(cljs.core.chunked_seq_QMARK_(seq__33855_34237__$1)){
var c__4679__auto___34238 = cljs.core.chunk_first(seq__33855_34237__$1);
var G__34239 = cljs.core.chunk_rest(seq__33855_34237__$1);
var G__34240 = c__4679__auto___34238;
var G__34241 = cljs.core.count(c__4679__auto___34238);
var G__34242 = (0);
seq__33855_34224 = G__34239;
chunk__33856_34225 = G__34240;
count__33857_34226 = G__34241;
i__33858_34227 = G__34242;
continue;
} else {
var vec__33870_34243 = cljs.core.first(seq__33855_34237__$1);
var k_34244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33870_34243,(0),null);
var v_34245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33870_34243,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_34244);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34244),v_34245);


var G__34246 = cljs.core.next(seq__33855_34237__$1);
var G__34247 = null;
var G__34248 = (0);
var G__34249 = (0);
seq__33855_34224 = G__34246;
chunk__33856_34225 = G__34247;
count__33857_34226 = G__34248;
i__33858_34227 = G__34249;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33874 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33874,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33874,(1),null);
var seq__33877_34250 = cljs.core.seq(node_children);
var chunk__33879_34251 = null;
var count__33880_34252 = (0);
var i__33881_34253 = (0);
while(true){
if((i__33881_34253 < count__33880_34252)){
var child_struct_34254 = chunk__33879_34251.cljs$core$IIndexed$_nth$arity$2(null,i__33881_34253);
if((!((child_struct_34254 == null)))){
if(typeof child_struct_34254 === 'string'){
var text_34255 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34255),child_struct_34254].join(''));
} else {
var children_34256 = shadow.dom.svg_node(child_struct_34254);
if(cljs.core.seq_QMARK_(children_34256)){
var seq__33921_34257 = cljs.core.seq(children_34256);
var chunk__33923_34258 = null;
var count__33924_34259 = (0);
var i__33925_34260 = (0);
while(true){
if((i__33925_34260 < count__33924_34259)){
var child_34261 = chunk__33923_34258.cljs$core$IIndexed$_nth$arity$2(null,i__33925_34260);
if(cljs.core.truth_(child_34261)){
node.appendChild(child_34261);


var G__34262 = seq__33921_34257;
var G__34263 = chunk__33923_34258;
var G__34264 = count__33924_34259;
var G__34265 = (i__33925_34260 + (1));
seq__33921_34257 = G__34262;
chunk__33923_34258 = G__34263;
count__33924_34259 = G__34264;
i__33925_34260 = G__34265;
continue;
} else {
var G__34267 = seq__33921_34257;
var G__34268 = chunk__33923_34258;
var G__34269 = count__33924_34259;
var G__34270 = (i__33925_34260 + (1));
seq__33921_34257 = G__34267;
chunk__33923_34258 = G__34268;
count__33924_34259 = G__34269;
i__33925_34260 = G__34270;
continue;
}
} else {
var temp__5753__auto___34271 = cljs.core.seq(seq__33921_34257);
if(temp__5753__auto___34271){
var seq__33921_34272__$1 = temp__5753__auto___34271;
if(cljs.core.chunked_seq_QMARK_(seq__33921_34272__$1)){
var c__4679__auto___34273 = cljs.core.chunk_first(seq__33921_34272__$1);
var G__34274 = cljs.core.chunk_rest(seq__33921_34272__$1);
var G__34275 = c__4679__auto___34273;
var G__34276 = cljs.core.count(c__4679__auto___34273);
var G__34277 = (0);
seq__33921_34257 = G__34274;
chunk__33923_34258 = G__34275;
count__33924_34259 = G__34276;
i__33925_34260 = G__34277;
continue;
} else {
var child_34278 = cljs.core.first(seq__33921_34272__$1);
if(cljs.core.truth_(child_34278)){
node.appendChild(child_34278);


var G__34279 = cljs.core.next(seq__33921_34272__$1);
var G__34280 = null;
var G__34281 = (0);
var G__34282 = (0);
seq__33921_34257 = G__34279;
chunk__33923_34258 = G__34280;
count__33924_34259 = G__34281;
i__33925_34260 = G__34282;
continue;
} else {
var G__34283 = cljs.core.next(seq__33921_34272__$1);
var G__34284 = null;
var G__34285 = (0);
var G__34286 = (0);
seq__33921_34257 = G__34283;
chunk__33923_34258 = G__34284;
count__33924_34259 = G__34285;
i__33925_34260 = G__34286;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34256);
}
}


var G__34287 = seq__33877_34250;
var G__34288 = chunk__33879_34251;
var G__34289 = count__33880_34252;
var G__34290 = (i__33881_34253 + (1));
seq__33877_34250 = G__34287;
chunk__33879_34251 = G__34288;
count__33880_34252 = G__34289;
i__33881_34253 = G__34290;
continue;
} else {
var G__34291 = seq__33877_34250;
var G__34292 = chunk__33879_34251;
var G__34293 = count__33880_34252;
var G__34294 = (i__33881_34253 + (1));
seq__33877_34250 = G__34291;
chunk__33879_34251 = G__34292;
count__33880_34252 = G__34293;
i__33881_34253 = G__34294;
continue;
}
} else {
var temp__5753__auto___34296 = cljs.core.seq(seq__33877_34250);
if(temp__5753__auto___34296){
var seq__33877_34297__$1 = temp__5753__auto___34296;
if(cljs.core.chunked_seq_QMARK_(seq__33877_34297__$1)){
var c__4679__auto___34298 = cljs.core.chunk_first(seq__33877_34297__$1);
var G__34299 = cljs.core.chunk_rest(seq__33877_34297__$1);
var G__34300 = c__4679__auto___34298;
var G__34301 = cljs.core.count(c__4679__auto___34298);
var G__34302 = (0);
seq__33877_34250 = G__34299;
chunk__33879_34251 = G__34300;
count__33880_34252 = G__34301;
i__33881_34253 = G__34302;
continue;
} else {
var child_struct_34303 = cljs.core.first(seq__33877_34297__$1);
if((!((child_struct_34303 == null)))){
if(typeof child_struct_34303 === 'string'){
var text_34304 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34304),child_struct_34303].join(''));
} else {
var children_34305 = shadow.dom.svg_node(child_struct_34303);
if(cljs.core.seq_QMARK_(children_34305)){
var seq__33944_34306 = cljs.core.seq(children_34305);
var chunk__33946_34307 = null;
var count__33947_34308 = (0);
var i__33948_34309 = (0);
while(true){
if((i__33948_34309 < count__33947_34308)){
var child_34310 = chunk__33946_34307.cljs$core$IIndexed$_nth$arity$2(null,i__33948_34309);
if(cljs.core.truth_(child_34310)){
node.appendChild(child_34310);


var G__34311 = seq__33944_34306;
var G__34312 = chunk__33946_34307;
var G__34313 = count__33947_34308;
var G__34314 = (i__33948_34309 + (1));
seq__33944_34306 = G__34311;
chunk__33946_34307 = G__34312;
count__33947_34308 = G__34313;
i__33948_34309 = G__34314;
continue;
} else {
var G__34315 = seq__33944_34306;
var G__34316 = chunk__33946_34307;
var G__34317 = count__33947_34308;
var G__34318 = (i__33948_34309 + (1));
seq__33944_34306 = G__34315;
chunk__33946_34307 = G__34316;
count__33947_34308 = G__34317;
i__33948_34309 = G__34318;
continue;
}
} else {
var temp__5753__auto___34319__$1 = cljs.core.seq(seq__33944_34306);
if(temp__5753__auto___34319__$1){
var seq__33944_34320__$1 = temp__5753__auto___34319__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33944_34320__$1)){
var c__4679__auto___34321 = cljs.core.chunk_first(seq__33944_34320__$1);
var G__34322 = cljs.core.chunk_rest(seq__33944_34320__$1);
var G__34323 = c__4679__auto___34321;
var G__34324 = cljs.core.count(c__4679__auto___34321);
var G__34325 = (0);
seq__33944_34306 = G__34322;
chunk__33946_34307 = G__34323;
count__33947_34308 = G__34324;
i__33948_34309 = G__34325;
continue;
} else {
var child_34326 = cljs.core.first(seq__33944_34320__$1);
if(cljs.core.truth_(child_34326)){
node.appendChild(child_34326);


var G__34327 = cljs.core.next(seq__33944_34320__$1);
var G__34328 = null;
var G__34329 = (0);
var G__34330 = (0);
seq__33944_34306 = G__34327;
chunk__33946_34307 = G__34328;
count__33947_34308 = G__34329;
i__33948_34309 = G__34330;
continue;
} else {
var G__34331 = cljs.core.next(seq__33944_34320__$1);
var G__34332 = null;
var G__34333 = (0);
var G__34334 = (0);
seq__33944_34306 = G__34331;
chunk__33946_34307 = G__34332;
count__33947_34308 = G__34333;
i__33948_34309 = G__34334;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34305);
}
}


var G__34335 = cljs.core.next(seq__33877_34297__$1);
var G__34336 = null;
var G__34337 = (0);
var G__34338 = (0);
seq__33877_34250 = G__34335;
chunk__33879_34251 = G__34336;
count__33880_34252 = G__34337;
i__33881_34253 = G__34338;
continue;
} else {
var G__34339 = cljs.core.next(seq__33877_34297__$1);
var G__34340 = null;
var G__34341 = (0);
var G__34342 = (0);
seq__33877_34250 = G__34339;
chunk__33879_34251 = G__34340;
count__33880_34252 = G__34341;
i__33881_34253 = G__34342;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34354 = arguments.length;
var i__4865__auto___34355 = (0);
while(true){
if((i__4865__auto___34355 < len__4864__auto___34354)){
args__4870__auto__.push((arguments[i__4865__auto___34355]));

var G__34356 = (i__4865__auto___34355 + (1));
i__4865__auto___34355 = G__34356;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33952){
var G__33953 = cljs.core.first(seq33952);
var seq33952__$1 = cljs.core.next(seq33952);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33953,seq33952__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33955 = arguments.length;
switch (G__33955) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__29661__auto___34370 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29671__auto__ = (function (){var switch__29451__auto__ = (function (state_33973){
var state_val_33974 = (state_33973[(1)]);
if((state_val_33974 === (1))){
var state_33973__$1 = state_33973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33973__$1,(2),once_or_cleanup);
} else {
if((state_val_33974 === (2))){
var inst_33970 = (state_33973[(2)]);
var inst_33971 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33973__$1 = (function (){var statearr_33975 = state_33973;
(statearr_33975[(7)] = inst_33970);

return statearr_33975;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33973__$1,inst_33971);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29452__auto__ = null;
var shadow$dom$state_machine__29452__auto____0 = (function (){
var statearr_33976 = [null,null,null,null,null,null,null,null];
(statearr_33976[(0)] = shadow$dom$state_machine__29452__auto__);

(statearr_33976[(1)] = (1));

return statearr_33976;
});
var shadow$dom$state_machine__29452__auto____1 = (function (state_33973){
while(true){
var ret_value__29453__auto__ = (function (){try{while(true){
var result__29454__auto__ = switch__29451__auto__(state_33973);
if(cljs.core.keyword_identical_QMARK_(result__29454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29454__auto__;
}
break;
}
}catch (e33977){var ex__29455__auto__ = e33977;
var statearr_33978_34375 = state_33973;
(statearr_33978_34375[(2)] = ex__29455__auto__);


if(cljs.core.seq((state_33973[(4)]))){
var statearr_33979_34376 = state_33973;
(statearr_33979_34376[(1)] = cljs.core.first((state_33973[(4)])));

} else {
throw ex__29455__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34377 = state_33973;
state_33973 = G__34377;
continue;
} else {
return ret_value__29453__auto__;
}
break;
}
});
shadow$dom$state_machine__29452__auto__ = function(state_33973){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29452__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29452__auto____1.call(this,state_33973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29452__auto____0;
shadow$dom$state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29452__auto____1;
return shadow$dom$state_machine__29452__auto__;
})()
})();
var state__29672__auto__ = (function (){var statearr_33980 = f__29671__auto__();
(statearr_33980[(6)] = c__29661__auto___34370);

return statearr_33980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29672__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
