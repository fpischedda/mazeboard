// Compiled by ClojureScript 1.9.946 {}
goog.provide('mazeboard.ui.controllers.router');
goog.require('cljs.core');
goog.require('bidi.bidi');
if(typeof mazeboard.ui.controllers.router.control !== 'undefined'){
} else {
mazeboard.ui.controllers.router.control = (function (){var method_table__9443__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9444__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9445__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9446__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9447__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"mazeboard.ui.controllers.router","control"),((function (method_table__9443__auto__,prefer_table__9444__auto__,method_cache__9445__auto__,cached_hierarchy__9446__auto__,hierarchy__9447__auto__){
return (function (action,_,___$1){
return action;
});})(method_table__9443__auto__,prefer_table__9444__auto__,method_cache__9445__auto__,cached_hierarchy__9446__auto__,hierarchy__9447__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9447__auto__,method_table__9443__auto__,prefer_table__9444__auto__,method_cache__9445__auto__,cached_hierarchy__9446__auto__));
})();
}
cljs.core._add_method.call(null,mazeboard.ui.controllers.router.control,new cljs.core.Keyword(null,"init","init",-1875481434),(function (_,p__12851,___$1){
var vec__12852 = p__12851;
var route = cljs.core.nth.call(null,vec__12852,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),route], null);
}));
cljs.core._add_method.call(null,mazeboard.ui.controllers.router.control,new cljs.core.Keyword(null,"push","push",799791267),(function (_,p__12855,___$1){
var vec__12856 = p__12855;
var route = cljs.core.nth.call(null,vec__12856,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),route], null);
}));
cljs.core._add_method.call(null,mazeboard.ui.controllers.router.control,new cljs.core.Keyword(null,"set-token","set-token",1378179451),(function (_,token,state){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null);
}));

//# sourceMappingURL=router.js.map?rel=1511974611923
