// Compiled by ClojureScript 1.9.946 {}
goog.provide('mazeboard.board');
goog.require('cljs.core');
goog.require('mazeboard.tile');
mazeboard.board.make_board_row = (function mazeboard$board$make_board_row(size,tile_fn){

return cljs.core.vec.call(null,cljs.core.repeatedly.call(null,size,tile_fn));
});
mazeboard.board.make_board_tiles = (function mazeboard$board$make_board_tiles(width,height,tile_fn){

return cljs.core.vec.call(null,cljs.core.repeatedly.call(null,height,(function (){
return mazeboard.board.make_board_row.call(null,width,tile_fn);
})));
});
/**
 * creates a board, if no tile-fn function is provided tile/random-tile will be used
 */
mazeboard.board.make_board = (function mazeboard$board$make_board(var_args){
var G__16578 = arguments.length;
switch (G__16578) {
case 2:
return mazeboard.board.make_board.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mazeboard.board.make_board.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mazeboard.board.make_board.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return mazeboard.board.make_board.call(null,width,height,mazeboard.tile.random_tile);
});

mazeboard.board.make_board.cljs$core$IFn$_invoke$arity$3 = (function (width,height,tile_fn){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"tiles","tiles",178505240),mazeboard.board.make_board_tiles.call(null,width,height,tile_fn)], null);
});

mazeboard.board.make_board.cljs$lang$maxFixedArity = 3;

mazeboard.board.tile_at = (function mazeboard$board$tile_at(board,row,col){

return cljs.core.get.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(board),row),col);
});
mazeboard.board.update_board = (function mazeboard$board$update_board(board,row,col,new_tile){

return cljs.core.assoc_in.call(null,board,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tiles","tiles",178505240),row,col], null),new_tile);
});
mazeboard.board.rotate_board_tile = (function mazeboard$board$rotate_board_tile(board,row,col,dir){

return mazeboard.board.update_board.call(null,board,row,col,mazeboard.tile.rotate_tile.call(null,dir,mazeboard.board.tile_at.call(null,board,row,col)));
});
mazeboard.board.board_width = (function mazeboard$board$board_width(board){

return new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(board);
});
mazeboard.board.board_height = (function mazeboard$board$board_height(board){

return new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(board);
});
mazeboard.board.is_inside_QMARK_ = (function mazeboard$board$is_inside_QMARK_(board,row,col){

return ((row >= (0))) && ((row < mazeboard.board.board_height.call(null,board))) && ((col >= (0))) && ((col < mazeboard.board.board_width.call(null,board)));
});

//# sourceMappingURL=board.js.map?rel=1511973568197
