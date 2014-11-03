function translate_dialogTitlebar(el, title) {

    rename(el.querySelector('.ui-dialog-titlebar-close'), 'title', dict.dialogTitlebarClose);
    rename(el.querySelector('.ui-dialog-titlebar-close .ui-button-text'), 'text', dict.dialogTitlebarClose);
    rename(el.querySelector('.ui-dialog-titlebar-minimize'), 'title', dict.dialogTitlebarMinimize);
    rename(el.querySelector('.ui-dialog-titlebar-minimize .ui-button-text'), 'text', dict.dialogTitlebarMinimize);
    rename(el.querySelector('.ui-dialog-titlebar-maximize'), 'title', dict.dialogTitlebarMaximize);
    rename(el.querySelector('.ui-dialog-titlebar-maximize .ui-button-text'), 'text', dict.dialogTitlebarMaximize);

    if (title) {
        rename(el.querySelector('.ui-dialog-title'), 'text', title);
    }
}

