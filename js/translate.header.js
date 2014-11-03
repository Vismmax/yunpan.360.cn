function translate_header() {
    rename('title', 'text', dict.title);
    rename('a.logo', 'text', dict.nav_logo);
    rename('.nav a[href="http://huodong.yunpan.360.cn/xt"]', 'text', dict.nav_36);
    rename('.nav a[href="/"]', 'text', dict.nav_home);
    rename('.nav a[href="http://yunpan.360.cn/"]', 'text', dict.nav_home);
    rename('.nav a[href="http://qun.yunpan.360.cn/"]', 'text', dict.nav_group);
    rename('.nav a[href="/index/download"]', 'text', dict.nav_download);
    rename('.nav a[href="/index/download"] strong', 'text', dict.nav_download_new);
    rename('.nav a[href^="http://bbs.360safe.com/forum.php"]', 'text', dict.nav_forum);
    document.getElementsByClassName('nav')[0].getElementsByTagName('li')[0].style.padding = '0 30px 0 0';
    var logo = document.querySelector('a.logo');
    logo.style.width = '102px';
    logo.style.overflow = 'visible';
    logo.style.whiteSpace = 'nowrap';
    logo.style.lineHeight = '27px';
    logo.style.textIndent = '110px';
    logo.style.fontSize = '28px';
    logo.style.color = '#fff';
}

