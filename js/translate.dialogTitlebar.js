function translate_dialogTitlebar(sel) {
    rename(sel + ' .ui-dialog-titlebar-close', 'title', dict.dialogTitlebar);
    rename(sel + ' .ui-dialog-titlebar-close .ui-button-text', 'text', dict.dialogTitlebar);
    rename(sel + ' .ui-dialog-titlebar-minimize', 'title', dict.dialogTitlebar);
    rename(sel + ' .ui-dialog-titlebar-minimize .ui-button-text', 'text', dict.dialogTitlebar);
    rename(sel + ' .ui-dialog-titlebar-minimize', 'title', dict.dialogTitlebar);
    rename(sel + ' .ui-dialog-titlebar-minimize .ui-button-text', 'text', dict.dialogTitlebar);
}

