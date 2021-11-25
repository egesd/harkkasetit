goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__31634,res){
var map__31636 = p__31634;
var map__31636__$1 = cljs.core.__destructure_map(map__31636);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31636__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31636__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__31643 = res;
var G__31643__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31643,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__31643);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31643__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__31643__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__31646 = arguments.length;
switch (G__31646) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__31659,msg,handlers,timeout_after_ms){
var map__31662 = p__31659;
var map__31662__$1 = cljs.core.__destructure_map(map__31662);
var runtime = map__31662__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31662__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___31871 = arguments.length;
var i__4865__auto___31872 = (0);
while(true){
if((i__4865__auto___31872 < len__4864__auto___31871)){
args__4870__auto__.push((arguments[i__4865__auto___31872]));

var G__31873 = (i__4865__auto___31872 + (1));
i__4865__auto___31872 = G__31873;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__31678,ev,args){
var map__31679 = p__31678;
var map__31679__$1 = cljs.core.__destructure_map(map__31679);
var runtime = map__31679__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31679__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__31687 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31690 = null;
var count__31691 = (0);
var i__31692 = (0);
while(true){
if((i__31692 < count__31691)){
var ext = chunk__31690.cljs$core$IIndexed$_nth$arity$2(null,i__31692);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31874 = seq__31687;
var G__31875 = chunk__31690;
var G__31876 = count__31691;
var G__31877 = (i__31692 + (1));
seq__31687 = G__31874;
chunk__31690 = G__31875;
count__31691 = G__31876;
i__31692 = G__31877;
continue;
} else {
var G__31878 = seq__31687;
var G__31879 = chunk__31690;
var G__31880 = count__31691;
var G__31881 = (i__31692 + (1));
seq__31687 = G__31878;
chunk__31690 = G__31879;
count__31691 = G__31880;
i__31692 = G__31881;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31687);
if(temp__5753__auto__){
var seq__31687__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31687__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__31687__$1);
var G__31882 = cljs.core.chunk_rest(seq__31687__$1);
var G__31883 = c__4679__auto__;
var G__31884 = cljs.core.count(c__4679__auto__);
var G__31885 = (0);
seq__31687 = G__31882;
chunk__31690 = G__31883;
count__31691 = G__31884;
i__31692 = G__31885;
continue;
} else {
var ext = cljs.core.first(seq__31687__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31886 = cljs.core.next(seq__31687__$1);
var G__31887 = null;
var G__31888 = (0);
var G__31889 = (0);
seq__31687 = G__31886;
chunk__31690 = G__31887;
count__31691 = G__31888;
i__31692 = G__31889;
continue;
} else {
var G__31890 = cljs.core.next(seq__31687__$1);
var G__31891 = null;
var G__31892 = (0);
var G__31893 = (0);
seq__31687 = G__31890;
chunk__31690 = G__31891;
count__31691 = G__31892;
i__31692 = G__31893;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq31673){
var G__31674 = cljs.core.first(seq31673);
var seq31673__$1 = cljs.core.next(seq31673);
var G__31675 = cljs.core.first(seq31673__$1);
var seq31673__$2 = cljs.core.next(seq31673__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31674,G__31675,seq31673__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__31721,p__31722){
var map__31723 = p__31721;
var map__31723__$1 = cljs.core.__destructure_map(map__31723);
var runtime = map__31723__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31723__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31725 = p__31722;
var map__31725__$1 = cljs.core.__destructure_map(map__31725);
var msg = map__31725__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31725__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__31726 = cljs.core.deref(state_ref);
var map__31726__$1 = cljs.core.__destructure_map(map__31726);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31726__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31726__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__31732){
var map__31733 = p__31732;
var map__31733__$1 = cljs.core.__destructure_map(map__31733);
var runtime = map__31733__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31733__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__31740,msg){
var map__31741 = p__31740;
var map__31741__$1 = cljs.core.__destructure_map(map__31741);
var runtime = map__31741__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31741__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__31746,key,p__31747){
var map__31748 = p__31746;
var map__31748__$1 = cljs.core.__destructure_map(map__31748);
var state = map__31748__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31748__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__31749 = p__31747;
var map__31749__$1 = cljs.core.__destructure_map(map__31749);
var spec = map__31749__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31749__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__31753,key,spec){
var map__31755 = p__31753;
var map__31755__$1 = cljs.core.__destructure_map(map__31755);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31755__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__31758_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__31758_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__31759_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__31759_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__31760_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__31760_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__31761_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__31761_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__31763_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__31763_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__31791,key){
var map__31792 = p__31791;
var map__31792__$1 = cljs.core.__destructure_map(map__31792);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31792__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__31805,msg){
var map__31807 = p__31805;
var map__31807__$1 = cljs.core.__destructure_map(map__31807);
var runtime = map__31807__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31807__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__31812,p__31813){
var map__31814 = p__31812;
var map__31814__$1 = cljs.core.__destructure_map(map__31814);
var runtime = map__31814__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31814__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31816 = p__31813;
var map__31816__$1 = cljs.core.__destructure_map(map__31816);
var msg = map__31816__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31816__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31816__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__31821 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31823 = null;
var count__31824 = (0);
var i__31825 = (0);
while(true){
if((i__31825 < count__31824)){
var map__31843 = chunk__31823.cljs$core$IIndexed$_nth$arity$2(null,i__31825);
var map__31843__$1 = cljs.core.__destructure_map(map__31843);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31843__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31921 = seq__31821;
var G__31922 = chunk__31823;
var G__31923 = count__31824;
var G__31924 = (i__31825 + (1));
seq__31821 = G__31921;
chunk__31823 = G__31922;
count__31824 = G__31923;
i__31825 = G__31924;
continue;
} else {
var G__31925 = seq__31821;
var G__31926 = chunk__31823;
var G__31927 = count__31824;
var G__31928 = (i__31825 + (1));
seq__31821 = G__31925;
chunk__31823 = G__31926;
count__31824 = G__31927;
i__31825 = G__31928;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31821);
if(temp__5753__auto__){
var seq__31821__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31821__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__31821__$1);
var G__31929 = cljs.core.chunk_rest(seq__31821__$1);
var G__31930 = c__4679__auto__;
var G__31931 = cljs.core.count(c__4679__auto__);
var G__31932 = (0);
seq__31821 = G__31929;
chunk__31823 = G__31930;
count__31824 = G__31931;
i__31825 = G__31932;
continue;
} else {
var map__31846 = cljs.core.first(seq__31821__$1);
var map__31846__$1 = cljs.core.__destructure_map(map__31846);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31846__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31933 = cljs.core.next(seq__31821__$1);
var G__31934 = null;
var G__31935 = (0);
var G__31936 = (0);
seq__31821 = G__31933;
chunk__31823 = G__31934;
count__31824 = G__31935;
i__31825 = G__31936;
continue;
} else {
var G__31937 = cljs.core.next(seq__31821__$1);
var G__31938 = null;
var G__31939 = (0);
var G__31940 = (0);
seq__31821 = G__31937;
chunk__31823 = G__31938;
count__31824 = G__31939;
i__31825 = G__31940;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
