function translate_downloadList() {
    rename('.download-list a[href="http://down.360safe.com/yunpan/360yunpan_setup.exe"]', 'text', dict.login_dl_pc);
    rename('.download-list a[href="http://down.360safe.com/yunpan/360yunpan_mac.pkg"]', 'text', dict.login_dl_mac);
    var dl = document.querySelectorAll('.other-list a');
    for (var i = 0; i < dl.length; i++) {
        dl[i].style.width = 'auto';
        dl[i].style.paddingLeft = '10px';
        dl[i].style.paddingRight = '10px';
    }
    var qrcode = document.getElementsByClassName('qrcode-download-desc')[0];
    qrcode.textContent = dict.login_qrcode;
    qrcode.style.width = '115px';
}

