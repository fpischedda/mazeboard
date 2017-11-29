// Compiled by ClojureScript 1.9.946 {}
goog.provide('mazeboardui.app');
goog.require('cljs.core');
goog.require('citrus.core');
goog.require('rum.core');
goog.require('mazeboardui.components.dashboard');
goog.require('mazeboardui.components.profile');
goog.require('mazeboardui.components.login');
mazeboardui.app.App = rum.core.build_defc.call(null,(function (r){
var map__16739 = rum.core.react.call(null,citrus.core.subscription.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",1091916230)], null)));
var map__16739__$1 = ((((!((map__16739 == null)))?((((map__16739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16739.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16739):map__16739);
var route = cljs.core.get.call(null,map__16739__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var params = cljs.core.get.call(null,map__16739__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
var map__16740 = rum.core.react.call(null,citrus.core.subscription.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null)));
var map__16740__$1 = ((((!((map__16740 == null)))?((((map__16740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16740.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16740):map__16740);
var user = cljs.core.get.call(null,map__16740__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
var map__16741 = rum.core.react.call(null,citrus.core.subscription.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",-631747508)], null)));
var map__16741__$1 = ((((!((map__16741 == null)))?((((map__16741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16741.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16741):map__16741);
var token = cljs.core.get.call(null,map__16741__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var attrs16734 = mazeboardui.components.profile.bar(user);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16734))?sablono.interpreter.attributes.call(null,attrs16734):null),((cljs.core.map_QMARK_.call(null,attrs16734))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("p",null,"Mazeboard UI"),sablono.interpreter.interpret.call(null,(function (){var G__16745 = route;
var G__16745__$1 = (((G__16745 instanceof cljs.core.Keyword))?G__16745.fqn:null);
switch (G__16745__$1) {
case "dashboard":
return mazeboardui.components.dashboard.dashboard.call(null,r);

break;
case "login":
return mazeboardui.components.login.login.call(null,r);

break;
case "logout":
return mazeboardui.components.login.logout.call(null,r);

break;
default:
return mazeboardui.components.login.login.call(null,r);

}
})())], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16734),React.createElement("p",null,"Mazeboard UI"),sablono.interpreter.interpret.call(null,(function (){var G__16746 = route;
var G__16746__$1 = (((G__16746 instanceof cljs.core.Keyword))?G__16746.fqn:null);
switch (G__16746__$1) {
case "dashboard":
return mazeboardui.components.dashboard.dashboard.call(null,r);

break;
case "login":
return mazeboardui.components.login.login.call(null,r);

break;
case "logout":
return mazeboardui.components.login.logout.call(null,r);

break;
default:
return mazeboardui.components.login.login.call(null,r);

}
})())], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"App");

//# sourceMappingURL=app.js.map?rel=1511973568665
