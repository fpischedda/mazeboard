// Compiled by ClojureScript 1.9.946 {}
goog.provide('mazeboard.ui.components.dashboard');
goog.require('cljs.core');
goog.require('accountant.core');
goog.require('citrus.core');
goog.require('clojure.string');
goog.require('rum.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('mazeboard.ui.dom');
goog.require('mazeboard.ui.utils');
goog.require('mazeboard.ui.config');
mazeboard.ui.components.dashboard.toggle_game_editing = (function mazeboard$ui$components$dashboard$toggle_game_editing(game_id){
var show_elem = mazeboard.ui.dom.q.call(null,["#item-show-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(game_id)].join(''));
var edit_elem = mazeboard.ui.dom.q.call(null,["#item-edit-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(game_id)].join(''));
mazeboard.ui.dom.toggle_class_BANG_.call(null,show_elem,"hidden");

return mazeboard.ui.dom.toggle_class_BANG_.call(null,edit_elem,"hidden");
});
mazeboard.ui.components.dashboard.game_delete = rum.core.build_defc.call(null,(function (r,game_id){
return React.createElement("button",({"onClick": (function (){
return citrus.core.dispatch_BANG_.call(null,r,new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),new cljs.core.Keyword(null,"delete-game","delete-game",-970899326),game_id);
})}),"Delete");
}),null,"game-delete");
mazeboard.ui.components.dashboard.update_game = (function mazeboard$ui$components$dashboard$update_game(r,game_id,max_players){
return citrus.core.dispatch_BANG_.call(null,r,new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),new cljs.core.Keyword(null,"update-game","update-game",1297852920),game_id,max_players);
});
mazeboard.ui.components.dashboard.game_update = rum.core.build_defc.call(null,(function (r,game_id){
return React.createElement("button",({"onClick": (function (e){
mazeboard.ui.components.dashboard.toggle_game_editing.call(null,game_id);

return mazeboard.ui.components.dashboard.update_game.call(null,r,game_id,mazeboard.ui.dom.value.call(null,mazeboard.ui.dom.q.call(null,["#max-palyers-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(game_id)].join(''))));
})}),"Update");
}),null,"game-update");
mazeboard.ui.components.dashboard.game_cancel_edit = rum.core.build_defc.call(null,(function (game_id){
return React.createElement("button",({"onClick": (function (){
return mazeboard.ui.components.dashboard.toggle_game_editing.call(null,game_id);
})}),"Cancel");
}),null,"game-cancel-edit");
mazeboard.ui.components.dashboard.create_game = (function mazeboard$ui$components$dashboard$create_game(r,max_players){
return citrus.core.dispatch_BANG_.call(null,r,new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),new cljs.core.Keyword(null,"create-game","create-game",537929090),cljs.core.name);
});
mazeboard.ui.components.dashboard.game_new_button = rum.core.build_defc.call(null,(function (r){
return React.createElement("button",({"onClick": (function (e){
return mazeboard.ui.components.dashboard.create_game.call(null,r,mazeboard.ui.dom.value.call(null,mazeboard.ui.dom.q.call(null,"#max-players")));
})}),"Create game");
}),null,"game-new-button");
mazeboard.ui.components.dashboard.game_form_new = rum.core.build_defc.call(null,(function (r){
return React.createElement("ul",({"className": "new-game-form"}),"Track new game",(function (){var attrs14990 = mazeboard.ui.utils.label_input.call(null,"Max players",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"max-players",new cljs.core.Keyword(null,"id","id",-1388402092),"max-players"], null));
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs14990))?sablono.interpreter.attributes.call(null,attrs14990):null),((cljs.core.map_QMARK_.call(null,attrs14990))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14990)], null)));
})(),(function (){var attrs14991 = mazeboard.ui.components.dashboard.game_new_button.call(null,r);
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs14991))?sablono.interpreter.attributes.call(null,attrs14991):null),((cljs.core.map_QMARK_.call(null,attrs14991))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14991)], null)));
})());
}),null,"game-form-new");
mazeboard.ui.components.dashboard.single_or_list = (function mazeboard$ui$components$dashboard$single_or_list(value,sep){
if(typeof value === 'string'){
return value;
} else {
return clojure.string.join.call(null,sep,value);
}
});
mazeboard.ui.components.dashboard.game_item = rum.core.build_defc.call(null,(function (r,item){
var map__14992 = item;
var map__14992__$1 = ((((!((map__14992 == null)))?((((map__14992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14992.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14992):map__14992);
var _id = cljs.core.get.call(null,map__14992__$1,new cljs.core.Keyword(null,"_id","_id",-789960287));
var status = cljs.core.get.call(null,map__14992__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var max_players = cljs.core.get.call(null,map__14992__$1,new cljs.core.Keyword(null,"max-players","max-players",1714980355));
var free_player_slots = cljs.core.get.call(null,map__14992__$1,new cljs.core.Keyword(null,"free-player-slots","free-player-slots",584615764));
var players = cljs.core.get.call(null,map__14992__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
return React.createElement("tr",({"onClick": ((function (map__14992,map__14992__$1,_id,status,max_players,free_player_slots,players){
return (function (e){
return mazeboard.ui.components.dashboard.toggle_game_editing.call(null,_id);
});})(map__14992,map__14992__$1,_id,status,max_players,free_player_slots,players))
, "id": ["item-show-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_id)].join(''), "key": _id, "className": "item"}),(function (){var attrs14994 = status;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs14994))?sablono.interpreter.attributes.call(null,attrs14994):null),((cljs.core.map_QMARK_.call(null,attrs14994))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14994)], null)));
})(),(function (){var attrs14995 = max_players;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs14995))?sablono.interpreter.attributes.call(null,attrs14995):null),((cljs.core.map_QMARK_.call(null,attrs14995))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14995)], null)));
})(),(function (){var attrs14996 = free_player_slots;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs14996))?sablono.interpreter.attributes.call(null,attrs14996):null),((cljs.core.map_QMARK_.call(null,attrs14996))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14996)], null)));
})(),(function (){var attrs14997 = mazeboard.ui.components.dashboard.single_or_list.call(null,players," ");
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs14997))?sablono.interpreter.attributes.call(null,attrs14997):null),((cljs.core.map_QMARK_.call(null,attrs14997))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14997)], null)));
})(),(function (){var attrs14998 = mazeboard.ui.components.dashboard.game_delete.call(null,r,_id);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs14998))?sablono.interpreter.attributes.call(null,attrs14998):null),((cljs.core.map_QMARK_.call(null,attrs14998))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14998)], null)));
})());
}),null,"game-item");
mazeboard.ui.components.dashboard.game_edit_item = rum.core.build_defc.call(null,(function (r,item){
var map__14999 = item;
var map__14999__$1 = ((((!((map__14999 == null)))?((((map__14999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14999.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14999):map__14999);
var _id = cljs.core.get.call(null,map__14999__$1,new cljs.core.Keyword(null,"_id","_id",-789960287));
var status = cljs.core.get.call(null,map__14999__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var max_players = cljs.core.get.call(null,map__14999__$1,new cljs.core.Keyword(null,"max-players","max-players",1714980355));
var free_player_slots = cljs.core.get.call(null,map__14999__$1,new cljs.core.Keyword(null,"free-player-slots","free-player-slots",584615764));
var players = cljs.core.get.call(null,map__14999__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
return React.createElement("tr",({"id": ["item-edit-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_id)].join(''), "key": _id, "className": "item-edit hidden"}),(function (){var attrs15001 = status;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs15001))?sablono.interpreter.attributes.call(null,attrs15001):null),((cljs.core.map_QMARK_.call(null,attrs15001))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15001)], null)));
})(),(function (){var attrs15002 = mazeboard.ui.utils.input.call(null,"text",["max-players",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_id)].join(''),max_players);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs15002))?sablono.interpreter.attributes.call(null,attrs15002):null),((cljs.core.map_QMARK_.call(null,attrs15002))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15002)], null)));
})(),(function (){var attrs15003 = free_player_slots;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs15003))?sablono.interpreter.attributes.call(null,attrs15003):null),((cljs.core.map_QMARK_.call(null,attrs15003))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15003)], null)));
})(),(function (){var attrs15004 = mazeboard.ui.components.dashboard.single_or_list.call(null,players," ");
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs15004))?sablono.interpreter.attributes.call(null,attrs15004):null),((cljs.core.map_QMARK_.call(null,attrs15004))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15004)], null)));
})(),(function (){var attrs15005 = mazeboard.ui.components.dashboard.game_delete.call(null,r,_id);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs15005))?sablono.interpreter.attributes.call(null,attrs15005):null),((cljs.core.map_QMARK_.call(null,attrs15005))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,mazeboard.ui.components.dashboard.game_update.call(null,r,_id)),sablono.interpreter.interpret.call(null,mazeboard.ui.components.dashboard.game_cancel_edit.call(null,_id))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15005),sablono.interpreter.interpret.call(null,mazeboard.ui.components.dashboard.game_update.call(null,r,_id)),sablono.interpreter.interpret.call(null,mazeboard.ui.components.dashboard.game_cancel_edit.call(null,_id))], null)));
})());
}),null,"game-edit-item");
mazeboard.ui.components.dashboard.refresh_button = rum.core.build_defc.call(null,(function (r){
return React.createElement("button",({"onClick": (function (e){
return citrus.core.dispatch_BANG_.call(null,r,new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),new cljs.core.Keyword(null,"load-games","load-games",842874466));
}), "className": "refresh-button"}),"Refresh");
}),null,"refresh-button");
mazeboard.ui.components.dashboard.game_lines = (function mazeboard$ui$components$dashboard$game_lines(r,game){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mazeboard.ui.components.dashboard.game_item.call(null,r,game),mazeboard.ui.components.dashboard.game_edit_item.call(null,r,game)], null);
});
mazeboard.ui.components.dashboard.game_list = rum.core.build_defc.call(null,(function (r,games){
return React.createElement("div",({"className": "games"}),React.createElement("h3",null,"Your games"),sablono.interpreter.interpret.call(null,mazeboard.ui.components.dashboard.refresh_button.call(null,r)),React.createElement("table",({"className": "game-list"}),React.createElement("thead",null,React.createElement("tr",null,React.createElement("td",null,"Status"),React.createElement("td",null,"Max players"),React.createElement("td",null,"Slots left"),React.createElement("td",null,"Players"),React.createElement("td",null,""))),(function (){var attrs15012 = cljs.core.map.call(null,(function (p1__15006_SHARP_){
return mazeboard.ui.components.dashboard.game_lines.call(null,r,p1__15006_SHARP_);
}),games);
return cljs.core.apply.call(null,React.createElement,"tbody",((cljs.core.map_QMARK_.call(null,attrs15012))?sablono.interpreter.attributes.call(null,attrs15012):null),((cljs.core.map_QMARK_.call(null,attrs15012))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15012)], null)));
})()),(function (){var attrs15009 = mazeboard.ui.components.dashboard.game_form_new.call(null,r);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs15009))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["new-game"], null)], null),attrs15009)):({"className": "new-game"})),((cljs.core.map_QMARK_.call(null,attrs15009))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15009)], null)));
})());
}),null,"game-list");
mazeboard.ui.components.dashboard.dashboard = rum.core.build_defc.call(null,(function (r){
var map__15014 = rum.core.react.call(null,citrus.core.subscription.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",-631747508)], null)));
var map__15014__$1 = ((((!((map__15014 == null)))?((((map__15014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15014.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15014):map__15014);
var token = cljs.core.get.call(null,map__15014__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var games = cljs.core.get.call(null,map__15014__$1,new cljs.core.Keyword(null,"games","games",1927565374));
var job_list = cljs.core.get.call(null,map__15014__$1,new cljs.core.Keyword(null,"job-list","job-list",328943016));
if((token == null)){
accountant.core.navigate_BANG_.call(null,"/login");
} else {
if((games == null)){
citrus.core.dispatch_BANG_.call(null,r,new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),new cljs.core.Keyword(null,"load-games","load-games",842874466));
} else {
}
}

var attrs15013 = mazeboard.ui.components.dashboard.game_list.call(null,r,games);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs15013))?sablono.interpreter.attributes.call(null,attrs15013):null),((cljs.core.map_QMARK_.call(null,attrs15013))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15013)], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"dashboard");

//# sourceMappingURL=dashboard.js.map?rel=1511985272760
