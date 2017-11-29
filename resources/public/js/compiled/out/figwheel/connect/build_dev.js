// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('mazeboard.ui.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__34135__delegate = function (x){
if(cljs.core.truth_(mazeboard.ui.core.on_js_reload)){
return cljs.core.apply.call(null,mazeboard.ui.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'mazeboard.ui.core/on-js-reload' is missing");
}
};
var G__34135 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__34136__i = 0, G__34136__a = new Array(arguments.length -  0);
while (G__34136__i < G__34136__a.length) {G__34136__a[G__34136__i] = arguments[G__34136__i + 0]; ++G__34136__i;}
  x = new cljs.core.IndexedSeq(G__34136__a,0,null);
} 
return G__34135__delegate.call(this,x);};
G__34135.cljs$lang$maxFixedArity = 0;
G__34135.cljs$lang$applyTo = (function (arglist__34137){
var x = cljs.core.seq(arglist__34137);
return G__34135__delegate(x);
});
G__34135.cljs$core$IFn$_invoke$arity$variadic = G__34135__delegate;
return G__34135;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1511975814444
