// Compiled by ClojureScript 1.9.946 {}
goog.provide('mazeboard.ui.dom');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.dom.classes');
mazeboard.ui.dom.q = (function mazeboard$ui$dom$q(selector){
return document.querySelector(selector);
});
mazeboard.ui.dom.set_value_BANG_ = (function mazeboard$ui$dom$set_value_BANG_(el,value){
return el.value = value;
});
mazeboard.ui.dom.value = (function mazeboard$ui$dom$value(el){
var val = el.value;
if(clojure.string.blank_QMARK_.call(null,val)){
return null;
} else {
return clojure.string.trim.call(null,val);
}
});
mazeboard.ui.dom.elem_value = (function mazeboard$ui$dom$elem_value(selector){
return mazeboard.ui.dom.value.call(null,mazeboard.ui.dom.q.call(null,selector));
});
/**
 * Adds the specified CSS class to each node in the content.
 */
mazeboard.ui.dom.add_class_BANG_ = (function mazeboard$ui$dom$add_class_BANG_(node,class$){
goog.dom.classes.add(node,class$);

return node;
});
/**
 * Removes the specified CSS class from each node in the content.
 */
mazeboard.ui.dom.remove_class_BANG_ = (function mazeboard$ui$dom$remove_class_BANG_(node,class$){
goog.dom.classes.remove(node,class$);

return node;
});
/**
 * Toggles the specified CSS class from each node in the content.
 */
mazeboard.ui.dom.toggle_class_BANG_ = (function mazeboard$ui$dom$toggle_class_BANG_(node,class$){
goog.dom.classes.toggle(node,class$);

return node;
});

//# sourceMappingURL=dom.js.map?rel=1511975690855
