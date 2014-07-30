function translate_PanelOffdlCreate(id) {
    id = '#' + id;
    rename(id + ' .hd h3', 'text', dict.PanelOffdlCreate_hd);
    rename(id + ' .offdl-title', 'text', dict.PanelOffdlCreate_offdlTitle);
    rename(id + ' .offdl-placeholder', 'text', dict.PanelOffdlCreate_placeholder);
    rename(id + ' #offdlUrl', 'placeholder', dict.PanelOffdlCreate_placeholder);
    rename(id + ' .offdl-save-tip', 'text', dict.PanelOffdl_offdlSaveTip1, 0);
    rename(id + ' .offdl-save-tip', 'text', dict.PanelOffdl_offdlSaveTip2, 1);
    rename(id + ' .offdl-save-tip strong', 'text', dict.PanelOffdl_offdlSaveTip_s);
    rename(id + ' .offdl-btn-box .y-btn', 'text', dict.PanelOffdlCreate_cancel);
    rename(id + ' .offdl-btn-box .y-btn:last-child', 'text', dict.PanelOffdlCreate_start);
    rename(id + ' .close-link span', 'text', dict.BasePanel_closeLink);
}

