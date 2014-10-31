function translate_regPanel() {
    rename('h1.reg-title', 'text', dict.reg_title);
    rename('label[for="loginEmail"]', 'text', dict.reg_email);
    rename('#tips-loginEmail', 'text', dict.reg_tips_loginEmail);
    rename('#tips-loginEmail a', 'text', dict.reg_fac_email);
    rename('label[for="password"]', 'text', dict.reg_password);
    rename('#tips-password', 'text', dict.reg_tips_password);
    rename('label[for="rePassword"]', 'text', dict.reg_repassword);
    rename('#tips-rePassword', 'text', dict.reg_tips_repassword);
    rename('#phraseLi label[for="phrase"]', 'text', dict.reg_phrase);
    rename('#refreshCaptcha', 'text', dict.reg_refreshCaptcha);
    rename('#tips-phrase', 'text', dict.reg_tips_phrase);
    rename('label[for="is_agree"]', 'text', dict.reg_agree);
    rename('label[for="is_agree"] + a', 'text', dict.reg_fac_agree);
    rename('#regSubmitBtn', 'value', dict.reg_submit);
    rename('#regSubmitBtn', 'text', dict.reg_submit);
    //document.querySelector('label[for="rePassword"]').style.left = '-105px';
    //document.querySelector('label[for="rePassword"]').style.width = '95px';
    //document.querySelector('label[for="rePassword"]').style.lineHeight = '18px';
    //document.querySelector('label[for="loginEmail"]').style.lineHeight = '18px';
    var resize = function(el) {
        el.style.left = '-125px';
        el.style.width = '115px';
        el.style.lineHeight = '18px';
    };
    resize(document.querySelector('label[for="rePassword"]'));
    resize(document.querySelector('label[for="loginEmail"]'));
    resize(document.querySelector('#phraseLi label[for="phrase"]'));
}

