// Compiled by ClojureScript 1.9.946 {}
goog.provide('mazeboardui.components.dashboard');
goog.require('cljs.core');
goog.require('accountant.core');
goog.require('citrus.core');
goog.require('clojure.string');
goog.require('rum.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('mazeboardui.dom');
goog.require('mazeboardui.utils');
goog.require('mazeboardui.config');
mazeboardui.components.dashboard.toggle_game_editing = (function mazeboardui$components$dashboard$toggle_game_editing(game_id){
var show_elem = mazeboardui.dom.q.call(null,["#item-show-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(game_id)].join(''));
var edit_elem = mazeboardui.dom.q.call(null,["#item-edit-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(game_id)].join(''));
mazeboardui.dom.toggle_class_BANG_.call(null,show_elem,"hidden");

return mazeboardui.dom.toggle_class_BANG_.call(null,edit_elem,"hidden");
});
mazeboardui.components.dashboard.game_delete = rum.core.build_defc.call(null,(function (r,game_id){
return React.createElement("button",({"onClick": (function (){
return citrus.core.dispatch_BANG_.call(null,r,new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),new cljs.core.Keyword(null,"delete-game","delete-game",-970899326),game_id);
})}),"Delete");
}),null,"game-delete");
mazeboardui.components.dashboard.update_game = (function mazeboardui$components$dashboard$update_game(r,game_id,max_players){
return citrus.core.dispatch_BANG_.call(null,r,new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),new cljs.core.Keyword(null,"update-game","update-game",1297852920),game_id,max_players);
});
mazeboardui.components.dashboard.game_update = rum.core.build_defc.call(null,(function (r,game_id){
return React.createElement("button",({"onClick": (function (e){
mazeboardui.components.dashboard.toggle_game_editing.call(null,game_id);

return mazeboardui.components.dashboard.update_game.call(null,r,game_id,mazeboardui.dom.value.call(null,mazeboardui.dom.q.call(null,["#max-palyers-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(game_id)].join(''))));
})}),"Update");
}),null,"game-update");
mazeboardui.components.dashboard.game_cancel_edit = rum.core.build_defc.call(null,(function (game_id){
return React.createElement("button",({"onClick": (function (){
return mazeboardui.components.dashboard.toggle_game_editing.call(null,game_id);
})}),"Cancel");
}),null,"game-cancel-edit");
mazeboardui.components.dashboard.create_game = (function mazeboardui$components$dashboard$create_game(r,max_players){
return citrus.core.dispatch_BANG_.call(null,r,new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),new cljs.core.Keyword(null,"create-game","create-game",537929090),cljs.core.name);
});
mazeboardui.components.dashboard.game_new_button = rum.core.build_defc.call(null,(function (r){
return React.createElement("button",({"onClick": (function (e){
return mazeboardui.components.dashboard.create_game.call(null,r,mazeboardui.dom.value.call(null,mazeboardui.dom.q.call(null,"#max-players")));
})}),"Create game");
}),null,"game-new-button");
mazeboardui.components.dashboard.game_form_new = rum.core.build_defc.call(null,(function (r){
return React.createElement("ul",({"className": "new-game-form"}),"Track new game",(function (){var attrs16481 = mazeboardui.utils.label_input.call(null,"Max players",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"max-players",new cljs.core.Keyword(null,"id","id",-1388402092),"max-players"], null));
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs16481))?sablono.interpreter.attributes.call(null,attrs16481):null),((cljs.core.map_QMARK_.call(null,attrs16481))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16481)], null)));
})(),(function (){var attrs16482 = mazeboardui.components.dashboard.game_new_button.call(null,r);
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs16482))?sablono.interpreter.attributes.call(null,attrs16482):null),((cljs.core.map_QMARK_.call(null,attrs16482))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16482)], null)));
})());
}),null,"game-form-new");
mazeboardui.components.dashboard.single_or_list = (function mazeboardui$components$dashboard$single_or_list(value,sep){
if(typeof value === 'string'){
return value;
} else {
return clojure.string.join.call(null,sep,value);
}
});
mazeboardui.components.dashboard.game_item = rum.core.build_defc.call(null,(function (r,item){
var map__16483 = item;
var map__16483__$1 = ((((!((map__16483 == null)))?((((map__16483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16483):map__16483);
var _id = cljs.core.get.call(null,map__16483__$1,new cljs.core.Keyword(null,"_id","_id",-789960287));
var status = cljs.core.get.call(null,map__16483__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var max_players = cljs.core.get.call(null,map__16483__$1,new cljs.core.Keyword(null,"max-players","max-players",1714980355));
var free_player_slots = cljs.core.get.call(null,map__16483__$1,new cljs.core.Keyword(null,"free-player-slots","free-player-slots",584615764));
var players = cljs.core.get.call(null,map__16483__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
return React.createElement("tr",({"onClick": ((function (map__16483,map__16483__$1,_id,status,max_players,free_player_slots,players){
return (function (e){
return mazeboardui.components.dashboard.toggle_game_editing.call(null,_id);
});})(map__16483,map__16483__$1,_id,status,max_players,free_player_slots,players))
, "id": ["item-show-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_id)].join(''), "key": _id, "className": "item"}),(function (){var attrs16485 = status;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs16485))?sablono.interpreter.attributes.call(null,attrs16485):null),((cljs.core.map_QMARK_.call(null,attrs16485))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16485)], null)));
})(),(function (){var attrs16486 = max_players;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs16486))?sablono.interpreter.attributes.call(null,attrs16486):null),((cljs.core.map_QMARK_.call(null,attrs16486))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16486)], null)));
})(),(function (){var attrs16487 = free_player_slots;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs16487))?sablono.interpreter.attributes.call(null,attrs16487):null),((cljs.core.map_QMARK_.call(null,attrs16487))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16487)], null)));
})(),(function (){var attrs16488 = mazeboardui.components.dashboard.single_or_list.call(null,players," ");
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs16488))?sablono.interpreter.attributes.call(null,attrs16488):null),((cljs.core.map_QMARK_.call(null,attrs16488))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16488)], null)));
})(),(function (){var attrs16489 = mazeboardui.components.dashboard.game_delete.call(null,r,_id);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs16489))?sablono.interpreter.attributes.call(null,attrs16489):null),((cljs.core.map_QMARK_.call(null,attrs16489))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16489)], null)));
})());
}),null,"game-item");
mazeboardui.components.dashboard.game_edit_item = rum.core.build_defc.call(null,(function (r,item){
var map__16490 = item;
var map__16490__$1 = ((((!((map__16490 == null)))?((((map__16490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16490.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16490):map__16490);
var _id = cljs.core.get.call(null,map__16490__$1,new cljs.core.Keyword(null,"_id","_id",-789960287));
var status = cljs.core.get.call(null,map__16490__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var max_players = cljs.core.get.call(null,map__16490__$1,new cljs.core.Keyword(null,"max-players","max-players",1714980355));
var free_player_slots = cljs.core.get.call(null,map__16490__$1,new cljs.core.Keyword(null,"free-player-slots","free-player-slots",584615764));
var players = cljs.core.get.call(null,map__16490__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
return React.createElement("tr",({"id": ["item-edit-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_id)].join(''), "key": _id, "className": "item-edit hidden"}),(function (){var attrs16492 = status;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs16492))?sablono.interpreter.attributes.call(null,attrs16492):null),((cljs.core.map_QMARK_.call(null,attrs16492))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16492)], null)));
})(),(function (){var attrs16493 = mazeboardui.utils.input.call(null,"text",["max-players",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_id)].join(''),max_players);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs16493))?sablono.interpreter.attributes.call(null,attrs16493):null),((cljs.core.map_QMARK_.call(null,attrs16493))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16493)], null)));
})(),(function (){var attrs16494 = free_player_slots;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs16494))?sablono.interpreter.attributes.call(null,attrs16494):null),((cljs.core.map_QMARK_.call(null,attrs16494))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16494)], null)));
})(),(function (){var attrs16495 = mazeboardui.components.dashboard.single_or_list.call(null,players," ");
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs16495))?sablono.interpreter.attributes.call(null,attrs16495):null),((cljs.core.map_QMARK_.call(null,attrs16495))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16495)], null)));
})(),(function (){var attrs16496 = mazeboardui.components.dashboard.game_delete.call(null,r,_id);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs16496))?sablono.interpreter.attributes.call(null,attrs16496):null),((cljs.core.map_QMARK_.call(null,attrs16496))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,mazeboardui.components.dashboard.game_update.call(null,r,_id)),sablono.interpreter.interpret.call(null,mazeboardui.components.dashboard.game_cancel_edit.call(null,_id))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16496),sablono.interpreter.interpret.call(null,mazeboardui.components.dashboard.game_update.call(null,r,_id)),sablono.interpreter.interpret.call(null,mazeboardui.components.dashboard.game_cancel_edit.call(null,_id))], null)));
})());
}),null,"game-edit-item");
mazeboardui.components.dashboard.refresh_button = rum.core.build_defc.call(null,(function (r){
return React.createElement("button",({"onClick": (function (e){
return citrus.core.dispatch_BANG_.call(null,r,new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),new cljs.core.Keyword(null,"load-games","load-games",842874466));
}), "className": "refresh-button"}),"Refresh");
}),null,"refresh-button");
mazeboardui.components.dashboard.game_lines = (function mazeboardui$components$dashboard$game_lines(r,game){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mazeboardui.components.dashboard.game_item.call(null,r,game),mazeboardui.components.dashboard.game_edit_item.call(null,r,game)], null);
});
mazeboardui.components.dashboard.game_list = rum.core.build_defc.call(null,(function (r,games){
return React.createElement("div",({"className": "games"}),React.createElement("h3",null,"Your games"),sablono.interpreter.interpret.call(null,mazeboardui.components.dashboard.refresh_button.call(null,r)),React.createElement("table",({"className": "game-list"}),React.createElement("thead",null,React.createElement("tr",null,React.createElement("td",null,"Status"),React.createElement("td",null,"Max players"),React.createElement("td",null,"Slots left"),React.createElement("td",null,"Players"),React.createElement("td",null,""))),(function (){var attrs16503 = cljs.core.map.call(null,(function (p1__16497_SHARP_){
return mazeboardui.components.dashboard.game_lines.call(null,r,p1__16497_SHARP_);
}),games);
return cljs.core.apply.call(null,React.createElement,"tbody",((cljs.core.map_QMARK_.call(null,attrs16503))?sablono.interpreter.attributes.call(null,attrs16503):null),((cljs.core.map_QMARK_.call(null,attrs16503))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16503)], null)));
})()),(function (){var attrs16500 = mazeboardui.components.dashboard.game_form_new.call(null,r);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16500))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["new-game"], null)], null),attrs16500)):({"className": "new-game"})),((cljs.core.map_QMARK_.call(null,attrs16500))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16500)], null)));
})());
}),null,"game-list");
mazeboardui.components.dashboard.dashboard = rum.core.build_defc.call(null,(function (r){
var map__16505 = rum.core.react.call(null,citrus.core.subscription.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",-631747508)], null)));
var map__16505__$1 = ((((!((map__16505 == null)))?((((map__16505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16505.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16505):map__16505);
var token = cljs.core.get.call(null,map__16505__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var games = cljs.core.get.call(null,map__16505__$1,new cljs.core.Keyword(null,"games","games",1927565374));
var job_list = cljs.core.get.call(null,map__16505__$1,new cljs.core.Keyword(null,"job-list","job-list",328943016));
if((token == null)){
accountant.core.navigate_BANG_.call(null,"/login");
} else {
if((games == null)){
citrus.core.dispatch_BANG_.call(null,r,new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),new cljs.core.Keyword(null,"load-games","load-games",842874466));
} else {
}
}

var attrs16504 = mazeboardui.components.dashboard.game_list.call(null,r,games);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16504))?sablono.interpreter.attributes.call(null,attrs16504):null),((cljs.core.map_QMARK_.call(null,attrs16504))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16504)], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"dashboard");

//# sourceMappingURL=dashboard.js.map?rel=1511973568062
