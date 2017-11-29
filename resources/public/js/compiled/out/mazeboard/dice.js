// Compiled by ClojureScript 1.9.946 {}
goog.provide('mazeboard.dice');
goog.require('cljs.core');
mazeboard.dice.make_dice = (function mazeboard$dice$make_dice(){

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"up","up",-269712113)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"left","left",-399115937)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"down","down",1565245570)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"right","right",-452581833)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Keyword(null,"left","left",-399115937)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Keyword(null,"right","right",-452581833)], null)], null);
});
mazeboard.dice.make_coin = (function mazeboard$dice$make_coin(){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move","move",-2110884309),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"turn","turn",75759344),null], null)], null);
});
mazeboard.dice.from_dice_type = (function mazeboard$dice$from_dice_type(dice_type){
if(cljs.core._EQ_.call(null,dice_type,new cljs.core.Keyword(null,"dice","dice",707777434))){
return mazeboard.dice.make_dice.call(null);
} else {
return mazeboard.dice.make_coin.call(null);
}
});
mazeboard.dice.roll_dice = (function mazeboard$dice$roll_dice(dice){

return cljs.core.get.call(null,dice,cljs.core.rand_int.call(null,cljs.core.count.call(null,dice)));
});

//# sourceMappingURL=dice.js.map?rel=1511973568493
