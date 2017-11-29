// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38505){
var map__38506 = p__38505;
var map__38506__$1 = ((((!((map__38506 == null)))?((((map__38506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38506.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38506):map__38506);
var m = map__38506__$1;
var n = cljs.core.get.call(null,map__38506__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38506__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38508_38530 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38509_38531 = null;
var count__38510_38532 = (0);
var i__38511_38533 = (0);
while(true){
if((i__38511_38533 < count__38510_38532)){
var f_38534 = cljs.core._nth.call(null,chunk__38509_38531,i__38511_38533);
cljs.core.println.call(null,"  ",f_38534);

var G__38535 = seq__38508_38530;
var G__38536 = chunk__38509_38531;
var G__38537 = count__38510_38532;
var G__38538 = (i__38511_38533 + (1));
seq__38508_38530 = G__38535;
chunk__38509_38531 = G__38536;
count__38510_38532 = G__38537;
i__38511_38533 = G__38538;
continue;
} else {
var temp__5457__auto___38539 = cljs.core.seq.call(null,seq__38508_38530);
if(temp__5457__auto___38539){
var seq__38508_38540__$1 = temp__5457__auto___38539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38508_38540__$1)){
var c__30490__auto___38541 = cljs.core.chunk_first.call(null,seq__38508_38540__$1);
var G__38542 = cljs.core.chunk_rest.call(null,seq__38508_38540__$1);
var G__38543 = c__30490__auto___38541;
var G__38544 = cljs.core.count.call(null,c__30490__auto___38541);
var G__38545 = (0);
seq__38508_38530 = G__38542;
chunk__38509_38531 = G__38543;
count__38510_38532 = G__38544;
i__38511_38533 = G__38545;
continue;
} else {
var f_38546 = cljs.core.first.call(null,seq__38508_38540__$1);
cljs.core.println.call(null,"  ",f_38546);

var G__38547 = cljs.core.next.call(null,seq__38508_38540__$1);
var G__38548 = null;
var G__38549 = (0);
var G__38550 = (0);
seq__38508_38530 = G__38547;
chunk__38509_38531 = G__38548;
count__38510_38532 = G__38549;
i__38511_38533 = G__38550;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38551 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__29559__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__29559__auto__)){
return or__29559__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38551);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38551)))?cljs.core.second.call(null,arglists_38551):arglists_38551));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38512_38552 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38513_38553 = null;
var count__38514_38554 = (0);
var i__38515_38555 = (0);
while(true){
if((i__38515_38555 < count__38514_38554)){
var vec__38516_38556 = cljs.core._nth.call(null,chunk__38513_38553,i__38515_38555);
var name_38557 = cljs.core.nth.call(null,vec__38516_38556,(0),null);
var map__38519_38558 = cljs.core.nth.call(null,vec__38516_38556,(1),null);
var map__38519_38559__$1 = ((((!((map__38519_38558 == null)))?((((map__38519_38558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38519_38558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38519_38558):map__38519_38558);
var doc_38560 = cljs.core.get.call(null,map__38519_38559__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38561 = cljs.core.get.call(null,map__38519_38559__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38557);

cljs.core.println.call(null," ",arglists_38561);

if(cljs.core.truth_(doc_38560)){
cljs.core.println.call(null," ",doc_38560);
} else {
}

var G__38562 = seq__38512_38552;
var G__38563 = chunk__38513_38553;
var G__38564 = count__38514_38554;
var G__38565 = (i__38515_38555 + (1));
seq__38512_38552 = G__38562;
chunk__38513_38553 = G__38563;
count__38514_38554 = G__38564;
i__38515_38555 = G__38565;
continue;
} else {
var temp__5457__auto___38566 = cljs.core.seq.call(null,seq__38512_38552);
if(temp__5457__auto___38566){
var seq__38512_38567__$1 = temp__5457__auto___38566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38512_38567__$1)){
var c__30490__auto___38568 = cljs.core.chunk_first.call(null,seq__38512_38567__$1);
var G__38569 = cljs.core.chunk_rest.call(null,seq__38512_38567__$1);
var G__38570 = c__30490__auto___38568;
var G__38571 = cljs.core.count.call(null,c__30490__auto___38568);
var G__38572 = (0);
seq__38512_38552 = G__38569;
chunk__38513_38553 = G__38570;
count__38514_38554 = G__38571;
i__38515_38555 = G__38572;
continue;
} else {
var vec__38521_38573 = cljs.core.first.call(null,seq__38512_38567__$1);
var name_38574 = cljs.core.nth.call(null,vec__38521_38573,(0),null);
var map__38524_38575 = cljs.core.nth.call(null,vec__38521_38573,(1),null);
var map__38524_38576__$1 = ((((!((map__38524_38575 == null)))?((((map__38524_38575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38524_38575.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38524_38575):map__38524_38575);
var doc_38577 = cljs.core.get.call(null,map__38524_38576__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38578 = cljs.core.get.call(null,map__38524_38576__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38574);

cljs.core.println.call(null," ",arglists_38578);

if(cljs.core.truth_(doc_38577)){
cljs.core.println.call(null," ",doc_38577);
} else {
}

var G__38579 = cljs.core.next.call(null,seq__38512_38567__$1);
var G__38580 = null;
var G__38581 = (0);
var G__38582 = (0);
seq__38512_38552 = G__38579;
chunk__38513_38553 = G__38580;
count__38514_38554 = G__38581;
i__38515_38555 = G__38582;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__38526 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38527 = null;
var count__38528 = (0);
var i__38529 = (0);
while(true){
if((i__38529 < count__38528)){
var role = cljs.core._nth.call(null,chunk__38527,i__38529);
var temp__5457__auto___38583__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___38583__$1)){
var spec_38584 = temp__5457__auto___38583__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38584));
} else {
}

var G__38585 = seq__38526;
var G__38586 = chunk__38527;
var G__38587 = count__38528;
var G__38588 = (i__38529 + (1));
seq__38526 = G__38585;
chunk__38527 = G__38586;
count__38528 = G__38587;
i__38529 = G__38588;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__38526);
if(temp__5457__auto____$1){
var seq__38526__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38526__$1)){
var c__30490__auto__ = cljs.core.chunk_first.call(null,seq__38526__$1);
var G__38589 = cljs.core.chunk_rest.call(null,seq__38526__$1);
var G__38590 = c__30490__auto__;
var G__38591 = cljs.core.count.call(null,c__30490__auto__);
var G__38592 = (0);
seq__38526 = G__38589;
chunk__38527 = G__38590;
count__38528 = G__38591;
i__38529 = G__38592;
continue;
} else {
var role = cljs.core.first.call(null,seq__38526__$1);
var temp__5457__auto___38593__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___38593__$2)){
var spec_38594 = temp__5457__auto___38593__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38594));
} else {
}

var G__38595 = cljs.core.next.call(null,seq__38526__$1);
var G__38596 = null;
var G__38597 = (0);
var G__38598 = (0);
seq__38526 = G__38595;
chunk__38527 = G__38596;
count__38528 = G__38597;
i__38529 = G__38598;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1511975280345
