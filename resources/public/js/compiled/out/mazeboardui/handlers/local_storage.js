// Compiled by ClojureScript 1.9.946 {}
goog.provide('mazeboardui.handlers.local_storage');
goog.require('cljs.core');
goog.require('citrus.core');
mazeboardui.handlers.local_storage.local_storage = (function mazeboardui$handlers$local_storage$local_storage(r,c,p__16544){
var map__16545 = p__16544;
var map__16545__$1 = ((((!((map__16545 == null)))?((((map__16545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16545.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16545):map__16545);
var op = cljs.core.get.call(null,map__16545__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var key = cljs.core.get.call(null,map__16545__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.call(null,map__16545__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_ready = cljs.core.get.call(null,map__16545__$1,new cljs.core.Keyword(null,"on-ready","on-ready",628441937));
var G__16547 = op;
var G__16547__$1 = (((G__16547 instanceof cljs.core.Keyword))?G__16547.fqn:null);
switch (G__16547__$1) {
case "get":
return citrus.core.dispatch_BANG_.call(null,r,c,on_ready,localStorage.getItem(cljs.core.name.call(null,key)));

break;
case "set":
return localStorage.setItem(cljs.core.name.call(null,key),value);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16547__$1)].join('')));

}
});

//# sourceMappingURL=local_storage.js.map?rel=1511973568113
