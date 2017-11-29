// Compiled by ClojureScript 1.9.946 {}
goog.provide('citrus.cursor');
goog.require('cljs.core');
goog.require('goog.object');

/**
* @constructor
 * @implements {citrus.cursor.Object}
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
citrus.cursor.ReduceCursor = (function (ref,path,reducer,meta){
this.ref = ref;
this.path = path;
this.reducer = reducer;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 16386;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
});
citrus.cursor.ReduceCursor.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

citrus.cursor.ReduceCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

citrus.cursor.ReduceCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (this$__$1 === other);
});

citrus.cursor.ReduceCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.reducer.call(null,cljs.core.get_in.call(null,cljs.core._deref.call(null,self__.ref),self__.path));
});

citrus.cursor.ReduceCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,callback){
var self__ = this;
var this$__$1 = this;
cljs.core.add_watch.call(null,self__.ref,(function (){var x__9342__auto__ = this$__$1;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),((function (this$__$1){
return (function (_,___$1,oldv,newv){
var old = self__.reducer.call(null,cljs.core.get_in.call(null,oldv,self__.path));
var new$ = self__.reducer.call(null,cljs.core.get_in.call(null,newv,self__.path));
if(cljs.core.not_EQ_.call(null,old,new$)){
return callback.call(null,key,this$__$1,old,new$);
} else {
return null;
}
});})(this$__$1))
);

return this$__$1;
});

citrus.cursor.ReduceCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
cljs.core.remove_watch.call(null,self__.ref,(function (){var x__9342__auto__ = this$__$1;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})());

return this$__$1;
});

citrus.cursor.ReduceCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

citrus.cursor.ReduceCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,"#object [citrus.cursor.ReduceCursor ");

cljs.core.pr_writer.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),cljs.core._deref.call(null,this$__$1)], null),writer,opts);

return cljs.core._write.call(null,writer,"]");
});

citrus.cursor.ReduceCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ref","ref",-1364538802,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reducer","reducer",-948842876,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
});

citrus.cursor.ReduceCursor.cljs$lang$type = true;

citrus.cursor.ReduceCursor.cljs$lang$ctorStr = "citrus.cursor/ReduceCursor";

citrus.cursor.ReduceCursor.cljs$lang$ctorPrWriter = (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write.call(null,writer__9060__auto__,"citrus.cursor/ReduceCursor");
});

citrus.cursor.__GT_ReduceCursor = (function citrus$cursor$__GT_ReduceCursor(ref,path,reducer,meta){
return (new citrus.cursor.ReduceCursor(ref,path,reducer,meta));
});

/**
 * Given atom with deep nested value, path inside it and reducing function, creates an atom-like structure
 * that can be used separately from main atom, but only for reading value:
 * 
 *   (def state (atom {:users {"Ivan" {:children [1 2 3]}}}))
 *   (def ivan (citrus.cursor/reduce-cursor-in state [:users "Ivan" :children] last))
 *   (deref ivan) ;; => 3
 * 
 *   Returned value supports deref, watches and metadata.
 *   The only supported option is `:meta`
 */
citrus.cursor.reduce_cursor_in = (function citrus$cursor$reduce_cursor_in(var_args){
var args__9674__auto__ = [];
var len__9667__auto___16306 = arguments.length;
var i__9668__auto___16307 = (0);
while(true){
if((i__9668__auto___16307 < len__9667__auto___16306)){
args__9674__auto__.push((arguments[i__9668__auto___16307]));

var G__16308 = (i__9668__auto___16307 + (1));
i__9668__auto___16307 = G__16308;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((3) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((3)),(0),null)):null);
return citrus.cursor.reduce_cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9675__auto__);
});

citrus.cursor.reduce_cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,reducer,p__16303){
var map__16304 = p__16303;
var map__16304__$1 = ((((!((map__16304 == null)))?((((map__16304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16304.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16304):map__16304);
var options = map__16304__$1;
return (new citrus.cursor.ReduceCursor(ref,path,reducer,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
});

citrus.cursor.reduce_cursor_in.cljs$lang$maxFixedArity = (3);

citrus.cursor.reduce_cursor_in.cljs$lang$applyTo = (function (seq16299){
var G__16300 = cljs.core.first.call(null,seq16299);
var seq16299__$1 = cljs.core.next.call(null,seq16299);
var G__16301 = cljs.core.first.call(null,seq16299__$1);
var seq16299__$2 = cljs.core.next.call(null,seq16299__$1);
var G__16302 = cljs.core.first.call(null,seq16299__$2);
var seq16299__$3 = cljs.core.next.call(null,seq16299__$2);
return citrus.cursor.reduce_cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__16300,G__16301,G__16302,seq16299__$3);
});


//# sourceMappingURL=cursor.js.map?rel=1511973567740
