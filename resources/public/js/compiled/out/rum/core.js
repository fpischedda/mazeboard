// Compiled by ClojureScript 1.9.946 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__11593_SHARP_,p2__11592_SHARP_){
return p2__11592_SHARP_.call(null,p1__11593_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
return React.createClass(cljs.core.clj__GT_js.call(null,rum.util.filter_vals.call(null,cljs.core.some_QMARK_,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"getChildContext","getChildContext",-1321948108),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),display_name,((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,(next_props[":rum/initial-state"]));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__11595_SHARP_,p2__11594_SHARP_){
return p2__11594_SHARP_.call(null,old_state,p1__11595_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__8388__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__11596_SHARP_){
return p1__11596_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,should_update);
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__11598 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__11598,(0),null);
var next_state = cljs.core.nth.call(null,vec__11598,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__11597_SHARP_){
return p1__11597_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var props = this$.props;
var state = rum.util.call_all.call(null,cljs.core.assoc.call(null,(props[":rum/initial-state"]),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props);
return ({":rum/state": cljs.core.volatile_BANG_.call(null,state)});
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
)]),class_props))));
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((!((key_fn == null)))?((function (class$,key_fn){
return (function() { 
var G__11601__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__11601 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11602__i = 0, G__11602__a = new Array(arguments.length -  0);
while (G__11602__i < G__11602__a.length) {G__11602__a[G__11602__i] = arguments[G__11602__i + 0]; ++G__11602__i;}
  args = new cljs.core.IndexedSeq(G__11602__a,0,null);
} 
return G__11601__delegate.call(this,args);};
G__11601.cljs$lang$maxFixedArity = 0;
G__11601.cljs$lang$applyTo = (function (arglist__11603){
var args = cljs.core.seq(arglist__11603);
return G__11601__delegate(args);
});
G__11601.cljs$core$IFn$_invoke$arity$variadic = G__11601__delegate;
return G__11601;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__11604__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__11604 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11605__i = 0, G__11605__a = new Array(arguments.length -  0);
while (G__11605__i < G__11605__a.length) {G__11605__a[G__11605__i] = arguments[G__11605__i + 0]; ++G__11605__i;}
  args = new cljs.core.IndexedSeq(G__11605__a,0,null);
} 
return G__11604__delegate.call(this,args);};
G__11604.cljs$lang$maxFixedArity = 0;
G__11604.cljs$lang$applyTo = (function (arglist__11606){
var args = cljs.core.seq(arglist__11606);
return G__11604__delegate(args);
});
G__11604.cljs$core$IFn$_invoke$arity$variadic = G__11604__delegate;
return G__11604;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__11607__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__11607 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11608__i = 0, G__11608__a = new Array(arguments.length -  0);
while (G__11608__i < G__11608__a.length) {G__11608__a[G__11608__i] = arguments[G__11608__i + 0]; ++G__11608__i;}
  args = new cljs.core.IndexedSeq(G__11608__a,0,null);
} 
return G__11607__delegate.call(this,args);};
G__11607.cljs$lang$maxFixedArity = 0;
G__11607.cljs$lang$applyTo = (function (arglist__11609){
var args = cljs.core.seq(arglist__11609);
return G__11607__delegate(args);
});
G__11607.cljs$core$IFn$_invoke$arity$variadic = G__11607__delegate;
return G__11607;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__8388__auto__ = (function (){var and__8376__auto__ = typeof window !== 'undefined';
if(and__8376__auto__){
var or__8388__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
var or__8388__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__8388__auto____$1)){
return or__8388__auto____$1;
} else {
var or__8388__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__8388__auto____$2)){
return or__8388__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__8376__auto__;
}
})();
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return ((function (or__8388__auto__){
return (function (p1__11610_SHARP_){
return setTimeout(p1__11610_SHARP_,(16));
});
;})(or__8388__auto__))
}
})();
rum.core.batch = (function (){var or__8388__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
var or__8388__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__8388__auto____$1)){
return or__8388__auto____$1;
} else {
return ((function (or__8388__auto____$1,or__8388__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__8388__auto____$1,or__8388__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__11611 = cljs.core.seq.call(null,queue);
var chunk__11613 = null;
var count__11614 = (0);
var i__11615 = (0);
while(true){
if((i__11615 < count__11614)){
var comp = cljs.core._nth.call(null,chunk__11613,i__11615);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__11617 = seq__11611;
var G__11618 = chunk__11613;
var G__11619 = count__11614;
var G__11620 = (i__11615 + (1));
seq__11611 = G__11617;
chunk__11613 = G__11618;
count__11614 = G__11619;
i__11615 = G__11620;
continue;
} else {
var G__11621 = seq__11611;
var G__11622 = chunk__11613;
var G__11623 = count__11614;
var G__11624 = (i__11615 + (1));
seq__11611 = G__11621;
chunk__11613 = G__11622;
count__11614 = G__11623;
i__11615 = G__11624;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__11611);
if(temp__5457__auto__){
var seq__11611__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11611__$1)){
var c__9319__auto__ = cljs.core.chunk_first.call(null,seq__11611__$1);
var G__11625 = cljs.core.chunk_rest.call(null,seq__11611__$1);
var G__11626 = c__9319__auto__;
var G__11627 = cljs.core.count.call(null,c__9319__auto__);
var G__11628 = (0);
seq__11611 = G__11625;
chunk__11613 = G__11626;
count__11614 = G__11627;
i__11615 = G__11628;
continue;
} else {
var comp = cljs.core.first.call(null,seq__11611__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__11629 = cljs.core.next.call(null,seq__11611__$1);
var G__11630 = null;
var G__11631 = (0);
var G__11632 = (0);
seq__11611 = G__11629;
chunk__11613 = G__11630;
count__11614 = G__11631;
i__11615 = G__11632;
continue;
} else {
var G__11633 = cljs.core.next.call(null,seq__11611__$1);
var G__11634 = null;
var G__11635 = (0);
var G__11636 = (0);
seq__11611 = G__11633;
chunk__11613 = G__11634;
count__11614 = G__11635;
i__11615 = G__11636;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var G__11638 = arguments.length;
switch (G__11638) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_11640 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__11641 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__11641,(0),null);
var next_state = cljs.core.nth.call(null,vec__11641,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__11644_11656 = cljs.core.seq.call(null,old_reactions);
var chunk__11645_11657 = null;
var count__11646_11658 = (0);
var i__11647_11659 = (0);
while(true){
if((i__11647_11659 < count__11646_11658)){
var ref_11660 = cljs.core._nth.call(null,chunk__11645_11657,i__11647_11659);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_11660)){
} else {
cljs.core.remove_watch.call(null,ref_11660,key);
}

var G__11661 = seq__11644_11656;
var G__11662 = chunk__11645_11657;
var G__11663 = count__11646_11658;
var G__11664 = (i__11647_11659 + (1));
seq__11644_11656 = G__11661;
chunk__11645_11657 = G__11662;
count__11646_11658 = G__11663;
i__11647_11659 = G__11664;
continue;
} else {
var temp__5457__auto___11665 = cljs.core.seq.call(null,seq__11644_11656);
if(temp__5457__auto___11665){
var seq__11644_11666__$1 = temp__5457__auto___11665;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11644_11666__$1)){
var c__9319__auto___11667 = cljs.core.chunk_first.call(null,seq__11644_11666__$1);
var G__11668 = cljs.core.chunk_rest.call(null,seq__11644_11666__$1);
var G__11669 = c__9319__auto___11667;
var G__11670 = cljs.core.count.call(null,c__9319__auto___11667);
var G__11671 = (0);
seq__11644_11656 = G__11668;
chunk__11645_11657 = G__11669;
count__11646_11658 = G__11670;
i__11647_11659 = G__11671;
continue;
} else {
var ref_11672 = cljs.core.first.call(null,seq__11644_11666__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_11672)){
} else {
cljs.core.remove_watch.call(null,ref_11672,key);
}

var G__11673 = cljs.core.next.call(null,seq__11644_11666__$1);
var G__11674 = null;
var G__11675 = (0);
var G__11676 = (0);
seq__11644_11656 = G__11673;
chunk__11645_11657 = G__11674;
count__11646_11658 = G__11675;
i__11647_11659 = G__11676;
continue;
}
} else {
}
}
break;
}

var seq__11648_11677 = cljs.core.seq.call(null,new_reactions);
var chunk__11649_11678 = null;
var count__11650_11679 = (0);
var i__11651_11680 = (0);
while(true){
if((i__11651_11680 < count__11650_11679)){
var ref_11681 = cljs.core._nth.call(null,chunk__11649_11678,i__11651_11680);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_11681)){
} else {
cljs.core.add_watch.call(null,ref_11681,key,((function (seq__11648_11677,chunk__11649_11678,count__11650_11679,i__11651_11680,ref_11681,comp,old_reactions,vec__11641,dom,next_state,new_reactions,key,_STAR_reactions_STAR_11640){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__11648_11677,chunk__11649_11678,count__11650_11679,i__11651_11680,ref_11681,comp,old_reactions,vec__11641,dom,next_state,new_reactions,key,_STAR_reactions_STAR_11640))
);
}

var G__11682 = seq__11648_11677;
var G__11683 = chunk__11649_11678;
var G__11684 = count__11650_11679;
var G__11685 = (i__11651_11680 + (1));
seq__11648_11677 = G__11682;
chunk__11649_11678 = G__11683;
count__11650_11679 = G__11684;
i__11651_11680 = G__11685;
continue;
} else {
var temp__5457__auto___11686 = cljs.core.seq.call(null,seq__11648_11677);
if(temp__5457__auto___11686){
var seq__11648_11687__$1 = temp__5457__auto___11686;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11648_11687__$1)){
var c__9319__auto___11688 = cljs.core.chunk_first.call(null,seq__11648_11687__$1);
var G__11689 = cljs.core.chunk_rest.call(null,seq__11648_11687__$1);
var G__11690 = c__9319__auto___11688;
var G__11691 = cljs.core.count.call(null,c__9319__auto___11688);
var G__11692 = (0);
seq__11648_11677 = G__11689;
chunk__11649_11678 = G__11690;
count__11650_11679 = G__11691;
i__11651_11680 = G__11692;
continue;
} else {
var ref_11693 = cljs.core.first.call(null,seq__11648_11687__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_11693)){
} else {
cljs.core.add_watch.call(null,ref_11693,key,((function (seq__11648_11677,chunk__11649_11678,count__11650_11679,i__11651_11680,ref_11693,seq__11648_11687__$1,temp__5457__auto___11686,comp,old_reactions,vec__11641,dom,next_state,new_reactions,key,_STAR_reactions_STAR_11640){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__11648_11677,chunk__11649_11678,count__11650_11679,i__11651_11680,ref_11693,seq__11648_11687__$1,temp__5457__auto___11686,comp,old_reactions,vec__11641,dom,next_state,new_reactions,key,_STAR_reactions_STAR_11640))
);
}

var G__11694 = cljs.core.next.call(null,seq__11648_11687__$1);
var G__11695 = null;
var G__11696 = (0);
var G__11697 = (0);
seq__11648_11677 = G__11694;
chunk__11649_11678 = G__11695;
count__11650_11679 = G__11696;
i__11651_11680 = G__11697;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_11640;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_11698 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__11652_11699 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__11653_11700 = null;
var count__11654_11701 = (0);
var i__11655_11702 = (0);
while(true){
if((i__11655_11702 < count__11654_11701)){
var ref_11703 = cljs.core._nth.call(null,chunk__11653_11700,i__11655_11702);
cljs.core.remove_watch.call(null,ref_11703,key_11698);

var G__11704 = seq__11652_11699;
var G__11705 = chunk__11653_11700;
var G__11706 = count__11654_11701;
var G__11707 = (i__11655_11702 + (1));
seq__11652_11699 = G__11704;
chunk__11653_11700 = G__11705;
count__11654_11701 = G__11706;
i__11655_11702 = G__11707;
continue;
} else {
var temp__5457__auto___11708 = cljs.core.seq.call(null,seq__11652_11699);
if(temp__5457__auto___11708){
var seq__11652_11709__$1 = temp__5457__auto___11708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11652_11709__$1)){
var c__9319__auto___11710 = cljs.core.chunk_first.call(null,seq__11652_11709__$1);
var G__11711 = cljs.core.chunk_rest.call(null,seq__11652_11709__$1);
var G__11712 = c__9319__auto___11710;
var G__11713 = cljs.core.count.call(null,c__9319__auto___11710);
var G__11714 = (0);
seq__11652_11699 = G__11711;
chunk__11653_11700 = G__11712;
count__11654_11701 = G__11713;
i__11655_11702 = G__11714;
continue;
} else {
var ref_11715 = cljs.core.first.call(null,seq__11652_11709__$1);
cljs.core.remove_watch.call(null,ref_11715,key_11698);

var G__11716 = cljs.core.next.call(null,seq__11652_11709__$1);
var G__11717 = null;
var G__11718 = (0);
var G__11719 = (0);
seq__11652_11699 = G__11716;
chunk__11653_11700 = G__11717;
count__11654_11701 = G__11718;
i__11655_11702 = G__11719;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__9674__auto__ = [];
var len__9667__auto___11726 = arguments.length;
var i__9668__auto___11727 = (0);
while(true){
if((i__9668__auto___11727 < len__9667__auto___11726)){
args__9674__auto__.push((arguments[i__9668__auto___11727]));

var G__11728 = (i__9668__auto___11727 + (1));
i__9668__auto___11727 = G__11728;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((2) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9675__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__11723){
var map__11724 = p__11723;
var map__11724__$1 = ((((!((map__11724 == null)))?((((map__11724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11724.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11724):map__11724);
var options = map__11724__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq11720){
var G__11721 = cljs.core.first.call(null,seq11720);
var seq11720__$1 = cljs.core.next.call(null,seq11720);
var G__11722 = cljs.core.first.call(null,seq11720__$1);
var seq11720__$2 = cljs.core.next.call(null,seq11720__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__11721,G__11722,seq11720__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__9674__auto__ = [];
var len__9667__auto___11732 = arguments.length;
var i__9668__auto___11733 = (0);
while(true){
if((i__9668__auto___11733 < len__9667__auto___11732)){
args__9674__auto__.push((arguments[i__9668__auto___11733]));

var G__11734 = (i__9668__auto___11733 + (1));
i__9668__auto___11733 = G__11734;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((2) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9675__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq11729){
var G__11730 = cljs.core.first.call(null,seq11729);
var seq11729__$1 = cljs.core.next.call(null,seq11729);
var G__11731 = cljs.core.first.call(null,seq11729__$1);
var seq11729__$2 = cljs.core.next.call(null,seq11729__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__11730,G__11731,seq11729__$2);
});


//# sourceMappingURL=core.js.map?rel=1511973560544
