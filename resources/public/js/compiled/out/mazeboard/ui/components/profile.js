// Compiled by ClojureScript 1.9.946 {}
goog.provide('mazeboard.ui.components.profile');
goog.require('cljs.core');
goog.require('rum.core');
mazeboard.ui.components.profile.bar = rum.core.build_defc.call(null,(function (p__12719){
var map__12720 = p__12719;
var map__12720__$1 = ((((!((map__12720 == null)))?((((map__12720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12720.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12720):map__12720);
var token = cljs.core.get.call(null,map__12720__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var username = cljs.core.get.call(null,map__12720__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var email = cljs.core.get.call(null,map__12720__$1,new cljs.core.Keyword(null,"email","email",1415816706));
return React.createElement("div",({"className": "profile"}),"User profile",(((token == null))?React.createElement("a",({"href": "/login"}),"Login"):(function (){var attrs12724 = ["Hello ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(username)].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs12724))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["account"], null)], null),attrs12724)):({"className": "account"})),((cljs.core.map_QMARK_.call(null,attrs12724))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12724)], null)));
})()));
}),null,"bar");

//# sourceMappingURL=profile.js.map?rel=1511974611461
