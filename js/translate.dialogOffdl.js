function translate_dialogOffdl(el) {

    translate_dialogTitlebar(el, dict.PanelOffdl_hd);
    rename(el.querySelector('.offdl-title'), 'text', dict.PanelOffdl_offdlTitle1, 0);
    rename(el.querySelector('.offdl-title'), 'text', dict.PanelOffdl_offdlTitle2, 1);
    rename(el.querySelector('.offdl-btn-create .label'), 'text', dict.PanelOffdl_offdlBtnCreate);
    rename(el.querySelector('.column-name'), 'text', dict.PanelOffdl_columnName);
    rename(el.querySelector('.column-size'), 'text', dict.PanelOffdl_columnSize);
    rename(el.querySelector('.column-status'), 'text', dict.PanelOffdl_columnStatus);
    rename(el.querySelector('.column-op'), 'text', dict.PanelOffdl_columnOp);
    rename(el.querySelector('.offdl-save-tip'), 'text', dict.PanelOffdl_offdlSaveTip1, 0);
    rename(el.querySelector('.offdl-save-tip'), 'text', dict.PanelOffdl_offdlSaveTip2, 1);
    rename(el.querySelector('.offdl-save-tip strong'), 'text', dict.PanelOffdl_offdlSaveTip_s);
    rename(el.querySelector('.offdl-btn-box .y-btn .label'), 'text', dict.PanelOffdl_background);
    rename(el.querySelector('.offdl-btn-box .y-btn:last-child .label'), 'text', dict.PanelOffdl_clean);
}
