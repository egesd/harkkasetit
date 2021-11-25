goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__26393__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26393 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26394__i = 0, G__26394__a = new Array(arguments.length -  0);
while (G__26394__i < G__26394__a.length) {G__26394__a[G__26394__i] = arguments[G__26394__i + 0]; ++G__26394__i;}
  args = new cljs.core.IndexedSeq(G__26394__a,0,null);
} 
return G__26393__delegate.call(this,args);};
G__26393.cljs$lang$maxFixedArity = 0;
G__26393.cljs$lang$applyTo = (function (arglist__26395){
var args = cljs.core.seq(arglist__26395);
return G__26393__delegate(args);
});
G__26393.cljs$core$IFn$_invoke$arity$variadic = G__26393__delegate;
return G__26393;
})()
);

(o.error = (function() { 
var G__26396__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26396 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26397__i = 0, G__26397__a = new Array(arguments.length -  0);
while (G__26397__i < G__26397__a.length) {G__26397__a[G__26397__i] = arguments[G__26397__i + 0]; ++G__26397__i;}
  args = new cljs.core.IndexedSeq(G__26397__a,0,null);
} 
return G__26396__delegate.call(this,args);};
G__26396.cljs$lang$maxFixedArity = 0;
G__26396.cljs$lang$applyTo = (function (arglist__26398){
var args = cljs.core.seq(arglist__26398);
return G__26396__delegate(args);
});
G__26396.cljs$core$IFn$_invoke$arity$variadic = G__26396__delegate;
return G__26396;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
