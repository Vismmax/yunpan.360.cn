if (window.location.pathname.indexOf('/reg') === 0) {

    translate_header();
    translate_footer();

    var reg_node = document.getElementById('reg');
    console.log(reg_node);
    reg_node.addEventListener('DOMNodeInserted', function (ev) {
        if (ev.target.id == 'modRegWrap') {
            translate_regPanel();
        }
    }, false);
}

