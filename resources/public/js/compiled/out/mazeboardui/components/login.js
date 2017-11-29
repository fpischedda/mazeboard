// Compiled by ClojureScript 1.9.946 {}
goog.provide('mazeboardui.components.login');
goog.require('cljs.core');
goog.require('citrus.core');
goog.require('rum.core');
goog.require('cljs.core.async');
goog.require('mazeboardui.dom');
goog.require('mazeboardui.utils');
goog.require('mazeboardui.config');
mazeboardui.components.login.login_button = rum.core.build_defc.call(null,(function (r){
return React.createElement("button",({"onClick": (function (){
return citrus.core.dispatch_BANG_.call(null,r,new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"authenticate","authenticate",743951231),mazeboardui.dom.elem_value.call(null,"#username"),mazeboardui.dom.elem_value.call(null,"#password"));
})}),"Login");
}),null,"login-button");
mazeboardui.components.login.login = rum.core.build_defc.call(null,(function (r){
var map__16708 = rum.core.react.call(null,citrus.core.subscription.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null)));
var map__16708__$1 = ((((!((map__16708 == null)))?((((map__16708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16708.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16708):map__16708);
var error = cljs.core.get.call(null,map__16708__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var profile = cljs.core.get.call(null,map__16708__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
return React.createElement("div",({"className": "login-box"}),React.createElement("h2",null,"Mazeboard Dashboard"),(function (){var attrs16712 = mazeboardui.utils.label_input.call(null,"Username",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"username",new cljs.core.Keyword(null,"id","id",-1388402092),"username"], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16712))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["login-form"], null)], null),attrs16712)):({"className": "login-form"})),((cljs.core.map_QMARK_.call(null,attrs16712))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,mazeboardui.utils.label_input.call(null,"Password",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"name","name",1843675177),"password",new cljs.core.Keyword(null,"id","id",-1388402092),"password"], null))),sablono.interpreter.interpret.call(null,mazeboardui.components.login.login_button.call(null,r))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16712),sablono.interpreter.interpret.call(null,mazeboardui.utils.label_input.call(null,"Password",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"name","name",1843675177),"password",new cljs.core.Keyword(null,"id","id",-1388402092),"password"], null))),sablono.interpreter.interpret.call(null,mazeboardui.components.login.login_button.call(null,r))], null)));
})(),(function (){var attrs16713 = error;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16713))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"messages"], null),attrs16713)):({"id": "messages"})),((cljs.core.map_QMARK_.call(null,attrs16713))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16713)], null)));
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"login");
mazeboardui.components.login.logout = rum.core.build_defc.call(null,(function (r){
citrus.core.dispatch_BANG_.call(null,r,new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"logout","logout",1418564329));

return React.createElement("div",null,"Logged out");
}),null,"logout");

//# sourceMappingURL=login.js.map?rel=1511973568525
