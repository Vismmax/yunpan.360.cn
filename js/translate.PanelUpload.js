function translate_PanelUpload(el) {
    var id = '#' + el.id;
    rename(id + ' .hd h3', 'text', dict.PanelUpload_hd);
    rename(id + ' .plugin-tip', 'text', dict.PanelUpload_pluginTip);
    rename(id + ' .plugin-tip a', 'text', dict.PanelUpload_pluginTip_a);
    rename(id + ' .file-select', 'text', dict.PanelUpload_fileSelect);
    rename(id + ' .folder-select', 'text', dict.PanelUpload_folderSelect);
    rename(id + ' #YPUpload-2', 'title', dict.PanelUpload_YPUpload2);
    rename(id + ' .uploadDeny', 'text', dict.PanelUpload_uploadDeny1, 0);
    rename(id + ' .uploadDeny', 'text', dict.PanelUpload_uploadDeny2, 1);
    rename(id + ' .uploadDeny span', 'text', dict.PanelUpload_uploadDeny_s);
    rename(id + ' .uploadPath', 'text', dict.PanelUpload_uploadPath);

    rename(id + ' .network-abnormal-tip', 'text', dict.PanelUpload_networkAbnormalTip);
    rename(id + ' .drag-tip h1', 'text', dict.PanelUpload_dragTip);
    rename(id + ' .drag-tip p', 'text', dict.PanelUpload_dragTip_p);
    rename(id + ' .upload-tips p:first-child', 'text', dict.PanelUpload_uploadTips_p1);
    //    rename(id+' .upload-tips p:last-child', 'text', dict.PanelUpload_uploadTips_p2);
    rename(id + ' .upload-tips p:last-child', 'text', '');
    rename(id + ' .upload-tips a', 'text', dict.PanelUpload_uploadTips_a);
    rename(id + ' #uploadStatusBtn', 'text', dict.PanelUpload_uploadStatusBtn);
    rename(id + ' .minimize-link span', 'text', dict.BasePanel_minimizeLink);
    rename(id + ' .close-link span', 'text', dict.BasePanel_closeLink);
    document.querySelector(id + ' .drag-tip').style.background = 'none';
    document.querySelector(id + ' .drag-tip h1').style.display = 'block';
    document.querySelector(id + ' .drag-tip p').style.display = 'block';
    var path = document.getElementById('curUploadPath').textContent;
    var new_path = dict.leftPanel_file;
    console.log(path);
    console.log(new_path);
    if (path.indexOf('/') >= 0) {
        var dir = path.slice(path.indexOf('/'));
        new_path = dict.leftPanel_file + dir;
    }
    rename(id + ' #curUploadPath', 'text', new_path);
    rename(id + ' #curUploadPath', 'title', new_path);

    var btn = document.querySelector(id + ' .jx-select-file-btn');
    btn.classList.add('y-btn');
    btn.classList.add('y-btn-blue');
    if (!btn.querySelector('.text')) {
        var sp = document.createElement('span');
        sp.classList.add('text');
        sp.style.position = 'absolute';
        sp.style.width = '100%';
        sp.style.height = '100%';
        sp.style.left = '-16px';
        sp.style.top = '6px';
        sp.textContent = dict.PanelUpload_selectFileBtn;
        btn.appendChild(sp);
        document.getElementById('YPUpload-2').style.zIndex = 1;
    }
    rename(id + ' .warning-note a', 'text', dict.PanelUpload_warningNote);
    rename(id + ' #H_tooltip p', 'text', dict.PanelUpload_H_tooltip);
    rename(id + ' #H_tooltip p+p', 'text', '');

    rename(id + ' #uploadItemList .info', 'text', dict.PanelUpload_info1, 0);
    rename(id + ' #uploadItemList .info', 'text', dict.PanelUpload_info2, 2);
    rename(id + ' #uploadItemList .info', 'text', dict.PanelUpload_info3, 4);
    rename(id + ' #uploadItemList li em', 'text', dict.PanelUpload_em);
    rename(id + ' #uploadItemList li em', 'title', dict.PanelUpload_em);
}

