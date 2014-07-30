//#include translate.dialogTitlebar.js
function translate_McPlayer(noda) {
    if (noda) {
        noda = '#' + noda;
    } else {
        noda = '.mc-player';
    }
    translate_dialogTitlebar(noda);
    rename(noda + ' .mc-control-pre', 'title', dict.player_pre);
    rename(noda + ' .mc-control-play', 'title', dict.player_play);
    rename(noda + ' .mc-control-next', 'title', dict.player_next);
    rename(noda + ' .cycle', 'title', dict.player_cycle);
    rename(noda + ' .random', 'title', dict.player_random);
    rename(noda + ' .single', 'title', dict.player_single);
    rename(noda + ' .volume', 'title', dict.player_volume);
    rename(noda + ' .btn-play', 'title', dict.player_btnPlay);
    rename(noda + ' .btn-pause', 'title', dict.player_btnPause);
    rename(noda + ' .btn-del', 'title', dict.player_btnDel);
    rename(noda + ' .select-all span', 'text', dict.player_selectAll);
    rename(noda + ' .remove', 'text', dict.player_remove);
    rename(noda + ' .empty', 'text', dict.player_empty);
}

