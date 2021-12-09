goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5753__auto__ = (function (){var fexpr__26695 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__26695.cljs$core$IFn$_invoke$arity$1 ? fexpr__26695.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__26695.call(null,channel));
})();
if(cljs.core.truth_(temp__5753__auto__)){
var req = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26705){
var vec__26706 = p__26705;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26706,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26706,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__26709 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__26709)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__26709)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__26709)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__26709)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__26709)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__26709)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26709)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__26710){
var map__26711 = p__26710;
var map__26711__$1 = cljs.core.__destructure_map(map__26711);
var request = map__26711__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26711__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26711__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26711__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__26712 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__26712,default_headers);

cljs_http.core.apply_response_type_BANG_(G__26712,response_type);

G__26712.setTimeoutInterval(timeout);

G__26712.setWithCredentials(send_credentials);

return G__26712;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__26713){
var map__26714 = p__26713;
var map__26714__$1 = cljs.core.__destructure_map(map__26714);
var request = map__26714__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26714__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26714__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26714__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26714__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26714__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26714__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4253__auto__ = request_method;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__26715 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__26715) : cljs_http.core.error_kw.call(null,G__26715));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_26760 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__26716_26761 = xhr;
G__26716_26761.setProgressEventsEnabled(true);

G__26716_26761.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_26760,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__26716_26761.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_26760,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__26234__auto___26762 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26235__auto__ = (function (){var switch__26149__auto__ = (function (state_26727){
var state_val_26728 = (state_26727[(1)]);
if((state_val_26728 === (1))){
var state_26727__$1 = state_26727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26727__$1,(2),cancel);
} else {
if((state_val_26728 === (2))){
var inst_26718 = (state_26727[(2)]);
var inst_26719 = xhr.isComplete();
var inst_26720 = cljs.core.not(inst_26719);
var state_26727__$1 = (function (){var statearr_26729 = state_26727;
(statearr_26729[(7)] = inst_26718);

return statearr_26729;
})();
if(inst_26720){
var statearr_26730_26763 = state_26727__$1;
(statearr_26730_26763[(1)] = (3));

} else {
var statearr_26731_26764 = state_26727__$1;
(statearr_26731_26764[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (3))){
var inst_26722 = xhr.abort();
var state_26727__$1 = state_26727;
var statearr_26732_26765 = state_26727__$1;
(statearr_26732_26765[(2)] = inst_26722);

(statearr_26732_26765[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (4))){
var state_26727__$1 = state_26727;
var statearr_26733_26766 = state_26727__$1;
(statearr_26733_26766[(2)] = null);

(statearr_26733_26766[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (5))){
var inst_26725 = (state_26727[(2)]);
var state_26727__$1 = state_26727;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26727__$1,inst_26725);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__26150__auto__ = null;
var cljs_http$core$xhr_$_state_machine__26150__auto____0 = (function (){
var statearr_26734 = [null,null,null,null,null,null,null,null];
(statearr_26734[(0)] = cljs_http$core$xhr_$_state_machine__26150__auto__);

(statearr_26734[(1)] = (1));

return statearr_26734;
});
var cljs_http$core$xhr_$_state_machine__26150__auto____1 = (function (state_26727){
while(true){
var ret_value__26151__auto__ = (function (){try{while(true){
var result__26152__auto__ = switch__26149__auto__(state_26727);
if(cljs.core.keyword_identical_QMARK_(result__26152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26152__auto__;
}
break;
}
}catch (e26735){var ex__26153__auto__ = e26735;
var statearr_26736_26767 = state_26727;
(statearr_26736_26767[(2)] = ex__26153__auto__);


if(cljs.core.seq((state_26727[(4)]))){
var statearr_26737_26768 = state_26727;
(statearr_26737_26768[(1)] = cljs.core.first((state_26727[(4)])));

} else {
throw ex__26153__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26769 = state_26727;
state_26727 = G__26769;
continue;
} else {
return ret_value__26151__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__26150__auto__ = function(state_26727){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__26150__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__26150__auto____1.call(this,state_26727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__26150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__26150__auto____0;
cljs_http$core$xhr_$_state_machine__26150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__26150__auto____1;
return cljs_http$core$xhr_$_state_machine__26150__auto__;
})()
})();
var state__26236__auto__ = (function (){var statearr_26738 = f__26235__auto__();
(statearr_26738[(6)] = c__26234__auto___26762);

return statearr_26738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26236__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__26739){
var map__26740 = p__26739;
var map__26740__$1 = cljs.core.__destructure_map(map__26740);
var request = map__26740__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26740__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26740__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26740__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26740__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_26770 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_26770], null));

if(cljs.core.truth_(cancel)){
var c__26234__auto___26771 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26235__auto__ = (function (){var switch__26149__auto__ = (function (state_26745){
var state_val_26746 = (state_26745[(1)]);
if((state_val_26746 === (1))){
var state_26745__$1 = state_26745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26745__$1,(2),cancel);
} else {
if((state_val_26746 === (2))){
var inst_26742 = (state_26745[(2)]);
var inst_26743 = jsonp.cancel(req_26770);
var state_26745__$1 = (function (){var statearr_26747 = state_26745;
(statearr_26747[(7)] = inst_26742);

return statearr_26747;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26745__$1,inst_26743);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__26150__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__26150__auto____0 = (function (){
var statearr_26748 = [null,null,null,null,null,null,null,null];
(statearr_26748[(0)] = cljs_http$core$jsonp_$_state_machine__26150__auto__);

(statearr_26748[(1)] = (1));

return statearr_26748;
});
var cljs_http$core$jsonp_$_state_machine__26150__auto____1 = (function (state_26745){
while(true){
var ret_value__26151__auto__ = (function (){try{while(true){
var result__26152__auto__ = switch__26149__auto__(state_26745);
if(cljs.core.keyword_identical_QMARK_(result__26152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26152__auto__;
}
break;
}
}catch (e26749){var ex__26153__auto__ = e26749;
var statearr_26750_26772 = state_26745;
(statearr_26750_26772[(2)] = ex__26153__auto__);


if(cljs.core.seq((state_26745[(4)]))){
var statearr_26751_26773 = state_26745;
(statearr_26751_26773[(1)] = cljs.core.first((state_26745[(4)])));

} else {
throw ex__26153__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26774 = state_26745;
state_26745 = G__26774;
continue;
} else {
return ret_value__26151__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__26150__auto__ = function(state_26745){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__26150__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__26150__auto____1.call(this,state_26745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__26150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__26150__auto____0;
cljs_http$core$jsonp_$_state_machine__26150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__26150__auto____1;
return cljs_http$core$jsonp_$_state_machine__26150__auto__;
})()
})();
var state__26236__auto__ = (function (){var statearr_26752 = f__26235__auto__();
(statearr_26752[(6)] = c__26234__auto___26771);

return statearr_26752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26236__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__26753){
var map__26754 = p__26753;
var map__26754__$1 = cljs.core.__destructure_map(map__26754);
var request = map__26754__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26754__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
