function translate_displayMode() {
    rename('#tbText', 'title', dict.toolbar_tbText_title);
    rename('#tbText .cmd', 'text', dict.toolbar_tbText);
    rename('#tbPic', 'title', dict.toolbar_tbPic_title);
    rename('#tbPic .cmd', 'text', dict.toolbar_tbPic);

    rename('.display-mode .list', 'title', dict.toolbar_tbText_title);
    rename('.display-mode .thumb', 'title', dict.toolbar_tbPic_title);
}

