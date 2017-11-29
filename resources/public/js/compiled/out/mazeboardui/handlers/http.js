// Compiled by ClojureScript 1.9.946 {}
goog.provide('mazeboardui.handlers.http');
goog.require('cljs.core');
goog.require('citrus.core');
goog.require('cljs_http.client');
if(typeof mazeboardui.handlers.http.http_methods !== 'undefined'){
} else {
mazeboardui.handlers.http.http_methods = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"get","get",1683182755),cljs_http.client.get,new cljs.core.Keyword(null,"post","post",269697687),cljs_http.client.post,new cljs.core.Keyword(null,"put","put",1299772570),cljs_http.client.put,new cljs.core.Keyword(null,"patch","patch",380775109),cljs_http.client.patch,new cljs.core.Keyword(null,"delete","delete",-1768633620),cljs_http.client.delete$], null);
}
mazeboardui.handlers.http.default_params = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null);
mazeboardui.handlers.http.http = (function mazeboardui$handlers$http$http(reconciler,ctrl_name,p__16509){
var map__16510 = p__16509;
var map__16510__$1 = ((((!((map__16510 == null)))?((((map__16510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16510.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16510):map__16510);
var method = cljs.core.get.call(null,map__16510__$1,new cljs.core.Keyword(null,"method","method",55703592));
var url = cljs.core.get.call(null,map__16510__$1,new cljs.core.Keyword(null,"url","url",276297046));
var success_fn = cljs.core.get.call(null,map__16510__$1,new cljs.core.Keyword(null,"success-fn","success-fn",-506864067));
var error_fn = cljs.core.get.call(null,map__16510__$1,new cljs.core.Keyword(null,"error-fn","error-fn",-171437615));
var params = cljs.core.get.call(null,map__16510__$1,new cljs.core.Keyword(null,"params","params",710516235));
var final_params = cljs.core.merge.call(null,mazeboardui.handlers.http.default_params,params);
var c__14021__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14021__auto__,final_params,map__16510,map__16510__$1,method,url,success_fn,error_fn,params){
return (function (){
var f__14022__auto__ = (function (){var switch__13931__auto__ = ((function (c__14021__auto__,final_params,map__16510,map__16510__$1,method,url,success_fn,error_fn,params){
return (function (state_16525){
var state_val_16526 = (state_16525[(1)]);
if((state_val_16526 === (1))){
var inst_16512 = mazeboardui.handlers.http.http_methods.call(null,method);
var inst_16513 = inst_16512.call(null,url,final_params);
var state_16525__$1 = state_16525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16525__$1,(2),inst_16513);
} else {
if((state_val_16526 === (2))){
var inst_16515 = (state_16525[(7)]);
var inst_16515__$1 = (state_16525[(2)]);
var inst_16516 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_16515__$1);
var inst_16517 = cljs.core._EQ_.call(null,(200),inst_16516);
var state_16525__$1 = (function (){var statearr_16527 = state_16525;
(statearr_16527[(7)] = inst_16515__$1);

return statearr_16527;
})();
if(inst_16517){
var statearr_16528_16536 = state_16525__$1;
(statearr_16528_16536[(1)] = (3));

} else {
var statearr_16529_16537 = state_16525__$1;
(statearr_16529_16537[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16526 === (3))){
var inst_16515 = (state_16525[(7)]);
var inst_16519 = citrus.core.dispatch_BANG_.call(null,reconciler,ctrl_name,success_fn,inst_16515);
var state_16525__$1 = state_16525;
var statearr_16530_16538 = state_16525__$1;
(statearr_16530_16538[(2)] = inst_16519);

(statearr_16530_16538[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16526 === (4))){
var inst_16515 = (state_16525[(7)]);
var inst_16521 = citrus.core.dispatch_BANG_.call(null,reconciler,ctrl_name,error_fn,inst_16515);
var state_16525__$1 = state_16525;
var statearr_16531_16539 = state_16525__$1;
(statearr_16531_16539[(2)] = inst_16521);

(statearr_16531_16539[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16526 === (5))){
var inst_16523 = (state_16525[(2)]);
var state_16525__$1 = state_16525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16525__$1,inst_16523);
} else {
return null;
}
}
}
}
}
});})(c__14021__auto__,final_params,map__16510,map__16510__$1,method,url,success_fn,error_fn,params))
;
return ((function (switch__13931__auto__,c__14021__auto__,final_params,map__16510,map__16510__$1,method,url,success_fn,error_fn,params){
return (function() {
var mazeboardui$handlers$http$http_$_state_machine__13932__auto__ = null;
var mazeboardui$handlers$http$http_$_state_machine__13932__auto____0 = (function (){
var statearr_16532 = [null,null,null,null,null,null,null,null];
(statearr_16532[(0)] = mazeboardui$handlers$http$http_$_state_machine__13932__auto__);

(statearr_16532[(1)] = (1));

return statearr_16532;
});
var mazeboardui$handlers$http$http_$_state_machine__13932__auto____1 = (function (state_16525){
while(true){
var ret_value__13933__auto__ = (function (){try{while(true){
var result__13934__auto__ = switch__13931__auto__.call(null,state_16525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13934__auto__;
}
break;
}
}catch (e16533){if((e16533 instanceof Object)){
var ex__13935__auto__ = e16533;
var statearr_16534_16540 = state_16525;
(statearr_16534_16540[(5)] = ex__13935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16541 = state_16525;
state_16525 = G__16541;
continue;
} else {
return ret_value__13933__auto__;
}
break;
}
});
mazeboardui$handlers$http$http_$_state_machine__13932__auto__ = function(state_16525){
switch(arguments.length){
case 0:
return mazeboardui$handlers$http$http_$_state_machine__13932__auto____0.call(this);
case 1:
return mazeboardui$handlers$http$http_$_state_machine__13932__auto____1.call(this,state_16525);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mazeboardui$handlers$http$http_$_state_machine__13932__auto__.cljs$core$IFn$_invoke$arity$0 = mazeboardui$handlers$http$http_$_state_machine__13932__auto____0;
mazeboardui$handlers$http$http_$_state_machine__13932__auto__.cljs$core$IFn$_invoke$arity$1 = mazeboardui$handlers$http$http_$_state_machine__13932__auto____1;
return mazeboardui$handlers$http$http_$_state_machine__13932__auto__;
})()
;})(switch__13931__auto__,c__14021__auto__,final_params,map__16510,map__16510__$1,method,url,success_fn,error_fn,params))
})();
var state__14023__auto__ = (function (){var statearr_16535 = f__14022__auto__.call(null);
(statearr_16535[(6)] = c__14021__auto__);

return statearr_16535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14023__auto__);
});})(c__14021__auto__,final_params,map__16510,map__16510__$1,method,url,success_fn,error_fn,params))
);

return c__14021__auto__;
});

//# sourceMappingURL=http.js.map?rel=1511973568099
