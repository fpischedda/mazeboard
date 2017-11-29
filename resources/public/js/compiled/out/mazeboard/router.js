// Compiled by ClojureScript 1.9.946 {}
goog.provide('mazeboard.router');
goog.require('cljs.core');
goog.require('bidi.bidi');
goog.require('pushy.core');
mazeboard.router.start_BANG_ = (function mazeboard$router$start_BANG_(on_set_page,routes){
var history = pushy.core.pushy.call(null,on_set_page,cljs.core.partial.call(null,bidi.bidi.match_route,routes));
pushy.core.start_BANG_.call(null,history);

return history;
});
mazeboard.router.stop_BANG_ = (function mazeboard$router$stop_BANG_(history){
return pushy.core.stop_BANG_.call(null,history);
});

//# sourceMappingURL=router.js.map?rel=1511973568482
