function translate_header() {
    rename('title', 'text', dict.title);
    rename('a.logo', 'text', dict.logo);
    rename('.nav a[href="http://huodong.yunpan.360.cn/xt"]', 'text', dict.nav_36);
    rename('.nav a[href="/"]', 'text', dict.nav_home);
    rename('.nav a[href="http://qun.yunpan.360.cn/"]', 'text', dict.nav_group);
    rename('.nav a[href="/index/download"]', 'text', dict.nav_download);
    rename('.nav a[href^="http://bbs.360safe.com/forum.php"]', 'text', dict.nav_forum);
    document.getElementsByClassName('nav')[0].getElementsByTagName('li')[0].style.padding = '0 30px 0 0';
}

