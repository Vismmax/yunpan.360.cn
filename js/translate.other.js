function translate_search() {
    rename('.search-placeholder', 'text', dict.mainPanel_search);
    rename('.search-input', 'placeholder', dict.mainPanel_search);
}

function translate_setupPlugin() {
    rename('#pluginTip span', 'text', dict.mainPanel_pluginTip);
    rename('#pluginTip .download', 'text', dict.mainPanel_download);
    rename('#pluginSetupSuccess', 'text', dict.mainPanel_pluginSetupSuccess);
}

function translate_loadingMask() {
    rename('#loadingMask span', 'text', dict.loadingMask);
    rename('.loading-mask .text', 'text', dict.loadingMask);
}

function translate_dropOverlay() {
    rename('#dropOverlay h1', 'text', dict.dropOverlay);
}

function translate_safe() {
    rename('#sfile-openSfile .openPass', 'text', dict.safe_openPass);
    rename('#sfile-openSfile .previewInitFile', 'text', dict.safe_previewInitFile);
}

function translate_copyBox() {
    rename('#fileList .copy-box a', 'text', dict.x_copyPwd);
}

