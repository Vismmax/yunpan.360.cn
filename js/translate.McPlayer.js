function translate_McPlayer(el) {

    translate_dialogTitlebar(el);
    rename(el.querySelector('.mc-control-pre'), 'title', dict.player_pre);
    rename(el.querySelector('.mc-control-play'), 'title', dict.player_play);
    rename(el.querySelector('.mc-control-next'), 'title', dict.player_next);
    rename(el.querySelector('ul .cycle'), 'title', dict.player_cycle);
    rename(el.querySelector('.random'), 'title', dict.player_random);
    rename(el.querySelector('.single'), 'title', dict.player_single);
    rename(el.querySelector('.volume'), 'title', dict.player_volume);
    rename(el.querySelector('.btn-play'), 'title', dict.player_btnPlay);
    rename(el.querySelector('.btn-pause'), 'title', dict.player_btnPause);
    rename(el.querySelector('.btn-del'), 'title', dict.player_btnDel);
    rename(el.querySelector('.select-all span'), 'text', dict.player_selectAll);
    rename(el.querySelector('.remove'), 'text', dict.player_remove);
    rename(el.querySelector('.empty'), 'text', dict.player_empty);
}

