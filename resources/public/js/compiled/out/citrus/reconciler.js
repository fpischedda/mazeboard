// Compiled by ClojureScript 1.9.946 {}
goog.provide('citrus.reconciler');
goog.require('cljs.core');
citrus.reconciler.queue_effects_BANG_ = (function citrus$reconciler$queue_effects_BANG_(queue,f){
return cljs.core._vreset_BANG_.call(null,queue,cljs.core.conj.call(null,cljs.core._deref.call(null,queue),f));
});
citrus.reconciler.clear_queue_BANG_ = (function citrus$reconciler$clear_queue_BANG_(queue){
return cljs.core.vreset_BANG_.call(null,queue,cljs.core.PersistentVector.EMPTY);
});
citrus.reconciler.schedule_update_BANG_ = (function citrus$reconciler$schedule_update_BANG_(schedule_BANG_,scheduled_QMARK_,f){
var temp__5457__auto___16333 = cljs.core.deref.call(null,scheduled_QMARK_);
if(cljs.core.truth_(temp__5457__auto___16333)){
var id_16334 = temp__5457__auto___16333;
cljs.core.vreset_BANG_.call(null,scheduled_QMARK_,null);

cancelAnimationFrame(id_16334);
} else {
}

return cljs.core.vreset_BANG_.call(null,scheduled_QMARK_,schedule_BANG_.call(null,f));
});

/**
 * @interface
 */
citrus.reconciler.IReconciler = function(){};

citrus.reconciler.dispatch_BANG_ = (function citrus$reconciler$dispatch_BANG_(this$,controller,event,args){
if((!((this$ == null))) && (!((this$.citrus$reconciler$IReconciler$dispatch_BANG_$arity$4 == null)))){
return this$.citrus$reconciler$IReconciler$dispatch_BANG_$arity$4(this$,controller,event,args);
} else {
var x__9121__auto__ = (((this$ == null))?null:this$);
var m__9122__auto__ = (citrus.reconciler.dispatch_BANG_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return m__9122__auto__.call(null,this$,controller,event,args);
} else {
var m__9122__auto____$1 = (citrus.reconciler.dispatch_BANG_["_"]);
if(!((m__9122__auto____$1 == null))){
return m__9122__auto____$1.call(null,this$,controller,event,args);
} else {
throw cljs.core.missing_protocol.call(null,"IReconciler.dispatch!",this$);
}
}
}
});

citrus.reconciler.dispatch_sync_BANG_ = (function citrus$reconciler$dispatch_sync_BANG_(this$,controller,event,args){
if((!((this$ == null))) && (!((this$.citrus$reconciler$IReconciler$dispatch_sync_BANG_$arity$4 == null)))){
return this$.citrus$reconciler$IReconciler$dispatch_sync_BANG_$arity$4(this$,controller,event,args);
} else {
var x__9121__auto__ = (((this$ == null))?null:this$);
var m__9122__auto__ = (citrus.reconciler.dispatch_sync_BANG_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return m__9122__auto__.call(null,this$,controller,event,args);
} else {
var m__9122__auto____$1 = (citrus.reconciler.dispatch_sync_BANG_["_"]);
if(!((m__9122__auto____$1 == null))){
return m__9122__auto____$1.call(null,this$,controller,event,args);
} else {
throw cljs.core.missing_protocol.call(null,"IReconciler.dispatch-sync!",this$);
}
}
}
});

citrus.reconciler.broadcast_BANG_ = (function citrus$reconciler$broadcast_BANG_(this$,event,args){
if((!((this$ == null))) && (!((this$.citrus$reconciler$IReconciler$broadcast_BANG_$arity$3 == null)))){
return this$.citrus$reconciler$IReconciler$broadcast_BANG_$arity$3(this$,event,args);
} else {
var x__9121__auto__ = (((this$ == null))?null:this$);
var m__9122__auto__ = (citrus.reconciler.broadcast_BANG_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return m__9122__auto__.call(null,this$,event,args);
} else {
var m__9122__auto____$1 = (citrus.reconciler.broadcast_BANG_["_"]);
if(!((m__9122__auto____$1 == null))){
return m__9122__auto____$1.call(null,this$,event,args);
} else {
throw cljs.core.missing_protocol.call(null,"IReconciler.broadcast!",this$);
}
}
}
});

citrus.reconciler.broadcast_sync_BANG_ = (function citrus$reconciler$broadcast_sync_BANG_(this$,event,args){
if((!((this$ == null))) && (!((this$.citrus$reconciler$IReconciler$broadcast_sync_BANG_$arity$3 == null)))){
return this$.citrus$reconciler$IReconciler$broadcast_sync_BANG_$arity$3(this$,event,args);
} else {
var x__9121__auto__ = (((this$ == null))?null:this$);
var m__9122__auto__ = (citrus.reconciler.broadcast_sync_BANG_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return m__9122__auto__.call(null,this$,event,args);
} else {
var m__9122__auto____$1 = (citrus.reconciler.broadcast_sync_BANG_["_"]);
if(!((m__9122__auto____$1 == null))){
return m__9122__auto____$1.call(null,this$,event,args);
} else {
throw cljs.core.missing_protocol.call(null,"IReconciler.broadcast-sync!",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {citrus.reconciler.IReconciler}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {citrus.reconciler.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
citrus.reconciler.Reconciler = (function (controllers,effect_handlers,state,queue,scheduled_QMARK_,batched_updates,chunked_updates,meta){
this.controllers = controllers;
this.effect_handlers = effect_handlers;
this.state = state;
this.queue = queue;
this.scheduled_QMARK_ = scheduled_QMARK_;
this.batched_updates = batched_updates;
this.chunked_updates = chunked_updates;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 16386;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
});
citrus.reconciler.Reconciler.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

citrus.reconciler.Reconciler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

citrus.reconciler.Reconciler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (this$__$1 === other);
});

citrus.reconciler.Reconciler.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._deref.call(null,self__.state);
});

citrus.reconciler.Reconciler.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,callback){
var self__ = this;
var this$__$1 = this;
cljs.core.add_watch.call(null,self__.state,(function (){var x__9342__auto__ = this$__$1;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),((function (this$__$1){
return (function (_,___$1,oldv,newv){
if(cljs.core.not_EQ_.call(null,oldv,newv)){
return callback.call(null,key,this$__$1,oldv,newv);
} else {
return null;
}
});})(this$__$1))
);

return this$__$1;
});

citrus.reconciler.Reconciler.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
cljs.core.remove_watch.call(null,self__.state,(function (){var x__9342__auto__ = this$__$1;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})());

return this$__$1;
});

citrus.reconciler.Reconciler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

citrus.reconciler.Reconciler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,"#object [citrus.reconciler.Reconciler ");

cljs.core.pr_writer.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),cljs.core._deref.call(null,this$__$1)], null),writer,opts);

return cljs.core._write.call(null,writer,"]");
});

citrus.reconciler.Reconciler.prototype.citrus$reconciler$IReconciler$ = cljs.core.PROTOCOL_SENTINEL;

citrus.reconciler.Reconciler.prototype.citrus$reconciler$IReconciler$dispatch_BANG_$arity$4 = (function (this$,cname,event,args){
var self__ = this;
var this$__$1 = this;
citrus.reconciler.queue_effects_BANG_.call(null,self__.queue,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cname,((function (this$__$1){
return (function (){
return cljs.core.get.call(null,self__.controllers,cname).call(null,event,args,cljs.core.get.call(null,cljs.core.deref.call(null,self__.state),cname));
});})(this$__$1))
], null));

return citrus.reconciler.schedule_update_BANG_.call(null,self__.batched_updates,self__.scheduled_QMARK_,((function (this$__$1){
return (function (){
var effects = cljs.core.map.call(null,((function (this$__$1){
return (function (p__16336){
var vec__16337 = p__16336;
var cname__$1 = cljs.core.nth.call(null,vec__16337,(0),null);
var ctrl = cljs.core.nth.call(null,vec__16337,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cname__$1,ctrl.call(null)], null);
});})(this$__$1))
,cljs.core.deref.call(null,self__.queue));
citrus.reconciler.clear_queue_BANG_.call(null,self__.queue);

var state_effects = cljs.core.filter.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.second),effects);
var other_effects = cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.seq,cljs.core.second),cljs.core.map.call(null,((function (state_effects,effects,this$__$1){
return (function (p__16340){
var vec__16341 = p__16340;
var cname__$1 = cljs.core.nth.call(null,vec__16341,(0),null);
var effect = cljs.core.nth.call(null,vec__16341,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cname__$1,cljs.core.dissoc.call(null,effect,new cljs.core.Keyword(null,"state","state",-1988618099))], null);
});})(state_effects,effects,this$__$1))
,effects));
if(cljs.core.seq.call(null,state_effects)){
cljs.core.swap_BANG_.call(null,self__.state,((function (state_effects,other_effects,effects,this$__$1){
return (function (p1__16335_SHARP_){
return cljs.core.reduce.call(null,((function (state_effects,other_effects,effects,this$__$1){
return (function (agg,p__16344){
var vec__16345 = p__16344;
var cname__$1 = cljs.core.nth.call(null,vec__16345,(0),null);
var map__16348 = cljs.core.nth.call(null,vec__16345,(1),null);
var map__16348__$1 = ((((!((map__16348 == null)))?((((map__16348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16348.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16348):map__16348);
var cstate = cljs.core.get.call(null,map__16348__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core.assoc.call(null,agg,cname__$1,cstate);
});})(state_effects,other_effects,effects,this$__$1))
,p1__16335_SHARP_,state_effects);
});})(state_effects,other_effects,effects,this$__$1))
);
} else {
}

if(cljs.core.seq.call(null,other_effects)){
var coll__16319__auto__ = effects;
var result__16320__auto__ = [];
var xs__16321__auto___16359 = coll__16319__auto__;
while(true){
var temp__5461__auto___16360 = cljs.core.first.call(null,xs__16321__auto___16359);
if((temp__5461__auto___16360 == null)){
} else {
var vec__16350_16361 = temp__5461__auto___16360;
var cname_16362__$1 = cljs.core.nth.call(null,vec__16350_16361,(0),null);
var effects_16363__$1 = cljs.core.nth.call(null,vec__16350_16361,(1),null);
result__16320__auto__.push((function (){var coll__16319__auto____$1 = effects_16363__$1;
var result__16320__auto____$1 = [];
var xs__16321__auto___16364__$1 = coll__16319__auto____$1;
while(true){
var temp__5461__auto___16365__$1 = cljs.core.first.call(null,xs__16321__auto___16364__$1);
if((temp__5461__auto___16365__$1 == null)){
} else {
var vec__16353_16366 = temp__5461__auto___16365__$1;
var id_16367 = cljs.core.nth.call(null,vec__16353_16366,(0),null);
var effect_16368 = cljs.core.nth.call(null,vec__16353_16366,(1),null);
result__16320__auto____$1.push((function (){var temp__5457__auto__ = cljs.core.get.call(null,self__.effect_handlers,id_16367);
if(cljs.core.truth_(temp__5457__auto__)){
var handler = temp__5457__auto__;
return handler.call(null,this$__$1,cname_16362__$1,effect_16368);
} else {
return null;
}
})());

var G__16369 = cljs.core.next.call(null,xs__16321__auto___16364__$1);
xs__16321__auto___16364__$1 = G__16369;
continue;
}
break;
}

return cljs.core.seq.call(null,result__16320__auto____$1);
})());

var G__16370 = cljs.core.next.call(null,xs__16321__auto___16359);
xs__16321__auto___16359 = G__16370;
continue;
}
break;
}

return cljs.core.seq.call(null,result__16320__auto__);
} else {
return null;
}
});})(this$__$1))
);
});

citrus.reconciler.Reconciler.prototype.citrus$reconciler$IReconciler$dispatch_sync_BANG_$arity$4 = (function (this$,cname,event,args){
var self__ = this;
var this$__$1 = this;
var effects = cljs.core.get.call(null,self__.controllers,cname).call(null,event,args,cljs.core.get.call(null,cljs.core.deref.call(null,self__.state),cname));
var coll__16319__auto__ = effects;
var result__16320__auto__ = [];
var xs__16321__auto___16371 = coll__16319__auto__;
while(true){
var temp__5461__auto___16372 = cljs.core.first.call(null,xs__16321__auto___16371);
if((temp__5461__auto___16372 == null)){
} else {
var vec__16356_16373 = temp__5461__auto___16372;
var id_16374 = cljs.core.nth.call(null,vec__16356_16373,(0),null);
var effect_16375 = cljs.core.nth.call(null,vec__16356_16373,(1),null);
result__16320__auto__.push((function (){var handler = cljs.core.get.call(null,self__.effect_handlers,id_16374);
if(cljs.core._EQ_.call(null,id_16374,new cljs.core.Keyword(null,"state","state",-1988618099))){
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,cname,effect_16375);
} else {
if(cljs.core.truth_(handler)){
return handler.call(null,this$__$1,cname,effect_16375);
} else {
return null;

}
}
})());

var G__16376 = cljs.core.next.call(null,xs__16321__auto___16371);
xs__16321__auto___16371 = G__16376;
continue;
}
break;
}

return cljs.core.seq.call(null,result__16320__auto__);
});

citrus.reconciler.Reconciler.prototype.citrus$reconciler$IReconciler$broadcast_BANG_$arity$3 = (function (this$,event,args){
var self__ = this;
var this$__$1 = this;
var coll__16319__auto__ = cljs.core.keys.call(null,self__.controllers);
var result__16320__auto__ = [];
var xs__16321__auto___16377 = coll__16319__auto__;
while(true){
var temp__5461__auto___16378 = cljs.core.first.call(null,xs__16321__auto___16377);
if((temp__5461__auto___16378 == null)){
} else {
var controller_16379 = temp__5461__auto___16378;
result__16320__auto__.push(citrus.reconciler.dispatch_BANG_.call(null,this$__$1,controller_16379,event,args));

var G__16380 = cljs.core.next.call(null,xs__16321__auto___16377);
xs__16321__auto___16377 = G__16380;
continue;
}
break;
}

return cljs.core.seq.call(null,result__16320__auto__);
});

citrus.reconciler.Reconciler.prototype.citrus$reconciler$IReconciler$broadcast_sync_BANG_$arity$3 = (function (this$,event,args){
var self__ = this;
var this$__$1 = this;
var coll__16319__auto__ = cljs.core.keys.call(null,self__.controllers);
var result__16320__auto__ = [];
var xs__16321__auto___16381 = coll__16319__auto__;
while(true){
var temp__5461__auto___16382 = cljs.core.first.call(null,xs__16321__auto___16381);
if((temp__5461__auto___16382 == null)){
} else {
var controller_16383 = temp__5461__auto___16382;
result__16320__auto__.push(citrus.reconciler.dispatch_sync_BANG_.call(null,this$__$1,controller_16383,event,args));

var G__16384 = cljs.core.next.call(null,xs__16321__auto___16381);
xs__16321__auto___16381 = G__16384;
continue;
}
break;
}

return cljs.core.seq.call(null,result__16320__auto__);
});

citrus.reconciler.Reconciler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"controllers","controllers",520120903,null),new cljs.core.Symbol(null,"effect-handlers","effect-handlers",-1315850333,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"queue","queue",-1198599890,null),new cljs.core.Symbol(null,"scheduled?","scheduled?",579986609,null),new cljs.core.Symbol(null,"batched-updates","batched-updates",555325354,null),new cljs.core.Symbol(null,"chunked-updates","chunked-updates",-545555697,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
});

citrus.reconciler.Reconciler.cljs$lang$type = true;

citrus.reconciler.Reconciler.cljs$lang$ctorStr = "citrus.reconciler/Reconciler";

citrus.reconciler.Reconciler.cljs$lang$ctorPrWriter = (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write.call(null,writer__9060__auto__,"citrus.reconciler/Reconciler");
});

citrus.reconciler.__GT_Reconciler = (function citrus$reconciler$__GT_Reconciler(controllers,effect_handlers,state,queue,scheduled_QMARK_,batched_updates,chunked_updates,meta){
return (new citrus.reconciler.Reconciler(controllers,effect_handlers,state,queue,scheduled_QMARK_,batched_updates,chunked_updates,meta));
});


//# sourceMappingURL=reconciler.js.map?rel=1511973567826
