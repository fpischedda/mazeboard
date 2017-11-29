// Compiled by ClojureScript 1.9.946 {}
goog.provide('mazeboard.ui.handlers.navigation');
goog.require('cljs.core');
goog.require('accountant.core');
mazeboard.ui.handlers.navigation.goto$ = (function mazeboard$ui$handlers$navigation$goto(_,___$1,p__15070){
var map__15071 = p__15070;
var map__15071__$1 = ((((!((map__15071 == null)))?((((map__15071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15071.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15071):map__15071);
var url = cljs.core.get.call(null,map__15071__$1,new cljs.core.Keyword(null,"url","url",276297046));
return accountant.core.navigate_BANG_.call(null,url);
});

//# sourceMappingURL=navigation.js.map?rel=1511985272836
