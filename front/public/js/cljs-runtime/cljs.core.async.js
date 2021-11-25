goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29798 = arguments.length;
switch (G__29798) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29803 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29803 = (function (f,blockable,meta29804){
this.f = f;
this.blockable = blockable;
this.meta29804 = meta29804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29805,meta29804__$1){
var self__ = this;
var _29805__$1 = this;
return (new cljs.core.async.t_cljs$core$async29803(self__.f,self__.blockable,meta29804__$1));
}));

(cljs.core.async.t_cljs$core$async29803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29805){
var self__ = this;
var _29805__$1 = this;
return self__.meta29804;
}));

(cljs.core.async.t_cljs$core$async29803.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29803.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29803.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29803.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29803.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29804","meta29804",464996029,null)], null);
}));

(cljs.core.async.t_cljs$core$async29803.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29803.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29803");

(cljs.core.async.t_cljs$core$async29803.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29803");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29803.
 */
cljs.core.async.__GT_t_cljs$core$async29803 = (function cljs$core$async$__GT_t_cljs$core$async29803(f__$1,blockable__$1,meta29804){
return (new cljs.core.async.t_cljs$core$async29803(f__$1,blockable__$1,meta29804));
});

}

return (new cljs.core.async.t_cljs$core$async29803(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29892 = arguments.length;
switch (G__29892) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29895 = arguments.length;
switch (G__29895) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29915 = arguments.length;
switch (G__29915) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32537 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32537) : fn1.call(null,val_32537));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32537) : fn1.call(null,val_32537));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29935 = arguments.length;
switch (G__29935) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___32541 = n;
var x_32542 = (0);
while(true){
if((x_32542 < n__4741__auto___32541)){
(a[x_32542] = x_32542);

var G__32543 = (x_32542 + (1));
x_32542 = G__32543;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29971 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29971 = (function (flag,meta29972){
this.flag = flag;
this.meta29972 = meta29972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29973,meta29972__$1){
var self__ = this;
var _29973__$1 = this;
return (new cljs.core.async.t_cljs$core$async29971(self__.flag,meta29972__$1));
}));

(cljs.core.async.t_cljs$core$async29971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29973){
var self__ = this;
var _29973__$1 = this;
return self__.meta29972;
}));

(cljs.core.async.t_cljs$core$async29971.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29971.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29971.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29971.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29971.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29972","meta29972",-1182463300,null)], null);
}));

(cljs.core.async.t_cljs$core$async29971.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29971.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29971");

(cljs.core.async.t_cljs$core$async29971.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29971");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29971.
 */
cljs.core.async.__GT_t_cljs$core$async29971 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29971(flag__$1,meta29972){
return (new cljs.core.async.t_cljs$core$async29971(flag__$1,meta29972));
});

}

return (new cljs.core.async.t_cljs$core$async29971(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29974 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29974 = (function (flag,cb,meta29978){
this.flag = flag;
this.cb = cb;
this.meta29978 = meta29978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29979,meta29978__$1){
var self__ = this;
var _29979__$1 = this;
return (new cljs.core.async.t_cljs$core$async29974(self__.flag,self__.cb,meta29978__$1));
}));

(cljs.core.async.t_cljs$core$async29974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29979){
var self__ = this;
var _29979__$1 = this;
return self__.meta29978;
}));

(cljs.core.async.t_cljs$core$async29974.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29974.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29974.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29974.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29974.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29978","meta29978",1101277388,null)], null);
}));

(cljs.core.async.t_cljs$core$async29974.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29974.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29974");

(cljs.core.async.t_cljs$core$async29974.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29974");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29974.
 */
cljs.core.async.__GT_t_cljs$core$async29974 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29974(flag__$1,cb__$1,meta29978){
return (new cljs.core.async.t_cljs$core$async29974(flag__$1,cb__$1,meta29978));
});

}

return (new cljs.core.async.t_cljs$core$async29974(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29983_SHARP_){
var G__29994 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29983_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29994) : fret.call(null,G__29994));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29984_SHARP_){
var G__29995 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29984_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29995) : fret.call(null,G__29995));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32546 = (i + (1));
i = G__32546;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___32549 = arguments.length;
var i__4865__auto___32550 = (0);
while(true){
if((i__4865__auto___32550 < len__4864__auto___32549)){
args__4870__auto__.push((arguments[i__4865__auto___32550]));

var G__32551 = (i__4865__auto___32550 + (1));
i__4865__auto___32550 = G__32551;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30001){
var map__30003 = p__30001;
var map__30003__$1 = cljs.core.__destructure_map(map__30003);
var opts = map__30003__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29996){
var G__29997 = cljs.core.first(seq29996);
var seq29996__$1 = cljs.core.next(seq29996);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29997,seq29996__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30010 = arguments.length;
switch (G__30010) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29661__auto___32553 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29671__auto__ = (function (){var switch__29451__auto__ = (function (state_30052){
var state_val_30053 = (state_30052[(1)]);
if((state_val_30053 === (7))){
var inst_30045 = (state_30052[(2)]);
var state_30052__$1 = state_30052;
var statearr_30114_32554 = state_30052__$1;
(statearr_30114_32554[(2)] = inst_30045);

(statearr_30114_32554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (1))){
var state_30052__$1 = state_30052;
var statearr_30116_32555 = state_30052__$1;
(statearr_30116_32555[(2)] = null);

(statearr_30116_32555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (4))){
var inst_30025 = (state_30052[(7)]);
var inst_30025__$1 = (state_30052[(2)]);
var inst_30026 = (inst_30025__$1 == null);
var state_30052__$1 = (function (){var statearr_30122 = state_30052;
(statearr_30122[(7)] = inst_30025__$1);

return statearr_30122;
})();
if(cljs.core.truth_(inst_30026)){
var statearr_30123_32556 = state_30052__$1;
(statearr_30123_32556[(1)] = (5));

} else {
var statearr_30124_32557 = state_30052__$1;
(statearr_30124_32557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (13))){
var state_30052__$1 = state_30052;
var statearr_30125_32558 = state_30052__$1;
(statearr_30125_32558[(2)] = null);

(statearr_30125_32558[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (6))){
var inst_30025 = (state_30052[(7)]);
var state_30052__$1 = state_30052;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30052__$1,(11),to,inst_30025);
} else {
if((state_val_30053 === (3))){
var inst_30047 = (state_30052[(2)]);
var state_30052__$1 = state_30052;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30052__$1,inst_30047);
} else {
if((state_val_30053 === (12))){
var state_30052__$1 = state_30052;
var statearr_30136_32559 = state_30052__$1;
(statearr_30136_32559[(2)] = null);

(statearr_30136_32559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (2))){
var state_30052__$1 = state_30052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30052__$1,(4),from);
} else {
if((state_val_30053 === (11))){
var inst_30036 = (state_30052[(2)]);
var state_30052__$1 = state_30052;
if(cljs.core.truth_(inst_30036)){
var statearr_30138_32560 = state_30052__$1;
(statearr_30138_32560[(1)] = (12));

} else {
var statearr_30139_32561 = state_30052__$1;
(statearr_30139_32561[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (9))){
var state_30052__$1 = state_30052;
var statearr_30140_32562 = state_30052__$1;
(statearr_30140_32562[(2)] = null);

(statearr_30140_32562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (5))){
var state_30052__$1 = state_30052;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30141_32563 = state_30052__$1;
(statearr_30141_32563[(1)] = (8));

} else {
var statearr_30143_32564 = state_30052__$1;
(statearr_30143_32564[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (14))){
var inst_30043 = (state_30052[(2)]);
var state_30052__$1 = state_30052;
var statearr_30144_32565 = state_30052__$1;
(statearr_30144_32565[(2)] = inst_30043);

(statearr_30144_32565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (10))){
var inst_30033 = (state_30052[(2)]);
var state_30052__$1 = state_30052;
var statearr_30147_32566 = state_30052__$1;
(statearr_30147_32566[(2)] = inst_30033);

(statearr_30147_32566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30053 === (8))){
var inst_30030 = cljs.core.async.close_BANG_(to);
var state_30052__$1 = state_30052;
var statearr_30148_32567 = state_30052__$1;
(statearr_30148_32567[(2)] = inst_30030);

(statearr_30148_32567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29452__auto__ = null;
var cljs$core$async$state_machine__29452__auto____0 = (function (){
var statearr_30149 = [null,null,null,null,null,null,null,null];
(statearr_30149[(0)] = cljs$core$async$state_machine__29452__auto__);

(statearr_30149[(1)] = (1));

return statearr_30149;
});
var cljs$core$async$state_machine__29452__auto____1 = (function (state_30052){
while(true){
var ret_value__29453__auto__ = (function (){try{while(true){
var result__29454__auto__ = switch__29451__auto__(state_30052);
if(cljs.core.keyword_identical_QMARK_(result__29454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29454__auto__;
}
break;
}
}catch (e30150){var ex__29455__auto__ = e30150;
var statearr_30151_32568 = state_30052;
(statearr_30151_32568[(2)] = ex__29455__auto__);


if(cljs.core.seq((state_30052[(4)]))){
var statearr_30152_32569 = state_30052;
(statearr_30152_32569[(1)] = cljs.core.first((state_30052[(4)])));

} else {
throw ex__29455__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32570 = state_30052;
state_30052 = G__32570;
continue;
} else {
return ret_value__29453__auto__;
}
break;
}
});
cljs$core$async$state_machine__29452__auto__ = function(state_30052){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29452__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29452__auto____1.call(this,state_30052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29452__auto____0;
cljs$core$async$state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29452__auto____1;
return cljs$core$async$state_machine__29452__auto__;
})()
})();
var state__29672__auto__ = (function (){var statearr_30155 = f__29671__auto__();
(statearr_30155[(6)] = c__29661__auto___32553);

return statearr_30155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29672__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30173){
var vec__30174 = p__30173;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30174,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30174,(1),null);
var job = vec__30174;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29661__auto___32583 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29671__auto__ = (function (){var switch__29451__auto__ = (function (state_30184){
var state_val_30185 = (state_30184[(1)]);
if((state_val_30185 === (1))){
var state_30184__$1 = state_30184;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30184__$1,(2),res,v);
} else {
if((state_val_30185 === (2))){
var inst_30181 = (state_30184[(2)]);
var inst_30182 = cljs.core.async.close_BANG_(res);
var state_30184__$1 = (function (){var statearr_30186 = state_30184;
(statearr_30186[(7)] = inst_30181);

return statearr_30186;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30184__$1,inst_30182);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29452__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29452__auto____0 = (function (){
var statearr_30189 = [null,null,null,null,null,null,null,null];
(statearr_30189[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29452__auto__);

(statearr_30189[(1)] = (1));

return statearr_30189;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29452__auto____1 = (function (state_30184){
while(true){
var ret_value__29453__auto__ = (function (){try{while(true){
var result__29454__auto__ = switch__29451__auto__(state_30184);
if(cljs.core.keyword_identical_QMARK_(result__29454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29454__auto__;
}
break;
}
}catch (e30190){var ex__29455__auto__ = e30190;
var statearr_30191_32588 = state_30184;
(statearr_30191_32588[(2)] = ex__29455__auto__);


if(cljs.core.seq((state_30184[(4)]))){
var statearr_30195_32589 = state_30184;
(statearr_30195_32589[(1)] = cljs.core.first((state_30184[(4)])));

} else {
throw ex__29455__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32593 = state_30184;
state_30184 = G__32593;
continue;
} else {
return ret_value__29453__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29452__auto__ = function(state_30184){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29452__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29452__auto____1.call(this,state_30184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29452__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29452__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29452__auto__;
})()
})();
var state__29672__auto__ = (function (){var statearr_30198 = f__29671__auto__();
(statearr_30198[(6)] = c__29661__auto___32583);

return statearr_30198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29672__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30199){
var vec__30200 = p__30199;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30200,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30200,(1),null);
var job = vec__30200;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___32599 = n;
var __32600 = (0);
while(true){
if((__32600 < n__4741__auto___32599)){
var G__30203_32601 = type;
var G__30203_32602__$1 = (((G__30203_32601 instanceof cljs.core.Keyword))?G__30203_32601.fqn:null);
switch (G__30203_32602__$1) {
case "compute":
var c__29661__auto___32606 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32600,c__29661__auto___32606,G__30203_32601,G__30203_32602__$1,n__4741__auto___32599,jobs,results,process,async){
return (function (){
var f__29671__auto__ = (function (){var switch__29451__auto__ = ((function (__32600,c__29661__auto___32606,G__30203_32601,G__30203_32602__$1,n__4741__auto___32599,jobs,results,process,async){
return (function (state_30228){
var state_val_30229 = (state_30228[(1)]);
if((state_val_30229 === (1))){
var state_30228__$1 = state_30228;
var statearr_30230_32615 = state_30228__$1;
(statearr_30230_32615[(2)] = null);

(statearr_30230_32615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (2))){
var state_30228__$1 = state_30228;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30228__$1,(4),jobs);
} else {
if((state_val_30229 === (3))){
var inst_30226 = (state_30228[(2)]);
var state_30228__$1 = state_30228;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30228__$1,inst_30226);
} else {
if((state_val_30229 === (4))){
var inst_30218 = (state_30228[(2)]);
var inst_30219 = process(inst_30218);
var state_30228__$1 = state_30228;
if(cljs.core.truth_(inst_30219)){
var statearr_30231_32618 = state_30228__$1;
(statearr_30231_32618[(1)] = (5));

} else {
var statearr_30232_32619 = state_30228__$1;
(statearr_30232_32619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (5))){
var state_30228__$1 = state_30228;
var statearr_30233_32620 = state_30228__$1;
(statearr_30233_32620[(2)] = null);

(statearr_30233_32620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (6))){
var state_30228__$1 = state_30228;
var statearr_30234_32621 = state_30228__$1;
(statearr_30234_32621[(2)] = null);

(statearr_30234_32621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (7))){
var inst_30224 = (state_30228[(2)]);
var state_30228__$1 = state_30228;
var statearr_30235_32622 = state_30228__$1;
(statearr_30235_32622[(2)] = inst_30224);

(statearr_30235_32622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32600,c__29661__auto___32606,G__30203_32601,G__30203_32602__$1,n__4741__auto___32599,jobs,results,process,async))
;
return ((function (__32600,switch__29451__auto__,c__29661__auto___32606,G__30203_32601,G__30203_32602__$1,n__4741__auto___32599,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29452__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29452__auto____0 = (function (){
var statearr_30236 = [null,null,null,null,null,null,null];
(statearr_30236[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29452__auto__);

(statearr_30236[(1)] = (1));

return statearr_30236;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29452__auto____1 = (function (state_30228){
while(true){
var ret_value__29453__auto__ = (function (){try{while(true){
var result__29454__auto__ = switch__29451__auto__(state_30228);
if(cljs.core.keyword_identical_QMARK_(result__29454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29454__auto__;
}
break;
}
}catch (e30237){var ex__29455__auto__ = e30237;
var statearr_30238_32625 = state_30228;
(statearr_30238_32625[(2)] = ex__29455__auto__);


if(cljs.core.seq((state_30228[(4)]))){
var statearr_30239_32626 = state_30228;
(statearr_30239_32626[(1)] = cljs.core.first((state_30228[(4)])));

} else {
throw ex__29455__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32627 = state_30228;
state_30228 = G__32627;
continue;
} else {
return ret_value__29453__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29452__auto__ = function(state_30228){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29452__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29452__auto____1.call(this,state_30228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29452__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29452__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29452__auto__;
})()
;})(__32600,switch__29451__auto__,c__29661__auto___32606,G__30203_32601,G__30203_32602__$1,n__4741__auto___32599,jobs,results,process,async))
})();
var state__29672__auto__ = (function (){var statearr_30240 = f__29671__auto__();
(statearr_30240[(6)] = c__29661__auto___32606);

return statearr_30240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29672__auto__);
});})(__32600,c__29661__auto___32606,G__30203_32601,G__30203_32602__$1,n__4741__auto___32599,jobs,results,process,async))
);


break;
case "async":
var c__29661__auto___32632 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32600,c__29661__auto___32632,G__30203_32601,G__30203_32602__$1,n__4741__auto___32599,jobs,results,process,async){
return (function (){
var f__29671__auto__ = (function (){var switch__29451__auto__ = ((function (__32600,c__29661__auto___32632,G__30203_32601,G__30203_32602__$1,n__4741__auto___32599,jobs,results,process,async){
return (function (state_30254){
var state_val_30255 = (state_30254[(1)]);
if((state_val_30255 === (1))){
var state_30254__$1 = state_30254;
var statearr_30257_32633 = state_30254__$1;
(statearr_30257_32633[(2)] = null);

(statearr_30257_32633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30255 === (2))){
var state_30254__$1 = state_30254;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30254__$1,(4),jobs);
} else {
if((state_val_30255 === (3))){
var inst_30252 = (state_30254[(2)]);
var state_30254__$1 = state_30254;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30254__$1,inst_30252);
} else {
if((state_val_30255 === (4))){
var inst_30244 = (state_30254[(2)]);
var inst_30245 = async(inst_30244);
var state_30254__$1 = state_30254;
if(cljs.core.truth_(inst_30245)){
var statearr_30258_32634 = state_30254__$1;
(statearr_30258_32634[(1)] = (5));

} else {
var statearr_30259_32635 = state_30254__$1;
(statearr_30259_32635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30255 === (5))){
var state_30254__$1 = state_30254;
var statearr_30260_32636 = state_30254__$1;
(statearr_30260_32636[(2)] = null);

(statearr_30260_32636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30255 === (6))){
var state_30254__$1 = state_30254;
var statearr_30261_32637 = state_30254__$1;
(statearr_30261_32637[(2)] = null);

(statearr_30261_32637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30255 === (7))){
var inst_30250 = (state_30254[(2)]);
var state_30254__$1 = state_30254;
var statearr_30262_32638 = state_30254__$1;
(statearr_30262_32638[(2)] = inst_30250);

(statearr_30262_32638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32600,c__29661__auto___32632,G__30203_32601,G__30203_32602__$1,n__4741__auto___32599,jobs,results,process,async))
;
return ((function (__32600,switch__29451__auto__,c__29661__auto___32632,G__30203_32601,G__30203_32602__$1,n__4741__auto___32599,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29452__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29452__auto____0 = (function (){
var statearr_30267 = [null,null,null,null,null,null,null];
(statearr_30267[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29452__auto__);

(statearr_30267[(1)] = (1));

return statearr_30267;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29452__auto____1 = (function (state_30254){
while(true){
var ret_value__29453__auto__ = (function (){try{while(true){
var result__29454__auto__ = switch__29451__auto__(state_30254);
if(cljs.core.keyword_identical_QMARK_(result__29454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29454__auto__;
}
break;
}
}catch (e30268){var ex__29455__auto__ = e30268;
var statearr_30269_32639 = state_30254;
(statearr_30269_32639[(2)] = ex__29455__auto__);


if(cljs.core.seq((state_30254[(4)]))){
var statearr_30270_32640 = state_30254;
(statearr_30270_32640[(1)] = cljs.core.first((state_30254[(4)])));

} else {
throw ex__29455__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32641 = state_30254;
state_30254 = G__32641;
continue;
} else {
return ret_value__29453__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29452__auto__ = function(state_30254){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29452__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29452__auto____1.call(this,state_30254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29452__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29452__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29452__auto__;
})()
;})(__32600,switch__29451__auto__,c__29661__auto___32632,G__30203_32601,G__30203_32602__$1,n__4741__auto___32599,jobs,results,process,async))
})();
var state__29672__auto__ = (function (){var statearr_30271 = f__29671__auto__();
(statearr_30271[(6)] = c__29661__auto___32632);

return statearr_30271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29672__auto__);
});})(__32600,c__29661__auto___32632,G__30203_32601,G__30203_32602__$1,n__4741__auto___32599,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30203_32602__$1)].join('')));

}

var G__32642 = (__32600 + (1));
__32600 = G__32642;
continue;
} else {
}
break;
}

var c__29661__auto___32643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29671__auto__ = (function (){var switch__29451__auto__ = (function (state_30296){
var state_val_30297 = (state_30296[(1)]);
if((state_val_30297 === (7))){
var inst_30292 = (state_30296[(2)]);
var state_30296__$1 = state_30296;
var statearr_30315_32646 = state_30296__$1;
(statearr_30315_32646[(2)] = inst_30292);

(statearr_30315_32646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (1))){
var state_30296__$1 = state_30296;
var statearr_30316_32647 = state_30296__$1;
(statearr_30316_32647[(2)] = null);

(statearr_30316_32647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (4))){
var inst_30277 = (state_30296[(7)]);
var inst_30277__$1 = (state_30296[(2)]);
var inst_30278 = (inst_30277__$1 == null);
var state_30296__$1 = (function (){var statearr_30317 = state_30296;
(statearr_30317[(7)] = inst_30277__$1);

return statearr_30317;
})();
if(cljs.core.truth_(inst_30278)){
var statearr_30318_32648 = state_30296__$1;
(statearr_30318_32648[(1)] = (5));

} else {
var statearr_30319_32649 = state_30296__$1;
(statearr_30319_32649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (6))){
var inst_30277 = (state_30296[(7)]);
var inst_30282 = (state_30296[(8)]);
var inst_30282__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30283 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30284 = [inst_30277,inst_30282__$1];
var inst_30285 = (new cljs.core.PersistentVector(null,2,(5),inst_30283,inst_30284,null));
var state_30296__$1 = (function (){var statearr_30340 = state_30296;
(statearr_30340[(8)] = inst_30282__$1);

return statearr_30340;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30296__$1,(8),jobs,inst_30285);
} else {
if((state_val_30297 === (3))){
var inst_30294 = (state_30296[(2)]);
var state_30296__$1 = state_30296;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30296__$1,inst_30294);
} else {
if((state_val_30297 === (2))){
var state_30296__$1 = state_30296;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30296__$1,(4),from);
} else {
if((state_val_30297 === (9))){
var inst_30289 = (state_30296[(2)]);
var state_30296__$1 = (function (){var statearr_30341 = state_30296;
(statearr_30341[(9)] = inst_30289);

return statearr_30341;
})();
var statearr_30345_32650 = state_30296__$1;
(statearr_30345_32650[(2)] = null);

(statearr_30345_32650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (5))){
var inst_30280 = cljs.core.async.close_BANG_(jobs);
var state_30296__$1 = state_30296;
var statearr_30346_32651 = state_30296__$1;
(statearr_30346_32651[(2)] = inst_30280);

(statearr_30346_32651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (8))){
var inst_30282 = (state_30296[(8)]);
var inst_30287 = (state_30296[(2)]);
var state_30296__$1 = (function (){var statearr_30347 = state_30296;
(statearr_30347[(10)] = inst_30287);

return statearr_30347;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30296__$1,(9),results,inst_30282);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29452__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29452__auto____0 = (function (){
var statearr_30348 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30348[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29452__auto__);

(statearr_30348[(1)] = (1));

return statearr_30348;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29452__auto____1 = (function (state_30296){
while(true){
var ret_value__29453__auto__ = (function (){try{while(true){
var result__29454__auto__ = switch__29451__auto__(state_30296);
if(cljs.core.keyword_identical_QMARK_(result__29454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29454__auto__;
}
break;
}
}catch (e30349){var ex__29455__auto__ = e30349;
var statearr_30350_32654 = state_30296;
(statearr_30350_32654[(2)] = ex__29455__auto__);


if(cljs.core.seq((state_30296[(4)]))){
var statearr_30351_32656 = state_30296;
(statearr_30351_32656[(1)] = cljs.core.first((state_30296[(4)])));

} else {
throw ex__29455__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32660 = state_30296;
state_30296 = G__32660;
continue;
} else {
return ret_value__29453__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29452__auto__ = function(state_30296){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29452__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29452__auto____1.call(this,state_30296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29452__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29452__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29452__auto__;
})()
})();
var state__29672__auto__ = (function (){var statearr_30359 = f__29671__auto__();
(statearr_30359[(6)] = c__29661__auto___32643);

return statearr_30359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29672__auto__);
}));


var c__29661__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29671__auto__ = (function (){var switch__29451__auto__ = (function (state_30397){
var state_val_30398 = (state_30397[(1)]);
if((state_val_30398 === (7))){
var inst_30393 = (state_30397[(2)]);
var state_30397__$1 = state_30397;
var statearr_30403_32662 = state_30397__$1;
(statearr_30403_32662[(2)] = inst_30393);

(statearr_30403_32662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (20))){
var state_30397__$1 = state_30397;
var statearr_30404_32663 = state_30397__$1;
(statearr_30404_32663[(2)] = null);

(statearr_30404_32663[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (1))){
var state_30397__$1 = state_30397;
var statearr_30405_32664 = state_30397__$1;
(statearr_30405_32664[(2)] = null);

(statearr_30405_32664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (4))){
var inst_30362 = (state_30397[(7)]);
var inst_30362__$1 = (state_30397[(2)]);
var inst_30363 = (inst_30362__$1 == null);
var state_30397__$1 = (function (){var statearr_30406 = state_30397;
(statearr_30406[(7)] = inst_30362__$1);

return statearr_30406;
})();
if(cljs.core.truth_(inst_30363)){
var statearr_30407_32665 = state_30397__$1;
(statearr_30407_32665[(1)] = (5));

} else {
var statearr_30408_32666 = state_30397__$1;
(statearr_30408_32666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (15))){
var inst_30375 = (state_30397[(8)]);
var state_30397__$1 = state_30397;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30397__$1,(18),to,inst_30375);
} else {
if((state_val_30398 === (21))){
var inst_30388 = (state_30397[(2)]);
var state_30397__$1 = state_30397;
var statearr_30409_32667 = state_30397__$1;
(statearr_30409_32667[(2)] = inst_30388);

(statearr_30409_32667[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (13))){
var inst_30390 = (state_30397[(2)]);
var state_30397__$1 = (function (){var statearr_30410 = state_30397;
(statearr_30410[(9)] = inst_30390);

return statearr_30410;
})();
var statearr_30411_32668 = state_30397__$1;
(statearr_30411_32668[(2)] = null);

(statearr_30411_32668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (6))){
var inst_30362 = (state_30397[(7)]);
var state_30397__$1 = state_30397;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30397__$1,(11),inst_30362);
} else {
if((state_val_30398 === (17))){
var inst_30383 = (state_30397[(2)]);
var state_30397__$1 = state_30397;
if(cljs.core.truth_(inst_30383)){
var statearr_30412_32671 = state_30397__$1;
(statearr_30412_32671[(1)] = (19));

} else {
var statearr_30413_32672 = state_30397__$1;
(statearr_30413_32672[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (3))){
var inst_30395 = (state_30397[(2)]);
var state_30397__$1 = state_30397;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30397__$1,inst_30395);
} else {
if((state_val_30398 === (12))){
var inst_30372 = (state_30397[(10)]);
var state_30397__$1 = state_30397;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30397__$1,(14),inst_30372);
} else {
if((state_val_30398 === (2))){
var state_30397__$1 = state_30397;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30397__$1,(4),results);
} else {
if((state_val_30398 === (19))){
var state_30397__$1 = state_30397;
var statearr_30414_32673 = state_30397__$1;
(statearr_30414_32673[(2)] = null);

(statearr_30414_32673[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (11))){
var inst_30372 = (state_30397[(2)]);
var state_30397__$1 = (function (){var statearr_30415 = state_30397;
(statearr_30415[(10)] = inst_30372);

return statearr_30415;
})();
var statearr_30416_32675 = state_30397__$1;
(statearr_30416_32675[(2)] = null);

(statearr_30416_32675[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (9))){
var state_30397__$1 = state_30397;
var statearr_30417_32676 = state_30397__$1;
(statearr_30417_32676[(2)] = null);

(statearr_30417_32676[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (5))){
var state_30397__$1 = state_30397;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30418_32678 = state_30397__$1;
(statearr_30418_32678[(1)] = (8));

} else {
var statearr_30422_32679 = state_30397__$1;
(statearr_30422_32679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (14))){
var inst_30377 = (state_30397[(11)]);
var inst_30375 = (state_30397[(8)]);
var inst_30375__$1 = (state_30397[(2)]);
var inst_30376 = (inst_30375__$1 == null);
var inst_30377__$1 = cljs.core.not(inst_30376);
var state_30397__$1 = (function (){var statearr_30423 = state_30397;
(statearr_30423[(11)] = inst_30377__$1);

(statearr_30423[(8)] = inst_30375__$1);

return statearr_30423;
})();
if(inst_30377__$1){
var statearr_30424_32681 = state_30397__$1;
(statearr_30424_32681[(1)] = (15));

} else {
var statearr_30425_32682 = state_30397__$1;
(statearr_30425_32682[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (16))){
var inst_30377 = (state_30397[(11)]);
var state_30397__$1 = state_30397;
var statearr_30426_32684 = state_30397__$1;
(statearr_30426_32684[(2)] = inst_30377);

(statearr_30426_32684[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (10))){
var inst_30369 = (state_30397[(2)]);
var state_30397__$1 = state_30397;
var statearr_30427_32685 = state_30397__$1;
(statearr_30427_32685[(2)] = inst_30369);

(statearr_30427_32685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (18))){
var inst_30380 = (state_30397[(2)]);
var state_30397__$1 = state_30397;
var statearr_30428_32686 = state_30397__$1;
(statearr_30428_32686[(2)] = inst_30380);

(statearr_30428_32686[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (8))){
var inst_30366 = cljs.core.async.close_BANG_(to);
var state_30397__$1 = state_30397;
var statearr_30429_32688 = state_30397__$1;
(statearr_30429_32688[(2)] = inst_30366);

(statearr_30429_32688[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29452__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29452__auto____0 = (function (){
var statearr_30433 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30433[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29452__auto__);

(statearr_30433[(1)] = (1));

return statearr_30433;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29452__auto____1 = (function (state_30397){
while(true){
var ret_value__29453__auto__ = (function (){try{while(true){
var result__29454__auto__ = switch__29451__auto__(state_30397);
if(cljs.core.keyword_identical_QMARK_(result__29454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29454__auto__;
}
break;
}
}catch (e30435){var ex__29455__auto__ = e30435;
var statearr_30437_32690 = state_30397;
(statearr_30437_32690[(2)] = ex__29455__auto__);


if(cljs.core.seq((state_30397[(4)]))){
var statearr_30438_32691 = state_30397;
(statearr_30438_32691[(1)] = cljs.core.first((state_30397[(4)])));

} else {
throw ex__29455__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32693 = state_30397;
state_30397 = G__32693;
continue;
} else {
return ret_value__29453__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29452__auto__ = function(state_30397){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29452__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29452__auto____1.call(this,state_30397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29452__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29452__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29452__auto__;
})()
})();
var state__29672__auto__ = (function (){var statearr_30439 = f__29671__auto__();
(statearr_30439[(6)] = c__29661__auto__);

return statearr_30439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29672__auto__);
}));

return c__29661__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30441 = arguments.length;
switch (G__30441) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30447 = arguments.length;
switch (G__30447) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30454 = arguments.length;
switch (G__30454) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29661__auto___32736 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29671__auto__ = (function (){var switch__29451__auto__ = (function (state_30486){
var state_val_30487 = (state_30486[(1)]);
if((state_val_30487 === (7))){
var inst_30482 = (state_30486[(2)]);
var state_30486__$1 = state_30486;
var statearr_30488_32738 = state_30486__$1;
(statearr_30488_32738[(2)] = inst_30482);

(statearr_30488_32738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30487 === (1))){
var state_30486__$1 = state_30486;
var statearr_30489_32740 = state_30486__$1;
(statearr_30489_32740[(2)] = null);

(statearr_30489_32740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30487 === (4))){
var inst_30460 = (state_30486[(7)]);
var inst_30460__$1 = (state_30486[(2)]);
var inst_30461 = (inst_30460__$1 == null);
var state_30486__$1 = (function (){var statearr_30493 = state_30486;
(statearr_30493[(7)] = inst_30460__$1);

return statearr_30493;
})();
if(cljs.core.truth_(inst_30461)){
var statearr_30494_32744 = state_30486__$1;
(statearr_30494_32744[(1)] = (5));

} else {
var statearr_30502_32745 = state_30486__$1;
(statearr_30502_32745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30487 === (13))){
var state_30486__$1 = state_30486;
var statearr_30503_32747 = state_30486__$1;
(statearr_30503_32747[(2)] = null);

(statearr_30503_32747[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30487 === (6))){
var inst_30460 = (state_30486[(7)]);
var inst_30469 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30460) : p.call(null,inst_30460));
var state_30486__$1 = state_30486;
if(cljs.core.truth_(inst_30469)){
var statearr_30504_32748 = state_30486__$1;
(statearr_30504_32748[(1)] = (9));

} else {
var statearr_30505_32750 = state_30486__$1;
(statearr_30505_32750[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30487 === (3))){
var inst_30484 = (state_30486[(2)]);
var state_30486__$1 = state_30486;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30486__$1,inst_30484);
} else {
if((state_val_30487 === (12))){
var state_30486__$1 = state_30486;
var statearr_30506_32753 = state_30486__$1;
(statearr_30506_32753[(2)] = null);

(statearr_30506_32753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30487 === (2))){
var state_30486__$1 = state_30486;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30486__$1,(4),ch);
} else {
if((state_val_30487 === (11))){
var inst_30460 = (state_30486[(7)]);
var inst_30473 = (state_30486[(2)]);
var state_30486__$1 = state_30486;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30486__$1,(8),inst_30473,inst_30460);
} else {
if((state_val_30487 === (9))){
var state_30486__$1 = state_30486;
var statearr_30507_32755 = state_30486__$1;
(statearr_30507_32755[(2)] = tc);

(statearr_30507_32755[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30487 === (5))){
var inst_30463 = cljs.core.async.close_BANG_(tc);
var inst_30464 = cljs.core.async.close_BANG_(fc);
var state_30486__$1 = (function (){var statearr_30511 = state_30486;
(statearr_30511[(8)] = inst_30463);

return statearr_30511;
})();
var statearr_30512_32756 = state_30486__$1;
(statearr_30512_32756[(2)] = inst_30464);

(statearr_30512_32756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30487 === (14))){
var inst_30480 = (state_30486[(2)]);
var state_30486__$1 = state_30486;
var statearr_30513_32758 = state_30486__$1;
(statearr_30513_32758[(2)] = inst_30480);

(statearr_30513_32758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30487 === (10))){
var state_30486__$1 = state_30486;
var statearr_30514_32760 = state_30486__$1;
(statearr_30514_32760[(2)] = fc);

(statearr_30514_32760[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30487 === (8))){
var inst_30475 = (state_30486[(2)]);
var state_30486__$1 = state_30486;
if(cljs.core.truth_(inst_30475)){
var statearr_30515_32762 = state_30486__$1;
(statearr_30515_32762[(1)] = (12));

} else {
var statearr_30516_32763 = state_30486__$1;
(statearr_30516_32763[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29452__auto__ = null;
var cljs$core$async$state_machine__29452__auto____0 = (function (){
var statearr_30517 = [null,null,null,null,null,null,null,null,null];
(statearr_30517[(0)] = cljs$core$async$state_machine__29452__auto__);

(statearr_30517[(1)] = (1));

return statearr_30517;
});
var cljs$core$async$state_machine__29452__auto____1 = (function (state_30486){
while(true){
var ret_value__29453__auto__ = (function (){try{while(true){
var result__29454__auto__ = switch__29451__auto__(state_30486);
if(cljs.core.keyword_identical_QMARK_(result__29454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29454__auto__;
}
break;
}
}catch (e30518){var ex__29455__auto__ = e30518;
var statearr_30519_32765 = state_30486;
(statearr_30519_32765[(2)] = ex__29455__auto__);


if(cljs.core.seq((state_30486[(4)]))){
var statearr_30520_32766 = state_30486;
(statearr_30520_32766[(1)] = cljs.core.first((state_30486[(4)])));

} else {
throw ex__29455__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32767 = state_30486;
state_30486 = G__32767;
continue;
} else {
return ret_value__29453__auto__;
}
break;
}
});
cljs$core$async$state_machine__29452__auto__ = function(state_30486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29452__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29452__auto____1.call(this,state_30486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29452__auto____0;
cljs$core$async$state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29452__auto____1;
return cljs$core$async$state_machine__29452__auto__;
})()
})();
var state__29672__auto__ = (function (){var statearr_30521 = f__29671__auto__();
(statearr_30521[(6)] = c__29661__auto___32736);

return statearr_30521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29672__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29661__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29671__auto__ = (function (){var switch__29451__auto__ = (function (state_30584){
var state_val_30585 = (state_30584[(1)]);
if((state_val_30585 === (7))){
var inst_30580 = (state_30584[(2)]);
var state_30584__$1 = state_30584;
var statearr_30592_32768 = state_30584__$1;
(statearr_30592_32768[(2)] = inst_30580);

(statearr_30592_32768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (1))){
var inst_30522 = init;
var inst_30523 = inst_30522;
var state_30584__$1 = (function (){var statearr_30593 = state_30584;
(statearr_30593[(7)] = inst_30523);

return statearr_30593;
})();
var statearr_30594_32769 = state_30584__$1;
(statearr_30594_32769[(2)] = null);

(statearr_30594_32769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (4))){
var inst_30527 = (state_30584[(8)]);
var inst_30527__$1 = (state_30584[(2)]);
var inst_30528 = (inst_30527__$1 == null);
var state_30584__$1 = (function (){var statearr_30595 = state_30584;
(statearr_30595[(8)] = inst_30527__$1);

return statearr_30595;
})();
if(cljs.core.truth_(inst_30528)){
var statearr_30596_32771 = state_30584__$1;
(statearr_30596_32771[(1)] = (5));

} else {
var statearr_30597_32772 = state_30584__$1;
(statearr_30597_32772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (6))){
var inst_30527 = (state_30584[(8)]);
var inst_30534 = (state_30584[(9)]);
var inst_30523 = (state_30584[(7)]);
var inst_30534__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30523,inst_30527) : f.call(null,inst_30523,inst_30527));
var inst_30535 = cljs.core.reduced_QMARK_(inst_30534__$1);
var state_30584__$1 = (function (){var statearr_30598 = state_30584;
(statearr_30598[(9)] = inst_30534__$1);

return statearr_30598;
})();
if(inst_30535){
var statearr_30599_32773 = state_30584__$1;
(statearr_30599_32773[(1)] = (8));

} else {
var statearr_30600_32774 = state_30584__$1;
(statearr_30600_32774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (3))){
var inst_30582 = (state_30584[(2)]);
var state_30584__$1 = state_30584;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30584__$1,inst_30582);
} else {
if((state_val_30585 === (2))){
var state_30584__$1 = state_30584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30584__$1,(4),ch);
} else {
if((state_val_30585 === (9))){
var inst_30534 = (state_30584[(9)]);
var inst_30523 = inst_30534;
var state_30584__$1 = (function (){var statearr_30601 = state_30584;
(statearr_30601[(7)] = inst_30523);

return statearr_30601;
})();
var statearr_30602_32775 = state_30584__$1;
(statearr_30602_32775[(2)] = null);

(statearr_30602_32775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (5))){
var inst_30523 = (state_30584[(7)]);
var state_30584__$1 = state_30584;
var statearr_30603_32776 = state_30584__$1;
(statearr_30603_32776[(2)] = inst_30523);

(statearr_30603_32776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (10))){
var inst_30578 = (state_30584[(2)]);
var state_30584__$1 = state_30584;
var statearr_30604_32777 = state_30584__$1;
(statearr_30604_32777[(2)] = inst_30578);

(statearr_30604_32777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30585 === (8))){
var inst_30534 = (state_30584[(9)]);
var inst_30574 = cljs.core.deref(inst_30534);
var state_30584__$1 = state_30584;
var statearr_30605_32778 = state_30584__$1;
(statearr_30605_32778[(2)] = inst_30574);

(statearr_30605_32778[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29452__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29452__auto____0 = (function (){
var statearr_30606 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30606[(0)] = cljs$core$async$reduce_$_state_machine__29452__auto__);

(statearr_30606[(1)] = (1));

return statearr_30606;
});
var cljs$core$async$reduce_$_state_machine__29452__auto____1 = (function (state_30584){
while(true){
var ret_value__29453__auto__ = (function (){try{while(true){
var result__29454__auto__ = switch__29451__auto__(state_30584);
if(cljs.core.keyword_identical_QMARK_(result__29454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29454__auto__;
}
break;
}
}catch (e30607){var ex__29455__auto__ = e30607;
var statearr_30608_32782 = state_30584;
(statearr_30608_32782[(2)] = ex__29455__auto__);


if(cljs.core.seq((state_30584[(4)]))){
var statearr_30609_32783 = state_30584;
(statearr_30609_32783[(1)] = cljs.core.first((state_30584[(4)])));

} else {
throw ex__29455__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32784 = state_30584;
state_30584 = G__32784;
continue;
} else {
return ret_value__29453__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29452__auto__ = function(state_30584){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29452__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29452__auto____1.call(this,state_30584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29452__auto____0;
cljs$core$async$reduce_$_state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29452__auto____1;
return cljs$core$async$reduce_$_state_machine__29452__auto__;
})()
})();
var state__29672__auto__ = (function (){var statearr_30610 = f__29671__auto__();
(statearr_30610[(6)] = c__29661__auto__);

return statearr_30610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29672__auto__);
}));

return c__29661__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29661__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29671__auto__ = (function (){var switch__29451__auto__ = (function (state_30616){
var state_val_30617 = (state_30616[(1)]);
if((state_val_30617 === (1))){
var inst_30611 = cljs.core.async.reduce(f__$1,init,ch);
var state_30616__$1 = state_30616;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30616__$1,(2),inst_30611);
} else {
if((state_val_30617 === (2))){
var inst_30613 = (state_30616[(2)]);
var inst_30614 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30613) : f__$1.call(null,inst_30613));
var state_30616__$1 = state_30616;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30616__$1,inst_30614);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29452__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29452__auto____0 = (function (){
var statearr_30621 = [null,null,null,null,null,null,null];
(statearr_30621[(0)] = cljs$core$async$transduce_$_state_machine__29452__auto__);

(statearr_30621[(1)] = (1));

return statearr_30621;
});
var cljs$core$async$transduce_$_state_machine__29452__auto____1 = (function (state_30616){
while(true){
var ret_value__29453__auto__ = (function (){try{while(true){
var result__29454__auto__ = switch__29451__auto__(state_30616);
if(cljs.core.keyword_identical_QMARK_(result__29454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29454__auto__;
}
break;
}
}catch (e30622){var ex__29455__auto__ = e30622;
var statearr_30623_32785 = state_30616;
(statearr_30623_32785[(2)] = ex__29455__auto__);


if(cljs.core.seq((state_30616[(4)]))){
var statearr_30624_32786 = state_30616;
(statearr_30624_32786[(1)] = cljs.core.first((state_30616[(4)])));

} else {
throw ex__29455__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32787 = state_30616;
state_30616 = G__32787;
continue;
} else {
return ret_value__29453__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29452__auto__ = function(state_30616){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29452__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29452__auto____1.call(this,state_30616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29452__auto____0;
cljs$core$async$transduce_$_state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29452__auto____1;
return cljs$core$async$transduce_$_state_machine__29452__auto__;
})()
})();
var state__29672__auto__ = (function (){var statearr_30625 = f__29671__auto__();
(statearr_30625[(6)] = c__29661__auto__);

return statearr_30625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29672__auto__);
}));

return c__29661__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__30627 = arguments.length;
switch (G__30627) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29661__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29671__auto__ = (function (){var switch__29451__auto__ = (function (state_30652){
var state_val_30653 = (state_30652[(1)]);
if((state_val_30653 === (7))){
var inst_30634 = (state_30652[(2)]);
var state_30652__$1 = state_30652;
var statearr_30654_32789 = state_30652__$1;
(statearr_30654_32789[(2)] = inst_30634);

(statearr_30654_32789[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30653 === (1))){
var inst_30628 = cljs.core.seq(coll);
var inst_30629 = inst_30628;
var state_30652__$1 = (function (){var statearr_30655 = state_30652;
(statearr_30655[(7)] = inst_30629);

return statearr_30655;
})();
var statearr_30656_32790 = state_30652__$1;
(statearr_30656_32790[(2)] = null);

(statearr_30656_32790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30653 === (4))){
var inst_30629 = (state_30652[(7)]);
var inst_30632 = cljs.core.first(inst_30629);
var state_30652__$1 = state_30652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30652__$1,(7),ch,inst_30632);
} else {
if((state_val_30653 === (13))){
var inst_30646 = (state_30652[(2)]);
var state_30652__$1 = state_30652;
var statearr_30657_32791 = state_30652__$1;
(statearr_30657_32791[(2)] = inst_30646);

(statearr_30657_32791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30653 === (6))){
var inst_30637 = (state_30652[(2)]);
var state_30652__$1 = state_30652;
if(cljs.core.truth_(inst_30637)){
var statearr_30659_32792 = state_30652__$1;
(statearr_30659_32792[(1)] = (8));

} else {
var statearr_30660_32793 = state_30652__$1;
(statearr_30660_32793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30653 === (3))){
var inst_30650 = (state_30652[(2)]);
var state_30652__$1 = state_30652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30652__$1,inst_30650);
} else {
if((state_val_30653 === (12))){
var state_30652__$1 = state_30652;
var statearr_30661_32794 = state_30652__$1;
(statearr_30661_32794[(2)] = null);

(statearr_30661_32794[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30653 === (2))){
var inst_30629 = (state_30652[(7)]);
var state_30652__$1 = state_30652;
if(cljs.core.truth_(inst_30629)){
var statearr_30662_32795 = state_30652__$1;
(statearr_30662_32795[(1)] = (4));

} else {
var statearr_30663_32796 = state_30652__$1;
(statearr_30663_32796[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30653 === (11))){
var inst_30643 = cljs.core.async.close_BANG_(ch);
var state_30652__$1 = state_30652;
var statearr_30664_32797 = state_30652__$1;
(statearr_30664_32797[(2)] = inst_30643);

(statearr_30664_32797[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30653 === (9))){
var state_30652__$1 = state_30652;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30665_32798 = state_30652__$1;
(statearr_30665_32798[(1)] = (11));

} else {
var statearr_30666_32799 = state_30652__$1;
(statearr_30666_32799[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30653 === (5))){
var inst_30629 = (state_30652[(7)]);
var state_30652__$1 = state_30652;
var statearr_30676_32800 = state_30652__$1;
(statearr_30676_32800[(2)] = inst_30629);

(statearr_30676_32800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30653 === (10))){
var inst_30648 = (state_30652[(2)]);
var state_30652__$1 = state_30652;
var statearr_30677_32805 = state_30652__$1;
(statearr_30677_32805[(2)] = inst_30648);

(statearr_30677_32805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30653 === (8))){
var inst_30629 = (state_30652[(7)]);
var inst_30639 = cljs.core.next(inst_30629);
var inst_30629__$1 = inst_30639;
var state_30652__$1 = (function (){var statearr_30678 = state_30652;
(statearr_30678[(7)] = inst_30629__$1);

return statearr_30678;
})();
var statearr_30679_32815 = state_30652__$1;
(statearr_30679_32815[(2)] = null);

(statearr_30679_32815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29452__auto__ = null;
var cljs$core$async$state_machine__29452__auto____0 = (function (){
var statearr_30680 = [null,null,null,null,null,null,null,null];
(statearr_30680[(0)] = cljs$core$async$state_machine__29452__auto__);

(statearr_30680[(1)] = (1));

return statearr_30680;
});
var cljs$core$async$state_machine__29452__auto____1 = (function (state_30652){
while(true){
var ret_value__29453__auto__ = (function (){try{while(true){
var result__29454__auto__ = switch__29451__auto__(state_30652);
if(cljs.core.keyword_identical_QMARK_(result__29454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29454__auto__;
}
break;
}
}catch (e30681){var ex__29455__auto__ = e30681;
var statearr_30682_32820 = state_30652;
(statearr_30682_32820[(2)] = ex__29455__auto__);


if(cljs.core.seq((state_30652[(4)]))){
var statearr_30683_32821 = state_30652;
(statearr_30683_32821[(1)] = cljs.core.first((state_30652[(4)])));

} else {
throw ex__29455__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32823 = state_30652;
state_30652 = G__32823;
continue;
} else {
return ret_value__29453__auto__;
}
break;
}
});
cljs$core$async$state_machine__29452__auto__ = function(state_30652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29452__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29452__auto____1.call(this,state_30652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29452__auto____0;
cljs$core$async$state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29452__auto____1;
return cljs$core$async$state_machine__29452__auto__;
})()
})();
var state__29672__auto__ = (function (){var statearr_30684 = f__29671__auto__();
(statearr_30684[(6)] = c__29661__auto__);

return statearr_30684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29672__auto__);
}));

return c__29661__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30776 = arguments.length;
switch (G__30776) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32837 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32837(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32842 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32842(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32848 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32848(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32853 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32853(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30808 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30808 = (function (ch,cs,meta30809){
this.ch = ch;
this.cs = cs;
this.meta30809 = meta30809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30810,meta30809__$1){
var self__ = this;
var _30810__$1 = this;
return (new cljs.core.async.t_cljs$core$async30808(self__.ch,self__.cs,meta30809__$1));
}));

(cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30810){
var self__ = this;
var _30810__$1 = this;
return self__.meta30809;
}));

(cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30809","meta30809",1884724072,null)], null);
}));

(cljs.core.async.t_cljs$core$async30808.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30808.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30808");

(cljs.core.async.t_cljs$core$async30808.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30808");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30808.
 */
cljs.core.async.__GT_t_cljs$core$async30808 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30808(ch__$1,cs__$1,meta30809){
return (new cljs.core.async.t_cljs$core$async30808(ch__$1,cs__$1,meta30809));
});

}

return (new cljs.core.async.t_cljs$core$async30808(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29661__auto___32895 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29671__auto__ = (function (){var switch__29451__auto__ = (function (state_30977){
var state_val_30978 = (state_30977[(1)]);
if((state_val_30978 === (7))){
var inst_30972 = (state_30977[(2)]);
var state_30977__$1 = state_30977;
var statearr_30979_32896 = state_30977__$1;
(statearr_30979_32896[(2)] = inst_30972);

(statearr_30979_32896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (20))){
var inst_30865 = (state_30977[(7)]);
var inst_30877 = cljs.core.first(inst_30865);
var inst_30878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30877,(0),null);
var inst_30879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30877,(1),null);
var state_30977__$1 = (function (){var statearr_30980 = state_30977;
(statearr_30980[(8)] = inst_30878);

return statearr_30980;
})();
if(cljs.core.truth_(inst_30879)){
var statearr_30981_32897 = state_30977__$1;
(statearr_30981_32897[(1)] = (22));

} else {
var statearr_30982_32898 = state_30977__$1;
(statearr_30982_32898[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (27))){
var inst_30914 = (state_30977[(9)]);
var inst_30834 = (state_30977[(10)]);
var inst_30909 = (state_30977[(11)]);
var inst_30907 = (state_30977[(12)]);
var inst_30914__$1 = cljs.core._nth(inst_30907,inst_30909);
var inst_30919 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30914__$1,inst_30834,done);
var state_30977__$1 = (function (){var statearr_30983 = state_30977;
(statearr_30983[(9)] = inst_30914__$1);

return statearr_30983;
})();
if(cljs.core.truth_(inst_30919)){
var statearr_30984_32899 = state_30977__$1;
(statearr_30984_32899[(1)] = (30));

} else {
var statearr_30985_32900 = state_30977__$1;
(statearr_30985_32900[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (1))){
var state_30977__$1 = state_30977;
var statearr_30986_32902 = state_30977__$1;
(statearr_30986_32902[(2)] = null);

(statearr_30986_32902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (24))){
var inst_30865 = (state_30977[(7)]);
var inst_30884 = (state_30977[(2)]);
var inst_30885 = cljs.core.next(inst_30865);
var inst_30843 = inst_30885;
var inst_30844 = null;
var inst_30845 = (0);
var inst_30846 = (0);
var state_30977__$1 = (function (){var statearr_30987 = state_30977;
(statearr_30987[(13)] = inst_30884);

(statearr_30987[(14)] = inst_30846);

(statearr_30987[(15)] = inst_30844);

(statearr_30987[(16)] = inst_30843);

(statearr_30987[(17)] = inst_30845);

return statearr_30987;
})();
var statearr_30988_32904 = state_30977__$1;
(statearr_30988_32904[(2)] = null);

(statearr_30988_32904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (39))){
var state_30977__$1 = state_30977;
var statearr_30995_32905 = state_30977__$1;
(statearr_30995_32905[(2)] = null);

(statearr_30995_32905[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (4))){
var inst_30834 = (state_30977[(10)]);
var inst_30834__$1 = (state_30977[(2)]);
var inst_30835 = (inst_30834__$1 == null);
var state_30977__$1 = (function (){var statearr_30996 = state_30977;
(statearr_30996[(10)] = inst_30834__$1);

return statearr_30996;
})();
if(cljs.core.truth_(inst_30835)){
var statearr_30997_32910 = state_30977__$1;
(statearr_30997_32910[(1)] = (5));

} else {
var statearr_30998_32911 = state_30977__$1;
(statearr_30998_32911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (15))){
var inst_30846 = (state_30977[(14)]);
var inst_30844 = (state_30977[(15)]);
var inst_30843 = (state_30977[(16)]);
var inst_30845 = (state_30977[(17)]);
var inst_30861 = (state_30977[(2)]);
var inst_30862 = (inst_30846 + (1));
var tmp30992 = inst_30844;
var tmp30993 = inst_30843;
var tmp30994 = inst_30845;
var inst_30843__$1 = tmp30993;
var inst_30844__$1 = tmp30992;
var inst_30845__$1 = tmp30994;
var inst_30846__$1 = inst_30862;
var state_30977__$1 = (function (){var statearr_30999 = state_30977;
(statearr_30999[(14)] = inst_30846__$1);

(statearr_30999[(15)] = inst_30844__$1);

(statearr_30999[(16)] = inst_30843__$1);

(statearr_30999[(18)] = inst_30861);

(statearr_30999[(17)] = inst_30845__$1);

return statearr_30999;
})();
var statearr_31000_32916 = state_30977__$1;
(statearr_31000_32916[(2)] = null);

(statearr_31000_32916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (21))){
var inst_30888 = (state_30977[(2)]);
var state_30977__$1 = state_30977;
var statearr_31004_32917 = state_30977__$1;
(statearr_31004_32917[(2)] = inst_30888);

(statearr_31004_32917[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (31))){
var inst_30914 = (state_30977[(9)]);
var inst_30930 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30914);
var state_30977__$1 = state_30977;
var statearr_31005_32918 = state_30977__$1;
(statearr_31005_32918[(2)] = inst_30930);

(statearr_31005_32918[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (32))){
var inst_30908 = (state_30977[(19)]);
var inst_30909 = (state_30977[(11)]);
var inst_30907 = (state_30977[(12)]);
var inst_30906 = (state_30977[(20)]);
var inst_30932 = (state_30977[(2)]);
var inst_30933 = (inst_30909 + (1));
var tmp31001 = inst_30908;
var tmp31002 = inst_30907;
var tmp31003 = inst_30906;
var inst_30906__$1 = tmp31003;
var inst_30907__$1 = tmp31002;
var inst_30908__$1 = tmp31001;
var inst_30909__$1 = inst_30933;
var state_30977__$1 = (function (){var statearr_31006 = state_30977;
(statearr_31006[(19)] = inst_30908__$1);

(statearr_31006[(11)] = inst_30909__$1);

(statearr_31006[(12)] = inst_30907__$1);

(statearr_31006[(20)] = inst_30906__$1);

(statearr_31006[(21)] = inst_30932);

return statearr_31006;
})();
var statearr_31007_32922 = state_30977__$1;
(statearr_31007_32922[(2)] = null);

(statearr_31007_32922[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (40))){
var inst_30945 = (state_30977[(22)]);
var inst_30949 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30945);
var state_30977__$1 = state_30977;
var statearr_31008_32923 = state_30977__$1;
(statearr_31008_32923[(2)] = inst_30949);

(statearr_31008_32923[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (33))){
var inst_30936 = (state_30977[(23)]);
var inst_30938 = cljs.core.chunked_seq_QMARK_(inst_30936);
var state_30977__$1 = state_30977;
if(inst_30938){
var statearr_31019_32925 = state_30977__$1;
(statearr_31019_32925[(1)] = (36));

} else {
var statearr_31020_32927 = state_30977__$1;
(statearr_31020_32927[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (13))){
var inst_30855 = (state_30977[(24)]);
var inst_30858 = cljs.core.async.close_BANG_(inst_30855);
var state_30977__$1 = state_30977;
var statearr_31021_32929 = state_30977__$1;
(statearr_31021_32929[(2)] = inst_30858);

(statearr_31021_32929[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (22))){
var inst_30878 = (state_30977[(8)]);
var inst_30881 = cljs.core.async.close_BANG_(inst_30878);
var state_30977__$1 = state_30977;
var statearr_31022_32933 = state_30977__$1;
(statearr_31022_32933[(2)] = inst_30881);

(statearr_31022_32933[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (36))){
var inst_30936 = (state_30977[(23)]);
var inst_30940 = cljs.core.chunk_first(inst_30936);
var inst_30941 = cljs.core.chunk_rest(inst_30936);
var inst_30942 = cljs.core.count(inst_30940);
var inst_30906 = inst_30941;
var inst_30907 = inst_30940;
var inst_30908 = inst_30942;
var inst_30909 = (0);
var state_30977__$1 = (function (){var statearr_31023 = state_30977;
(statearr_31023[(19)] = inst_30908);

(statearr_31023[(11)] = inst_30909);

(statearr_31023[(12)] = inst_30907);

(statearr_31023[(20)] = inst_30906);

return statearr_31023;
})();
var statearr_31024_32937 = state_30977__$1;
(statearr_31024_32937[(2)] = null);

(statearr_31024_32937[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (41))){
var inst_30936 = (state_30977[(23)]);
var inst_30951 = (state_30977[(2)]);
var inst_30952 = cljs.core.next(inst_30936);
var inst_30906 = inst_30952;
var inst_30907 = null;
var inst_30908 = (0);
var inst_30909 = (0);
var state_30977__$1 = (function (){var statearr_31025 = state_30977;
(statearr_31025[(19)] = inst_30908);

(statearr_31025[(25)] = inst_30951);

(statearr_31025[(11)] = inst_30909);

(statearr_31025[(12)] = inst_30907);

(statearr_31025[(20)] = inst_30906);

return statearr_31025;
})();
var statearr_31026_32942 = state_30977__$1;
(statearr_31026_32942[(2)] = null);

(statearr_31026_32942[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (43))){
var state_30977__$1 = state_30977;
var statearr_31027_32945 = state_30977__$1;
(statearr_31027_32945[(2)] = null);

(statearr_31027_32945[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (29))){
var inst_30960 = (state_30977[(2)]);
var state_30977__$1 = state_30977;
var statearr_31028_32948 = state_30977__$1;
(statearr_31028_32948[(2)] = inst_30960);

(statearr_31028_32948[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (44))){
var inst_30969 = (state_30977[(2)]);
var state_30977__$1 = (function (){var statearr_31029 = state_30977;
(statearr_31029[(26)] = inst_30969);

return statearr_31029;
})();
var statearr_31030_32949 = state_30977__$1;
(statearr_31030_32949[(2)] = null);

(statearr_31030_32949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (6))){
var inst_30898 = (state_30977[(27)]);
var inst_30897 = cljs.core.deref(cs);
var inst_30898__$1 = cljs.core.keys(inst_30897);
var inst_30899 = cljs.core.count(inst_30898__$1);
var inst_30900 = cljs.core.reset_BANG_(dctr,inst_30899);
var inst_30905 = cljs.core.seq(inst_30898__$1);
var inst_30906 = inst_30905;
var inst_30907 = null;
var inst_30908 = (0);
var inst_30909 = (0);
var state_30977__$1 = (function (){var statearr_31031 = state_30977;
(statearr_31031[(28)] = inst_30900);

(statearr_31031[(19)] = inst_30908);

(statearr_31031[(27)] = inst_30898__$1);

(statearr_31031[(11)] = inst_30909);

(statearr_31031[(12)] = inst_30907);

(statearr_31031[(20)] = inst_30906);

return statearr_31031;
})();
var statearr_31032_32950 = state_30977__$1;
(statearr_31032_32950[(2)] = null);

(statearr_31032_32950[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (28))){
var inst_30936 = (state_30977[(23)]);
var inst_30906 = (state_30977[(20)]);
var inst_30936__$1 = cljs.core.seq(inst_30906);
var state_30977__$1 = (function (){var statearr_31033 = state_30977;
(statearr_31033[(23)] = inst_30936__$1);

return statearr_31033;
})();
if(inst_30936__$1){
var statearr_31034_32951 = state_30977__$1;
(statearr_31034_32951[(1)] = (33));

} else {
var statearr_31035_32952 = state_30977__$1;
(statearr_31035_32952[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (25))){
var inst_30908 = (state_30977[(19)]);
var inst_30909 = (state_30977[(11)]);
var inst_30911 = (inst_30909 < inst_30908);
var inst_30912 = inst_30911;
var state_30977__$1 = state_30977;
if(cljs.core.truth_(inst_30912)){
var statearr_31036_32958 = state_30977__$1;
(statearr_31036_32958[(1)] = (27));

} else {
var statearr_31037_32960 = state_30977__$1;
(statearr_31037_32960[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (34))){
var state_30977__$1 = state_30977;
var statearr_31038_32963 = state_30977__$1;
(statearr_31038_32963[(2)] = null);

(statearr_31038_32963[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (17))){
var state_30977__$1 = state_30977;
var statearr_31039_32966 = state_30977__$1;
(statearr_31039_32966[(2)] = null);

(statearr_31039_32966[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (3))){
var inst_30974 = (state_30977[(2)]);
var state_30977__$1 = state_30977;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30977__$1,inst_30974);
} else {
if((state_val_30978 === (12))){
var inst_30893 = (state_30977[(2)]);
var state_30977__$1 = state_30977;
var statearr_31040_32969 = state_30977__$1;
(statearr_31040_32969[(2)] = inst_30893);

(statearr_31040_32969[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (2))){
var state_30977__$1 = state_30977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30977__$1,(4),ch);
} else {
if((state_val_30978 === (23))){
var state_30977__$1 = state_30977;
var statearr_31041_32972 = state_30977__$1;
(statearr_31041_32972[(2)] = null);

(statearr_31041_32972[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (35))){
var inst_30958 = (state_30977[(2)]);
var state_30977__$1 = state_30977;
var statearr_31042_32973 = state_30977__$1;
(statearr_31042_32973[(2)] = inst_30958);

(statearr_31042_32973[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (19))){
var inst_30865 = (state_30977[(7)]);
var inst_30869 = cljs.core.chunk_first(inst_30865);
var inst_30870 = cljs.core.chunk_rest(inst_30865);
var inst_30871 = cljs.core.count(inst_30869);
var inst_30843 = inst_30870;
var inst_30844 = inst_30869;
var inst_30845 = inst_30871;
var inst_30846 = (0);
var state_30977__$1 = (function (){var statearr_31043 = state_30977;
(statearr_31043[(14)] = inst_30846);

(statearr_31043[(15)] = inst_30844);

(statearr_31043[(16)] = inst_30843);

(statearr_31043[(17)] = inst_30845);

return statearr_31043;
})();
var statearr_31044_32981 = state_30977__$1;
(statearr_31044_32981[(2)] = null);

(statearr_31044_32981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (11))){
var inst_30843 = (state_30977[(16)]);
var inst_30865 = (state_30977[(7)]);
var inst_30865__$1 = cljs.core.seq(inst_30843);
var state_30977__$1 = (function (){var statearr_31045 = state_30977;
(statearr_31045[(7)] = inst_30865__$1);

return statearr_31045;
})();
if(inst_30865__$1){
var statearr_31046_32987 = state_30977__$1;
(statearr_31046_32987[(1)] = (16));

} else {
var statearr_31047_32988 = state_30977__$1;
(statearr_31047_32988[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (9))){
var inst_30895 = (state_30977[(2)]);
var state_30977__$1 = state_30977;
var statearr_31048_32989 = state_30977__$1;
(statearr_31048_32989[(2)] = inst_30895);

(statearr_31048_32989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (5))){
var inst_30841 = cljs.core.deref(cs);
var inst_30842 = cljs.core.seq(inst_30841);
var inst_30843 = inst_30842;
var inst_30844 = null;
var inst_30845 = (0);
var inst_30846 = (0);
var state_30977__$1 = (function (){var statearr_31049 = state_30977;
(statearr_31049[(14)] = inst_30846);

(statearr_31049[(15)] = inst_30844);

(statearr_31049[(16)] = inst_30843);

(statearr_31049[(17)] = inst_30845);

return statearr_31049;
})();
var statearr_31050_32990 = state_30977__$1;
(statearr_31050_32990[(2)] = null);

(statearr_31050_32990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (14))){
var state_30977__$1 = state_30977;
var statearr_31051_32991 = state_30977__$1;
(statearr_31051_32991[(2)] = null);

(statearr_31051_32991[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (45))){
var inst_30966 = (state_30977[(2)]);
var state_30977__$1 = state_30977;
var statearr_31052_32992 = state_30977__$1;
(statearr_31052_32992[(2)] = inst_30966);

(statearr_31052_32992[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (26))){
var inst_30898 = (state_30977[(27)]);
var inst_30962 = (state_30977[(2)]);
var inst_30963 = cljs.core.seq(inst_30898);
var state_30977__$1 = (function (){var statearr_31053 = state_30977;
(statearr_31053[(29)] = inst_30962);

return statearr_31053;
})();
if(inst_30963){
var statearr_31054_32996 = state_30977__$1;
(statearr_31054_32996[(1)] = (42));

} else {
var statearr_31055_33006 = state_30977__$1;
(statearr_31055_33006[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (16))){
var inst_30865 = (state_30977[(7)]);
var inst_30867 = cljs.core.chunked_seq_QMARK_(inst_30865);
var state_30977__$1 = state_30977;
if(inst_30867){
var statearr_31056_33008 = state_30977__$1;
(statearr_31056_33008[(1)] = (19));

} else {
var statearr_31057_33009 = state_30977__$1;
(statearr_31057_33009[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (38))){
var inst_30955 = (state_30977[(2)]);
var state_30977__$1 = state_30977;
var statearr_31058_33015 = state_30977__$1;
(statearr_31058_33015[(2)] = inst_30955);

(statearr_31058_33015[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (30))){
var state_30977__$1 = state_30977;
var statearr_31059_33079 = state_30977__$1;
(statearr_31059_33079[(2)] = null);

(statearr_31059_33079[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (10))){
var inst_30846 = (state_30977[(14)]);
var inst_30844 = (state_30977[(15)]);
var inst_30854 = cljs.core._nth(inst_30844,inst_30846);
var inst_30855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30854,(0),null);
var inst_30856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30854,(1),null);
var state_30977__$1 = (function (){var statearr_31060 = state_30977;
(statearr_31060[(24)] = inst_30855);

return statearr_31060;
})();
if(cljs.core.truth_(inst_30856)){
var statearr_31061_33106 = state_30977__$1;
(statearr_31061_33106[(1)] = (13));

} else {
var statearr_31062_33114 = state_30977__$1;
(statearr_31062_33114[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (18))){
var inst_30891 = (state_30977[(2)]);
var state_30977__$1 = state_30977;
var statearr_31063_33115 = state_30977__$1;
(statearr_31063_33115[(2)] = inst_30891);

(statearr_31063_33115[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (42))){
var state_30977__$1 = state_30977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30977__$1,(45),dchan);
} else {
if((state_val_30978 === (37))){
var inst_30834 = (state_30977[(10)]);
var inst_30936 = (state_30977[(23)]);
var inst_30945 = (state_30977[(22)]);
var inst_30945__$1 = cljs.core.first(inst_30936);
var inst_30946 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30945__$1,inst_30834,done);
var state_30977__$1 = (function (){var statearr_31066 = state_30977;
(statearr_31066[(22)] = inst_30945__$1);

return statearr_31066;
})();
if(cljs.core.truth_(inst_30946)){
var statearr_31067_33127 = state_30977__$1;
(statearr_31067_33127[(1)] = (39));

} else {
var statearr_31068_33128 = state_30977__$1;
(statearr_31068_33128[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30978 === (8))){
var inst_30846 = (state_30977[(14)]);
var inst_30845 = (state_30977[(17)]);
var inst_30848 = (inst_30846 < inst_30845);
var inst_30849 = inst_30848;
var state_30977__$1 = state_30977;
if(cljs.core.truth_(inst_30849)){
var statearr_31069_33133 = state_30977__$1;
(statearr_31069_33133[(1)] = (10));

} else {
var statearr_31070_33136 = state_30977__$1;
(statearr_31070_33136[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29452__auto__ = null;
var cljs$core$async$mult_$_state_machine__29452__auto____0 = (function (){
var statearr_31075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31075[(0)] = cljs$core$async$mult_$_state_machine__29452__auto__);

(statearr_31075[(1)] = (1));

return statearr_31075;
});
var cljs$core$async$mult_$_state_machine__29452__auto____1 = (function (state_30977){
while(true){
var ret_value__29453__auto__ = (function (){try{while(true){
var result__29454__auto__ = switch__29451__auto__(state_30977);
if(cljs.core.keyword_identical_QMARK_(result__29454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29454__auto__;
}
break;
}
}catch (e31077){var ex__29455__auto__ = e31077;
var statearr_31078_33143 = state_30977;
(statearr_31078_33143[(2)] = ex__29455__auto__);


if(cljs.core.seq((state_30977[(4)]))){
var statearr_31079_33144 = state_30977;
(statearr_31079_33144[(1)] = cljs.core.first((state_30977[(4)])));

} else {
throw ex__29455__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33145 = state_30977;
state_30977 = G__33145;
continue;
} else {
return ret_value__29453__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29452__auto__ = function(state_30977){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29452__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29452__auto____1.call(this,state_30977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29452__auto____0;
cljs$core$async$mult_$_state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29452__auto____1;
return cljs$core$async$mult_$_state_machine__29452__auto__;
})()
})();
var state__29672__auto__ = (function (){var statearr_31081 = f__29671__auto__();
(statearr_31081[(6)] = c__29661__auto___32895);

return statearr_31081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29672__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31083 = arguments.length;
switch (G__31083) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33169 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33169(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33172 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33172(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33173 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33173(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33174 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33174(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33181 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33181(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___33193 = arguments.length;
var i__4865__auto___33194 = (0);
while(true){
if((i__4865__auto___33194 < len__4864__auto___33193)){
args__4870__auto__.push((arguments[i__4865__auto___33194]));

var G__33195 = (i__4865__auto___33194 + (1));
i__4865__auto___33194 = G__33195;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31104){
var map__31105 = p__31104;
var map__31105__$1 = cljs.core.__destructure_map(map__31105);
var opts = map__31105__$1;
var statearr_31106_33201 = state;
(statearr_31106_33201[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31111_33202 = state;
(statearr_31111_33202[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_31112_33204 = state;
(statearr_31112_33204[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31095){
var G__31096 = cljs.core.first(seq31095);
var seq31095__$1 = cljs.core.next(seq31095);
var G__31097 = cljs.core.first(seq31095__$1);
var seq31095__$2 = cljs.core.next(seq31095__$1);
var G__31098 = cljs.core.first(seq31095__$2);
var seq31095__$3 = cljs.core.next(seq31095__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31096,G__31097,G__31098,seq31095__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31120 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31120 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31121){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31121 = meta31121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31122,meta31121__$1){
var self__ = this;
var _31122__$1 = this;
return (new cljs.core.async.t_cljs$core$async31120(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31121__$1));
}));

(cljs.core.async.t_cljs$core$async31120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31122){
var self__ = this;
var _31122__$1 = this;
return self__.meta31121;
}));

(cljs.core.async.t_cljs$core$async31120.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31120.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31120.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31120.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31120.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31120.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31120.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31120.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31120.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31121","meta31121",28289310,null)], null);
}));

(cljs.core.async.t_cljs$core$async31120.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31120.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31120");

(cljs.core.async.t_cljs$core$async31120.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31120");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31120.
 */
cljs.core.async.__GT_t_cljs$core$async31120 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31120(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31121){
return (new cljs.core.async.t_cljs$core$async31120(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31121));
});

}

return (new cljs.core.async.t_cljs$core$async31120(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29661__auto___33281 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29671__auto__ = (function (){var switch__29451__auto__ = (function (state_31203){
var state_val_31204 = (state_31203[(1)]);
if((state_val_31204 === (7))){
var inst_31163 = (state_31203[(2)]);
var state_31203__$1 = state_31203;
if(cljs.core.truth_(inst_31163)){
var statearr_31205_33291 = state_31203__$1;
(statearr_31205_33291[(1)] = (8));

} else {
var statearr_31206_33292 = state_31203__$1;
(statearr_31206_33292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (20))){
var inst_31156 = (state_31203[(7)]);
var state_31203__$1 = state_31203;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31203__$1,(23),out,inst_31156);
} else {
if((state_val_31204 === (1))){
var inst_31139 = calc_state();
var inst_31140 = cljs.core.__destructure_map(inst_31139);
var inst_31141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31140,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31140,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31140,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31144 = inst_31139;
var state_31203__$1 = (function (){var statearr_31211 = state_31203;
(statearr_31211[(8)] = inst_31143);

(statearr_31211[(9)] = inst_31144);

(statearr_31211[(10)] = inst_31141);

(statearr_31211[(11)] = inst_31142);

return statearr_31211;
})();
var statearr_31212_33296 = state_31203__$1;
(statearr_31212_33296[(2)] = null);

(statearr_31212_33296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (24))){
var inst_31147 = (state_31203[(12)]);
var inst_31144 = inst_31147;
var state_31203__$1 = (function (){var statearr_31213 = state_31203;
(statearr_31213[(9)] = inst_31144);

return statearr_31213;
})();
var statearr_31214_33300 = state_31203__$1;
(statearr_31214_33300[(2)] = null);

(statearr_31214_33300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (4))){
var inst_31158 = (state_31203[(13)]);
var inst_31156 = (state_31203[(7)]);
var inst_31155 = (state_31203[(2)]);
var inst_31156__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31155,(0),null);
var inst_31157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31155,(1),null);
var inst_31158__$1 = (inst_31156__$1 == null);
var state_31203__$1 = (function (){var statearr_31215 = state_31203;
(statearr_31215[(14)] = inst_31157);

(statearr_31215[(13)] = inst_31158__$1);

(statearr_31215[(7)] = inst_31156__$1);

return statearr_31215;
})();
if(cljs.core.truth_(inst_31158__$1)){
var statearr_31216_33301 = state_31203__$1;
(statearr_31216_33301[(1)] = (5));

} else {
var statearr_31217_33302 = state_31203__$1;
(statearr_31217_33302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (15))){
var inst_31177 = (state_31203[(15)]);
var inst_31148 = (state_31203[(16)]);
var inst_31177__$1 = cljs.core.empty_QMARK_(inst_31148);
var state_31203__$1 = (function (){var statearr_31219 = state_31203;
(statearr_31219[(15)] = inst_31177__$1);

return statearr_31219;
})();
if(inst_31177__$1){
var statearr_31220_33308 = state_31203__$1;
(statearr_31220_33308[(1)] = (17));

} else {
var statearr_31221_33309 = state_31203__$1;
(statearr_31221_33309[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (21))){
var inst_31147 = (state_31203[(12)]);
var inst_31144 = inst_31147;
var state_31203__$1 = (function (){var statearr_31222 = state_31203;
(statearr_31222[(9)] = inst_31144);

return statearr_31222;
})();
var statearr_31223_33314 = state_31203__$1;
(statearr_31223_33314[(2)] = null);

(statearr_31223_33314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (13))){
var inst_31170 = (state_31203[(2)]);
var inst_31171 = calc_state();
var inst_31144 = inst_31171;
var state_31203__$1 = (function (){var statearr_31224 = state_31203;
(statearr_31224[(9)] = inst_31144);

(statearr_31224[(17)] = inst_31170);

return statearr_31224;
})();
var statearr_31225_33315 = state_31203__$1;
(statearr_31225_33315[(2)] = null);

(statearr_31225_33315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (22))){
var inst_31197 = (state_31203[(2)]);
var state_31203__$1 = state_31203;
var statearr_31226_33316 = state_31203__$1;
(statearr_31226_33316[(2)] = inst_31197);

(statearr_31226_33316[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (6))){
var inst_31157 = (state_31203[(14)]);
var inst_31161 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31157,change);
var state_31203__$1 = state_31203;
var statearr_31227_33321 = state_31203__$1;
(statearr_31227_33321[(2)] = inst_31161);

(statearr_31227_33321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (25))){
var state_31203__$1 = state_31203;
var statearr_31228_33322 = state_31203__$1;
(statearr_31228_33322[(2)] = null);

(statearr_31228_33322[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (17))){
var inst_31157 = (state_31203[(14)]);
var inst_31149 = (state_31203[(18)]);
var inst_31179 = (inst_31149.cljs$core$IFn$_invoke$arity$1 ? inst_31149.cljs$core$IFn$_invoke$arity$1(inst_31157) : inst_31149.call(null,inst_31157));
var inst_31180 = cljs.core.not(inst_31179);
var state_31203__$1 = state_31203;
var statearr_31229_33323 = state_31203__$1;
(statearr_31229_33323[(2)] = inst_31180);

(statearr_31229_33323[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (3))){
var inst_31201 = (state_31203[(2)]);
var state_31203__$1 = state_31203;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31203__$1,inst_31201);
} else {
if((state_val_31204 === (12))){
var state_31203__$1 = state_31203;
var statearr_31230_33324 = state_31203__$1;
(statearr_31230_33324[(2)] = null);

(statearr_31230_33324[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (2))){
var inst_31147 = (state_31203[(12)]);
var inst_31144 = (state_31203[(9)]);
var inst_31147__$1 = cljs.core.__destructure_map(inst_31144);
var inst_31148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31147__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31147__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31150 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31147__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31203__$1 = (function (){var statearr_31231 = state_31203;
(statearr_31231[(12)] = inst_31147__$1);

(statearr_31231[(16)] = inst_31148);

(statearr_31231[(18)] = inst_31149);

return statearr_31231;
})();
return cljs.core.async.ioc_alts_BANG_(state_31203__$1,(4),inst_31150);
} else {
if((state_val_31204 === (23))){
var inst_31188 = (state_31203[(2)]);
var state_31203__$1 = state_31203;
if(cljs.core.truth_(inst_31188)){
var statearr_31233_33328 = state_31203__$1;
(statearr_31233_33328[(1)] = (24));

} else {
var statearr_31234_33330 = state_31203__$1;
(statearr_31234_33330[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (19))){
var inst_31183 = (state_31203[(2)]);
var state_31203__$1 = state_31203;
var statearr_31235_33331 = state_31203__$1;
(statearr_31235_33331[(2)] = inst_31183);

(statearr_31235_33331[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (11))){
var inst_31157 = (state_31203[(14)]);
var inst_31167 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31157);
var state_31203__$1 = state_31203;
var statearr_31237_33332 = state_31203__$1;
(statearr_31237_33332[(2)] = inst_31167);

(statearr_31237_33332[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (9))){
var inst_31157 = (state_31203[(14)]);
var inst_31174 = (state_31203[(19)]);
var inst_31148 = (state_31203[(16)]);
var inst_31174__$1 = (inst_31148.cljs$core$IFn$_invoke$arity$1 ? inst_31148.cljs$core$IFn$_invoke$arity$1(inst_31157) : inst_31148.call(null,inst_31157));
var state_31203__$1 = (function (){var statearr_31238 = state_31203;
(statearr_31238[(19)] = inst_31174__$1);

return statearr_31238;
})();
if(cljs.core.truth_(inst_31174__$1)){
var statearr_31239_33333 = state_31203__$1;
(statearr_31239_33333[(1)] = (14));

} else {
var statearr_31240_33334 = state_31203__$1;
(statearr_31240_33334[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (5))){
var inst_31158 = (state_31203[(13)]);
var state_31203__$1 = state_31203;
var statearr_31241_33335 = state_31203__$1;
(statearr_31241_33335[(2)] = inst_31158);

(statearr_31241_33335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (14))){
var inst_31174 = (state_31203[(19)]);
var state_31203__$1 = state_31203;
var statearr_31242_33336 = state_31203__$1;
(statearr_31242_33336[(2)] = inst_31174);

(statearr_31242_33336[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (26))){
var inst_31193 = (state_31203[(2)]);
var state_31203__$1 = state_31203;
var statearr_31243_33337 = state_31203__$1;
(statearr_31243_33337[(2)] = inst_31193);

(statearr_31243_33337[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (16))){
var inst_31185 = (state_31203[(2)]);
var state_31203__$1 = state_31203;
if(cljs.core.truth_(inst_31185)){
var statearr_31244_33338 = state_31203__$1;
(statearr_31244_33338[(1)] = (20));

} else {
var statearr_31245_33339 = state_31203__$1;
(statearr_31245_33339[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (10))){
var inst_31199 = (state_31203[(2)]);
var state_31203__$1 = state_31203;
var statearr_31247_33340 = state_31203__$1;
(statearr_31247_33340[(2)] = inst_31199);

(statearr_31247_33340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (18))){
var inst_31177 = (state_31203[(15)]);
var state_31203__$1 = state_31203;
var statearr_31248_33341 = state_31203__$1;
(statearr_31248_33341[(2)] = inst_31177);

(statearr_31248_33341[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (8))){
var inst_31156 = (state_31203[(7)]);
var inst_31165 = (inst_31156 == null);
var state_31203__$1 = state_31203;
if(cljs.core.truth_(inst_31165)){
var statearr_31249_33342 = state_31203__$1;
(statearr_31249_33342[(1)] = (11));

} else {
var statearr_31250_33343 = state_31203__$1;
(statearr_31250_33343[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29452__auto__ = null;
var cljs$core$async$mix_$_state_machine__29452__auto____0 = (function (){
var statearr_31252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31252[(0)] = cljs$core$async$mix_$_state_machine__29452__auto__);

(statearr_31252[(1)] = (1));

return statearr_31252;
});
var cljs$core$async$mix_$_state_machine__29452__auto____1 = (function (state_31203){
while(true){
var ret_value__29453__auto__ = (function (){try{while(true){
var result__29454__auto__ = switch__29451__auto__(state_31203);
if(cljs.core.keyword_identical_QMARK_(result__29454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29454__auto__;
}
break;
}
}catch (e31253){var ex__29455__auto__ = e31253;
var statearr_31254_33347 = state_31203;
(statearr_31254_33347[(2)] = ex__29455__auto__);


if(cljs.core.seq((state_31203[(4)]))){
var statearr_31255_33349 = state_31203;
(statearr_31255_33349[(1)] = cljs.core.first((state_31203[(4)])));

} else {
throw ex__29455__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33350 = state_31203;
state_31203 = G__33350;
continue;
} else {
return ret_value__29453__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29452__auto__ = function(state_31203){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29452__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29452__auto____1.call(this,state_31203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29452__auto____0;
cljs$core$async$mix_$_state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29452__auto____1;
return cljs$core$async$mix_$_state_machine__29452__auto__;
})()
})();
var state__29672__auto__ = (function (){var statearr_31256 = f__29671__auto__();
(statearr_31256[(6)] = c__29661__auto___33281);

return statearr_31256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29672__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33355 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33355(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33356 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33356(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33357 = (function() {
var G__33358 = null;
var G__33358__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33358__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33358 = function(p,v){
switch(arguments.length){
case 1:
return G__33358__1.call(this,p);
case 2:
return G__33358__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33358.cljs$core$IFn$_invoke$arity$1 = G__33358__1;
G__33358.cljs$core$IFn$_invoke$arity$2 = G__33358__2;
return G__33358;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31278 = arguments.length;
switch (G__31278) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33357(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33357(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31295 = arguments.length;
switch (G__31295) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31293_SHARP_){
if(cljs.core.truth_((p1__31293_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31293_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31293_SHARP_.call(null,topic)))){
return p1__31293_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31293_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31296 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31296 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31297){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31297 = meta31297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31298,meta31297__$1){
var self__ = this;
var _31298__$1 = this;
return (new cljs.core.async.t_cljs$core$async31296(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31297__$1));
}));

(cljs.core.async.t_cljs$core$async31296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31298){
var self__ = this;
var _31298__$1 = this;
return self__.meta31297;
}));

(cljs.core.async.t_cljs$core$async31296.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31296.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31296.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31296.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31296.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31296.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31296.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31296.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31297","meta31297",2014875890,null)], null);
}));

(cljs.core.async.t_cljs$core$async31296.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31296");

(cljs.core.async.t_cljs$core$async31296.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31296");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31296.
 */
cljs.core.async.__GT_t_cljs$core$async31296 = (function cljs$core$async$__GT_t_cljs$core$async31296(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31297){
return (new cljs.core.async.t_cljs$core$async31296(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31297));
});

}

return (new cljs.core.async.t_cljs$core$async31296(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29661__auto___33365 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29671__auto__ = (function (){var switch__29451__auto__ = (function (state_31392){
var state_val_31393 = (state_31392[(1)]);
if((state_val_31393 === (7))){
var inst_31388 = (state_31392[(2)]);
var state_31392__$1 = state_31392;
var statearr_31394_33366 = state_31392__$1;
(statearr_31394_33366[(2)] = inst_31388);

(statearr_31394_33366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (20))){
var state_31392__$1 = state_31392;
var statearr_31395_33367 = state_31392__$1;
(statearr_31395_33367[(2)] = null);

(statearr_31395_33367[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (1))){
var state_31392__$1 = state_31392;
var statearr_31396_33368 = state_31392__$1;
(statearr_31396_33368[(2)] = null);

(statearr_31396_33368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (24))){
var inst_31371 = (state_31392[(7)]);
var inst_31380 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31371);
var state_31392__$1 = state_31392;
var statearr_31397_33369 = state_31392__$1;
(statearr_31397_33369[(2)] = inst_31380);

(statearr_31397_33369[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (4))){
var inst_31318 = (state_31392[(8)]);
var inst_31318__$1 = (state_31392[(2)]);
var inst_31320 = (inst_31318__$1 == null);
var state_31392__$1 = (function (){var statearr_31398 = state_31392;
(statearr_31398[(8)] = inst_31318__$1);

return statearr_31398;
})();
if(cljs.core.truth_(inst_31320)){
var statearr_31399_33371 = state_31392__$1;
(statearr_31399_33371[(1)] = (5));

} else {
var statearr_31400_33372 = state_31392__$1;
(statearr_31400_33372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (15))){
var inst_31365 = (state_31392[(2)]);
var state_31392__$1 = state_31392;
var statearr_31405_33373 = state_31392__$1;
(statearr_31405_33373[(2)] = inst_31365);

(statearr_31405_33373[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (21))){
var inst_31385 = (state_31392[(2)]);
var state_31392__$1 = (function (){var statearr_31406 = state_31392;
(statearr_31406[(9)] = inst_31385);

return statearr_31406;
})();
var statearr_31407_33374 = state_31392__$1;
(statearr_31407_33374[(2)] = null);

(statearr_31407_33374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (13))){
var inst_31347 = (state_31392[(10)]);
var inst_31349 = cljs.core.chunked_seq_QMARK_(inst_31347);
var state_31392__$1 = state_31392;
if(inst_31349){
var statearr_31408_33375 = state_31392__$1;
(statearr_31408_33375[(1)] = (16));

} else {
var statearr_31409_33376 = state_31392__$1;
(statearr_31409_33376[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (22))){
var inst_31377 = (state_31392[(2)]);
var state_31392__$1 = state_31392;
if(cljs.core.truth_(inst_31377)){
var statearr_31410_33377 = state_31392__$1;
(statearr_31410_33377[(1)] = (23));

} else {
var statearr_31411_33378 = state_31392__$1;
(statearr_31411_33378[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (6))){
var inst_31373 = (state_31392[(11)]);
var inst_31371 = (state_31392[(7)]);
var inst_31318 = (state_31392[(8)]);
var inst_31371__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31318) : topic_fn.call(null,inst_31318));
var inst_31372 = cljs.core.deref(mults);
var inst_31373__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31372,inst_31371__$1);
var state_31392__$1 = (function (){var statearr_31412 = state_31392;
(statearr_31412[(11)] = inst_31373__$1);

(statearr_31412[(7)] = inst_31371__$1);

return statearr_31412;
})();
if(cljs.core.truth_(inst_31373__$1)){
var statearr_31413_33379 = state_31392__$1;
(statearr_31413_33379[(1)] = (19));

} else {
var statearr_31414_33380 = state_31392__$1;
(statearr_31414_33380[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (25))){
var inst_31382 = (state_31392[(2)]);
var state_31392__$1 = state_31392;
var statearr_31415_33381 = state_31392__$1;
(statearr_31415_33381[(2)] = inst_31382);

(statearr_31415_33381[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (17))){
var inst_31347 = (state_31392[(10)]);
var inst_31356 = cljs.core.first(inst_31347);
var inst_31357 = cljs.core.async.muxch_STAR_(inst_31356);
var inst_31358 = cljs.core.async.close_BANG_(inst_31357);
var inst_31359 = cljs.core.next(inst_31347);
var inst_31333 = inst_31359;
var inst_31334 = null;
var inst_31335 = (0);
var inst_31336 = (0);
var state_31392__$1 = (function (){var statearr_31416 = state_31392;
(statearr_31416[(12)] = inst_31334);

(statearr_31416[(13)] = inst_31335);

(statearr_31416[(14)] = inst_31333);

(statearr_31416[(15)] = inst_31336);

(statearr_31416[(16)] = inst_31358);

return statearr_31416;
})();
var statearr_31417_33382 = state_31392__$1;
(statearr_31417_33382[(2)] = null);

(statearr_31417_33382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (3))){
var inst_31390 = (state_31392[(2)]);
var state_31392__$1 = state_31392;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31392__$1,inst_31390);
} else {
if((state_val_31393 === (12))){
var inst_31367 = (state_31392[(2)]);
var state_31392__$1 = state_31392;
var statearr_31422_33384 = state_31392__$1;
(statearr_31422_33384[(2)] = inst_31367);

(statearr_31422_33384[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (2))){
var state_31392__$1 = state_31392;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31392__$1,(4),ch);
} else {
if((state_val_31393 === (23))){
var state_31392__$1 = state_31392;
var statearr_31423_33385 = state_31392__$1;
(statearr_31423_33385[(2)] = null);

(statearr_31423_33385[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (19))){
var inst_31373 = (state_31392[(11)]);
var inst_31318 = (state_31392[(8)]);
var inst_31375 = cljs.core.async.muxch_STAR_(inst_31373);
var state_31392__$1 = state_31392;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31392__$1,(22),inst_31375,inst_31318);
} else {
if((state_val_31393 === (11))){
var inst_31347 = (state_31392[(10)]);
var inst_31333 = (state_31392[(14)]);
var inst_31347__$1 = cljs.core.seq(inst_31333);
var state_31392__$1 = (function (){var statearr_31429 = state_31392;
(statearr_31429[(10)] = inst_31347__$1);

return statearr_31429;
})();
if(inst_31347__$1){
var statearr_31430_33387 = state_31392__$1;
(statearr_31430_33387[(1)] = (13));

} else {
var statearr_31431_33388 = state_31392__$1;
(statearr_31431_33388[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (9))){
var inst_31369 = (state_31392[(2)]);
var state_31392__$1 = state_31392;
var statearr_31432_33389 = state_31392__$1;
(statearr_31432_33389[(2)] = inst_31369);

(statearr_31432_33389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (5))){
var inst_31330 = cljs.core.deref(mults);
var inst_31331 = cljs.core.vals(inst_31330);
var inst_31332 = cljs.core.seq(inst_31331);
var inst_31333 = inst_31332;
var inst_31334 = null;
var inst_31335 = (0);
var inst_31336 = (0);
var state_31392__$1 = (function (){var statearr_31433 = state_31392;
(statearr_31433[(12)] = inst_31334);

(statearr_31433[(13)] = inst_31335);

(statearr_31433[(14)] = inst_31333);

(statearr_31433[(15)] = inst_31336);

return statearr_31433;
})();
var statearr_31434_33390 = state_31392__$1;
(statearr_31434_33390[(2)] = null);

(statearr_31434_33390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (14))){
var state_31392__$1 = state_31392;
var statearr_31438_33391 = state_31392__$1;
(statearr_31438_33391[(2)] = null);

(statearr_31438_33391[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (16))){
var inst_31347 = (state_31392[(10)]);
var inst_31351 = cljs.core.chunk_first(inst_31347);
var inst_31352 = cljs.core.chunk_rest(inst_31347);
var inst_31353 = cljs.core.count(inst_31351);
var inst_31333 = inst_31352;
var inst_31334 = inst_31351;
var inst_31335 = inst_31353;
var inst_31336 = (0);
var state_31392__$1 = (function (){var statearr_31439 = state_31392;
(statearr_31439[(12)] = inst_31334);

(statearr_31439[(13)] = inst_31335);

(statearr_31439[(14)] = inst_31333);

(statearr_31439[(15)] = inst_31336);

return statearr_31439;
})();
var statearr_31440_33392 = state_31392__$1;
(statearr_31440_33392[(2)] = null);

(statearr_31440_33392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (10))){
var inst_31334 = (state_31392[(12)]);
var inst_31335 = (state_31392[(13)]);
var inst_31333 = (state_31392[(14)]);
var inst_31336 = (state_31392[(15)]);
var inst_31341 = cljs.core._nth(inst_31334,inst_31336);
var inst_31342 = cljs.core.async.muxch_STAR_(inst_31341);
var inst_31343 = cljs.core.async.close_BANG_(inst_31342);
var inst_31344 = (inst_31336 + (1));
var tmp31435 = inst_31334;
var tmp31436 = inst_31335;
var tmp31437 = inst_31333;
var inst_31333__$1 = tmp31437;
var inst_31334__$1 = tmp31435;
var inst_31335__$1 = tmp31436;
var inst_31336__$1 = inst_31344;
var state_31392__$1 = (function (){var statearr_31446 = state_31392;
(statearr_31446[(12)] = inst_31334__$1);

(statearr_31446[(17)] = inst_31343);

(statearr_31446[(13)] = inst_31335__$1);

(statearr_31446[(14)] = inst_31333__$1);

(statearr_31446[(15)] = inst_31336__$1);

return statearr_31446;
})();
var statearr_31447_33393 = state_31392__$1;
(statearr_31447_33393[(2)] = null);

(statearr_31447_33393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (18))){
var inst_31362 = (state_31392[(2)]);
var state_31392__$1 = state_31392;
var statearr_31448_33394 = state_31392__$1;
(statearr_31448_33394[(2)] = inst_31362);

(statearr_31448_33394[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (8))){
var inst_31335 = (state_31392[(13)]);
var inst_31336 = (state_31392[(15)]);
var inst_31338 = (inst_31336 < inst_31335);
var inst_31339 = inst_31338;
var state_31392__$1 = state_31392;
if(cljs.core.truth_(inst_31339)){
var statearr_31454_33395 = state_31392__$1;
(statearr_31454_33395[(1)] = (10));

} else {
var statearr_31455_33396 = state_31392__$1;
(statearr_31455_33396[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29452__auto__ = null;
var cljs$core$async$state_machine__29452__auto____0 = (function (){
var statearr_31456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31456[(0)] = cljs$core$async$state_machine__29452__auto__);

(statearr_31456[(1)] = (1));

return statearr_31456;
});
var cljs$core$async$state_machine__29452__auto____1 = (function (state_31392){
while(true){
var ret_value__29453__auto__ = (function (){try{while(true){
var result__29454__auto__ = switch__29451__auto__(state_31392);
if(cljs.core.keyword_identical_QMARK_(result__29454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29454__auto__;
}
break;
}
}catch (e31457){var ex__29455__auto__ = e31457;
var statearr_31458_33397 = state_31392;
(statearr_31458_33397[(2)] = ex__29455__auto__);


if(cljs.core.seq((state_31392[(4)]))){
var statearr_31461_33398 = state_31392;
(statearr_31461_33398[(1)] = cljs.core.first((state_31392[(4)])));

} else {
throw ex__29455__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33399 = state_31392;
state_31392 = G__33399;
continue;
} else {
return ret_value__29453__auto__;
}
break;
}
});
cljs$core$async$state_machine__29452__auto__ = function(state_31392){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29452__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29452__auto____1.call(this,state_31392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29452__auto____0;
cljs$core$async$state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29452__auto____1;
return cljs$core$async$state_machine__29452__auto__;
})()
})();
var state__29672__auto__ = (function (){var statearr_31464 = f__29671__auto__();
(statearr_31464[(6)] = c__29661__auto___33365);

return statearr_31464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29672__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31466 = arguments.length;
switch (G__31466) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31473 = arguments.length;
switch (G__31473) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31475 = arguments.length;
switch (G__31475) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29661__auto___33403 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29671__auto__ = (function (){var switch__29451__auto__ = (function (state_31522){
var state_val_31527 = (state_31522[(1)]);
if((state_val_31527 === (7))){
var state_31522__$1 = state_31522;
var statearr_31528_33404 = state_31522__$1;
(statearr_31528_33404[(2)] = null);

(statearr_31528_33404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (1))){
var state_31522__$1 = state_31522;
var statearr_31529_33405 = state_31522__$1;
(statearr_31529_33405[(2)] = null);

(statearr_31529_33405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (4))){
var inst_31478 = (state_31522[(7)]);
var inst_31479 = (state_31522[(8)]);
var inst_31481 = (inst_31479 < inst_31478);
var state_31522__$1 = state_31522;
if(cljs.core.truth_(inst_31481)){
var statearr_31530_33406 = state_31522__$1;
(statearr_31530_33406[(1)] = (6));

} else {
var statearr_31531_33407 = state_31522__$1;
(statearr_31531_33407[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (15))){
var inst_31508 = (state_31522[(9)]);
var inst_31513 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31508);
var state_31522__$1 = state_31522;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31522__$1,(17),out,inst_31513);
} else {
if((state_val_31527 === (13))){
var inst_31508 = (state_31522[(9)]);
var inst_31508__$1 = (state_31522[(2)]);
var inst_31509 = cljs.core.some(cljs.core.nil_QMARK_,inst_31508__$1);
var state_31522__$1 = (function (){var statearr_31532 = state_31522;
(statearr_31532[(9)] = inst_31508__$1);

return statearr_31532;
})();
if(cljs.core.truth_(inst_31509)){
var statearr_31533_33408 = state_31522__$1;
(statearr_31533_33408[(1)] = (14));

} else {
var statearr_31534_33409 = state_31522__$1;
(statearr_31534_33409[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (6))){
var state_31522__$1 = state_31522;
var statearr_31535_33410 = state_31522__$1;
(statearr_31535_33410[(2)] = null);

(statearr_31535_33410[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (17))){
var inst_31515 = (state_31522[(2)]);
var state_31522__$1 = (function (){var statearr_31537 = state_31522;
(statearr_31537[(10)] = inst_31515);

return statearr_31537;
})();
var statearr_31538_33411 = state_31522__$1;
(statearr_31538_33411[(2)] = null);

(statearr_31538_33411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (3))){
var inst_31520 = (state_31522[(2)]);
var state_31522__$1 = state_31522;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31522__$1,inst_31520);
} else {
if((state_val_31527 === (12))){
var _ = (function (){var statearr_31540 = state_31522;
(statearr_31540[(4)] = cljs.core.rest((state_31522[(4)])));

return statearr_31540;
})();
var state_31522__$1 = state_31522;
var ex31536 = (state_31522__$1[(2)]);
var statearr_31541_33412 = state_31522__$1;
(statearr_31541_33412[(5)] = ex31536);


if((ex31536 instanceof Object)){
var statearr_31542_33413 = state_31522__$1;
(statearr_31542_33413[(1)] = (11));

(statearr_31542_33413[(5)] = null);

} else {
throw ex31536;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (2))){
var inst_31477 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31478 = cnt;
var inst_31479 = (0);
var state_31522__$1 = (function (){var statearr_31548 = state_31522;
(statearr_31548[(7)] = inst_31478);

(statearr_31548[(11)] = inst_31477);

(statearr_31548[(8)] = inst_31479);

return statearr_31548;
})();
var statearr_31549_33415 = state_31522__$1;
(statearr_31549_33415[(2)] = null);

(statearr_31549_33415[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (11))){
var inst_31487 = (state_31522[(2)]);
var inst_31488 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31522__$1 = (function (){var statearr_31550 = state_31522;
(statearr_31550[(12)] = inst_31487);

return statearr_31550;
})();
var statearr_31551_33417 = state_31522__$1;
(statearr_31551_33417[(2)] = inst_31488);

(statearr_31551_33417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (9))){
var inst_31479 = (state_31522[(8)]);
var _ = (function (){var statearr_31552 = state_31522;
(statearr_31552[(4)] = cljs.core.cons((12),(state_31522[(4)])));

return statearr_31552;
})();
var inst_31494 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31479) : chs__$1.call(null,inst_31479));
var inst_31495 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31479) : done.call(null,inst_31479));
var inst_31496 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31494,inst_31495);
var ___$1 = (function (){var statearr_31553 = state_31522;
(statearr_31553[(4)] = cljs.core.rest((state_31522[(4)])));

return statearr_31553;
})();
var state_31522__$1 = state_31522;
var statearr_31554_33418 = state_31522__$1;
(statearr_31554_33418[(2)] = inst_31496);

(statearr_31554_33418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (5))){
var inst_31506 = (state_31522[(2)]);
var state_31522__$1 = (function (){var statearr_31555 = state_31522;
(statearr_31555[(13)] = inst_31506);

return statearr_31555;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31522__$1,(13),dchan);
} else {
if((state_val_31527 === (14))){
var inst_31511 = cljs.core.async.close_BANG_(out);
var state_31522__$1 = state_31522;
var statearr_31560_33419 = state_31522__$1;
(statearr_31560_33419[(2)] = inst_31511);

(statearr_31560_33419[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (16))){
var inst_31518 = (state_31522[(2)]);
var state_31522__$1 = state_31522;
var statearr_31561_33423 = state_31522__$1;
(statearr_31561_33423[(2)] = inst_31518);

(statearr_31561_33423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (10))){
var inst_31479 = (state_31522[(8)]);
var inst_31499 = (state_31522[(2)]);
var inst_31500 = (inst_31479 + (1));
var inst_31479__$1 = inst_31500;
var state_31522__$1 = (function (){var statearr_31562 = state_31522;
(statearr_31562[(14)] = inst_31499);

(statearr_31562[(8)] = inst_31479__$1);

return statearr_31562;
})();
var statearr_31563_33424 = state_31522__$1;
(statearr_31563_33424[(2)] = null);

(statearr_31563_33424[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (8))){
var inst_31504 = (state_31522[(2)]);
var state_31522__$1 = state_31522;
var statearr_31564_33425 = state_31522__$1;
(statearr_31564_33425[(2)] = inst_31504);

(statearr_31564_33425[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29452__auto__ = null;
var cljs$core$async$state_machine__29452__auto____0 = (function (){
var statearr_31568 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31568[(0)] = cljs$core$async$state_machine__29452__auto__);

(statearr_31568[(1)] = (1));

return statearr_31568;
});
var cljs$core$async$state_machine__29452__auto____1 = (function (state_31522){
while(true){
var ret_value__29453__auto__ = (function (){try{while(true){
var result__29454__auto__ = switch__29451__auto__(state_31522);
if(cljs.core.keyword_identical_QMARK_(result__29454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29454__auto__;
}
break;
}
}catch (e31569){var ex__29455__auto__ = e31569;
var statearr_31570_33426 = state_31522;
(statearr_31570_33426[(2)] = ex__29455__auto__);


if(cljs.core.seq((state_31522[(4)]))){
var statearr_31574_33427 = state_31522;
(statearr_31574_33427[(1)] = cljs.core.first((state_31522[(4)])));

} else {
throw ex__29455__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33429 = state_31522;
state_31522 = G__33429;
continue;
} else {
return ret_value__29453__auto__;
}
break;
}
});
cljs$core$async$state_machine__29452__auto__ = function(state_31522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29452__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29452__auto____1.call(this,state_31522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29452__auto____0;
cljs$core$async$state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29452__auto____1;
return cljs$core$async$state_machine__29452__auto__;
})()
})();
var state__29672__auto__ = (function (){var statearr_31579 = f__29671__auto__();
(statearr_31579[(6)] = c__29661__auto___33403);

return statearr_31579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29672__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31588 = arguments.length;
switch (G__31588) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29661__auto___33431 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29671__auto__ = (function (){var switch__29451__auto__ = (function (state_31624){
var state_val_31625 = (state_31624[(1)]);
if((state_val_31625 === (7))){
var inst_31603 = (state_31624[(7)]);
var inst_31604 = (state_31624[(8)]);
var inst_31603__$1 = (state_31624[(2)]);
var inst_31604__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31603__$1,(0),null);
var inst_31605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31603__$1,(1),null);
var inst_31606 = (inst_31604__$1 == null);
var state_31624__$1 = (function (){var statearr_31627 = state_31624;
(statearr_31627[(9)] = inst_31605);

(statearr_31627[(7)] = inst_31603__$1);

(statearr_31627[(8)] = inst_31604__$1);

return statearr_31627;
})();
if(cljs.core.truth_(inst_31606)){
var statearr_31628_33432 = state_31624__$1;
(statearr_31628_33432[(1)] = (8));

} else {
var statearr_31629_33433 = state_31624__$1;
(statearr_31629_33433[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (1))){
var inst_31593 = cljs.core.vec(chs);
var inst_31594 = inst_31593;
var state_31624__$1 = (function (){var statearr_31630 = state_31624;
(statearr_31630[(10)] = inst_31594);

return statearr_31630;
})();
var statearr_31631_33434 = state_31624__$1;
(statearr_31631_33434[(2)] = null);

(statearr_31631_33434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (4))){
var inst_31594 = (state_31624[(10)]);
var state_31624__$1 = state_31624;
return cljs.core.async.ioc_alts_BANG_(state_31624__$1,(7),inst_31594);
} else {
if((state_val_31625 === (6))){
var inst_31620 = (state_31624[(2)]);
var state_31624__$1 = state_31624;
var statearr_31632_33435 = state_31624__$1;
(statearr_31632_33435[(2)] = inst_31620);

(statearr_31632_33435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (3))){
var inst_31622 = (state_31624[(2)]);
var state_31624__$1 = state_31624;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31624__$1,inst_31622);
} else {
if((state_val_31625 === (2))){
var inst_31594 = (state_31624[(10)]);
var inst_31596 = cljs.core.count(inst_31594);
var inst_31597 = (inst_31596 > (0));
var state_31624__$1 = state_31624;
if(cljs.core.truth_(inst_31597)){
var statearr_31639_33437 = state_31624__$1;
(statearr_31639_33437[(1)] = (4));

} else {
var statearr_31642_33438 = state_31624__$1;
(statearr_31642_33438[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (11))){
var inst_31594 = (state_31624[(10)]);
var inst_31613 = (state_31624[(2)]);
var tmp31638 = inst_31594;
var inst_31594__$1 = tmp31638;
var state_31624__$1 = (function (){var statearr_31656 = state_31624;
(statearr_31656[(10)] = inst_31594__$1);

(statearr_31656[(11)] = inst_31613);

return statearr_31656;
})();
var statearr_31663_33439 = state_31624__$1;
(statearr_31663_33439[(2)] = null);

(statearr_31663_33439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (9))){
var inst_31604 = (state_31624[(8)]);
var state_31624__$1 = state_31624;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31624__$1,(11),out,inst_31604);
} else {
if((state_val_31625 === (5))){
var inst_31618 = cljs.core.async.close_BANG_(out);
var state_31624__$1 = state_31624;
var statearr_31665_33441 = state_31624__$1;
(statearr_31665_33441[(2)] = inst_31618);

(statearr_31665_33441[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (10))){
var inst_31616 = (state_31624[(2)]);
var state_31624__$1 = state_31624;
var statearr_31667_33442 = state_31624__$1;
(statearr_31667_33442[(2)] = inst_31616);

(statearr_31667_33442[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (8))){
var inst_31605 = (state_31624[(9)]);
var inst_31594 = (state_31624[(10)]);
var inst_31603 = (state_31624[(7)]);
var inst_31604 = (state_31624[(8)]);
var inst_31608 = (function (){var cs = inst_31594;
var vec__31599 = inst_31603;
var v = inst_31604;
var c = inst_31605;
return (function (p1__31580_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31580_SHARP_);
});
})();
var inst_31609 = cljs.core.filterv(inst_31608,inst_31594);
var inst_31594__$1 = inst_31609;
var state_31624__$1 = (function (){var statearr_31668 = state_31624;
(statearr_31668[(10)] = inst_31594__$1);

return statearr_31668;
})();
var statearr_31669_33443 = state_31624__$1;
(statearr_31669_33443[(2)] = null);

(statearr_31669_33443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29452__auto__ = null;
var cljs$core$async$state_machine__29452__auto____0 = (function (){
var statearr_31670 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31670[(0)] = cljs$core$async$state_machine__29452__auto__);

(statearr_31670[(1)] = (1));

return statearr_31670;
});
var cljs$core$async$state_machine__29452__auto____1 = (function (state_31624){
while(true){
var ret_value__29453__auto__ = (function (){try{while(true){
var result__29454__auto__ = switch__29451__auto__(state_31624);
if(cljs.core.keyword_identical_QMARK_(result__29454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29454__auto__;
}
break;
}
}catch (e31671){var ex__29455__auto__ = e31671;
var statearr_31672_33444 = state_31624;
(statearr_31672_33444[(2)] = ex__29455__auto__);


if(cljs.core.seq((state_31624[(4)]))){
var statearr_31677_33445 = state_31624;
(statearr_31677_33445[(1)] = cljs.core.first((state_31624[(4)])));

} else {
throw ex__29455__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33446 = state_31624;
state_31624 = G__33446;
continue;
} else {
return ret_value__29453__auto__;
}
break;
}
});
cljs$core$async$state_machine__29452__auto__ = function(state_31624){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29452__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29452__auto____1.call(this,state_31624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29452__auto____0;
cljs$core$async$state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29452__auto____1;
return cljs$core$async$state_machine__29452__auto__;
})()
})();
var state__29672__auto__ = (function (){var statearr_31684 = f__29671__auto__();
(statearr_31684[(6)] = c__29661__auto___33431);

return statearr_31684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29672__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31705 = arguments.length;
switch (G__31705) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29661__auto___33448 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29671__auto__ = (function (){var switch__29451__auto__ = (function (state_31789){
var state_val_31790 = (state_31789[(1)]);
if((state_val_31790 === (7))){
var inst_31765 = (state_31789[(7)]);
var inst_31765__$1 = (state_31789[(2)]);
var inst_31766 = (inst_31765__$1 == null);
var inst_31767 = cljs.core.not(inst_31766);
var state_31789__$1 = (function (){var statearr_31794 = state_31789;
(statearr_31794[(7)] = inst_31765__$1);

return statearr_31794;
})();
if(inst_31767){
var statearr_31797_33449 = state_31789__$1;
(statearr_31797_33449[(1)] = (8));

} else {
var statearr_31798_33450 = state_31789__$1;
(statearr_31798_33450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (1))){
var inst_31752 = (0);
var state_31789__$1 = (function (){var statearr_31799 = state_31789;
(statearr_31799[(8)] = inst_31752);

return statearr_31799;
})();
var statearr_31800_33451 = state_31789__$1;
(statearr_31800_33451[(2)] = null);

(statearr_31800_33451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (4))){
var state_31789__$1 = state_31789;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31789__$1,(7),ch);
} else {
if((state_val_31790 === (6))){
var inst_31784 = (state_31789[(2)]);
var state_31789__$1 = state_31789;
var statearr_31801_33452 = state_31789__$1;
(statearr_31801_33452[(2)] = inst_31784);

(statearr_31801_33452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (3))){
var inst_31786 = (state_31789[(2)]);
var inst_31787 = cljs.core.async.close_BANG_(out);
var state_31789__$1 = (function (){var statearr_31803 = state_31789;
(statearr_31803[(9)] = inst_31786);

return statearr_31803;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31789__$1,inst_31787);
} else {
if((state_val_31790 === (2))){
var inst_31752 = (state_31789[(8)]);
var inst_31757 = (inst_31752 < n);
var state_31789__$1 = state_31789;
if(cljs.core.truth_(inst_31757)){
var statearr_31819_33453 = state_31789__$1;
(statearr_31819_33453[(1)] = (4));

} else {
var statearr_31820_33454 = state_31789__$1;
(statearr_31820_33454[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (11))){
var inst_31752 = (state_31789[(8)]);
var inst_31772 = (state_31789[(2)]);
var inst_31777 = (inst_31752 + (1));
var inst_31752__$1 = inst_31777;
var state_31789__$1 = (function (){var statearr_31830 = state_31789;
(statearr_31830[(8)] = inst_31752__$1);

(statearr_31830[(10)] = inst_31772);

return statearr_31830;
})();
var statearr_31835_33455 = state_31789__$1;
(statearr_31835_33455[(2)] = null);

(statearr_31835_33455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (9))){
var state_31789__$1 = state_31789;
var statearr_31855_33456 = state_31789__$1;
(statearr_31855_33456[(2)] = null);

(statearr_31855_33456[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (5))){
var state_31789__$1 = state_31789;
var statearr_31857_33457 = state_31789__$1;
(statearr_31857_33457[(2)] = null);

(statearr_31857_33457[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (10))){
var inst_31781 = (state_31789[(2)]);
var state_31789__$1 = state_31789;
var statearr_31858_33458 = state_31789__$1;
(statearr_31858_33458[(2)] = inst_31781);

(statearr_31858_33458[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (8))){
var inst_31765 = (state_31789[(7)]);
var state_31789__$1 = state_31789;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31789__$1,(11),out,inst_31765);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29452__auto__ = null;
var cljs$core$async$state_machine__29452__auto____0 = (function (){
var statearr_31860 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31860[(0)] = cljs$core$async$state_machine__29452__auto__);

(statearr_31860[(1)] = (1));

return statearr_31860;
});
var cljs$core$async$state_machine__29452__auto____1 = (function (state_31789){
while(true){
var ret_value__29453__auto__ = (function (){try{while(true){
var result__29454__auto__ = switch__29451__auto__(state_31789);
if(cljs.core.keyword_identical_QMARK_(result__29454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29454__auto__;
}
break;
}
}catch (e31861){var ex__29455__auto__ = e31861;
var statearr_31862_33459 = state_31789;
(statearr_31862_33459[(2)] = ex__29455__auto__);


if(cljs.core.seq((state_31789[(4)]))){
var statearr_31864_33460 = state_31789;
(statearr_31864_33460[(1)] = cljs.core.first((state_31789[(4)])));

} else {
throw ex__29455__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33461 = state_31789;
state_31789 = G__33461;
continue;
} else {
return ret_value__29453__auto__;
}
break;
}
});
cljs$core$async$state_machine__29452__auto__ = function(state_31789){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29452__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29452__auto____1.call(this,state_31789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29452__auto____0;
cljs$core$async$state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29452__auto____1;
return cljs$core$async$state_machine__29452__auto__;
})()
})();
var state__29672__auto__ = (function (){var statearr_31865 = f__29671__auto__();
(statearr_31865[(6)] = c__29661__auto___33448);

return statearr_31865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29672__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31868 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31868 = (function (f,ch,meta31869){
this.f = f;
this.ch = ch;
this.meta31869 = meta31869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31870,meta31869__$1){
var self__ = this;
var _31870__$1 = this;
return (new cljs.core.async.t_cljs$core$async31868(self__.f,self__.ch,meta31869__$1));
}));

(cljs.core.async.t_cljs$core$async31868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31870){
var self__ = this;
var _31870__$1 = this;
return self__.meta31869;
}));

(cljs.core.async.t_cljs$core$async31868.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31868.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31868.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31868.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31868.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31894 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31894 = (function (f,ch,meta31869,_,fn1,meta31895){
this.f = f;
this.ch = ch;
this.meta31869 = meta31869;
this._ = _;
this.fn1 = fn1;
this.meta31895 = meta31895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31896,meta31895__$1){
var self__ = this;
var _31896__$1 = this;
return (new cljs.core.async.t_cljs$core$async31894(self__.f,self__.ch,self__.meta31869,self__._,self__.fn1,meta31895__$1));
}));

(cljs.core.async.t_cljs$core$async31894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31896){
var self__ = this;
var _31896__$1 = this;
return self__.meta31895;
}));

(cljs.core.async.t_cljs$core$async31894.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31894.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31894.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31894.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31867_SHARP_){
var G__31898 = (((p1__31867_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31867_SHARP_) : self__.f.call(null,p1__31867_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31898) : f1.call(null,G__31898));
});
}));

(cljs.core.async.t_cljs$core$async31894.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31869","meta31869",2117963896,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31868","cljs.core.async/t_cljs$core$async31868",-1745002149,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31895","meta31895",-422554960,null)], null);
}));

(cljs.core.async.t_cljs$core$async31894.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31894.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31894");

(cljs.core.async.t_cljs$core$async31894.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31894");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31894.
 */
cljs.core.async.__GT_t_cljs$core$async31894 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31894(f__$1,ch__$1,meta31869__$1,___$2,fn1__$1,meta31895){
return (new cljs.core.async.t_cljs$core$async31894(f__$1,ch__$1,meta31869__$1,___$2,fn1__$1,meta31895));
});

}

return (new cljs.core.async.t_cljs$core$async31894(self__.f,self__.ch,self__.meta31869,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31900 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31900) : self__.f.call(null,G__31900));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31868.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31868.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31868.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31869","meta31869",2117963896,null)], null);
}));

(cljs.core.async.t_cljs$core$async31868.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31868");

(cljs.core.async.t_cljs$core$async31868.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31868");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31868.
 */
cljs.core.async.__GT_t_cljs$core$async31868 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31868(f__$1,ch__$1,meta31869){
return (new cljs.core.async.t_cljs$core$async31868(f__$1,ch__$1,meta31869));
});

}

return (new cljs.core.async.t_cljs$core$async31868(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31902 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31902 = (function (f,ch,meta31903){
this.f = f;
this.ch = ch;
this.meta31903 = meta31903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31904,meta31903__$1){
var self__ = this;
var _31904__$1 = this;
return (new cljs.core.async.t_cljs$core$async31902(self__.f,self__.ch,meta31903__$1));
}));

(cljs.core.async.t_cljs$core$async31902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31904){
var self__ = this;
var _31904__$1 = this;
return self__.meta31903;
}));

(cljs.core.async.t_cljs$core$async31902.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31902.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31902.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31902.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31902.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31902.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31902.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31903","meta31903",-411513191,null)], null);
}));

(cljs.core.async.t_cljs$core$async31902.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31902.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31902");

(cljs.core.async.t_cljs$core$async31902.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31902");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31902.
 */
cljs.core.async.__GT_t_cljs$core$async31902 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31902(f__$1,ch__$1,meta31903){
return (new cljs.core.async.t_cljs$core$async31902(f__$1,ch__$1,meta31903));
});

}

return (new cljs.core.async.t_cljs$core$async31902(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31907 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31907 = (function (p,ch,meta31908){
this.p = p;
this.ch = ch;
this.meta31908 = meta31908;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31909,meta31908__$1){
var self__ = this;
var _31909__$1 = this;
return (new cljs.core.async.t_cljs$core$async31907(self__.p,self__.ch,meta31908__$1));
}));

(cljs.core.async.t_cljs$core$async31907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31909){
var self__ = this;
var _31909__$1 = this;
return self__.meta31908;
}));

(cljs.core.async.t_cljs$core$async31907.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31907.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31907.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31907.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31907.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31907.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31907.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31907.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31908","meta31908",-522566899,null)], null);
}));

(cljs.core.async.t_cljs$core$async31907.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31907.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31907");

(cljs.core.async.t_cljs$core$async31907.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31907");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31907.
 */
cljs.core.async.__GT_t_cljs$core$async31907 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31907(p__$1,ch__$1,meta31908){
return (new cljs.core.async.t_cljs$core$async31907(p__$1,ch__$1,meta31908));
});

}

return (new cljs.core.async.t_cljs$core$async31907(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31913 = arguments.length;
switch (G__31913) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29661__auto___33490 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29671__auto__ = (function (){var switch__29451__auto__ = (function (state_31977){
var state_val_31978 = (state_31977[(1)]);
if((state_val_31978 === (7))){
var inst_31956 = (state_31977[(2)]);
var state_31977__$1 = state_31977;
var statearr_31987_33491 = state_31977__$1;
(statearr_31987_33491[(2)] = inst_31956);

(statearr_31987_33491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (1))){
var state_31977__$1 = state_31977;
var statearr_31988_33492 = state_31977__$1;
(statearr_31988_33492[(2)] = null);

(statearr_31988_33492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (4))){
var inst_31942 = (state_31977[(7)]);
var inst_31942__$1 = (state_31977[(2)]);
var inst_31943 = (inst_31942__$1 == null);
var state_31977__$1 = (function (){var statearr_31990 = state_31977;
(statearr_31990[(7)] = inst_31942__$1);

return statearr_31990;
})();
if(cljs.core.truth_(inst_31943)){
var statearr_31991_33525 = state_31977__$1;
(statearr_31991_33525[(1)] = (5));

} else {
var statearr_31992_33533 = state_31977__$1;
(statearr_31992_33533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (6))){
var inst_31942 = (state_31977[(7)]);
var inst_31947 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31942) : p.call(null,inst_31942));
var state_31977__$1 = state_31977;
if(cljs.core.truth_(inst_31947)){
var statearr_31993_33546 = state_31977__$1;
(statearr_31993_33546[(1)] = (8));

} else {
var statearr_31994_33547 = state_31977__$1;
(statearr_31994_33547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (3))){
var inst_31958 = (state_31977[(2)]);
var state_31977__$1 = state_31977;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31977__$1,inst_31958);
} else {
if((state_val_31978 === (2))){
var state_31977__$1 = state_31977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31977__$1,(4),ch);
} else {
if((state_val_31978 === (11))){
var inst_31950 = (state_31977[(2)]);
var state_31977__$1 = state_31977;
var statearr_31995_33552 = state_31977__$1;
(statearr_31995_33552[(2)] = inst_31950);

(statearr_31995_33552[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (9))){
var state_31977__$1 = state_31977;
var statearr_31996_33553 = state_31977__$1;
(statearr_31996_33553[(2)] = null);

(statearr_31996_33553[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (5))){
var inst_31945 = cljs.core.async.close_BANG_(out);
var state_31977__$1 = state_31977;
var statearr_31997_33557 = state_31977__$1;
(statearr_31997_33557[(2)] = inst_31945);

(statearr_31997_33557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (10))){
var inst_31953 = (state_31977[(2)]);
var state_31977__$1 = (function (){var statearr_31998 = state_31977;
(statearr_31998[(8)] = inst_31953);

return statearr_31998;
})();
var statearr_32000_33561 = state_31977__$1;
(statearr_32000_33561[(2)] = null);

(statearr_32000_33561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (8))){
var inst_31942 = (state_31977[(7)]);
var state_31977__$1 = state_31977;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31977__$1,(11),out,inst_31942);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29452__auto__ = null;
var cljs$core$async$state_machine__29452__auto____0 = (function (){
var statearr_32007 = [null,null,null,null,null,null,null,null,null];
(statearr_32007[(0)] = cljs$core$async$state_machine__29452__auto__);

(statearr_32007[(1)] = (1));

return statearr_32007;
});
var cljs$core$async$state_machine__29452__auto____1 = (function (state_31977){
while(true){
var ret_value__29453__auto__ = (function (){try{while(true){
var result__29454__auto__ = switch__29451__auto__(state_31977);
if(cljs.core.keyword_identical_QMARK_(result__29454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29454__auto__;
}
break;
}
}catch (e32008){var ex__29455__auto__ = e32008;
var statearr_32009_33566 = state_31977;
(statearr_32009_33566[(2)] = ex__29455__auto__);


if(cljs.core.seq((state_31977[(4)]))){
var statearr_32024_33567 = state_31977;
(statearr_32024_33567[(1)] = cljs.core.first((state_31977[(4)])));

} else {
throw ex__29455__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33568 = state_31977;
state_31977 = G__33568;
continue;
} else {
return ret_value__29453__auto__;
}
break;
}
});
cljs$core$async$state_machine__29452__auto__ = function(state_31977){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29452__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29452__auto____1.call(this,state_31977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29452__auto____0;
cljs$core$async$state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29452__auto____1;
return cljs$core$async$state_machine__29452__auto__;
})()
})();
var state__29672__auto__ = (function (){var statearr_32035 = f__29671__auto__();
(statearr_32035[(6)] = c__29661__auto___33490);

return statearr_32035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29672__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32038 = arguments.length;
switch (G__32038) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29661__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29671__auto__ = (function (){var switch__29451__auto__ = (function (state_32129){
var state_val_32130 = (state_32129[(1)]);
if((state_val_32130 === (7))){
var inst_32125 = (state_32129[(2)]);
var state_32129__$1 = state_32129;
var statearr_32133_33578 = state_32129__$1;
(statearr_32133_33578[(2)] = inst_32125);

(statearr_32133_33578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32130 === (20))){
var inst_32095 = (state_32129[(7)]);
var inst_32106 = (state_32129[(2)]);
var inst_32107 = cljs.core.next(inst_32095);
var inst_32081 = inst_32107;
var inst_32082 = null;
var inst_32083 = (0);
var inst_32084 = (0);
var state_32129__$1 = (function (){var statearr_32135 = state_32129;
(statearr_32135[(8)] = inst_32082);

(statearr_32135[(9)] = inst_32084);

(statearr_32135[(10)] = inst_32081);

(statearr_32135[(11)] = inst_32106);

(statearr_32135[(12)] = inst_32083);

return statearr_32135;
})();
var statearr_32139_33581 = state_32129__$1;
(statearr_32139_33581[(2)] = null);

(statearr_32139_33581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32130 === (1))){
var state_32129__$1 = state_32129;
var statearr_32140_33586 = state_32129__$1;
(statearr_32140_33586[(2)] = null);

(statearr_32140_33586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32130 === (4))){
var inst_32069 = (state_32129[(13)]);
var inst_32069__$1 = (state_32129[(2)]);
var inst_32070 = (inst_32069__$1 == null);
var state_32129__$1 = (function (){var statearr_32141 = state_32129;
(statearr_32141[(13)] = inst_32069__$1);

return statearr_32141;
})();
if(cljs.core.truth_(inst_32070)){
var statearr_32142_33589 = state_32129__$1;
(statearr_32142_33589[(1)] = (5));

} else {
var statearr_32143_33590 = state_32129__$1;
(statearr_32143_33590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32130 === (15))){
var state_32129__$1 = state_32129;
var statearr_32147_33591 = state_32129__$1;
(statearr_32147_33591[(2)] = null);

(statearr_32147_33591[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32130 === (21))){
var state_32129__$1 = state_32129;
var statearr_32148_33593 = state_32129__$1;
(statearr_32148_33593[(2)] = null);

(statearr_32148_33593[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32130 === (13))){
var inst_32082 = (state_32129[(8)]);
var inst_32084 = (state_32129[(9)]);
var inst_32081 = (state_32129[(10)]);
var inst_32083 = (state_32129[(12)]);
var inst_32091 = (state_32129[(2)]);
var inst_32092 = (inst_32084 + (1));
var tmp32144 = inst_32082;
var tmp32145 = inst_32081;
var tmp32146 = inst_32083;
var inst_32081__$1 = tmp32145;
var inst_32082__$1 = tmp32144;
var inst_32083__$1 = tmp32146;
var inst_32084__$1 = inst_32092;
var state_32129__$1 = (function (){var statearr_32149 = state_32129;
(statearr_32149[(8)] = inst_32082__$1);

(statearr_32149[(9)] = inst_32084__$1);

(statearr_32149[(10)] = inst_32081__$1);

(statearr_32149[(14)] = inst_32091);

(statearr_32149[(12)] = inst_32083__$1);

return statearr_32149;
})();
var statearr_32150_33595 = state_32129__$1;
(statearr_32150_33595[(2)] = null);

(statearr_32150_33595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32130 === (22))){
var state_32129__$1 = state_32129;
var statearr_32151_33597 = state_32129__$1;
(statearr_32151_33597[(2)] = null);

(statearr_32151_33597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32130 === (6))){
var inst_32069 = (state_32129[(13)]);
var inst_32079 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32069) : f.call(null,inst_32069));
var inst_32080 = cljs.core.seq(inst_32079);
var inst_32081 = inst_32080;
var inst_32082 = null;
var inst_32083 = (0);
var inst_32084 = (0);
var state_32129__$1 = (function (){var statearr_32152 = state_32129;
(statearr_32152[(8)] = inst_32082);

(statearr_32152[(9)] = inst_32084);

(statearr_32152[(10)] = inst_32081);

(statearr_32152[(12)] = inst_32083);

return statearr_32152;
})();
var statearr_32153_33598 = state_32129__$1;
(statearr_32153_33598[(2)] = null);

(statearr_32153_33598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32130 === (17))){
var inst_32095 = (state_32129[(7)]);
var inst_32099 = cljs.core.chunk_first(inst_32095);
var inst_32100 = cljs.core.chunk_rest(inst_32095);
var inst_32101 = cljs.core.count(inst_32099);
var inst_32081 = inst_32100;
var inst_32082 = inst_32099;
var inst_32083 = inst_32101;
var inst_32084 = (0);
var state_32129__$1 = (function (){var statearr_32154 = state_32129;
(statearr_32154[(8)] = inst_32082);

(statearr_32154[(9)] = inst_32084);

(statearr_32154[(10)] = inst_32081);

(statearr_32154[(12)] = inst_32083);

return statearr_32154;
})();
var statearr_32157_33600 = state_32129__$1;
(statearr_32157_33600[(2)] = null);

(statearr_32157_33600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32130 === (3))){
var inst_32127 = (state_32129[(2)]);
var state_32129__$1 = state_32129;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32129__$1,inst_32127);
} else {
if((state_val_32130 === (12))){
var inst_32115 = (state_32129[(2)]);
var state_32129__$1 = state_32129;
var statearr_32159_33601 = state_32129__$1;
(statearr_32159_33601[(2)] = inst_32115);

(statearr_32159_33601[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32130 === (2))){
var state_32129__$1 = state_32129;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32129__$1,(4),in$);
} else {
if((state_val_32130 === (23))){
var inst_32123 = (state_32129[(2)]);
var state_32129__$1 = state_32129;
var statearr_32161_33602 = state_32129__$1;
(statearr_32161_33602[(2)] = inst_32123);

(statearr_32161_33602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32130 === (19))){
var inst_32110 = (state_32129[(2)]);
var state_32129__$1 = state_32129;
var statearr_32162_33603 = state_32129__$1;
(statearr_32162_33603[(2)] = inst_32110);

(statearr_32162_33603[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32130 === (11))){
var inst_32081 = (state_32129[(10)]);
var inst_32095 = (state_32129[(7)]);
var inst_32095__$1 = cljs.core.seq(inst_32081);
var state_32129__$1 = (function (){var statearr_32167 = state_32129;
(statearr_32167[(7)] = inst_32095__$1);

return statearr_32167;
})();
if(inst_32095__$1){
var statearr_32170_33604 = state_32129__$1;
(statearr_32170_33604[(1)] = (14));

} else {
var statearr_32171_33605 = state_32129__$1;
(statearr_32171_33605[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32130 === (9))){
var inst_32117 = (state_32129[(2)]);
var inst_32118 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32129__$1 = (function (){var statearr_32172 = state_32129;
(statearr_32172[(15)] = inst_32117);

return statearr_32172;
})();
if(cljs.core.truth_(inst_32118)){
var statearr_32173_33606 = state_32129__$1;
(statearr_32173_33606[(1)] = (21));

} else {
var statearr_32175_33607 = state_32129__$1;
(statearr_32175_33607[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32130 === (5))){
var inst_32072 = cljs.core.async.close_BANG_(out);
var state_32129__$1 = state_32129;
var statearr_32176_33608 = state_32129__$1;
(statearr_32176_33608[(2)] = inst_32072);

(statearr_32176_33608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32130 === (14))){
var inst_32095 = (state_32129[(7)]);
var inst_32097 = cljs.core.chunked_seq_QMARK_(inst_32095);
var state_32129__$1 = state_32129;
if(inst_32097){
var statearr_32179_33609 = state_32129__$1;
(statearr_32179_33609[(1)] = (17));

} else {
var statearr_32180_33610 = state_32129__$1;
(statearr_32180_33610[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32130 === (16))){
var inst_32113 = (state_32129[(2)]);
var state_32129__$1 = state_32129;
var statearr_32182_33611 = state_32129__$1;
(statearr_32182_33611[(2)] = inst_32113);

(statearr_32182_33611[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32130 === (10))){
var inst_32082 = (state_32129[(8)]);
var inst_32084 = (state_32129[(9)]);
var inst_32089 = cljs.core._nth(inst_32082,inst_32084);
var state_32129__$1 = state_32129;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32129__$1,(13),out,inst_32089);
} else {
if((state_val_32130 === (18))){
var inst_32095 = (state_32129[(7)]);
var inst_32104 = cljs.core.first(inst_32095);
var state_32129__$1 = state_32129;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32129__$1,(20),out,inst_32104);
} else {
if((state_val_32130 === (8))){
var inst_32084 = (state_32129[(9)]);
var inst_32083 = (state_32129[(12)]);
var inst_32086 = (inst_32084 < inst_32083);
var inst_32087 = inst_32086;
var state_32129__$1 = state_32129;
if(cljs.core.truth_(inst_32087)){
var statearr_32183_33612 = state_32129__$1;
(statearr_32183_33612[(1)] = (10));

} else {
var statearr_32184_33613 = state_32129__$1;
(statearr_32184_33613[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29452__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29452__auto____0 = (function (){
var statearr_32185 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32185[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29452__auto__);

(statearr_32185[(1)] = (1));

return statearr_32185;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29452__auto____1 = (function (state_32129){
while(true){
var ret_value__29453__auto__ = (function (){try{while(true){
var result__29454__auto__ = switch__29451__auto__(state_32129);
if(cljs.core.keyword_identical_QMARK_(result__29454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29454__auto__;
}
break;
}
}catch (e32190){var ex__29455__auto__ = e32190;
var statearr_32191_33614 = state_32129;
(statearr_32191_33614[(2)] = ex__29455__auto__);


if(cljs.core.seq((state_32129[(4)]))){
var statearr_32193_33615 = state_32129;
(statearr_32193_33615[(1)] = cljs.core.first((state_32129[(4)])));

} else {
throw ex__29455__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33616 = state_32129;
state_32129 = G__33616;
continue;
} else {
return ret_value__29453__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29452__auto__ = function(state_32129){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29452__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29452__auto____1.call(this,state_32129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29452__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29452__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29452__auto__;
})()
})();
var state__29672__auto__ = (function (){var statearr_32195 = f__29671__auto__();
(statearr_32195[(6)] = c__29661__auto__);

return statearr_32195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29672__auto__);
}));

return c__29661__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32197 = arguments.length;
switch (G__32197) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32200 = arguments.length;
switch (G__32200) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32204 = arguments.length;
switch (G__32204) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29661__auto___33624 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29671__auto__ = (function (){var switch__29451__auto__ = (function (state_32236){
var state_val_32237 = (state_32236[(1)]);
if((state_val_32237 === (7))){
var inst_32231 = (state_32236[(2)]);
var state_32236__$1 = state_32236;
var statearr_32238_33625 = state_32236__$1;
(statearr_32238_33625[(2)] = inst_32231);

(statearr_32238_33625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (1))){
var inst_32208 = null;
var state_32236__$1 = (function (){var statearr_32239 = state_32236;
(statearr_32239[(7)] = inst_32208);

return statearr_32239;
})();
var statearr_32240_33626 = state_32236__$1;
(statearr_32240_33626[(2)] = null);

(statearr_32240_33626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (4))){
var inst_32214 = (state_32236[(8)]);
var inst_32214__$1 = (state_32236[(2)]);
var inst_32216 = (inst_32214__$1 == null);
var inst_32217 = cljs.core.not(inst_32216);
var state_32236__$1 = (function (){var statearr_32241 = state_32236;
(statearr_32241[(8)] = inst_32214__$1);

return statearr_32241;
})();
if(inst_32217){
var statearr_32242_33628 = state_32236__$1;
(statearr_32242_33628[(1)] = (5));

} else {
var statearr_32243_33629 = state_32236__$1;
(statearr_32243_33629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (6))){
var state_32236__$1 = state_32236;
var statearr_32248_33630 = state_32236__$1;
(statearr_32248_33630[(2)] = null);

(statearr_32248_33630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (3))){
var inst_32233 = (state_32236[(2)]);
var inst_32234 = cljs.core.async.close_BANG_(out);
var state_32236__$1 = (function (){var statearr_32252 = state_32236;
(statearr_32252[(9)] = inst_32233);

return statearr_32252;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32236__$1,inst_32234);
} else {
if((state_val_32237 === (2))){
var state_32236__$1 = state_32236;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32236__$1,(4),ch);
} else {
if((state_val_32237 === (11))){
var inst_32214 = (state_32236[(8)]);
var inst_32225 = (state_32236[(2)]);
var inst_32208 = inst_32214;
var state_32236__$1 = (function (){var statearr_32253 = state_32236;
(statearr_32253[(7)] = inst_32208);

(statearr_32253[(10)] = inst_32225);

return statearr_32253;
})();
var statearr_32254_33631 = state_32236__$1;
(statearr_32254_33631[(2)] = null);

(statearr_32254_33631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (9))){
var inst_32214 = (state_32236[(8)]);
var state_32236__$1 = state_32236;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32236__$1,(11),out,inst_32214);
} else {
if((state_val_32237 === (5))){
var inst_32214 = (state_32236[(8)]);
var inst_32208 = (state_32236[(7)]);
var inst_32219 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32214,inst_32208);
var state_32236__$1 = state_32236;
if(inst_32219){
var statearr_32256_33633 = state_32236__$1;
(statearr_32256_33633[(1)] = (8));

} else {
var statearr_32257_33634 = state_32236__$1;
(statearr_32257_33634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (10))){
var inst_32228 = (state_32236[(2)]);
var state_32236__$1 = state_32236;
var statearr_32258_33635 = state_32236__$1;
(statearr_32258_33635[(2)] = inst_32228);

(statearr_32258_33635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (8))){
var inst_32208 = (state_32236[(7)]);
var tmp32255 = inst_32208;
var inst_32208__$1 = tmp32255;
var state_32236__$1 = (function (){var statearr_32259 = state_32236;
(statearr_32259[(7)] = inst_32208__$1);

return statearr_32259;
})();
var statearr_32260_33636 = state_32236__$1;
(statearr_32260_33636[(2)] = null);

(statearr_32260_33636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29452__auto__ = null;
var cljs$core$async$state_machine__29452__auto____0 = (function (){
var statearr_32261 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32261[(0)] = cljs$core$async$state_machine__29452__auto__);

(statearr_32261[(1)] = (1));

return statearr_32261;
});
var cljs$core$async$state_machine__29452__auto____1 = (function (state_32236){
while(true){
var ret_value__29453__auto__ = (function (){try{while(true){
var result__29454__auto__ = switch__29451__auto__(state_32236);
if(cljs.core.keyword_identical_QMARK_(result__29454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29454__auto__;
}
break;
}
}catch (e32262){var ex__29455__auto__ = e32262;
var statearr_32263_33640 = state_32236;
(statearr_32263_33640[(2)] = ex__29455__auto__);


if(cljs.core.seq((state_32236[(4)]))){
var statearr_32264_33641 = state_32236;
(statearr_32264_33641[(1)] = cljs.core.first((state_32236[(4)])));

} else {
throw ex__29455__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33642 = state_32236;
state_32236 = G__33642;
continue;
} else {
return ret_value__29453__auto__;
}
break;
}
});
cljs$core$async$state_machine__29452__auto__ = function(state_32236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29452__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29452__auto____1.call(this,state_32236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29452__auto____0;
cljs$core$async$state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29452__auto____1;
return cljs$core$async$state_machine__29452__auto__;
})()
})();
var state__29672__auto__ = (function (){var statearr_32273 = f__29671__auto__();
(statearr_32273[(6)] = c__29661__auto___33624);

return statearr_32273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29672__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32284 = arguments.length;
switch (G__32284) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29661__auto___33645 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29671__auto__ = (function (){var switch__29451__auto__ = (function (state_32331){
var state_val_32332 = (state_32331[(1)]);
if((state_val_32332 === (7))){
var inst_32327 = (state_32331[(2)]);
var state_32331__$1 = state_32331;
var statearr_32333_33646 = state_32331__$1;
(statearr_32333_33646[(2)] = inst_32327);

(statearr_32333_33646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32332 === (1))){
var inst_32293 = (new Array(n));
var inst_32294 = inst_32293;
var inst_32295 = (0);
var state_32331__$1 = (function (){var statearr_32334 = state_32331;
(statearr_32334[(7)] = inst_32295);

(statearr_32334[(8)] = inst_32294);

return statearr_32334;
})();
var statearr_32335_33647 = state_32331__$1;
(statearr_32335_33647[(2)] = null);

(statearr_32335_33647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32332 === (4))){
var inst_32298 = (state_32331[(9)]);
var inst_32298__$1 = (state_32331[(2)]);
var inst_32300 = (inst_32298__$1 == null);
var inst_32301 = cljs.core.not(inst_32300);
var state_32331__$1 = (function (){var statearr_32337 = state_32331;
(statearr_32337[(9)] = inst_32298__$1);

return statearr_32337;
})();
if(inst_32301){
var statearr_32338_33648 = state_32331__$1;
(statearr_32338_33648[(1)] = (5));

} else {
var statearr_32339_33649 = state_32331__$1;
(statearr_32339_33649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32332 === (15))){
var inst_32321 = (state_32331[(2)]);
var state_32331__$1 = state_32331;
var statearr_32340_33650 = state_32331__$1;
(statearr_32340_33650[(2)] = inst_32321);

(statearr_32340_33650[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32332 === (13))){
var state_32331__$1 = state_32331;
var statearr_32341_33655 = state_32331__$1;
(statearr_32341_33655[(2)] = null);

(statearr_32341_33655[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32332 === (6))){
var inst_32295 = (state_32331[(7)]);
var inst_32317 = (inst_32295 > (0));
var state_32331__$1 = state_32331;
if(cljs.core.truth_(inst_32317)){
var statearr_32342_33656 = state_32331__$1;
(statearr_32342_33656[(1)] = (12));

} else {
var statearr_32343_33657 = state_32331__$1;
(statearr_32343_33657[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32332 === (3))){
var inst_32329 = (state_32331[(2)]);
var state_32331__$1 = state_32331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32331__$1,inst_32329);
} else {
if((state_val_32332 === (12))){
var inst_32294 = (state_32331[(8)]);
var inst_32319 = cljs.core.vec(inst_32294);
var state_32331__$1 = state_32331;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32331__$1,(15),out,inst_32319);
} else {
if((state_val_32332 === (2))){
var state_32331__$1 = state_32331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32331__$1,(4),ch);
} else {
if((state_val_32332 === (11))){
var inst_32311 = (state_32331[(2)]);
var inst_32312 = (new Array(n));
var inst_32294 = inst_32312;
var inst_32295 = (0);
var state_32331__$1 = (function (){var statearr_32344 = state_32331;
(statearr_32344[(7)] = inst_32295);

(statearr_32344[(8)] = inst_32294);

(statearr_32344[(10)] = inst_32311);

return statearr_32344;
})();
var statearr_32345_33658 = state_32331__$1;
(statearr_32345_33658[(2)] = null);

(statearr_32345_33658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32332 === (9))){
var inst_32294 = (state_32331[(8)]);
var inst_32309 = cljs.core.vec(inst_32294);
var state_32331__$1 = state_32331;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32331__$1,(11),out,inst_32309);
} else {
if((state_val_32332 === (5))){
var inst_32295 = (state_32331[(7)]);
var inst_32298 = (state_32331[(9)]);
var inst_32294 = (state_32331[(8)]);
var inst_32304 = (state_32331[(11)]);
var inst_32303 = (inst_32294[inst_32295] = inst_32298);
var inst_32304__$1 = (inst_32295 + (1));
var inst_32305 = (inst_32304__$1 < n);
var state_32331__$1 = (function (){var statearr_32349 = state_32331;
(statearr_32349[(12)] = inst_32303);

(statearr_32349[(11)] = inst_32304__$1);

return statearr_32349;
})();
if(cljs.core.truth_(inst_32305)){
var statearr_32350_33659 = state_32331__$1;
(statearr_32350_33659[(1)] = (8));

} else {
var statearr_32351_33660 = state_32331__$1;
(statearr_32351_33660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32332 === (14))){
var inst_32324 = (state_32331[(2)]);
var inst_32325 = cljs.core.async.close_BANG_(out);
var state_32331__$1 = (function (){var statearr_32354 = state_32331;
(statearr_32354[(13)] = inst_32324);

return statearr_32354;
})();
var statearr_32360_33661 = state_32331__$1;
(statearr_32360_33661[(2)] = inst_32325);

(statearr_32360_33661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32332 === (10))){
var inst_32315 = (state_32331[(2)]);
var state_32331__$1 = state_32331;
var statearr_32361_33662 = state_32331__$1;
(statearr_32361_33662[(2)] = inst_32315);

(statearr_32361_33662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32332 === (8))){
var inst_32294 = (state_32331[(8)]);
var inst_32304 = (state_32331[(11)]);
var tmp32352 = inst_32294;
var inst_32294__$1 = tmp32352;
var inst_32295 = inst_32304;
var state_32331__$1 = (function (){var statearr_32362 = state_32331;
(statearr_32362[(7)] = inst_32295);

(statearr_32362[(8)] = inst_32294__$1);

return statearr_32362;
})();
var statearr_32363_33663 = state_32331__$1;
(statearr_32363_33663[(2)] = null);

(statearr_32363_33663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29452__auto__ = null;
var cljs$core$async$state_machine__29452__auto____0 = (function (){
var statearr_32398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32398[(0)] = cljs$core$async$state_machine__29452__auto__);

(statearr_32398[(1)] = (1));

return statearr_32398;
});
var cljs$core$async$state_machine__29452__auto____1 = (function (state_32331){
while(true){
var ret_value__29453__auto__ = (function (){try{while(true){
var result__29454__auto__ = switch__29451__auto__(state_32331);
if(cljs.core.keyword_identical_QMARK_(result__29454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29454__auto__;
}
break;
}
}catch (e32399){var ex__29455__auto__ = e32399;
var statearr_32400_33664 = state_32331;
(statearr_32400_33664[(2)] = ex__29455__auto__);


if(cljs.core.seq((state_32331[(4)]))){
var statearr_32401_33665 = state_32331;
(statearr_32401_33665[(1)] = cljs.core.first((state_32331[(4)])));

} else {
throw ex__29455__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33666 = state_32331;
state_32331 = G__33666;
continue;
} else {
return ret_value__29453__auto__;
}
break;
}
});
cljs$core$async$state_machine__29452__auto__ = function(state_32331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29452__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29452__auto____1.call(this,state_32331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29452__auto____0;
cljs$core$async$state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29452__auto____1;
return cljs$core$async$state_machine__29452__auto__;
})()
})();
var state__29672__auto__ = (function (){var statearr_32402 = f__29671__auto__();
(statearr_32402[(6)] = c__29661__auto___33645);

return statearr_32402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29672__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32412 = arguments.length;
switch (G__32412) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29661__auto___33668 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29671__auto__ = (function (){var switch__29451__auto__ = (function (state_32473){
var state_val_32474 = (state_32473[(1)]);
if((state_val_32474 === (7))){
var inst_32468 = (state_32473[(2)]);
var state_32473__$1 = state_32473;
var statearr_32475_33669 = state_32473__$1;
(statearr_32475_33669[(2)] = inst_32468);

(statearr_32475_33669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32474 === (1))){
var inst_32427 = [];
var inst_32428 = inst_32427;
var inst_32429 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32473__$1 = (function (){var statearr_32476 = state_32473;
(statearr_32476[(7)] = inst_32428);

(statearr_32476[(8)] = inst_32429);

return statearr_32476;
})();
var statearr_32477_33670 = state_32473__$1;
(statearr_32477_33670[(2)] = null);

(statearr_32477_33670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32474 === (4))){
var inst_32432 = (state_32473[(9)]);
var inst_32432__$1 = (state_32473[(2)]);
var inst_32433 = (inst_32432__$1 == null);
var inst_32434 = cljs.core.not(inst_32433);
var state_32473__$1 = (function (){var statearr_32478 = state_32473;
(statearr_32478[(9)] = inst_32432__$1);

return statearr_32478;
})();
if(inst_32434){
var statearr_32479_33671 = state_32473__$1;
(statearr_32479_33671[(1)] = (5));

} else {
var statearr_32480_33672 = state_32473__$1;
(statearr_32480_33672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32474 === (15))){
var inst_32428 = (state_32473[(7)]);
var inst_32460 = cljs.core.vec(inst_32428);
var state_32473__$1 = state_32473;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32473__$1,(18),out,inst_32460);
} else {
if((state_val_32474 === (13))){
var inst_32455 = (state_32473[(2)]);
var state_32473__$1 = state_32473;
var statearr_32481_33673 = state_32473__$1;
(statearr_32481_33673[(2)] = inst_32455);

(statearr_32481_33673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32474 === (6))){
var inst_32428 = (state_32473[(7)]);
var inst_32457 = inst_32428.length;
var inst_32458 = (inst_32457 > (0));
var state_32473__$1 = state_32473;
if(cljs.core.truth_(inst_32458)){
var statearr_32483_33674 = state_32473__$1;
(statearr_32483_33674[(1)] = (15));

} else {
var statearr_32484_33675 = state_32473__$1;
(statearr_32484_33675[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32474 === (17))){
var inst_32465 = (state_32473[(2)]);
var inst_32466 = cljs.core.async.close_BANG_(out);
var state_32473__$1 = (function (){var statearr_32485 = state_32473;
(statearr_32485[(10)] = inst_32465);

return statearr_32485;
})();
var statearr_32486_33676 = state_32473__$1;
(statearr_32486_33676[(2)] = inst_32466);

(statearr_32486_33676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32474 === (3))){
var inst_32470 = (state_32473[(2)]);
var state_32473__$1 = state_32473;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32473__$1,inst_32470);
} else {
if((state_val_32474 === (12))){
var inst_32428 = (state_32473[(7)]);
var inst_32448 = cljs.core.vec(inst_32428);
var state_32473__$1 = state_32473;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32473__$1,(14),out,inst_32448);
} else {
if((state_val_32474 === (2))){
var state_32473__$1 = state_32473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32473__$1,(4),ch);
} else {
if((state_val_32474 === (11))){
var inst_32436 = (state_32473[(11)]);
var inst_32428 = (state_32473[(7)]);
var inst_32432 = (state_32473[(9)]);
var inst_32445 = inst_32428.push(inst_32432);
var tmp32487 = inst_32428;
var inst_32428__$1 = tmp32487;
var inst_32429 = inst_32436;
var state_32473__$1 = (function (){var statearr_32489 = state_32473;
(statearr_32489[(7)] = inst_32428__$1);

(statearr_32489[(12)] = inst_32445);

(statearr_32489[(8)] = inst_32429);

return statearr_32489;
})();
var statearr_32491_33681 = state_32473__$1;
(statearr_32491_33681[(2)] = null);

(statearr_32491_33681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32474 === (9))){
var inst_32429 = (state_32473[(8)]);
var inst_32441 = cljs.core.keyword_identical_QMARK_(inst_32429,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32473__$1 = state_32473;
var statearr_32492_33682 = state_32473__$1;
(statearr_32492_33682[(2)] = inst_32441);

(statearr_32492_33682[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32474 === (5))){
var inst_32436 = (state_32473[(11)]);
var inst_32437 = (state_32473[(13)]);
var inst_32432 = (state_32473[(9)]);
var inst_32429 = (state_32473[(8)]);
var inst_32436__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32432) : f.call(null,inst_32432));
var inst_32437__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32436__$1,inst_32429);
var state_32473__$1 = (function (){var statearr_32497 = state_32473;
(statearr_32497[(11)] = inst_32436__$1);

(statearr_32497[(13)] = inst_32437__$1);

return statearr_32497;
})();
if(inst_32437__$1){
var statearr_32498_33683 = state_32473__$1;
(statearr_32498_33683[(1)] = (8));

} else {
var statearr_32499_33684 = state_32473__$1;
(statearr_32499_33684[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32474 === (14))){
var inst_32436 = (state_32473[(11)]);
var inst_32432 = (state_32473[(9)]);
var inst_32450 = (state_32473[(2)]);
var inst_32451 = [];
var inst_32452 = inst_32451.push(inst_32432);
var inst_32428 = inst_32451;
var inst_32429 = inst_32436;
var state_32473__$1 = (function (){var statearr_32505 = state_32473;
(statearr_32505[(7)] = inst_32428);

(statearr_32505[(14)] = inst_32452);

(statearr_32505[(15)] = inst_32450);

(statearr_32505[(8)] = inst_32429);

return statearr_32505;
})();
var statearr_32506_33687 = state_32473__$1;
(statearr_32506_33687[(2)] = null);

(statearr_32506_33687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32474 === (16))){
var state_32473__$1 = state_32473;
var statearr_32507_33689 = state_32473__$1;
(statearr_32507_33689[(2)] = null);

(statearr_32507_33689[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32474 === (10))){
var inst_32443 = (state_32473[(2)]);
var state_32473__$1 = state_32473;
if(cljs.core.truth_(inst_32443)){
var statearr_32512_33690 = state_32473__$1;
(statearr_32512_33690[(1)] = (11));

} else {
var statearr_32513_33691 = state_32473__$1;
(statearr_32513_33691[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32474 === (18))){
var inst_32462 = (state_32473[(2)]);
var state_32473__$1 = state_32473;
var statearr_32514_33692 = state_32473__$1;
(statearr_32514_33692[(2)] = inst_32462);

(statearr_32514_33692[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32474 === (8))){
var inst_32437 = (state_32473[(13)]);
var state_32473__$1 = state_32473;
var statearr_32515_33693 = state_32473__$1;
(statearr_32515_33693[(2)] = inst_32437);

(statearr_32515_33693[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29452__auto__ = null;
var cljs$core$async$state_machine__29452__auto____0 = (function (){
var statearr_32516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32516[(0)] = cljs$core$async$state_machine__29452__auto__);

(statearr_32516[(1)] = (1));

return statearr_32516;
});
var cljs$core$async$state_machine__29452__auto____1 = (function (state_32473){
while(true){
var ret_value__29453__auto__ = (function (){try{while(true){
var result__29454__auto__ = switch__29451__auto__(state_32473);
if(cljs.core.keyword_identical_QMARK_(result__29454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29454__auto__;
}
break;
}
}catch (e32517){var ex__29455__auto__ = e32517;
var statearr_32520_33694 = state_32473;
(statearr_32520_33694[(2)] = ex__29455__auto__);


if(cljs.core.seq((state_32473[(4)]))){
var statearr_32521_33695 = state_32473;
(statearr_32521_33695[(1)] = cljs.core.first((state_32473[(4)])));

} else {
throw ex__29455__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33696 = state_32473;
state_32473 = G__33696;
continue;
} else {
return ret_value__29453__auto__;
}
break;
}
});
cljs$core$async$state_machine__29452__auto__ = function(state_32473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29452__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29452__auto____1.call(this,state_32473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29452__auto____0;
cljs$core$async$state_machine__29452__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29452__auto____1;
return cljs$core$async$state_machine__29452__auto__;
})()
})();
var state__29672__auto__ = (function (){var statearr_32522 = f__29671__auto__();
(statearr_32522[(6)] = c__29661__auto___33668);

return statearr_32522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29672__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
