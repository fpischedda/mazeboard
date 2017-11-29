// Compiled by ClojureScript 1.9.946 {}
goog.provide('mazeboard.ui.controllers.dashboard');
goog.require('cljs.core');
goog.require('mazeboard.ui.config');
goog.require('clojure.string');
mazeboard.ui.controllers.dashboard.auth_header = (function mazeboard$ui$controllers$dashboard$auth_header(token){
return new cljs.core.PersistentArrayMap(null, 1, ["Authorization",["Token ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('')], null);
});
mazeboard.ui.controllers.dashboard.load_games_effect = (function mazeboard$ui$controllers$dashboard$load_games_effect(token){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"url","url",276297046),mazeboard.ui.config.game_list_url,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),mazeboard.ui.controllers.dashboard.auth_header.call(null,token)], null),new cljs.core.Keyword(null,"success-fn","success-fn",-506864067),new cljs.core.Keyword(null,"game-list-loaded","game-list-loaded",38435871),new cljs.core.Keyword(null,"error-fn","error-fn",-171437615),new cljs.core.Keyword(null,"game-list-loaded-error","game-list-loaded-error",1748766437)], null)], null);
});
mazeboard.ui.controllers.dashboard.initial_state = cljs.core.PersistentArrayMap.EMPTY;
if(typeof mazeboard.ui.controllers.dashboard.control !== 'undefined'){
} else {
mazeboard.ui.controllers.dashboard.control = (function (){var method_table__9443__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9444__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9445__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9446__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9447__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"mazeboard.ui.controllers.dashboard","control"),((function (method_table__9443__auto__,prefer_table__9444__auto__,method_cache__9445__auto__,cached_hierarchy__9446__auto__,hierarchy__9447__auto__){
return (function (event){
return event;
});})(method_table__9443__auto__,prefer_table__9444__auto__,method_cache__9445__auto__,cached_hierarchy__9446__auto__,hierarchy__9447__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9447__auto__,method_table__9443__auto__,prefer_table__9444__auto__,method_cache__9445__auto__,cached_hierarchy__9446__auto__));
})();
}
cljs.core._add_method.call(null,mazeboard.ui.controllers.dashboard.control,new cljs.core.Keyword(null,"init","init",-1875481434),(function (event,args,state){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),mazeboard.ui.controllers.dashboard.initial_state], null);
}));
cljs.core._add_method.call(null,mazeboard.ui.controllers.dashboard.control,new cljs.core.Keyword(null,"set-token","set-token",1378179451),(function (event,p__10113,state){
var vec__10114 = p__10113;
var token = cljs.core.nth.call(null,vec__10114,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"token","token",-1211463215),token)], null);
}));
cljs.core._add_method.call(null,mazeboard.ui.controllers.dashboard.control,new cljs.core.Keyword(null,"load-games","load-games",842874466),(function (event,args,state){
return mazeboard.ui.controllers.dashboard.load_games_effect.call(null,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(state));
}));
cljs.core._add_method.call(null,mazeboard.ui.controllers.dashboard.control,new cljs.core.Keyword(null,"game-list-loaded","game-list-loaded",38435871),(function (event,p__10117,state){
var vec__10118 = p__10117;
var response = cljs.core.nth.call(null,vec__10118,(0),null);
var gamesitories = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"gamesitories","gamesitories",-1401513290),gamesitories)], null);
}));
cljs.core._add_method.call(null,mazeboard.ui.controllers.dashboard.control,new cljs.core.Keyword(null,"game-list-loaded-error","game-list-loaded-error",1748766437),(function (event,args,state){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null);
}));
cljs.core._add_method.call(null,mazeboard.ui.controllers.dashboard.control,new cljs.core.Keyword(null,"delete-game","delete-game",-970899326),(function (event,p__10121,state){
var vec__10122 = p__10121;
var game_id = cljs.core.nth.call(null,vec__10122,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"url","url",276297046),mazeboard.ui.config.game_detail_url.call(null,game_id),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),mazeboard.ui.controllers.dashboard.auth_header.call(null,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(state))], null),new cljs.core.Keyword(null,"success-fn","success-fn",-506864067),new cljs.core.Keyword(null,"game-deleted-successful","game-deleted-successful",-1525381311),new cljs.core.Keyword(null,"error-fn","error-fn",-171437615),new cljs.core.Keyword(null,"game-deleted-error","game-deleted-error",833335189)], null)], null);
}));
cljs.core._add_method.call(null,mazeboard.ui.controllers.dashboard.control,new cljs.core.Keyword(null,"game-deleted-successful","game-deleted-successful",-1525381311),(function (event,args,state){
return mazeboard.ui.controllers.dashboard.load_games_effect.call(null,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(state));
}));
cljs.core._add_method.call(null,mazeboard.ui.controllers.dashboard.control,new cljs.core.Keyword(null,"game-deleted-error","game-deleted-error",833335189),(function (event,args,state){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null);
}));
cljs.core._add_method.call(null,mazeboard.ui.controllers.dashboard.control,new cljs.core.Keyword(null,"create-game","create-game",537929090),(function (event,args,state){
var vec__10125 = args;
var name = cljs.core.nth.call(null,vec__10125,(0),null);
var url = cljs.core.nth.call(null,vec__10125,(1),null);
var branches = cljs.core.nth.call(null,vec__10125,(2),null);
var targets = cljs.core.nth.call(null,vec__10125,(3),null);
var tracked_branches = clojure.string.split.call(null,branches,/ /);
var target_list = clojure.string.split.call(null,targets,/ /);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"url","url",276297046),mazeboard.ui.config.game_new_url,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"success-fn","success-fn",-506864067),new cljs.core.Keyword(null,"game-created-successful","game-created-successful",-1284606249),new cljs.core.Keyword(null,"error-fn","error-fn",-171437615),new cljs.core.Keyword(null,"game-created-error","game-created-error",162372366),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headers","headers",-835030129),mazeboard.ui.controllers.dashboard.auth_header.call(null,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"tracked_branches","tracked_branches",1824873896),tracked_branches,new cljs.core.Keyword(null,"targets","targets",2014963406),target_list], null)], null)], null)], null);
}));
cljs.core._add_method.call(null,mazeboard.ui.controllers.dashboard.control,new cljs.core.Keyword(null,"game-created-successful","game-created-successful",-1284606249),(function (event,args,state){
return mazeboard.ui.controllers.dashboard.load_games_effect.call(null,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(state));
}));
cljs.core._add_method.call(null,mazeboard.ui.controllers.dashboard.control,new cljs.core.Keyword(null,"game-created-error","game-created-error",162372366),(function (event,args,state){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null);
}));
cljs.core._add_method.call(null,mazeboard.ui.controllers.dashboard.control,new cljs.core.Keyword(null,"update-game","update-game",1297852920),(function (event,args,state){
var vec__10128 = args;
var game_id = cljs.core.nth.call(null,vec__10128,(0),null);
var max_players = cljs.core.nth.call(null,vec__10128,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"url","url",276297046),mazeboard.ui.config.game_detail_url.call(null,game_id),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"success-fn","success-fn",-506864067),new cljs.core.Keyword(null,"game-updated-successful","game-updated-successful",1320131149),new cljs.core.Keyword(null,"error-fn","error-fn",-171437615),new cljs.core.Keyword(null,"game-updated-error","game-updated-error",1442681845),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headers","headers",-835030129),mazeboard.ui.controllers.dashboard.auth_header.call(null,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-players","max-players",1714980355),max_players], null)], null)], null)], null);
}));
cljs.core._add_method.call(null,mazeboard.ui.controllers.dashboard.control,new cljs.core.Keyword(null,"game-updated-successful","game-updated-successful",1320131149),(function (event,args,state){
return mazeboard.ui.controllers.dashboard.load_games_effect.call(null,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(state));
}));
cljs.core._add_method.call(null,mazeboard.ui.controllers.dashboard.control,new cljs.core.Keyword(null,"game-updated-error","game-updated-error",1442681845),(function (event,args,state){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null);
}));

//# sourceMappingURL=dashboard.js.map?rel=1511975106345
