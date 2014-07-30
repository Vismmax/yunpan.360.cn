function translate_userInfo() {
    rename('#profile .text', 'text', dict.userInfo_profile);
    rename('#userInfo a[href="http://yunpan.360.cn/userAuth"] .text', 'text', dict.userInfo_auth);
    rename('#saveMessage .text', 'text', dict.userInfo_message);
    rename('#ypLevel .text', 'text', dict.userInfo_ypLevel);
    rename('#volRecords .text', 'text', dict.userInfo_volRecords);
    rename('#recharge .text', 'text', dict.userInfo_recharge);
    rename('#inviteFri .text', 'text', dict.userInfo_inviteFri);
    rename('#tpFeedback .text', 'text', dict.userInfo_tpFeedback);
    rename('#tpHelp .text', 'text', dict.userInfo_tpHelp);
    rename('#lottery-everyday .text', 'text', dict.userInfo_lottery);
    rename('#tpExit .text', 'text', dict.userInfo_tpExit);
    document.querySelector('.user-info-wrap').style.width = '120px';
}

