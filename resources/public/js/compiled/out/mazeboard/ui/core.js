// Compiled by ClojureScript 1.9.946 {}
goog.provide('mazeboard.ui.core');
goog.require('cljs.core');
goog.require('accountant.core');
goog.require('bidi.bidi');
goog.require('citrus.core');
goog.require('rum.core');
goog.require('clojure.string');
goog.require('mazeboard.player');
goog.require('mazeboard.board');
goog.require('mazeboard.ui.dom');
goog.require('mazeboard.ui.components.app');
goog.require('mazeboard.ui.controllers.dashboard');
goog.require('mazeboard.ui.controllers.login');
goog.require('mazeboard.ui.controllers.router');
goog.require('mazeboard.ui.handlers.local_storage');
goog.require('mazeboard.ui.handlers.navigation');
goog.require('mazeboard.ui.handlers.session');
goog.require('mazeboard.ui.handlers.http');
goog.require('mazeboard.ui.router');
cljs.core.enable_console_print_BANG_.call(null);
mazeboard.ui.core.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"dashboard","dashboard",-631747508)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["index.html",new cljs.core.Keyword(null,"login","login",55217519)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["login",new cljs.core.Keyword(null,"login","login",55217519)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["logout",new cljs.core.Keyword(null,"logout","logout",1418564329)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game/",new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.Keyword(null,"game","game",-441523833)], null)], null)], null);
if(typeof mazeboard.ui.core.reconciler !== 'undefined'){
} else {
mazeboard.ui.core.reconciler = citrus.core.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),mazeboard.ui.controllers.dashboard.control,new cljs.core.Keyword(null,"login","login",55217519),mazeboard.ui.controllers.login.control,new cljs.core.Keyword(null,"router","router",1091916230),mazeboard.ui.controllers.router.control], null),new cljs.core.Keyword(null,"effect-handlers","effect-handlers",1338585436),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"http","http",382524695),mazeboard.ui.handlers.http.http,new cljs.core.Keyword(null,"goto","goto",80149757),mazeboard.ui.handlers.navigation.goto$,new cljs.core.Keyword(null,"set-token","set-token",1378179451),mazeboard.ui.handlers.session.set_token,new cljs.core.Keyword(null,"local-storage","local-storage",-1301104068),mazeboard.ui.handlers.local_storage.local_storage], null)], null));
}
citrus.core.broadcast_sync_BANG_.call(null,mazeboard.ui.core.reconciler,new cljs.core.Keyword(null,"init","init",-1875481434));
citrus.core.dispatch_sync_BANG_.call(null,mazeboard.ui.core.reconciler,new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"load-profile","load-profile",-292246233),new cljs.core.Keyword(null,"profile","profile",-545963874));
mazeboard.ui.router.start_BANG_.call(null,(function (p1__12758_SHARP_){
return citrus.core.dispatch_BANG_.call(null,mazeboard.ui.core.reconciler,new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"push","push",799791267),p1__12758_SHARP_);
}),mazeboard.ui.core.routes);
accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (p1__12759_SHARP_){
return citrus.core.dispatch_BANG_.call(null,mazeboard.ui.core.reconciler,new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"push","push",799791267),bidi.bidi.match_route.call(null,mazeboard.ui.core.routes,p1__12759_SHARP_));
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return cljs.core.boolean$.call(null,bidi.bidi.match_route.call(null,mazeboard.ui.core.routes,path));
})], null));
rum.core.mount.call(null,mazeboard.ui.components.app.App(mazeboard.ui.core.reconciler),mazeboard.ui.dom.q.call(null,"#app"));
mazeboard.ui.core.on_js_reload = (function mazeboard$ui$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1511985685478
