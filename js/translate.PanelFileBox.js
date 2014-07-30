function translate_PanelFileBox(id) {
    id = '#' + id;
    rename(id + ' .hd h3', 'text', dict.PanelFileBox_hd);
    rename(id + ' h3.msg', 'text', dict.PanelFileBox_msg);
    rename(id + ' .root-node strong', 'text', dict.leftPanel_file);
    rename(id + ' .y-btn.move', 'text', dict.PanelFileBox_move);
    rename(id + ' .y-btn.y-btn-gray', 'text', dict.PanelFileBox_cancel);
    rename(id + ' .close-link span', 'text', dict.BasePanel_closeLink);
}

