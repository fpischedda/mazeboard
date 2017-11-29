// Compiled by ClojureScript 1.9.946 {}
goog.provide('mazeboardui.dom');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.dom.classes');
mazeboardui.dom.q = (function mazeboardui$dom$q(selector){
return document.querySelector(selector);
});
mazeboardui.dom.set_value_BANG_ = (function mazeboardui$dom$set_value_BANG_(el,value){
return el.value = value;
});
mazeboardui.dom.value = (function mazeboardui$dom$value(el){
var val = el.value;
if(clojure.string.blank_QMARK_.call(null,val)){
return null;
} else {
return clojure.string.trim.call(null,val);
}
});
mazeboardui.dom.elem_value = (function mazeboardui$dom$elem_value(selector){
return mazeboardui.dom.value.call(null,mazeboardui.dom.q.call(null,selector));
});
/**
 * Adds the specified CSS class to each node in the content.
 */
mazeboardui.dom.add_class_BANG_ = (function mazeboardui$dom$add_class_BANG_(node,class$){
goog.dom.classes.add(node,class$);

return node;
});
/**
 * Removes the specified CSS class from each node in the content.
 */
mazeboardui.dom.remove_class_BANG_ = (function mazeboardui$dom$remove_class_BANG_(node,class$){
goog.dom.classes.remove(node,class$);

return node;
});
/**
 * Toggles the specified CSS class from each node in the content.
 */
mazeboardui.dom.toggle_class_BANG_ = (function mazeboardui$dom$toggle_class_BANG_(node,class$){
goog.dom.classes.toggle(node,class$);

return node;
});

//# sourceMappingURL=dom.js.map?rel=1511973567495
