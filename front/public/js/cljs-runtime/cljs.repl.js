goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34631){
var map__34632 = p__34631;
var map__34632__$1 = cljs.core.__destructure_map(map__34632);
var m = map__34632__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34632__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34632__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34636_34976 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34637_34977 = null;
var count__34638_34978 = (0);
var i__34639_34979 = (0);
while(true){
if((i__34639_34979 < count__34638_34978)){
var f_34981 = chunk__34637_34977.cljs$core$IIndexed$_nth$arity$2(null,i__34639_34979);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34981], 0));


var G__34983 = seq__34636_34976;
var G__34984 = chunk__34637_34977;
var G__34985 = count__34638_34978;
var G__34986 = (i__34639_34979 + (1));
seq__34636_34976 = G__34983;
chunk__34637_34977 = G__34984;
count__34638_34978 = G__34985;
i__34639_34979 = G__34986;
continue;
} else {
var temp__5753__auto___34989 = cljs.core.seq(seq__34636_34976);
if(temp__5753__auto___34989){
var seq__34636_34990__$1 = temp__5753__auto___34989;
if(cljs.core.chunked_seq_QMARK_(seq__34636_34990__$1)){
var c__4679__auto___34991 = cljs.core.chunk_first(seq__34636_34990__$1);
var G__34992 = cljs.core.chunk_rest(seq__34636_34990__$1);
var G__34993 = c__4679__auto___34991;
var G__34994 = cljs.core.count(c__4679__auto___34991);
var G__34995 = (0);
seq__34636_34976 = G__34992;
chunk__34637_34977 = G__34993;
count__34638_34978 = G__34994;
i__34639_34979 = G__34995;
continue;
} else {
var f_34998 = cljs.core.first(seq__34636_34990__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34998], 0));


var G__35001 = cljs.core.next(seq__34636_34990__$1);
var G__35002 = null;
var G__35003 = (0);
var G__35004 = (0);
seq__34636_34976 = G__35001;
chunk__34637_34977 = G__35002;
count__34638_34978 = G__35003;
i__34639_34979 = G__35004;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35006 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35006], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35006)))?cljs.core.second(arglists_35006):arglists_35006)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34643_35007 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34644_35008 = null;
var count__34645_35009 = (0);
var i__34646_35010 = (0);
while(true){
if((i__34646_35010 < count__34645_35009)){
var vec__34655_35011 = chunk__34644_35008.cljs$core$IIndexed$_nth$arity$2(null,i__34646_35010);
var name_35012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34655_35011,(0),null);
var map__34658_35013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34655_35011,(1),null);
var map__34658_35014__$1 = cljs.core.__destructure_map(map__34658_35013);
var doc_35015 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34658_35014__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35016 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34658_35014__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35012], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35016], 0));

if(cljs.core.truth_(doc_35015)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35015], 0));
} else {
}


var G__35018 = seq__34643_35007;
var G__35019 = chunk__34644_35008;
var G__35020 = count__34645_35009;
var G__35021 = (i__34646_35010 + (1));
seq__34643_35007 = G__35018;
chunk__34644_35008 = G__35019;
count__34645_35009 = G__35020;
i__34646_35010 = G__35021;
continue;
} else {
var temp__5753__auto___35022 = cljs.core.seq(seq__34643_35007);
if(temp__5753__auto___35022){
var seq__34643_35023__$1 = temp__5753__auto___35022;
if(cljs.core.chunked_seq_QMARK_(seq__34643_35023__$1)){
var c__4679__auto___35024 = cljs.core.chunk_first(seq__34643_35023__$1);
var G__35025 = cljs.core.chunk_rest(seq__34643_35023__$1);
var G__35026 = c__4679__auto___35024;
var G__35027 = cljs.core.count(c__4679__auto___35024);
var G__35028 = (0);
seq__34643_35007 = G__35025;
chunk__34644_35008 = G__35026;
count__34645_35009 = G__35027;
i__34646_35010 = G__35028;
continue;
} else {
var vec__34661_35029 = cljs.core.first(seq__34643_35023__$1);
var name_35030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34661_35029,(0),null);
var map__34664_35031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34661_35029,(1),null);
var map__34664_35032__$1 = cljs.core.__destructure_map(map__34664_35031);
var doc_35033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34664_35032__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35034 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34664_35032__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35030], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35034], 0));

if(cljs.core.truth_(doc_35033)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35033], 0));
} else {
}


var G__35035 = cljs.core.next(seq__34643_35023__$1);
var G__35036 = null;
var G__35037 = (0);
var G__35038 = (0);
seq__34643_35007 = G__35035;
chunk__34644_35008 = G__35036;
count__34645_35009 = G__35037;
i__34646_35010 = G__35038;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34667 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34668 = null;
var count__34669 = (0);
var i__34670 = (0);
while(true){
if((i__34670 < count__34669)){
var role = chunk__34668.cljs$core$IIndexed$_nth$arity$2(null,i__34670);
var temp__5753__auto___35039__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35039__$1)){
var spec_35040 = temp__5753__auto___35039__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35040)], 0));
} else {
}


var G__35041 = seq__34667;
var G__35042 = chunk__34668;
var G__35043 = count__34669;
var G__35044 = (i__34670 + (1));
seq__34667 = G__35041;
chunk__34668 = G__35042;
count__34669 = G__35043;
i__34670 = G__35044;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__34667);
if(temp__5753__auto____$1){
var seq__34667__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34667__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34667__$1);
var G__35045 = cljs.core.chunk_rest(seq__34667__$1);
var G__35046 = c__4679__auto__;
var G__35047 = cljs.core.count(c__4679__auto__);
var G__35048 = (0);
seq__34667 = G__35045;
chunk__34668 = G__35046;
count__34669 = G__35047;
i__34670 = G__35048;
continue;
} else {
var role = cljs.core.first(seq__34667__$1);
var temp__5753__auto___35049__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35049__$2)){
var spec_35050 = temp__5753__auto___35049__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35050)], 0));
} else {
}


var G__35052 = cljs.core.next(seq__34667__$1);
var G__35053 = null;
var G__35054 = (0);
var G__35055 = (0);
seq__34667 = G__35052;
chunk__34668 = G__35053;
count__34669 = G__35054;
i__34670 = G__35055;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35056 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35057 = cljs.core.ex_cause(t);
via = G__35056;
t = G__35057;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34694 = datafied_throwable;
var map__34694__$1 = cljs.core.__destructure_map(map__34694);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34694__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34694__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34694__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34695 = cljs.core.last(via);
var map__34695__$1 = cljs.core.__destructure_map(map__34695);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34695__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34695__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34695__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34696 = data;
var map__34696__$1 = cljs.core.__destructure_map(map__34696);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34696__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34696__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34696__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34697 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34697__$1 = cljs.core.__destructure_map(map__34697);
var top_data = map__34697__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34697__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34698 = phase;
var G__34698__$1 = (((G__34698 instanceof cljs.core.Keyword))?G__34698.fqn:null);
switch (G__34698__$1) {
case "read-source":
var map__34716 = data;
var map__34716__$1 = cljs.core.__destructure_map(map__34716);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34716__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34716__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34717 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34717__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34717,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34717);
var G__34717__$2 = (cljs.core.truth_((function (){var fexpr__34725 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34725.cljs$core$IFn$_invoke$arity$1 ? fexpr__34725.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34725.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34717__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34717__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34717__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34717__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34793 = top_data;
var G__34793__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34793,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34793);
var G__34793__$2 = (cljs.core.truth_((function (){var fexpr__34794 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34794.cljs$core$IFn$_invoke$arity$1 ? fexpr__34794.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34794.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34793__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34793__$1);
var G__34793__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34793__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34793__$2);
var G__34793__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34793__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34793__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34793__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34793__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34795 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34795,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34795,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34795,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34795,(3),null);
var G__34798 = top_data;
var G__34798__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34798,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34798);
var G__34798__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34798__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34798__$1);
var G__34798__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34798__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34798__$2);
var G__34798__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34798__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34798__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34798__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34798__$4;
}

break;
case "execution":
var vec__34828 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34828,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34828,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34828,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34828,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34689_SHARP_){
var or__4253__auto__ = (p1__34689_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__34842 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34842.cljs$core$IFn$_invoke$arity$1 ? fexpr__34842.cljs$core$IFn$_invoke$arity$1(p1__34689_SHARP_) : fexpr__34842.call(null,p1__34689_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__34843 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34843__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34843,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34843);
var G__34843__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34843__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34843__$1);
var G__34843__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34843__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34843__$2);
var G__34843__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34843__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34843__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34843__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34843__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34698__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34855){
var map__34857 = p__34855;
var map__34857__$1 = cljs.core.__destructure_map(map__34857);
var triage_data = map__34857__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34857__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34857__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34857__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34857__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34857__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34857__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34857__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34857__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34860 = phase;
var G__34860__$1 = (((G__34860 instanceof cljs.core.Keyword))?G__34860.fqn:null);
switch (G__34860__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34861 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34862 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34863 = loc;
var G__34864 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34865_35101 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34866_35102 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34867_35103 = true;
var _STAR_print_fn_STAR__temp_val__34868_35104 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34867_35103);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34868_35104);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34846_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34846_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34866_35102);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34865_35101);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34861,G__34862,G__34863,G__34864) : format.call(null,G__34861,G__34862,G__34863,G__34864));

break;
case "macroexpansion":
var G__34873 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34874 = cause_type;
var G__34875 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34876 = loc;
var G__34877 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34873,G__34874,G__34875,G__34876,G__34877) : format.call(null,G__34873,G__34874,G__34875,G__34876,G__34877));

break;
case "compile-syntax-check":
var G__34878 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34879 = cause_type;
var G__34880 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34881 = loc;
var G__34882 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34878,G__34879,G__34880,G__34881,G__34882) : format.call(null,G__34878,G__34879,G__34880,G__34881,G__34882));

break;
case "compilation":
var G__34885 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34886 = cause_type;
var G__34887 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34888 = loc;
var G__34889 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34885,G__34886,G__34887,G__34888,G__34889) : format.call(null,G__34885,G__34886,G__34887,G__34888,G__34889));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34892 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34893 = symbol;
var G__34894 = loc;
var G__34895 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34896_35121 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34897_35122 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34898_35123 = true;
var _STAR_print_fn_STAR__temp_val__34899_35124 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34898_35123);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34899_35124);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34848_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34848_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34897_35122);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34896_35121);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34892,G__34893,G__34894,G__34895) : format.call(null,G__34892,G__34893,G__34894,G__34895));
} else {
var G__34904 = "Execution error%s at %s(%s).\n%s\n";
var G__34905 = cause_type;
var G__34906 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34907 = loc;
var G__34908 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34904,G__34905,G__34906,G__34907,G__34908) : format.call(null,G__34904,G__34905,G__34906,G__34907,G__34908));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34860__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
