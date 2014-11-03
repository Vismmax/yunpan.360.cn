function translate_dialogOffdlCreate(el) {

    translate_dialogTitlebar(el, dict.PanelOffdlCreate_hd);
    rename(el.querySelector('.offdl-title'), 'text', dict.PanelOffdlCreate_offdlTitle);
    rename(el.querySelector('.offdl-placeholder'), 'text', dict.PanelOffdlCreate_placeholder);
    rename(el.querySelector('#offdlUrl'), 'placeholder', dict.PanelOffdlCreate_placeholder);
    rename(el.querySelector('.offdl-save-tip'), 'text', dict.PanelOffdl_offdlSaveTip1, 0);
    rename(el.querySelector('.offdl-save-tip'), 'text', dict.PanelOffdl_offdlSaveTip2, 1);
    rename(el.querySelector('.offdl-save-tip strong'), 'text', dict.PanelOffdl_offdlSaveTip_s);
    rename(el.querySelector('.offdl-btn-box .y-btn'), 'text', dict.PanelOffdlCreate_cancel);
    rename(el.querySelector('.offdl-btn-box .y-btn:last-child'), 'text', dict.PanelOffdlCreate_start);
}

