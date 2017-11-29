// Compiled by ClojureScript 1.9.946 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__11017__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__11014 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__11015 = cljs.core.seq.call(null,vec__11014);
var first__11016 = cljs.core.first.call(null,seq__11015);
var seq__11015__$1 = cljs.core.next.call(null,seq__11015);
var tag = first__11016;
var body = seq__11015__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__11017 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11018__i = 0, G__11018__a = new Array(arguments.length -  0);
while (G__11018__i < G__11018__a.length) {G__11018__a[G__11018__i] = arguments[G__11018__i + 0]; ++G__11018__i;}
  args = new cljs.core.IndexedSeq(G__11018__a,0,null);
} 
return G__11017__delegate.call(this,args);};
G__11017.cljs$lang$maxFixedArity = 0;
G__11017.cljs$lang$applyTo = (function (arglist__11019){
var args = cljs.core.seq(arglist__11019);
return G__11017__delegate(args);
});
G__11017.cljs$core$IFn$_invoke$arity$variadic = G__11017__delegate;
return G__11017;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__9270__auto__ = (function sablono$core$update_arglists_$_iter__11020(s__11021){
return (new cljs.core.LazySeq(null,(function (){
var s__11021__$1 = s__11021;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__11021__$1);
if(temp__5457__auto__){
var s__11021__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11021__$2)){
var c__9268__auto__ = cljs.core.chunk_first.call(null,s__11021__$2);
var size__9269__auto__ = cljs.core.count.call(null,c__9268__auto__);
var b__11023 = cljs.core.chunk_buffer.call(null,size__9269__auto__);
if((function (){var i__11022 = (0);
while(true){
if((i__11022 < size__9269__auto__)){
var args = cljs.core._nth.call(null,c__9268__auto__,i__11022);
cljs.core.chunk_append.call(null,b__11023,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__11024 = (i__11022 + (1));
i__11022 = G__11024;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11023),sablono$core$update_arglists_$_iter__11020.call(null,cljs.core.chunk_rest.call(null,s__11021__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11023),null);
}
} else {
var args = cljs.core.first.call(null,s__11021__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__11020.call(null,cljs.core.rest.call(null,s__11021__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9270__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__9674__auto__ = [];
var len__9667__auto___11030 = arguments.length;
var i__9668__auto___11031 = (0);
while(true){
if((i__9668__auto___11031 < len__9667__auto___11030)){
args__9674__auto__.push((arguments[i__9668__auto___11031]));

var G__11032 = (i__9668__auto___11031 + (1));
i__9668__auto___11031 = G__11032;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__9270__auto__ = (function sablono$core$iter__11026(s__11027){
return (new cljs.core.LazySeq(null,(function (){
var s__11027__$1 = s__11027;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__11027__$1);
if(temp__5457__auto__){
var s__11027__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11027__$2)){
var c__9268__auto__ = cljs.core.chunk_first.call(null,s__11027__$2);
var size__9269__auto__ = cljs.core.count.call(null,c__9268__auto__);
var b__11029 = cljs.core.chunk_buffer.call(null,size__9269__auto__);
if((function (){var i__11028 = (0);
while(true){
if((i__11028 < size__9269__auto__)){
var style = cljs.core._nth.call(null,c__9268__auto__,i__11028);
cljs.core.chunk_append.call(null,b__11029,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__11033 = (i__11028 + (1));
i__11028 = G__11033;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11029),sablono$core$iter__11026.call(null,cljs.core.chunk_rest.call(null,s__11027__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11029),null);
}
} else {
var style = cljs.core.first.call(null,s__11027__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__11026.call(null,cljs.core.rest.call(null,s__11027__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9270__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq11025){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11025));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to11034 = (function sablono$core$link_to11034(var_args){
var args__9674__auto__ = [];
var len__9667__auto___11037 = arguments.length;
var i__9668__auto___11038 = (0);
while(true){
if((i__9668__auto___11038 < len__9667__auto___11037)){
args__9674__auto__.push((arguments[i__9668__auto___11038]));

var G__11039 = (i__9668__auto___11038 + (1));
i__9668__auto___11038 = G__11039;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((1) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to11034.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9675__auto__);
});

sablono.core.link_to11034.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to11034.cljs$lang$maxFixedArity = (1);

sablono.core.link_to11034.cljs$lang$applyTo = (function (seq11035){
var G__11036 = cljs.core.first.call(null,seq11035);
var seq11035__$1 = cljs.core.next.call(null,seq11035);
return sablono.core.link_to11034.cljs$core$IFn$_invoke$arity$variadic(G__11036,seq11035__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to11034);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to11040 = (function sablono$core$mail_to11040(var_args){
var args__9674__auto__ = [];
var len__9667__auto___11047 = arguments.length;
var i__9668__auto___11048 = (0);
while(true){
if((i__9668__auto___11048 < len__9667__auto___11047)){
args__9674__auto__.push((arguments[i__9668__auto___11048]));

var G__11049 = (i__9668__auto___11048 + (1));
i__9668__auto___11048 = G__11049;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((1) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to11040.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9675__auto__);
});

sablono.core.mail_to11040.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__11043){
var vec__11044 = p__11043;
var content = cljs.core.nth.call(null,vec__11044,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__8388__auto__ = content;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to11040.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to11040.cljs$lang$applyTo = (function (seq11041){
var G__11042 = cljs.core.first.call(null,seq11041);
var seq11041__$1 = cljs.core.next.call(null,seq11041);
return sablono.core.mail_to11040.cljs$core$IFn$_invoke$arity$variadic(G__11042,seq11041__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to11040);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list11050 = (function sablono$core$unordered_list11050(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__9270__auto__ = (function sablono$core$unordered_list11050_$_iter__11051(s__11052){
return (new cljs.core.LazySeq(null,(function (){
var s__11052__$1 = s__11052;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__11052__$1);
if(temp__5457__auto__){
var s__11052__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11052__$2)){
var c__9268__auto__ = cljs.core.chunk_first.call(null,s__11052__$2);
var size__9269__auto__ = cljs.core.count.call(null,c__9268__auto__);
var b__11054 = cljs.core.chunk_buffer.call(null,size__9269__auto__);
if((function (){var i__11053 = (0);
while(true){
if((i__11053 < size__9269__auto__)){
var x = cljs.core._nth.call(null,c__9268__auto__,i__11053);
cljs.core.chunk_append.call(null,b__11054,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__11055 = (i__11053 + (1));
i__11053 = G__11055;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11054),sablono$core$unordered_list11050_$_iter__11051.call(null,cljs.core.chunk_rest.call(null,s__11052__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11054),null);
}
} else {
var x = cljs.core.first.call(null,s__11052__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list11050_$_iter__11051.call(null,cljs.core.rest.call(null,s__11052__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9270__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list11050);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list11056 = (function sablono$core$ordered_list11056(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__9270__auto__ = (function sablono$core$ordered_list11056_$_iter__11057(s__11058){
return (new cljs.core.LazySeq(null,(function (){
var s__11058__$1 = s__11058;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__11058__$1);
if(temp__5457__auto__){
var s__11058__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11058__$2)){
var c__9268__auto__ = cljs.core.chunk_first.call(null,s__11058__$2);
var size__9269__auto__ = cljs.core.count.call(null,c__9268__auto__);
var b__11060 = cljs.core.chunk_buffer.call(null,size__9269__auto__);
if((function (){var i__11059 = (0);
while(true){
if((i__11059 < size__9269__auto__)){
var x = cljs.core._nth.call(null,c__9268__auto__,i__11059);
cljs.core.chunk_append.call(null,b__11060,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__11061 = (i__11059 + (1));
i__11059 = G__11061;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11060),sablono$core$ordered_list11056_$_iter__11057.call(null,cljs.core.chunk_rest.call(null,s__11058__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11060),null);
}
} else {
var x = cljs.core.first.call(null,s__11058__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list11056_$_iter__11057.call(null,cljs.core.rest.call(null,s__11058__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9270__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list11056);
/**
 * Create an image element.
 */
sablono.core.image11062 = (function sablono$core$image11062(var_args){
var G__11064 = arguments.length;
switch (G__11064) {
case 1:
return sablono.core.image11062.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image11062.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image11062.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image11062.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image11062.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image11062);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__11066_SHARP_,p2__11067_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11066_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__11067_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__11068_SHARP_,p2__11069_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11068_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__11069_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__8388__auto__ = value;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field11070 = (function sablono$core$color_field11070(var_args){
var G__11072 = arguments.length;
switch (G__11072) {
case 1:
return sablono.core.color_field11070.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field11070.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field11070.cljs$core$IFn$_invoke$arity$1 = (function (name__11004__auto__){
return sablono.core.color_field11070.call(null,name__11004__auto__,null);
});

sablono.core.color_field11070.cljs$core$IFn$_invoke$arity$2 = (function (name__11004__auto__,value__11005__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__11004__auto__,value__11005__auto__);
});

sablono.core.color_field11070.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field11070);

/**
 * Creates a date input field.
 */
sablono.core.date_field11073 = (function sablono$core$date_field11073(var_args){
var G__11075 = arguments.length;
switch (G__11075) {
case 1:
return sablono.core.date_field11073.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field11073.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field11073.cljs$core$IFn$_invoke$arity$1 = (function (name__11004__auto__){
return sablono.core.date_field11073.call(null,name__11004__auto__,null);
});

sablono.core.date_field11073.cljs$core$IFn$_invoke$arity$2 = (function (name__11004__auto__,value__11005__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__11004__auto__,value__11005__auto__);
});

sablono.core.date_field11073.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field11073);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field11076 = (function sablono$core$datetime_field11076(var_args){
var G__11078 = arguments.length;
switch (G__11078) {
case 1:
return sablono.core.datetime_field11076.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field11076.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field11076.cljs$core$IFn$_invoke$arity$1 = (function (name__11004__auto__){
return sablono.core.datetime_field11076.call(null,name__11004__auto__,null);
});

sablono.core.datetime_field11076.cljs$core$IFn$_invoke$arity$2 = (function (name__11004__auto__,value__11005__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__11004__auto__,value__11005__auto__);
});

sablono.core.datetime_field11076.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field11076);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field11079 = (function sablono$core$datetime_local_field11079(var_args){
var G__11081 = arguments.length;
switch (G__11081) {
case 1:
return sablono.core.datetime_local_field11079.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field11079.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field11079.cljs$core$IFn$_invoke$arity$1 = (function (name__11004__auto__){
return sablono.core.datetime_local_field11079.call(null,name__11004__auto__,null);
});

sablono.core.datetime_local_field11079.cljs$core$IFn$_invoke$arity$2 = (function (name__11004__auto__,value__11005__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__11004__auto__,value__11005__auto__);
});

sablono.core.datetime_local_field11079.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field11079);

/**
 * Creates a email input field.
 */
sablono.core.email_field11082 = (function sablono$core$email_field11082(var_args){
var G__11084 = arguments.length;
switch (G__11084) {
case 1:
return sablono.core.email_field11082.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field11082.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field11082.cljs$core$IFn$_invoke$arity$1 = (function (name__11004__auto__){
return sablono.core.email_field11082.call(null,name__11004__auto__,null);
});

sablono.core.email_field11082.cljs$core$IFn$_invoke$arity$2 = (function (name__11004__auto__,value__11005__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__11004__auto__,value__11005__auto__);
});

sablono.core.email_field11082.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field11082);

/**
 * Creates a file input field.
 */
sablono.core.file_field11085 = (function sablono$core$file_field11085(var_args){
var G__11087 = arguments.length;
switch (G__11087) {
case 1:
return sablono.core.file_field11085.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field11085.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field11085.cljs$core$IFn$_invoke$arity$1 = (function (name__11004__auto__){
return sablono.core.file_field11085.call(null,name__11004__auto__,null);
});

sablono.core.file_field11085.cljs$core$IFn$_invoke$arity$2 = (function (name__11004__auto__,value__11005__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__11004__auto__,value__11005__auto__);
});

sablono.core.file_field11085.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field11085);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field11088 = (function sablono$core$hidden_field11088(var_args){
var G__11090 = arguments.length;
switch (G__11090) {
case 1:
return sablono.core.hidden_field11088.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field11088.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field11088.cljs$core$IFn$_invoke$arity$1 = (function (name__11004__auto__){
return sablono.core.hidden_field11088.call(null,name__11004__auto__,null);
});

sablono.core.hidden_field11088.cljs$core$IFn$_invoke$arity$2 = (function (name__11004__auto__,value__11005__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__11004__auto__,value__11005__auto__);
});

sablono.core.hidden_field11088.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field11088);

/**
 * Creates a month input field.
 */
sablono.core.month_field11091 = (function sablono$core$month_field11091(var_args){
var G__11093 = arguments.length;
switch (G__11093) {
case 1:
return sablono.core.month_field11091.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field11091.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field11091.cljs$core$IFn$_invoke$arity$1 = (function (name__11004__auto__){
return sablono.core.month_field11091.call(null,name__11004__auto__,null);
});

sablono.core.month_field11091.cljs$core$IFn$_invoke$arity$2 = (function (name__11004__auto__,value__11005__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__11004__auto__,value__11005__auto__);
});

sablono.core.month_field11091.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field11091);

/**
 * Creates a number input field.
 */
sablono.core.number_field11094 = (function sablono$core$number_field11094(var_args){
var G__11096 = arguments.length;
switch (G__11096) {
case 1:
return sablono.core.number_field11094.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field11094.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field11094.cljs$core$IFn$_invoke$arity$1 = (function (name__11004__auto__){
return sablono.core.number_field11094.call(null,name__11004__auto__,null);
});

sablono.core.number_field11094.cljs$core$IFn$_invoke$arity$2 = (function (name__11004__auto__,value__11005__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__11004__auto__,value__11005__auto__);
});

sablono.core.number_field11094.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field11094);

/**
 * Creates a password input field.
 */
sablono.core.password_field11097 = (function sablono$core$password_field11097(var_args){
var G__11099 = arguments.length;
switch (G__11099) {
case 1:
return sablono.core.password_field11097.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field11097.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field11097.cljs$core$IFn$_invoke$arity$1 = (function (name__11004__auto__){
return sablono.core.password_field11097.call(null,name__11004__auto__,null);
});

sablono.core.password_field11097.cljs$core$IFn$_invoke$arity$2 = (function (name__11004__auto__,value__11005__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__11004__auto__,value__11005__auto__);
});

sablono.core.password_field11097.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field11097);

/**
 * Creates a range input field.
 */
sablono.core.range_field11100 = (function sablono$core$range_field11100(var_args){
var G__11102 = arguments.length;
switch (G__11102) {
case 1:
return sablono.core.range_field11100.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field11100.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field11100.cljs$core$IFn$_invoke$arity$1 = (function (name__11004__auto__){
return sablono.core.range_field11100.call(null,name__11004__auto__,null);
});

sablono.core.range_field11100.cljs$core$IFn$_invoke$arity$2 = (function (name__11004__auto__,value__11005__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__11004__auto__,value__11005__auto__);
});

sablono.core.range_field11100.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field11100);

/**
 * Creates a search input field.
 */
sablono.core.search_field11103 = (function sablono$core$search_field11103(var_args){
var G__11105 = arguments.length;
switch (G__11105) {
case 1:
return sablono.core.search_field11103.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field11103.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field11103.cljs$core$IFn$_invoke$arity$1 = (function (name__11004__auto__){
return sablono.core.search_field11103.call(null,name__11004__auto__,null);
});

sablono.core.search_field11103.cljs$core$IFn$_invoke$arity$2 = (function (name__11004__auto__,value__11005__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__11004__auto__,value__11005__auto__);
});

sablono.core.search_field11103.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field11103);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field11106 = (function sablono$core$tel_field11106(var_args){
var G__11108 = arguments.length;
switch (G__11108) {
case 1:
return sablono.core.tel_field11106.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field11106.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field11106.cljs$core$IFn$_invoke$arity$1 = (function (name__11004__auto__){
return sablono.core.tel_field11106.call(null,name__11004__auto__,null);
});

sablono.core.tel_field11106.cljs$core$IFn$_invoke$arity$2 = (function (name__11004__auto__,value__11005__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__11004__auto__,value__11005__auto__);
});

sablono.core.tel_field11106.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field11106);

/**
 * Creates a text input field.
 */
sablono.core.text_field11109 = (function sablono$core$text_field11109(var_args){
var G__11111 = arguments.length;
switch (G__11111) {
case 1:
return sablono.core.text_field11109.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field11109.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field11109.cljs$core$IFn$_invoke$arity$1 = (function (name__11004__auto__){
return sablono.core.text_field11109.call(null,name__11004__auto__,null);
});

sablono.core.text_field11109.cljs$core$IFn$_invoke$arity$2 = (function (name__11004__auto__,value__11005__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__11004__auto__,value__11005__auto__);
});

sablono.core.text_field11109.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field11109);

/**
 * Creates a time input field.
 */
sablono.core.time_field11112 = (function sablono$core$time_field11112(var_args){
var G__11114 = arguments.length;
switch (G__11114) {
case 1:
return sablono.core.time_field11112.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field11112.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field11112.cljs$core$IFn$_invoke$arity$1 = (function (name__11004__auto__){
return sablono.core.time_field11112.call(null,name__11004__auto__,null);
});

sablono.core.time_field11112.cljs$core$IFn$_invoke$arity$2 = (function (name__11004__auto__,value__11005__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__11004__auto__,value__11005__auto__);
});

sablono.core.time_field11112.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field11112);

/**
 * Creates a url input field.
 */
sablono.core.url_field11115 = (function sablono$core$url_field11115(var_args){
var G__11117 = arguments.length;
switch (G__11117) {
case 1:
return sablono.core.url_field11115.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field11115.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field11115.cljs$core$IFn$_invoke$arity$1 = (function (name__11004__auto__){
return sablono.core.url_field11115.call(null,name__11004__auto__,null);
});

sablono.core.url_field11115.cljs$core$IFn$_invoke$arity$2 = (function (name__11004__auto__,value__11005__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__11004__auto__,value__11005__auto__);
});

sablono.core.url_field11115.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field11115);

/**
 * Creates a week input field.
 */
sablono.core.week_field11118 = (function sablono$core$week_field11118(var_args){
var G__11120 = arguments.length;
switch (G__11120) {
case 1:
return sablono.core.week_field11118.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field11118.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field11118.cljs$core$IFn$_invoke$arity$1 = (function (name__11004__auto__){
return sablono.core.week_field11118.call(null,name__11004__auto__,null);
});

sablono.core.week_field11118.cljs$core$IFn$_invoke$arity$2 = (function (name__11004__auto__,value__11005__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__11004__auto__,value__11005__auto__);
});

sablono.core.week_field11118.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field11118);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box11138 = (function sablono$core$check_box11138(var_args){
var G__11140 = arguments.length;
switch (G__11140) {
case 1:
return sablono.core.check_box11138.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box11138.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box11138.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box11138.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box11138.call(null,name,null);
});

sablono.core.check_box11138.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box11138.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box11138.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__8388__auto__ = value;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box11138.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box11138);
/**
 * Creates a radio button.
 */
sablono.core.radio_button11142 = (function sablono$core$radio_button11142(var_args){
var G__11144 = arguments.length;
switch (G__11144) {
case 1:
return sablono.core.radio_button11142.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button11142.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button11142.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button11142.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button11142.call(null,group,null);
});

sablono.core.radio_button11142.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button11142.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button11142.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__8388__auto__ = value;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button11142.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button11142);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options11146 = (function sablono$core$select_options11146(coll){
var iter__9270__auto__ = (function sablono$core$select_options11146_$_iter__11147(s__11148){
return (new cljs.core.LazySeq(null,(function (){
var s__11148__$1 = s__11148;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__11148__$1);
if(temp__5457__auto__){
var s__11148__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11148__$2)){
var c__9268__auto__ = cljs.core.chunk_first.call(null,s__11148__$2);
var size__9269__auto__ = cljs.core.count.call(null,c__9268__auto__);
var b__11150 = cljs.core.chunk_buffer.call(null,size__9269__auto__);
if((function (){var i__11149 = (0);
while(true){
if((i__11149 < size__9269__auto__)){
var x = cljs.core._nth.call(null,c__9268__auto__,i__11149);
cljs.core.chunk_append.call(null,b__11150,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__11151 = x;
var text = cljs.core.nth.call(null,vec__11151,(0),null);
var val = cljs.core.nth.call(null,vec__11151,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__11151,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options11146.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__11157 = (i__11149 + (1));
i__11149 = G__11157;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11150),sablono$core$select_options11146_$_iter__11147.call(null,cljs.core.chunk_rest.call(null,s__11148__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11150),null);
}
} else {
var x = cljs.core.first.call(null,s__11148__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__11154 = x;
var text = cljs.core.nth.call(null,vec__11154,(0),null);
var val = cljs.core.nth.call(null,vec__11154,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__11154,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options11146.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options11146_$_iter__11147.call(null,cljs.core.rest.call(null,s__11148__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9270__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options11146);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down11158 = (function sablono$core$drop_down11158(var_args){
var G__11160 = arguments.length;
switch (G__11160) {
case 2:
return sablono.core.drop_down11158.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down11158.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down11158.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down11158.call(null,name,options,null);
});

sablono.core.drop_down11158.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down11158.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down11158);
/**
 * Creates a text area element.
 */
sablono.core.text_area11162 = (function sablono$core$text_area11162(var_args){
var G__11164 = arguments.length;
switch (G__11164) {
case 1:
return sablono.core.text_area11162.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area11162.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area11162.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area11162.call(null,name,null);
});

sablono.core.text_area11162.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__8388__auto__ = value;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area11162.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area11162);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label11166 = (function sablono$core$label11166(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label11166);
/**
 * Creates a submit button.
 */
sablono.core.submit_button11167 = (function sablono$core$submit_button11167(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button11167);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button11168 = (function sablono$core$reset_button11168(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button11168);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to11169 = (function sablono$core$form_to11169(var_args){
var args__9674__auto__ = [];
var len__9667__auto___11176 = arguments.length;
var i__9668__auto___11177 = (0);
while(true){
if((i__9668__auto___11177 < len__9667__auto___11176)){
args__9674__auto__.push((arguments[i__9668__auto___11177]));

var G__11178 = (i__9668__auto___11177 + (1));
i__9668__auto___11177 = G__11178;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((1) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to11169.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9675__auto__);
});

sablono.core.form_to11169.cljs$core$IFn$_invoke$arity$variadic = (function (p__11172,body){
var vec__11173 = p__11172;
var method = cljs.core.nth.call(null,vec__11173,(0),null);
var action = cljs.core.nth.call(null,vec__11173,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to11169.cljs$lang$maxFixedArity = (1);

sablono.core.form_to11169.cljs$lang$applyTo = (function (seq11170){
var G__11171 = cljs.core.first.call(null,seq11170);
var seq11170__$1 = cljs.core.next.call(null,seq11170);
return sablono.core.form_to11169.cljs$core$IFn$_invoke$arity$variadic(G__11171,seq11170__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to11169);

//# sourceMappingURL=core.js.map?rel=1511973560012
