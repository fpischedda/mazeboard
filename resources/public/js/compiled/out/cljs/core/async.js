// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async11853 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11853 = (function (f,meta11854){
this.f = f;
this.meta11854 = meta11854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11855,meta11854__$1){
var self__ = this;
var _11855__$1 = this;
return (new cljs.core.async.t_cljs$core$async11853(self__.f,meta11854__$1));
});

cljs.core.async.t_cljs$core$async11853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11855){
var self__ = this;
var _11855__$1 = this;
return self__.meta11854;
});

cljs.core.async.t_cljs$core$async11853.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11853.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async11853.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async11853.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta11854","meta11854",710666743,null)], null);
});

cljs.core.async.t_cljs$core$async11853.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11853.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11853";

cljs.core.async.t_cljs$core$async11853.cljs$lang$ctorPrWriter = (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write.call(null,writer__9060__auto__,"cljs.core.async/t_cljs$core$async11853");
});

cljs.core.async.__GT_t_cljs$core$async11853 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async11853(f__$1,meta11854){
return (new cljs.core.async.t_cljs$core$async11853(f__$1,meta11854));
});

}

return (new cljs.core.async.t_cljs$core$async11853(f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__11858 = arguments.length;
switch (G__11858) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__11861 = arguments.length;
switch (G__11861) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_11863 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11863);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_11863,ret){
return (function (){
return fn1.call(null,val_11863);
});})(val_11863,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__11865 = arguments.length;
switch (G__11865) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__9433__auto___11867 = n;
var x_11868 = (0);
while(true){
if((x_11868 < n__9433__auto___11867)){
(a[x_11868] = (0));

var G__11869 = (x_11868 + (1));
x_11868 = G__11869;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__11870 = (i + (1));
i = G__11870;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async11871 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11871 = (function (flag,meta11872){
this.flag = flag;
this.meta11872 = meta11872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11873,meta11872__$1){
var self__ = this;
var _11873__$1 = this;
return (new cljs.core.async.t_cljs$core$async11871(self__.flag,meta11872__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async11871.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11873){
var self__ = this;
var _11873__$1 = this;
return self__.meta11872;
});})(flag))
;

cljs.core.async.t_cljs$core$async11871.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11871.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async11871.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async11871.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11872","meta11872",564454386,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async11871.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11871";

cljs.core.async.t_cljs$core$async11871.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write.call(null,writer__9060__auto__,"cljs.core.async/t_cljs$core$async11871");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async11871 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11871(flag__$1,meta11872){
return (new cljs.core.async.t_cljs$core$async11871(flag__$1,meta11872));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async11871(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async11874 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11874 = (function (flag,cb,meta11875){
this.flag = flag;
this.cb = cb;
this.meta11875 = meta11875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11876,meta11875__$1){
var self__ = this;
var _11876__$1 = this;
return (new cljs.core.async.t_cljs$core$async11874(self__.flag,self__.cb,meta11875__$1));
});

cljs.core.async.t_cljs$core$async11874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11876){
var self__ = this;
var _11876__$1 = this;
return self__.meta11875;
});

cljs.core.async.t_cljs$core$async11874.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11874.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async11874.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async11874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11875","meta11875",1509474931,null)], null);
});

cljs.core.async.t_cljs$core$async11874.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11874";

cljs.core.async.t_cljs$core$async11874.cljs$lang$ctorPrWriter = (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write.call(null,writer__9060__auto__,"cljs.core.async/t_cljs$core$async11874");
});

cljs.core.async.__GT_t_cljs$core$async11874 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11874(flag__$1,cb__$1,meta11875){
return (new cljs.core.async.t_cljs$core$async11874(flag__$1,cb__$1,meta11875));
});

}

return (new cljs.core.async.t_cljs$core$async11874(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11877_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11877_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11878_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11878_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8388__auto__ = wport;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return port;
}
})()], null));
} else {
var G__11879 = (i + (1));
i = G__11879;
continue;
}
} else {
return null;
}
break;
}
})();
var or__8388__auto__ = ret;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__8376__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__8376__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__8376__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__9674__auto__ = [];
var len__9667__auto___11885 = arguments.length;
var i__9668__auto___11886 = (0);
while(true){
if((i__9668__auto___11886 < len__9667__auto___11885)){
args__9674__auto__.push((arguments[i__9668__auto___11886]));

var G__11887 = (i__9668__auto___11886 + (1));
i__9668__auto___11886 = G__11887;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((1) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9675__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11882){
var map__11883 = p__11882;
var map__11883__$1 = ((((!((map__11883 == null)))?((((map__11883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11883.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11883):map__11883);
var opts = map__11883__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11880){
var G__11881 = cljs.core.first.call(null,seq11880);
var seq11880__$1 = cljs.core.next.call(null,seq11880);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11881,seq11880__$1);
});

/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__11889 = arguments.length;
switch (G__11889) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__11794__auto___11935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11794__auto___11935){
return (function (){
var f__11795__auto__ = (function (){var switch__11704__auto__ = ((function (c__11794__auto___11935){
return (function (state_11913){
var state_val_11914 = (state_11913[(1)]);
if((state_val_11914 === (7))){
var inst_11909 = (state_11913[(2)]);
var state_11913__$1 = state_11913;
var statearr_11915_11936 = state_11913__$1;
(statearr_11915_11936[(2)] = inst_11909);

(statearr_11915_11936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11914 === (1))){
var state_11913__$1 = state_11913;
var statearr_11916_11937 = state_11913__$1;
(statearr_11916_11937[(2)] = null);

(statearr_11916_11937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11914 === (4))){
var inst_11892 = (state_11913[(7)]);
var inst_11892__$1 = (state_11913[(2)]);
var inst_11893 = (inst_11892__$1 == null);
var state_11913__$1 = (function (){var statearr_11917 = state_11913;
(statearr_11917[(7)] = inst_11892__$1);

return statearr_11917;
})();
if(cljs.core.truth_(inst_11893)){
var statearr_11918_11938 = state_11913__$1;
(statearr_11918_11938[(1)] = (5));

} else {
var statearr_11919_11939 = state_11913__$1;
(statearr_11919_11939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11914 === (13))){
var state_11913__$1 = state_11913;
var statearr_11920_11940 = state_11913__$1;
(statearr_11920_11940[(2)] = null);

(statearr_11920_11940[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11914 === (6))){
var inst_11892 = (state_11913[(7)]);
var state_11913__$1 = state_11913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11913__$1,(11),to,inst_11892);
} else {
if((state_val_11914 === (3))){
var inst_11911 = (state_11913[(2)]);
var state_11913__$1 = state_11913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11913__$1,inst_11911);
} else {
if((state_val_11914 === (12))){
var state_11913__$1 = state_11913;
var statearr_11921_11941 = state_11913__$1;
(statearr_11921_11941[(2)] = null);

(statearr_11921_11941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11914 === (2))){
var state_11913__$1 = state_11913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11913__$1,(4),from);
} else {
if((state_val_11914 === (11))){
var inst_11902 = (state_11913[(2)]);
var state_11913__$1 = state_11913;
if(cljs.core.truth_(inst_11902)){
var statearr_11922_11942 = state_11913__$1;
(statearr_11922_11942[(1)] = (12));

} else {
var statearr_11923_11943 = state_11913__$1;
(statearr_11923_11943[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11914 === (9))){
var state_11913__$1 = state_11913;
var statearr_11924_11944 = state_11913__$1;
(statearr_11924_11944[(2)] = null);

(statearr_11924_11944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11914 === (5))){
var state_11913__$1 = state_11913;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11925_11945 = state_11913__$1;
(statearr_11925_11945[(1)] = (8));

} else {
var statearr_11926_11946 = state_11913__$1;
(statearr_11926_11946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11914 === (14))){
var inst_11907 = (state_11913[(2)]);
var state_11913__$1 = state_11913;
var statearr_11927_11947 = state_11913__$1;
(statearr_11927_11947[(2)] = inst_11907);

(statearr_11927_11947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11914 === (10))){
var inst_11899 = (state_11913[(2)]);
var state_11913__$1 = state_11913;
var statearr_11928_11948 = state_11913__$1;
(statearr_11928_11948[(2)] = inst_11899);

(statearr_11928_11948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11914 === (8))){
var inst_11896 = cljs.core.async.close_BANG_.call(null,to);
var state_11913__$1 = state_11913;
var statearr_11929_11949 = state_11913__$1;
(statearr_11929_11949[(2)] = inst_11896);

(statearr_11929_11949[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11794__auto___11935))
;
return ((function (switch__11704__auto__,c__11794__auto___11935){
return (function() {
var cljs$core$async$state_machine__11705__auto__ = null;
var cljs$core$async$state_machine__11705__auto____0 = (function (){
var statearr_11930 = [null,null,null,null,null,null,null,null];
(statearr_11930[(0)] = cljs$core$async$state_machine__11705__auto__);

(statearr_11930[(1)] = (1));

return statearr_11930;
});
var cljs$core$async$state_machine__11705__auto____1 = (function (state_11913){
while(true){
var ret_value__11706__auto__ = (function (){try{while(true){
var result__11707__auto__ = switch__11704__auto__.call(null,state_11913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11707__auto__;
}
break;
}
}catch (e11931){if((e11931 instanceof Object)){
var ex__11708__auto__ = e11931;
var statearr_11932_11950 = state_11913;
(statearr_11932_11950[(5)] = ex__11708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11951 = state_11913;
state_11913 = G__11951;
continue;
} else {
return ret_value__11706__auto__;
}
break;
}
});
cljs$core$async$state_machine__11705__auto__ = function(state_11913){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11705__auto____1.call(this,state_11913);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11705__auto____0;
cljs$core$async$state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11705__auto____1;
return cljs$core$async$state_machine__11705__auto__;
})()
;})(switch__11704__auto__,c__11794__auto___11935))
})();
var state__11796__auto__ = (function (){var statearr_11933 = f__11795__auto__.call(null);
(statearr_11933[(6)] = c__11794__auto___11935);

return statearr_11933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11796__auto__);
});})(c__11794__auto___11935))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__11952){
var vec__11953 = p__11952;
var v = cljs.core.nth.call(null,vec__11953,(0),null);
var p = cljs.core.nth.call(null,vec__11953,(1),null);
var job = vec__11953;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11794__auto___12124 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11794__auto___12124,res,vec__11953,v,p,job,jobs,results){
return (function (){
var f__11795__auto__ = (function (){var switch__11704__auto__ = ((function (c__11794__auto___12124,res,vec__11953,v,p,job,jobs,results){
return (function (state_11960){
var state_val_11961 = (state_11960[(1)]);
if((state_val_11961 === (1))){
var state_11960__$1 = state_11960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11960__$1,(2),res,v);
} else {
if((state_val_11961 === (2))){
var inst_11957 = (state_11960[(2)]);
var inst_11958 = cljs.core.async.close_BANG_.call(null,res);
var state_11960__$1 = (function (){var statearr_11962 = state_11960;
(statearr_11962[(7)] = inst_11957);

return statearr_11962;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11960__$1,inst_11958);
} else {
return null;
}
}
});})(c__11794__auto___12124,res,vec__11953,v,p,job,jobs,results))
;
return ((function (switch__11704__auto__,c__11794__auto___12124,res,vec__11953,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11705__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11705__auto____0 = (function (){
var statearr_11963 = [null,null,null,null,null,null,null,null];
(statearr_11963[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11705__auto__);

(statearr_11963[(1)] = (1));

return statearr_11963;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11705__auto____1 = (function (state_11960){
while(true){
var ret_value__11706__auto__ = (function (){try{while(true){
var result__11707__auto__ = switch__11704__auto__.call(null,state_11960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11707__auto__;
}
break;
}
}catch (e11964){if((e11964 instanceof Object)){
var ex__11708__auto__ = e11964;
var statearr_11965_12125 = state_11960;
(statearr_11965_12125[(5)] = ex__11708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12126 = state_11960;
state_11960 = G__12126;
continue;
} else {
return ret_value__11706__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11705__auto__ = function(state_11960){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11705__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11705__auto____1.call(this,state_11960);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11705__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11705__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11705__auto__;
})()
;})(switch__11704__auto__,c__11794__auto___12124,res,vec__11953,v,p,job,jobs,results))
})();
var state__11796__auto__ = (function (){var statearr_11966 = f__11795__auto__.call(null);
(statearr_11966[(6)] = c__11794__auto___12124);

return statearr_11966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11796__auto__);
});})(c__11794__auto___12124,res,vec__11953,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__11967){
var vec__11968 = p__11967;
var v = cljs.core.nth.call(null,vec__11968,(0),null);
var p = cljs.core.nth.call(null,vec__11968,(1),null);
var job = vec__11968;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__9433__auto___12127 = n;
var __12128 = (0);
while(true){
if((__12128 < n__9433__auto___12127)){
var G__11971_12129 = type;
var G__11971_12130__$1 = (((G__11971_12129 instanceof cljs.core.Keyword))?G__11971_12129.fqn:null);
switch (G__11971_12130__$1) {
case "compute":
var c__11794__auto___12132 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12128,c__11794__auto___12132,G__11971_12129,G__11971_12130__$1,n__9433__auto___12127,jobs,results,process,async){
return (function (){
var f__11795__auto__ = (function (){var switch__11704__auto__ = ((function (__12128,c__11794__auto___12132,G__11971_12129,G__11971_12130__$1,n__9433__auto___12127,jobs,results,process,async){
return (function (state_11984){
var state_val_11985 = (state_11984[(1)]);
if((state_val_11985 === (1))){
var state_11984__$1 = state_11984;
var statearr_11986_12133 = state_11984__$1;
(statearr_11986_12133[(2)] = null);

(statearr_11986_12133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11985 === (2))){
var state_11984__$1 = state_11984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11984__$1,(4),jobs);
} else {
if((state_val_11985 === (3))){
var inst_11982 = (state_11984[(2)]);
var state_11984__$1 = state_11984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11984__$1,inst_11982);
} else {
if((state_val_11985 === (4))){
var inst_11974 = (state_11984[(2)]);
var inst_11975 = process.call(null,inst_11974);
var state_11984__$1 = state_11984;
if(cljs.core.truth_(inst_11975)){
var statearr_11987_12134 = state_11984__$1;
(statearr_11987_12134[(1)] = (5));

} else {
var statearr_11988_12135 = state_11984__$1;
(statearr_11988_12135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11985 === (5))){
var state_11984__$1 = state_11984;
var statearr_11989_12136 = state_11984__$1;
(statearr_11989_12136[(2)] = null);

(statearr_11989_12136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11985 === (6))){
var state_11984__$1 = state_11984;
var statearr_11990_12137 = state_11984__$1;
(statearr_11990_12137[(2)] = null);

(statearr_11990_12137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11985 === (7))){
var inst_11980 = (state_11984[(2)]);
var state_11984__$1 = state_11984;
var statearr_11991_12138 = state_11984__$1;
(statearr_11991_12138[(2)] = inst_11980);

(statearr_11991_12138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__12128,c__11794__auto___12132,G__11971_12129,G__11971_12130__$1,n__9433__auto___12127,jobs,results,process,async))
;
return ((function (__12128,switch__11704__auto__,c__11794__auto___12132,G__11971_12129,G__11971_12130__$1,n__9433__auto___12127,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11705__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11705__auto____0 = (function (){
var statearr_11992 = [null,null,null,null,null,null,null];
(statearr_11992[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11705__auto__);

(statearr_11992[(1)] = (1));

return statearr_11992;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11705__auto____1 = (function (state_11984){
while(true){
var ret_value__11706__auto__ = (function (){try{while(true){
var result__11707__auto__ = switch__11704__auto__.call(null,state_11984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11707__auto__;
}
break;
}
}catch (e11993){if((e11993 instanceof Object)){
var ex__11708__auto__ = e11993;
var statearr_11994_12139 = state_11984;
(statearr_11994_12139[(5)] = ex__11708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12140 = state_11984;
state_11984 = G__12140;
continue;
} else {
return ret_value__11706__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11705__auto__ = function(state_11984){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11705__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11705__auto____1.call(this,state_11984);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11705__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11705__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11705__auto__;
})()
;})(__12128,switch__11704__auto__,c__11794__auto___12132,G__11971_12129,G__11971_12130__$1,n__9433__auto___12127,jobs,results,process,async))
})();
var state__11796__auto__ = (function (){var statearr_11995 = f__11795__auto__.call(null);
(statearr_11995[(6)] = c__11794__auto___12132);

return statearr_11995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11796__auto__);
});})(__12128,c__11794__auto___12132,G__11971_12129,G__11971_12130__$1,n__9433__auto___12127,jobs,results,process,async))
);


break;
case "async":
var c__11794__auto___12141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12128,c__11794__auto___12141,G__11971_12129,G__11971_12130__$1,n__9433__auto___12127,jobs,results,process,async){
return (function (){
var f__11795__auto__ = (function (){var switch__11704__auto__ = ((function (__12128,c__11794__auto___12141,G__11971_12129,G__11971_12130__$1,n__9433__auto___12127,jobs,results,process,async){
return (function (state_12008){
var state_val_12009 = (state_12008[(1)]);
if((state_val_12009 === (1))){
var state_12008__$1 = state_12008;
var statearr_12010_12142 = state_12008__$1;
(statearr_12010_12142[(2)] = null);

(statearr_12010_12142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12009 === (2))){
var state_12008__$1 = state_12008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12008__$1,(4),jobs);
} else {
if((state_val_12009 === (3))){
var inst_12006 = (state_12008[(2)]);
var state_12008__$1 = state_12008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12008__$1,inst_12006);
} else {
if((state_val_12009 === (4))){
var inst_11998 = (state_12008[(2)]);
var inst_11999 = async.call(null,inst_11998);
var state_12008__$1 = state_12008;
if(cljs.core.truth_(inst_11999)){
var statearr_12011_12143 = state_12008__$1;
(statearr_12011_12143[(1)] = (5));

} else {
var statearr_12012_12144 = state_12008__$1;
(statearr_12012_12144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12009 === (5))){
var state_12008__$1 = state_12008;
var statearr_12013_12145 = state_12008__$1;
(statearr_12013_12145[(2)] = null);

(statearr_12013_12145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12009 === (6))){
var state_12008__$1 = state_12008;
var statearr_12014_12146 = state_12008__$1;
(statearr_12014_12146[(2)] = null);

(statearr_12014_12146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12009 === (7))){
var inst_12004 = (state_12008[(2)]);
var state_12008__$1 = state_12008;
var statearr_12015_12147 = state_12008__$1;
(statearr_12015_12147[(2)] = inst_12004);

(statearr_12015_12147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__12128,c__11794__auto___12141,G__11971_12129,G__11971_12130__$1,n__9433__auto___12127,jobs,results,process,async))
;
return ((function (__12128,switch__11704__auto__,c__11794__auto___12141,G__11971_12129,G__11971_12130__$1,n__9433__auto___12127,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11705__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11705__auto____0 = (function (){
var statearr_12016 = [null,null,null,null,null,null,null];
(statearr_12016[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11705__auto__);

(statearr_12016[(1)] = (1));

return statearr_12016;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11705__auto____1 = (function (state_12008){
while(true){
var ret_value__11706__auto__ = (function (){try{while(true){
var result__11707__auto__ = switch__11704__auto__.call(null,state_12008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11707__auto__;
}
break;
}
}catch (e12017){if((e12017 instanceof Object)){
var ex__11708__auto__ = e12017;
var statearr_12018_12148 = state_12008;
(statearr_12018_12148[(5)] = ex__11708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12149 = state_12008;
state_12008 = G__12149;
continue;
} else {
return ret_value__11706__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11705__auto__ = function(state_12008){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11705__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11705__auto____1.call(this,state_12008);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11705__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11705__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11705__auto__;
})()
;})(__12128,switch__11704__auto__,c__11794__auto___12141,G__11971_12129,G__11971_12130__$1,n__9433__auto___12127,jobs,results,process,async))
})();
var state__11796__auto__ = (function (){var statearr_12019 = f__11795__auto__.call(null);
(statearr_12019[(6)] = c__11794__auto___12141);

return statearr_12019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11796__auto__);
});})(__12128,c__11794__auto___12141,G__11971_12129,G__11971_12130__$1,n__9433__auto___12127,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11971_12130__$1)].join('')));

}

var G__12150 = (__12128 + (1));
__12128 = G__12150;
continue;
} else {
}
break;
}

var c__11794__auto___12151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11794__auto___12151,jobs,results,process,async){
return (function (){
var f__11795__auto__ = (function (){var switch__11704__auto__ = ((function (c__11794__auto___12151,jobs,results,process,async){
return (function (state_12041){
var state_val_12042 = (state_12041[(1)]);
if((state_val_12042 === (1))){
var state_12041__$1 = state_12041;
var statearr_12043_12152 = state_12041__$1;
(statearr_12043_12152[(2)] = null);

(statearr_12043_12152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12042 === (2))){
var state_12041__$1 = state_12041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12041__$1,(4),from);
} else {
if((state_val_12042 === (3))){
var inst_12039 = (state_12041[(2)]);
var state_12041__$1 = state_12041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12041__$1,inst_12039);
} else {
if((state_val_12042 === (4))){
var inst_12022 = (state_12041[(7)]);
var inst_12022__$1 = (state_12041[(2)]);
var inst_12023 = (inst_12022__$1 == null);
var state_12041__$1 = (function (){var statearr_12044 = state_12041;
(statearr_12044[(7)] = inst_12022__$1);

return statearr_12044;
})();
if(cljs.core.truth_(inst_12023)){
var statearr_12045_12153 = state_12041__$1;
(statearr_12045_12153[(1)] = (5));

} else {
var statearr_12046_12154 = state_12041__$1;
(statearr_12046_12154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12042 === (5))){
var inst_12025 = cljs.core.async.close_BANG_.call(null,jobs);
var state_12041__$1 = state_12041;
var statearr_12047_12155 = state_12041__$1;
(statearr_12047_12155[(2)] = inst_12025);

(statearr_12047_12155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12042 === (6))){
var inst_12022 = (state_12041[(7)]);
var inst_12027 = (state_12041[(8)]);
var inst_12027__$1 = cljs.core.async.chan.call(null,(1));
var inst_12028 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12029 = [inst_12022,inst_12027__$1];
var inst_12030 = (new cljs.core.PersistentVector(null,2,(5),inst_12028,inst_12029,null));
var state_12041__$1 = (function (){var statearr_12048 = state_12041;
(statearr_12048[(8)] = inst_12027__$1);

return statearr_12048;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12041__$1,(8),jobs,inst_12030);
} else {
if((state_val_12042 === (7))){
var inst_12037 = (state_12041[(2)]);
var state_12041__$1 = state_12041;
var statearr_12049_12156 = state_12041__$1;
(statearr_12049_12156[(2)] = inst_12037);

(statearr_12049_12156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12042 === (8))){
var inst_12027 = (state_12041[(8)]);
var inst_12032 = (state_12041[(2)]);
var state_12041__$1 = (function (){var statearr_12050 = state_12041;
(statearr_12050[(9)] = inst_12032);

return statearr_12050;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12041__$1,(9),results,inst_12027);
} else {
if((state_val_12042 === (9))){
var inst_12034 = (state_12041[(2)]);
var state_12041__$1 = (function (){var statearr_12051 = state_12041;
(statearr_12051[(10)] = inst_12034);

return statearr_12051;
})();
var statearr_12052_12157 = state_12041__$1;
(statearr_12052_12157[(2)] = null);

(statearr_12052_12157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__11794__auto___12151,jobs,results,process,async))
;
return ((function (switch__11704__auto__,c__11794__auto___12151,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11705__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11705__auto____0 = (function (){
var statearr_12053 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12053[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11705__auto__);

(statearr_12053[(1)] = (1));

return statearr_12053;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11705__auto____1 = (function (state_12041){
while(true){
var ret_value__11706__auto__ = (function (){try{while(true){
var result__11707__auto__ = switch__11704__auto__.call(null,state_12041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11707__auto__;
}
break;
}
}catch (e12054){if((e12054 instanceof Object)){
var ex__11708__auto__ = e12054;
var statearr_12055_12158 = state_12041;
(statearr_12055_12158[(5)] = ex__11708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12159 = state_12041;
state_12041 = G__12159;
continue;
} else {
return ret_value__11706__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11705__auto__ = function(state_12041){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11705__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11705__auto____1.call(this,state_12041);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11705__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11705__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11705__auto__;
})()
;})(switch__11704__auto__,c__11794__auto___12151,jobs,results,process,async))
})();
var state__11796__auto__ = (function (){var statearr_12056 = f__11795__auto__.call(null);
(statearr_12056[(6)] = c__11794__auto___12151);

return statearr_12056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11796__auto__);
});})(c__11794__auto___12151,jobs,results,process,async))
);


var c__11794__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11794__auto__,jobs,results,process,async){
return (function (){
var f__11795__auto__ = (function (){var switch__11704__auto__ = ((function (c__11794__auto__,jobs,results,process,async){
return (function (state_12094){
var state_val_12095 = (state_12094[(1)]);
if((state_val_12095 === (7))){
var inst_12090 = (state_12094[(2)]);
var state_12094__$1 = state_12094;
var statearr_12096_12160 = state_12094__$1;
(statearr_12096_12160[(2)] = inst_12090);

(statearr_12096_12160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12095 === (20))){
var state_12094__$1 = state_12094;
var statearr_12097_12161 = state_12094__$1;
(statearr_12097_12161[(2)] = null);

(statearr_12097_12161[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12095 === (1))){
var state_12094__$1 = state_12094;
var statearr_12098_12162 = state_12094__$1;
(statearr_12098_12162[(2)] = null);

(statearr_12098_12162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12095 === (4))){
var inst_12059 = (state_12094[(7)]);
var inst_12059__$1 = (state_12094[(2)]);
var inst_12060 = (inst_12059__$1 == null);
var state_12094__$1 = (function (){var statearr_12099 = state_12094;
(statearr_12099[(7)] = inst_12059__$1);

return statearr_12099;
})();
if(cljs.core.truth_(inst_12060)){
var statearr_12100_12163 = state_12094__$1;
(statearr_12100_12163[(1)] = (5));

} else {
var statearr_12101_12164 = state_12094__$1;
(statearr_12101_12164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12095 === (15))){
var inst_12072 = (state_12094[(8)]);
var state_12094__$1 = state_12094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12094__$1,(18),to,inst_12072);
} else {
if((state_val_12095 === (21))){
var inst_12085 = (state_12094[(2)]);
var state_12094__$1 = state_12094;
var statearr_12102_12165 = state_12094__$1;
(statearr_12102_12165[(2)] = inst_12085);

(statearr_12102_12165[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12095 === (13))){
var inst_12087 = (state_12094[(2)]);
var state_12094__$1 = (function (){var statearr_12103 = state_12094;
(statearr_12103[(9)] = inst_12087);

return statearr_12103;
})();
var statearr_12104_12166 = state_12094__$1;
(statearr_12104_12166[(2)] = null);

(statearr_12104_12166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12095 === (6))){
var inst_12059 = (state_12094[(7)]);
var state_12094__$1 = state_12094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12094__$1,(11),inst_12059);
} else {
if((state_val_12095 === (17))){
var inst_12080 = (state_12094[(2)]);
var state_12094__$1 = state_12094;
if(cljs.core.truth_(inst_12080)){
var statearr_12105_12167 = state_12094__$1;
(statearr_12105_12167[(1)] = (19));

} else {
var statearr_12106_12168 = state_12094__$1;
(statearr_12106_12168[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12095 === (3))){
var inst_12092 = (state_12094[(2)]);
var state_12094__$1 = state_12094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12094__$1,inst_12092);
} else {
if((state_val_12095 === (12))){
var inst_12069 = (state_12094[(10)]);
var state_12094__$1 = state_12094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12094__$1,(14),inst_12069);
} else {
if((state_val_12095 === (2))){
var state_12094__$1 = state_12094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12094__$1,(4),results);
} else {
if((state_val_12095 === (19))){
var state_12094__$1 = state_12094;
var statearr_12107_12169 = state_12094__$1;
(statearr_12107_12169[(2)] = null);

(statearr_12107_12169[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12095 === (11))){
var inst_12069 = (state_12094[(2)]);
var state_12094__$1 = (function (){var statearr_12108 = state_12094;
(statearr_12108[(10)] = inst_12069);

return statearr_12108;
})();
var statearr_12109_12170 = state_12094__$1;
(statearr_12109_12170[(2)] = null);

(statearr_12109_12170[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12095 === (9))){
var state_12094__$1 = state_12094;
var statearr_12110_12171 = state_12094__$1;
(statearr_12110_12171[(2)] = null);

(statearr_12110_12171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12095 === (5))){
var state_12094__$1 = state_12094;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12111_12172 = state_12094__$1;
(statearr_12111_12172[(1)] = (8));

} else {
var statearr_12112_12173 = state_12094__$1;
(statearr_12112_12173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12095 === (14))){
var inst_12074 = (state_12094[(11)]);
var inst_12072 = (state_12094[(8)]);
var inst_12072__$1 = (state_12094[(2)]);
var inst_12073 = (inst_12072__$1 == null);
var inst_12074__$1 = cljs.core.not.call(null,inst_12073);
var state_12094__$1 = (function (){var statearr_12113 = state_12094;
(statearr_12113[(11)] = inst_12074__$1);

(statearr_12113[(8)] = inst_12072__$1);

return statearr_12113;
})();
if(inst_12074__$1){
var statearr_12114_12174 = state_12094__$1;
(statearr_12114_12174[(1)] = (15));

} else {
var statearr_12115_12175 = state_12094__$1;
(statearr_12115_12175[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12095 === (16))){
var inst_12074 = (state_12094[(11)]);
var state_12094__$1 = state_12094;
var statearr_12116_12176 = state_12094__$1;
(statearr_12116_12176[(2)] = inst_12074);

(statearr_12116_12176[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12095 === (10))){
var inst_12066 = (state_12094[(2)]);
var state_12094__$1 = state_12094;
var statearr_12117_12177 = state_12094__$1;
(statearr_12117_12177[(2)] = inst_12066);

(statearr_12117_12177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12095 === (18))){
var inst_12077 = (state_12094[(2)]);
var state_12094__$1 = state_12094;
var statearr_12118_12178 = state_12094__$1;
(statearr_12118_12178[(2)] = inst_12077);

(statearr_12118_12178[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12095 === (8))){
var inst_12063 = cljs.core.async.close_BANG_.call(null,to);
var state_12094__$1 = state_12094;
var statearr_12119_12179 = state_12094__$1;
(statearr_12119_12179[(2)] = inst_12063);

(statearr_12119_12179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11794__auto__,jobs,results,process,async))
;
return ((function (switch__11704__auto__,c__11794__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11705__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11705__auto____0 = (function (){
var statearr_12120 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12120[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11705__auto__);

(statearr_12120[(1)] = (1));

return statearr_12120;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11705__auto____1 = (function (state_12094){
while(true){
var ret_value__11706__auto__ = (function (){try{while(true){
var result__11707__auto__ = switch__11704__auto__.call(null,state_12094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11707__auto__;
}
break;
}
}catch (e12121){if((e12121 instanceof Object)){
var ex__11708__auto__ = e12121;
var statearr_12122_12180 = state_12094;
(statearr_12122_12180[(5)] = ex__11708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12181 = state_12094;
state_12094 = G__12181;
continue;
} else {
return ret_value__11706__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11705__auto__ = function(state_12094){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11705__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11705__auto____1.call(this,state_12094);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11705__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11705__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11705__auto__;
})()
;})(switch__11704__auto__,c__11794__auto__,jobs,results,process,async))
})();
var state__11796__auto__ = (function (){var statearr_12123 = f__11795__auto__.call(null);
(statearr_12123[(6)] = c__11794__auto__);

return statearr_12123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11796__auto__);
});})(c__11794__auto__,jobs,results,process,async))
);

return c__11794__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__12183 = arguments.length;
switch (G__12183) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__12186 = arguments.length;
switch (G__12186) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__12189 = arguments.length;
switch (G__12189) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__11794__auto___12238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11794__auto___12238,tc,fc){
return (function (){
var f__11795__auto__ = (function (){var switch__11704__auto__ = ((function (c__11794__auto___12238,tc,fc){
return (function (state_12215){
var state_val_12216 = (state_12215[(1)]);
if((state_val_12216 === (7))){
var inst_12211 = (state_12215[(2)]);
var state_12215__$1 = state_12215;
var statearr_12217_12239 = state_12215__$1;
(statearr_12217_12239[(2)] = inst_12211);

(statearr_12217_12239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12216 === (1))){
var state_12215__$1 = state_12215;
var statearr_12218_12240 = state_12215__$1;
(statearr_12218_12240[(2)] = null);

(statearr_12218_12240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12216 === (4))){
var inst_12192 = (state_12215[(7)]);
var inst_12192__$1 = (state_12215[(2)]);
var inst_12193 = (inst_12192__$1 == null);
var state_12215__$1 = (function (){var statearr_12219 = state_12215;
(statearr_12219[(7)] = inst_12192__$1);

return statearr_12219;
})();
if(cljs.core.truth_(inst_12193)){
var statearr_12220_12241 = state_12215__$1;
(statearr_12220_12241[(1)] = (5));

} else {
var statearr_12221_12242 = state_12215__$1;
(statearr_12221_12242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12216 === (13))){
var state_12215__$1 = state_12215;
var statearr_12222_12243 = state_12215__$1;
(statearr_12222_12243[(2)] = null);

(statearr_12222_12243[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12216 === (6))){
var inst_12192 = (state_12215[(7)]);
var inst_12198 = p.call(null,inst_12192);
var state_12215__$1 = state_12215;
if(cljs.core.truth_(inst_12198)){
var statearr_12223_12244 = state_12215__$1;
(statearr_12223_12244[(1)] = (9));

} else {
var statearr_12224_12245 = state_12215__$1;
(statearr_12224_12245[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12216 === (3))){
var inst_12213 = (state_12215[(2)]);
var state_12215__$1 = state_12215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12215__$1,inst_12213);
} else {
if((state_val_12216 === (12))){
var state_12215__$1 = state_12215;
var statearr_12225_12246 = state_12215__$1;
(statearr_12225_12246[(2)] = null);

(statearr_12225_12246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12216 === (2))){
var state_12215__$1 = state_12215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12215__$1,(4),ch);
} else {
if((state_val_12216 === (11))){
var inst_12192 = (state_12215[(7)]);
var inst_12202 = (state_12215[(2)]);
var state_12215__$1 = state_12215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12215__$1,(8),inst_12202,inst_12192);
} else {
if((state_val_12216 === (9))){
var state_12215__$1 = state_12215;
var statearr_12226_12247 = state_12215__$1;
(statearr_12226_12247[(2)] = tc);

(statearr_12226_12247[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12216 === (5))){
var inst_12195 = cljs.core.async.close_BANG_.call(null,tc);
var inst_12196 = cljs.core.async.close_BANG_.call(null,fc);
var state_12215__$1 = (function (){var statearr_12227 = state_12215;
(statearr_12227[(8)] = inst_12195);

return statearr_12227;
})();
var statearr_12228_12248 = state_12215__$1;
(statearr_12228_12248[(2)] = inst_12196);

(statearr_12228_12248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12216 === (14))){
var inst_12209 = (state_12215[(2)]);
var state_12215__$1 = state_12215;
var statearr_12229_12249 = state_12215__$1;
(statearr_12229_12249[(2)] = inst_12209);

(statearr_12229_12249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12216 === (10))){
var state_12215__$1 = state_12215;
var statearr_12230_12250 = state_12215__$1;
(statearr_12230_12250[(2)] = fc);

(statearr_12230_12250[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12216 === (8))){
var inst_12204 = (state_12215[(2)]);
var state_12215__$1 = state_12215;
if(cljs.core.truth_(inst_12204)){
var statearr_12231_12251 = state_12215__$1;
(statearr_12231_12251[(1)] = (12));

} else {
var statearr_12232_12252 = state_12215__$1;
(statearr_12232_12252[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11794__auto___12238,tc,fc))
;
return ((function (switch__11704__auto__,c__11794__auto___12238,tc,fc){
return (function() {
var cljs$core$async$state_machine__11705__auto__ = null;
var cljs$core$async$state_machine__11705__auto____0 = (function (){
var statearr_12233 = [null,null,null,null,null,null,null,null,null];
(statearr_12233[(0)] = cljs$core$async$state_machine__11705__auto__);

(statearr_12233[(1)] = (1));

return statearr_12233;
});
var cljs$core$async$state_machine__11705__auto____1 = (function (state_12215){
while(true){
var ret_value__11706__auto__ = (function (){try{while(true){
var result__11707__auto__ = switch__11704__auto__.call(null,state_12215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11707__auto__;
}
break;
}
}catch (e12234){if((e12234 instanceof Object)){
var ex__11708__auto__ = e12234;
var statearr_12235_12253 = state_12215;
(statearr_12235_12253[(5)] = ex__11708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12254 = state_12215;
state_12215 = G__12254;
continue;
} else {
return ret_value__11706__auto__;
}
break;
}
});
cljs$core$async$state_machine__11705__auto__ = function(state_12215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11705__auto____1.call(this,state_12215);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11705__auto____0;
cljs$core$async$state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11705__auto____1;
return cljs$core$async$state_machine__11705__auto__;
})()
;})(switch__11704__auto__,c__11794__auto___12238,tc,fc))
})();
var state__11796__auto__ = (function (){var statearr_12236 = f__11795__auto__.call(null);
(statearr_12236[(6)] = c__11794__auto___12238);

return statearr_12236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11796__auto__);
});})(c__11794__auto___12238,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__11794__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11794__auto__){
return (function (){
var f__11795__auto__ = (function (){var switch__11704__auto__ = ((function (c__11794__auto__){
return (function (state_12269){
var state_val_12270 = (state_12269[(1)]);
if((state_val_12270 === (1))){
var inst_12255 = init;
var state_12269__$1 = (function (){var statearr_12271 = state_12269;
(statearr_12271[(7)] = inst_12255);

return statearr_12271;
})();
var statearr_12272_12284 = state_12269__$1;
(statearr_12272_12284[(2)] = null);

(statearr_12272_12284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (2))){
var state_12269__$1 = state_12269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12269__$1,(4),ch);
} else {
if((state_val_12270 === (3))){
var inst_12267 = (state_12269[(2)]);
var state_12269__$1 = state_12269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12269__$1,inst_12267);
} else {
if((state_val_12270 === (4))){
var inst_12258 = (state_12269[(8)]);
var inst_12258__$1 = (state_12269[(2)]);
var inst_12259 = (inst_12258__$1 == null);
var state_12269__$1 = (function (){var statearr_12273 = state_12269;
(statearr_12273[(8)] = inst_12258__$1);

return statearr_12273;
})();
if(cljs.core.truth_(inst_12259)){
var statearr_12274_12285 = state_12269__$1;
(statearr_12274_12285[(1)] = (5));

} else {
var statearr_12275_12286 = state_12269__$1;
(statearr_12275_12286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (5))){
var inst_12255 = (state_12269[(7)]);
var state_12269__$1 = state_12269;
var statearr_12276_12287 = state_12269__$1;
(statearr_12276_12287[(2)] = inst_12255);

(statearr_12276_12287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (6))){
var inst_12255 = (state_12269[(7)]);
var inst_12258 = (state_12269[(8)]);
var inst_12262 = f.call(null,inst_12255,inst_12258);
var inst_12255__$1 = inst_12262;
var state_12269__$1 = (function (){var statearr_12277 = state_12269;
(statearr_12277[(7)] = inst_12255__$1);

return statearr_12277;
})();
var statearr_12278_12288 = state_12269__$1;
(statearr_12278_12288[(2)] = null);

(statearr_12278_12288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (7))){
var inst_12265 = (state_12269[(2)]);
var state_12269__$1 = state_12269;
var statearr_12279_12289 = state_12269__$1;
(statearr_12279_12289[(2)] = inst_12265);

(statearr_12279_12289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__11794__auto__))
;
return ((function (switch__11704__auto__,c__11794__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__11705__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11705__auto____0 = (function (){
var statearr_12280 = [null,null,null,null,null,null,null,null,null];
(statearr_12280[(0)] = cljs$core$async$reduce_$_state_machine__11705__auto__);

(statearr_12280[(1)] = (1));

return statearr_12280;
});
var cljs$core$async$reduce_$_state_machine__11705__auto____1 = (function (state_12269){
while(true){
var ret_value__11706__auto__ = (function (){try{while(true){
var result__11707__auto__ = switch__11704__auto__.call(null,state_12269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11707__auto__;
}
break;
}
}catch (e12281){if((e12281 instanceof Object)){
var ex__11708__auto__ = e12281;
var statearr_12282_12290 = state_12269;
(statearr_12282_12290[(5)] = ex__11708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12291 = state_12269;
state_12269 = G__12291;
continue;
} else {
return ret_value__11706__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11705__auto__ = function(state_12269){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11705__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11705__auto____1.call(this,state_12269);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11705__auto____0;
cljs$core$async$reduce_$_state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11705__auto____1;
return cljs$core$async$reduce_$_state_machine__11705__auto__;
})()
;})(switch__11704__auto__,c__11794__auto__))
})();
var state__11796__auto__ = (function (){var statearr_12283 = f__11795__auto__.call(null);
(statearr_12283[(6)] = c__11794__auto__);

return statearr_12283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11796__auto__);
});})(c__11794__auto__))
);

return c__11794__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__12293 = arguments.length;
switch (G__12293) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__11794__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11794__auto__){
return (function (){
var f__11795__auto__ = (function (){var switch__11704__auto__ = ((function (c__11794__auto__){
return (function (state_12318){
var state_val_12319 = (state_12318[(1)]);
if((state_val_12319 === (7))){
var inst_12300 = (state_12318[(2)]);
var state_12318__$1 = state_12318;
var statearr_12320_12341 = state_12318__$1;
(statearr_12320_12341[(2)] = inst_12300);

(statearr_12320_12341[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12319 === (1))){
var inst_12294 = cljs.core.seq.call(null,coll);
var inst_12295 = inst_12294;
var state_12318__$1 = (function (){var statearr_12321 = state_12318;
(statearr_12321[(7)] = inst_12295);

return statearr_12321;
})();
var statearr_12322_12342 = state_12318__$1;
(statearr_12322_12342[(2)] = null);

(statearr_12322_12342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12319 === (4))){
var inst_12295 = (state_12318[(7)]);
var inst_12298 = cljs.core.first.call(null,inst_12295);
var state_12318__$1 = state_12318;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12318__$1,(7),ch,inst_12298);
} else {
if((state_val_12319 === (13))){
var inst_12312 = (state_12318[(2)]);
var state_12318__$1 = state_12318;
var statearr_12323_12343 = state_12318__$1;
(statearr_12323_12343[(2)] = inst_12312);

(statearr_12323_12343[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12319 === (6))){
var inst_12303 = (state_12318[(2)]);
var state_12318__$1 = state_12318;
if(cljs.core.truth_(inst_12303)){
var statearr_12324_12344 = state_12318__$1;
(statearr_12324_12344[(1)] = (8));

} else {
var statearr_12325_12345 = state_12318__$1;
(statearr_12325_12345[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12319 === (3))){
var inst_12316 = (state_12318[(2)]);
var state_12318__$1 = state_12318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12318__$1,inst_12316);
} else {
if((state_val_12319 === (12))){
var state_12318__$1 = state_12318;
var statearr_12326_12346 = state_12318__$1;
(statearr_12326_12346[(2)] = null);

(statearr_12326_12346[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12319 === (2))){
var inst_12295 = (state_12318[(7)]);
var state_12318__$1 = state_12318;
if(cljs.core.truth_(inst_12295)){
var statearr_12327_12347 = state_12318__$1;
(statearr_12327_12347[(1)] = (4));

} else {
var statearr_12328_12348 = state_12318__$1;
(statearr_12328_12348[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12319 === (11))){
var inst_12309 = cljs.core.async.close_BANG_.call(null,ch);
var state_12318__$1 = state_12318;
var statearr_12329_12349 = state_12318__$1;
(statearr_12329_12349[(2)] = inst_12309);

(statearr_12329_12349[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12319 === (9))){
var state_12318__$1 = state_12318;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12330_12350 = state_12318__$1;
(statearr_12330_12350[(1)] = (11));

} else {
var statearr_12331_12351 = state_12318__$1;
(statearr_12331_12351[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12319 === (5))){
var inst_12295 = (state_12318[(7)]);
var state_12318__$1 = state_12318;
var statearr_12332_12352 = state_12318__$1;
(statearr_12332_12352[(2)] = inst_12295);

(statearr_12332_12352[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12319 === (10))){
var inst_12314 = (state_12318[(2)]);
var state_12318__$1 = state_12318;
var statearr_12333_12353 = state_12318__$1;
(statearr_12333_12353[(2)] = inst_12314);

(statearr_12333_12353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12319 === (8))){
var inst_12295 = (state_12318[(7)]);
var inst_12305 = cljs.core.next.call(null,inst_12295);
var inst_12295__$1 = inst_12305;
var state_12318__$1 = (function (){var statearr_12334 = state_12318;
(statearr_12334[(7)] = inst_12295__$1);

return statearr_12334;
})();
var statearr_12335_12354 = state_12318__$1;
(statearr_12335_12354[(2)] = null);

(statearr_12335_12354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11794__auto__))
;
return ((function (switch__11704__auto__,c__11794__auto__){
return (function() {
var cljs$core$async$state_machine__11705__auto__ = null;
var cljs$core$async$state_machine__11705__auto____0 = (function (){
var statearr_12336 = [null,null,null,null,null,null,null,null];
(statearr_12336[(0)] = cljs$core$async$state_machine__11705__auto__);

(statearr_12336[(1)] = (1));

return statearr_12336;
});
var cljs$core$async$state_machine__11705__auto____1 = (function (state_12318){
while(true){
var ret_value__11706__auto__ = (function (){try{while(true){
var result__11707__auto__ = switch__11704__auto__.call(null,state_12318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11707__auto__;
}
break;
}
}catch (e12337){if((e12337 instanceof Object)){
var ex__11708__auto__ = e12337;
var statearr_12338_12355 = state_12318;
(statearr_12338_12355[(5)] = ex__11708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12356 = state_12318;
state_12318 = G__12356;
continue;
} else {
return ret_value__11706__auto__;
}
break;
}
});
cljs$core$async$state_machine__11705__auto__ = function(state_12318){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11705__auto____1.call(this,state_12318);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11705__auto____0;
cljs$core$async$state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11705__auto____1;
return cljs$core$async$state_machine__11705__auto__;
})()
;})(switch__11704__auto__,c__11794__auto__))
})();
var state__11796__auto__ = (function (){var statearr_12339 = f__11795__auto__.call(null);
(statearr_12339[(6)] = c__11794__auto__);

return statearr_12339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11796__auto__);
});})(c__11794__auto__))
);

return c__11794__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__9121__auto__ = (((_ == null))?null:_);
var m__9122__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return m__9122__auto__.call(null,_);
} else {
var m__9122__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__9122__auto____$1 == null))){
return m__9122__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__9121__auto__ = (((m == null))?null:m);
var m__9122__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return m__9122__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__9122__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__9122__auto____$1 == null))){
return m__9122__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__9121__auto__ = (((m == null))?null:m);
var m__9122__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return m__9122__auto__.call(null,m,ch);
} else {
var m__9122__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__9122__auto____$1 == null))){
return m__9122__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__9121__auto__ = (((m == null))?null:m);
var m__9122__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return m__9122__auto__.call(null,m);
} else {
var m__9122__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__9122__auto____$1 == null))){
return m__9122__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async12357 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12357 = (function (ch,cs,meta12358){
this.ch = ch;
this.cs = cs;
this.meta12358 = meta12358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12359,meta12358__$1){
var self__ = this;
var _12359__$1 = this;
return (new cljs.core.async.t_cljs$core$async12357(self__.ch,self__.cs,meta12358__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async12357.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12359){
var self__ = this;
var _12359__$1 = this;
return self__.meta12358;
});})(cs))
;

cljs.core.async.t_cljs$core$async12357.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12357.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async12357.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12357.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12357.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12357.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12357.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12358","meta12358",-80545155,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async12357.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12357";

cljs.core.async.t_cljs$core$async12357.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write.call(null,writer__9060__auto__,"cljs.core.async/t_cljs$core$async12357");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async12357 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async12357(ch__$1,cs__$1,meta12358){
return (new cljs.core.async.t_cljs$core$async12357(ch__$1,cs__$1,meta12358));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async12357(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__11794__auto___12579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11794__auto___12579,cs,m,dchan,dctr,done){
return (function (){
var f__11795__auto__ = (function (){var switch__11704__auto__ = ((function (c__11794__auto___12579,cs,m,dchan,dctr,done){
return (function (state_12494){
var state_val_12495 = (state_12494[(1)]);
if((state_val_12495 === (7))){
var inst_12490 = (state_12494[(2)]);
var state_12494__$1 = state_12494;
var statearr_12496_12580 = state_12494__$1;
(statearr_12496_12580[(2)] = inst_12490);

(statearr_12496_12580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (20))){
var inst_12393 = (state_12494[(7)]);
var inst_12405 = cljs.core.first.call(null,inst_12393);
var inst_12406 = cljs.core.nth.call(null,inst_12405,(0),null);
var inst_12407 = cljs.core.nth.call(null,inst_12405,(1),null);
var state_12494__$1 = (function (){var statearr_12497 = state_12494;
(statearr_12497[(8)] = inst_12406);

return statearr_12497;
})();
if(cljs.core.truth_(inst_12407)){
var statearr_12498_12581 = state_12494__$1;
(statearr_12498_12581[(1)] = (22));

} else {
var statearr_12499_12582 = state_12494__$1;
(statearr_12499_12582[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (27))){
var inst_12362 = (state_12494[(9)]);
var inst_12442 = (state_12494[(10)]);
var inst_12437 = (state_12494[(11)]);
var inst_12435 = (state_12494[(12)]);
var inst_12442__$1 = cljs.core._nth.call(null,inst_12435,inst_12437);
var inst_12443 = cljs.core.async.put_BANG_.call(null,inst_12442__$1,inst_12362,done);
var state_12494__$1 = (function (){var statearr_12500 = state_12494;
(statearr_12500[(10)] = inst_12442__$1);

return statearr_12500;
})();
if(cljs.core.truth_(inst_12443)){
var statearr_12501_12583 = state_12494__$1;
(statearr_12501_12583[(1)] = (30));

} else {
var statearr_12502_12584 = state_12494__$1;
(statearr_12502_12584[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (1))){
var state_12494__$1 = state_12494;
var statearr_12503_12585 = state_12494__$1;
(statearr_12503_12585[(2)] = null);

(statearr_12503_12585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (24))){
var inst_12393 = (state_12494[(7)]);
var inst_12412 = (state_12494[(2)]);
var inst_12413 = cljs.core.next.call(null,inst_12393);
var inst_12371 = inst_12413;
var inst_12372 = null;
var inst_12373 = (0);
var inst_12374 = (0);
var state_12494__$1 = (function (){var statearr_12504 = state_12494;
(statearr_12504[(13)] = inst_12373);

(statearr_12504[(14)] = inst_12372);

(statearr_12504[(15)] = inst_12374);

(statearr_12504[(16)] = inst_12412);

(statearr_12504[(17)] = inst_12371);

return statearr_12504;
})();
var statearr_12505_12586 = state_12494__$1;
(statearr_12505_12586[(2)] = null);

(statearr_12505_12586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (39))){
var state_12494__$1 = state_12494;
var statearr_12509_12587 = state_12494__$1;
(statearr_12509_12587[(2)] = null);

(statearr_12509_12587[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (4))){
var inst_12362 = (state_12494[(9)]);
var inst_12362__$1 = (state_12494[(2)]);
var inst_12363 = (inst_12362__$1 == null);
var state_12494__$1 = (function (){var statearr_12510 = state_12494;
(statearr_12510[(9)] = inst_12362__$1);

return statearr_12510;
})();
if(cljs.core.truth_(inst_12363)){
var statearr_12511_12588 = state_12494__$1;
(statearr_12511_12588[(1)] = (5));

} else {
var statearr_12512_12589 = state_12494__$1;
(statearr_12512_12589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (15))){
var inst_12373 = (state_12494[(13)]);
var inst_12372 = (state_12494[(14)]);
var inst_12374 = (state_12494[(15)]);
var inst_12371 = (state_12494[(17)]);
var inst_12389 = (state_12494[(2)]);
var inst_12390 = (inst_12374 + (1));
var tmp12506 = inst_12373;
var tmp12507 = inst_12372;
var tmp12508 = inst_12371;
var inst_12371__$1 = tmp12508;
var inst_12372__$1 = tmp12507;
var inst_12373__$1 = tmp12506;
var inst_12374__$1 = inst_12390;
var state_12494__$1 = (function (){var statearr_12513 = state_12494;
(statearr_12513[(13)] = inst_12373__$1);

(statearr_12513[(14)] = inst_12372__$1);

(statearr_12513[(15)] = inst_12374__$1);

(statearr_12513[(18)] = inst_12389);

(statearr_12513[(17)] = inst_12371__$1);

return statearr_12513;
})();
var statearr_12514_12590 = state_12494__$1;
(statearr_12514_12590[(2)] = null);

(statearr_12514_12590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (21))){
var inst_12416 = (state_12494[(2)]);
var state_12494__$1 = state_12494;
var statearr_12518_12591 = state_12494__$1;
(statearr_12518_12591[(2)] = inst_12416);

(statearr_12518_12591[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (31))){
var inst_12442 = (state_12494[(10)]);
var inst_12446 = done.call(null,null);
var inst_12447 = cljs.core.async.untap_STAR_.call(null,m,inst_12442);
var state_12494__$1 = (function (){var statearr_12519 = state_12494;
(statearr_12519[(19)] = inst_12446);

return statearr_12519;
})();
var statearr_12520_12592 = state_12494__$1;
(statearr_12520_12592[(2)] = inst_12447);

(statearr_12520_12592[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (32))){
var inst_12436 = (state_12494[(20)]);
var inst_12434 = (state_12494[(21)]);
var inst_12437 = (state_12494[(11)]);
var inst_12435 = (state_12494[(12)]);
var inst_12449 = (state_12494[(2)]);
var inst_12450 = (inst_12437 + (1));
var tmp12515 = inst_12436;
var tmp12516 = inst_12434;
var tmp12517 = inst_12435;
var inst_12434__$1 = tmp12516;
var inst_12435__$1 = tmp12517;
var inst_12436__$1 = tmp12515;
var inst_12437__$1 = inst_12450;
var state_12494__$1 = (function (){var statearr_12521 = state_12494;
(statearr_12521[(20)] = inst_12436__$1);

(statearr_12521[(22)] = inst_12449);

(statearr_12521[(21)] = inst_12434__$1);

(statearr_12521[(11)] = inst_12437__$1);

(statearr_12521[(12)] = inst_12435__$1);

return statearr_12521;
})();
var statearr_12522_12593 = state_12494__$1;
(statearr_12522_12593[(2)] = null);

(statearr_12522_12593[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (40))){
var inst_12462 = (state_12494[(23)]);
var inst_12466 = done.call(null,null);
var inst_12467 = cljs.core.async.untap_STAR_.call(null,m,inst_12462);
var state_12494__$1 = (function (){var statearr_12523 = state_12494;
(statearr_12523[(24)] = inst_12466);

return statearr_12523;
})();
var statearr_12524_12594 = state_12494__$1;
(statearr_12524_12594[(2)] = inst_12467);

(statearr_12524_12594[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (33))){
var inst_12453 = (state_12494[(25)]);
var inst_12455 = cljs.core.chunked_seq_QMARK_.call(null,inst_12453);
var state_12494__$1 = state_12494;
if(inst_12455){
var statearr_12525_12595 = state_12494__$1;
(statearr_12525_12595[(1)] = (36));

} else {
var statearr_12526_12596 = state_12494__$1;
(statearr_12526_12596[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (13))){
var inst_12383 = (state_12494[(26)]);
var inst_12386 = cljs.core.async.close_BANG_.call(null,inst_12383);
var state_12494__$1 = state_12494;
var statearr_12527_12597 = state_12494__$1;
(statearr_12527_12597[(2)] = inst_12386);

(statearr_12527_12597[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (22))){
var inst_12406 = (state_12494[(8)]);
var inst_12409 = cljs.core.async.close_BANG_.call(null,inst_12406);
var state_12494__$1 = state_12494;
var statearr_12528_12598 = state_12494__$1;
(statearr_12528_12598[(2)] = inst_12409);

(statearr_12528_12598[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (36))){
var inst_12453 = (state_12494[(25)]);
var inst_12457 = cljs.core.chunk_first.call(null,inst_12453);
var inst_12458 = cljs.core.chunk_rest.call(null,inst_12453);
var inst_12459 = cljs.core.count.call(null,inst_12457);
var inst_12434 = inst_12458;
var inst_12435 = inst_12457;
var inst_12436 = inst_12459;
var inst_12437 = (0);
var state_12494__$1 = (function (){var statearr_12529 = state_12494;
(statearr_12529[(20)] = inst_12436);

(statearr_12529[(21)] = inst_12434);

(statearr_12529[(11)] = inst_12437);

(statearr_12529[(12)] = inst_12435);

return statearr_12529;
})();
var statearr_12530_12599 = state_12494__$1;
(statearr_12530_12599[(2)] = null);

(statearr_12530_12599[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (41))){
var inst_12453 = (state_12494[(25)]);
var inst_12469 = (state_12494[(2)]);
var inst_12470 = cljs.core.next.call(null,inst_12453);
var inst_12434 = inst_12470;
var inst_12435 = null;
var inst_12436 = (0);
var inst_12437 = (0);
var state_12494__$1 = (function (){var statearr_12531 = state_12494;
(statearr_12531[(20)] = inst_12436);

(statearr_12531[(21)] = inst_12434);

(statearr_12531[(11)] = inst_12437);

(statearr_12531[(27)] = inst_12469);

(statearr_12531[(12)] = inst_12435);

return statearr_12531;
})();
var statearr_12532_12600 = state_12494__$1;
(statearr_12532_12600[(2)] = null);

(statearr_12532_12600[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (43))){
var state_12494__$1 = state_12494;
var statearr_12533_12601 = state_12494__$1;
(statearr_12533_12601[(2)] = null);

(statearr_12533_12601[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (29))){
var inst_12478 = (state_12494[(2)]);
var state_12494__$1 = state_12494;
var statearr_12534_12602 = state_12494__$1;
(statearr_12534_12602[(2)] = inst_12478);

(statearr_12534_12602[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (44))){
var inst_12487 = (state_12494[(2)]);
var state_12494__$1 = (function (){var statearr_12535 = state_12494;
(statearr_12535[(28)] = inst_12487);

return statearr_12535;
})();
var statearr_12536_12603 = state_12494__$1;
(statearr_12536_12603[(2)] = null);

(statearr_12536_12603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (6))){
var inst_12426 = (state_12494[(29)]);
var inst_12425 = cljs.core.deref.call(null,cs);
var inst_12426__$1 = cljs.core.keys.call(null,inst_12425);
var inst_12427 = cljs.core.count.call(null,inst_12426__$1);
var inst_12428 = cljs.core.reset_BANG_.call(null,dctr,inst_12427);
var inst_12433 = cljs.core.seq.call(null,inst_12426__$1);
var inst_12434 = inst_12433;
var inst_12435 = null;
var inst_12436 = (0);
var inst_12437 = (0);
var state_12494__$1 = (function (){var statearr_12537 = state_12494;
(statearr_12537[(20)] = inst_12436);

(statearr_12537[(21)] = inst_12434);

(statearr_12537[(11)] = inst_12437);

(statearr_12537[(30)] = inst_12428);

(statearr_12537[(12)] = inst_12435);

(statearr_12537[(29)] = inst_12426__$1);

return statearr_12537;
})();
var statearr_12538_12604 = state_12494__$1;
(statearr_12538_12604[(2)] = null);

(statearr_12538_12604[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (28))){
var inst_12434 = (state_12494[(21)]);
var inst_12453 = (state_12494[(25)]);
var inst_12453__$1 = cljs.core.seq.call(null,inst_12434);
var state_12494__$1 = (function (){var statearr_12539 = state_12494;
(statearr_12539[(25)] = inst_12453__$1);

return statearr_12539;
})();
if(inst_12453__$1){
var statearr_12540_12605 = state_12494__$1;
(statearr_12540_12605[(1)] = (33));

} else {
var statearr_12541_12606 = state_12494__$1;
(statearr_12541_12606[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (25))){
var inst_12436 = (state_12494[(20)]);
var inst_12437 = (state_12494[(11)]);
var inst_12439 = (inst_12437 < inst_12436);
var inst_12440 = inst_12439;
var state_12494__$1 = state_12494;
if(cljs.core.truth_(inst_12440)){
var statearr_12542_12607 = state_12494__$1;
(statearr_12542_12607[(1)] = (27));

} else {
var statearr_12543_12608 = state_12494__$1;
(statearr_12543_12608[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (34))){
var state_12494__$1 = state_12494;
var statearr_12544_12609 = state_12494__$1;
(statearr_12544_12609[(2)] = null);

(statearr_12544_12609[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (17))){
var state_12494__$1 = state_12494;
var statearr_12545_12610 = state_12494__$1;
(statearr_12545_12610[(2)] = null);

(statearr_12545_12610[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (3))){
var inst_12492 = (state_12494[(2)]);
var state_12494__$1 = state_12494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12494__$1,inst_12492);
} else {
if((state_val_12495 === (12))){
var inst_12421 = (state_12494[(2)]);
var state_12494__$1 = state_12494;
var statearr_12546_12611 = state_12494__$1;
(statearr_12546_12611[(2)] = inst_12421);

(statearr_12546_12611[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (2))){
var state_12494__$1 = state_12494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12494__$1,(4),ch);
} else {
if((state_val_12495 === (23))){
var state_12494__$1 = state_12494;
var statearr_12547_12612 = state_12494__$1;
(statearr_12547_12612[(2)] = null);

(statearr_12547_12612[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (35))){
var inst_12476 = (state_12494[(2)]);
var state_12494__$1 = state_12494;
var statearr_12548_12613 = state_12494__$1;
(statearr_12548_12613[(2)] = inst_12476);

(statearr_12548_12613[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (19))){
var inst_12393 = (state_12494[(7)]);
var inst_12397 = cljs.core.chunk_first.call(null,inst_12393);
var inst_12398 = cljs.core.chunk_rest.call(null,inst_12393);
var inst_12399 = cljs.core.count.call(null,inst_12397);
var inst_12371 = inst_12398;
var inst_12372 = inst_12397;
var inst_12373 = inst_12399;
var inst_12374 = (0);
var state_12494__$1 = (function (){var statearr_12549 = state_12494;
(statearr_12549[(13)] = inst_12373);

(statearr_12549[(14)] = inst_12372);

(statearr_12549[(15)] = inst_12374);

(statearr_12549[(17)] = inst_12371);

return statearr_12549;
})();
var statearr_12550_12614 = state_12494__$1;
(statearr_12550_12614[(2)] = null);

(statearr_12550_12614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (11))){
var inst_12371 = (state_12494[(17)]);
var inst_12393 = (state_12494[(7)]);
var inst_12393__$1 = cljs.core.seq.call(null,inst_12371);
var state_12494__$1 = (function (){var statearr_12551 = state_12494;
(statearr_12551[(7)] = inst_12393__$1);

return statearr_12551;
})();
if(inst_12393__$1){
var statearr_12552_12615 = state_12494__$1;
(statearr_12552_12615[(1)] = (16));

} else {
var statearr_12553_12616 = state_12494__$1;
(statearr_12553_12616[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (9))){
var inst_12423 = (state_12494[(2)]);
var state_12494__$1 = state_12494;
var statearr_12554_12617 = state_12494__$1;
(statearr_12554_12617[(2)] = inst_12423);

(statearr_12554_12617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (5))){
var inst_12369 = cljs.core.deref.call(null,cs);
var inst_12370 = cljs.core.seq.call(null,inst_12369);
var inst_12371 = inst_12370;
var inst_12372 = null;
var inst_12373 = (0);
var inst_12374 = (0);
var state_12494__$1 = (function (){var statearr_12555 = state_12494;
(statearr_12555[(13)] = inst_12373);

(statearr_12555[(14)] = inst_12372);

(statearr_12555[(15)] = inst_12374);

(statearr_12555[(17)] = inst_12371);

return statearr_12555;
})();
var statearr_12556_12618 = state_12494__$1;
(statearr_12556_12618[(2)] = null);

(statearr_12556_12618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (14))){
var state_12494__$1 = state_12494;
var statearr_12557_12619 = state_12494__$1;
(statearr_12557_12619[(2)] = null);

(statearr_12557_12619[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (45))){
var inst_12484 = (state_12494[(2)]);
var state_12494__$1 = state_12494;
var statearr_12558_12620 = state_12494__$1;
(statearr_12558_12620[(2)] = inst_12484);

(statearr_12558_12620[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (26))){
var inst_12426 = (state_12494[(29)]);
var inst_12480 = (state_12494[(2)]);
var inst_12481 = cljs.core.seq.call(null,inst_12426);
var state_12494__$1 = (function (){var statearr_12559 = state_12494;
(statearr_12559[(31)] = inst_12480);

return statearr_12559;
})();
if(inst_12481){
var statearr_12560_12621 = state_12494__$1;
(statearr_12560_12621[(1)] = (42));

} else {
var statearr_12561_12622 = state_12494__$1;
(statearr_12561_12622[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (16))){
var inst_12393 = (state_12494[(7)]);
var inst_12395 = cljs.core.chunked_seq_QMARK_.call(null,inst_12393);
var state_12494__$1 = state_12494;
if(inst_12395){
var statearr_12562_12623 = state_12494__$1;
(statearr_12562_12623[(1)] = (19));

} else {
var statearr_12563_12624 = state_12494__$1;
(statearr_12563_12624[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (38))){
var inst_12473 = (state_12494[(2)]);
var state_12494__$1 = state_12494;
var statearr_12564_12625 = state_12494__$1;
(statearr_12564_12625[(2)] = inst_12473);

(statearr_12564_12625[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (30))){
var state_12494__$1 = state_12494;
var statearr_12565_12626 = state_12494__$1;
(statearr_12565_12626[(2)] = null);

(statearr_12565_12626[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (10))){
var inst_12372 = (state_12494[(14)]);
var inst_12374 = (state_12494[(15)]);
var inst_12382 = cljs.core._nth.call(null,inst_12372,inst_12374);
var inst_12383 = cljs.core.nth.call(null,inst_12382,(0),null);
var inst_12384 = cljs.core.nth.call(null,inst_12382,(1),null);
var state_12494__$1 = (function (){var statearr_12566 = state_12494;
(statearr_12566[(26)] = inst_12383);

return statearr_12566;
})();
if(cljs.core.truth_(inst_12384)){
var statearr_12567_12627 = state_12494__$1;
(statearr_12567_12627[(1)] = (13));

} else {
var statearr_12568_12628 = state_12494__$1;
(statearr_12568_12628[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (18))){
var inst_12419 = (state_12494[(2)]);
var state_12494__$1 = state_12494;
var statearr_12569_12629 = state_12494__$1;
(statearr_12569_12629[(2)] = inst_12419);

(statearr_12569_12629[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (42))){
var state_12494__$1 = state_12494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12494__$1,(45),dchan);
} else {
if((state_val_12495 === (37))){
var inst_12362 = (state_12494[(9)]);
var inst_12453 = (state_12494[(25)]);
var inst_12462 = (state_12494[(23)]);
var inst_12462__$1 = cljs.core.first.call(null,inst_12453);
var inst_12463 = cljs.core.async.put_BANG_.call(null,inst_12462__$1,inst_12362,done);
var state_12494__$1 = (function (){var statearr_12570 = state_12494;
(statearr_12570[(23)] = inst_12462__$1);

return statearr_12570;
})();
if(cljs.core.truth_(inst_12463)){
var statearr_12571_12630 = state_12494__$1;
(statearr_12571_12630[(1)] = (39));

} else {
var statearr_12572_12631 = state_12494__$1;
(statearr_12572_12631[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12495 === (8))){
var inst_12373 = (state_12494[(13)]);
var inst_12374 = (state_12494[(15)]);
var inst_12376 = (inst_12374 < inst_12373);
var inst_12377 = inst_12376;
var state_12494__$1 = state_12494;
if(cljs.core.truth_(inst_12377)){
var statearr_12573_12632 = state_12494__$1;
(statearr_12573_12632[(1)] = (10));

} else {
var statearr_12574_12633 = state_12494__$1;
(statearr_12574_12633[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11794__auto___12579,cs,m,dchan,dctr,done))
;
return ((function (switch__11704__auto__,c__11794__auto___12579,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__11705__auto__ = null;
var cljs$core$async$mult_$_state_machine__11705__auto____0 = (function (){
var statearr_12575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12575[(0)] = cljs$core$async$mult_$_state_machine__11705__auto__);

(statearr_12575[(1)] = (1));

return statearr_12575;
});
var cljs$core$async$mult_$_state_machine__11705__auto____1 = (function (state_12494){
while(true){
var ret_value__11706__auto__ = (function (){try{while(true){
var result__11707__auto__ = switch__11704__auto__.call(null,state_12494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11707__auto__;
}
break;
}
}catch (e12576){if((e12576 instanceof Object)){
var ex__11708__auto__ = e12576;
var statearr_12577_12634 = state_12494;
(statearr_12577_12634[(5)] = ex__11708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12635 = state_12494;
state_12494 = G__12635;
continue;
} else {
return ret_value__11706__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11705__auto__ = function(state_12494){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11705__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11705__auto____1.call(this,state_12494);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11705__auto____0;
cljs$core$async$mult_$_state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11705__auto____1;
return cljs$core$async$mult_$_state_machine__11705__auto__;
})()
;})(switch__11704__auto__,c__11794__auto___12579,cs,m,dchan,dctr,done))
})();
var state__11796__auto__ = (function (){var statearr_12578 = f__11795__auto__.call(null);
(statearr_12578[(6)] = c__11794__auto___12579);

return statearr_12578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11796__auto__);
});})(c__11794__auto___12579,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__12637 = arguments.length;
switch (G__12637) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__9121__auto__ = (((m == null))?null:m);
var m__9122__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return m__9122__auto__.call(null,m,ch);
} else {
var m__9122__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__9122__auto____$1 == null))){
return m__9122__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__9121__auto__ = (((m == null))?null:m);
var m__9122__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return m__9122__auto__.call(null,m,ch);
} else {
var m__9122__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__9122__auto____$1 == null))){
return m__9122__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__9121__auto__ = (((m == null))?null:m);
var m__9122__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return m__9122__auto__.call(null,m);
} else {
var m__9122__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__9122__auto____$1 == null))){
return m__9122__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__9121__auto__ = (((m == null))?null:m);
var m__9122__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return m__9122__auto__.call(null,m,state_map);
} else {
var m__9122__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__9122__auto____$1 == null))){
return m__9122__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__9121__auto__ = (((m == null))?null:m);
var m__9122__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return m__9122__auto__.call(null,m,mode);
} else {
var m__9122__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__9122__auto____$1 == null))){
return m__9122__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__9674__auto__ = [];
var len__9667__auto___12649 = arguments.length;
var i__9668__auto___12650 = (0);
while(true){
if((i__9668__auto___12650 < len__9667__auto___12649)){
args__9674__auto__.push((arguments[i__9668__auto___12650]));

var G__12651 = (i__9668__auto___12650 + (1));
i__9668__auto___12650 = G__12651;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((3) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9675__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12643){
var map__12644 = p__12643;
var map__12644__$1 = ((((!((map__12644 == null)))?((((map__12644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12644.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12644):map__12644);
var opts = map__12644__$1;
var statearr_12646_12652 = state;
(statearr_12646_12652[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__12644,map__12644__$1,opts){
return (function (val){
var statearr_12647_12653 = state;
(statearr_12647_12653[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12644,map__12644__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_12648_12654 = state;
(statearr_12648_12654[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12639){
var G__12640 = cljs.core.first.call(null,seq12639);
var seq12639__$1 = cljs.core.next.call(null,seq12639);
var G__12641 = cljs.core.first.call(null,seq12639__$1);
var seq12639__$2 = cljs.core.next.call(null,seq12639__$1);
var G__12642 = cljs.core.first.call(null,seq12639__$2);
var seq12639__$3 = cljs.core.next.call(null,seq12639__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12640,G__12641,G__12642,seq12639__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async12655 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12655 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta12656){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta12656 = meta12656;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12657,meta12656__$1){
var self__ = this;
var _12657__$1 = this;
return (new cljs.core.async.t_cljs$core$async12655(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta12656__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12655.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12657){
var self__ = this;
var _12657__$1 = this;
return self__.meta12656;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12655.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12655.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12655.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12655.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12655.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12655.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12655.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12655.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12655.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta12656","meta12656",1824727,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12655.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12655.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12655";

cljs.core.async.t_cljs$core$async12655.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write.call(null,writer__9060__auto__,"cljs.core.async/t_cljs$core$async12655");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async12655 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async12655(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta12656){
return (new cljs.core.async.t_cljs$core$async12655(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta12656));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async12655(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11794__auto___12819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11794__auto___12819,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11795__auto__ = (function (){var switch__11704__auto__ = ((function (c__11794__auto___12819,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12759){
var state_val_12760 = (state_12759[(1)]);
if((state_val_12760 === (7))){
var inst_12674 = (state_12759[(2)]);
var state_12759__$1 = state_12759;
var statearr_12761_12820 = state_12759__$1;
(statearr_12761_12820[(2)] = inst_12674);

(statearr_12761_12820[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (20))){
var inst_12686 = (state_12759[(7)]);
var state_12759__$1 = state_12759;
var statearr_12762_12821 = state_12759__$1;
(statearr_12762_12821[(2)] = inst_12686);

(statearr_12762_12821[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (27))){
var state_12759__$1 = state_12759;
var statearr_12763_12822 = state_12759__$1;
(statearr_12763_12822[(2)] = null);

(statearr_12763_12822[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (1))){
var inst_12661 = (state_12759[(8)]);
var inst_12661__$1 = calc_state.call(null);
var inst_12663 = (inst_12661__$1 == null);
var inst_12664 = cljs.core.not.call(null,inst_12663);
var state_12759__$1 = (function (){var statearr_12764 = state_12759;
(statearr_12764[(8)] = inst_12661__$1);

return statearr_12764;
})();
if(inst_12664){
var statearr_12765_12823 = state_12759__$1;
(statearr_12765_12823[(1)] = (2));

} else {
var statearr_12766_12824 = state_12759__$1;
(statearr_12766_12824[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (24))){
var inst_12710 = (state_12759[(9)]);
var inst_12719 = (state_12759[(10)]);
var inst_12733 = (state_12759[(11)]);
var inst_12733__$1 = inst_12710.call(null,inst_12719);
var state_12759__$1 = (function (){var statearr_12767 = state_12759;
(statearr_12767[(11)] = inst_12733__$1);

return statearr_12767;
})();
if(cljs.core.truth_(inst_12733__$1)){
var statearr_12768_12825 = state_12759__$1;
(statearr_12768_12825[(1)] = (29));

} else {
var statearr_12769_12826 = state_12759__$1;
(statearr_12769_12826[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (4))){
var inst_12677 = (state_12759[(2)]);
var state_12759__$1 = state_12759;
if(cljs.core.truth_(inst_12677)){
var statearr_12770_12827 = state_12759__$1;
(statearr_12770_12827[(1)] = (8));

} else {
var statearr_12771_12828 = state_12759__$1;
(statearr_12771_12828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (15))){
var inst_12704 = (state_12759[(2)]);
var state_12759__$1 = state_12759;
if(cljs.core.truth_(inst_12704)){
var statearr_12772_12829 = state_12759__$1;
(statearr_12772_12829[(1)] = (19));

} else {
var statearr_12773_12830 = state_12759__$1;
(statearr_12773_12830[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (21))){
var inst_12709 = (state_12759[(12)]);
var inst_12709__$1 = (state_12759[(2)]);
var inst_12710 = cljs.core.get.call(null,inst_12709__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12711 = cljs.core.get.call(null,inst_12709__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12712 = cljs.core.get.call(null,inst_12709__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12759__$1 = (function (){var statearr_12774 = state_12759;
(statearr_12774[(13)] = inst_12711);

(statearr_12774[(12)] = inst_12709__$1);

(statearr_12774[(9)] = inst_12710);

return statearr_12774;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12759__$1,(22),inst_12712);
} else {
if((state_val_12760 === (31))){
var inst_12741 = (state_12759[(2)]);
var state_12759__$1 = state_12759;
if(cljs.core.truth_(inst_12741)){
var statearr_12775_12831 = state_12759__$1;
(statearr_12775_12831[(1)] = (32));

} else {
var statearr_12776_12832 = state_12759__$1;
(statearr_12776_12832[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (32))){
var inst_12718 = (state_12759[(14)]);
var state_12759__$1 = state_12759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12759__$1,(35),out,inst_12718);
} else {
if((state_val_12760 === (33))){
var inst_12709 = (state_12759[(12)]);
var inst_12686 = inst_12709;
var state_12759__$1 = (function (){var statearr_12777 = state_12759;
(statearr_12777[(7)] = inst_12686);

return statearr_12777;
})();
var statearr_12778_12833 = state_12759__$1;
(statearr_12778_12833[(2)] = null);

(statearr_12778_12833[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (13))){
var inst_12686 = (state_12759[(7)]);
var inst_12693 = inst_12686.cljs$lang$protocol_mask$partition0$;
var inst_12694 = (inst_12693 & (64));
var inst_12695 = inst_12686.cljs$core$ISeq$;
var inst_12696 = (cljs.core.PROTOCOL_SENTINEL === inst_12695);
var inst_12697 = (inst_12694) || (inst_12696);
var state_12759__$1 = state_12759;
if(cljs.core.truth_(inst_12697)){
var statearr_12779_12834 = state_12759__$1;
(statearr_12779_12834[(1)] = (16));

} else {
var statearr_12780_12835 = state_12759__$1;
(statearr_12780_12835[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (22))){
var inst_12718 = (state_12759[(14)]);
var inst_12719 = (state_12759[(10)]);
var inst_12717 = (state_12759[(2)]);
var inst_12718__$1 = cljs.core.nth.call(null,inst_12717,(0),null);
var inst_12719__$1 = cljs.core.nth.call(null,inst_12717,(1),null);
var inst_12720 = (inst_12718__$1 == null);
var inst_12721 = cljs.core._EQ_.call(null,inst_12719__$1,change);
var inst_12722 = (inst_12720) || (inst_12721);
var state_12759__$1 = (function (){var statearr_12781 = state_12759;
(statearr_12781[(14)] = inst_12718__$1);

(statearr_12781[(10)] = inst_12719__$1);

return statearr_12781;
})();
if(cljs.core.truth_(inst_12722)){
var statearr_12782_12836 = state_12759__$1;
(statearr_12782_12836[(1)] = (23));

} else {
var statearr_12783_12837 = state_12759__$1;
(statearr_12783_12837[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (36))){
var inst_12709 = (state_12759[(12)]);
var inst_12686 = inst_12709;
var state_12759__$1 = (function (){var statearr_12784 = state_12759;
(statearr_12784[(7)] = inst_12686);

return statearr_12784;
})();
var statearr_12785_12838 = state_12759__$1;
(statearr_12785_12838[(2)] = null);

(statearr_12785_12838[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (29))){
var inst_12733 = (state_12759[(11)]);
var state_12759__$1 = state_12759;
var statearr_12786_12839 = state_12759__$1;
(statearr_12786_12839[(2)] = inst_12733);

(statearr_12786_12839[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (6))){
var state_12759__$1 = state_12759;
var statearr_12787_12840 = state_12759__$1;
(statearr_12787_12840[(2)] = false);

(statearr_12787_12840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (28))){
var inst_12729 = (state_12759[(2)]);
var inst_12730 = calc_state.call(null);
var inst_12686 = inst_12730;
var state_12759__$1 = (function (){var statearr_12788 = state_12759;
(statearr_12788[(15)] = inst_12729);

(statearr_12788[(7)] = inst_12686);

return statearr_12788;
})();
var statearr_12789_12841 = state_12759__$1;
(statearr_12789_12841[(2)] = null);

(statearr_12789_12841[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (25))){
var inst_12755 = (state_12759[(2)]);
var state_12759__$1 = state_12759;
var statearr_12790_12842 = state_12759__$1;
(statearr_12790_12842[(2)] = inst_12755);

(statearr_12790_12842[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (34))){
var inst_12753 = (state_12759[(2)]);
var state_12759__$1 = state_12759;
var statearr_12791_12843 = state_12759__$1;
(statearr_12791_12843[(2)] = inst_12753);

(statearr_12791_12843[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (17))){
var state_12759__$1 = state_12759;
var statearr_12792_12844 = state_12759__$1;
(statearr_12792_12844[(2)] = false);

(statearr_12792_12844[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (3))){
var state_12759__$1 = state_12759;
var statearr_12793_12845 = state_12759__$1;
(statearr_12793_12845[(2)] = false);

(statearr_12793_12845[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (12))){
var inst_12757 = (state_12759[(2)]);
var state_12759__$1 = state_12759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12759__$1,inst_12757);
} else {
if((state_val_12760 === (2))){
var inst_12661 = (state_12759[(8)]);
var inst_12666 = inst_12661.cljs$lang$protocol_mask$partition0$;
var inst_12667 = (inst_12666 & (64));
var inst_12668 = inst_12661.cljs$core$ISeq$;
var inst_12669 = (cljs.core.PROTOCOL_SENTINEL === inst_12668);
var inst_12670 = (inst_12667) || (inst_12669);
var state_12759__$1 = state_12759;
if(cljs.core.truth_(inst_12670)){
var statearr_12794_12846 = state_12759__$1;
(statearr_12794_12846[(1)] = (5));

} else {
var statearr_12795_12847 = state_12759__$1;
(statearr_12795_12847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (23))){
var inst_12718 = (state_12759[(14)]);
var inst_12724 = (inst_12718 == null);
var state_12759__$1 = state_12759;
if(cljs.core.truth_(inst_12724)){
var statearr_12796_12848 = state_12759__$1;
(statearr_12796_12848[(1)] = (26));

} else {
var statearr_12797_12849 = state_12759__$1;
(statearr_12797_12849[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (35))){
var inst_12744 = (state_12759[(2)]);
var state_12759__$1 = state_12759;
if(cljs.core.truth_(inst_12744)){
var statearr_12798_12850 = state_12759__$1;
(statearr_12798_12850[(1)] = (36));

} else {
var statearr_12799_12851 = state_12759__$1;
(statearr_12799_12851[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (19))){
var inst_12686 = (state_12759[(7)]);
var inst_12706 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12686);
var state_12759__$1 = state_12759;
var statearr_12800_12852 = state_12759__$1;
(statearr_12800_12852[(2)] = inst_12706);

(statearr_12800_12852[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (11))){
var inst_12686 = (state_12759[(7)]);
var inst_12690 = (inst_12686 == null);
var inst_12691 = cljs.core.not.call(null,inst_12690);
var state_12759__$1 = state_12759;
if(inst_12691){
var statearr_12801_12853 = state_12759__$1;
(statearr_12801_12853[(1)] = (13));

} else {
var statearr_12802_12854 = state_12759__$1;
(statearr_12802_12854[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (9))){
var inst_12661 = (state_12759[(8)]);
var state_12759__$1 = state_12759;
var statearr_12803_12855 = state_12759__$1;
(statearr_12803_12855[(2)] = inst_12661);

(statearr_12803_12855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (5))){
var state_12759__$1 = state_12759;
var statearr_12804_12856 = state_12759__$1;
(statearr_12804_12856[(2)] = true);

(statearr_12804_12856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (14))){
var state_12759__$1 = state_12759;
var statearr_12805_12857 = state_12759__$1;
(statearr_12805_12857[(2)] = false);

(statearr_12805_12857[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (26))){
var inst_12719 = (state_12759[(10)]);
var inst_12726 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12719);
var state_12759__$1 = state_12759;
var statearr_12806_12858 = state_12759__$1;
(statearr_12806_12858[(2)] = inst_12726);

(statearr_12806_12858[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (16))){
var state_12759__$1 = state_12759;
var statearr_12807_12859 = state_12759__$1;
(statearr_12807_12859[(2)] = true);

(statearr_12807_12859[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (38))){
var inst_12749 = (state_12759[(2)]);
var state_12759__$1 = state_12759;
var statearr_12808_12860 = state_12759__$1;
(statearr_12808_12860[(2)] = inst_12749);

(statearr_12808_12860[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (30))){
var inst_12711 = (state_12759[(13)]);
var inst_12710 = (state_12759[(9)]);
var inst_12719 = (state_12759[(10)]);
var inst_12736 = cljs.core.empty_QMARK_.call(null,inst_12710);
var inst_12737 = inst_12711.call(null,inst_12719);
var inst_12738 = cljs.core.not.call(null,inst_12737);
var inst_12739 = (inst_12736) && (inst_12738);
var state_12759__$1 = state_12759;
var statearr_12809_12861 = state_12759__$1;
(statearr_12809_12861[(2)] = inst_12739);

(statearr_12809_12861[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (10))){
var inst_12661 = (state_12759[(8)]);
var inst_12682 = (state_12759[(2)]);
var inst_12683 = cljs.core.get.call(null,inst_12682,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12684 = cljs.core.get.call(null,inst_12682,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12685 = cljs.core.get.call(null,inst_12682,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12686 = inst_12661;
var state_12759__$1 = (function (){var statearr_12810 = state_12759;
(statearr_12810[(16)] = inst_12683);

(statearr_12810[(17)] = inst_12685);

(statearr_12810[(18)] = inst_12684);

(statearr_12810[(7)] = inst_12686);

return statearr_12810;
})();
var statearr_12811_12862 = state_12759__$1;
(statearr_12811_12862[(2)] = null);

(statearr_12811_12862[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (18))){
var inst_12701 = (state_12759[(2)]);
var state_12759__$1 = state_12759;
var statearr_12812_12863 = state_12759__$1;
(statearr_12812_12863[(2)] = inst_12701);

(statearr_12812_12863[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (37))){
var state_12759__$1 = state_12759;
var statearr_12813_12864 = state_12759__$1;
(statearr_12813_12864[(2)] = null);

(statearr_12813_12864[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (8))){
var inst_12661 = (state_12759[(8)]);
var inst_12679 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12661);
var state_12759__$1 = state_12759;
var statearr_12814_12865 = state_12759__$1;
(statearr_12814_12865[(2)] = inst_12679);

(statearr_12814_12865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11794__auto___12819,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11704__auto__,c__11794__auto___12819,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__11705__auto__ = null;
var cljs$core$async$mix_$_state_machine__11705__auto____0 = (function (){
var statearr_12815 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12815[(0)] = cljs$core$async$mix_$_state_machine__11705__auto__);

(statearr_12815[(1)] = (1));

return statearr_12815;
});
var cljs$core$async$mix_$_state_machine__11705__auto____1 = (function (state_12759){
while(true){
var ret_value__11706__auto__ = (function (){try{while(true){
var result__11707__auto__ = switch__11704__auto__.call(null,state_12759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11707__auto__;
}
break;
}
}catch (e12816){if((e12816 instanceof Object)){
var ex__11708__auto__ = e12816;
var statearr_12817_12866 = state_12759;
(statearr_12817_12866[(5)] = ex__11708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12867 = state_12759;
state_12759 = G__12867;
continue;
} else {
return ret_value__11706__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11705__auto__ = function(state_12759){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11705__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11705__auto____1.call(this,state_12759);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11705__auto____0;
cljs$core$async$mix_$_state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11705__auto____1;
return cljs$core$async$mix_$_state_machine__11705__auto__;
})()
;})(switch__11704__auto__,c__11794__auto___12819,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11796__auto__ = (function (){var statearr_12818 = f__11795__auto__.call(null);
(statearr_12818[(6)] = c__11794__auto___12819);

return statearr_12818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11796__auto__);
});})(c__11794__auto___12819,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__9121__auto__ = (((p == null))?null:p);
var m__9122__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return m__9122__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__9122__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__9122__auto____$1 == null))){
return m__9122__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__9121__auto__ = (((p == null))?null:p);
var m__9122__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return m__9122__auto__.call(null,p,v,ch);
} else {
var m__9122__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__9122__auto____$1 == null))){
return m__9122__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__12869 = arguments.length;
switch (G__12869) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__9121__auto__ = (((p == null))?null:p);
var m__9122__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return m__9122__auto__.call(null,p);
} else {
var m__9122__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9122__auto____$1 == null))){
return m__9122__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__9121__auto__ = (((p == null))?null:p);
var m__9122__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return m__9122__auto__.call(null,p,v);
} else {
var m__9122__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9122__auto____$1 == null))){
return m__9122__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__12873 = arguments.length;
switch (G__12873) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__8388__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8388__auto__,mults){
return (function (p1__12871_SHARP_){
if(cljs.core.truth_(p1__12871_SHARP_.call(null,topic))){
return p1__12871_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12871_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8388__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async12874 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12874 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12875){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12875 = meta12875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12876,meta12875__$1){
var self__ = this;
var _12876__$1 = this;
return (new cljs.core.async.t_cljs$core$async12874(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12875__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12874.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12876){
var self__ = this;
var _12876__$1 = this;
return self__.meta12875;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12874.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12874.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12874.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12874.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12874.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12874.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12874.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12874.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12875","meta12875",-1143819040,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12874.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12874";

cljs.core.async.t_cljs$core$async12874.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write.call(null,writer__9060__auto__,"cljs.core.async/t_cljs$core$async12874");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async12874 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async12874(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12875){
return (new cljs.core.async.t_cljs$core$async12874(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12875));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async12874(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11794__auto___12994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11794__auto___12994,mults,ensure_mult,p){
return (function (){
var f__11795__auto__ = (function (){var switch__11704__auto__ = ((function (c__11794__auto___12994,mults,ensure_mult,p){
return (function (state_12948){
var state_val_12949 = (state_12948[(1)]);
if((state_val_12949 === (7))){
var inst_12944 = (state_12948[(2)]);
var state_12948__$1 = state_12948;
var statearr_12950_12995 = state_12948__$1;
(statearr_12950_12995[(2)] = inst_12944);

(statearr_12950_12995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (20))){
var state_12948__$1 = state_12948;
var statearr_12951_12996 = state_12948__$1;
(statearr_12951_12996[(2)] = null);

(statearr_12951_12996[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (1))){
var state_12948__$1 = state_12948;
var statearr_12952_12997 = state_12948__$1;
(statearr_12952_12997[(2)] = null);

(statearr_12952_12997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (24))){
var inst_12927 = (state_12948[(7)]);
var inst_12936 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12927);
var state_12948__$1 = state_12948;
var statearr_12953_12998 = state_12948__$1;
(statearr_12953_12998[(2)] = inst_12936);

(statearr_12953_12998[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (4))){
var inst_12879 = (state_12948[(8)]);
var inst_12879__$1 = (state_12948[(2)]);
var inst_12880 = (inst_12879__$1 == null);
var state_12948__$1 = (function (){var statearr_12954 = state_12948;
(statearr_12954[(8)] = inst_12879__$1);

return statearr_12954;
})();
if(cljs.core.truth_(inst_12880)){
var statearr_12955_12999 = state_12948__$1;
(statearr_12955_12999[(1)] = (5));

} else {
var statearr_12956_13000 = state_12948__$1;
(statearr_12956_13000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (15))){
var inst_12921 = (state_12948[(2)]);
var state_12948__$1 = state_12948;
var statearr_12957_13001 = state_12948__$1;
(statearr_12957_13001[(2)] = inst_12921);

(statearr_12957_13001[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (21))){
var inst_12941 = (state_12948[(2)]);
var state_12948__$1 = (function (){var statearr_12958 = state_12948;
(statearr_12958[(9)] = inst_12941);

return statearr_12958;
})();
var statearr_12959_13002 = state_12948__$1;
(statearr_12959_13002[(2)] = null);

(statearr_12959_13002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (13))){
var inst_12903 = (state_12948[(10)]);
var inst_12905 = cljs.core.chunked_seq_QMARK_.call(null,inst_12903);
var state_12948__$1 = state_12948;
if(inst_12905){
var statearr_12960_13003 = state_12948__$1;
(statearr_12960_13003[(1)] = (16));

} else {
var statearr_12961_13004 = state_12948__$1;
(statearr_12961_13004[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (22))){
var inst_12933 = (state_12948[(2)]);
var state_12948__$1 = state_12948;
if(cljs.core.truth_(inst_12933)){
var statearr_12962_13005 = state_12948__$1;
(statearr_12962_13005[(1)] = (23));

} else {
var statearr_12963_13006 = state_12948__$1;
(statearr_12963_13006[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (6))){
var inst_12929 = (state_12948[(11)]);
var inst_12879 = (state_12948[(8)]);
var inst_12927 = (state_12948[(7)]);
var inst_12927__$1 = topic_fn.call(null,inst_12879);
var inst_12928 = cljs.core.deref.call(null,mults);
var inst_12929__$1 = cljs.core.get.call(null,inst_12928,inst_12927__$1);
var state_12948__$1 = (function (){var statearr_12964 = state_12948;
(statearr_12964[(11)] = inst_12929__$1);

(statearr_12964[(7)] = inst_12927__$1);

return statearr_12964;
})();
if(cljs.core.truth_(inst_12929__$1)){
var statearr_12965_13007 = state_12948__$1;
(statearr_12965_13007[(1)] = (19));

} else {
var statearr_12966_13008 = state_12948__$1;
(statearr_12966_13008[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (25))){
var inst_12938 = (state_12948[(2)]);
var state_12948__$1 = state_12948;
var statearr_12967_13009 = state_12948__$1;
(statearr_12967_13009[(2)] = inst_12938);

(statearr_12967_13009[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (17))){
var inst_12903 = (state_12948[(10)]);
var inst_12912 = cljs.core.first.call(null,inst_12903);
var inst_12913 = cljs.core.async.muxch_STAR_.call(null,inst_12912);
var inst_12914 = cljs.core.async.close_BANG_.call(null,inst_12913);
var inst_12915 = cljs.core.next.call(null,inst_12903);
var inst_12889 = inst_12915;
var inst_12890 = null;
var inst_12891 = (0);
var inst_12892 = (0);
var state_12948__$1 = (function (){var statearr_12968 = state_12948;
(statearr_12968[(12)] = inst_12891);

(statearr_12968[(13)] = inst_12892);

(statearr_12968[(14)] = inst_12914);

(statearr_12968[(15)] = inst_12889);

(statearr_12968[(16)] = inst_12890);

return statearr_12968;
})();
var statearr_12969_13010 = state_12948__$1;
(statearr_12969_13010[(2)] = null);

(statearr_12969_13010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (3))){
var inst_12946 = (state_12948[(2)]);
var state_12948__$1 = state_12948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12948__$1,inst_12946);
} else {
if((state_val_12949 === (12))){
var inst_12923 = (state_12948[(2)]);
var state_12948__$1 = state_12948;
var statearr_12970_13011 = state_12948__$1;
(statearr_12970_13011[(2)] = inst_12923);

(statearr_12970_13011[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (2))){
var state_12948__$1 = state_12948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12948__$1,(4),ch);
} else {
if((state_val_12949 === (23))){
var state_12948__$1 = state_12948;
var statearr_12971_13012 = state_12948__$1;
(statearr_12971_13012[(2)] = null);

(statearr_12971_13012[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (19))){
var inst_12929 = (state_12948[(11)]);
var inst_12879 = (state_12948[(8)]);
var inst_12931 = cljs.core.async.muxch_STAR_.call(null,inst_12929);
var state_12948__$1 = state_12948;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12948__$1,(22),inst_12931,inst_12879);
} else {
if((state_val_12949 === (11))){
var inst_12903 = (state_12948[(10)]);
var inst_12889 = (state_12948[(15)]);
var inst_12903__$1 = cljs.core.seq.call(null,inst_12889);
var state_12948__$1 = (function (){var statearr_12972 = state_12948;
(statearr_12972[(10)] = inst_12903__$1);

return statearr_12972;
})();
if(inst_12903__$1){
var statearr_12973_13013 = state_12948__$1;
(statearr_12973_13013[(1)] = (13));

} else {
var statearr_12974_13014 = state_12948__$1;
(statearr_12974_13014[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (9))){
var inst_12925 = (state_12948[(2)]);
var state_12948__$1 = state_12948;
var statearr_12975_13015 = state_12948__$1;
(statearr_12975_13015[(2)] = inst_12925);

(statearr_12975_13015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (5))){
var inst_12886 = cljs.core.deref.call(null,mults);
var inst_12887 = cljs.core.vals.call(null,inst_12886);
var inst_12888 = cljs.core.seq.call(null,inst_12887);
var inst_12889 = inst_12888;
var inst_12890 = null;
var inst_12891 = (0);
var inst_12892 = (0);
var state_12948__$1 = (function (){var statearr_12976 = state_12948;
(statearr_12976[(12)] = inst_12891);

(statearr_12976[(13)] = inst_12892);

(statearr_12976[(15)] = inst_12889);

(statearr_12976[(16)] = inst_12890);

return statearr_12976;
})();
var statearr_12977_13016 = state_12948__$1;
(statearr_12977_13016[(2)] = null);

(statearr_12977_13016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (14))){
var state_12948__$1 = state_12948;
var statearr_12981_13017 = state_12948__$1;
(statearr_12981_13017[(2)] = null);

(statearr_12981_13017[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (16))){
var inst_12903 = (state_12948[(10)]);
var inst_12907 = cljs.core.chunk_first.call(null,inst_12903);
var inst_12908 = cljs.core.chunk_rest.call(null,inst_12903);
var inst_12909 = cljs.core.count.call(null,inst_12907);
var inst_12889 = inst_12908;
var inst_12890 = inst_12907;
var inst_12891 = inst_12909;
var inst_12892 = (0);
var state_12948__$1 = (function (){var statearr_12982 = state_12948;
(statearr_12982[(12)] = inst_12891);

(statearr_12982[(13)] = inst_12892);

(statearr_12982[(15)] = inst_12889);

(statearr_12982[(16)] = inst_12890);

return statearr_12982;
})();
var statearr_12983_13018 = state_12948__$1;
(statearr_12983_13018[(2)] = null);

(statearr_12983_13018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (10))){
var inst_12891 = (state_12948[(12)]);
var inst_12892 = (state_12948[(13)]);
var inst_12889 = (state_12948[(15)]);
var inst_12890 = (state_12948[(16)]);
var inst_12897 = cljs.core._nth.call(null,inst_12890,inst_12892);
var inst_12898 = cljs.core.async.muxch_STAR_.call(null,inst_12897);
var inst_12899 = cljs.core.async.close_BANG_.call(null,inst_12898);
var inst_12900 = (inst_12892 + (1));
var tmp12978 = inst_12891;
var tmp12979 = inst_12889;
var tmp12980 = inst_12890;
var inst_12889__$1 = tmp12979;
var inst_12890__$1 = tmp12980;
var inst_12891__$1 = tmp12978;
var inst_12892__$1 = inst_12900;
var state_12948__$1 = (function (){var statearr_12984 = state_12948;
(statearr_12984[(12)] = inst_12891__$1);

(statearr_12984[(13)] = inst_12892__$1);

(statearr_12984[(17)] = inst_12899);

(statearr_12984[(15)] = inst_12889__$1);

(statearr_12984[(16)] = inst_12890__$1);

return statearr_12984;
})();
var statearr_12985_13019 = state_12948__$1;
(statearr_12985_13019[(2)] = null);

(statearr_12985_13019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (18))){
var inst_12918 = (state_12948[(2)]);
var state_12948__$1 = state_12948;
var statearr_12986_13020 = state_12948__$1;
(statearr_12986_13020[(2)] = inst_12918);

(statearr_12986_13020[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (8))){
var inst_12891 = (state_12948[(12)]);
var inst_12892 = (state_12948[(13)]);
var inst_12894 = (inst_12892 < inst_12891);
var inst_12895 = inst_12894;
var state_12948__$1 = state_12948;
if(cljs.core.truth_(inst_12895)){
var statearr_12987_13021 = state_12948__$1;
(statearr_12987_13021[(1)] = (10));

} else {
var statearr_12988_13022 = state_12948__$1;
(statearr_12988_13022[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11794__auto___12994,mults,ensure_mult,p))
;
return ((function (switch__11704__auto__,c__11794__auto___12994,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__11705__auto__ = null;
var cljs$core$async$state_machine__11705__auto____0 = (function (){
var statearr_12989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12989[(0)] = cljs$core$async$state_machine__11705__auto__);

(statearr_12989[(1)] = (1));

return statearr_12989;
});
var cljs$core$async$state_machine__11705__auto____1 = (function (state_12948){
while(true){
var ret_value__11706__auto__ = (function (){try{while(true){
var result__11707__auto__ = switch__11704__auto__.call(null,state_12948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11707__auto__;
}
break;
}
}catch (e12990){if((e12990 instanceof Object)){
var ex__11708__auto__ = e12990;
var statearr_12991_13023 = state_12948;
(statearr_12991_13023[(5)] = ex__11708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13024 = state_12948;
state_12948 = G__13024;
continue;
} else {
return ret_value__11706__auto__;
}
break;
}
});
cljs$core$async$state_machine__11705__auto__ = function(state_12948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11705__auto____1.call(this,state_12948);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11705__auto____0;
cljs$core$async$state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11705__auto____1;
return cljs$core$async$state_machine__11705__auto__;
})()
;})(switch__11704__auto__,c__11794__auto___12994,mults,ensure_mult,p))
})();
var state__11796__auto__ = (function (){var statearr_12992 = f__11795__auto__.call(null);
(statearr_12992[(6)] = c__11794__auto___12994);

return statearr_12992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11796__auto__);
});})(c__11794__auto___12994,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__13026 = arguments.length;
switch (G__13026) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__13029 = arguments.length;
switch (G__13029) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__13032 = arguments.length;
switch (G__13032) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__11794__auto___13099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11794__auto___13099,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11795__auto__ = (function (){var switch__11704__auto__ = ((function (c__11794__auto___13099,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13071){
var state_val_13072 = (state_13071[(1)]);
if((state_val_13072 === (7))){
var state_13071__$1 = state_13071;
var statearr_13073_13100 = state_13071__$1;
(statearr_13073_13100[(2)] = null);

(statearr_13073_13100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (1))){
var state_13071__$1 = state_13071;
var statearr_13074_13101 = state_13071__$1;
(statearr_13074_13101[(2)] = null);

(statearr_13074_13101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (4))){
var inst_13035 = (state_13071[(7)]);
var inst_13037 = (inst_13035 < cnt);
var state_13071__$1 = state_13071;
if(cljs.core.truth_(inst_13037)){
var statearr_13075_13102 = state_13071__$1;
(statearr_13075_13102[(1)] = (6));

} else {
var statearr_13076_13103 = state_13071__$1;
(statearr_13076_13103[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (15))){
var inst_13067 = (state_13071[(2)]);
var state_13071__$1 = state_13071;
var statearr_13077_13104 = state_13071__$1;
(statearr_13077_13104[(2)] = inst_13067);

(statearr_13077_13104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (13))){
var inst_13060 = cljs.core.async.close_BANG_.call(null,out);
var state_13071__$1 = state_13071;
var statearr_13078_13105 = state_13071__$1;
(statearr_13078_13105[(2)] = inst_13060);

(statearr_13078_13105[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (6))){
var state_13071__$1 = state_13071;
var statearr_13079_13106 = state_13071__$1;
(statearr_13079_13106[(2)] = null);

(statearr_13079_13106[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (3))){
var inst_13069 = (state_13071[(2)]);
var state_13071__$1 = state_13071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13071__$1,inst_13069);
} else {
if((state_val_13072 === (12))){
var inst_13057 = (state_13071[(8)]);
var inst_13057__$1 = (state_13071[(2)]);
var inst_13058 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13057__$1);
var state_13071__$1 = (function (){var statearr_13080 = state_13071;
(statearr_13080[(8)] = inst_13057__$1);

return statearr_13080;
})();
if(cljs.core.truth_(inst_13058)){
var statearr_13081_13107 = state_13071__$1;
(statearr_13081_13107[(1)] = (13));

} else {
var statearr_13082_13108 = state_13071__$1;
(statearr_13082_13108[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (2))){
var inst_13034 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13035 = (0);
var state_13071__$1 = (function (){var statearr_13083 = state_13071;
(statearr_13083[(7)] = inst_13035);

(statearr_13083[(9)] = inst_13034);

return statearr_13083;
})();
var statearr_13084_13109 = state_13071__$1;
(statearr_13084_13109[(2)] = null);

(statearr_13084_13109[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (11))){
var inst_13035 = (state_13071[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13071,(10),Object,null,(9));
var inst_13044 = chs__$1.call(null,inst_13035);
var inst_13045 = done.call(null,inst_13035);
var inst_13046 = cljs.core.async.take_BANG_.call(null,inst_13044,inst_13045);
var state_13071__$1 = state_13071;
var statearr_13085_13110 = state_13071__$1;
(statearr_13085_13110[(2)] = inst_13046);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13071__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (9))){
var inst_13035 = (state_13071[(7)]);
var inst_13048 = (state_13071[(2)]);
var inst_13049 = (inst_13035 + (1));
var inst_13035__$1 = inst_13049;
var state_13071__$1 = (function (){var statearr_13086 = state_13071;
(statearr_13086[(10)] = inst_13048);

(statearr_13086[(7)] = inst_13035__$1);

return statearr_13086;
})();
var statearr_13087_13111 = state_13071__$1;
(statearr_13087_13111[(2)] = null);

(statearr_13087_13111[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (5))){
var inst_13055 = (state_13071[(2)]);
var state_13071__$1 = (function (){var statearr_13088 = state_13071;
(statearr_13088[(11)] = inst_13055);

return statearr_13088;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13071__$1,(12),dchan);
} else {
if((state_val_13072 === (14))){
var inst_13057 = (state_13071[(8)]);
var inst_13062 = cljs.core.apply.call(null,f,inst_13057);
var state_13071__$1 = state_13071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13071__$1,(16),out,inst_13062);
} else {
if((state_val_13072 === (16))){
var inst_13064 = (state_13071[(2)]);
var state_13071__$1 = (function (){var statearr_13089 = state_13071;
(statearr_13089[(12)] = inst_13064);

return statearr_13089;
})();
var statearr_13090_13112 = state_13071__$1;
(statearr_13090_13112[(2)] = null);

(statearr_13090_13112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (10))){
var inst_13039 = (state_13071[(2)]);
var inst_13040 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13071__$1 = (function (){var statearr_13091 = state_13071;
(statearr_13091[(13)] = inst_13039);

return statearr_13091;
})();
var statearr_13092_13113 = state_13071__$1;
(statearr_13092_13113[(2)] = inst_13040);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13071__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (8))){
var inst_13053 = (state_13071[(2)]);
var state_13071__$1 = state_13071;
var statearr_13093_13114 = state_13071__$1;
(statearr_13093_13114[(2)] = inst_13053);

(statearr_13093_13114[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11794__auto___13099,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11704__auto__,c__11794__auto___13099,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__11705__auto__ = null;
var cljs$core$async$state_machine__11705__auto____0 = (function (){
var statearr_13094 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13094[(0)] = cljs$core$async$state_machine__11705__auto__);

(statearr_13094[(1)] = (1));

return statearr_13094;
});
var cljs$core$async$state_machine__11705__auto____1 = (function (state_13071){
while(true){
var ret_value__11706__auto__ = (function (){try{while(true){
var result__11707__auto__ = switch__11704__auto__.call(null,state_13071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11707__auto__;
}
break;
}
}catch (e13095){if((e13095 instanceof Object)){
var ex__11708__auto__ = e13095;
var statearr_13096_13115 = state_13071;
(statearr_13096_13115[(5)] = ex__11708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13116 = state_13071;
state_13071 = G__13116;
continue;
} else {
return ret_value__11706__auto__;
}
break;
}
});
cljs$core$async$state_machine__11705__auto__ = function(state_13071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11705__auto____1.call(this,state_13071);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11705__auto____0;
cljs$core$async$state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11705__auto____1;
return cljs$core$async$state_machine__11705__auto__;
})()
;})(switch__11704__auto__,c__11794__auto___13099,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11796__auto__ = (function (){var statearr_13097 = f__11795__auto__.call(null);
(statearr_13097[(6)] = c__11794__auto___13099);

return statearr_13097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11796__auto__);
});})(c__11794__auto___13099,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__13119 = arguments.length;
switch (G__13119) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11794__auto___13173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11794__auto___13173,out){
return (function (){
var f__11795__auto__ = (function (){var switch__11704__auto__ = ((function (c__11794__auto___13173,out){
return (function (state_13151){
var state_val_13152 = (state_13151[(1)]);
if((state_val_13152 === (7))){
var inst_13131 = (state_13151[(7)]);
var inst_13130 = (state_13151[(8)]);
var inst_13130__$1 = (state_13151[(2)]);
var inst_13131__$1 = cljs.core.nth.call(null,inst_13130__$1,(0),null);
var inst_13132 = cljs.core.nth.call(null,inst_13130__$1,(1),null);
var inst_13133 = (inst_13131__$1 == null);
var state_13151__$1 = (function (){var statearr_13153 = state_13151;
(statearr_13153[(7)] = inst_13131__$1);

(statearr_13153[(8)] = inst_13130__$1);

(statearr_13153[(9)] = inst_13132);

return statearr_13153;
})();
if(cljs.core.truth_(inst_13133)){
var statearr_13154_13174 = state_13151__$1;
(statearr_13154_13174[(1)] = (8));

} else {
var statearr_13155_13175 = state_13151__$1;
(statearr_13155_13175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (1))){
var inst_13120 = cljs.core.vec.call(null,chs);
var inst_13121 = inst_13120;
var state_13151__$1 = (function (){var statearr_13156 = state_13151;
(statearr_13156[(10)] = inst_13121);

return statearr_13156;
})();
var statearr_13157_13176 = state_13151__$1;
(statearr_13157_13176[(2)] = null);

(statearr_13157_13176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (4))){
var inst_13121 = (state_13151[(10)]);
var state_13151__$1 = state_13151;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13151__$1,(7),inst_13121);
} else {
if((state_val_13152 === (6))){
var inst_13147 = (state_13151[(2)]);
var state_13151__$1 = state_13151;
var statearr_13158_13177 = state_13151__$1;
(statearr_13158_13177[(2)] = inst_13147);

(statearr_13158_13177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (3))){
var inst_13149 = (state_13151[(2)]);
var state_13151__$1 = state_13151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13151__$1,inst_13149);
} else {
if((state_val_13152 === (2))){
var inst_13121 = (state_13151[(10)]);
var inst_13123 = cljs.core.count.call(null,inst_13121);
var inst_13124 = (inst_13123 > (0));
var state_13151__$1 = state_13151;
if(cljs.core.truth_(inst_13124)){
var statearr_13160_13178 = state_13151__$1;
(statearr_13160_13178[(1)] = (4));

} else {
var statearr_13161_13179 = state_13151__$1;
(statearr_13161_13179[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (11))){
var inst_13121 = (state_13151[(10)]);
var inst_13140 = (state_13151[(2)]);
var tmp13159 = inst_13121;
var inst_13121__$1 = tmp13159;
var state_13151__$1 = (function (){var statearr_13162 = state_13151;
(statearr_13162[(10)] = inst_13121__$1);

(statearr_13162[(11)] = inst_13140);

return statearr_13162;
})();
var statearr_13163_13180 = state_13151__$1;
(statearr_13163_13180[(2)] = null);

(statearr_13163_13180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (9))){
var inst_13131 = (state_13151[(7)]);
var state_13151__$1 = state_13151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13151__$1,(11),out,inst_13131);
} else {
if((state_val_13152 === (5))){
var inst_13145 = cljs.core.async.close_BANG_.call(null,out);
var state_13151__$1 = state_13151;
var statearr_13164_13181 = state_13151__$1;
(statearr_13164_13181[(2)] = inst_13145);

(statearr_13164_13181[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (10))){
var inst_13143 = (state_13151[(2)]);
var state_13151__$1 = state_13151;
var statearr_13165_13182 = state_13151__$1;
(statearr_13165_13182[(2)] = inst_13143);

(statearr_13165_13182[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (8))){
var inst_13131 = (state_13151[(7)]);
var inst_13121 = (state_13151[(10)]);
var inst_13130 = (state_13151[(8)]);
var inst_13132 = (state_13151[(9)]);
var inst_13135 = (function (){var cs = inst_13121;
var vec__13126 = inst_13130;
var v = inst_13131;
var c = inst_13132;
return ((function (cs,vec__13126,v,c,inst_13131,inst_13121,inst_13130,inst_13132,state_val_13152,c__11794__auto___13173,out){
return (function (p1__13117_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13117_SHARP_);
});
;})(cs,vec__13126,v,c,inst_13131,inst_13121,inst_13130,inst_13132,state_val_13152,c__11794__auto___13173,out))
})();
var inst_13136 = cljs.core.filterv.call(null,inst_13135,inst_13121);
var inst_13121__$1 = inst_13136;
var state_13151__$1 = (function (){var statearr_13166 = state_13151;
(statearr_13166[(10)] = inst_13121__$1);

return statearr_13166;
})();
var statearr_13167_13183 = state_13151__$1;
(statearr_13167_13183[(2)] = null);

(statearr_13167_13183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11794__auto___13173,out))
;
return ((function (switch__11704__auto__,c__11794__auto___13173,out){
return (function() {
var cljs$core$async$state_machine__11705__auto__ = null;
var cljs$core$async$state_machine__11705__auto____0 = (function (){
var statearr_13168 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13168[(0)] = cljs$core$async$state_machine__11705__auto__);

(statearr_13168[(1)] = (1));

return statearr_13168;
});
var cljs$core$async$state_machine__11705__auto____1 = (function (state_13151){
while(true){
var ret_value__11706__auto__ = (function (){try{while(true){
var result__11707__auto__ = switch__11704__auto__.call(null,state_13151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11707__auto__;
}
break;
}
}catch (e13169){if((e13169 instanceof Object)){
var ex__11708__auto__ = e13169;
var statearr_13170_13184 = state_13151;
(statearr_13170_13184[(5)] = ex__11708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13185 = state_13151;
state_13151 = G__13185;
continue;
} else {
return ret_value__11706__auto__;
}
break;
}
});
cljs$core$async$state_machine__11705__auto__ = function(state_13151){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11705__auto____1.call(this,state_13151);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11705__auto____0;
cljs$core$async$state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11705__auto____1;
return cljs$core$async$state_machine__11705__auto__;
})()
;})(switch__11704__auto__,c__11794__auto___13173,out))
})();
var state__11796__auto__ = (function (){var statearr_13171 = f__11795__auto__.call(null);
(statearr_13171[(6)] = c__11794__auto___13173);

return statearr_13171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11796__auto__);
});})(c__11794__auto___13173,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__13187 = arguments.length;
switch (G__13187) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11794__auto___13232 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11794__auto___13232,out){
return (function (){
var f__11795__auto__ = (function (){var switch__11704__auto__ = ((function (c__11794__auto___13232,out){
return (function (state_13211){
var state_val_13212 = (state_13211[(1)]);
if((state_val_13212 === (7))){
var inst_13193 = (state_13211[(7)]);
var inst_13193__$1 = (state_13211[(2)]);
var inst_13194 = (inst_13193__$1 == null);
var inst_13195 = cljs.core.not.call(null,inst_13194);
var state_13211__$1 = (function (){var statearr_13213 = state_13211;
(statearr_13213[(7)] = inst_13193__$1);

return statearr_13213;
})();
if(inst_13195){
var statearr_13214_13233 = state_13211__$1;
(statearr_13214_13233[(1)] = (8));

} else {
var statearr_13215_13234 = state_13211__$1;
(statearr_13215_13234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (1))){
var inst_13188 = (0);
var state_13211__$1 = (function (){var statearr_13216 = state_13211;
(statearr_13216[(8)] = inst_13188);

return statearr_13216;
})();
var statearr_13217_13235 = state_13211__$1;
(statearr_13217_13235[(2)] = null);

(statearr_13217_13235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (4))){
var state_13211__$1 = state_13211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13211__$1,(7),ch);
} else {
if((state_val_13212 === (6))){
var inst_13206 = (state_13211[(2)]);
var state_13211__$1 = state_13211;
var statearr_13218_13236 = state_13211__$1;
(statearr_13218_13236[(2)] = inst_13206);

(statearr_13218_13236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (3))){
var inst_13208 = (state_13211[(2)]);
var inst_13209 = cljs.core.async.close_BANG_.call(null,out);
var state_13211__$1 = (function (){var statearr_13219 = state_13211;
(statearr_13219[(9)] = inst_13208);

return statearr_13219;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13211__$1,inst_13209);
} else {
if((state_val_13212 === (2))){
var inst_13188 = (state_13211[(8)]);
var inst_13190 = (inst_13188 < n);
var state_13211__$1 = state_13211;
if(cljs.core.truth_(inst_13190)){
var statearr_13220_13237 = state_13211__$1;
(statearr_13220_13237[(1)] = (4));

} else {
var statearr_13221_13238 = state_13211__$1;
(statearr_13221_13238[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (11))){
var inst_13188 = (state_13211[(8)]);
var inst_13198 = (state_13211[(2)]);
var inst_13199 = (inst_13188 + (1));
var inst_13188__$1 = inst_13199;
var state_13211__$1 = (function (){var statearr_13222 = state_13211;
(statearr_13222[(8)] = inst_13188__$1);

(statearr_13222[(10)] = inst_13198);

return statearr_13222;
})();
var statearr_13223_13239 = state_13211__$1;
(statearr_13223_13239[(2)] = null);

(statearr_13223_13239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (9))){
var state_13211__$1 = state_13211;
var statearr_13224_13240 = state_13211__$1;
(statearr_13224_13240[(2)] = null);

(statearr_13224_13240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (5))){
var state_13211__$1 = state_13211;
var statearr_13225_13241 = state_13211__$1;
(statearr_13225_13241[(2)] = null);

(statearr_13225_13241[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (10))){
var inst_13203 = (state_13211[(2)]);
var state_13211__$1 = state_13211;
var statearr_13226_13242 = state_13211__$1;
(statearr_13226_13242[(2)] = inst_13203);

(statearr_13226_13242[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (8))){
var inst_13193 = (state_13211[(7)]);
var state_13211__$1 = state_13211;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13211__$1,(11),out,inst_13193);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11794__auto___13232,out))
;
return ((function (switch__11704__auto__,c__11794__auto___13232,out){
return (function() {
var cljs$core$async$state_machine__11705__auto__ = null;
var cljs$core$async$state_machine__11705__auto____0 = (function (){
var statearr_13227 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13227[(0)] = cljs$core$async$state_machine__11705__auto__);

(statearr_13227[(1)] = (1));

return statearr_13227;
});
var cljs$core$async$state_machine__11705__auto____1 = (function (state_13211){
while(true){
var ret_value__11706__auto__ = (function (){try{while(true){
var result__11707__auto__ = switch__11704__auto__.call(null,state_13211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11707__auto__;
}
break;
}
}catch (e13228){if((e13228 instanceof Object)){
var ex__11708__auto__ = e13228;
var statearr_13229_13243 = state_13211;
(statearr_13229_13243[(5)] = ex__11708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13244 = state_13211;
state_13211 = G__13244;
continue;
} else {
return ret_value__11706__auto__;
}
break;
}
});
cljs$core$async$state_machine__11705__auto__ = function(state_13211){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11705__auto____1.call(this,state_13211);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11705__auto____0;
cljs$core$async$state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11705__auto____1;
return cljs$core$async$state_machine__11705__auto__;
})()
;})(switch__11704__auto__,c__11794__auto___13232,out))
})();
var state__11796__auto__ = (function (){var statearr_13230 = f__11795__auto__.call(null);
(statearr_13230[(6)] = c__11794__auto___13232);

return statearr_13230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11796__auto__);
});})(c__11794__auto___13232,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async13246 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13246 = (function (f,ch,meta13247){
this.f = f;
this.ch = ch;
this.meta13247 = meta13247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13248,meta13247__$1){
var self__ = this;
var _13248__$1 = this;
return (new cljs.core.async.t_cljs$core$async13246(self__.f,self__.ch,meta13247__$1));
});

cljs.core.async.t_cljs$core$async13246.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13248){
var self__ = this;
var _13248__$1 = this;
return self__.meta13247;
});

cljs.core.async.t_cljs$core$async13246.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13246.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13246.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13246.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13246.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async13249 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13249 = (function (f,ch,meta13247,_,fn1,meta13250){
this.f = f;
this.ch = ch;
this.meta13247 = meta13247;
this._ = _;
this.fn1 = fn1;
this.meta13250 = meta13250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13251,meta13250__$1){
var self__ = this;
var _13251__$1 = this;
return (new cljs.core.async.t_cljs$core$async13249(self__.f,self__.ch,self__.meta13247,self__._,self__.fn1,meta13250__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async13249.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13251){
var self__ = this;
var _13251__$1 = this;
return self__.meta13250;
});})(___$1))
;

cljs.core.async.t_cljs$core$async13249.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13249.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13249.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__13245_SHARP_){
return f1.call(null,(((p1__13245_SHARP_ == null))?null:self__.f.call(null,p1__13245_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async13249.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13247","meta13247",1419962851,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13246","cljs.core.async/t_cljs$core$async13246",-380544208,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13250","meta13250",-1596813009,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13249.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13249.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13249";

cljs.core.async.t_cljs$core$async13249.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write.call(null,writer__9060__auto__,"cljs.core.async/t_cljs$core$async13249");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async13249 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13249(f__$1,ch__$1,meta13247__$1,___$2,fn1__$1,meta13250){
return (new cljs.core.async.t_cljs$core$async13249(f__$1,ch__$1,meta13247__$1,___$2,fn1__$1,meta13250));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async13249(self__.f,self__.ch,self__.meta13247,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__8376__auto__ = ret;
if(cljs.core.truth_(and__8376__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__8376__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async13246.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13246.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async13246.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13247","meta13247",1419962851,null)], null);
});

cljs.core.async.t_cljs$core$async13246.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13246.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13246";

cljs.core.async.t_cljs$core$async13246.cljs$lang$ctorPrWriter = (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write.call(null,writer__9060__auto__,"cljs.core.async/t_cljs$core$async13246");
});

cljs.core.async.__GT_t_cljs$core$async13246 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13246(f__$1,ch__$1,meta13247){
return (new cljs.core.async.t_cljs$core$async13246(f__$1,ch__$1,meta13247));
});

}

return (new cljs.core.async.t_cljs$core$async13246(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async13252 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13252 = (function (f,ch,meta13253){
this.f = f;
this.ch = ch;
this.meta13253 = meta13253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13254,meta13253__$1){
var self__ = this;
var _13254__$1 = this;
return (new cljs.core.async.t_cljs$core$async13252(self__.f,self__.ch,meta13253__$1));
});

cljs.core.async.t_cljs$core$async13252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13254){
var self__ = this;
var _13254__$1 = this;
return self__.meta13253;
});

cljs.core.async.t_cljs$core$async13252.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13252.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13252.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13252.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13252.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13252.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async13252.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13253","meta13253",124403830,null)], null);
});

cljs.core.async.t_cljs$core$async13252.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13252.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13252";

cljs.core.async.t_cljs$core$async13252.cljs$lang$ctorPrWriter = (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write.call(null,writer__9060__auto__,"cljs.core.async/t_cljs$core$async13252");
});

cljs.core.async.__GT_t_cljs$core$async13252 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13252(f__$1,ch__$1,meta13253){
return (new cljs.core.async.t_cljs$core$async13252(f__$1,ch__$1,meta13253));
});

}

return (new cljs.core.async.t_cljs$core$async13252(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async13255 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13255 = (function (p,ch,meta13256){
this.p = p;
this.ch = ch;
this.meta13256 = meta13256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13257,meta13256__$1){
var self__ = this;
var _13257__$1 = this;
return (new cljs.core.async.t_cljs$core$async13255(self__.p,self__.ch,meta13256__$1));
});

cljs.core.async.t_cljs$core$async13255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13257){
var self__ = this;
var _13257__$1 = this;
return self__.meta13256;
});

cljs.core.async.t_cljs$core$async13255.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13255.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13255.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13255.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13255.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13255.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13255.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async13255.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13256","meta13256",-1131643898,null)], null);
});

cljs.core.async.t_cljs$core$async13255.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13255.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13255";

cljs.core.async.t_cljs$core$async13255.cljs$lang$ctorPrWriter = (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write.call(null,writer__9060__auto__,"cljs.core.async/t_cljs$core$async13255");
});

cljs.core.async.__GT_t_cljs$core$async13255 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13255(p__$1,ch__$1,meta13256){
return (new cljs.core.async.t_cljs$core$async13255(p__$1,ch__$1,meta13256));
});

}

return (new cljs.core.async.t_cljs$core$async13255(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__13259 = arguments.length;
switch (G__13259) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11794__auto___13299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11794__auto___13299,out){
return (function (){
var f__11795__auto__ = (function (){var switch__11704__auto__ = ((function (c__11794__auto___13299,out){
return (function (state_13280){
var state_val_13281 = (state_13280[(1)]);
if((state_val_13281 === (7))){
var inst_13276 = (state_13280[(2)]);
var state_13280__$1 = state_13280;
var statearr_13282_13300 = state_13280__$1;
(statearr_13282_13300[(2)] = inst_13276);

(statearr_13282_13300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (1))){
var state_13280__$1 = state_13280;
var statearr_13283_13301 = state_13280__$1;
(statearr_13283_13301[(2)] = null);

(statearr_13283_13301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (4))){
var inst_13262 = (state_13280[(7)]);
var inst_13262__$1 = (state_13280[(2)]);
var inst_13263 = (inst_13262__$1 == null);
var state_13280__$1 = (function (){var statearr_13284 = state_13280;
(statearr_13284[(7)] = inst_13262__$1);

return statearr_13284;
})();
if(cljs.core.truth_(inst_13263)){
var statearr_13285_13302 = state_13280__$1;
(statearr_13285_13302[(1)] = (5));

} else {
var statearr_13286_13303 = state_13280__$1;
(statearr_13286_13303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (6))){
var inst_13262 = (state_13280[(7)]);
var inst_13267 = p.call(null,inst_13262);
var state_13280__$1 = state_13280;
if(cljs.core.truth_(inst_13267)){
var statearr_13287_13304 = state_13280__$1;
(statearr_13287_13304[(1)] = (8));

} else {
var statearr_13288_13305 = state_13280__$1;
(statearr_13288_13305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (3))){
var inst_13278 = (state_13280[(2)]);
var state_13280__$1 = state_13280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13280__$1,inst_13278);
} else {
if((state_val_13281 === (2))){
var state_13280__$1 = state_13280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13280__$1,(4),ch);
} else {
if((state_val_13281 === (11))){
var inst_13270 = (state_13280[(2)]);
var state_13280__$1 = state_13280;
var statearr_13289_13306 = state_13280__$1;
(statearr_13289_13306[(2)] = inst_13270);

(statearr_13289_13306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (9))){
var state_13280__$1 = state_13280;
var statearr_13290_13307 = state_13280__$1;
(statearr_13290_13307[(2)] = null);

(statearr_13290_13307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (5))){
var inst_13265 = cljs.core.async.close_BANG_.call(null,out);
var state_13280__$1 = state_13280;
var statearr_13291_13308 = state_13280__$1;
(statearr_13291_13308[(2)] = inst_13265);

(statearr_13291_13308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (10))){
var inst_13273 = (state_13280[(2)]);
var state_13280__$1 = (function (){var statearr_13292 = state_13280;
(statearr_13292[(8)] = inst_13273);

return statearr_13292;
})();
var statearr_13293_13309 = state_13280__$1;
(statearr_13293_13309[(2)] = null);

(statearr_13293_13309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13281 === (8))){
var inst_13262 = (state_13280[(7)]);
var state_13280__$1 = state_13280;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13280__$1,(11),out,inst_13262);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11794__auto___13299,out))
;
return ((function (switch__11704__auto__,c__11794__auto___13299,out){
return (function() {
var cljs$core$async$state_machine__11705__auto__ = null;
var cljs$core$async$state_machine__11705__auto____0 = (function (){
var statearr_13294 = [null,null,null,null,null,null,null,null,null];
(statearr_13294[(0)] = cljs$core$async$state_machine__11705__auto__);

(statearr_13294[(1)] = (1));

return statearr_13294;
});
var cljs$core$async$state_machine__11705__auto____1 = (function (state_13280){
while(true){
var ret_value__11706__auto__ = (function (){try{while(true){
var result__11707__auto__ = switch__11704__auto__.call(null,state_13280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11707__auto__;
}
break;
}
}catch (e13295){if((e13295 instanceof Object)){
var ex__11708__auto__ = e13295;
var statearr_13296_13310 = state_13280;
(statearr_13296_13310[(5)] = ex__11708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13311 = state_13280;
state_13280 = G__13311;
continue;
} else {
return ret_value__11706__auto__;
}
break;
}
});
cljs$core$async$state_machine__11705__auto__ = function(state_13280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11705__auto____1.call(this,state_13280);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11705__auto____0;
cljs$core$async$state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11705__auto____1;
return cljs$core$async$state_machine__11705__auto__;
})()
;})(switch__11704__auto__,c__11794__auto___13299,out))
})();
var state__11796__auto__ = (function (){var statearr_13297 = f__11795__auto__.call(null);
(statearr_13297[(6)] = c__11794__auto___13299);

return statearr_13297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11796__auto__);
});})(c__11794__auto___13299,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__13313 = arguments.length;
switch (G__13313) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__11794__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11794__auto__){
return (function (){
var f__11795__auto__ = (function (){var switch__11704__auto__ = ((function (c__11794__auto__){
return (function (state_13376){
var state_val_13377 = (state_13376[(1)]);
if((state_val_13377 === (7))){
var inst_13372 = (state_13376[(2)]);
var state_13376__$1 = state_13376;
var statearr_13378_13416 = state_13376__$1;
(statearr_13378_13416[(2)] = inst_13372);

(statearr_13378_13416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (20))){
var inst_13342 = (state_13376[(7)]);
var inst_13353 = (state_13376[(2)]);
var inst_13354 = cljs.core.next.call(null,inst_13342);
var inst_13328 = inst_13354;
var inst_13329 = null;
var inst_13330 = (0);
var inst_13331 = (0);
var state_13376__$1 = (function (){var statearr_13379 = state_13376;
(statearr_13379[(8)] = inst_13328);

(statearr_13379[(9)] = inst_13331);

(statearr_13379[(10)] = inst_13353);

(statearr_13379[(11)] = inst_13329);

(statearr_13379[(12)] = inst_13330);

return statearr_13379;
})();
var statearr_13380_13417 = state_13376__$1;
(statearr_13380_13417[(2)] = null);

(statearr_13380_13417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (1))){
var state_13376__$1 = state_13376;
var statearr_13381_13418 = state_13376__$1;
(statearr_13381_13418[(2)] = null);

(statearr_13381_13418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (4))){
var inst_13317 = (state_13376[(13)]);
var inst_13317__$1 = (state_13376[(2)]);
var inst_13318 = (inst_13317__$1 == null);
var state_13376__$1 = (function (){var statearr_13382 = state_13376;
(statearr_13382[(13)] = inst_13317__$1);

return statearr_13382;
})();
if(cljs.core.truth_(inst_13318)){
var statearr_13383_13419 = state_13376__$1;
(statearr_13383_13419[(1)] = (5));

} else {
var statearr_13384_13420 = state_13376__$1;
(statearr_13384_13420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (15))){
var state_13376__$1 = state_13376;
var statearr_13388_13421 = state_13376__$1;
(statearr_13388_13421[(2)] = null);

(statearr_13388_13421[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (21))){
var state_13376__$1 = state_13376;
var statearr_13389_13422 = state_13376__$1;
(statearr_13389_13422[(2)] = null);

(statearr_13389_13422[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (13))){
var inst_13328 = (state_13376[(8)]);
var inst_13331 = (state_13376[(9)]);
var inst_13329 = (state_13376[(11)]);
var inst_13330 = (state_13376[(12)]);
var inst_13338 = (state_13376[(2)]);
var inst_13339 = (inst_13331 + (1));
var tmp13385 = inst_13328;
var tmp13386 = inst_13329;
var tmp13387 = inst_13330;
var inst_13328__$1 = tmp13385;
var inst_13329__$1 = tmp13386;
var inst_13330__$1 = tmp13387;
var inst_13331__$1 = inst_13339;
var state_13376__$1 = (function (){var statearr_13390 = state_13376;
(statearr_13390[(14)] = inst_13338);

(statearr_13390[(8)] = inst_13328__$1);

(statearr_13390[(9)] = inst_13331__$1);

(statearr_13390[(11)] = inst_13329__$1);

(statearr_13390[(12)] = inst_13330__$1);

return statearr_13390;
})();
var statearr_13391_13423 = state_13376__$1;
(statearr_13391_13423[(2)] = null);

(statearr_13391_13423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (22))){
var state_13376__$1 = state_13376;
var statearr_13392_13424 = state_13376__$1;
(statearr_13392_13424[(2)] = null);

(statearr_13392_13424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (6))){
var inst_13317 = (state_13376[(13)]);
var inst_13326 = f.call(null,inst_13317);
var inst_13327 = cljs.core.seq.call(null,inst_13326);
var inst_13328 = inst_13327;
var inst_13329 = null;
var inst_13330 = (0);
var inst_13331 = (0);
var state_13376__$1 = (function (){var statearr_13393 = state_13376;
(statearr_13393[(8)] = inst_13328);

(statearr_13393[(9)] = inst_13331);

(statearr_13393[(11)] = inst_13329);

(statearr_13393[(12)] = inst_13330);

return statearr_13393;
})();
var statearr_13394_13425 = state_13376__$1;
(statearr_13394_13425[(2)] = null);

(statearr_13394_13425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (17))){
var inst_13342 = (state_13376[(7)]);
var inst_13346 = cljs.core.chunk_first.call(null,inst_13342);
var inst_13347 = cljs.core.chunk_rest.call(null,inst_13342);
var inst_13348 = cljs.core.count.call(null,inst_13346);
var inst_13328 = inst_13347;
var inst_13329 = inst_13346;
var inst_13330 = inst_13348;
var inst_13331 = (0);
var state_13376__$1 = (function (){var statearr_13395 = state_13376;
(statearr_13395[(8)] = inst_13328);

(statearr_13395[(9)] = inst_13331);

(statearr_13395[(11)] = inst_13329);

(statearr_13395[(12)] = inst_13330);

return statearr_13395;
})();
var statearr_13396_13426 = state_13376__$1;
(statearr_13396_13426[(2)] = null);

(statearr_13396_13426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (3))){
var inst_13374 = (state_13376[(2)]);
var state_13376__$1 = state_13376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13376__$1,inst_13374);
} else {
if((state_val_13377 === (12))){
var inst_13362 = (state_13376[(2)]);
var state_13376__$1 = state_13376;
var statearr_13397_13427 = state_13376__$1;
(statearr_13397_13427[(2)] = inst_13362);

(statearr_13397_13427[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (2))){
var state_13376__$1 = state_13376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13376__$1,(4),in$);
} else {
if((state_val_13377 === (23))){
var inst_13370 = (state_13376[(2)]);
var state_13376__$1 = state_13376;
var statearr_13398_13428 = state_13376__$1;
(statearr_13398_13428[(2)] = inst_13370);

(statearr_13398_13428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (19))){
var inst_13357 = (state_13376[(2)]);
var state_13376__$1 = state_13376;
var statearr_13399_13429 = state_13376__$1;
(statearr_13399_13429[(2)] = inst_13357);

(statearr_13399_13429[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (11))){
var inst_13342 = (state_13376[(7)]);
var inst_13328 = (state_13376[(8)]);
var inst_13342__$1 = cljs.core.seq.call(null,inst_13328);
var state_13376__$1 = (function (){var statearr_13400 = state_13376;
(statearr_13400[(7)] = inst_13342__$1);

return statearr_13400;
})();
if(inst_13342__$1){
var statearr_13401_13430 = state_13376__$1;
(statearr_13401_13430[(1)] = (14));

} else {
var statearr_13402_13431 = state_13376__$1;
(statearr_13402_13431[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (9))){
var inst_13364 = (state_13376[(2)]);
var inst_13365 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13376__$1 = (function (){var statearr_13403 = state_13376;
(statearr_13403[(15)] = inst_13364);

return statearr_13403;
})();
if(cljs.core.truth_(inst_13365)){
var statearr_13404_13432 = state_13376__$1;
(statearr_13404_13432[(1)] = (21));

} else {
var statearr_13405_13433 = state_13376__$1;
(statearr_13405_13433[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (5))){
var inst_13320 = cljs.core.async.close_BANG_.call(null,out);
var state_13376__$1 = state_13376;
var statearr_13406_13434 = state_13376__$1;
(statearr_13406_13434[(2)] = inst_13320);

(statearr_13406_13434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (14))){
var inst_13342 = (state_13376[(7)]);
var inst_13344 = cljs.core.chunked_seq_QMARK_.call(null,inst_13342);
var state_13376__$1 = state_13376;
if(inst_13344){
var statearr_13407_13435 = state_13376__$1;
(statearr_13407_13435[(1)] = (17));

} else {
var statearr_13408_13436 = state_13376__$1;
(statearr_13408_13436[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (16))){
var inst_13360 = (state_13376[(2)]);
var state_13376__$1 = state_13376;
var statearr_13409_13437 = state_13376__$1;
(statearr_13409_13437[(2)] = inst_13360);

(statearr_13409_13437[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (10))){
var inst_13331 = (state_13376[(9)]);
var inst_13329 = (state_13376[(11)]);
var inst_13336 = cljs.core._nth.call(null,inst_13329,inst_13331);
var state_13376__$1 = state_13376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13376__$1,(13),out,inst_13336);
} else {
if((state_val_13377 === (18))){
var inst_13342 = (state_13376[(7)]);
var inst_13351 = cljs.core.first.call(null,inst_13342);
var state_13376__$1 = state_13376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13376__$1,(20),out,inst_13351);
} else {
if((state_val_13377 === (8))){
var inst_13331 = (state_13376[(9)]);
var inst_13330 = (state_13376[(12)]);
var inst_13333 = (inst_13331 < inst_13330);
var inst_13334 = inst_13333;
var state_13376__$1 = state_13376;
if(cljs.core.truth_(inst_13334)){
var statearr_13410_13438 = state_13376__$1;
(statearr_13410_13438[(1)] = (10));

} else {
var statearr_13411_13439 = state_13376__$1;
(statearr_13411_13439[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11794__auto__))
;
return ((function (switch__11704__auto__,c__11794__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__11705__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11705__auto____0 = (function (){
var statearr_13412 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13412[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11705__auto__);

(statearr_13412[(1)] = (1));

return statearr_13412;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11705__auto____1 = (function (state_13376){
while(true){
var ret_value__11706__auto__ = (function (){try{while(true){
var result__11707__auto__ = switch__11704__auto__.call(null,state_13376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11707__auto__;
}
break;
}
}catch (e13413){if((e13413 instanceof Object)){
var ex__11708__auto__ = e13413;
var statearr_13414_13440 = state_13376;
(statearr_13414_13440[(5)] = ex__11708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13441 = state_13376;
state_13376 = G__13441;
continue;
} else {
return ret_value__11706__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11705__auto__ = function(state_13376){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11705__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11705__auto____1.call(this,state_13376);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11705__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11705__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11705__auto__;
})()
;})(switch__11704__auto__,c__11794__auto__))
})();
var state__11796__auto__ = (function (){var statearr_13415 = f__11795__auto__.call(null);
(statearr_13415[(6)] = c__11794__auto__);

return statearr_13415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11796__auto__);
});})(c__11794__auto__))
);

return c__11794__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__13443 = arguments.length;
switch (G__13443) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__13446 = arguments.length;
switch (G__13446) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__13449 = arguments.length;
switch (G__13449) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11794__auto___13496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11794__auto___13496,out){
return (function (){
var f__11795__auto__ = (function (){var switch__11704__auto__ = ((function (c__11794__auto___13496,out){
return (function (state_13473){
var state_val_13474 = (state_13473[(1)]);
if((state_val_13474 === (7))){
var inst_13468 = (state_13473[(2)]);
var state_13473__$1 = state_13473;
var statearr_13475_13497 = state_13473__$1;
(statearr_13475_13497[(2)] = inst_13468);

(statearr_13475_13497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13474 === (1))){
var inst_13450 = null;
var state_13473__$1 = (function (){var statearr_13476 = state_13473;
(statearr_13476[(7)] = inst_13450);

return statearr_13476;
})();
var statearr_13477_13498 = state_13473__$1;
(statearr_13477_13498[(2)] = null);

(statearr_13477_13498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13474 === (4))){
var inst_13453 = (state_13473[(8)]);
var inst_13453__$1 = (state_13473[(2)]);
var inst_13454 = (inst_13453__$1 == null);
var inst_13455 = cljs.core.not.call(null,inst_13454);
var state_13473__$1 = (function (){var statearr_13478 = state_13473;
(statearr_13478[(8)] = inst_13453__$1);

return statearr_13478;
})();
if(inst_13455){
var statearr_13479_13499 = state_13473__$1;
(statearr_13479_13499[(1)] = (5));

} else {
var statearr_13480_13500 = state_13473__$1;
(statearr_13480_13500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13474 === (6))){
var state_13473__$1 = state_13473;
var statearr_13481_13501 = state_13473__$1;
(statearr_13481_13501[(2)] = null);

(statearr_13481_13501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13474 === (3))){
var inst_13470 = (state_13473[(2)]);
var inst_13471 = cljs.core.async.close_BANG_.call(null,out);
var state_13473__$1 = (function (){var statearr_13482 = state_13473;
(statearr_13482[(9)] = inst_13470);

return statearr_13482;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13473__$1,inst_13471);
} else {
if((state_val_13474 === (2))){
var state_13473__$1 = state_13473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13473__$1,(4),ch);
} else {
if((state_val_13474 === (11))){
var inst_13453 = (state_13473[(8)]);
var inst_13462 = (state_13473[(2)]);
var inst_13450 = inst_13453;
var state_13473__$1 = (function (){var statearr_13483 = state_13473;
(statearr_13483[(7)] = inst_13450);

(statearr_13483[(10)] = inst_13462);

return statearr_13483;
})();
var statearr_13484_13502 = state_13473__$1;
(statearr_13484_13502[(2)] = null);

(statearr_13484_13502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13474 === (9))){
var inst_13453 = (state_13473[(8)]);
var state_13473__$1 = state_13473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13473__$1,(11),out,inst_13453);
} else {
if((state_val_13474 === (5))){
var inst_13450 = (state_13473[(7)]);
var inst_13453 = (state_13473[(8)]);
var inst_13457 = cljs.core._EQ_.call(null,inst_13453,inst_13450);
var state_13473__$1 = state_13473;
if(inst_13457){
var statearr_13486_13503 = state_13473__$1;
(statearr_13486_13503[(1)] = (8));

} else {
var statearr_13487_13504 = state_13473__$1;
(statearr_13487_13504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13474 === (10))){
var inst_13465 = (state_13473[(2)]);
var state_13473__$1 = state_13473;
var statearr_13488_13505 = state_13473__$1;
(statearr_13488_13505[(2)] = inst_13465);

(statearr_13488_13505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13474 === (8))){
var inst_13450 = (state_13473[(7)]);
var tmp13485 = inst_13450;
var inst_13450__$1 = tmp13485;
var state_13473__$1 = (function (){var statearr_13489 = state_13473;
(statearr_13489[(7)] = inst_13450__$1);

return statearr_13489;
})();
var statearr_13490_13506 = state_13473__$1;
(statearr_13490_13506[(2)] = null);

(statearr_13490_13506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11794__auto___13496,out))
;
return ((function (switch__11704__auto__,c__11794__auto___13496,out){
return (function() {
var cljs$core$async$state_machine__11705__auto__ = null;
var cljs$core$async$state_machine__11705__auto____0 = (function (){
var statearr_13491 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13491[(0)] = cljs$core$async$state_machine__11705__auto__);

(statearr_13491[(1)] = (1));

return statearr_13491;
});
var cljs$core$async$state_machine__11705__auto____1 = (function (state_13473){
while(true){
var ret_value__11706__auto__ = (function (){try{while(true){
var result__11707__auto__ = switch__11704__auto__.call(null,state_13473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11707__auto__;
}
break;
}
}catch (e13492){if((e13492 instanceof Object)){
var ex__11708__auto__ = e13492;
var statearr_13493_13507 = state_13473;
(statearr_13493_13507[(5)] = ex__11708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13508 = state_13473;
state_13473 = G__13508;
continue;
} else {
return ret_value__11706__auto__;
}
break;
}
});
cljs$core$async$state_machine__11705__auto__ = function(state_13473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11705__auto____1.call(this,state_13473);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11705__auto____0;
cljs$core$async$state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11705__auto____1;
return cljs$core$async$state_machine__11705__auto__;
})()
;})(switch__11704__auto__,c__11794__auto___13496,out))
})();
var state__11796__auto__ = (function (){var statearr_13494 = f__11795__auto__.call(null);
(statearr_13494[(6)] = c__11794__auto___13496);

return statearr_13494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11796__auto__);
});})(c__11794__auto___13496,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__13510 = arguments.length;
switch (G__13510) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11794__auto___13576 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11794__auto___13576,out){
return (function (){
var f__11795__auto__ = (function (){var switch__11704__auto__ = ((function (c__11794__auto___13576,out){
return (function (state_13548){
var state_val_13549 = (state_13548[(1)]);
if((state_val_13549 === (7))){
var inst_13544 = (state_13548[(2)]);
var state_13548__$1 = state_13548;
var statearr_13550_13577 = state_13548__$1;
(statearr_13550_13577[(2)] = inst_13544);

(statearr_13550_13577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13549 === (1))){
var inst_13511 = (new Array(n));
var inst_13512 = inst_13511;
var inst_13513 = (0);
var state_13548__$1 = (function (){var statearr_13551 = state_13548;
(statearr_13551[(7)] = inst_13513);

(statearr_13551[(8)] = inst_13512);

return statearr_13551;
})();
var statearr_13552_13578 = state_13548__$1;
(statearr_13552_13578[(2)] = null);

(statearr_13552_13578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13549 === (4))){
var inst_13516 = (state_13548[(9)]);
var inst_13516__$1 = (state_13548[(2)]);
var inst_13517 = (inst_13516__$1 == null);
var inst_13518 = cljs.core.not.call(null,inst_13517);
var state_13548__$1 = (function (){var statearr_13553 = state_13548;
(statearr_13553[(9)] = inst_13516__$1);

return statearr_13553;
})();
if(inst_13518){
var statearr_13554_13579 = state_13548__$1;
(statearr_13554_13579[(1)] = (5));

} else {
var statearr_13555_13580 = state_13548__$1;
(statearr_13555_13580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13549 === (15))){
var inst_13538 = (state_13548[(2)]);
var state_13548__$1 = state_13548;
var statearr_13556_13581 = state_13548__$1;
(statearr_13556_13581[(2)] = inst_13538);

(statearr_13556_13581[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13549 === (13))){
var state_13548__$1 = state_13548;
var statearr_13557_13582 = state_13548__$1;
(statearr_13557_13582[(2)] = null);

(statearr_13557_13582[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13549 === (6))){
var inst_13513 = (state_13548[(7)]);
var inst_13534 = (inst_13513 > (0));
var state_13548__$1 = state_13548;
if(cljs.core.truth_(inst_13534)){
var statearr_13558_13583 = state_13548__$1;
(statearr_13558_13583[(1)] = (12));

} else {
var statearr_13559_13584 = state_13548__$1;
(statearr_13559_13584[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13549 === (3))){
var inst_13546 = (state_13548[(2)]);
var state_13548__$1 = state_13548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13548__$1,inst_13546);
} else {
if((state_val_13549 === (12))){
var inst_13512 = (state_13548[(8)]);
var inst_13536 = cljs.core.vec.call(null,inst_13512);
var state_13548__$1 = state_13548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13548__$1,(15),out,inst_13536);
} else {
if((state_val_13549 === (2))){
var state_13548__$1 = state_13548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13548__$1,(4),ch);
} else {
if((state_val_13549 === (11))){
var inst_13528 = (state_13548[(2)]);
var inst_13529 = (new Array(n));
var inst_13512 = inst_13529;
var inst_13513 = (0);
var state_13548__$1 = (function (){var statearr_13560 = state_13548;
(statearr_13560[(7)] = inst_13513);

(statearr_13560[(8)] = inst_13512);

(statearr_13560[(10)] = inst_13528);

return statearr_13560;
})();
var statearr_13561_13585 = state_13548__$1;
(statearr_13561_13585[(2)] = null);

(statearr_13561_13585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13549 === (9))){
var inst_13512 = (state_13548[(8)]);
var inst_13526 = cljs.core.vec.call(null,inst_13512);
var state_13548__$1 = state_13548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13548__$1,(11),out,inst_13526);
} else {
if((state_val_13549 === (5))){
var inst_13513 = (state_13548[(7)]);
var inst_13512 = (state_13548[(8)]);
var inst_13521 = (state_13548[(11)]);
var inst_13516 = (state_13548[(9)]);
var inst_13520 = (inst_13512[inst_13513] = inst_13516);
var inst_13521__$1 = (inst_13513 + (1));
var inst_13522 = (inst_13521__$1 < n);
var state_13548__$1 = (function (){var statearr_13562 = state_13548;
(statearr_13562[(12)] = inst_13520);

(statearr_13562[(11)] = inst_13521__$1);

return statearr_13562;
})();
if(cljs.core.truth_(inst_13522)){
var statearr_13563_13586 = state_13548__$1;
(statearr_13563_13586[(1)] = (8));

} else {
var statearr_13564_13587 = state_13548__$1;
(statearr_13564_13587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13549 === (14))){
var inst_13541 = (state_13548[(2)]);
var inst_13542 = cljs.core.async.close_BANG_.call(null,out);
var state_13548__$1 = (function (){var statearr_13566 = state_13548;
(statearr_13566[(13)] = inst_13541);

return statearr_13566;
})();
var statearr_13567_13588 = state_13548__$1;
(statearr_13567_13588[(2)] = inst_13542);

(statearr_13567_13588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13549 === (10))){
var inst_13532 = (state_13548[(2)]);
var state_13548__$1 = state_13548;
var statearr_13568_13589 = state_13548__$1;
(statearr_13568_13589[(2)] = inst_13532);

(statearr_13568_13589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13549 === (8))){
var inst_13512 = (state_13548[(8)]);
var inst_13521 = (state_13548[(11)]);
var tmp13565 = inst_13512;
var inst_13512__$1 = tmp13565;
var inst_13513 = inst_13521;
var state_13548__$1 = (function (){var statearr_13569 = state_13548;
(statearr_13569[(7)] = inst_13513);

(statearr_13569[(8)] = inst_13512__$1);

return statearr_13569;
})();
var statearr_13570_13590 = state_13548__$1;
(statearr_13570_13590[(2)] = null);

(statearr_13570_13590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11794__auto___13576,out))
;
return ((function (switch__11704__auto__,c__11794__auto___13576,out){
return (function() {
var cljs$core$async$state_machine__11705__auto__ = null;
var cljs$core$async$state_machine__11705__auto____0 = (function (){
var statearr_13571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13571[(0)] = cljs$core$async$state_machine__11705__auto__);

(statearr_13571[(1)] = (1));

return statearr_13571;
});
var cljs$core$async$state_machine__11705__auto____1 = (function (state_13548){
while(true){
var ret_value__11706__auto__ = (function (){try{while(true){
var result__11707__auto__ = switch__11704__auto__.call(null,state_13548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11707__auto__;
}
break;
}
}catch (e13572){if((e13572 instanceof Object)){
var ex__11708__auto__ = e13572;
var statearr_13573_13591 = state_13548;
(statearr_13573_13591[(5)] = ex__11708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13592 = state_13548;
state_13548 = G__13592;
continue;
} else {
return ret_value__11706__auto__;
}
break;
}
});
cljs$core$async$state_machine__11705__auto__ = function(state_13548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11705__auto____1.call(this,state_13548);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11705__auto____0;
cljs$core$async$state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11705__auto____1;
return cljs$core$async$state_machine__11705__auto__;
})()
;})(switch__11704__auto__,c__11794__auto___13576,out))
})();
var state__11796__auto__ = (function (){var statearr_13574 = f__11795__auto__.call(null);
(statearr_13574[(6)] = c__11794__auto___13576);

return statearr_13574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11796__auto__);
});})(c__11794__auto___13576,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__13594 = arguments.length;
switch (G__13594) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11794__auto___13664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11794__auto___13664,out){
return (function (){
var f__11795__auto__ = (function (){var switch__11704__auto__ = ((function (c__11794__auto___13664,out){
return (function (state_13636){
var state_val_13637 = (state_13636[(1)]);
if((state_val_13637 === (7))){
var inst_13632 = (state_13636[(2)]);
var state_13636__$1 = state_13636;
var statearr_13638_13665 = state_13636__$1;
(statearr_13638_13665[(2)] = inst_13632);

(statearr_13638_13665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13637 === (1))){
var inst_13595 = [];
var inst_13596 = inst_13595;
var inst_13597 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13636__$1 = (function (){var statearr_13639 = state_13636;
(statearr_13639[(7)] = inst_13597);

(statearr_13639[(8)] = inst_13596);

return statearr_13639;
})();
var statearr_13640_13666 = state_13636__$1;
(statearr_13640_13666[(2)] = null);

(statearr_13640_13666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13637 === (4))){
var inst_13600 = (state_13636[(9)]);
var inst_13600__$1 = (state_13636[(2)]);
var inst_13601 = (inst_13600__$1 == null);
var inst_13602 = cljs.core.not.call(null,inst_13601);
var state_13636__$1 = (function (){var statearr_13641 = state_13636;
(statearr_13641[(9)] = inst_13600__$1);

return statearr_13641;
})();
if(inst_13602){
var statearr_13642_13667 = state_13636__$1;
(statearr_13642_13667[(1)] = (5));

} else {
var statearr_13643_13668 = state_13636__$1;
(statearr_13643_13668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13637 === (15))){
var inst_13626 = (state_13636[(2)]);
var state_13636__$1 = state_13636;
var statearr_13644_13669 = state_13636__$1;
(statearr_13644_13669[(2)] = inst_13626);

(statearr_13644_13669[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13637 === (13))){
var state_13636__$1 = state_13636;
var statearr_13645_13670 = state_13636__$1;
(statearr_13645_13670[(2)] = null);

(statearr_13645_13670[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13637 === (6))){
var inst_13596 = (state_13636[(8)]);
var inst_13621 = inst_13596.length;
var inst_13622 = (inst_13621 > (0));
var state_13636__$1 = state_13636;
if(cljs.core.truth_(inst_13622)){
var statearr_13646_13671 = state_13636__$1;
(statearr_13646_13671[(1)] = (12));

} else {
var statearr_13647_13672 = state_13636__$1;
(statearr_13647_13672[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13637 === (3))){
var inst_13634 = (state_13636[(2)]);
var state_13636__$1 = state_13636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13636__$1,inst_13634);
} else {
if((state_val_13637 === (12))){
var inst_13596 = (state_13636[(8)]);
var inst_13624 = cljs.core.vec.call(null,inst_13596);
var state_13636__$1 = state_13636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13636__$1,(15),out,inst_13624);
} else {
if((state_val_13637 === (2))){
var state_13636__$1 = state_13636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13636__$1,(4),ch);
} else {
if((state_val_13637 === (11))){
var inst_13604 = (state_13636[(10)]);
var inst_13600 = (state_13636[(9)]);
var inst_13614 = (state_13636[(2)]);
var inst_13615 = [];
var inst_13616 = inst_13615.push(inst_13600);
var inst_13596 = inst_13615;
var inst_13597 = inst_13604;
var state_13636__$1 = (function (){var statearr_13648 = state_13636;
(statearr_13648[(7)] = inst_13597);

(statearr_13648[(11)] = inst_13616);

(statearr_13648[(12)] = inst_13614);

(statearr_13648[(8)] = inst_13596);

return statearr_13648;
})();
var statearr_13649_13673 = state_13636__$1;
(statearr_13649_13673[(2)] = null);

(statearr_13649_13673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13637 === (9))){
var inst_13596 = (state_13636[(8)]);
var inst_13612 = cljs.core.vec.call(null,inst_13596);
var state_13636__$1 = state_13636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13636__$1,(11),out,inst_13612);
} else {
if((state_val_13637 === (5))){
var inst_13597 = (state_13636[(7)]);
var inst_13604 = (state_13636[(10)]);
var inst_13600 = (state_13636[(9)]);
var inst_13604__$1 = f.call(null,inst_13600);
var inst_13605 = cljs.core._EQ_.call(null,inst_13604__$1,inst_13597);
var inst_13606 = cljs.core.keyword_identical_QMARK_.call(null,inst_13597,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_13607 = (inst_13605) || (inst_13606);
var state_13636__$1 = (function (){var statearr_13650 = state_13636;
(statearr_13650[(10)] = inst_13604__$1);

return statearr_13650;
})();
if(cljs.core.truth_(inst_13607)){
var statearr_13651_13674 = state_13636__$1;
(statearr_13651_13674[(1)] = (8));

} else {
var statearr_13652_13675 = state_13636__$1;
(statearr_13652_13675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13637 === (14))){
var inst_13629 = (state_13636[(2)]);
var inst_13630 = cljs.core.async.close_BANG_.call(null,out);
var state_13636__$1 = (function (){var statearr_13654 = state_13636;
(statearr_13654[(13)] = inst_13629);

return statearr_13654;
})();
var statearr_13655_13676 = state_13636__$1;
(statearr_13655_13676[(2)] = inst_13630);

(statearr_13655_13676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13637 === (10))){
var inst_13619 = (state_13636[(2)]);
var state_13636__$1 = state_13636;
var statearr_13656_13677 = state_13636__$1;
(statearr_13656_13677[(2)] = inst_13619);

(statearr_13656_13677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13637 === (8))){
var inst_13604 = (state_13636[(10)]);
var inst_13596 = (state_13636[(8)]);
var inst_13600 = (state_13636[(9)]);
var inst_13609 = inst_13596.push(inst_13600);
var tmp13653 = inst_13596;
var inst_13596__$1 = tmp13653;
var inst_13597 = inst_13604;
var state_13636__$1 = (function (){var statearr_13657 = state_13636;
(statearr_13657[(7)] = inst_13597);

(statearr_13657[(14)] = inst_13609);

(statearr_13657[(8)] = inst_13596__$1);

return statearr_13657;
})();
var statearr_13658_13678 = state_13636__$1;
(statearr_13658_13678[(2)] = null);

(statearr_13658_13678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11794__auto___13664,out))
;
return ((function (switch__11704__auto__,c__11794__auto___13664,out){
return (function() {
var cljs$core$async$state_machine__11705__auto__ = null;
var cljs$core$async$state_machine__11705__auto____0 = (function (){
var statearr_13659 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13659[(0)] = cljs$core$async$state_machine__11705__auto__);

(statearr_13659[(1)] = (1));

return statearr_13659;
});
var cljs$core$async$state_machine__11705__auto____1 = (function (state_13636){
while(true){
var ret_value__11706__auto__ = (function (){try{while(true){
var result__11707__auto__ = switch__11704__auto__.call(null,state_13636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11707__auto__;
}
break;
}
}catch (e13660){if((e13660 instanceof Object)){
var ex__11708__auto__ = e13660;
var statearr_13661_13679 = state_13636;
(statearr_13661_13679[(5)] = ex__11708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13680 = state_13636;
state_13636 = G__13680;
continue;
} else {
return ret_value__11706__auto__;
}
break;
}
});
cljs$core$async$state_machine__11705__auto__ = function(state_13636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11705__auto____1.call(this,state_13636);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11705__auto____0;
cljs$core$async$state_machine__11705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11705__auto____1;
return cljs$core$async$state_machine__11705__auto__;
})()
;})(switch__11704__auto__,c__11794__auto___13664,out))
})();
var state__11796__auto__ = (function (){var statearr_13662 = f__11795__auto__.call(null);
(statearr_13662[(6)] = c__11794__auto___13664);

return statearr_13662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11796__auto__);
});})(c__11794__auto___13664,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1511985271318
