function translate_toolbar_sort() {
    rename('.sort .name', 'text', dict.toolbar_name);
    rename('.sort .fsize', 'text', dict.toolbar_fsize);
    rename('.sort .new-upload', 'text', dict.toolbar_newUpload);
    rename('.sort .fmtime', 'text', dict.toolbar_fmtime);
    rename('.sort .del-date', 'text', dict.toolbar_delDate);
    rename('.sort .share-date', 'text', dict.toolbar_shareDate);
    var sort_a = document.querySelectorAll('#toolbar .sort a');
    for (var i = 0; i < sort_a.length; i++) {
        sort_a[i].style.fontFamily = 'inherit';
    }
}

