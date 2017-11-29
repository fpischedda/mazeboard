// Compiled by ClojureScript 1.9.946 {}
goog.provide('mazeboardui.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('rum.core');
mazeboardui.utils.input = rum.core.build_defc.call(null,(function (type,name,value){
return sablono.interpreter.create_element.call(null,"input",({"type": type, "name": name, "id": name, "value": value, "onChange": (function (e){
return false;
})}));
}),null,"input");
mazeboardui.utils.label_input = rum.core.build_defc.call(null,(function (label,property_map){
var attrs16473 = label;
return cljs.core.apply.call(null,React.createElement,"label",((cljs.core.map_QMARK_.call(null,attrs16473))?sablono.interpreter.attributes.call(null,attrs16473):null),((cljs.core.map_QMARK_.call(null,attrs16473))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs16474 = property_map;
return cljs.core.apply.call(null,sablono.interpreter.create_element,"input",((cljs.core.map_QMARK_.call(null,attrs16474))?sablono.interpreter.attributes.call(null,attrs16474):null),((cljs.core.map_QMARK_.call(null,attrs16474))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16474)], null)));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16473),(function (){var attrs16475 = property_map;
return cljs.core.apply.call(null,sablono.interpreter.create_element,"input",((cljs.core.map_QMARK_.call(null,attrs16475))?sablono.interpreter.attributes.call(null,attrs16475):null),((cljs.core.map_QMARK_.call(null,attrs16475))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16475)], null)));
})()], null)));
}),null,"label-input");
mazeboardui.utils.error_message = (function mazeboardui$utils$error_message(response){
return cljs.core.get_in.call(null,response,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002)], null));
});
mazeboardui.utils.message_label = rum.core.build_defc.call(null,(function (text){
var attrs16476 = text;
return cljs.core.apply.call(null,React.createElement,"label",((cljs.core.map_QMARK_.call(null,attrs16476))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error"], null)], null),attrs16476)):({"className": "error"})),((cljs.core.map_QMARK_.call(null,attrs16476))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16476)], null)));
}),null,"message-label");
mazeboardui.utils.show_message = (function mazeboardui$utils$show_message(element_id,text){
return rum.core.mount.call(null,mazeboardui.utils.message_label.call(null,text),document.getElementById(element_id));
});
mazeboardui.utils.wall_names = new cljs.core.PersistentArrayMap(null, 4, [(0),new cljs.core.Keyword(null,"north","north",651323902),(1),new cljs.core.Keyword(null,"east","east",1189821678),(2),new cljs.core.Keyword(null,"south","south",1586796293),(3),new cljs.core.Keyword(null,"west","west",708776677)], null);
mazeboardui.utils.solid_wall_names = (function mazeboardui$utils$solid_wall_names(tile){
return cljs.core.filter.call(null,(function (p1__16477_SHARP_){
return !((p1__16477_SHARP_ == null));
}),cljs.core.map_indexed.call(null,(function (idx,wall){
if(cljs.core._EQ_.call(null,wall,new cljs.core.Keyword(null,"solid","solid",-2023773691))){
return mazeboardui.utils.wall_names.call(null,idx);
} else {
return null;
}
}),tile));
});
mazeboardui.utils.keyword_to_class = (function mazeboardui$utils$keyword_to_class(wall){
return ["solid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wall)].join('');
});
mazeboardui.utils.tile_wall_classes = (function mazeboardui$utils$tile_wall_classes(tile){
return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p1__16478_SHARP_){
return mazeboardui.utils.keyword_to_class.call(null,cljs.core.name.call(null,p1__16478_SHARP_));
}),mazeboardui.utils.solid_wall_names.call(null,tile)));
});

//# sourceMappingURL=utils.js.map?rel=1511973567984
