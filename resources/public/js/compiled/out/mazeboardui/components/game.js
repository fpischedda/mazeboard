// Compiled by ClojureScript 1.9.946 {}
goog.provide('mazeboardui.components.game');
goog.require('cljs.core');
goog.require('citrus.core');
goog.require('rum.core');
goog.require('mazeboardui.utils');
mazeboardui.components.game.tile_view = rum.core.build_defc.call(null,(function (tile,player){
return React.createElement("div",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tile",mazeboardui.utils.tile_wall_classes.call(null,tile)], null))}),sablono.interpreter.interpret.call(null,((!((player == null)))?new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(player):null)));
}),null,"tile-view");
mazeboardui.components.game.board_row_view = rum.core.build_defc.call(null,(function (row){
var attrs16718 = cljs.core.doall.call(null,(function (){var iter__9270__auto__ = (function mazeboardui$components$game$iter__16719(s__16720){
return (new cljs.core.LazySeq(null,(function (){
var s__16720__$1 = s__16720;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16720__$1);
if(temp__5457__auto__){
var s__16720__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16720__$2)){
var c__9268__auto__ = cljs.core.chunk_first.call(null,s__16720__$2);
var size__9269__auto__ = cljs.core.count.call(null,c__9268__auto__);
var b__16722 = cljs.core.chunk_buffer.call(null,size__9269__auto__);
if((function (){var i__16721 = (0);
while(true){
if((i__16721 < size__9269__auto__)){
var tile = cljs.core._nth.call(null,c__9268__auto__,i__16721);
cljs.core.chunk_append.call(null,b__16722,mazeboardui.components.game.tile_view.call(null,tile,mazeboardui.components.game.player));

var G__16723 = (i__16721 + (1));
i__16721 = G__16723;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16722),mazeboardui$components$game$iter__16719.call(null,cljs.core.chunk_rest.call(null,s__16720__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16722),null);
}
} else {
var tile = cljs.core.first.call(null,s__16720__$2);
return cljs.core.cons.call(null,mazeboardui.components.game.tile_view.call(null,tile,mazeboardui.components.game.player),mazeboardui$components$game$iter__16719.call(null,cljs.core.rest.call(null,s__16720__$2)));
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
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16718))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["board-row"], null)], null),attrs16718)):({"className": "board-row"})),((cljs.core.map_QMARK_.call(null,attrs16718))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16718)], null)));
}),null,"board-row-view");
mazeboardui.components.game.board_view = rum.core.build_defc.call(null,(function (board){
var attrs16724 = cljs.core.doall.call(null,(function (){var iter__9270__auto__ = (function mazeboardui$components$game$iter__16725(s__16726){
return (new cljs.core.LazySeq(null,(function (){
var s__16726__$1 = s__16726;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16726__$1);
if(temp__5457__auto__){
var s__16726__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16726__$2)){
var c__9268__auto__ = cljs.core.chunk_first.call(null,s__16726__$2);
var size__9269__auto__ = cljs.core.count.call(null,c__9268__auto__);
var b__16728 = cljs.core.chunk_buffer.call(null,size__9269__auto__);
if((function (){var i__16727 = (0);
while(true){
if((i__16727 < size__9269__auto__)){
var row = cljs.core._nth.call(null,c__9268__auto__,i__16727);
cljs.core.chunk_append.call(null,b__16728,mazeboardui.components.game.board_row_view.call(null,row));

var G__16729 = (i__16727 + (1));
i__16727 = G__16729;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16728),mazeboardui$components$game$iter__16725.call(null,cljs.core.chunk_rest.call(null,s__16726__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16728),null);
}
} else {
var row = cljs.core.first.call(null,s__16726__$2);
return cljs.core.cons.call(null,mazeboardui.components.game.board_row_view.call(null,row),mazeboardui$components$game$iter__16725.call(null,cljs.core.rest.call(null,s__16726__$2)));
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
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16724))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["board"], null)], null),attrs16724)):({"className": "board"})),((cljs.core.map_QMARK_.call(null,attrs16724))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16724)], null)));
}),null,"board-view");
mazeboardui.components.game.game_view = rum.core.build_defc.call(null,(function (game){
return React.createElement("div",null,React.createElement("h1",null,"Mazeboard game client"),sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mazeboardui.components.game.board_view,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game)], null)));
}),null,"game-view");

//# sourceMappingURL=game.js.map?rel=1511973568621
