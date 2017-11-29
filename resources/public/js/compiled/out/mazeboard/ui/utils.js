// Compiled by ClojureScript 1.9.946 {}
goog.provide('mazeboard.ui.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('rum.core');
mazeboard.ui.utils.input = rum.core.build_defc.call(null,(function (type,name,value){
return sablono.interpreter.create_element.call(null,"input",({"type": type, "name": name, "id": name, "value": value, "onChange": (function (e){
return false;
})}));
}),null,"input");
mazeboard.ui.utils.label_input = rum.core.build_defc.call(null,(function (label,property_map){
var attrs11054 = label;
return cljs.core.apply.call(null,React.createElement,"label",((cljs.core.map_QMARK_.call(null,attrs11054))?sablono.interpreter.attributes.call(null,attrs11054):null),((cljs.core.map_QMARK_.call(null,attrs11054))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs11055 = property_map;
return cljs.core.apply.call(null,sablono.interpreter.create_element,"input",((cljs.core.map_QMARK_.call(null,attrs11055))?sablono.interpreter.attributes.call(null,attrs11055):null),((cljs.core.map_QMARK_.call(null,attrs11055))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11055)], null)));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11054),(function (){var attrs11056 = property_map;
return cljs.core.apply.call(null,sablono.interpreter.create_element,"input",((cljs.core.map_QMARK_.call(null,attrs11056))?sablono.interpreter.attributes.call(null,attrs11056):null),((cljs.core.map_QMARK_.call(null,attrs11056))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11056)], null)));
})()], null)));
}),null,"label-input");
mazeboard.ui.utils.error_message = (function mazeboard$ui$utils$error_message(response){
return cljs.core.get_in.call(null,response,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002)], null));
});
mazeboard.ui.utils.message_label = rum.core.build_defc.call(null,(function (text){
var attrs11057 = text;
return cljs.core.apply.call(null,React.createElement,"label",((cljs.core.map_QMARK_.call(null,attrs11057))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error"], null)], null),attrs11057)):({"className": "error"})),((cljs.core.map_QMARK_.call(null,attrs11057))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11057)], null)));
}),null,"message-label");
mazeboard.ui.utils.show_message = (function mazeboard$ui$utils$show_message(element_id,text){
return rum.core.mount.call(null,mazeboard.ui.utils.message_label.call(null,text),document.getElementById(element_id));
});
mazeboard.ui.utils.wall_names = new cljs.core.PersistentArrayMap(null, 4, [(0),new cljs.core.Keyword(null,"north","north",651323902),(1),new cljs.core.Keyword(null,"east","east",1189821678),(2),new cljs.core.Keyword(null,"south","south",1586796293),(3),new cljs.core.Keyword(null,"west","west",708776677)], null);
mazeboard.ui.utils.solid_wall_names = (function mazeboard$ui$utils$solid_wall_names(tile){
return cljs.core.filter.call(null,(function (p1__11058_SHARP_){
return !((p1__11058_SHARP_ == null));
}),cljs.core.map_indexed.call(null,(function (idx,wall){
if(cljs.core._EQ_.call(null,wall,new cljs.core.Keyword(null,"solid","solid",-2023773691))){
return mazeboard.ui.utils.wall_names.call(null,idx);
} else {
return null;
}
}),tile));
});
mazeboard.ui.utils.keyword_to_class = (function mazeboard$ui$utils$keyword_to_class(wall){
return ["solid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wall)].join('');
});
mazeboard.ui.utils.tile_wall_classes = (function mazeboard$ui$utils$tile_wall_classes(tile){
return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p1__11059_SHARP_){
return mazeboard.ui.utils.keyword_to_class.call(null,cljs.core.name.call(null,p1__11059_SHARP_));
}),mazeboard.ui.utils.solid_wall_names.call(null,tile)));
});

//# sourceMappingURL=utils.js.map?rel=1511974451374
