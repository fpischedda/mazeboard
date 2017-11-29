// Compiled by ClojureScript 1.9.946 {}
goog.provide('mazeboard.ui.handlers.http');
goog.require('cljs.core');
goog.require('citrus.core');
goog.require('cljs_http.client');
if(typeof mazeboard.ui.handlers.http.http_methods !== 'undefined'){
} else {
mazeboard.ui.handlers.http.http_methods = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"get","get",1683182755),cljs_http.client.get,new cljs.core.Keyword(null,"post","post",269697687),cljs_http.client.post,new cljs.core.Keyword(null,"put","put",1299772570),cljs_http.client.put,new cljs.core.Keyword(null,"patch","patch",380775109),cljs_http.client.patch,new cljs.core.Keyword(null,"delete","delete",-1768633620),cljs_http.client.delete$], null);
}
mazeboard.ui.handlers.http.default_params = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null);
mazeboard.ui.handlers.http.http = (function mazeboard$ui$handlers$http$http(reconciler,ctrl_name,p__15035){
var map__15036 = p__15035;
var map__15036__$1 = ((((!((map__15036 == null)))?((((map__15036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15036.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15036):map__15036);
var method = cljs.core.get.call(null,map__15036__$1,new cljs.core.Keyword(null,"method","method",55703592));
var url = cljs.core.get.call(null,map__15036__$1,new cljs.core.Keyword(null,"url","url",276297046));
var success_fn = cljs.core.get.call(null,map__15036__$1,new cljs.core.Keyword(null,"success-fn","success-fn",-506864067));
var error_fn = cljs.core.get.call(null,map__15036__$1,new cljs.core.Keyword(null,"error-fn","error-fn",-171437615));
var params = cljs.core.get.call(null,map__15036__$1,new cljs.core.Keyword(null,"params","params",710516235));
var final_params = cljs.core.merge.call(null,mazeboard.ui.handlers.http.default_params,params);
var c__11794__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11794__auto__,final_params,map__15036,map__15036__$1,method,url,success_fn,error_fn,params){
return (function (){
var f__11795__auto__ = (function (){var switch__11704__auto__ = ((function (c__11794__auto__,final_params,map__15036,map__15036__$1,method,url,success_fn,error_fn,params){
return (function (state_15051){
var state_val_15052 = (state_15051[(1)]);
if((state_val_15052 === (1))){
var inst_15038 = mazeboard.ui.handlers.http.http_methods.call(null,method);
var inst_15039 = inst_15038.call(null,url,final_params);
var state_15051__$1 = state_15051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15051__$1,(2),inst_15039);
} else {
if((state_val_15052 === (2))){
var inst_15041 = (state_15051[(7)]);
var inst_15041__$1 = (state_15051[(2)]);
var inst_15042 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_15041__$1);
var inst_15043 = cljs.core._EQ_.call(null,(200),inst_15042);
var state_15051__$1 = (function (){var statearr_15053 = state_15051;
(statearr_15053[(7)] = inst_15041__$1);

return statearr_15053;
})();
if(inst_15043){
var statearr_15054_15062 = state_15051__$1;
(statearr_15054_15062[(1)] = (3));

} else {
var statearr_15055_15063 = state_15051__$1;
(statearr_15055_15063[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (3))){
var inst_15041 = (state_15051[(7)]);
var inst_15045 = citrus.core.dispatch_BANG_.call(null,reconciler,ctrl_name,success_fn,inst_15041);
var state_15051__$1 = state_15051;
var statearr_15056_15064 = state_15051__$1;
(statearr_15056_15064[(2)] = inst_15045);

(statearr_15056_15064[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (4))){
var inst_15041 = (state_15051[(7)]);
var inst_15047 = citrus.core.dispatch_BANG_.call(null,reconciler,ctrl_name,error_fn,inst_15041);
var state_15051__$1 = state_15051;
var statearr_15057_15065 = state_15051__$1;
(statearr_15057_15065[(2)] = inst_15047);

(statearr_15057_15065[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (5))){
var inst_15049 = (state_15051[(2)]);
var state_15051__$1 = state_15051;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15051__$1,inst_15049);
} else {
return null;
}
}
}
}
}
});})(c__11794__auto__,final_params,map__15036,map__15036__$1,method,url,success_fn,error_fn,params))
;
return ((function (switch__11704__auto__,c__11794__auto__,final_params,map__15036,map__15036__$1,method,url,success_fn,error_fn,params){
return (function() {
var mazeboard$ui$handlers$http$http_$_state_machine__11705__auto__ = null;
var mazeboard$ui$handlers$http$http_$_state_machine__11705__auto____0 = (function (){
var statearr_15058 = [null,null,null,null,null,null,null,null];
(statearr_15058[(0)] = mazeboard$ui$handlers$http$http_$_state_machine__11705__auto__);

(statearr_15058[(1)] = (1));

return statearr_15058;
});
var mazeboard$ui$handlers$http$http_$_state_machine__11705__auto____1 = (function (state_15051){
while(true){
var ret_value__11706__auto__ = (function (){try{while(true){
var result__11707__auto__ = switch__11704__auto__.call(null,state_15051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11707__auto__;
}
break;
}
}catch (e15059){if((e15059 instanceof Object)){
var ex__11708__auto__ = e15059;
var statearr_15060_15066 = state_15051;
(statearr_15060_15066[(5)] = ex__11708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15067 = state_15051;
state_15051 = G__15067;
continue;
} else {
return ret_value__11706__auto__;
}
break;
}
});
mazeboard$ui$handlers$http$http_$_state_machine__11705__auto__ = function(state_15051){
switch(arguments.length){
case 0:
return mazeboard$ui$handlers$http$http_$_state_machine__11705__auto____0.call(this);
case 1:
return mazeboard$ui$handlers$http$http_$_state_machine__11705__auto____1.call(this,state_15051);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mazeboard$ui$handlers$http$http_$_state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$0 = mazeboard$ui$handlers$http$http_$_state_machine__11705__auto____0;
mazeboard$ui$handlers$http$http_$_state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$1 = mazeboard$ui$handlers$http$http_$_state_machine__11705__auto____1;
return mazeboard$ui$handlers$http$http_$_state_machine__11705__auto__;
})()
;})(switch__11704__auto__,c__11794__auto__,final_params,map__15036,map__15036__$1,method,url,success_fn,error_fn,params))
})();
var state__11796__auto__ = (function (){var statearr_15061 = f__11795__auto__.call(null);
(statearr_15061[(6)] = c__11794__auto__);

return statearr_15061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11796__auto__);
});})(c__11794__auto__,final_params,map__15036,map__15036__$1,method,url,success_fn,error_fn,params))
);

return c__11794__auto__;
});

//# sourceMappingURL=http.js.map?rel=1511985272824
