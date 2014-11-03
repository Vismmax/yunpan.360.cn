function translate_loginDownloadList() {
    rename('.download-list a[href="http://down.360safe.com/yunpan/360yunpan_setup.exe"]', 'text', dict.login_dl_pc);
    rename('.download-list a strong', 'text', dict.login_dl_apk);
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
    qrcode.style.marginLeft = '32px';

    var style = function(el, parent, bgColor, bghColor) {
        el.style.display = 'inline-block';
        el.style.width = '145px';
        el.style.lineHeight = '22px';
        el.style.marginTop = '22px';
        el.style.marginLeft = '70px';
        el.style.background = bgColor;
        el.style.textAlign = 'center';
        el.style.color = '#FFF';
        el.style.fontSize = '20px';
        parent.onmouseover = function() {
            el.style.background = bghColor;
        };
        parent.onmouseout = function() {
            el.style.background = bgColor;
        };
    };

    var btnPC = document.querySelector('.download-list .client-btn');
    var labelPC = document.createElement('span');
    labelPC.textContent = dict.login_clientBtn;
    style(labelPC, btnPC, '#0E76BB', '#0D68A4');
    btnPC.appendChild(labelPC);

    var btnMob = document.querySelector('.download-list .mobile-btn');
    var labelMob = document.createElement('span');
    labelMob.textContent = dict.login_mobileBtn;
    style(labelMob, btnMob, '#22C7AE', '#09B69C');
    btnMob.appendChild(labelMob);
}

