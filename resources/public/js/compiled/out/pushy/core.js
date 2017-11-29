// Compiled by ClojureScript 1.9.946 {}
goog.provide('pushy.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('clojure.string');
goog.require('goog.History');
goog.require('goog.history.Html5History');
goog.require('goog.history.Html5History.TokenTransformer');
goog.require('goog.history.EventType');
goog.require('goog.Uri');
pushy.core.on_click = (function pushy$core$on_click(funk){
return goog.events.listen(document,"click",funk);
});
pushy.core.update_history_BANG_ = (function pushy$core$update_history_BANG_(h){
var G__16644 = h;
G__16644.setUseFragment(false);

G__16644.setPathPrefix("");

G__16644.setEnabled(true);

return G__16644;
});
pushy.core.set_retrieve_token_BANG_ = (function pushy$core$set_retrieve_token_BANG_(t){
t.retrieveToken = (function (path_prefix,location){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.search)].join('');
});

return t;
});
pushy.core.set_create_url_BANG_ = (function pushy$core$set_create_url_BANG_(t){
t.createUrl = (function (token,path_prefix,location){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('');
});

return t;
});
pushy.core.new_history = (function pushy$core$new_history(var_args){
var G__16646 = arguments.length;
switch (G__16646) {
case 0:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.new_history.call(null,pushy.core.set_create_url_BANG_.call(null,pushy.core.set_retrieve_token_BANG_.call(null,(new goog.history.Html5History.TokenTransformer()))));
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$1 = (function (transformer){
return pushy.core.update_history_BANG_.call(null,(new goog.history.Html5History(window,transformer)));
});

pushy.core.new_history.cljs$lang$maxFixedArity = 1;


/**
 * @interface
 */
pushy.core.IHistory = function(){};

pushy.core.set_token_BANG_ = (function pushy$core$set_token_BANG_(var_args){
var G__16649 = arguments.length;
switch (G__16649) {
case 2:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$set_token_BANG_$arity$2 == null)))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$2(this$,token);
} else {
var x__9121__auto__ = (((this$ == null))?null:this$);
var m__9122__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return m__9122__auto__.call(null,this$,token);
} else {
var m__9122__auto____$1 = (pushy.core.set_token_BANG_["_"]);
if(!((m__9122__auto____$1 == null))){
return m__9122__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$set_token_BANG_$arity$3 == null)))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$3(this$,token,title);
} else {
var x__9121__auto__ = (((this$ == null))?null:this$);
var m__9122__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return m__9122__auto__.call(null,this$,token,title);
} else {
var m__9122__auto____$1 = (pushy.core.set_token_BANG_["_"]);
if(!((m__9122__auto____$1 == null))){
return m__9122__auto____$1.call(null,this$,token,title);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$lang$maxFixedArity = 3;


pushy.core.replace_token_BANG_ = (function pushy$core$replace_token_BANG_(var_args){
var G__16651 = arguments.length;
switch (G__16651) {
case 2:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$replace_token_BANG_$arity$2 == null)))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$2(this$,token);
} else {
var x__9121__auto__ = (((this$ == null))?null:this$);
var m__9122__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return m__9122__auto__.call(null,this$,token);
} else {
var m__9122__auto____$1 = (pushy.core.replace_token_BANG_["_"]);
if(!((m__9122__auto____$1 == null))){
return m__9122__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$replace_token_BANG_$arity$3 == null)))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$3(this$,token,title);
} else {
var x__9121__auto__ = (((this$ == null))?null:this$);
var m__9122__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return m__9122__auto__.call(null,this$,token,title);
} else {
var m__9122__auto____$1 = (pushy.core.replace_token_BANG_["_"]);
if(!((m__9122__auto____$1 == null))){
return m__9122__auto____$1.call(null,this$,token,title);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$lang$maxFixedArity = 3;


pushy.core.get_token = (function pushy$core$get_token(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$get_token$arity$1 == null)))){
return this$.pushy$core$IHistory$get_token$arity$1(this$);
} else {
var x__9121__auto__ = (((this$ == null))?null:this$);
var m__9122__auto__ = (pushy.core.get_token[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return m__9122__auto__.call(null,this$);
} else {
var m__9122__auto____$1 = (pushy.core.get_token["_"]);
if(!((m__9122__auto____$1 == null))){
return m__9122__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.get-token",this$);
}
}
}
});

pushy.core.start_BANG_ = (function pushy$core$start_BANG_(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$start_BANG_$arity$1 == null)))){
return this$.pushy$core$IHistory$start_BANG_$arity$1(this$);
} else {
var x__9121__auto__ = (((this$ == null))?null:this$);
var m__9122__auto__ = (pushy.core.start_BANG_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return m__9122__auto__.call(null,this$);
} else {
var m__9122__auto____$1 = (pushy.core.start_BANG_["_"]);
if(!((m__9122__auto____$1 == null))){
return m__9122__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.start!",this$);
}
}
}
});

pushy.core.stop_BANG_ = (function pushy$core$stop_BANG_(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$stop_BANG_$arity$1 == null)))){
return this$.pushy$core$IHistory$stop_BANG_$arity$1(this$);
} else {
var x__9121__auto__ = (((this$ == null))?null:this$);
var m__9122__auto__ = (pushy.core.stop_BANG_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return m__9122__auto__.call(null,this$);
} else {
var m__9122__auto____$1 = (pushy.core.stop_BANG_["_"]);
if(!((m__9122__auto____$1 == null))){
return m__9122__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.stop!",this$);
}
}
}
});

pushy.core.processable_url_QMARK_ = (function pushy$core$processable_url_QMARK_(uri){
return (!(clojure.string.blank_QMARK_.call(null,uri))) && (((cljs.core.not.call(null,uri.hasScheme())) && (cljs.core.not.call(null,uri.hasDomain()))) || (!((cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),".*$"].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join('')) == null))));
});
pushy.core.get_token_from_uri = (function pushy$core$get_token_from_uri(uri){
var path = uri.getPath();
var query = uri.getQuery();
if(cljs.core.empty_QMARK_.call(null,query)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('');
}
});
/**
 * Takes in three functions:
 *  * dispatch-fn: the function that dispatches when a match is found
 *  * match-fn: the function used to check if a particular route exists
 *  * identity-fn: (optional) extract the route from value returned by match-fn
 */
pushy.core.pushy = (function pushy$core$pushy(var_args){
var args__9674__auto__ = [];
var len__9667__auto___16668 = arguments.length;
var i__9668__auto___16669 = (0);
while(true){
if((i__9668__auto___16669 < len__9667__auto___16668)){
args__9674__auto__.push((arguments[i__9668__auto___16669]));

var G__16670 = (i__9668__auto___16669 + (1));
i__9668__auto___16669 = G__16670;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((2) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((2)),(0),null)):null);
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9675__auto__);
});

pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic = (function (dispatch_fn,match_fn,p__16657){
var map__16658 = p__16657;
var map__16658__$1 = ((((!((map__16658 == null)))?((((map__16658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16658.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16658):map__16658);
var processable_url_QMARK_ = cljs.core.get.call(null,map__16658__$1,new cljs.core.Keyword(null,"processable-url?","processable-url?",1865408336),pushy.core.processable_url_QMARK_);
var identity_fn = cljs.core.get.call(null,map__16658__$1,new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),cljs.core.identity);
var prevent_default_when_no_match_QMARK_ = cljs.core.get.call(null,map__16658__$1,new cljs.core.Keyword(null,"prevent-default-when-no-match?","prevent-default-when-no-match?",-358623618),cljs.core.constantly.call(null,false));
var history = pushy.core.new_history.call(null);
var event_keys = cljs.core.atom.call(null,null);
if(typeof pushy.core.t_pushy$core16660 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {pushy.core.IHistory}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
pushy.core.t_pushy$core16660 = (function (dispatch_fn,match_fn,p__16657,map__16658,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_,history,event_keys,meta16661){
this.dispatch_fn = dispatch_fn;
this.match_fn = match_fn;
this.p__16657 = p__16657;
this.map__16658 = map__16658;
this.processable_url_QMARK_ = processable_url_QMARK_;
this.identity_fn = identity_fn;
this.prevent_default_when_no_match_QMARK_ = prevent_default_when_no_match_QMARK_;
this.history = history;
this.event_keys = event_keys;
this.meta16661 = meta16661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pushy.core.t_pushy$core16660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (history,event_keys,map__16658,map__16658__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_16662,meta16661__$1){
var self__ = this;
var _16662__$1 = this;
return (new pushy.core.t_pushy$core16660(self__.dispatch_fn,self__.match_fn,self__.p__16657,self__.map__16658,self__.processable_url_QMARK_,self__.identity_fn,self__.prevent_default_when_no_match_QMARK_,self__.history,self__.event_keys,meta16661__$1));
});})(history,event_keys,map__16658,map__16658__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core16660.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (history,event_keys,map__16658,map__16658__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_16662){
var self__ = this;
var _16662__$1 = this;
return self__.meta16661;
});})(history,event_keys,map__16658,map__16658__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core16660.prototype.pushy$core$IHistory$ = cljs.core.PROTOCOL_SENTINEL;

pushy.core.t_pushy$core16660.prototype.pushy$core$IHistory$set_token_BANG_$arity$2 = ((function (history,event_keys,map__16658,map__16658__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token);
});})(history,event_keys,map__16658,map__16658__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core16660.prototype.pushy$core$IHistory$set_token_BANG_$arity$3 = ((function (history,event_keys,map__16658,map__16658__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token,title);
});})(history,event_keys,map__16658,map__16658__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core16660.prototype.pushy$core$IHistory$replace_token_BANG_$arity$2 = ((function (history,event_keys,map__16658,map__16658__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token);
});})(history,event_keys,map__16658,map__16658__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core16660.prototype.pushy$core$IHistory$replace_token_BANG_$arity$3 = ((function (history,event_keys,map__16658,map__16658__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token,title);
});})(history,event_keys,map__16658,map__16658__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core16660.prototype.pushy$core$IHistory$get_token$arity$1 = ((function (history,event_keys,map__16658,map__16658__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.history.getToken();
});})(history,event_keys,map__16658,map__16658__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core16660.prototype.pushy$core$IHistory$start_BANG_$arity$1 = ((function (history,event_keys,map__16658,map__16658__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
pushy.core.stop_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,goog.events.listen(self__.history,goog.history.EventType.NAVIGATE,((function (this$__$1,history,event_keys,map__16658,map__16658__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (e){
var temp__5457__auto__ = self__.identity_fn.call(null,self__.match_fn.call(null,e.token));
if(cljs.core.truth_(temp__5457__auto__)){
var match = temp__5457__auto__;
return self__.dispatch_fn.call(null,match);
} else {
return null;
}
});})(this$__$1,history,event_keys,map__16658,map__16658__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
));

var temp__5457__auto___16671 = self__.identity_fn.call(null,self__.match_fn.call(null,pushy.core.get_token.call(null,this$__$1)));
if(cljs.core.truth_(temp__5457__auto___16671)){
var match_16672 = temp__5457__auto___16671;
self__.dispatch_fn.call(null,match_16672);
} else {
}

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,pushy.core.on_click.call(null,((function (this$__$1,history,event_keys,map__16658,map__16658__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (e){
var temp__5457__auto__ = (function (){var G__16663 = e;
var G__16663__$1 = (((G__16663 == null))?null:G__16663.target);
if((G__16663__$1 == null)){
return null;
} else {
return G__16663__$1.closest("a");
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
var uri = goog.Uri.parse(el.href);
if(cljs.core.truth_((function (){var and__8376__auto__ = self__.processable_url_QMARK_.call(null,uri);
if(cljs.core.truth_(and__8376__auto__)){
return (cljs.core.not.call(null,e.altKey)) && (cljs.core.not.call(null,e.ctrlKey)) && (cljs.core.not.call(null,e.metaKey)) && (cljs.core.not.call(null,e.shiftKey)) && (cljs.core.not.call(null,cljs.core.get.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["_self",null,"_blank",null], null), null),el.getAttribute("target")))) && ((cljs.core.not.call(null,el.hasAttribute("data-pushy-ignore"))) || (cljs.core._EQ_.call(null,el.getAttribute("data-pushy-ignore"),"false"))) && (cljs.core._EQ_.call(null,(0),e.button));
} else {
return and__8376__auto__;
}
})())){
var next_token = pushy.core.get_token_from_uri.call(null,uri);
if(cljs.core.truth_(self__.identity_fn.call(null,self__.match_fn.call(null,next_token)))){
var temp__5455__auto___16673 = el.title;
if(cljs.core.truth_(temp__5455__auto___16673)){
var title_16674 = temp__5455__auto___16673;
pushy.core.set_token_BANG_.call(null,this$__$1,next_token,title_16674);
} else {
pushy.core.set_token_BANG_.call(null,this$__$1,next_token);
}

return e.preventDefault();
} else {
if(cljs.core.truth_(self__.prevent_default_when_no_match_QMARK_.call(null,next_token))){
return e.preventDefault();
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});})(this$__$1,history,event_keys,map__16658,map__16658__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
));

return null;
});})(history,event_keys,map__16658,map__16658__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core16660.prototype.pushy$core$IHistory$stop_BANG_$arity$1 = ((function (history,event_keys,map__16658,map__16658__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__16664_16675 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.event_keys));
var chunk__16665_16676 = null;
var count__16666_16677 = (0);
var i__16667_16678 = (0);
while(true){
if((i__16667_16678 < count__16666_16677)){
var key_16679 = cljs.core._nth.call(null,chunk__16665_16676,i__16667_16678);
goog.events.unlistenByKey(key_16679);

var G__16680 = seq__16664_16675;
var G__16681 = chunk__16665_16676;
var G__16682 = count__16666_16677;
var G__16683 = (i__16667_16678 + (1));
seq__16664_16675 = G__16680;
chunk__16665_16676 = G__16681;
count__16666_16677 = G__16682;
i__16667_16678 = G__16683;
continue;
} else {
var temp__5457__auto___16684 = cljs.core.seq.call(null,seq__16664_16675);
if(temp__5457__auto___16684){
var seq__16664_16685__$1 = temp__5457__auto___16684;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16664_16685__$1)){
var c__9319__auto___16686 = cljs.core.chunk_first.call(null,seq__16664_16685__$1);
var G__16687 = cljs.core.chunk_rest.call(null,seq__16664_16685__$1);
var G__16688 = c__9319__auto___16686;
var G__16689 = cljs.core.count.call(null,c__9319__auto___16686);
var G__16690 = (0);
seq__16664_16675 = G__16687;
chunk__16665_16676 = G__16688;
count__16666_16677 = G__16689;
i__16667_16678 = G__16690;
continue;
} else {
var key_16691 = cljs.core.first.call(null,seq__16664_16685__$1);
goog.events.unlistenByKey(key_16691);

var G__16692 = cljs.core.next.call(null,seq__16664_16685__$1);
var G__16693 = null;
var G__16694 = (0);
var G__16695 = (0);
seq__16664_16675 = G__16692;
chunk__16665_16676 = G__16693;
count__16666_16677 = G__16694;
i__16667_16678 = G__16695;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,self__.event_keys,null);
});})(history,event_keys,map__16658,map__16658__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core16660.getBasis = ((function (history,event_keys,map__16658,map__16658__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatch-fn","dispatch-fn",-1401088155,null),new cljs.core.Symbol(null,"match-fn","match-fn",-795226853,null),new cljs.core.Symbol(null,"p__16657","p__16657",-568497706,null),new cljs.core.Symbol(null,"map__16658","map__16658",-925183591,null),new cljs.core.Symbol(null,"processable-url?","processable-url?",-789027433,null),new cljs.core.Symbol(null,"identity-fn","identity-fn",756348900,null),new cljs.core.Symbol(null,"prevent-default-when-no-match?","prevent-default-when-no-match?",1281907909,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"event-keys","event-keys",804564896,null),new cljs.core.Symbol(null,"meta16661","meta16661",-1429176317,null)], null);
});})(history,event_keys,map__16658,map__16658__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core16660.cljs$lang$type = true;

pushy.core.t_pushy$core16660.cljs$lang$ctorStr = "pushy.core/t_pushy$core16660";

pushy.core.t_pushy$core16660.cljs$lang$ctorPrWriter = ((function (history,event_keys,map__16658,map__16658__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write.call(null,writer__9060__auto__,"pushy.core/t_pushy$core16660");
});})(history,event_keys,map__16658,map__16658__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.__GT_t_pushy$core16660 = ((function (history,event_keys,map__16658,map__16658__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function pushy$core$__GT_t_pushy$core16660(dispatch_fn__$1,match_fn__$1,p__16657__$1,map__16658__$2,processable_url_QMARK___$1,identity_fn__$1,prevent_default_when_no_match_QMARK___$1,history__$1,event_keys__$1,meta16661){
return (new pushy.core.t_pushy$core16660(dispatch_fn__$1,match_fn__$1,p__16657__$1,map__16658__$2,processable_url_QMARK___$1,identity_fn__$1,prevent_default_when_no_match_QMARK___$1,history__$1,event_keys__$1,meta16661));
});})(history,event_keys,map__16658,map__16658__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

}

return (new pushy.core.t_pushy$core16660(dispatch_fn,match_fn,p__16657,map__16658__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_,history,event_keys,cljs.core.PersistentArrayMap.EMPTY));
});

pushy.core.pushy.cljs$lang$maxFixedArity = (2);

pushy.core.pushy.cljs$lang$applyTo = (function (seq16654){
var G__16655 = cljs.core.first.call(null,seq16654);
var seq16654__$1 = cljs.core.next.call(null,seq16654);
var G__16656 = cljs.core.first.call(null,seq16654__$1);
var seq16654__$2 = cljs.core.next.call(null,seq16654__$1);
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic(G__16655,G__16656,seq16654__$2);
});

/**
 * Returns whether Html5History is supported
 */
pushy.core.supported_QMARK_ = (function pushy$core$supported_QMARK_(var_args){
var G__16697 = arguments.length;
switch (G__16697) {
case 0:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.supported_QMARK_.call(null,window);
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (window){
return goog.history.Html5History.isSupported(window);
});

pushy.core.supported_QMARK_.cljs$lang$maxFixedArity = 1;

pushy.core.push_state_BANG_ = (function pushy$core$push_state_BANG_(var_args){
var G__16700 = arguments.length;
switch (G__16700) {
case 2:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (dispatch_fn,match_fn){
return pushy.core.push_state_BANG_.call(null,dispatch_fn,match_fn,cljs.core.identity);
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dispatch_fn,match_fn,identity_fn){
var h = pushy.core.pushy.call(null,dispatch_fn,match_fn,new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),identity_fn);
pushy.core.start_BANG_.call(null,h);

return h;
});

pushy.core.push_state_BANG_.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map?rel=1511973568459
