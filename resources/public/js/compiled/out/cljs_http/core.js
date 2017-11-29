// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5457__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__5457__auto__)){
var req = temp__5457__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

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
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (formatted_h){
return (function (p__13720){
var vec__13721 = p__13720;
var k = cljs.core.nth.call(null,vec__13721,(0),null);
var v = cljs.core.nth.call(null,vec__13721,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__13724 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__13724)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__13724)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__13724)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__13724)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__13724)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__13724)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13724)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__13725){
var map__13726 = p__13725;
var map__13726__$1 = ((((!((map__13726 == null)))?((((map__13726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13726.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13726):map__13726);
var request = map__13726__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__13726__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__13726__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__13726__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__8388__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__13728 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__13728,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__13728,response_type);

G__13728.setTimeoutInterval(timeout);

G__13728.setWithCredentials(send_credentials);

return G__13728;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__13729){
var map__13730 = p__13729;
var map__13730__$1 = ((((!((map__13730 == null)))?((((map__13730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13730.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13730):map__13730);
var request = map__13730__$1;
var request_method = cljs.core.get.call(null,map__13730__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__13730__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__13730__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__13730__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__13730__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__13730__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__8388__auto__ = request_method;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__13730,map__13730__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(cljs.core.not.call(null,cljs_http.core.aborted_QMARK_.call(null,xhr))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr,map__13730,map__13730__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_13754 = ((function (channel,request_url,method,headers__$1,xhr,map__13730,map__13730__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});})(channel,request_url,method,headers__$1,xhr,map__13730,map__13730__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__13732_13755 = xhr;
G__13732_13755.setProgressEventsEnabled(true);

G__13732_13755.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_13754,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__13732_13755.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_13754,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__11794__auto___13756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11794__auto___13756,channel,request_url,method,headers__$1,xhr,map__13730,map__13730__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__11795__auto__ = (function (){var switch__11704__auto__ = ((function (c__11794__auto___13756,channel,request_url,method,headers__$1,xhr,map__13730,map__13730__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_13743){
var state_val_13744 = (state_13743[(1)]);
if((state_val_13744 === (1))){
var state_13743__$1 = state_13743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13743__$1,(2),cancel);
} else {
if((state_val_13744 === (2))){
var inst_13734 = (state_13743[(2)]);
var inst_13735 = xhr.isComplete();
var inst_13736 = cljs.core.not.call(null,inst_13735);
var state_13743__$1 = (function (){var statearr_13745 = state_13743;
(statearr_13745[(7)] = inst_13734);

return statearr_13745;
})();
if(inst_13736){
var statearr_13746_13757 = state_13743__$1;
(statearr_13746_13757[(1)] = (3));

} else {
var statearr_13747_13758 = state_13743__$1;
(statearr_13747_13758[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13744 === (3))){
var inst_13738 = xhr.abort();
var state_13743__$1 = state_13743;
var statearr_13748_13759 = state_13743__$1;
(statearr_13748_13759[(2)] = inst_13738);

(statearr_13748_13759[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13744 === (4))){
var state_13743__$1 = state_13743;
var statearr_13749_13760 = state_13743__$1;
(statearr_13749_13760[(2)] = null);

(statearr_13749_13760[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13744 === (5))){
var inst_13741 = (state_13743[(2)]);
var state_13743__$1 = state_13743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13743__$1,inst_13741);
} else {
return null;
}
}
}
}
}
});})(c__11794__auto___13756,channel,request_url,method,headers__$1,xhr,map__13730,map__13730__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__11704__auto__,c__11794__auto___13756,channel,request_url,method,headers__$1,xhr,map__13730,map__13730__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__11705__auto__ = null;
var cljs_http$core$xhr_$_state_machine__11705__auto____0 = (function (){
var statearr_13750 = [null,null,null,null,null,null,null,null];
(statearr_13750[(0)] = cljs_http$core$xhr_$_state_machine__11705__auto__);

(statearr_13750[(1)] = (1));

return statearr_13750;
});
var cljs_http$core$xhr_$_state_machine__11705__auto____1 = (function (state_13743){
while(true){
var ret_value__11706__auto__ = (function (){try{while(true){
var result__11707__auto__ = switch__11704__auto__.call(null,state_13743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11707__auto__;
}
break;
}
}catch (e13751){if((e13751 instanceof Object)){
var ex__11708__auto__ = e13751;
var statearr_13752_13761 = state_13743;
(statearr_13752_13761[(5)] = ex__11708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13762 = state_13743;
state_13743 = G__13762;
continue;
} else {
return ret_value__11706__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__11705__auto__ = function(state_13743){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__11705__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__11705__auto____1.call(this,state_13743);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$xhr_$_state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__11705__auto____0;
cljs_http$core$xhr_$_state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__11705__auto____1;
return cljs_http$core$xhr_$_state_machine__11705__auto__;
})()
;})(switch__11704__auto__,c__11794__auto___13756,channel,request_url,method,headers__$1,xhr,map__13730,map__13730__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__11796__auto__ = (function (){var statearr_13753 = f__11795__auto__.call(null);
(statearr_13753[(6)] = c__11794__auto___13756);

return statearr_13753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11796__auto__);
});})(c__11794__auto___13756,channel,request_url,method,headers__$1,xhr,map__13730,map__13730__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__13763){
var map__13764 = p__13763;
var map__13764__$1 = ((((!((map__13764 == null)))?((((map__13764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13764.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13764):map__13764);
var request = map__13764__$1;
var timeout = cljs.core.get.call(null,map__13764__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__13764__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__13764__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__13764__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_13777 = jsonp.send(null,((function (channel,jsonp,map__13764,map__13764__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__13764,map__13764__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__13764,map__13764__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__13764,map__13764__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_13777], null));

if(cljs.core.truth_(cancel)){
var c__11794__auto___13778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11794__auto___13778,req_13777,channel,jsonp,map__13764,map__13764__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__11795__auto__ = (function (){var switch__11704__auto__ = ((function (c__11794__auto___13778,req_13777,channel,jsonp,map__13764,map__13764__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_13770){
var state_val_13771 = (state_13770[(1)]);
if((state_val_13771 === (1))){
var state_13770__$1 = state_13770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13770__$1,(2),cancel);
} else {
if((state_val_13771 === (2))){
var inst_13767 = (state_13770[(2)]);
var inst_13768 = jsonp.cancel(req_13777);
var state_13770__$1 = (function (){var statearr_13772 = state_13770;
(statearr_13772[(7)] = inst_13767);

return statearr_13772;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13770__$1,inst_13768);
} else {
return null;
}
}
});})(c__11794__auto___13778,req_13777,channel,jsonp,map__13764,map__13764__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__11704__auto__,c__11794__auto___13778,req_13777,channel,jsonp,map__13764,map__13764__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__11705__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__11705__auto____0 = (function (){
var statearr_13773 = [null,null,null,null,null,null,null,null];
(statearr_13773[(0)] = cljs_http$core$jsonp_$_state_machine__11705__auto__);

(statearr_13773[(1)] = (1));

return statearr_13773;
});
var cljs_http$core$jsonp_$_state_machine__11705__auto____1 = (function (state_13770){
while(true){
var ret_value__11706__auto__ = (function (){try{while(true){
var result__11707__auto__ = switch__11704__auto__.call(null,state_13770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11707__auto__;
}
break;
}
}catch (e13774){if((e13774 instanceof Object)){
var ex__11708__auto__ = e13774;
var statearr_13775_13779 = state_13770;
(statearr_13775_13779[(5)] = ex__11708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13780 = state_13770;
state_13770 = G__13780;
continue;
} else {
return ret_value__11706__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__11705__auto__ = function(state_13770){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__11705__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__11705__auto____1.call(this,state_13770);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$jsonp_$_state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__11705__auto____0;
cljs_http$core$jsonp_$_state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__11705__auto____1;
return cljs_http$core$jsonp_$_state_machine__11705__auto__;
})()
;})(switch__11704__auto__,c__11794__auto___13778,req_13777,channel,jsonp,map__13764,map__13764__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__11796__auto__ = (function (){var statearr_13776 = f__11795__auto__.call(null);
(statearr_13776[(6)] = c__11794__auto___13778);

return statearr_13776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11796__auto__);
});})(c__11794__auto___13778,req_13777,channel,jsonp,map__13764,map__13764__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__13781){
var map__13782 = p__13781;
var map__13782__$1 = ((((!((map__13782 == null)))?((((map__13782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13782):map__13782);
var request = map__13782__$1;
var request_method = cljs.core.get.call(null,map__13782__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map?rel=1511985271789
