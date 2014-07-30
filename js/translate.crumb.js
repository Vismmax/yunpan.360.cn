function translate_crumb() {
    var crumb;
    rename('#crumb .back', 'text', dict.crumb_back);
    rename('#crumb .first-item', 'text', dict.leftPanel_file);
    rename('#crumb .first-item', 'title', dict.leftPanel_file);
    rename('#crumb .gohome', 'text', document.querySelector('#leftPanel .nav .current .text').textContent);
    rename('#crumb .gohome', 'title', document.querySelector('#leftPanel .nav .current .text').textContent);
    rename('#crumb .recycle-prompt', 'text', dict.crumb_recyclePrompt);
    rename('#videoArea .crumb-path .last-item', 'text', dict.leftPanel_video);
    rename('#videoArea .crumb-path .last-item', 'title', dict.leftPanel_video);
    rename('#musicArea .crumb-path .last-item', 'text', dict.leftPanel_music);
    rename('#musicArea .crumb-path .last-item', 'title', dict.leftPanel_music);
    rename('#textArea .crumb-path .last-item', 'text', dict.leftPanel_text);
    rename('#textArea .crumb-path .last-item', 'title', dict.leftPanel_text);
    if (crumb = document.querySelector('#crumb .back')) {
        crumb.style.width = 'auto';
    }
}

