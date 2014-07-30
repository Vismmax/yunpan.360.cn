function translate_loginPanel() {
    rename('.login-panel h1', 'text', dict.login_title);
    rename('#modLoginWrap .login-error-msg', 'text', dict.login_error);
    rename('#loginAccount', 'placeholder', dict.login_account);
    rename('#lpassword', 'placeholder', dict.login_password);
    rename('#phraseLogin', 'placeholder', dict.login_phrase);
    rename('#loginForm label[for="iskeepalive"]', 'text', dict.login_keep);
    rename('#findPwd', 'text', dict.login_findPwd);
    rename('#loginSubmit', 'value', dict.login_submit);
    rename('.login-panel a[href="http://yunpan.360.cn/reg"]', 'text', dict.login_reg);
    rename('#infobarNoCookie', 'text', dict.login_noCookie);
    rename('#infobarNoCookie a', 'text', dict.login_opencookie);
    rename('label[for="loginAccount"]', 'text', dict.login_account_label);
    rename('label[for="lpassword"]', 'text', dict.login_password_label);
    rename('label[for="phraseLogin"]', 'text', dict.login_phrase_label);
    rename('#lwm', 'title', dict.login_lwm);
    rename('#refreshCaptchaLogin', 'text', dict.login_refreshCaptcha);
    rename('#tips-phraseLogin', 'text', dict.login_tipsPhraseLogin);
    rename('.submit .reg-new-account', 'text', dict.login_regNewAccount);
    rename('#infoPanel .go-my', 'text', dict.login_goMy);
    rename('#infoPanel p', 'text', dict.login_info_p);
    rename('#infoPanel a[href^="/user/logout"]', 'text', dict.login_logout);

    var err;
    if (err = document.querySelector('#login .login-error-msg')) {
        err.addEventListener("DOMNodeInserted", function () {
            rename('#login .login-error-msg', 'text', dict.login_loginErrorMsg);
        }, false);
    }
}

