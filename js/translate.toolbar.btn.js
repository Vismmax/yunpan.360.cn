function translate_toolbar_btn() {
    // btns-filelist
    rename('#tbUpload .label', 'text', dict.toolbar_tbUpload);
    rename('#tbNew .label', 'text', dict.toolbar_tbNew);
    rename('#tbOffline .label', 'text', dict.toolbar_tbOffline);
    rename('#tbDl .label', 'text', dict.toolbar_tbDl);
    rename('#tbPackDl .label', 'text', dict.toolbar_tbPackDl);
    rename('#tbDel .label', 'text', dict.toolbar_tbDel);
    rename('#tbLink .label', 'text', dict.toolbar_tbLink);
    rename('#tbLinkBatch .label', 'text', dict.toolbar_tbLinkBatch);
    rename('#tbMore .label', 'text', dict.toolbar_tbMore);

    // btns-sfilelist
    rename('#tdMoveOut .label', 'text', dict.toolbar_tdMoveOut);
    rename('#tbLockSfile .label', 'text', dict.toolbar_tbLockSfile);

    // btns-link
    rename('#tbLinkView .label', 'text', dict.toolbar_tbLinkView);
    rename('#tbLinkDel .label', 'text', dict.toolbar_tbLinkDel);
    rename('#tbExtractOn .label', 'text', dict.toolbar_tbExtractOn);
    rename('#tbExtractOff .label', 'text', dict.toolbar_tbExtractOff);
    rename('#tbLinkCopy .label', 'text', dict.toolbar_tbLinkCopy);
    rename('.share-top-tip', 'text', dict.toolbar_shareTopTip);
    rename('.share-top-tip a', 'text', dict.toolbar_shareTopTip_a);

    // btns-recycle
    rename('#tbRestore .label', 'text', dict.toolbar_tbRestore);
    rename('#tbDisdel .label', 'text', dict.toolbar_tbDisdel);
    rename('#tbClearall .label', 'text', dict.toolbar_tbClearall);
    rename('#tbOpenPassword .label', 'text', dict.toolbar_tbOpenPassword);
    rename('#tbOpenPasswordDone .label', 'text', dict.toolbar_tbOpenPasswordDone);
    document.getElementById('tbDisdel').style.width = 'auto';

    // btns-hisfile
    rename('#tbHisReFile', 'title', dict.toolbar_tbHisReFile_title);
    rename('#tbHisReFile .label', 'text', dict.toolbar_tbHisReFile);
    rename('#tbHisView .label', 'text', dict.toolbar_tbHisView);
    rename('#tbHisViewPic .label', 'text', dict.toolbar_tbHisViewPic);
    rename('#tbHisDl .label', 'text', dict.toolbar_tbHisDl);

    rename('.mini-upload', 'title', dict.toolbar_miniUpload_title);

    rename('.toolbar span[data-cn="dl"] .label', 'text', dict.toolbar_tbDl);
    rename('.toolbar span[data-cn="del"] .label', 'text', dict.toolbar_tbDel);
    rename('.toolbar span[data-cn="share"] .label', 'text', dict.toolbar_tbLink);
    rename('.toolbar span[data-cn="more"] .label', 'text', dict.toolbar_tbMore);
}

