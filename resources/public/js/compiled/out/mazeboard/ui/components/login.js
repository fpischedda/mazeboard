// Compiled by ClojureScript 1.9.946 {}
goog.provide('mazeboard.ui.components.login');
goog.require('cljs.core');
goog.require('citrus.core');
goog.require('rum.core');
goog.require('cljs.core.async');
goog.require('mazeboard.ui.dom');
goog.require('mazeboard.ui.utils');
goog.require('mazeboard.ui.config');
mazeboard.ui.components.login.login_button = rum.core.build_defc.call(null,(function (r){
return React.createElement("button",({"onClick": (function (){
return citrus.core.dispatch_BANG_.call(null,r,new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"authenticate","authenticate",743951231),mazeboard.ui.dom.elem_value.call(null,"#username"),mazeboard.ui.dom.elem_value.call(null,"#password"));
})}),"Login");
}),null,"login-button");
mazeboard.ui.components.login.login = rum.core.build_defc.call(null,(function (r){
var map__14749 = rum.core.react.call(null,citrus.core.subscription.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null)));
var map__14749__$1 = ((((!((map__14749 == null)))?((((map__14749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14749.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14749):map__14749);
var error = cljs.core.get.call(null,map__14749__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var profile = cljs.core.get.call(null,map__14749__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
return React.createElement("div",({"className": "login-box"}),React.createElement("h2",null,"Mazeboard Dashboard"),(function (){var attrs14753 = mazeboard.ui.utils.label_input.call(null,"Username",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"username",new cljs.core.Keyword(null,"id","id",-1388402092),"username"], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs14753))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["login-form"], null)], null),attrs14753)):({"className": "login-form"})),((cljs.core.map_QMARK_.call(null,attrs14753))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,mazeboard.ui.utils.label_input.call(null,"Password",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"name","name",1843675177),"password",new cljs.core.Keyword(null,"id","id",-1388402092),"password"], null))),sablono.interpreter.interpret.call(null,mazeboard.ui.components.login.login_button.call(null,r))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14753),sablono.interpreter.interpret.call(null,mazeboard.ui.utils.label_input.call(null,"Password",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"name","name",1843675177),"password",new cljs.core.Keyword(null,"id","id",-1388402092),"password"], null))),sablono.interpreter.interpret.call(null,mazeboard.ui.components.login.login_button.call(null,r))], null)));
})(),(function (){var attrs14754 = error;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs14754))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"messages"], null),attrs14754)):({"id": "messages"})),((cljs.core.map_QMARK_.call(null,attrs14754))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14754)], null)));
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"login");
mazeboard.ui.components.login.logout = rum.core.build_defc.call(null,(function (r){
citrus.core.dispatch_BANG_.call(null,r,new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"logout","logout",1418564329));

return React.createElement("div",null,"Logged out");
}),null,"logout");

//# sourceMappingURL=login.js.map?rel=1511985272361
