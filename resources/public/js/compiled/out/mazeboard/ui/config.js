// Compiled by ClojureScript 1.9.946 {}
goog.provide('mazeboard.ui.config');
goog.require('cljs.core');
mazeboard.ui.config.api_url = "http://localhost:8080/api/v1/";
mazeboard.ui.config.login_url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mazeboard.ui.config.api_url),"login"].join('');
mazeboard.ui.config.profile_url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mazeboard.ui.config.api_url),"profile"].join('');
mazeboard.ui.config.game_list_url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mazeboard.ui.config.api_url),"game/"].join('');
mazeboard.ui.config.game_new_url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mazeboard.ui.config.api_url),"game/"].join('');
mazeboard.ui.config.game_detail_url = (function mazeboard$ui$config$game_detail_url(game_id){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mazeboard.ui.config.game_list_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(game_id),"/"].join('');
});

//# sourceMappingURL=config.js.map?rel=1511974451412
