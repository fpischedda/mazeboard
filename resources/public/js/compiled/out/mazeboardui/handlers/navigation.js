// Compiled by ClojureScript 1.9.946 {}
goog.provide('mazeboardui.handlers.navigation');
goog.require('cljs.core');
goog.require('accountant.core');
mazeboardui.handlers.navigation.goto$ = (function mazeboardui$handlers$navigation$goto(_,___$1,p__16602){
var map__16603 = p__16602;
var map__16603__$1 = ((((!((map__16603 == null)))?((((map__16603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16603.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16603):map__16603);
var url = cljs.core.get.call(null,map__16603__$1,new cljs.core.Keyword(null,"url","url",276297046));
return accountant.core.navigate_BANG_.call(null,url);
});

//# sourceMappingURL=navigation.js.map?rel=1511973568252
