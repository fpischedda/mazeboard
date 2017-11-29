// Compiled by ClojureScript 1.9.946 {}
goog.provide('mazeboard.ui.components.game');
goog.require('cljs.core');
goog.require('citrus.core');
goog.require('rum.core');
goog.require('mazeboard.ui.utils');
mazeboard.ui.components.game.tile_view = rum.core.build_defc.call(null,(function (tile,player){
return React.createElement("div",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tile",mazeboard.ui.utils.tile_wall_classes.call(null,tile)], null))}),sablono.interpreter.interpret.call(null,((!((player == null)))?new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(player):null)));
}),null,"tile-view");
mazeboard.ui.components.game.board_row_view = rum.core.build_defc.call(null,(function (row){
var attrs12911 = cljs.core.doall.call(null,(function (){var iter__9270__auto__ = (function mazeboard$ui$components$game$iter__12912(s__12913){
return (new cljs.core.LazySeq(null,(function (){
var s__12913__$1 = s__12913;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__12913__$1);
if(temp__5457__auto__){
var s__12913__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12913__$2)){
var c__9268__auto__ = cljs.core.chunk_first.call(null,s__12913__$2);
var size__9269__auto__ = cljs.core.count.call(null,c__9268__auto__);
var b__12915 = cljs.core.chunk_buffer.call(null,size__9269__auto__);
if((function (){var i__12914 = (0);
while(true){
if((i__12914 < size__9269__auto__)){
var tile = cljs.core._nth.call(null,c__9268__auto__,i__12914);
cljs.core.chunk_append.call(null,b__12915,mazeboard.ui.components.game.tile_view.call(null,tile,mazeboard.ui.components.game.player));

var G__12916 = (i__12914 + (1));
i__12914 = G__12916;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12915),mazeboard$ui$components$game$iter__12912.call(null,cljs.core.chunk_rest.call(null,s__12913__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12915),null);
}
} else {
var tile = cljs.core.first.call(null,s__12913__$2);
return cljs.core.cons.call(null,mazeboard.ui.components.game.tile_view.call(null,tile,mazeboard.ui.components.game.player),mazeboard$ui$components$game$iter__12912.call(null,cljs.core.rest.call(null,s__12913__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9270__auto__.call(null,row);
})());
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs12911))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["board-row"], null)], null),attrs12911)):({"className": "board-row"})),((cljs.core.map_QMARK_.call(null,attrs12911))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12911)], null)));
}),null,"board-row-view");
mazeboard.ui.components.game.board_view = rum.core.build_defc.call(null,(function (board){
var attrs12917 = cljs.core.doall.call(null,(function (){var iter__9270__auto__ = (function mazeboard$ui$components$game$iter__12918(s__12919){
return (new cljs.core.LazySeq(null,(function (){
var s__12919__$1 = s__12919;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__12919__$1);
if(temp__5457__auto__){
var s__12919__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12919__$2)){
var c__9268__auto__ = cljs.core.chunk_first.call(null,s__12919__$2);
var size__9269__auto__ = cljs.core.count.call(null,c__9268__auto__);
var b__12921 = cljs.core.chunk_buffer.call(null,size__9269__auto__);
if((function (){var i__12920 = (0);
while(true){
if((i__12920 < size__9269__auto__)){
var row = cljs.core._nth.call(null,c__9268__auto__,i__12920);
cljs.core.chunk_append.call(null,b__12921,mazeboard.ui.components.game.board_row_view.call(null,row));

var G__12922 = (i__12920 + (1));
i__12920 = G__12922;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12921),mazeboard$ui$components$game$iter__12918.call(null,cljs.core.chunk_rest.call(null,s__12919__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12921),null);
}
} else {
var row = cljs.core.first.call(null,s__12919__$2);
return cljs.core.cons.call(null,mazeboard.ui.components.game.board_row_view.call(null,row),mazeboard$ui$components$game$iter__12918.call(null,cljs.core.rest.call(null,s__12919__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9270__auto__.call(null,new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(board));
})());
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs12917))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["board"], null)], null),attrs12917)):({"className": "board"})),((cljs.core.map_QMARK_.call(null,attrs12917))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12917)], null)));
}),null,"board-view");
mazeboard.ui.components.game.game_view = rum.core.build_defc.call(null,(function (game){
return React.createElement("div",null,React.createElement("h1",null,"Mazeboard game client"),sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mazeboard.ui.components.game.board_view,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game)], null)));
}),null,"game-view");

//# sourceMappingURL=game.js.map?rel=1511974612149
