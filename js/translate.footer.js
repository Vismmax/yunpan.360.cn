function translate_footer() {
    rename('.footer a[href="/resource/html/agreement.html"]', 'text', dict.footer_agreement);
    rename('.footer a[href="http://www.360.cn/privacy/v2/360yunpan.html"]', 'text', dict.footer_privacy);
    rename('.footer a[href="/index/releasenote"]', 'text', dict.footer_releasenote);
    rename('.footer a[href="/index/help"]', 'text', dict.footer_help);
    rename('.footer a[href^="http://bbs.360safe.com/forum.php"]', 'text', dict.footer_forum);
    rename('.footer a[href="mailto:360report@360.cn"]', 'text', dict.footer_mailto);
}

