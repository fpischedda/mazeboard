// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.10-SNAPSHOT";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38794 = arguments.length;
switch (G__38794) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__30845__auto__ = [];
var len__30838__auto___38797 = arguments.length;
var i__30839__auto___38798 = (0);
while(true){
if((i__30839__auto___38798 < len__30838__auto___38797)){
args__30845__auto__.push((arguments[i__30839__auto___38798]));

var G__38799 = (i__30839__auto___38798 + (1));
i__30839__auto___38798 = G__38799;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38796){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38796));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__30845__auto__ = [];
var len__30838__auto___38801 = arguments.length;
var i__30839__auto___38802 = (0);
while(true){
if((i__30839__auto___38802 < len__30838__auto___38801)){
args__30845__auto__.push((arguments[i__30839__auto___38802]));

var G__38803 = (i__30839__auto___38802 + (1));
i__30839__auto___38802 = G__38803;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38800){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38800));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38804){
var map__38805 = p__38804;
var map__38805__$1 = ((((!((map__38805 == null)))?((((map__38805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38805.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38805):map__38805);
var message = cljs.core.get.call(null,map__38805__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38805__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__29559__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__29559__auto__)){
return or__29559__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__29547__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__29547__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__29547__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__32595__auto___38884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32595__auto___38884,ch){
return (function (){
var f__32596__auto__ = (function (){var switch__32505__auto__ = ((function (c__32595__auto___38884,ch){
return (function (state_38856){
var state_val_38857 = (state_38856[(1)]);
if((state_val_38857 === (7))){
var inst_38852 = (state_38856[(2)]);
var state_38856__$1 = state_38856;
var statearr_38858_38885 = state_38856__$1;
(statearr_38858_38885[(2)] = inst_38852);

(statearr_38858_38885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38857 === (1))){
var state_38856__$1 = state_38856;
var statearr_38859_38886 = state_38856__$1;
(statearr_38859_38886[(2)] = null);

(statearr_38859_38886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38857 === (4))){
var inst_38809 = (state_38856[(7)]);
var inst_38809__$1 = (state_38856[(2)]);
var state_38856__$1 = (function (){var statearr_38860 = state_38856;
(statearr_38860[(7)] = inst_38809__$1);

return statearr_38860;
})();
if(cljs.core.truth_(inst_38809__$1)){
var statearr_38861_38887 = state_38856__$1;
(statearr_38861_38887[(1)] = (5));

} else {
var statearr_38862_38888 = state_38856__$1;
(statearr_38862_38888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38857 === (15))){
var inst_38816 = (state_38856[(8)]);
var inst_38831 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38816);
var inst_38832 = cljs.core.first.call(null,inst_38831);
var inst_38833 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38832);
var inst_38834 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38833)].join('');
var inst_38835 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38834);
var state_38856__$1 = state_38856;
var statearr_38863_38889 = state_38856__$1;
(statearr_38863_38889[(2)] = inst_38835);

(statearr_38863_38889[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38857 === (13))){
var inst_38840 = (state_38856[(2)]);
var state_38856__$1 = state_38856;
var statearr_38864_38890 = state_38856__$1;
(statearr_38864_38890[(2)] = inst_38840);

(statearr_38864_38890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38857 === (6))){
var state_38856__$1 = state_38856;
var statearr_38865_38891 = state_38856__$1;
(statearr_38865_38891[(2)] = null);

(statearr_38865_38891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38857 === (17))){
var inst_38838 = (state_38856[(2)]);
var state_38856__$1 = state_38856;
var statearr_38866_38892 = state_38856__$1;
(statearr_38866_38892[(2)] = inst_38838);

(statearr_38866_38892[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38857 === (3))){
var inst_38854 = (state_38856[(2)]);
var state_38856__$1 = state_38856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38856__$1,inst_38854);
} else {
if((state_val_38857 === (12))){
var inst_38815 = (state_38856[(9)]);
var inst_38829 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38815,opts);
var state_38856__$1 = state_38856;
if(cljs.core.truth_(inst_38829)){
var statearr_38867_38893 = state_38856__$1;
(statearr_38867_38893[(1)] = (15));

} else {
var statearr_38868_38894 = state_38856__$1;
(statearr_38868_38894[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38857 === (2))){
var state_38856__$1 = state_38856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38856__$1,(4),ch);
} else {
if((state_val_38857 === (11))){
var inst_38816 = (state_38856[(8)]);
var inst_38821 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38822 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38816);
var inst_38823 = cljs.core.async.timeout.call(null,(1000));
var inst_38824 = [inst_38822,inst_38823];
var inst_38825 = (new cljs.core.PersistentVector(null,2,(5),inst_38821,inst_38824,null));
var state_38856__$1 = state_38856;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38856__$1,(14),inst_38825);
} else {
if((state_val_38857 === (9))){
var inst_38816 = (state_38856[(8)]);
var inst_38842 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38843 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38816);
var inst_38844 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38843);
var inst_38845 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38844)].join('');
var inst_38846 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38845);
var state_38856__$1 = (function (){var statearr_38869 = state_38856;
(statearr_38869[(10)] = inst_38842);

return statearr_38869;
})();
var statearr_38870_38895 = state_38856__$1;
(statearr_38870_38895[(2)] = inst_38846);

(statearr_38870_38895[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38857 === (5))){
var inst_38809 = (state_38856[(7)]);
var inst_38811 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38812 = (new cljs.core.PersistentArrayMap(null,2,inst_38811,null));
var inst_38813 = (new cljs.core.PersistentHashSet(null,inst_38812,null));
var inst_38814 = figwheel.client.focus_msgs.call(null,inst_38813,inst_38809);
var inst_38815 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38814);
var inst_38816 = cljs.core.first.call(null,inst_38814);
var inst_38817 = figwheel.client.autoload_QMARK_.call(null);
var state_38856__$1 = (function (){var statearr_38871 = state_38856;
(statearr_38871[(8)] = inst_38816);

(statearr_38871[(9)] = inst_38815);

return statearr_38871;
})();
if(cljs.core.truth_(inst_38817)){
var statearr_38872_38896 = state_38856__$1;
(statearr_38872_38896[(1)] = (8));

} else {
var statearr_38873_38897 = state_38856__$1;
(statearr_38873_38897[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38857 === (14))){
var inst_38827 = (state_38856[(2)]);
var state_38856__$1 = state_38856;
var statearr_38874_38898 = state_38856__$1;
(statearr_38874_38898[(2)] = inst_38827);

(statearr_38874_38898[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38857 === (16))){
var state_38856__$1 = state_38856;
var statearr_38875_38899 = state_38856__$1;
(statearr_38875_38899[(2)] = null);

(statearr_38875_38899[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38857 === (10))){
var inst_38848 = (state_38856[(2)]);
var state_38856__$1 = (function (){var statearr_38876 = state_38856;
(statearr_38876[(11)] = inst_38848);

return statearr_38876;
})();
var statearr_38877_38900 = state_38856__$1;
(statearr_38877_38900[(2)] = null);

(statearr_38877_38900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38857 === (8))){
var inst_38815 = (state_38856[(9)]);
var inst_38819 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38815,opts);
var state_38856__$1 = state_38856;
if(cljs.core.truth_(inst_38819)){
var statearr_38878_38901 = state_38856__$1;
(statearr_38878_38901[(1)] = (11));

} else {
var statearr_38879_38902 = state_38856__$1;
(statearr_38879_38902[(1)] = (12));

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
});})(c__32595__auto___38884,ch))
;
return ((function (switch__32505__auto__,c__32595__auto___38884,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32506__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32506__auto____0 = (function (){
var statearr_38880 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38880[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32506__auto__);

(statearr_38880[(1)] = (1));

return statearr_38880;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32506__auto____1 = (function (state_38856){
while(true){
var ret_value__32507__auto__ = (function (){try{while(true){
var result__32508__auto__ = switch__32505__auto__.call(null,state_38856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32508__auto__;
}
break;
}
}catch (e38881){if((e38881 instanceof Object)){
var ex__32509__auto__ = e38881;
var statearr_38882_38903 = state_38856;
(statearr_38882_38903[(5)] = ex__32509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38904 = state_38856;
state_38856 = G__38904;
continue;
} else {
return ret_value__32507__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__32506__auto__ = function(state_38856){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32506__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32506__auto____1.call(this,state_38856);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__32506__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32506__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32506__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32506__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32506__auto__;
})()
;})(switch__32505__auto__,c__32595__auto___38884,ch))
})();
var state__32597__auto__ = (function (){var statearr_38883 = f__32596__auto__.call(null);
(statearr_38883[(6)] = c__32595__auto___38884);

return statearr_38883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32597__auto__);
});})(c__32595__auto___38884,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38905_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38905_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_38907 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38907){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38906){if((e38906 instanceof Error)){
var e = e38906;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38907], null));
} else {
var e = e38906;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38907))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38908){
var map__38909 = p__38908;
var map__38909__$1 = ((((!((map__38909 == null)))?((((map__38909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38909.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38909):map__38909);
var opts = map__38909__$1;
var build_id = cljs.core.get.call(null,map__38909__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38909,map__38909__$1,opts,build_id){
return (function (p__38911){
var vec__38912 = p__38911;
var seq__38913 = cljs.core.seq.call(null,vec__38912);
var first__38914 = cljs.core.first.call(null,seq__38913);
var seq__38913__$1 = cljs.core.next.call(null,seq__38913);
var map__38915 = first__38914;
var map__38915__$1 = ((((!((map__38915 == null)))?((((map__38915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38915.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38915):map__38915);
var msg = map__38915__$1;
var msg_name = cljs.core.get.call(null,map__38915__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38913__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38912,seq__38913,first__38914,seq__38913__$1,map__38915,map__38915__$1,msg,msg_name,_,map__38909,map__38909__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38912,seq__38913,first__38914,seq__38913__$1,map__38915,map__38915__$1,msg,msg_name,_,map__38909,map__38909__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38909,map__38909__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38917){
var vec__38918 = p__38917;
var seq__38919 = cljs.core.seq.call(null,vec__38918);
var first__38920 = cljs.core.first.call(null,seq__38919);
var seq__38919__$1 = cljs.core.next.call(null,seq__38919);
var map__38921 = first__38920;
var map__38921__$1 = ((((!((map__38921 == null)))?((((map__38921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38921.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38921):map__38921);
var msg = map__38921__$1;
var msg_name = cljs.core.get.call(null,map__38921__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38919__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38923){
var map__38924 = p__38923;
var map__38924__$1 = ((((!((map__38924 == null)))?((((map__38924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38924.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38924):map__38924);
var on_compile_warning = cljs.core.get.call(null,map__38924__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38924__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38924,map__38924__$1,on_compile_warning,on_compile_fail){
return (function (p__38926){
var vec__38927 = p__38926;
var seq__38928 = cljs.core.seq.call(null,vec__38927);
var first__38929 = cljs.core.first.call(null,seq__38928);
var seq__38928__$1 = cljs.core.next.call(null,seq__38928);
var map__38930 = first__38929;
var map__38930__$1 = ((((!((map__38930 == null)))?((((map__38930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38930.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38930):map__38930);
var msg = map__38930__$1;
var msg_name = cljs.core.get.call(null,map__38930__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38928__$1;
var pred__38932 = cljs.core._EQ_;
var expr__38933 = msg_name;
if(cljs.core.truth_(pred__38932.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38933))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38932.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38933))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38924,map__38924__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__32595__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32595__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32596__auto__ = (function (){var switch__32505__auto__ = ((function (c__32595__auto__,msg_hist,msg_names,msg){
return (function (state_39022){
var state_val_39023 = (state_39022[(1)]);
if((state_val_39023 === (7))){
var inst_38942 = (state_39022[(2)]);
var state_39022__$1 = state_39022;
if(cljs.core.truth_(inst_38942)){
var statearr_39024_39071 = state_39022__$1;
(statearr_39024_39071[(1)] = (8));

} else {
var statearr_39025_39072 = state_39022__$1;
(statearr_39025_39072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (20))){
var inst_39016 = (state_39022[(2)]);
var state_39022__$1 = state_39022;
var statearr_39026_39073 = state_39022__$1;
(statearr_39026_39073[(2)] = inst_39016);

(statearr_39026_39073[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (27))){
var inst_39012 = (state_39022[(2)]);
var state_39022__$1 = state_39022;
var statearr_39027_39074 = state_39022__$1;
(statearr_39027_39074[(2)] = inst_39012);

(statearr_39027_39074[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (1))){
var inst_38935 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39022__$1 = state_39022;
if(cljs.core.truth_(inst_38935)){
var statearr_39028_39075 = state_39022__$1;
(statearr_39028_39075[(1)] = (2));

} else {
var statearr_39029_39076 = state_39022__$1;
(statearr_39029_39076[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (24))){
var inst_39014 = (state_39022[(2)]);
var state_39022__$1 = state_39022;
var statearr_39030_39077 = state_39022__$1;
(statearr_39030_39077[(2)] = inst_39014);

(statearr_39030_39077[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (4))){
var inst_39020 = (state_39022[(2)]);
var state_39022__$1 = state_39022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39022__$1,inst_39020);
} else {
if((state_val_39023 === (15))){
var inst_39018 = (state_39022[(2)]);
var state_39022__$1 = state_39022;
var statearr_39031_39078 = state_39022__$1;
(statearr_39031_39078[(2)] = inst_39018);

(statearr_39031_39078[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (21))){
var inst_38971 = (state_39022[(2)]);
var inst_38972 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38973 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38972);
var state_39022__$1 = (function (){var statearr_39032 = state_39022;
(statearr_39032[(7)] = inst_38971);

return statearr_39032;
})();
var statearr_39033_39079 = state_39022__$1;
(statearr_39033_39079[(2)] = inst_38973);

(statearr_39033_39079[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (31))){
var inst_39001 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39022__$1 = state_39022;
if(cljs.core.truth_(inst_39001)){
var statearr_39034_39080 = state_39022__$1;
(statearr_39034_39080[(1)] = (34));

} else {
var statearr_39035_39081 = state_39022__$1;
(statearr_39035_39081[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (32))){
var inst_39010 = (state_39022[(2)]);
var state_39022__$1 = state_39022;
var statearr_39036_39082 = state_39022__$1;
(statearr_39036_39082[(2)] = inst_39010);

(statearr_39036_39082[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (33))){
var inst_38997 = (state_39022[(2)]);
var inst_38998 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38999 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38998);
var state_39022__$1 = (function (){var statearr_39037 = state_39022;
(statearr_39037[(8)] = inst_38997);

return statearr_39037;
})();
var statearr_39038_39083 = state_39022__$1;
(statearr_39038_39083[(2)] = inst_38999);

(statearr_39038_39083[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (13))){
var inst_38956 = figwheel.client.heads_up.clear.call(null);
var state_39022__$1 = state_39022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39022__$1,(16),inst_38956);
} else {
if((state_val_39023 === (22))){
var inst_38977 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38978 = figwheel.client.heads_up.append_warning_message.call(null,inst_38977);
var state_39022__$1 = state_39022;
var statearr_39039_39084 = state_39022__$1;
(statearr_39039_39084[(2)] = inst_38978);

(statearr_39039_39084[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (36))){
var inst_39008 = (state_39022[(2)]);
var state_39022__$1 = state_39022;
var statearr_39040_39085 = state_39022__$1;
(statearr_39040_39085[(2)] = inst_39008);

(statearr_39040_39085[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (29))){
var inst_38988 = (state_39022[(2)]);
var inst_38989 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38990 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38989);
var state_39022__$1 = (function (){var statearr_39041 = state_39022;
(statearr_39041[(9)] = inst_38988);

return statearr_39041;
})();
var statearr_39042_39086 = state_39022__$1;
(statearr_39042_39086[(2)] = inst_38990);

(statearr_39042_39086[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (6))){
var inst_38937 = (state_39022[(10)]);
var state_39022__$1 = state_39022;
var statearr_39043_39087 = state_39022__$1;
(statearr_39043_39087[(2)] = inst_38937);

(statearr_39043_39087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (28))){
var inst_38984 = (state_39022[(2)]);
var inst_38985 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38986 = figwheel.client.heads_up.display_warning.call(null,inst_38985);
var state_39022__$1 = (function (){var statearr_39044 = state_39022;
(statearr_39044[(11)] = inst_38984);

return statearr_39044;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39022__$1,(29),inst_38986);
} else {
if((state_val_39023 === (25))){
var inst_38982 = figwheel.client.heads_up.clear.call(null);
var state_39022__$1 = state_39022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39022__$1,(28),inst_38982);
} else {
if((state_val_39023 === (34))){
var inst_39003 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39022__$1 = state_39022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39022__$1,(37),inst_39003);
} else {
if((state_val_39023 === (17))){
var inst_38962 = (state_39022[(2)]);
var inst_38963 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38964 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38963);
var state_39022__$1 = (function (){var statearr_39045 = state_39022;
(statearr_39045[(12)] = inst_38962);

return statearr_39045;
})();
var statearr_39046_39088 = state_39022__$1;
(statearr_39046_39088[(2)] = inst_38964);

(statearr_39046_39088[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (3))){
var inst_38954 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39022__$1 = state_39022;
if(cljs.core.truth_(inst_38954)){
var statearr_39047_39089 = state_39022__$1;
(statearr_39047_39089[(1)] = (13));

} else {
var statearr_39048_39090 = state_39022__$1;
(statearr_39048_39090[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (12))){
var inst_38950 = (state_39022[(2)]);
var state_39022__$1 = state_39022;
var statearr_39049_39091 = state_39022__$1;
(statearr_39049_39091[(2)] = inst_38950);

(statearr_39049_39091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (2))){
var inst_38937 = (state_39022[(10)]);
var inst_38937__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39022__$1 = (function (){var statearr_39050 = state_39022;
(statearr_39050[(10)] = inst_38937__$1);

return statearr_39050;
})();
if(cljs.core.truth_(inst_38937__$1)){
var statearr_39051_39092 = state_39022__$1;
(statearr_39051_39092[(1)] = (5));

} else {
var statearr_39052_39093 = state_39022__$1;
(statearr_39052_39093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (23))){
var inst_38980 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39022__$1 = state_39022;
if(cljs.core.truth_(inst_38980)){
var statearr_39053_39094 = state_39022__$1;
(statearr_39053_39094[(1)] = (25));

} else {
var statearr_39054_39095 = state_39022__$1;
(statearr_39054_39095[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (35))){
var state_39022__$1 = state_39022;
var statearr_39055_39096 = state_39022__$1;
(statearr_39055_39096[(2)] = null);

(statearr_39055_39096[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (19))){
var inst_38975 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39022__$1 = state_39022;
if(cljs.core.truth_(inst_38975)){
var statearr_39056_39097 = state_39022__$1;
(statearr_39056_39097[(1)] = (22));

} else {
var statearr_39057_39098 = state_39022__$1;
(statearr_39057_39098[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (11))){
var inst_38946 = (state_39022[(2)]);
var state_39022__$1 = state_39022;
var statearr_39058_39099 = state_39022__$1;
(statearr_39058_39099[(2)] = inst_38946);

(statearr_39058_39099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (9))){
var inst_38948 = figwheel.client.heads_up.clear.call(null);
var state_39022__$1 = state_39022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39022__$1,(12),inst_38948);
} else {
if((state_val_39023 === (5))){
var inst_38939 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39022__$1 = state_39022;
var statearr_39059_39100 = state_39022__$1;
(statearr_39059_39100[(2)] = inst_38939);

(statearr_39059_39100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (14))){
var inst_38966 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39022__$1 = state_39022;
if(cljs.core.truth_(inst_38966)){
var statearr_39060_39101 = state_39022__$1;
(statearr_39060_39101[(1)] = (18));

} else {
var statearr_39061_39102 = state_39022__$1;
(statearr_39061_39102[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (26))){
var inst_38992 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39022__$1 = state_39022;
if(cljs.core.truth_(inst_38992)){
var statearr_39062_39103 = state_39022__$1;
(statearr_39062_39103[(1)] = (30));

} else {
var statearr_39063_39104 = state_39022__$1;
(statearr_39063_39104[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (16))){
var inst_38958 = (state_39022[(2)]);
var inst_38959 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38960 = figwheel.client.heads_up.display_exception.call(null,inst_38959);
var state_39022__$1 = (function (){var statearr_39064 = state_39022;
(statearr_39064[(13)] = inst_38958);

return statearr_39064;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39022__$1,(17),inst_38960);
} else {
if((state_val_39023 === (30))){
var inst_38994 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38995 = figwheel.client.heads_up.display_warning.call(null,inst_38994);
var state_39022__$1 = state_39022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39022__$1,(33),inst_38995);
} else {
if((state_val_39023 === (10))){
var inst_38952 = (state_39022[(2)]);
var state_39022__$1 = state_39022;
var statearr_39065_39105 = state_39022__$1;
(statearr_39065_39105[(2)] = inst_38952);

(statearr_39065_39105[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (18))){
var inst_38968 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38969 = figwheel.client.heads_up.display_exception.call(null,inst_38968);
var state_39022__$1 = state_39022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39022__$1,(21),inst_38969);
} else {
if((state_val_39023 === (37))){
var inst_39005 = (state_39022[(2)]);
var state_39022__$1 = state_39022;
var statearr_39066_39106 = state_39022__$1;
(statearr_39066_39106[(2)] = inst_39005);

(statearr_39066_39106[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (8))){
var inst_38944 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39022__$1 = state_39022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39022__$1,(11),inst_38944);
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
});})(c__32595__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__32505__auto__,c__32595__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32506__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32506__auto____0 = (function (){
var statearr_39067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39067[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32506__auto__);

(statearr_39067[(1)] = (1));

return statearr_39067;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32506__auto____1 = (function (state_39022){
while(true){
var ret_value__32507__auto__ = (function (){try{while(true){
var result__32508__auto__ = switch__32505__auto__.call(null,state_39022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32508__auto__;
}
break;
}
}catch (e39068){if((e39068 instanceof Object)){
var ex__32509__auto__ = e39068;
var statearr_39069_39107 = state_39022;
(statearr_39069_39107[(5)] = ex__32509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39108 = state_39022;
state_39022 = G__39108;
continue;
} else {
return ret_value__32507__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32506__auto__ = function(state_39022){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32506__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32506__auto____1.call(this,state_39022);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32506__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32506__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32506__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32506__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32506__auto__;
})()
;})(switch__32505__auto__,c__32595__auto__,msg_hist,msg_names,msg))
})();
var state__32597__auto__ = (function (){var statearr_39070 = f__32596__auto__.call(null);
(statearr_39070[(6)] = c__32595__auto__);

return statearr_39070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32597__auto__);
});})(c__32595__auto__,msg_hist,msg_names,msg))
);

return c__32595__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32595__auto___39137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32595__auto___39137,ch){
return (function (){
var f__32596__auto__ = (function (){var switch__32505__auto__ = ((function (c__32595__auto___39137,ch){
return (function (state_39123){
var state_val_39124 = (state_39123[(1)]);
if((state_val_39124 === (1))){
var state_39123__$1 = state_39123;
var statearr_39125_39138 = state_39123__$1;
(statearr_39125_39138[(2)] = null);

(statearr_39125_39138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39124 === (2))){
var state_39123__$1 = state_39123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39123__$1,(4),ch);
} else {
if((state_val_39124 === (3))){
var inst_39121 = (state_39123[(2)]);
var state_39123__$1 = state_39123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39123__$1,inst_39121);
} else {
if((state_val_39124 === (4))){
var inst_39111 = (state_39123[(7)]);
var inst_39111__$1 = (state_39123[(2)]);
var state_39123__$1 = (function (){var statearr_39126 = state_39123;
(statearr_39126[(7)] = inst_39111__$1);

return statearr_39126;
})();
if(cljs.core.truth_(inst_39111__$1)){
var statearr_39127_39139 = state_39123__$1;
(statearr_39127_39139[(1)] = (5));

} else {
var statearr_39128_39140 = state_39123__$1;
(statearr_39128_39140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39124 === (5))){
var inst_39111 = (state_39123[(7)]);
var inst_39113 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39111);
var state_39123__$1 = state_39123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39123__$1,(8),inst_39113);
} else {
if((state_val_39124 === (6))){
var state_39123__$1 = state_39123;
var statearr_39129_39141 = state_39123__$1;
(statearr_39129_39141[(2)] = null);

(statearr_39129_39141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39124 === (7))){
var inst_39119 = (state_39123[(2)]);
var state_39123__$1 = state_39123;
var statearr_39130_39142 = state_39123__$1;
(statearr_39130_39142[(2)] = inst_39119);

(statearr_39130_39142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39124 === (8))){
var inst_39115 = (state_39123[(2)]);
var state_39123__$1 = (function (){var statearr_39131 = state_39123;
(statearr_39131[(8)] = inst_39115);

return statearr_39131;
})();
var statearr_39132_39143 = state_39123__$1;
(statearr_39132_39143[(2)] = null);

(statearr_39132_39143[(1)] = (2));


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
});})(c__32595__auto___39137,ch))
;
return ((function (switch__32505__auto__,c__32595__auto___39137,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32506__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32506__auto____0 = (function (){
var statearr_39133 = [null,null,null,null,null,null,null,null,null];
(statearr_39133[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32506__auto__);

(statearr_39133[(1)] = (1));

return statearr_39133;
});
var figwheel$client$heads_up_plugin_$_state_machine__32506__auto____1 = (function (state_39123){
while(true){
var ret_value__32507__auto__ = (function (){try{while(true){
var result__32508__auto__ = switch__32505__auto__.call(null,state_39123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32508__auto__;
}
break;
}
}catch (e39134){if((e39134 instanceof Object)){
var ex__32509__auto__ = e39134;
var statearr_39135_39144 = state_39123;
(statearr_39135_39144[(5)] = ex__32509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39145 = state_39123;
state_39123 = G__39145;
continue;
} else {
return ret_value__32507__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__32506__auto__ = function(state_39123){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32506__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32506__auto____1.call(this,state_39123);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__32506__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32506__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32506__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32506__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32506__auto__;
})()
;})(switch__32505__auto__,c__32595__auto___39137,ch))
})();
var state__32597__auto__ = (function (){var statearr_39136 = f__32596__auto__.call(null);
(statearr_39136[(6)] = c__32595__auto___39137);

return statearr_39136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32597__auto__);
});})(c__32595__auto___39137,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32595__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32595__auto__){
return (function (){
var f__32596__auto__ = (function (){var switch__32505__auto__ = ((function (c__32595__auto__){
return (function (state_39151){
var state_val_39152 = (state_39151[(1)]);
if((state_val_39152 === (1))){
var inst_39146 = cljs.core.async.timeout.call(null,(3000));
var state_39151__$1 = state_39151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39151__$1,(2),inst_39146);
} else {
if((state_val_39152 === (2))){
var inst_39148 = (state_39151[(2)]);
var inst_39149 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39151__$1 = (function (){var statearr_39153 = state_39151;
(statearr_39153[(7)] = inst_39148);

return statearr_39153;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39151__$1,inst_39149);
} else {
return null;
}
}
});})(c__32595__auto__))
;
return ((function (switch__32505__auto__,c__32595__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__32506__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__32506__auto____0 = (function (){
var statearr_39154 = [null,null,null,null,null,null,null,null];
(statearr_39154[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32506__auto__);

(statearr_39154[(1)] = (1));

return statearr_39154;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32506__auto____1 = (function (state_39151){
while(true){
var ret_value__32507__auto__ = (function (){try{while(true){
var result__32508__auto__ = switch__32505__auto__.call(null,state_39151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32508__auto__;
}
break;
}
}catch (e39155){if((e39155 instanceof Object)){
var ex__32509__auto__ = e39155;
var statearr_39156_39158 = state_39151;
(statearr_39156_39158[(5)] = ex__32509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39159 = state_39151;
state_39151 = G__39159;
continue;
} else {
return ret_value__32507__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__32506__auto__ = function(state_39151){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32506__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32506__auto____1.call(this,state_39151);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__32506__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32506__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32506__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32506__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32506__auto__;
})()
;})(switch__32505__auto__,c__32595__auto__))
})();
var state__32597__auto__ = (function (){var statearr_39157 = f__32596__auto__.call(null);
(statearr_39157[(6)] = c__32595__auto__);

return statearr_39157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32597__auto__);
});})(c__32595__auto__))
);

return c__32595__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32595__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32595__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__32596__auto__ = (function (){var switch__32505__auto__ = ((function (c__32595__auto__,figwheel_version,temp__5457__auto__){
return (function (state_39166){
var state_val_39167 = (state_39166[(1)]);
if((state_val_39167 === (1))){
var inst_39160 = cljs.core.async.timeout.call(null,(2000));
var state_39166__$1 = state_39166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39166__$1,(2),inst_39160);
} else {
if((state_val_39167 === (2))){
var inst_39162 = (state_39166[(2)]);
var inst_39163 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_39164 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39163);
var state_39166__$1 = (function (){var statearr_39168 = state_39166;
(statearr_39168[(7)] = inst_39162);

return statearr_39168;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39166__$1,inst_39164);
} else {
return null;
}
}
});})(c__32595__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__32505__auto__,c__32595__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32506__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32506__auto____0 = (function (){
var statearr_39169 = [null,null,null,null,null,null,null,null];
(statearr_39169[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32506__auto__);

(statearr_39169[(1)] = (1));

return statearr_39169;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32506__auto____1 = (function (state_39166){
while(true){
var ret_value__32507__auto__ = (function (){try{while(true){
var result__32508__auto__ = switch__32505__auto__.call(null,state_39166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32508__auto__;
}
break;
}
}catch (e39170){if((e39170 instanceof Object)){
var ex__32509__auto__ = e39170;
var statearr_39171_39173 = state_39166;
(statearr_39171_39173[(5)] = ex__32509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39174 = state_39166;
state_39166 = G__39174;
continue;
} else {
return ret_value__32507__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32506__auto__ = function(state_39166){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32506__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32506__auto____1.call(this,state_39166);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32506__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32506__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32506__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32506__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32506__auto__;
})()
;})(switch__32505__auto__,c__32595__auto__,figwheel_version,temp__5457__auto__))
})();
var state__32597__auto__ = (function (){var statearr_39172 = f__32596__auto__.call(null);
(statearr_39172[(6)] = c__32595__auto__);

return statearr_39172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32597__auto__);
});})(c__32595__auto__,figwheel_version,temp__5457__auto__))
);

return c__32595__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39175){
var map__39176 = p__39175;
var map__39176__$1 = ((((!((map__39176 == null)))?((((map__39176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39176.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39176):map__39176);
var file = cljs.core.get.call(null,map__39176__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39176__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39176__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39178 = "";
var G__39178__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39178),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__39178);
var G__39178__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39178__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39178__$1);
if(cljs.core.truth_((function (){var and__29547__auto__ = line;
if(cljs.core.truth_(and__29547__auto__)){
return column;
} else {
return and__29547__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39178__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__39178__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39179){
var map__39180 = p__39179;
var map__39180__$1 = ((((!((map__39180 == null)))?((((map__39180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39180.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39180):map__39180);
var ed = map__39180__$1;
var formatted_exception = cljs.core.get.call(null,map__39180__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39180__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39180__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39182_39186 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39183_39187 = null;
var count__39184_39188 = (0);
var i__39185_39189 = (0);
while(true){
if((i__39185_39189 < count__39184_39188)){
var msg_39190 = cljs.core._nth.call(null,chunk__39183_39187,i__39185_39189);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39190);

var G__39191 = seq__39182_39186;
var G__39192 = chunk__39183_39187;
var G__39193 = count__39184_39188;
var G__39194 = (i__39185_39189 + (1));
seq__39182_39186 = G__39191;
chunk__39183_39187 = G__39192;
count__39184_39188 = G__39193;
i__39185_39189 = G__39194;
continue;
} else {
var temp__5457__auto___39195 = cljs.core.seq.call(null,seq__39182_39186);
if(temp__5457__auto___39195){
var seq__39182_39196__$1 = temp__5457__auto___39195;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39182_39196__$1)){
var c__30490__auto___39197 = cljs.core.chunk_first.call(null,seq__39182_39196__$1);
var G__39198 = cljs.core.chunk_rest.call(null,seq__39182_39196__$1);
var G__39199 = c__30490__auto___39197;
var G__39200 = cljs.core.count.call(null,c__30490__auto___39197);
var G__39201 = (0);
seq__39182_39186 = G__39198;
chunk__39183_39187 = G__39199;
count__39184_39188 = G__39200;
i__39185_39189 = G__39201;
continue;
} else {
var msg_39202 = cljs.core.first.call(null,seq__39182_39196__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39202);

var G__39203 = cljs.core.next.call(null,seq__39182_39196__$1);
var G__39204 = null;
var G__39205 = (0);
var G__39206 = (0);
seq__39182_39186 = G__39203;
chunk__39183_39187 = G__39204;
count__39184_39188 = G__39205;
i__39185_39189 = G__39206;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39207){
var map__39208 = p__39207;
var map__39208__$1 = ((((!((map__39208 == null)))?((((map__39208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39208.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39208):map__39208);
var w = map__39208__$1;
var message = cljs.core.get.call(null,map__39208__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__29547__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__29547__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__29547__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__39210 = cljs.core.seq.call(null,plugins);
var chunk__39211 = null;
var count__39212 = (0);
var i__39213 = (0);
while(true){
if((i__39213 < count__39212)){
var vec__39214 = cljs.core._nth.call(null,chunk__39211,i__39213);
var k = cljs.core.nth.call(null,vec__39214,(0),null);
var plugin = cljs.core.nth.call(null,vec__39214,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39220 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39210,chunk__39211,count__39212,i__39213,pl_39220,vec__39214,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39220.call(null,msg_hist);
});})(seq__39210,chunk__39211,count__39212,i__39213,pl_39220,vec__39214,k,plugin))
);
} else {
}

var G__39221 = seq__39210;
var G__39222 = chunk__39211;
var G__39223 = count__39212;
var G__39224 = (i__39213 + (1));
seq__39210 = G__39221;
chunk__39211 = G__39222;
count__39212 = G__39223;
i__39213 = G__39224;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__39210);
if(temp__5457__auto__){
var seq__39210__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39210__$1)){
var c__30490__auto__ = cljs.core.chunk_first.call(null,seq__39210__$1);
var G__39225 = cljs.core.chunk_rest.call(null,seq__39210__$1);
var G__39226 = c__30490__auto__;
var G__39227 = cljs.core.count.call(null,c__30490__auto__);
var G__39228 = (0);
seq__39210 = G__39225;
chunk__39211 = G__39226;
count__39212 = G__39227;
i__39213 = G__39228;
continue;
} else {
var vec__39217 = cljs.core.first.call(null,seq__39210__$1);
var k = cljs.core.nth.call(null,vec__39217,(0),null);
var plugin = cljs.core.nth.call(null,vec__39217,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39229 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39210,chunk__39211,count__39212,i__39213,pl_39229,vec__39217,k,plugin,seq__39210__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39229.call(null,msg_hist);
});})(seq__39210,chunk__39211,count__39212,i__39213,pl_39229,vec__39217,k,plugin,seq__39210__$1,temp__5457__auto__))
);
} else {
}

var G__39230 = cljs.core.next.call(null,seq__39210__$1);
var G__39231 = null;
var G__39232 = (0);
var G__39233 = (0);
seq__39210 = G__39230;
chunk__39211 = G__39231;
count__39212 = G__39232;
i__39213 = G__39233;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__39235 = arguments.length;
switch (G__39235) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__39236_39241 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39237_39242 = null;
var count__39238_39243 = (0);
var i__39239_39244 = (0);
while(true){
if((i__39239_39244 < count__39238_39243)){
var msg_39245 = cljs.core._nth.call(null,chunk__39237_39242,i__39239_39244);
figwheel.client.socket.handle_incoming_message.call(null,msg_39245);

var G__39246 = seq__39236_39241;
var G__39247 = chunk__39237_39242;
var G__39248 = count__39238_39243;
var G__39249 = (i__39239_39244 + (1));
seq__39236_39241 = G__39246;
chunk__39237_39242 = G__39247;
count__39238_39243 = G__39248;
i__39239_39244 = G__39249;
continue;
} else {
var temp__5457__auto___39250 = cljs.core.seq.call(null,seq__39236_39241);
if(temp__5457__auto___39250){
var seq__39236_39251__$1 = temp__5457__auto___39250;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39236_39251__$1)){
var c__30490__auto___39252 = cljs.core.chunk_first.call(null,seq__39236_39251__$1);
var G__39253 = cljs.core.chunk_rest.call(null,seq__39236_39251__$1);
var G__39254 = c__30490__auto___39252;
var G__39255 = cljs.core.count.call(null,c__30490__auto___39252);
var G__39256 = (0);
seq__39236_39241 = G__39253;
chunk__39237_39242 = G__39254;
count__39238_39243 = G__39255;
i__39239_39244 = G__39256;
continue;
} else {
var msg_39257 = cljs.core.first.call(null,seq__39236_39251__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39257);

var G__39258 = cljs.core.next.call(null,seq__39236_39251__$1);
var G__39259 = null;
var G__39260 = (0);
var G__39261 = (0);
seq__39236_39241 = G__39258;
chunk__39237_39242 = G__39259;
count__39238_39243 = G__39260;
i__39239_39244 = G__39261;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__30845__auto__ = [];
var len__30838__auto___39266 = arguments.length;
var i__30839__auto___39267 = (0);
while(true){
if((i__30839__auto___39267 < len__30838__auto___39266)){
args__30845__auto__.push((arguments[i__30839__auto___39267]));

var G__39268 = (i__30839__auto___39267 + (1));
i__30839__auto___39267 = G__39268;
continue;
} else {
}
break;
}

var argseq__30846__auto__ = ((((0) < args__30845__auto__.length))?(new cljs.core.IndexedSeq(args__30845__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__30846__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39263){
var map__39264 = p__39263;
var map__39264__$1 = ((((!((map__39264 == null)))?((((map__39264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39264):map__39264);
var opts = map__39264__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39262){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39262));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39269){if((e39269 instanceof Error)){
var e = e39269;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39269;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__39270){
var map__39271 = p__39270;
var map__39271__$1 = ((((!((map__39271 == null)))?((((map__39271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39271.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39271):map__39271);
var msg_name = cljs.core.get.call(null,map__39271__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1511975280980
