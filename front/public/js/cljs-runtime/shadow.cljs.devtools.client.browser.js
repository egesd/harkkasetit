goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35883 = arguments.length;
var i__4865__auto___35884 = (0);
while(true){
if((i__4865__auto___35884 < len__4864__auto___35883)){
args__4870__auto__.push((arguments[i__4865__auto___35884]));

var G__35885 = (i__4865__auto___35884 + (1));
i__4865__auto___35884 = G__35885;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35754){
var G__35755 = cljs.core.first(seq35754);
var seq35754__$1 = cljs.core.next(seq35754);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35755,seq35754__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35756 = cljs.core.seq(sources);
var chunk__35757 = null;
var count__35758 = (0);
var i__35759 = (0);
while(true){
if((i__35759 < count__35758)){
var map__35767 = chunk__35757.cljs$core$IIndexed$_nth$arity$2(null,i__35759);
var map__35767__$1 = cljs.core.__destructure_map(map__35767);
var src = map__35767__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35767__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35767__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35767__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35767__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35768){var e_35886 = e35768;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35886);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35886.message)].join('')));
}

var G__35887 = seq__35756;
var G__35888 = chunk__35757;
var G__35889 = count__35758;
var G__35890 = (i__35759 + (1));
seq__35756 = G__35887;
chunk__35757 = G__35888;
count__35758 = G__35889;
i__35759 = G__35890;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35756);
if(temp__5753__auto__){
var seq__35756__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35756__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35756__$1);
var G__35891 = cljs.core.chunk_rest(seq__35756__$1);
var G__35892 = c__4679__auto__;
var G__35893 = cljs.core.count(c__4679__auto__);
var G__35894 = (0);
seq__35756 = G__35891;
chunk__35757 = G__35892;
count__35758 = G__35893;
i__35759 = G__35894;
continue;
} else {
var map__35769 = cljs.core.first(seq__35756__$1);
var map__35769__$1 = cljs.core.__destructure_map(map__35769);
var src = map__35769__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35769__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35769__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35769__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35769__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35770){var e_35895 = e35770;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35895);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35895.message)].join('')));
}

var G__35896 = cljs.core.next(seq__35756__$1);
var G__35897 = null;
var G__35898 = (0);
var G__35899 = (0);
seq__35756 = G__35896;
chunk__35757 = G__35897;
count__35758 = G__35898;
i__35759 = G__35899;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35771 = cljs.core.seq(js_requires);
var chunk__35772 = null;
var count__35773 = (0);
var i__35774 = (0);
while(true){
if((i__35774 < count__35773)){
var js_ns = chunk__35772.cljs$core$IIndexed$_nth$arity$2(null,i__35774);
var require_str_35900 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35900);


var G__35901 = seq__35771;
var G__35902 = chunk__35772;
var G__35903 = count__35773;
var G__35904 = (i__35774 + (1));
seq__35771 = G__35901;
chunk__35772 = G__35902;
count__35773 = G__35903;
i__35774 = G__35904;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35771);
if(temp__5753__auto__){
var seq__35771__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35771__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35771__$1);
var G__35905 = cljs.core.chunk_rest(seq__35771__$1);
var G__35906 = c__4679__auto__;
var G__35907 = cljs.core.count(c__4679__auto__);
var G__35908 = (0);
seq__35771 = G__35905;
chunk__35772 = G__35906;
count__35773 = G__35907;
i__35774 = G__35908;
continue;
} else {
var js_ns = cljs.core.first(seq__35771__$1);
var require_str_35909 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35909);


var G__35910 = cljs.core.next(seq__35771__$1);
var G__35911 = null;
var G__35912 = (0);
var G__35913 = (0);
seq__35771 = G__35910;
chunk__35772 = G__35911;
count__35773 = G__35912;
i__35774 = G__35913;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35776){
var map__35777 = p__35776;
var map__35777__$1 = cljs.core.__destructure_map(map__35777);
var msg = map__35777__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35777__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35777__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35778(s__35779){
return (new cljs.core.LazySeq(null,(function (){
var s__35779__$1 = s__35779;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35779__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__35785 = cljs.core.first(xs__6308__auto__);
var map__35785__$1 = cljs.core.__destructure_map(map__35785);
var src = map__35785__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35785__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35785__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__35779__$1,map__35785,map__35785__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35777,map__35777__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35778_$_iter__35780(s__35781){
return (new cljs.core.LazySeq(null,((function (s__35779__$1,map__35785,map__35785__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35777,map__35777__$1,msg,info,reload_info){
return (function (){
var s__35781__$1 = s__35781;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__35781__$1);
if(temp__5753__auto____$1){
var s__35781__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35781__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__35781__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__35783 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__35782 = (0);
while(true){
if((i__35782 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__35782);
cljs.core.chunk_append(b__35783,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35914 = (i__35782 + (1));
i__35782 = G__35914;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35783),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35778_$_iter__35780(cljs.core.chunk_rest(s__35781__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35783),null);
}
} else {
var warning = cljs.core.first(s__35781__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35778_$_iter__35780(cljs.core.rest(s__35781__$2)));
}
} else {
return null;
}
break;
}
});})(s__35779__$1,map__35785,map__35785__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35777,map__35777__$1,msg,info,reload_info))
,null,null));
});})(s__35779__$1,map__35785,map__35785__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35777,map__35777__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35778(cljs.core.rest(s__35779__$1)));
} else {
var G__35915 = cljs.core.rest(s__35779__$1);
s__35779__$1 = G__35915;
continue;
}
} else {
var G__35916 = cljs.core.rest(s__35779__$1);
s__35779__$1 = G__35916;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__35787_35917 = cljs.core.seq(warnings);
var chunk__35788_35918 = null;
var count__35789_35919 = (0);
var i__35790_35920 = (0);
while(true){
if((i__35790_35920 < count__35789_35919)){
var map__35793_35921 = chunk__35788_35918.cljs$core$IIndexed$_nth$arity$2(null,i__35790_35920);
var map__35793_35922__$1 = cljs.core.__destructure_map(map__35793_35921);
var w_35923 = map__35793_35922__$1;
var msg_35924__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35793_35922__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35793_35922__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35793_35922__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35793_35922__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35927)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35925),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35926),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35924__$1)].join(''));


var G__35928 = seq__35787_35917;
var G__35929 = chunk__35788_35918;
var G__35930 = count__35789_35919;
var G__35931 = (i__35790_35920 + (1));
seq__35787_35917 = G__35928;
chunk__35788_35918 = G__35929;
count__35789_35919 = G__35930;
i__35790_35920 = G__35931;
continue;
} else {
var temp__5753__auto___35932 = cljs.core.seq(seq__35787_35917);
if(temp__5753__auto___35932){
var seq__35787_35933__$1 = temp__5753__auto___35932;
if(cljs.core.chunked_seq_QMARK_(seq__35787_35933__$1)){
var c__4679__auto___35934 = cljs.core.chunk_first(seq__35787_35933__$1);
var G__35935 = cljs.core.chunk_rest(seq__35787_35933__$1);
var G__35936 = c__4679__auto___35934;
var G__35937 = cljs.core.count(c__4679__auto___35934);
var G__35938 = (0);
seq__35787_35917 = G__35935;
chunk__35788_35918 = G__35936;
count__35789_35919 = G__35937;
i__35790_35920 = G__35938;
continue;
} else {
var map__35794_35939 = cljs.core.first(seq__35787_35933__$1);
var map__35794_35940__$1 = cljs.core.__destructure_map(map__35794_35939);
var w_35941 = map__35794_35940__$1;
var msg_35942__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35794_35940__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35794_35940__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35944 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35794_35940__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35794_35940__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35945)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35943),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35944),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35942__$1)].join(''));


var G__35946 = cljs.core.next(seq__35787_35933__$1);
var G__35947 = null;
var G__35948 = (0);
var G__35949 = (0);
seq__35787_35917 = G__35946;
chunk__35788_35918 = G__35947;
count__35789_35919 = G__35948;
i__35790_35920 = G__35949;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35775_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35775_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35797){
var map__35798 = p__35797;
var map__35798__$1 = cljs.core.__destructure_map(map__35798);
var msg = map__35798__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35798__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35799 = cljs.core.seq(updates);
var chunk__35801 = null;
var count__35802 = (0);
var i__35803 = (0);
while(true){
if((i__35803 < count__35802)){
var path = chunk__35801.cljs$core$IIndexed$_nth$arity$2(null,i__35803);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35833_35950 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35837_35951 = null;
var count__35838_35952 = (0);
var i__35839_35953 = (0);
while(true){
if((i__35839_35953 < count__35838_35952)){
var node_35954 = chunk__35837_35951.cljs$core$IIndexed$_nth$arity$2(null,i__35839_35953);
if(cljs.core.not(node_35954.shadow$old)){
var path_match_35955 = shadow.cljs.devtools.client.browser.match_paths(node_35954.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35955)){
var new_link_35956 = (function (){var G__35845 = node_35954.cloneNode(true);
G__35845.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35955),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35845;
})();
(node_35954.shadow$old = true);

(new_link_35956.onload = ((function (seq__35833_35950,chunk__35837_35951,count__35838_35952,i__35839_35953,seq__35799,chunk__35801,count__35802,i__35803,new_link_35956,path_match_35955,node_35954,path,map__35798,map__35798__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35954);
});})(seq__35833_35950,chunk__35837_35951,count__35838_35952,i__35839_35953,seq__35799,chunk__35801,count__35802,i__35803,new_link_35956,path_match_35955,node_35954,path,map__35798,map__35798__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35955], 0));

goog.dom.insertSiblingAfter(new_link_35956,node_35954);


var G__35957 = seq__35833_35950;
var G__35958 = chunk__35837_35951;
var G__35959 = count__35838_35952;
var G__35960 = (i__35839_35953 + (1));
seq__35833_35950 = G__35957;
chunk__35837_35951 = G__35958;
count__35838_35952 = G__35959;
i__35839_35953 = G__35960;
continue;
} else {
var G__35961 = seq__35833_35950;
var G__35962 = chunk__35837_35951;
var G__35963 = count__35838_35952;
var G__35964 = (i__35839_35953 + (1));
seq__35833_35950 = G__35961;
chunk__35837_35951 = G__35962;
count__35838_35952 = G__35963;
i__35839_35953 = G__35964;
continue;
}
} else {
var G__35965 = seq__35833_35950;
var G__35966 = chunk__35837_35951;
var G__35967 = count__35838_35952;
var G__35968 = (i__35839_35953 + (1));
seq__35833_35950 = G__35965;
chunk__35837_35951 = G__35966;
count__35838_35952 = G__35967;
i__35839_35953 = G__35968;
continue;
}
} else {
var temp__5753__auto___35969 = cljs.core.seq(seq__35833_35950);
if(temp__5753__auto___35969){
var seq__35833_35970__$1 = temp__5753__auto___35969;
if(cljs.core.chunked_seq_QMARK_(seq__35833_35970__$1)){
var c__4679__auto___35971 = cljs.core.chunk_first(seq__35833_35970__$1);
var G__35972 = cljs.core.chunk_rest(seq__35833_35970__$1);
var G__35973 = c__4679__auto___35971;
var G__35974 = cljs.core.count(c__4679__auto___35971);
var G__35975 = (0);
seq__35833_35950 = G__35972;
chunk__35837_35951 = G__35973;
count__35838_35952 = G__35974;
i__35839_35953 = G__35975;
continue;
} else {
var node_35976 = cljs.core.first(seq__35833_35970__$1);
if(cljs.core.not(node_35976.shadow$old)){
var path_match_35977 = shadow.cljs.devtools.client.browser.match_paths(node_35976.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35977)){
var new_link_35978 = (function (){var G__35846 = node_35976.cloneNode(true);
G__35846.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35977),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35846;
})();
(node_35976.shadow$old = true);

(new_link_35978.onload = ((function (seq__35833_35950,chunk__35837_35951,count__35838_35952,i__35839_35953,seq__35799,chunk__35801,count__35802,i__35803,new_link_35978,path_match_35977,node_35976,seq__35833_35970__$1,temp__5753__auto___35969,path,map__35798,map__35798__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35976);
});})(seq__35833_35950,chunk__35837_35951,count__35838_35952,i__35839_35953,seq__35799,chunk__35801,count__35802,i__35803,new_link_35978,path_match_35977,node_35976,seq__35833_35970__$1,temp__5753__auto___35969,path,map__35798,map__35798__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35977], 0));

goog.dom.insertSiblingAfter(new_link_35978,node_35976);


var G__35979 = cljs.core.next(seq__35833_35970__$1);
var G__35980 = null;
var G__35981 = (0);
var G__35982 = (0);
seq__35833_35950 = G__35979;
chunk__35837_35951 = G__35980;
count__35838_35952 = G__35981;
i__35839_35953 = G__35982;
continue;
} else {
var G__35983 = cljs.core.next(seq__35833_35970__$1);
var G__35984 = null;
var G__35985 = (0);
var G__35986 = (0);
seq__35833_35950 = G__35983;
chunk__35837_35951 = G__35984;
count__35838_35952 = G__35985;
i__35839_35953 = G__35986;
continue;
}
} else {
var G__35987 = cljs.core.next(seq__35833_35970__$1);
var G__35988 = null;
var G__35989 = (0);
var G__35990 = (0);
seq__35833_35950 = G__35987;
chunk__35837_35951 = G__35988;
count__35838_35952 = G__35989;
i__35839_35953 = G__35990;
continue;
}
}
} else {
}
}
break;
}


var G__35991 = seq__35799;
var G__35992 = chunk__35801;
var G__35993 = count__35802;
var G__35994 = (i__35803 + (1));
seq__35799 = G__35991;
chunk__35801 = G__35992;
count__35802 = G__35993;
i__35803 = G__35994;
continue;
} else {
var G__35995 = seq__35799;
var G__35996 = chunk__35801;
var G__35997 = count__35802;
var G__35998 = (i__35803 + (1));
seq__35799 = G__35995;
chunk__35801 = G__35996;
count__35802 = G__35997;
i__35803 = G__35998;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35799);
if(temp__5753__auto__){
var seq__35799__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35799__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35799__$1);
var G__35999 = cljs.core.chunk_rest(seq__35799__$1);
var G__36000 = c__4679__auto__;
var G__36001 = cljs.core.count(c__4679__auto__);
var G__36002 = (0);
seq__35799 = G__35999;
chunk__35801 = G__36000;
count__35802 = G__36001;
i__35803 = G__36002;
continue;
} else {
var path = cljs.core.first(seq__35799__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35847_36003 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35851_36004 = null;
var count__35852_36005 = (0);
var i__35853_36006 = (0);
while(true){
if((i__35853_36006 < count__35852_36005)){
var node_36007 = chunk__35851_36004.cljs$core$IIndexed$_nth$arity$2(null,i__35853_36006);
if(cljs.core.not(node_36007.shadow$old)){
var path_match_36008 = shadow.cljs.devtools.client.browser.match_paths(node_36007.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36008)){
var new_link_36009 = (function (){var G__35859 = node_36007.cloneNode(true);
G__35859.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36008),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35859;
})();
(node_36007.shadow$old = true);

(new_link_36009.onload = ((function (seq__35847_36003,chunk__35851_36004,count__35852_36005,i__35853_36006,seq__35799,chunk__35801,count__35802,i__35803,new_link_36009,path_match_36008,node_36007,path,seq__35799__$1,temp__5753__auto__,map__35798,map__35798__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36007);
});})(seq__35847_36003,chunk__35851_36004,count__35852_36005,i__35853_36006,seq__35799,chunk__35801,count__35802,i__35803,new_link_36009,path_match_36008,node_36007,path,seq__35799__$1,temp__5753__auto__,map__35798,map__35798__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36008], 0));

goog.dom.insertSiblingAfter(new_link_36009,node_36007);


var G__36010 = seq__35847_36003;
var G__36011 = chunk__35851_36004;
var G__36012 = count__35852_36005;
var G__36013 = (i__35853_36006 + (1));
seq__35847_36003 = G__36010;
chunk__35851_36004 = G__36011;
count__35852_36005 = G__36012;
i__35853_36006 = G__36013;
continue;
} else {
var G__36014 = seq__35847_36003;
var G__36015 = chunk__35851_36004;
var G__36016 = count__35852_36005;
var G__36017 = (i__35853_36006 + (1));
seq__35847_36003 = G__36014;
chunk__35851_36004 = G__36015;
count__35852_36005 = G__36016;
i__35853_36006 = G__36017;
continue;
}
} else {
var G__36018 = seq__35847_36003;
var G__36019 = chunk__35851_36004;
var G__36020 = count__35852_36005;
var G__36021 = (i__35853_36006 + (1));
seq__35847_36003 = G__36018;
chunk__35851_36004 = G__36019;
count__35852_36005 = G__36020;
i__35853_36006 = G__36021;
continue;
}
} else {
var temp__5753__auto___36022__$1 = cljs.core.seq(seq__35847_36003);
if(temp__5753__auto___36022__$1){
var seq__35847_36023__$1 = temp__5753__auto___36022__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35847_36023__$1)){
var c__4679__auto___36024 = cljs.core.chunk_first(seq__35847_36023__$1);
var G__36025 = cljs.core.chunk_rest(seq__35847_36023__$1);
var G__36026 = c__4679__auto___36024;
var G__36027 = cljs.core.count(c__4679__auto___36024);
var G__36028 = (0);
seq__35847_36003 = G__36025;
chunk__35851_36004 = G__36026;
count__35852_36005 = G__36027;
i__35853_36006 = G__36028;
continue;
} else {
var node_36029 = cljs.core.first(seq__35847_36023__$1);
if(cljs.core.not(node_36029.shadow$old)){
var path_match_36030 = shadow.cljs.devtools.client.browser.match_paths(node_36029.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36030)){
var new_link_36031 = (function (){var G__35860 = node_36029.cloneNode(true);
G__35860.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36030),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35860;
})();
(node_36029.shadow$old = true);

(new_link_36031.onload = ((function (seq__35847_36003,chunk__35851_36004,count__35852_36005,i__35853_36006,seq__35799,chunk__35801,count__35802,i__35803,new_link_36031,path_match_36030,node_36029,seq__35847_36023__$1,temp__5753__auto___36022__$1,path,seq__35799__$1,temp__5753__auto__,map__35798,map__35798__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36029);
});})(seq__35847_36003,chunk__35851_36004,count__35852_36005,i__35853_36006,seq__35799,chunk__35801,count__35802,i__35803,new_link_36031,path_match_36030,node_36029,seq__35847_36023__$1,temp__5753__auto___36022__$1,path,seq__35799__$1,temp__5753__auto__,map__35798,map__35798__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36030], 0));

goog.dom.insertSiblingAfter(new_link_36031,node_36029);


var G__36032 = cljs.core.next(seq__35847_36023__$1);
var G__36033 = null;
var G__36034 = (0);
var G__36035 = (0);
seq__35847_36003 = G__36032;
chunk__35851_36004 = G__36033;
count__35852_36005 = G__36034;
i__35853_36006 = G__36035;
continue;
} else {
var G__36036 = cljs.core.next(seq__35847_36023__$1);
var G__36037 = null;
var G__36038 = (0);
var G__36039 = (0);
seq__35847_36003 = G__36036;
chunk__35851_36004 = G__36037;
count__35852_36005 = G__36038;
i__35853_36006 = G__36039;
continue;
}
} else {
var G__36040 = cljs.core.next(seq__35847_36023__$1);
var G__36041 = null;
var G__36042 = (0);
var G__36043 = (0);
seq__35847_36003 = G__36040;
chunk__35851_36004 = G__36041;
count__35852_36005 = G__36042;
i__35853_36006 = G__36043;
continue;
}
}
} else {
}
}
break;
}


var G__36044 = cljs.core.next(seq__35799__$1);
var G__36045 = null;
var G__36046 = (0);
var G__36047 = (0);
seq__35799 = G__36044;
chunk__35801 = G__36045;
count__35802 = G__36046;
i__35803 = G__36047;
continue;
} else {
var G__36048 = cljs.core.next(seq__35799__$1);
var G__36049 = null;
var G__36050 = (0);
var G__36051 = (0);
seq__35799 = G__36048;
chunk__35801 = G__36049;
count__35802 = G__36050;
i__35803 = G__36051;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35861){
var map__35862 = p__35861;
var map__35862__$1 = cljs.core.__destructure_map(map__35862);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35862__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35863){
var map__35864 = p__35863;
var map__35864__$1 = cljs.core.__destructure_map(map__35864);
var _ = map__35864__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35864__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35865,done,error){
var map__35866 = p__35865;
var map__35866__$1 = cljs.core.__destructure_map(map__35866);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35866__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35867,done,error){
var map__35868 = p__35867;
var map__35868__$1 = cljs.core.__destructure_map(map__35868);
var msg = map__35868__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35868__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35868__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35868__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35869){
var map__35870 = p__35869;
var map__35870__$1 = cljs.core.__destructure_map(map__35870);
var src = map__35870__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35870__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35871 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35871) : done.call(null,G__35871));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35872){
var map__35873 = p__35872;
var map__35873__$1 = cljs.core.__destructure_map(map__35873);
var msg__$1 = map__35873__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35873__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35874){var ex = e35874;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35875){
var map__35876 = p__35875;
var map__35876__$1 = cljs.core.__destructure_map(map__35876);
var env = map__35876__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35876__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__35877){
var map__35878 = p__35877;
var map__35878__$1 = cljs.core.__destructure_map(map__35878);
var msg = map__35878__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35878__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35879){
var map__35880 = p__35879;
var map__35880__$1 = cljs.core.__destructure_map(map__35880);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35880__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35880__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__35881){
var map__35882 = p__35881;
var map__35882__$1 = cljs.core.__destructure_map(map__35882);
var svc = map__35882__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35882__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
