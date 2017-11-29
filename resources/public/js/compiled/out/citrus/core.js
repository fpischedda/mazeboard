// Compiled by ClojureScript 1.9.946 {}
goog.provide('citrus.core');
goog.require('cljs.core');
goog.require('citrus.reconciler');
goog.require('citrus.cursor');
/**
 * Creates an instance of Reconciler
 * 
 *  (citrus/reconciler {:state (atom {})
 *                      :controllers {:counter counter/control}
 *                      :effect-handlers {:http effects/http}
 *                      :batched-updates f
 *                      :chunked-updates f})
 * 
 *   Arguments
 * 
 *  config              - a map of
 *    state             - app state atom
 *    controllers       - a hash of state controllers
 *    effect-handlers   - a hash of effects handlers
 *    batched-updates   - a function used to batch reconciler updates, defaults to `js/requestAnimationFrame`
 *    chunked-updates   - a function used to divide reconciler update into chunks, doesn't used by default
 * 
 *   Returned value supports deref, watches and metadata.
 *   The only supported option is `:meta`
 */
citrus.core.reconciler = (function citrus$core$reconciler(var_args){
var args__9674__auto__ = [];
var len__9667__auto___16395 = arguments.length;
var i__9668__auto___16396 = (0);
while(true){
if((i__9668__auto___16396 < len__9667__auto___16395)){
args__9674__auto__.push((arguments[i__9668__auto___16396]));

var G__16397 = (i__9668__auto___16396 + (1));
i__9668__auto___16396 = G__16397;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((1) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((1)),(0),null)):null);
return citrus.core.reconciler.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9675__auto__);
});

citrus.core.reconciler.cljs$core$IFn$_invoke$arity$variadic = (function (p__16389,p__16390){
var map__16391 = p__16389;
var map__16391__$1 = ((((!((map__16391 == null)))?((((map__16391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16391.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16391):map__16391);
var state = cljs.core.get.call(null,map__16391__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var controllers = cljs.core.get.call(null,map__16391__$1,new cljs.core.Keyword(null,"controllers","controllers",-1120410624));
var effect_handlers = cljs.core.get.call(null,map__16391__$1,new cljs.core.Keyword(null,"effect-handlers","effect-handlers",1338585436));
var batched_updates = cljs.core.get.call(null,map__16391__$1,new cljs.core.Keyword(null,"batched-updates","batched-updates",-1085206173));
var chunked_updates = cljs.core.get.call(null,map__16391__$1,new cljs.core.Keyword(null,"chunked-updates","chunked-updates",2108880072));
var map__16392 = p__16390;
var map__16392__$1 = ((((!((map__16392 == null)))?((((map__16392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16392.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16392):map__16392);
var options = map__16392__$1;
return (new citrus.reconciler.Reconciler(controllers,effect_handlers,state,cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.volatile_BANG_.call(null,null),(function (){var or__8388__auto__ = batched_updates;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return requestAnimationFrame;
}
})(),chunked_updates,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
});

citrus.core.reconciler.cljs$lang$maxFixedArity = (1);

citrus.core.reconciler.cljs$lang$applyTo = (function (seq16387){
var G__16388 = cljs.core.first.call(null,seq16387);
var seq16387__$1 = cljs.core.next.call(null,seq16387);
return citrus.core.reconciler.cljs$core$IFn$_invoke$arity$variadic(G__16388,seq16387__$1);
});

/**
 * Invoke an event on particular controller asynchronously
 * 
 *  (citrus/dispatch! reconciler :users :load "id")
 * 
 *   Arguments
 * 
 *  reconciler - an instance of Reconciler
 *  controller - name of a controller
 *  event      - a dispatch value of a method defined in the controller
 *  args       - arguments to be passed into the controller
 */
citrus.core.dispatch_BANG_ = (function citrus$core$dispatch_BANG_(var_args){
var args__9674__auto__ = [];
var len__9667__auto___16402 = arguments.length;
var i__9668__auto___16403 = (0);
while(true){
if((i__9668__auto___16403 < len__9667__auto___16402)){
args__9674__auto__.push((arguments[i__9668__auto___16403]));

var G__16404 = (i__9668__auto___16403 + (1));
i__9668__auto___16403 = G__16404;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((3) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((3)),(0),null)):null);
return citrus.core.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9675__auto__);
});

citrus.core.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (reconciler,controller,event,args){
return citrus.reconciler.dispatch_BANG_.call(null,reconciler,controller,event,args);
});

citrus.core.dispatch_BANG_.cljs$lang$maxFixedArity = (3);

citrus.core.dispatch_BANG_.cljs$lang$applyTo = (function (seq16398){
var G__16399 = cljs.core.first.call(null,seq16398);
var seq16398__$1 = cljs.core.next.call(null,seq16398);
var G__16400 = cljs.core.first.call(null,seq16398__$1);
var seq16398__$2 = cljs.core.next.call(null,seq16398__$1);
var G__16401 = cljs.core.first.call(null,seq16398__$2);
var seq16398__$3 = cljs.core.next.call(null,seq16398__$2);
return citrus.core.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16399,G__16400,G__16401,seq16398__$3);
});

/**
 * Invoke an event on particular controller synchronously
 * 
 *  (citrus/dispatch! reconciler :users :load "id")
 * 
 *   Arguments
 * 
 *  reconciler - an instance of Reconciler
 *  controller - name of a controller
 *  event      - a dispatch value of a method defined in the controller
 *  args       - arguments to be passed into the controller
 */
citrus.core.dispatch_sync_BANG_ = (function citrus$core$dispatch_sync_BANG_(var_args){
var args__9674__auto__ = [];
var len__9667__auto___16409 = arguments.length;
var i__9668__auto___16410 = (0);
while(true){
if((i__9668__auto___16410 < len__9667__auto___16409)){
args__9674__auto__.push((arguments[i__9668__auto___16410]));

var G__16411 = (i__9668__auto___16410 + (1));
i__9668__auto___16410 = G__16411;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((3) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((3)),(0),null)):null);
return citrus.core.dispatch_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9675__auto__);
});

citrus.core.dispatch_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (reconciler,controller,event,args){
return citrus.reconciler.dispatch_sync_BANG_.call(null,reconciler,controller,event,args);
});

citrus.core.dispatch_sync_BANG_.cljs$lang$maxFixedArity = (3);

citrus.core.dispatch_sync_BANG_.cljs$lang$applyTo = (function (seq16405){
var G__16406 = cljs.core.first.call(null,seq16405);
var seq16405__$1 = cljs.core.next.call(null,seq16405);
var G__16407 = cljs.core.first.call(null,seq16405__$1);
var seq16405__$2 = cljs.core.next.call(null,seq16405__$1);
var G__16408 = cljs.core.first.call(null,seq16405__$2);
var seq16405__$3 = cljs.core.next.call(null,seq16405__$2);
return citrus.core.dispatch_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16406,G__16407,G__16408,seq16405__$3);
});

/**
 * Invoke an event on all controllers asynchronously
 * 
 *  (citrus/broadcast! reconciler :init)
 * 
 *   Arguments
 * 
 *  reconciler - an instance of Reconciler
 *  event      - a dispatch value of a method defined in the controller
 *  args       - arguments to be passed into the controller
 */
citrus.core.broadcast_BANG_ = (function citrus$core$broadcast_BANG_(var_args){
var args__9674__auto__ = [];
var len__9667__auto___16415 = arguments.length;
var i__9668__auto___16416 = (0);
while(true){
if((i__9668__auto___16416 < len__9667__auto___16415)){
args__9674__auto__.push((arguments[i__9668__auto___16416]));

var G__16417 = (i__9668__auto___16416 + (1));
i__9668__auto___16416 = G__16417;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((2) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((2)),(0),null)):null);
return citrus.core.broadcast_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9675__auto__);
});

citrus.core.broadcast_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (reconciler,event,args){
return citrus.reconciler.broadcast_BANG_.call(null,reconciler,event,args);
});

citrus.core.broadcast_BANG_.cljs$lang$maxFixedArity = (2);

citrus.core.broadcast_BANG_.cljs$lang$applyTo = (function (seq16412){
var G__16413 = cljs.core.first.call(null,seq16412);
var seq16412__$1 = cljs.core.next.call(null,seq16412);
var G__16414 = cljs.core.first.call(null,seq16412__$1);
var seq16412__$2 = cljs.core.next.call(null,seq16412__$1);
return citrus.core.broadcast_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16413,G__16414,seq16412__$2);
});

/**
 * Invoke an event on all controllers synchronously
 * 
 *  (citrus/broadcast! reconciler :init)
 * 
 *   Arguments
 * 
 *  reconciler - an instance of Reconciler
 *  event      - a dispatch value of a method defined in the controller
 *  args       - arguments to be passed into the controller
 */
citrus.core.broadcast_sync_BANG_ = (function citrus$core$broadcast_sync_BANG_(var_args){
var args__9674__auto__ = [];
var len__9667__auto___16421 = arguments.length;
var i__9668__auto___16422 = (0);
while(true){
if((i__9668__auto___16422 < len__9667__auto___16421)){
args__9674__auto__.push((arguments[i__9668__auto___16422]));

var G__16423 = (i__9668__auto___16422 + (1));
i__9668__auto___16422 = G__16423;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((2) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((2)),(0),null)):null);
return citrus.core.broadcast_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9675__auto__);
});

citrus.core.broadcast_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (reconciler,event,args){
return citrus.reconciler.broadcast_sync_BANG_.call(null,reconciler,event,args);
});

citrus.core.broadcast_sync_BANG_.cljs$lang$maxFixedArity = (2);

citrus.core.broadcast_sync_BANG_.cljs$lang$applyTo = (function (seq16418){
var G__16419 = cljs.core.first.call(null,seq16418);
var seq16418__$1 = cljs.core.next.call(null,seq16418);
var G__16420 = cljs.core.first.call(null,seq16418__$1);
var seq16418__$2 = cljs.core.next.call(null,seq16418__$1);
return citrus.core.broadcast_sync_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16419,G__16420,seq16418__$2);
});

/**
 * Create a subscription to state updates
 * 
 *  (citrus/subscription reconciler [:users 0] (juxt [:fname :lname]))
 * 
 *   Arguments
 * 
 *  reconciler - an instance of Reconciler
 *  path       - a vector which describes a path into reconciler's atom value
 *  reducer    - an aggregate function which computes a materialized view of data behind the path
 */
citrus.core.subscription = (function citrus$core$subscription(var_args){
var G__16425 = arguments.length;
switch (G__16425) {
case 2:
return citrus.core.subscription.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return citrus.core.subscription.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

citrus.core.subscription.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,path){
return citrus.core.subscription.call(null,reconciler,path,cljs.core.identity);
});

citrus.core.subscription.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,path,reducer){
return citrus.cursor.reduce_cursor_in.call(null,reconciler,path,reducer);
});

citrus.core.subscription.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map?rel=1511973567879
