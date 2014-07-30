function translate_PanelOffdl(id) {
    id = '#' + id;
    rename(id + ' .hd h3', 'text', dict.PanelOffdl_hd);
    rename(id + ' .offdl-title', 'text', dict.PanelOffdl_offdlTitle1, 0);
    rename(id + ' .offdl-title', 'text', dict.PanelOffdl_offdlTitle2, 1);
    rename(id + ' .offdl-btn-create .label', 'text', dict.PanelOffdl_offdlBtnCreate);
    rename(id + ' .column-name', 'text', dict.PanelOffdl_columnName);
    rename(id + ' .column-size', 'text', dict.PanelOffdl_columnSize);
    rename(id + ' .column-status', 'text', dict.PanelOffdl_columnStatus);
    rename(id + ' .column-op', 'text', dict.PanelOffdl_columnOp);
    rename(id + ' .offdl-save-tip', 'text', dict.PanelOffdl_offdlSaveTip1, 0);
    rename(id + ' .offdl-save-tip', 'text', dict.PanelOffdl_offdlSaveTip2, 1);
    rename(id + ' .offdl-save-tip strong', 'text', dict.PanelOffdl_offdlSaveTip_s);
    rename(id + ' .offdl-btn-box .y-btn .label', 'text', dict.PanelOffdl_background);
    rename(id + ' .offdl-btn-box .y-btn:last-child .label', 'text', dict.PanelOffdl_clean);
    rename(id + ' .close-link span', 'text', dict.BasePanel_closeLink);
}

