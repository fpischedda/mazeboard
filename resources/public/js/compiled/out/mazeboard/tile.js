// Compiled by ClojureScript 1.9.946 {}
goog.provide('mazeboard.tile');
goog.require('cljs.core');
mazeboard.tile.make_tile = (function mazeboard$tile$make_tile(north,east,south,west){

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [north,east,south,west], null);
});
mazeboard.tile.random_wall = (function mazeboard$tile$random_wall(){

if((cljs.core.rand.call(null) > 0.5)){
return new cljs.core.Keyword(null,"solid","solid",-2023773691);
} else {
return new cljs.core.Keyword(null,"open","open",-1763596448);
}
});
mazeboard.tile.random_tile = (function mazeboard$tile$random_tile(){

return mazeboard.tile.make_tile.call(null,mazeboard.tile.random_wall.call(null),mazeboard.tile.random_wall.call(null),mazeboard.tile.random_wall.call(null),mazeboard.tile.random_wall.call(null));
});
mazeboard.tile.rotate_tile_left = (function mazeboard$tile$rotate_tile_left(tile){

return cljs.core.conj.call(null,cljs.core.subvec.call(null,tile,(1),(4)),cljs.core.first.call(null,tile));
});
mazeboard.tile.rotate_tile_right = (function mazeboard$tile$rotate_tile_right(tile){

return cljs.core.into.call(null,cljs.core.subvec.call(null,tile,(3)),cljs.core.subvec.call(null,tile,(0),(3)));
});
mazeboard.tile.rotate_tile = (function mazeboard$tile$rotate_tile(dir,tile){

if(cljs.core._EQ_.call(null,dir,new cljs.core.Keyword(null,"right","right",-452581833))){
return mazeboard.tile.rotate_tile_right.call(null,tile);
} else {
return mazeboard.tile.rotate_tile_left.call(null,tile);
}
});
mazeboard.tile.at_north = (function mazeboard$tile$at_north(tile){
return cljs.core.get.call(null,tile,(0));
});
mazeboard.tile.at_east = (function mazeboard$tile$at_east(tile){
return cljs.core.get.call(null,tile,(1));
});
mazeboard.tile.at_south = (function mazeboard$tile$at_south(tile){
return cljs.core.get.call(null,tile,(2));
});
mazeboard.tile.at_west = (function mazeboard$tile$at_west(tile){
return cljs.core.get.call(null,tile,(3));
});
mazeboard.tile.wall_name = new cljs.core.PersistentArrayMap(null, 4, [(0),new cljs.core.Keyword(null,"north","north",651323902),(1),new cljs.core.Keyword(null,"east","east",1189821678),(2),new cljs.core.Keyword(null,"south","south",1586796293),(3),new cljs.core.Keyword(null,"west","west",708776677)], null);
mazeboard.tile.open_walls = (function mazeboard$tile$open_walls(tile){
return cljs.core.filter.call(null,(function (p1__16570_SHARP_){
return !((p1__16570_SHARP_ == null));
}),cljs.core.map_indexed.call(null,(function (idx,wall){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"open","open",-1763596448),wall)){
return mazeboard.tile.wall_name.call(null,idx);
} else {
return null;
}
}),tile));
});
mazeboard.tile.direction_fn = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"north","north",651323902),(function (p1__16571_SHARP_){
return cljs.core.get.call(null,p1__16571_SHARP_,(0));
}),new cljs.core.Keyword(null,"east","east",1189821678),(function (p1__16572_SHARP_){
return cljs.core.get.call(null,p1__16572_SHARP_,(1));
}),new cljs.core.Keyword(null,"south","south",1586796293),(function (p1__16573_SHARP_){
return cljs.core.get.call(null,p1__16573_SHARP_,(2));
}),new cljs.core.Keyword(null,"west","west",708776677),(function (p1__16574_SHARP_){
return cljs.core.get.call(null,p1__16574_SHARP_,(3));
})], null);
mazeboard.tile.wall_at = (function mazeboard$tile$wall_at(side,tile){

return mazeboard.tile.direction_fn.call(null,side).call(null,tile);
});
mazeboard.tile.is_open_QMARK_ = (function mazeboard$tile$is_open_QMARK_(side,tile){

return cljs.core._EQ_.call(null,mazeboard.tile.wall_at.call(null,side,tile),new cljs.core.Keyword(null,"open","open",-1763596448));
});

//# sourceMappingURL=tile.js.map?rel=1511973568173
