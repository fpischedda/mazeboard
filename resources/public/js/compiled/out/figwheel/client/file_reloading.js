// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__29559__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__29559__auto__){
return or__29559__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__29559__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__29559__auto__)){
return or__29559__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37078_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37078_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__37079 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37080 = null;
var count__37081 = (0);
var i__37082 = (0);
while(true){
if((i__37082 < count__37081)){
var n = cljs.core._nth.call(null,chunk__37080,i__37082);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37083 = seq__37079;
var G__37084 = chunk__37080;
var G__37085 = count__37081;
var G__37086 = (i__37082 + (1));
seq__37079 = G__37083;
chunk__37080 = G__37084;
count__37081 = G__37085;
i__37082 = G__37086;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37079);
if(temp__5457__auto__){
var seq__37079__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37079__$1)){
var c__30490__auto__ = cljs.core.chunk_first.call(null,seq__37079__$1);
var G__37087 = cljs.core.chunk_rest.call(null,seq__37079__$1);
var G__37088 = c__30490__auto__;
var G__37089 = cljs.core.count.call(null,c__30490__auto__);
var G__37090 = (0);
seq__37079 = G__37087;
chunk__37080 = G__37088;
count__37081 = G__37089;
i__37082 = G__37090;
continue;
} else {
var n = cljs.core.first.call(null,seq__37079__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37091 = cljs.core.next.call(null,seq__37079__$1);
var G__37092 = null;
var G__37093 = (0);
var G__37094 = (0);
seq__37079 = G__37091;
chunk__37080 = G__37092;
count__37081 = G__37093;
i__37082 = G__37094;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__37104_37112 = cljs.core.seq.call(null,deps);
var chunk__37105_37113 = null;
var count__37106_37114 = (0);
var i__37107_37115 = (0);
while(true){
if((i__37107_37115 < count__37106_37114)){
var dep_37116 = cljs.core._nth.call(null,chunk__37105_37113,i__37107_37115);
topo_sort_helper_STAR_.call(null,dep_37116,(depth + (1)),state);

var G__37117 = seq__37104_37112;
var G__37118 = chunk__37105_37113;
var G__37119 = count__37106_37114;
var G__37120 = (i__37107_37115 + (1));
seq__37104_37112 = G__37117;
chunk__37105_37113 = G__37118;
count__37106_37114 = G__37119;
i__37107_37115 = G__37120;
continue;
} else {
var temp__5457__auto___37121 = cljs.core.seq.call(null,seq__37104_37112);
if(temp__5457__auto___37121){
var seq__37104_37122__$1 = temp__5457__auto___37121;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37104_37122__$1)){
var c__30490__auto___37123 = cljs.core.chunk_first.call(null,seq__37104_37122__$1);
var G__37124 = cljs.core.chunk_rest.call(null,seq__37104_37122__$1);
var G__37125 = c__30490__auto___37123;
var G__37126 = cljs.core.count.call(null,c__30490__auto___37123);
var G__37127 = (0);
seq__37104_37112 = G__37124;
chunk__37105_37113 = G__37125;
count__37106_37114 = G__37126;
i__37107_37115 = G__37127;
continue;
} else {
var dep_37128 = cljs.core.first.call(null,seq__37104_37122__$1);
topo_sort_helper_STAR_.call(null,dep_37128,(depth + (1)),state);

var G__37129 = cljs.core.next.call(null,seq__37104_37122__$1);
var G__37130 = null;
var G__37131 = (0);
var G__37132 = (0);
seq__37104_37112 = G__37129;
chunk__37105_37113 = G__37130;
count__37106_37114 = G__37131;
i__37107_37115 = G__37132;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37108){
var vec__37109 = p__37108;
var seq__37110 = cljs.core.seq.call(null,vec__37109);
var first__37111 = cljs.core.first.call(null,seq__37110);
var seq__37110__$1 = cljs.core.next.call(null,seq__37110);
var x = first__37111;
var xs = seq__37110__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37109,seq__37110,first__37111,seq__37110__$1,x,xs,get_deps__$1){
return (function (p1__37095_SHARP_){
return clojure.set.difference.call(null,p1__37095_SHARP_,x);
});})(vec__37109,seq__37110,first__37111,seq__37110__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__37133 = cljs.core.seq.call(null,provides);
var chunk__37134 = null;
var count__37135 = (0);
var i__37136 = (0);
while(true){
if((i__37136 < count__37135)){
var prov = cljs.core._nth.call(null,chunk__37134,i__37136);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37137_37145 = cljs.core.seq.call(null,requires);
var chunk__37138_37146 = null;
var count__37139_37147 = (0);
var i__37140_37148 = (0);
while(true){
if((i__37140_37148 < count__37139_37147)){
var req_37149 = cljs.core._nth.call(null,chunk__37138_37146,i__37140_37148);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37149,prov);

var G__37150 = seq__37137_37145;
var G__37151 = chunk__37138_37146;
var G__37152 = count__37139_37147;
var G__37153 = (i__37140_37148 + (1));
seq__37137_37145 = G__37150;
chunk__37138_37146 = G__37151;
count__37139_37147 = G__37152;
i__37140_37148 = G__37153;
continue;
} else {
var temp__5457__auto___37154 = cljs.core.seq.call(null,seq__37137_37145);
if(temp__5457__auto___37154){
var seq__37137_37155__$1 = temp__5457__auto___37154;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37137_37155__$1)){
var c__30490__auto___37156 = cljs.core.chunk_first.call(null,seq__37137_37155__$1);
var G__37157 = cljs.core.chunk_rest.call(null,seq__37137_37155__$1);
var G__37158 = c__30490__auto___37156;
var G__37159 = cljs.core.count.call(null,c__30490__auto___37156);
var G__37160 = (0);
seq__37137_37145 = G__37157;
chunk__37138_37146 = G__37158;
count__37139_37147 = G__37159;
i__37140_37148 = G__37160;
continue;
} else {
var req_37161 = cljs.core.first.call(null,seq__37137_37155__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37161,prov);

var G__37162 = cljs.core.next.call(null,seq__37137_37155__$1);
var G__37163 = null;
var G__37164 = (0);
var G__37165 = (0);
seq__37137_37145 = G__37162;
chunk__37138_37146 = G__37163;
count__37139_37147 = G__37164;
i__37140_37148 = G__37165;
continue;
}
} else {
}
}
break;
}

var G__37166 = seq__37133;
var G__37167 = chunk__37134;
var G__37168 = count__37135;
var G__37169 = (i__37136 + (1));
seq__37133 = G__37166;
chunk__37134 = G__37167;
count__37135 = G__37168;
i__37136 = G__37169;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37133);
if(temp__5457__auto__){
var seq__37133__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37133__$1)){
var c__30490__auto__ = cljs.core.chunk_first.call(null,seq__37133__$1);
var G__37170 = cljs.core.chunk_rest.call(null,seq__37133__$1);
var G__37171 = c__30490__auto__;
var G__37172 = cljs.core.count.call(null,c__30490__auto__);
var G__37173 = (0);
seq__37133 = G__37170;
chunk__37134 = G__37171;
count__37135 = G__37172;
i__37136 = G__37173;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37133__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37141_37174 = cljs.core.seq.call(null,requires);
var chunk__37142_37175 = null;
var count__37143_37176 = (0);
var i__37144_37177 = (0);
while(true){
if((i__37144_37177 < count__37143_37176)){
var req_37178 = cljs.core._nth.call(null,chunk__37142_37175,i__37144_37177);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37178,prov);

var G__37179 = seq__37141_37174;
var G__37180 = chunk__37142_37175;
var G__37181 = count__37143_37176;
var G__37182 = (i__37144_37177 + (1));
seq__37141_37174 = G__37179;
chunk__37142_37175 = G__37180;
count__37143_37176 = G__37181;
i__37144_37177 = G__37182;
continue;
} else {
var temp__5457__auto___37183__$1 = cljs.core.seq.call(null,seq__37141_37174);
if(temp__5457__auto___37183__$1){
var seq__37141_37184__$1 = temp__5457__auto___37183__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37141_37184__$1)){
var c__30490__auto___37185 = cljs.core.chunk_first.call(null,seq__37141_37184__$1);
var G__37186 = cljs.core.chunk_rest.call(null,seq__37141_37184__$1);
var G__37187 = c__30490__auto___37185;
var G__37188 = cljs.core.count.call(null,c__30490__auto___37185);
var G__37189 = (0);
seq__37141_37174 = G__37186;
chunk__37142_37175 = G__37187;
count__37143_37176 = G__37188;
i__37144_37177 = G__37189;
continue;
} else {
var req_37190 = cljs.core.first.call(null,seq__37141_37184__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37190,prov);

var G__37191 = cljs.core.next.call(null,seq__37141_37184__$1);
var G__37192 = null;
var G__37193 = (0);
var G__37194 = (0);
seq__37141_37174 = G__37191;
chunk__37142_37175 = G__37192;
count__37143_37176 = G__37193;
i__37144_37177 = G__37194;
continue;
}
} else {
}
}
break;
}

var G__37195 = cljs.core.next.call(null,seq__37133__$1);
var G__37196 = null;
var G__37197 = (0);
var G__37198 = (0);
seq__37133 = G__37195;
chunk__37134 = G__37196;
count__37135 = G__37197;
i__37136 = G__37198;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__37199_37203 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37200_37204 = null;
var count__37201_37205 = (0);
var i__37202_37206 = (0);
while(true){
if((i__37202_37206 < count__37201_37205)){
var ns_37207 = cljs.core._nth.call(null,chunk__37200_37204,i__37202_37206);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37207);

var G__37208 = seq__37199_37203;
var G__37209 = chunk__37200_37204;
var G__37210 = count__37201_37205;
var G__37211 = (i__37202_37206 + (1));
seq__37199_37203 = G__37208;
chunk__37200_37204 = G__37209;
count__37201_37205 = G__37210;
i__37202_37206 = G__37211;
continue;
} else {
var temp__5457__auto___37212 = cljs.core.seq.call(null,seq__37199_37203);
if(temp__5457__auto___37212){
var seq__37199_37213__$1 = temp__5457__auto___37212;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37199_37213__$1)){
var c__30490__auto___37214 = cljs.core.chunk_first.call(null,seq__37199_37213__$1);
var G__37215 = cljs.core.chunk_rest.call(null,seq__37199_37213__$1);
var G__37216 = c__30490__auto___37214;
var G__37217 = cljs.core.count.call(null,c__30490__auto___37214);
var G__37218 = (0);
seq__37199_37203 = G__37215;
chunk__37200_37204 = G__37216;
count__37201_37205 = G__37217;
i__37202_37206 = G__37218;
continue;
} else {
var ns_37219 = cljs.core.first.call(null,seq__37199_37213__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37219);

var G__37220 = cljs.core.next.call(null,seq__37199_37213__$1);
var G__37221 = null;
var G__37222 = (0);
var G__37223 = (0);
seq__37199_37203 = G__37220;
chunk__37200_37204 = G__37221;
count__37201_37205 = G__37222;
i__37202_37206 = G__37223;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__29559__auto__ = goog.require__;
if(cljs.core.truth_(or__29559__auto__)){
return or__29559__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__37224__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37224 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37225__i = 0, G__37225__a = new Array(arguments.length -  0);
while (G__37225__i < G__37225__a.length) {G__37225__a[G__37225__i] = arguments[G__37225__i + 0]; ++G__37225__i;}
  args = new cljs.core.IndexedSeq(G__37225__a,0,null);
} 
return G__37224__delegate.call(this,args);};
G__37224.cljs$lang$maxFixedArity = 0;
G__37224.cljs$lang$applyTo = (function (arglist__37226){
var args = cljs.core.seq(arglist__37226);
return G__37224__delegate(args);
});
G__37224.cljs$core$IFn$_invoke$arity$variadic = G__37224__delegate;
return G__37224;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37227 = cljs.core._EQ_;
var expr__37228 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37227.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37228))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__37227,expr__37228){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__37227,expr__37228))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__37227,expr__37228){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37230){if((e37230 instanceof Error)){
var e = e37230;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37230;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__37227,expr__37228))
} else {
if(cljs.core.truth_(pred__37227.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37228))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37227.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__37228))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37227.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37228))){
return ((function (pred__37227,expr__37228){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37231){if((e37231 instanceof Error)){
var e = e37231;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37231;

}
}})());
});
;})(pred__37227,expr__37228))
} else {
return ((function (pred__37227,expr__37228){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37227,expr__37228))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37232,callback){
var map__37233 = p__37232;
var map__37233__$1 = ((((!((map__37233 == null)))?((((map__37233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37233.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37233):map__37233);
var file_msg = map__37233__$1;
var request_url = cljs.core.get.call(null,map__37233__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__37233,map__37233__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37233,map__37233__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__32595__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32595__auto__){
return (function (){
var f__32596__auto__ = (function (){var switch__32505__auto__ = ((function (c__32595__auto__){
return (function (state_37257){
var state_val_37258 = (state_37257[(1)]);
if((state_val_37258 === (7))){
var inst_37253 = (state_37257[(2)]);
var state_37257__$1 = state_37257;
var statearr_37259_37276 = state_37257__$1;
(statearr_37259_37276[(2)] = inst_37253);

(statearr_37259_37276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37258 === (1))){
var state_37257__$1 = state_37257;
var statearr_37260_37277 = state_37257__$1;
(statearr_37260_37277[(2)] = null);

(statearr_37260_37277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37258 === (4))){
var inst_37237 = (state_37257[(7)]);
var inst_37237__$1 = (state_37257[(2)]);
var state_37257__$1 = (function (){var statearr_37261 = state_37257;
(statearr_37261[(7)] = inst_37237__$1);

return statearr_37261;
})();
if(cljs.core.truth_(inst_37237__$1)){
var statearr_37262_37278 = state_37257__$1;
(statearr_37262_37278[(1)] = (5));

} else {
var statearr_37263_37279 = state_37257__$1;
(statearr_37263_37279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37258 === (6))){
var state_37257__$1 = state_37257;
var statearr_37264_37280 = state_37257__$1;
(statearr_37264_37280[(2)] = null);

(statearr_37264_37280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37258 === (3))){
var inst_37255 = (state_37257[(2)]);
var state_37257__$1 = state_37257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37257__$1,inst_37255);
} else {
if((state_val_37258 === (2))){
var state_37257__$1 = state_37257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37257__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37258 === (11))){
var inst_37249 = (state_37257[(2)]);
var state_37257__$1 = (function (){var statearr_37265 = state_37257;
(statearr_37265[(8)] = inst_37249);

return statearr_37265;
})();
var statearr_37266_37281 = state_37257__$1;
(statearr_37266_37281[(2)] = null);

(statearr_37266_37281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37258 === (9))){
var inst_37243 = (state_37257[(9)]);
var inst_37241 = (state_37257[(10)]);
var inst_37245 = inst_37243.call(null,inst_37241);
var state_37257__$1 = state_37257;
var statearr_37267_37282 = state_37257__$1;
(statearr_37267_37282[(2)] = inst_37245);

(statearr_37267_37282[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37258 === (5))){
var inst_37237 = (state_37257[(7)]);
var inst_37239 = figwheel.client.file_reloading.blocking_load.call(null,inst_37237);
var state_37257__$1 = state_37257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37257__$1,(8),inst_37239);
} else {
if((state_val_37258 === (10))){
var inst_37241 = (state_37257[(10)]);
var inst_37247 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37241);
var state_37257__$1 = state_37257;
var statearr_37268_37283 = state_37257__$1;
(statearr_37268_37283[(2)] = inst_37247);

(statearr_37268_37283[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37258 === (8))){
var inst_37237 = (state_37257[(7)]);
var inst_37243 = (state_37257[(9)]);
var inst_37241 = (state_37257[(2)]);
var inst_37242 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37243__$1 = cljs.core.get.call(null,inst_37242,inst_37237);
var state_37257__$1 = (function (){var statearr_37269 = state_37257;
(statearr_37269[(9)] = inst_37243__$1);

(statearr_37269[(10)] = inst_37241);

return statearr_37269;
})();
if(cljs.core.truth_(inst_37243__$1)){
var statearr_37270_37284 = state_37257__$1;
(statearr_37270_37284[(1)] = (9));

} else {
var statearr_37271_37285 = state_37257__$1;
(statearr_37271_37285[(1)] = (10));

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
});})(c__32595__auto__))
;
return ((function (switch__32505__auto__,c__32595__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__32506__auto__ = null;
var figwheel$client$file_reloading$state_machine__32506__auto____0 = (function (){
var statearr_37272 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37272[(0)] = figwheel$client$file_reloading$state_machine__32506__auto__);

(statearr_37272[(1)] = (1));

return statearr_37272;
});
var figwheel$client$file_reloading$state_machine__32506__auto____1 = (function (state_37257){
while(true){
var ret_value__32507__auto__ = (function (){try{while(true){
var result__32508__auto__ = switch__32505__auto__.call(null,state_37257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32508__auto__;
}
break;
}
}catch (e37273){if((e37273 instanceof Object)){
var ex__32509__auto__ = e37273;
var statearr_37274_37286 = state_37257;
(statearr_37274_37286[(5)] = ex__32509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37287 = state_37257;
state_37257 = G__37287;
continue;
} else {
return ret_value__32507__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32506__auto__ = function(state_37257){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32506__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32506__auto____1.call(this,state_37257);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__32506__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32506__auto____0;
figwheel$client$file_reloading$state_machine__32506__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32506__auto____1;
return figwheel$client$file_reloading$state_machine__32506__auto__;
})()
;})(switch__32505__auto__,c__32595__auto__))
})();
var state__32597__auto__ = (function (){var statearr_37275 = f__32596__auto__.call(null);
(statearr_37275[(6)] = c__32595__auto__);

return statearr_37275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32597__auto__);
});})(c__32595__auto__))
);

return c__32595__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37288,callback){
var map__37289 = p__37288;
var map__37289__$1 = ((((!((map__37289 == null)))?((((map__37289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37289.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37289):map__37289);
var file_msg = map__37289__$1;
var namespace = cljs.core.get.call(null,map__37289__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37289,map__37289__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37289,map__37289__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37291){
var map__37292 = p__37291;
var map__37292__$1 = ((((!((map__37292 == null)))?((((map__37292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37292.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37292):map__37292);
var file_msg = map__37292__$1;
var namespace = cljs.core.get.call(null,map__37292__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37294){
var map__37295 = p__37294;
var map__37295__$1 = ((((!((map__37295 == null)))?((((map__37295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37295):map__37295);
var file_msg = map__37295__$1;
var namespace = cljs.core.get.call(null,map__37295__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__29547__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__29547__auto__){
var or__29559__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__29559__auto__)){
return or__29559__auto__;
} else {
var or__29559__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__29559__auto____$1)){
return or__29559__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__29547__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37297,callback){
var map__37298 = p__37297;
var map__37298__$1 = ((((!((map__37298 == null)))?((((map__37298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37298.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37298):map__37298);
var file_msg = map__37298__$1;
var request_url = cljs.core.get.call(null,map__37298__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37298__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__32595__auto___37348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32595__auto___37348,out){
return (function (){
var f__32596__auto__ = (function (){var switch__32505__auto__ = ((function (c__32595__auto___37348,out){
return (function (state_37333){
var state_val_37334 = (state_37333[(1)]);
if((state_val_37334 === (1))){
var inst_37307 = cljs.core.seq.call(null,files);
var inst_37308 = cljs.core.first.call(null,inst_37307);
var inst_37309 = cljs.core.next.call(null,inst_37307);
var inst_37310 = files;
var state_37333__$1 = (function (){var statearr_37335 = state_37333;
(statearr_37335[(7)] = inst_37309);

(statearr_37335[(8)] = inst_37310);

(statearr_37335[(9)] = inst_37308);

return statearr_37335;
})();
var statearr_37336_37349 = state_37333__$1;
(statearr_37336_37349[(2)] = null);

(statearr_37336_37349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37334 === (2))){
var inst_37316 = (state_37333[(10)]);
var inst_37310 = (state_37333[(8)]);
var inst_37315 = cljs.core.seq.call(null,inst_37310);
var inst_37316__$1 = cljs.core.first.call(null,inst_37315);
var inst_37317 = cljs.core.next.call(null,inst_37315);
var inst_37318 = (inst_37316__$1 == null);
var inst_37319 = cljs.core.not.call(null,inst_37318);
var state_37333__$1 = (function (){var statearr_37337 = state_37333;
(statearr_37337[(10)] = inst_37316__$1);

(statearr_37337[(11)] = inst_37317);

return statearr_37337;
})();
if(inst_37319){
var statearr_37338_37350 = state_37333__$1;
(statearr_37338_37350[(1)] = (4));

} else {
var statearr_37339_37351 = state_37333__$1;
(statearr_37339_37351[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37334 === (3))){
var inst_37331 = (state_37333[(2)]);
var state_37333__$1 = state_37333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37333__$1,inst_37331);
} else {
if((state_val_37334 === (4))){
var inst_37316 = (state_37333[(10)]);
var inst_37321 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37316);
var state_37333__$1 = state_37333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37333__$1,(7),inst_37321);
} else {
if((state_val_37334 === (5))){
var inst_37327 = cljs.core.async.close_BANG_.call(null,out);
var state_37333__$1 = state_37333;
var statearr_37340_37352 = state_37333__$1;
(statearr_37340_37352[(2)] = inst_37327);

(statearr_37340_37352[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37334 === (6))){
var inst_37329 = (state_37333[(2)]);
var state_37333__$1 = state_37333;
var statearr_37341_37353 = state_37333__$1;
(statearr_37341_37353[(2)] = inst_37329);

(statearr_37341_37353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37334 === (7))){
var inst_37317 = (state_37333[(11)]);
var inst_37323 = (state_37333[(2)]);
var inst_37324 = cljs.core.async.put_BANG_.call(null,out,inst_37323);
var inst_37310 = inst_37317;
var state_37333__$1 = (function (){var statearr_37342 = state_37333;
(statearr_37342[(12)] = inst_37324);

(statearr_37342[(8)] = inst_37310);

return statearr_37342;
})();
var statearr_37343_37354 = state_37333__$1;
(statearr_37343_37354[(2)] = null);

(statearr_37343_37354[(1)] = (2));


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
});})(c__32595__auto___37348,out))
;
return ((function (switch__32505__auto__,c__32595__auto___37348,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32506__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32506__auto____0 = (function (){
var statearr_37344 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37344[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32506__auto__);

(statearr_37344[(1)] = (1));

return statearr_37344;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32506__auto____1 = (function (state_37333){
while(true){
var ret_value__32507__auto__ = (function (){try{while(true){
var result__32508__auto__ = switch__32505__auto__.call(null,state_37333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32508__auto__;
}
break;
}
}catch (e37345){if((e37345 instanceof Object)){
var ex__32509__auto__ = e37345;
var statearr_37346_37355 = state_37333;
(statearr_37346_37355[(5)] = ex__32509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37356 = state_37333;
state_37333 = G__37356;
continue;
} else {
return ret_value__32507__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32506__auto__ = function(state_37333){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32506__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32506__auto____1.call(this,state_37333);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32506__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32506__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32506__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32506__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32506__auto__;
})()
;})(switch__32505__auto__,c__32595__auto___37348,out))
})();
var state__32597__auto__ = (function (){var statearr_37347 = f__32596__auto__.call(null);
(statearr_37347[(6)] = c__32595__auto___37348);

return statearr_37347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32597__auto__);
});})(c__32595__auto___37348,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37357,opts){
var map__37358 = p__37357;
var map__37358__$1 = ((((!((map__37358 == null)))?((((map__37358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37358):map__37358);
var eval_body = cljs.core.get.call(null,map__37358__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37358__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__29547__auto__ = eval_body;
if(cljs.core.truth_(and__29547__auto__)){
return typeof eval_body === 'string';
} else {
return and__29547__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37360){var e = e37360;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__37361_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37361_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__37362){
var vec__37363 = p__37362;
var k = cljs.core.nth.call(null,vec__37363,(0),null);
var v = cljs.core.nth.call(null,vec__37363,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37366){
var vec__37367 = p__37366;
var k = cljs.core.nth.call(null,vec__37367,(0),null);
var v = cljs.core.nth.call(null,vec__37367,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37373,p__37374){
var map__37375 = p__37373;
var map__37375__$1 = ((((!((map__37375 == null)))?((((map__37375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37375.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37375):map__37375);
var opts = map__37375__$1;
var before_jsload = cljs.core.get.call(null,map__37375__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37375__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37375__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37376 = p__37374;
var map__37376__$1 = ((((!((map__37376 == null)))?((((map__37376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37376):map__37376);
var msg = map__37376__$1;
var files = cljs.core.get.call(null,map__37376__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37376__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37376__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32595__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32595__auto__,map__37375,map__37375__$1,opts,before_jsload,on_jsload,reload_dependents,map__37376,map__37376__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32596__auto__ = (function (){var switch__32505__auto__ = ((function (c__32595__auto__,map__37375,map__37375__$1,opts,before_jsload,on_jsload,reload_dependents,map__37376,map__37376__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37530){
var state_val_37531 = (state_37530[(1)]);
if((state_val_37531 === (7))){
var inst_37390 = (state_37530[(7)]);
var inst_37391 = (state_37530[(8)]);
var inst_37393 = (state_37530[(9)]);
var inst_37392 = (state_37530[(10)]);
var inst_37398 = cljs.core._nth.call(null,inst_37391,inst_37393);
var inst_37399 = figwheel.client.file_reloading.eval_body.call(null,inst_37398,opts);
var inst_37400 = (inst_37393 + (1));
var tmp37532 = inst_37390;
var tmp37533 = inst_37391;
var tmp37534 = inst_37392;
var inst_37390__$1 = tmp37532;
var inst_37391__$1 = tmp37533;
var inst_37392__$1 = tmp37534;
var inst_37393__$1 = inst_37400;
var state_37530__$1 = (function (){var statearr_37535 = state_37530;
(statearr_37535[(7)] = inst_37390__$1);

(statearr_37535[(11)] = inst_37399);

(statearr_37535[(8)] = inst_37391__$1);

(statearr_37535[(9)] = inst_37393__$1);

(statearr_37535[(10)] = inst_37392__$1);

return statearr_37535;
})();
var statearr_37536_37619 = state_37530__$1;
(statearr_37536_37619[(2)] = null);

(statearr_37536_37619[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (20))){
var inst_37433 = (state_37530[(12)]);
var inst_37441 = figwheel.client.file_reloading.sort_files.call(null,inst_37433);
var state_37530__$1 = state_37530;
var statearr_37537_37620 = state_37530__$1;
(statearr_37537_37620[(2)] = inst_37441);

(statearr_37537_37620[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (27))){
var state_37530__$1 = state_37530;
var statearr_37538_37621 = state_37530__$1;
(statearr_37538_37621[(2)] = null);

(statearr_37538_37621[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (1))){
var inst_37382 = (state_37530[(13)]);
var inst_37379 = before_jsload.call(null,files);
var inst_37380 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37381 = (function (){return ((function (inst_37382,inst_37379,inst_37380,state_val_37531,c__32595__auto__,map__37375,map__37375__$1,opts,before_jsload,on_jsload,reload_dependents,map__37376,map__37376__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37370_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37370_SHARP_);
});
;})(inst_37382,inst_37379,inst_37380,state_val_37531,c__32595__auto__,map__37375,map__37375__$1,opts,before_jsload,on_jsload,reload_dependents,map__37376,map__37376__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37382__$1 = cljs.core.filter.call(null,inst_37381,files);
var inst_37383 = cljs.core.not_empty.call(null,inst_37382__$1);
var state_37530__$1 = (function (){var statearr_37539 = state_37530;
(statearr_37539[(14)] = inst_37380);

(statearr_37539[(13)] = inst_37382__$1);

(statearr_37539[(15)] = inst_37379);

return statearr_37539;
})();
if(cljs.core.truth_(inst_37383)){
var statearr_37540_37622 = state_37530__$1;
(statearr_37540_37622[(1)] = (2));

} else {
var statearr_37541_37623 = state_37530__$1;
(statearr_37541_37623[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (24))){
var state_37530__$1 = state_37530;
var statearr_37542_37624 = state_37530__$1;
(statearr_37542_37624[(2)] = null);

(statearr_37542_37624[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (39))){
var inst_37483 = (state_37530[(16)]);
var state_37530__$1 = state_37530;
var statearr_37543_37625 = state_37530__$1;
(statearr_37543_37625[(2)] = inst_37483);

(statearr_37543_37625[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (46))){
var inst_37525 = (state_37530[(2)]);
var state_37530__$1 = state_37530;
var statearr_37544_37626 = state_37530__$1;
(statearr_37544_37626[(2)] = inst_37525);

(statearr_37544_37626[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (4))){
var inst_37427 = (state_37530[(2)]);
var inst_37428 = cljs.core.List.EMPTY;
var inst_37429 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37428);
var inst_37430 = (function (){return ((function (inst_37427,inst_37428,inst_37429,state_val_37531,c__32595__auto__,map__37375,map__37375__$1,opts,before_jsload,on_jsload,reload_dependents,map__37376,map__37376__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37371_SHARP_){
var and__29547__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37371_SHARP_);
if(cljs.core.truth_(and__29547__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37371_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37371_SHARP_)));
} else {
return and__29547__auto__;
}
});
;})(inst_37427,inst_37428,inst_37429,state_val_37531,c__32595__auto__,map__37375,map__37375__$1,opts,before_jsload,on_jsload,reload_dependents,map__37376,map__37376__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37431 = cljs.core.filter.call(null,inst_37430,files);
var inst_37432 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37433 = cljs.core.concat.call(null,inst_37431,inst_37432);
var state_37530__$1 = (function (){var statearr_37545 = state_37530;
(statearr_37545[(17)] = inst_37427);

(statearr_37545[(12)] = inst_37433);

(statearr_37545[(18)] = inst_37429);

return statearr_37545;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37546_37627 = state_37530__$1;
(statearr_37546_37627[(1)] = (16));

} else {
var statearr_37547_37628 = state_37530__$1;
(statearr_37547_37628[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (15))){
var inst_37417 = (state_37530[(2)]);
var state_37530__$1 = state_37530;
var statearr_37548_37629 = state_37530__$1;
(statearr_37548_37629[(2)] = inst_37417);

(statearr_37548_37629[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (21))){
var inst_37443 = (state_37530[(19)]);
var inst_37443__$1 = (state_37530[(2)]);
var inst_37444 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37443__$1);
var state_37530__$1 = (function (){var statearr_37549 = state_37530;
(statearr_37549[(19)] = inst_37443__$1);

return statearr_37549;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37530__$1,(22),inst_37444);
} else {
if((state_val_37531 === (31))){
var inst_37528 = (state_37530[(2)]);
var state_37530__$1 = state_37530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37530__$1,inst_37528);
} else {
if((state_val_37531 === (32))){
var inst_37483 = (state_37530[(16)]);
var inst_37488 = inst_37483.cljs$lang$protocol_mask$partition0$;
var inst_37489 = (inst_37488 & (64));
var inst_37490 = inst_37483.cljs$core$ISeq$;
var inst_37491 = (cljs.core.PROTOCOL_SENTINEL === inst_37490);
var inst_37492 = (inst_37489) || (inst_37491);
var state_37530__$1 = state_37530;
if(cljs.core.truth_(inst_37492)){
var statearr_37550_37630 = state_37530__$1;
(statearr_37550_37630[(1)] = (35));

} else {
var statearr_37551_37631 = state_37530__$1;
(statearr_37551_37631[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (40))){
var inst_37505 = (state_37530[(20)]);
var inst_37504 = (state_37530[(2)]);
var inst_37505__$1 = cljs.core.get.call(null,inst_37504,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37506 = cljs.core.get.call(null,inst_37504,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37507 = cljs.core.not_empty.call(null,inst_37505__$1);
var state_37530__$1 = (function (){var statearr_37552 = state_37530;
(statearr_37552[(20)] = inst_37505__$1);

(statearr_37552[(21)] = inst_37506);

return statearr_37552;
})();
if(cljs.core.truth_(inst_37507)){
var statearr_37553_37632 = state_37530__$1;
(statearr_37553_37632[(1)] = (41));

} else {
var statearr_37554_37633 = state_37530__$1;
(statearr_37554_37633[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (33))){
var state_37530__$1 = state_37530;
var statearr_37555_37634 = state_37530__$1;
(statearr_37555_37634[(2)] = false);

(statearr_37555_37634[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (13))){
var inst_37403 = (state_37530[(22)]);
var inst_37407 = cljs.core.chunk_first.call(null,inst_37403);
var inst_37408 = cljs.core.chunk_rest.call(null,inst_37403);
var inst_37409 = cljs.core.count.call(null,inst_37407);
var inst_37390 = inst_37408;
var inst_37391 = inst_37407;
var inst_37392 = inst_37409;
var inst_37393 = (0);
var state_37530__$1 = (function (){var statearr_37556 = state_37530;
(statearr_37556[(7)] = inst_37390);

(statearr_37556[(8)] = inst_37391);

(statearr_37556[(9)] = inst_37393);

(statearr_37556[(10)] = inst_37392);

return statearr_37556;
})();
var statearr_37557_37635 = state_37530__$1;
(statearr_37557_37635[(2)] = null);

(statearr_37557_37635[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (22))){
var inst_37446 = (state_37530[(23)]);
var inst_37447 = (state_37530[(24)]);
var inst_37451 = (state_37530[(25)]);
var inst_37443 = (state_37530[(19)]);
var inst_37446__$1 = (state_37530[(2)]);
var inst_37447__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37446__$1);
var inst_37448 = (function (){var all_files = inst_37443;
var res_SINGLEQUOTE_ = inst_37446__$1;
var res = inst_37447__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37446,inst_37447,inst_37451,inst_37443,inst_37446__$1,inst_37447__$1,state_val_37531,c__32595__auto__,map__37375,map__37375__$1,opts,before_jsload,on_jsload,reload_dependents,map__37376,map__37376__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37372_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37372_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37446,inst_37447,inst_37451,inst_37443,inst_37446__$1,inst_37447__$1,state_val_37531,c__32595__auto__,map__37375,map__37375__$1,opts,before_jsload,on_jsload,reload_dependents,map__37376,map__37376__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37449 = cljs.core.filter.call(null,inst_37448,inst_37446__$1);
var inst_37450 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37451__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37450);
var inst_37452 = cljs.core.not_empty.call(null,inst_37451__$1);
var state_37530__$1 = (function (){var statearr_37558 = state_37530;
(statearr_37558[(23)] = inst_37446__$1);

(statearr_37558[(26)] = inst_37449);

(statearr_37558[(24)] = inst_37447__$1);

(statearr_37558[(25)] = inst_37451__$1);

return statearr_37558;
})();
if(cljs.core.truth_(inst_37452)){
var statearr_37559_37636 = state_37530__$1;
(statearr_37559_37636[(1)] = (23));

} else {
var statearr_37560_37637 = state_37530__$1;
(statearr_37560_37637[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (36))){
var state_37530__$1 = state_37530;
var statearr_37561_37638 = state_37530__$1;
(statearr_37561_37638[(2)] = false);

(statearr_37561_37638[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (41))){
var inst_37505 = (state_37530[(20)]);
var inst_37509 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37510 = cljs.core.map.call(null,inst_37509,inst_37505);
var inst_37511 = cljs.core.pr_str.call(null,inst_37510);
var inst_37512 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37511)].join('');
var inst_37513 = figwheel.client.utils.log.call(null,inst_37512);
var state_37530__$1 = state_37530;
var statearr_37562_37639 = state_37530__$1;
(statearr_37562_37639[(2)] = inst_37513);

(statearr_37562_37639[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (43))){
var inst_37506 = (state_37530[(21)]);
var inst_37516 = (state_37530[(2)]);
var inst_37517 = cljs.core.not_empty.call(null,inst_37506);
var state_37530__$1 = (function (){var statearr_37563 = state_37530;
(statearr_37563[(27)] = inst_37516);

return statearr_37563;
})();
if(cljs.core.truth_(inst_37517)){
var statearr_37564_37640 = state_37530__$1;
(statearr_37564_37640[(1)] = (44));

} else {
var statearr_37565_37641 = state_37530__$1;
(statearr_37565_37641[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (29))){
var inst_37446 = (state_37530[(23)]);
var inst_37449 = (state_37530[(26)]);
var inst_37447 = (state_37530[(24)]);
var inst_37451 = (state_37530[(25)]);
var inst_37483 = (state_37530[(16)]);
var inst_37443 = (state_37530[(19)]);
var inst_37479 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37482 = (function (){var all_files = inst_37443;
var res_SINGLEQUOTE_ = inst_37446;
var res = inst_37447;
var files_not_loaded = inst_37449;
var dependencies_that_loaded = inst_37451;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37446,inst_37449,inst_37447,inst_37451,inst_37483,inst_37443,inst_37479,state_val_37531,c__32595__auto__,map__37375,map__37375__$1,opts,before_jsload,on_jsload,reload_dependents,map__37376,map__37376__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37481){
var map__37566 = p__37481;
var map__37566__$1 = ((((!((map__37566 == null)))?((((map__37566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37566.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37566):map__37566);
var namespace = cljs.core.get.call(null,map__37566__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37446,inst_37449,inst_37447,inst_37451,inst_37483,inst_37443,inst_37479,state_val_37531,c__32595__auto__,map__37375,map__37375__$1,opts,before_jsload,on_jsload,reload_dependents,map__37376,map__37376__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37483__$1 = cljs.core.group_by.call(null,inst_37482,inst_37449);
var inst_37485 = (inst_37483__$1 == null);
var inst_37486 = cljs.core.not.call(null,inst_37485);
var state_37530__$1 = (function (){var statearr_37568 = state_37530;
(statearr_37568[(28)] = inst_37479);

(statearr_37568[(16)] = inst_37483__$1);

return statearr_37568;
})();
if(inst_37486){
var statearr_37569_37642 = state_37530__$1;
(statearr_37569_37642[(1)] = (32));

} else {
var statearr_37570_37643 = state_37530__$1;
(statearr_37570_37643[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (44))){
var inst_37506 = (state_37530[(21)]);
var inst_37519 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37506);
var inst_37520 = cljs.core.pr_str.call(null,inst_37519);
var inst_37521 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37520)].join('');
var inst_37522 = figwheel.client.utils.log.call(null,inst_37521);
var state_37530__$1 = state_37530;
var statearr_37571_37644 = state_37530__$1;
(statearr_37571_37644[(2)] = inst_37522);

(statearr_37571_37644[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (6))){
var inst_37424 = (state_37530[(2)]);
var state_37530__$1 = state_37530;
var statearr_37572_37645 = state_37530__$1;
(statearr_37572_37645[(2)] = inst_37424);

(statearr_37572_37645[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (28))){
var inst_37449 = (state_37530[(26)]);
var inst_37476 = (state_37530[(2)]);
var inst_37477 = cljs.core.not_empty.call(null,inst_37449);
var state_37530__$1 = (function (){var statearr_37573 = state_37530;
(statearr_37573[(29)] = inst_37476);

return statearr_37573;
})();
if(cljs.core.truth_(inst_37477)){
var statearr_37574_37646 = state_37530__$1;
(statearr_37574_37646[(1)] = (29));

} else {
var statearr_37575_37647 = state_37530__$1;
(statearr_37575_37647[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (25))){
var inst_37447 = (state_37530[(24)]);
var inst_37463 = (state_37530[(2)]);
var inst_37464 = cljs.core.not_empty.call(null,inst_37447);
var state_37530__$1 = (function (){var statearr_37576 = state_37530;
(statearr_37576[(30)] = inst_37463);

return statearr_37576;
})();
if(cljs.core.truth_(inst_37464)){
var statearr_37577_37648 = state_37530__$1;
(statearr_37577_37648[(1)] = (26));

} else {
var statearr_37578_37649 = state_37530__$1;
(statearr_37578_37649[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (34))){
var inst_37499 = (state_37530[(2)]);
var state_37530__$1 = state_37530;
if(cljs.core.truth_(inst_37499)){
var statearr_37579_37650 = state_37530__$1;
(statearr_37579_37650[(1)] = (38));

} else {
var statearr_37580_37651 = state_37530__$1;
(statearr_37580_37651[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (17))){
var state_37530__$1 = state_37530;
var statearr_37581_37652 = state_37530__$1;
(statearr_37581_37652[(2)] = recompile_dependents);

(statearr_37581_37652[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (3))){
var state_37530__$1 = state_37530;
var statearr_37582_37653 = state_37530__$1;
(statearr_37582_37653[(2)] = null);

(statearr_37582_37653[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (12))){
var inst_37420 = (state_37530[(2)]);
var state_37530__$1 = state_37530;
var statearr_37583_37654 = state_37530__$1;
(statearr_37583_37654[(2)] = inst_37420);

(statearr_37583_37654[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (2))){
var inst_37382 = (state_37530[(13)]);
var inst_37389 = cljs.core.seq.call(null,inst_37382);
var inst_37390 = inst_37389;
var inst_37391 = null;
var inst_37392 = (0);
var inst_37393 = (0);
var state_37530__$1 = (function (){var statearr_37584 = state_37530;
(statearr_37584[(7)] = inst_37390);

(statearr_37584[(8)] = inst_37391);

(statearr_37584[(9)] = inst_37393);

(statearr_37584[(10)] = inst_37392);

return statearr_37584;
})();
var statearr_37585_37655 = state_37530__$1;
(statearr_37585_37655[(2)] = null);

(statearr_37585_37655[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (23))){
var inst_37446 = (state_37530[(23)]);
var inst_37449 = (state_37530[(26)]);
var inst_37447 = (state_37530[(24)]);
var inst_37451 = (state_37530[(25)]);
var inst_37443 = (state_37530[(19)]);
var inst_37454 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37456 = (function (){var all_files = inst_37443;
var res_SINGLEQUOTE_ = inst_37446;
var res = inst_37447;
var files_not_loaded = inst_37449;
var dependencies_that_loaded = inst_37451;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37446,inst_37449,inst_37447,inst_37451,inst_37443,inst_37454,state_val_37531,c__32595__auto__,map__37375,map__37375__$1,opts,before_jsload,on_jsload,reload_dependents,map__37376,map__37376__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37455){
var map__37586 = p__37455;
var map__37586__$1 = ((((!((map__37586 == null)))?((((map__37586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37586.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37586):map__37586);
var request_url = cljs.core.get.call(null,map__37586__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37446,inst_37449,inst_37447,inst_37451,inst_37443,inst_37454,state_val_37531,c__32595__auto__,map__37375,map__37375__$1,opts,before_jsload,on_jsload,reload_dependents,map__37376,map__37376__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37457 = cljs.core.reverse.call(null,inst_37451);
var inst_37458 = cljs.core.map.call(null,inst_37456,inst_37457);
var inst_37459 = cljs.core.pr_str.call(null,inst_37458);
var inst_37460 = figwheel.client.utils.log.call(null,inst_37459);
var state_37530__$1 = (function (){var statearr_37588 = state_37530;
(statearr_37588[(31)] = inst_37454);

return statearr_37588;
})();
var statearr_37589_37656 = state_37530__$1;
(statearr_37589_37656[(2)] = inst_37460);

(statearr_37589_37656[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (35))){
var state_37530__$1 = state_37530;
var statearr_37590_37657 = state_37530__$1;
(statearr_37590_37657[(2)] = true);

(statearr_37590_37657[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (19))){
var inst_37433 = (state_37530[(12)]);
var inst_37439 = figwheel.client.file_reloading.expand_files.call(null,inst_37433);
var state_37530__$1 = state_37530;
var statearr_37591_37658 = state_37530__$1;
(statearr_37591_37658[(2)] = inst_37439);

(statearr_37591_37658[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (11))){
var state_37530__$1 = state_37530;
var statearr_37592_37659 = state_37530__$1;
(statearr_37592_37659[(2)] = null);

(statearr_37592_37659[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (9))){
var inst_37422 = (state_37530[(2)]);
var state_37530__$1 = state_37530;
var statearr_37593_37660 = state_37530__$1;
(statearr_37593_37660[(2)] = inst_37422);

(statearr_37593_37660[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (5))){
var inst_37393 = (state_37530[(9)]);
var inst_37392 = (state_37530[(10)]);
var inst_37395 = (inst_37393 < inst_37392);
var inst_37396 = inst_37395;
var state_37530__$1 = state_37530;
if(cljs.core.truth_(inst_37396)){
var statearr_37594_37661 = state_37530__$1;
(statearr_37594_37661[(1)] = (7));

} else {
var statearr_37595_37662 = state_37530__$1;
(statearr_37595_37662[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (14))){
var inst_37403 = (state_37530[(22)]);
var inst_37412 = cljs.core.first.call(null,inst_37403);
var inst_37413 = figwheel.client.file_reloading.eval_body.call(null,inst_37412,opts);
var inst_37414 = cljs.core.next.call(null,inst_37403);
var inst_37390 = inst_37414;
var inst_37391 = null;
var inst_37392 = (0);
var inst_37393 = (0);
var state_37530__$1 = (function (){var statearr_37596 = state_37530;
(statearr_37596[(7)] = inst_37390);

(statearr_37596[(8)] = inst_37391);

(statearr_37596[(9)] = inst_37393);

(statearr_37596[(32)] = inst_37413);

(statearr_37596[(10)] = inst_37392);

return statearr_37596;
})();
var statearr_37597_37663 = state_37530__$1;
(statearr_37597_37663[(2)] = null);

(statearr_37597_37663[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (45))){
var state_37530__$1 = state_37530;
var statearr_37598_37664 = state_37530__$1;
(statearr_37598_37664[(2)] = null);

(statearr_37598_37664[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (26))){
var inst_37446 = (state_37530[(23)]);
var inst_37449 = (state_37530[(26)]);
var inst_37447 = (state_37530[(24)]);
var inst_37451 = (state_37530[(25)]);
var inst_37443 = (state_37530[(19)]);
var inst_37466 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37468 = (function (){var all_files = inst_37443;
var res_SINGLEQUOTE_ = inst_37446;
var res = inst_37447;
var files_not_loaded = inst_37449;
var dependencies_that_loaded = inst_37451;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37446,inst_37449,inst_37447,inst_37451,inst_37443,inst_37466,state_val_37531,c__32595__auto__,map__37375,map__37375__$1,opts,before_jsload,on_jsload,reload_dependents,map__37376,map__37376__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37467){
var map__37599 = p__37467;
var map__37599__$1 = ((((!((map__37599 == null)))?((((map__37599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37599.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37599):map__37599);
var namespace = cljs.core.get.call(null,map__37599__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37599__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37446,inst_37449,inst_37447,inst_37451,inst_37443,inst_37466,state_val_37531,c__32595__auto__,map__37375,map__37375__$1,opts,before_jsload,on_jsload,reload_dependents,map__37376,map__37376__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37469 = cljs.core.map.call(null,inst_37468,inst_37447);
var inst_37470 = cljs.core.pr_str.call(null,inst_37469);
var inst_37471 = figwheel.client.utils.log.call(null,inst_37470);
var inst_37472 = (function (){var all_files = inst_37443;
var res_SINGLEQUOTE_ = inst_37446;
var res = inst_37447;
var files_not_loaded = inst_37449;
var dependencies_that_loaded = inst_37451;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37446,inst_37449,inst_37447,inst_37451,inst_37443,inst_37466,inst_37468,inst_37469,inst_37470,inst_37471,state_val_37531,c__32595__auto__,map__37375,map__37375__$1,opts,before_jsload,on_jsload,reload_dependents,map__37376,map__37376__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37446,inst_37449,inst_37447,inst_37451,inst_37443,inst_37466,inst_37468,inst_37469,inst_37470,inst_37471,state_val_37531,c__32595__auto__,map__37375,map__37375__$1,opts,before_jsload,on_jsload,reload_dependents,map__37376,map__37376__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37473 = setTimeout(inst_37472,(10));
var state_37530__$1 = (function (){var statearr_37601 = state_37530;
(statearr_37601[(33)] = inst_37466);

(statearr_37601[(34)] = inst_37471);

return statearr_37601;
})();
var statearr_37602_37665 = state_37530__$1;
(statearr_37602_37665[(2)] = inst_37473);

(statearr_37602_37665[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (16))){
var state_37530__$1 = state_37530;
var statearr_37603_37666 = state_37530__$1;
(statearr_37603_37666[(2)] = reload_dependents);

(statearr_37603_37666[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (38))){
var inst_37483 = (state_37530[(16)]);
var inst_37501 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37483);
var state_37530__$1 = state_37530;
var statearr_37604_37667 = state_37530__$1;
(statearr_37604_37667[(2)] = inst_37501);

(statearr_37604_37667[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (30))){
var state_37530__$1 = state_37530;
var statearr_37605_37668 = state_37530__$1;
(statearr_37605_37668[(2)] = null);

(statearr_37605_37668[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (10))){
var inst_37403 = (state_37530[(22)]);
var inst_37405 = cljs.core.chunked_seq_QMARK_.call(null,inst_37403);
var state_37530__$1 = state_37530;
if(inst_37405){
var statearr_37606_37669 = state_37530__$1;
(statearr_37606_37669[(1)] = (13));

} else {
var statearr_37607_37670 = state_37530__$1;
(statearr_37607_37670[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (18))){
var inst_37437 = (state_37530[(2)]);
var state_37530__$1 = state_37530;
if(cljs.core.truth_(inst_37437)){
var statearr_37608_37671 = state_37530__$1;
(statearr_37608_37671[(1)] = (19));

} else {
var statearr_37609_37672 = state_37530__$1;
(statearr_37609_37672[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (42))){
var state_37530__$1 = state_37530;
var statearr_37610_37673 = state_37530__$1;
(statearr_37610_37673[(2)] = null);

(statearr_37610_37673[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (37))){
var inst_37496 = (state_37530[(2)]);
var state_37530__$1 = state_37530;
var statearr_37611_37674 = state_37530__$1;
(statearr_37611_37674[(2)] = inst_37496);

(statearr_37611_37674[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (8))){
var inst_37390 = (state_37530[(7)]);
var inst_37403 = (state_37530[(22)]);
var inst_37403__$1 = cljs.core.seq.call(null,inst_37390);
var state_37530__$1 = (function (){var statearr_37612 = state_37530;
(statearr_37612[(22)] = inst_37403__$1);

return statearr_37612;
})();
if(inst_37403__$1){
var statearr_37613_37675 = state_37530__$1;
(statearr_37613_37675[(1)] = (10));

} else {
var statearr_37614_37676 = state_37530__$1;
(statearr_37614_37676[(1)] = (11));

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
}
});})(c__32595__auto__,map__37375,map__37375__$1,opts,before_jsload,on_jsload,reload_dependents,map__37376,map__37376__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__32505__auto__,c__32595__auto__,map__37375,map__37375__$1,opts,before_jsload,on_jsload,reload_dependents,map__37376,map__37376__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32506__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32506__auto____0 = (function (){
var statearr_37615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37615[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32506__auto__);

(statearr_37615[(1)] = (1));

return statearr_37615;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32506__auto____1 = (function (state_37530){
while(true){
var ret_value__32507__auto__ = (function (){try{while(true){
var result__32508__auto__ = switch__32505__auto__.call(null,state_37530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32508__auto__;
}
break;
}
}catch (e37616){if((e37616 instanceof Object)){
var ex__32509__auto__ = e37616;
var statearr_37617_37677 = state_37530;
(statearr_37617_37677[(5)] = ex__32509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37678 = state_37530;
state_37530 = G__37678;
continue;
} else {
return ret_value__32507__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32506__auto__ = function(state_37530){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32506__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32506__auto____1.call(this,state_37530);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32506__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32506__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32506__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32506__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32506__auto__;
})()
;})(switch__32505__auto__,c__32595__auto__,map__37375,map__37375__$1,opts,before_jsload,on_jsload,reload_dependents,map__37376,map__37376__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32597__auto__ = (function (){var statearr_37618 = f__32596__auto__.call(null);
(statearr_37618[(6)] = c__32595__auto__);

return statearr_37618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32597__auto__);
});})(c__32595__auto__,map__37375,map__37375__$1,opts,before_jsload,on_jsload,reload_dependents,map__37376,map__37376__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32595__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37681,link){
var map__37682 = p__37681;
var map__37682__$1 = ((((!((map__37682 == null)))?((((map__37682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37682.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37682):map__37682);
var file = cljs.core.get.call(null,map__37682__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__37682,map__37682__$1,file){
return (function (p1__37679_SHARP_,p2__37680_SHARP_){
if(cljs.core._EQ_.call(null,p1__37679_SHARP_,p2__37680_SHARP_)){
return p1__37679_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__37682,map__37682__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37685){
var map__37686 = p__37685;
var map__37686__$1 = ((((!((map__37686 == null)))?((((map__37686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37686.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37686):map__37686);
var match_length = cljs.core.get.call(null,map__37686__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37686__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37684_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37684_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37688_SHARP_,p2__37689_SHARP_){
return cljs.core.assoc.call(null,p1__37688_SHARP_,cljs.core.get.call(null,p2__37689_SHARP_,key),p2__37689_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_37690 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37690);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37690);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37691,p__37692){
var map__37693 = p__37691;
var map__37693__$1 = ((((!((map__37693 == null)))?((((map__37693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37693.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37693):map__37693);
var on_cssload = cljs.core.get.call(null,map__37693__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37694 = p__37692;
var map__37694__$1 = ((((!((map__37694 == null)))?((((map__37694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37694.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37694):map__37694);
var files_msg = map__37694__$1;
var files = cljs.core.get.call(null,map__37694__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1511975274952
