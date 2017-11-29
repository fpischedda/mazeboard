// Compiled by ClojureScript 1.9.946 {}
goog.provide('mazeboard.ui.controllers.login');
goog.require('cljs.core');
goog.require('mazeboard.ui.config');
mazeboard.ui.controllers.login.initial_state = cljs.core.PersistentArrayMap.EMPTY;
if(typeof mazeboard.ui.controllers.login.control !== 'undefined'){
} else {
mazeboard.ui.controllers.login.control = (function (){var method_table__9443__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9444__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9445__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9446__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9447__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"mazeboard.ui.controllers.login","control"),((function (method_table__9443__auto__,prefer_table__9444__auto__,method_cache__9445__auto__,cached_hierarchy__9446__auto__,hierarchy__9447__auto__){
return (function (event){
return event;
});})(method_table__9443__auto__,prefer_table__9444__auto__,method_cache__9445__auto__,cached_hierarchy__9446__auto__,hierarchy__9447__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9447__auto__,method_table__9443__auto__,prefer_table__9444__auto__,method_cache__9445__auto__,cached_hierarchy__9446__auto__));
})();
}
cljs.core._add_method.call(null,mazeboard.ui.controllers.login.control,new cljs.core.Keyword(null,"init","init",-1875481434),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),mazeboard.ui.controllers.login.initial_state], null);
}));
cljs.core._add_method.call(null,mazeboard.ui.controllers.login.control,new cljs.core.Keyword(null,"set-token","set-token",1378179451),(function (event,_,state){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null);
}));
cljs.core._add_method.call(null,mazeboard.ui.controllers.login.control,new cljs.core.Keyword(null,"load-profile","load-profile",-292246233),(function (_,p__10133){
var vec__10134 = p__10133;
var key = cljs.core.nth.call(null,vec__10134,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"local-storage","local-storage",-1301104068),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"on-ready","on-ready",628441937),new cljs.core.Keyword(null,"profile-loaded","profile-loaded",-1882113004)], null)], null);
}));
cljs.core._add_method.call(null,mazeboard.ui.controllers.login.control,new cljs.core.Keyword(null,"profile-loaded","profile-loaded",-1882113004),(function (_,p__10137){
var vec__10138 = p__10137;
var raw_profile = cljs.core.nth.call(null,vec__10138,(0),null);
var profile = cljs.core.js__GT_clj.call(null,JSON.parse(raw_profile),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(!((profile == null))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),profile,new cljs.core.Keyword(null,"set-token","set-token",1378179451),cljs.core.get_in.call(null,profile,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"token","token",-1211463215)], null)),new cljs.core.Keyword(null,"goto","goto",80149757),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"/"], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),mazeboard.ui.controllers.login.initial_state], null);
}
}));
cljs.core._add_method.call(null,mazeboard.ui.controllers.login.control,new cljs.core.Keyword(null,"authenticate","authenticate",743951231),(function (event,args,state){
var vec__10141 = args;
var username = cljs.core.nth.call(null,vec__10141,(0),null);
var password = cljs.core.nth.call(null,vec__10141,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"url","url",276297046),mazeboard.ui.config.login_url,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"success-fn","success-fn",-506864067),new cljs.core.Keyword(null,"login-successful","login-successful",-1410200360),new cljs.core.Keyword(null,"error-fn","error-fn",-171437615),new cljs.core.Keyword(null,"login-error","login-error",-1290265439),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false,new cljs.core.Keyword(null,"form-params","form-params",1884296467),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"password","password",417022471),password], null)], null)], null)], null);
}));
cljs.core._add_method.call(null,mazeboard.ui.controllers.login.control,new cljs.core.Keyword(null,"login-successful","login-successful",-1410200360),(function (event,p__10144,state){
var vec__10145 = p__10144;
var response = cljs.core.nth.call(null,vec__10145,(0),null);
var map__10148 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response);
var map__10148__$1 = ((((!((map__10148 == null)))?((((map__10148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10148.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10148):map__10148);
var errors = cljs.core.get.call(null,map__10148__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var token = cljs.core.get.call(null,map__10148__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var username = cljs.core.get.call(null,map__10148__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var profile = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"username","username",1605666410),username], null)], null);
if((errors == null)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),profile,new cljs.core.Keyword(null,"local-storage","local-storage",-1301104068),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"value","value",305978217),JSON.stringify(cljs.core.clj__GT_js.call(null,profile))], null),new cljs.core.Keyword(null,"set-token","set-token",1378179451),cljs.core.get_in.call(null,profile,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"token","token",-1211463215)], null)),new cljs.core.Keyword(null,"goto","goto",80149757),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"/"], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.get_in.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Keyword(null,"text","text",-1790561697)], null),errors)], null)], null);
}
}));
cljs.core._add_method.call(null,mazeboard.ui.controllers.login.control,new cljs.core.Keyword(null,"login-error","login-error",-1290265439),(function (event,args,state){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),"Network error, please try again in a minute"], null)], null);
}));
cljs.core._add_method.call(null,mazeboard.ui.controllers.login.control,new cljs.core.Keyword(null,"logout","logout",1418564329),(function (event,args,state){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"goto","goto",80149757),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"/login"], null)], null);
}));

//# sourceMappingURL=login.js.map?rel=1511974793634
