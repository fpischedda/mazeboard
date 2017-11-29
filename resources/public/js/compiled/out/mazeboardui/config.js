// Compiled by ClojureScript 1.9.946 {}
goog.provide('mazeboardui.config');
goog.require('cljs.core');
mazeboardui.config.api_url = "http://localhost:8080/api/v1/";
mazeboardui.config.login_url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mazeboardui.config.api_url),"login"].join('');
mazeboardui.config.profile_url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mazeboardui.config.api_url),"profile"].join('');
mazeboardui.config.game_list_url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mazeboardui.config.api_url),"game/"].join('');
mazeboardui.config.game_new_url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mazeboardui.config.api_url),"game/"].join('');
mazeboardui.config.game_detail_url = (function mazeboardui$config$game_detail_url(game_id){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mazeboardui.config.game_list_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(game_id),"/"].join('');
});

//# sourceMappingURL=config.js.map?rel=1511973561495
