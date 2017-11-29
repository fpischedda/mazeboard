// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__30230__auto__,writer__30231__auto__,opt__30232__auto__){
return cljs.core._write.call(null,writer__30231__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37710 = arguments.length;
var i__30839__auto___37711 = (0);
while(true){
if((i__30839__auto___37711 < len__30838__auto___37710)){
args__30845__auto__.push((arguments[i__30839__auto___37711]));

var G__37712 = (i__30839__auto___37711 + (1));
i__30839__auto___37711 = G__37712;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq37709){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37709));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37714 = arguments.length;
var i__30839__auto___37715 = (0);
while(true){
if((i__30839__auto___37715 < len__30838__auto___37714)){
args__30845__auto__.push((arguments[i__30839__auto___37715]));

var G__37716 = (i__30839__auto___37715 + (1));
i__30839__auto___37715 = G__37716;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq37713){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37713));
});

var g_QMARK__37717 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_37718 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__37717){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__37717))
,null));
var mkg_37719 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__37717,g_37718){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__37717,g_37718))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__37717,g_37718,mkg_37719){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__37717).call(null,x);
});})(g_QMARK__37717,g_37718,mkg_37719))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__37717,g_37718,mkg_37719){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_37719).call(null,gfn);
});})(g_QMARK__37717,g_37718,mkg_37719))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__37717,g_37718,mkg_37719){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_37718).call(null,generator);
});})(g_QMARK__37717,g_37718,mkg_37719))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__30941__auto___37739 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__30941__auto___37739){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37740 = arguments.length;
var i__30839__auto___37741 = (0);
while(true){
if((i__30839__auto___37741 < len__30838__auto___37740)){
args__30845__auto__.push((arguments[i__30839__auto___37741]));

var G__37742 = (i__30839__auto___37741 + (1));
i__30839__auto___37741 = G__37742;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30941__auto___37739))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30941__auto___37739){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30941__auto___37739),args);
});})(g__30941__auto___37739))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__30941__auto___37739){
return (function (seq37720){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37720));
});})(g__30941__auto___37739))
;


var g__30941__auto___37743 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__30941__auto___37743){
return (function cljs$spec$gen$alpha$list(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37744 = arguments.length;
var i__30839__auto___37745 = (0);
while(true){
if((i__30839__auto___37745 < len__30838__auto___37744)){
args__30845__auto__.push((arguments[i__30839__auto___37745]));

var G__37746 = (i__30839__auto___37745 + (1));
i__30839__auto___37745 = G__37746;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30941__auto___37743))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30941__auto___37743){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30941__auto___37743),args);
});})(g__30941__auto___37743))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__30941__auto___37743){
return (function (seq37721){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37721));
});})(g__30941__auto___37743))
;


var g__30941__auto___37747 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__30941__auto___37747){
return (function cljs$spec$gen$alpha$map(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37748 = arguments.length;
var i__30839__auto___37749 = (0);
while(true){
if((i__30839__auto___37749 < len__30838__auto___37748)){
args__30845__auto__.push((arguments[i__30839__auto___37749]));

var G__37750 = (i__30839__auto___37749 + (1));
i__30839__auto___37749 = G__37750;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30941__auto___37747))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30941__auto___37747){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30941__auto___37747),args);
});})(g__30941__auto___37747))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__30941__auto___37747){
return (function (seq37722){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37722));
});})(g__30941__auto___37747))
;


var g__30941__auto___37751 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__30941__auto___37751){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37752 = arguments.length;
var i__30839__auto___37753 = (0);
while(true){
if((i__30839__auto___37753 < len__30838__auto___37752)){
args__30845__auto__.push((arguments[i__30839__auto___37753]));

var G__37754 = (i__30839__auto___37753 + (1));
i__30839__auto___37753 = G__37754;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30941__auto___37751))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30941__auto___37751){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30941__auto___37751),args);
});})(g__30941__auto___37751))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__30941__auto___37751){
return (function (seq37723){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37723));
});})(g__30941__auto___37751))
;


var g__30941__auto___37755 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__30941__auto___37755){
return (function cljs$spec$gen$alpha$set(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37756 = arguments.length;
var i__30839__auto___37757 = (0);
while(true){
if((i__30839__auto___37757 < len__30838__auto___37756)){
args__30845__auto__.push((arguments[i__30839__auto___37757]));

var G__37758 = (i__30839__auto___37757 + (1));
i__30839__auto___37757 = G__37758;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30941__auto___37755))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30941__auto___37755){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30941__auto___37755),args);
});})(g__30941__auto___37755))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__30941__auto___37755){
return (function (seq37724){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37724));
});})(g__30941__auto___37755))
;


var g__30941__auto___37759 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__30941__auto___37759){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37760 = arguments.length;
var i__30839__auto___37761 = (0);
while(true){
if((i__30839__auto___37761 < len__30838__auto___37760)){
args__30845__auto__.push((arguments[i__30839__auto___37761]));

var G__37762 = (i__30839__auto___37761 + (1));
i__30839__auto___37761 = G__37762;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30941__auto___37759))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30941__auto___37759){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30941__auto___37759),args);
});})(g__30941__auto___37759))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__30941__auto___37759){
return (function (seq37725){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37725));
});})(g__30941__auto___37759))
;


var g__30941__auto___37763 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__30941__auto___37763){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37764 = arguments.length;
var i__30839__auto___37765 = (0);
while(true){
if((i__30839__auto___37765 < len__30838__auto___37764)){
args__30845__auto__.push((arguments[i__30839__auto___37765]));

var G__37766 = (i__30839__auto___37765 + (1));
i__30839__auto___37765 = G__37766;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30941__auto___37763))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30941__auto___37763){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30941__auto___37763),args);
});})(g__30941__auto___37763))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__30941__auto___37763){
return (function (seq37726){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37726));
});})(g__30941__auto___37763))
;


var g__30941__auto___37767 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__30941__auto___37767){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37768 = arguments.length;
var i__30839__auto___37769 = (0);
while(true){
if((i__30839__auto___37769 < len__30838__auto___37768)){
args__30845__auto__.push((arguments[i__30839__auto___37769]));

var G__37770 = (i__30839__auto___37769 + (1));
i__30839__auto___37769 = G__37770;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30941__auto___37767))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30941__auto___37767){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30941__auto___37767),args);
});})(g__30941__auto___37767))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__30941__auto___37767){
return (function (seq37727){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37727));
});})(g__30941__auto___37767))
;


var g__30941__auto___37771 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__30941__auto___37771){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37772 = arguments.length;
var i__30839__auto___37773 = (0);
while(true){
if((i__30839__auto___37773 < len__30838__auto___37772)){
args__30845__auto__.push((arguments[i__30839__auto___37773]));

var G__37774 = (i__30839__auto___37773 + (1));
i__30839__auto___37773 = G__37774;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30941__auto___37771))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30941__auto___37771){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30941__auto___37771),args);
});})(g__30941__auto___37771))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__30941__auto___37771){
return (function (seq37728){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37728));
});})(g__30941__auto___37771))
;


var g__30941__auto___37775 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__30941__auto___37775){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37776 = arguments.length;
var i__30839__auto___37777 = (0);
while(true){
if((i__30839__auto___37777 < len__30838__auto___37776)){
args__30845__auto__.push((arguments[i__30839__auto___37777]));

var G__37778 = (i__30839__auto___37777 + (1));
i__30839__auto___37777 = G__37778;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30941__auto___37775))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30941__auto___37775){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30941__auto___37775),args);
});})(g__30941__auto___37775))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__30941__auto___37775){
return (function (seq37729){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37729));
});})(g__30941__auto___37775))
;


var g__30941__auto___37779 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__30941__auto___37779){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37780 = arguments.length;
var i__30839__auto___37781 = (0);
while(true){
if((i__30839__auto___37781 < len__30838__auto___37780)){
args__30845__auto__.push((arguments[i__30839__auto___37781]));

var G__37782 = (i__30839__auto___37781 + (1));
i__30839__auto___37781 = G__37782;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30941__auto___37779))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30941__auto___37779){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30941__auto___37779),args);
});})(g__30941__auto___37779))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__30941__auto___37779){
return (function (seq37730){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37730));
});})(g__30941__auto___37779))
;


var g__30941__auto___37783 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__30941__auto___37783){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37784 = arguments.length;
var i__30839__auto___37785 = (0);
while(true){
if((i__30839__auto___37785 < len__30838__auto___37784)){
args__30845__auto__.push((arguments[i__30839__auto___37785]));

var G__37786 = (i__30839__auto___37785 + (1));
i__30839__auto___37785 = G__37786;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30941__auto___37783))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30941__auto___37783){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30941__auto___37783),args);
});})(g__30941__auto___37783))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__30941__auto___37783){
return (function (seq37731){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37731));
});})(g__30941__auto___37783))
;


var g__30941__auto___37787 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__30941__auto___37787){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37788 = arguments.length;
var i__30839__auto___37789 = (0);
while(true){
if((i__30839__auto___37789 < len__30838__auto___37788)){
args__30845__auto__.push((arguments[i__30839__auto___37789]));

var G__37790 = (i__30839__auto___37789 + (1));
i__30839__auto___37789 = G__37790;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30941__auto___37787))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30941__auto___37787){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30941__auto___37787),args);
});})(g__30941__auto___37787))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__30941__auto___37787){
return (function (seq37732){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37732));
});})(g__30941__auto___37787))
;


var g__30941__auto___37791 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__30941__auto___37791){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37792 = arguments.length;
var i__30839__auto___37793 = (0);
while(true){
if((i__30839__auto___37793 < len__30838__auto___37792)){
args__30845__auto__.push((arguments[i__30839__auto___37793]));

var G__37794 = (i__30839__auto___37793 + (1));
i__30839__auto___37793 = G__37794;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30941__auto___37791))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30941__auto___37791){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30941__auto___37791),args);
});})(g__30941__auto___37791))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__30941__auto___37791){
return (function (seq37733){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37733));
});})(g__30941__auto___37791))
;


var g__30941__auto___37795 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__30941__auto___37795){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37796 = arguments.length;
var i__30839__auto___37797 = (0);
while(true){
if((i__30839__auto___37797 < len__30838__auto___37796)){
args__30845__auto__.push((arguments[i__30839__auto___37797]));

var G__37798 = (i__30839__auto___37797 + (1));
i__30839__auto___37797 = G__37798;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30941__auto___37795))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30941__auto___37795){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30941__auto___37795),args);
});})(g__30941__auto___37795))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__30941__auto___37795){
return (function (seq37734){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37734));
});})(g__30941__auto___37795))
;


var g__30941__auto___37799 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__30941__auto___37799){
return (function cljs$spec$gen$alpha$return(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37800 = arguments.length;
var i__30839__auto___37801 = (0);
while(true){
if((i__30839__auto___37801 < len__30838__auto___37800)){
args__30845__auto__.push((arguments[i__30839__auto___37801]));

var G__37802 = (i__30839__auto___37801 + (1));
i__30839__auto___37801 = G__37802;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30941__auto___37799))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30941__auto___37799){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30941__auto___37799),args);
});})(g__30941__auto___37799))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__30941__auto___37799){
return (function (seq37735){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37735));
});})(g__30941__auto___37799))
;


var g__30941__auto___37803 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__30941__auto___37803){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37804 = arguments.length;
var i__30839__auto___37805 = (0);
while(true){
if((i__30839__auto___37805 < len__30838__auto___37804)){
args__30845__auto__.push((arguments[i__30839__auto___37805]));

var G__37806 = (i__30839__auto___37805 + (1));
i__30839__auto___37805 = G__37806;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30941__auto___37803))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30941__auto___37803){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30941__auto___37803),args);
});})(g__30941__auto___37803))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__30941__auto___37803){
return (function (seq37736){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37736));
});})(g__30941__auto___37803))
;


var g__30941__auto___37807 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__30941__auto___37807){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37808 = arguments.length;
var i__30839__auto___37809 = (0);
while(true){
if((i__30839__auto___37809 < len__30838__auto___37808)){
args__30845__auto__.push((arguments[i__30839__auto___37809]));

var G__37810 = (i__30839__auto___37809 + (1));
i__30839__auto___37809 = G__37810;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30941__auto___37807))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30941__auto___37807){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30941__auto___37807),args);
});})(g__30941__auto___37807))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__30941__auto___37807){
return (function (seq37737){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37737));
});})(g__30941__auto___37807))
;


var g__30941__auto___37811 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__30941__auto___37811){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37812 = arguments.length;
var i__30839__auto___37813 = (0);
while(true){
if((i__30839__auto___37813 < len__30838__auto___37812)){
args__30845__auto__.push((arguments[i__30839__auto___37813]));

var G__37814 = (i__30839__auto___37813 + (1));
i__30839__auto___37813 = G__37814;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30941__auto___37811))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30941__auto___37811){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30941__auto___37811),args);
});})(g__30941__auto___37811))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__30941__auto___37811){
return (function (seq37738){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37738));
});})(g__30941__auto___37811))
;

var g__30954__auto___37836 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__30954__auto___37836){
return (function cljs$spec$gen$alpha$any(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37837 = arguments.length;
var i__30839__auto___37838 = (0);
while(true){
if((i__30839__auto___37838 < len__30838__auto___37837)){
args__30845__auto__.push((arguments[i__30839__auto___37838]));

var G__37839 = (i__30839__auto___37838 + (1));
i__30839__auto___37838 = G__37839;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30954__auto___37836))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30954__auto___37836){
return (function (args){
return cljs.core.deref.call(null,g__30954__auto___37836);
});})(g__30954__auto___37836))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__30954__auto___37836){
return (function (seq37815){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37815));
});})(g__30954__auto___37836))
;


var g__30954__auto___37840 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__30954__auto___37840){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37841 = arguments.length;
var i__30839__auto___37842 = (0);
while(true){
if((i__30839__auto___37842 < len__30838__auto___37841)){
args__30845__auto__.push((arguments[i__30839__auto___37842]));

var G__37843 = (i__30839__auto___37842 + (1));
i__30839__auto___37842 = G__37843;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30954__auto___37840))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30954__auto___37840){
return (function (args){
return cljs.core.deref.call(null,g__30954__auto___37840);
});})(g__30954__auto___37840))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__30954__auto___37840){
return (function (seq37816){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37816));
});})(g__30954__auto___37840))
;


var g__30954__auto___37844 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__30954__auto___37844){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37845 = arguments.length;
var i__30839__auto___37846 = (0);
while(true){
if((i__30839__auto___37846 < len__30838__auto___37845)){
args__30845__auto__.push((arguments[i__30839__auto___37846]));

var G__37847 = (i__30839__auto___37846 + (1));
i__30839__auto___37846 = G__37847;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30954__auto___37844))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30954__auto___37844){
return (function (args){
return cljs.core.deref.call(null,g__30954__auto___37844);
});})(g__30954__auto___37844))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__30954__auto___37844){
return (function (seq37817){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37817));
});})(g__30954__auto___37844))
;


var g__30954__auto___37848 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__30954__auto___37848){
return (function cljs$spec$gen$alpha$char(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37849 = arguments.length;
var i__30839__auto___37850 = (0);
while(true){
if((i__30839__auto___37850 < len__30838__auto___37849)){
args__30845__auto__.push((arguments[i__30839__auto___37850]));

var G__37851 = (i__30839__auto___37850 + (1));
i__30839__auto___37850 = G__37851;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30954__auto___37848))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30954__auto___37848){
return (function (args){
return cljs.core.deref.call(null,g__30954__auto___37848);
});})(g__30954__auto___37848))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__30954__auto___37848){
return (function (seq37818){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37818));
});})(g__30954__auto___37848))
;


var g__30954__auto___37852 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__30954__auto___37852){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37853 = arguments.length;
var i__30839__auto___37854 = (0);
while(true){
if((i__30839__auto___37854 < len__30838__auto___37853)){
args__30845__auto__.push((arguments[i__30839__auto___37854]));

var G__37855 = (i__30839__auto___37854 + (1));
i__30839__auto___37854 = G__37855;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30954__auto___37852))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30954__auto___37852){
return (function (args){
return cljs.core.deref.call(null,g__30954__auto___37852);
});})(g__30954__auto___37852))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__30954__auto___37852){
return (function (seq37819){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37819));
});})(g__30954__auto___37852))
;


var g__30954__auto___37856 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__30954__auto___37856){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37857 = arguments.length;
var i__30839__auto___37858 = (0);
while(true){
if((i__30839__auto___37858 < len__30838__auto___37857)){
args__30845__auto__.push((arguments[i__30839__auto___37858]));

var G__37859 = (i__30839__auto___37858 + (1));
i__30839__auto___37858 = G__37859;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30954__auto___37856))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30954__auto___37856){
return (function (args){
return cljs.core.deref.call(null,g__30954__auto___37856);
});})(g__30954__auto___37856))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__30954__auto___37856){
return (function (seq37820){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37820));
});})(g__30954__auto___37856))
;


var g__30954__auto___37860 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__30954__auto___37860){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37861 = arguments.length;
var i__30839__auto___37862 = (0);
while(true){
if((i__30839__auto___37862 < len__30838__auto___37861)){
args__30845__auto__.push((arguments[i__30839__auto___37862]));

var G__37863 = (i__30839__auto___37862 + (1));
i__30839__auto___37862 = G__37863;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30954__auto___37860))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30954__auto___37860){
return (function (args){
return cljs.core.deref.call(null,g__30954__auto___37860);
});})(g__30954__auto___37860))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__30954__auto___37860){
return (function (seq37821){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37821));
});})(g__30954__auto___37860))
;


var g__30954__auto___37864 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__30954__auto___37864){
return (function cljs$spec$gen$alpha$double(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37865 = arguments.length;
var i__30839__auto___37866 = (0);
while(true){
if((i__30839__auto___37866 < len__30838__auto___37865)){
args__30845__auto__.push((arguments[i__30839__auto___37866]));

var G__37867 = (i__30839__auto___37866 + (1));
i__30839__auto___37866 = G__37867;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30954__auto___37864))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30954__auto___37864){
return (function (args){
return cljs.core.deref.call(null,g__30954__auto___37864);
});})(g__30954__auto___37864))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__30954__auto___37864){
return (function (seq37822){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37822));
});})(g__30954__auto___37864))
;


var g__30954__auto___37868 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__30954__auto___37868){
return (function cljs$spec$gen$alpha$int(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37869 = arguments.length;
var i__30839__auto___37870 = (0);
while(true){
if((i__30839__auto___37870 < len__30838__auto___37869)){
args__30845__auto__.push((arguments[i__30839__auto___37870]));

var G__37871 = (i__30839__auto___37870 + (1));
i__30839__auto___37870 = G__37871;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30954__auto___37868))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30954__auto___37868){
return (function (args){
return cljs.core.deref.call(null,g__30954__auto___37868);
});})(g__30954__auto___37868))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__30954__auto___37868){
return (function (seq37823){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37823));
});})(g__30954__auto___37868))
;


var g__30954__auto___37872 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__30954__auto___37872){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37873 = arguments.length;
var i__30839__auto___37874 = (0);
while(true){
if((i__30839__auto___37874 < len__30838__auto___37873)){
args__30845__auto__.push((arguments[i__30839__auto___37874]));

var G__37875 = (i__30839__auto___37874 + (1));
i__30839__auto___37874 = G__37875;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30954__auto___37872))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30954__auto___37872){
return (function (args){
return cljs.core.deref.call(null,g__30954__auto___37872);
});})(g__30954__auto___37872))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__30954__auto___37872){
return (function (seq37824){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37824));
});})(g__30954__auto___37872))
;


var g__30954__auto___37876 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__30954__auto___37876){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37877 = arguments.length;
var i__30839__auto___37878 = (0);
while(true){
if((i__30839__auto___37878 < len__30838__auto___37877)){
args__30845__auto__.push((arguments[i__30839__auto___37878]));

var G__37879 = (i__30839__auto___37878 + (1));
i__30839__auto___37878 = G__37879;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30954__auto___37876))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30954__auto___37876){
return (function (args){
return cljs.core.deref.call(null,g__30954__auto___37876);
});})(g__30954__auto___37876))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__30954__auto___37876){
return (function (seq37825){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37825));
});})(g__30954__auto___37876))
;


var g__30954__auto___37880 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__30954__auto___37880){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37881 = arguments.length;
var i__30839__auto___37882 = (0);
while(true){
if((i__30839__auto___37882 < len__30838__auto___37881)){
args__30845__auto__.push((arguments[i__30839__auto___37882]));

var G__37883 = (i__30839__auto___37882 + (1));
i__30839__auto___37882 = G__37883;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30954__auto___37880))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30954__auto___37880){
return (function (args){
return cljs.core.deref.call(null,g__30954__auto___37880);
});})(g__30954__auto___37880))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__30954__auto___37880){
return (function (seq37826){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37826));
});})(g__30954__auto___37880))
;


var g__30954__auto___37884 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__30954__auto___37884){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37885 = arguments.length;
var i__30839__auto___37886 = (0);
while(true){
if((i__30839__auto___37886 < len__30838__auto___37885)){
args__30845__auto__.push((arguments[i__30839__auto___37886]));

var G__37887 = (i__30839__auto___37886 + (1));
i__30839__auto___37886 = G__37887;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30954__auto___37884))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30954__auto___37884){
return (function (args){
return cljs.core.deref.call(null,g__30954__auto___37884);
});})(g__30954__auto___37884))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__30954__auto___37884){
return (function (seq37827){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37827));
});})(g__30954__auto___37884))
;


var g__30954__auto___37888 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__30954__auto___37888){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37889 = arguments.length;
var i__30839__auto___37890 = (0);
while(true){
if((i__30839__auto___37890 < len__30838__auto___37889)){
args__30845__auto__.push((arguments[i__30839__auto___37890]));

var G__37891 = (i__30839__auto___37890 + (1));
i__30839__auto___37890 = G__37891;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30954__auto___37888))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30954__auto___37888){
return (function (args){
return cljs.core.deref.call(null,g__30954__auto___37888);
});})(g__30954__auto___37888))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__30954__auto___37888){
return (function (seq37828){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37828));
});})(g__30954__auto___37888))
;


var g__30954__auto___37892 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__30954__auto___37892){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37893 = arguments.length;
var i__30839__auto___37894 = (0);
while(true){
if((i__30839__auto___37894 < len__30838__auto___37893)){
args__30845__auto__.push((arguments[i__30839__auto___37894]));

var G__37895 = (i__30839__auto___37894 + (1));
i__30839__auto___37894 = G__37895;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30954__auto___37892))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30954__auto___37892){
return (function (args){
return cljs.core.deref.call(null,g__30954__auto___37892);
});})(g__30954__auto___37892))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__30954__auto___37892){
return (function (seq37829){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37829));
});})(g__30954__auto___37892))
;


var g__30954__auto___37896 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__30954__auto___37896){
return (function cljs$spec$gen$alpha$string(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37897 = arguments.length;
var i__30839__auto___37898 = (0);
while(true){
if((i__30839__auto___37898 < len__30838__auto___37897)){
args__30845__auto__.push((arguments[i__30839__auto___37898]));

var G__37899 = (i__30839__auto___37898 + (1));
i__30839__auto___37898 = G__37899;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30954__auto___37896))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30954__auto___37896){
return (function (args){
return cljs.core.deref.call(null,g__30954__auto___37896);
});})(g__30954__auto___37896))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__30954__auto___37896){
return (function (seq37830){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37830));
});})(g__30954__auto___37896))
;


var g__30954__auto___37900 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__30954__auto___37900){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37901 = arguments.length;
var i__30839__auto___37902 = (0);
while(true){
if((i__30839__auto___37902 < len__30838__auto___37901)){
args__30845__auto__.push((arguments[i__30839__auto___37902]));

var G__37903 = (i__30839__auto___37902 + (1));
i__30839__auto___37902 = G__37903;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30954__auto___37900))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30954__auto___37900){
return (function (args){
return cljs.core.deref.call(null,g__30954__auto___37900);
});})(g__30954__auto___37900))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__30954__auto___37900){
return (function (seq37831){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37831));
});})(g__30954__auto___37900))
;


var g__30954__auto___37904 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__30954__auto___37904){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37905 = arguments.length;
var i__30839__auto___37906 = (0);
while(true){
if((i__30839__auto___37906 < len__30838__auto___37905)){
args__30845__auto__.push((arguments[i__30839__auto___37906]));

var G__37907 = (i__30839__auto___37906 + (1));
i__30839__auto___37906 = G__37907;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30954__auto___37904))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30954__auto___37904){
return (function (args){
return cljs.core.deref.call(null,g__30954__auto___37904);
});})(g__30954__auto___37904))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__30954__auto___37904){
return (function (seq37832){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37832));
});})(g__30954__auto___37904))
;


var g__30954__auto___37908 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__30954__auto___37908){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37909 = arguments.length;
var i__30839__auto___37910 = (0);
while(true){
if((i__30839__auto___37910 < len__30838__auto___37909)){
args__30845__auto__.push((arguments[i__30839__auto___37910]));

var G__37911 = (i__30839__auto___37910 + (1));
i__30839__auto___37910 = G__37911;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30954__auto___37908))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30954__auto___37908){
return (function (args){
return cljs.core.deref.call(null,g__30954__auto___37908);
});})(g__30954__auto___37908))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__30954__auto___37908){
return (function (seq37833){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37833));
});})(g__30954__auto___37908))
;


var g__30954__auto___37912 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__30954__auto___37912){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37913 = arguments.length;
var i__30839__auto___37914 = (0);
while(true){
if((i__30839__auto___37914 < len__30838__auto___37913)){
args__30845__auto__.push((arguments[i__30839__auto___37914]));

var G__37915 = (i__30839__auto___37914 + (1));
i__30839__auto___37914 = G__37915;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30954__auto___37912))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30954__auto___37912){
return (function (args){
return cljs.core.deref.call(null,g__30954__auto___37912);
});})(g__30954__auto___37912))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__30954__auto___37912){
return (function (seq37834){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37834));
});})(g__30954__auto___37912))
;


var g__30954__auto___37916 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__30954__auto___37916){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37917 = arguments.length;
var i__30839__auto___37918 = (0);
while(true){
if((i__30839__auto___37918 < len__30838__auto___37917)){
args__30845__auto__.push((arguments[i__30839__auto___37918]));

var G__37919 = (i__30839__auto___37918 + (1));
i__30839__auto___37918 = G__37919;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});})(g__30954__auto___37916))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30954__auto___37916){
return (function (args){
return cljs.core.deref.call(null,g__30954__auto___37916);
});})(g__30954__auto___37916))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__30954__auto___37916){
return (function (seq37835){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37835));
});})(g__30954__auto___37916))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__30845__auto__ = [];
var len__30838__auto___37922 = arguments.length;
var i__30839__auto___37923 = (0);
while(true){
if((i__30839__auto___37923 < len__30838__auto___37922)){
args__30845__auto__.push((arguments[i__30839__auto___37923]));

var G__37924 = (i__30839__auto___37923 + (1));
i__30839__auto___37923 = G__37924;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__37920_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__37920_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq37921){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37921));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__37925_SHARP_){
return (new Date(p1__37925_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1511975276006
