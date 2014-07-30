function translate_leftPanel() {
    rename('#leftPanel .tab-file .text', 'text', dict.leftPanel_file);
    rename('#leftPanel .tab-video .text', 'text', dict.leftPanel_video);
    rename('#leftPanel .tab-music .text', 'text', dict.leftPanel_music);
    rename('#leftPanel .tab-text .text', 'text', dict.leftPanel_text);
    rename('#leftPanel .tab-sFile .text', 'text', dict.leftPanel_sFile);
    rename('#leftPanel .tab-link .text', 'text', dict.leftPanel_link);
    rename('#leftPanel .tab-group .text', 'text', dict.leftPanel_group);
    rename('#leftPanel .tab-recycle .text', 'text', dict.leftPanel_recycle);
    rename('#leftPanel .update-space', 'text', dict.leftPanel_space);
    rename('#leftPanel .copyright-protect a', 'text', dict.leftPanel_copyright);
}

