// Compiled by ClojureScript 1.9.946 {}
goog.provide('mazeboard.ui.app');
goog.require('cljs.core');
goog.require('citrus.core');
goog.require('rum.core');
goog.require('mazeboard.ui.components.dashboard');
goog.require('mazeboard.ui.components.profile');
goog.require('mazeboard.ui.components.login');
mazeboard.ui.app.App = rum.core.build_defc.call(null,(function (r){
var map__15023 = rum.core.react.call(null,citrus.core.subscription.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",1091916230)], null)));
var map__15023__$1 = ((((!((map__15023 == null)))?((((map__15023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15023.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15023):map__15023);
var route = cljs.core.get.call(null,map__15023__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var params = cljs.core.get.call(null,map__15023__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
var map__15024 = rum.core.react.call(null,citrus.core.subscription.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null)));
var map__15024__$1 = ((((!((map__15024 == null)))?((((map__15024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15024.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15024):map__15024);
var user = cljs.core.get.call(null,map__15024__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
var map__15025 = rum.core.react.call(null,citrus.core.subscription.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",-631747508)], null)));
var map__15025__$1 = ((((!((map__15025 == null)))?((((map__15025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15025.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15025):map__15025);
var token = cljs.core.get.call(null,map__15025__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var attrs15018 = mazeboard.ui.components.profile.bar.call(null,user);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs15018))?sablono.interpreter.attributes.call(null,attrs15018):null),((cljs.core.map_QMARK_.call(null,attrs15018))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("p",null,"Mazeboard UI"),sablono.interpreter.interpret.call(null,(function (){var G__15029 = route;
var G__15029__$1 = (((G__15029 instanceof cljs.core.Keyword))?G__15029.fqn:null);
switch (G__15029__$1) {
case "dashboard":
return mazeboard.ui.components.dashboard.dashboard.call(null,r);

break;
case "login":
return mazeboard.ui.components.login.login.call(null,r);

break;
case "logout":
return mazeboard.ui.components.login.logout.call(null,r);

break;
default:
return mazeboard.ui.components.login.login.call(null,r);

}
})())], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15018),React.createElement("p",null,"Mazeboard UI"),sablono.interpreter.interpret.call(null,(function (){var G__15030 = route;
var G__15030__$1 = (((G__15030 instanceof cljs.core.Keyword))?G__15030.fqn:null);
switch (G__15030__$1) {
case "dashboard":
return mazeboard.ui.components.dashboard.dashboard.call(null,r);

break;
case "login":
return mazeboard.ui.components.login.login.call(null,r);

break;
case "logout":
return mazeboard.ui.components.login.logout.call(null,r);

break;
default:
return mazeboard.ui.components.login.login.call(null,r);

}
})())], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"App");

//# sourceMappingURL=app.js.map?rel=1511985272794
