// Compiled by ClojureScript 1.9.946 {}
goog.provide('mazeboard.ui.router');
goog.require('cljs.core');
goog.require('bidi.bidi');
goog.require('pushy.core');
mazeboard.ui.router.start_BANG_ = (function mazeboard$ui$router$start_BANG_(on_set_page,routes){
var history = pushy.core.pushy.call(null,on_set_page,cljs.core.partial.call(null,bidi.bidi.match_route,routes));
pushy.core.start_BANG_.call(null,history);

return history;
});
mazeboard.ui.router.stop_BANG_ = (function mazeboard$ui$router$stop_BANG_(history){
return pushy.core.stop_BANG_.call(null,history);
});

//# sourceMappingURL=router.js.map?rel=1511974612186
