function translate_loginSubmit(dots) {
    if (!dots) dots = '';
    var target = document.getElementById('loginSubmit');
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            console.log(mutation.target);
            observer.disconnect();
            rename('#loginSubmit', 'value', dict.login_submit_go + dots);
            dots += '.';
            if (dots.length > 3) dots = 0;
            translate_loginSubmit(dots);
        });
    });
    var config = {
        attributes     : true,
        attributeFilter: ["value"],
        childList      : false,
        characterData  : false,
        subtree        : false
    };
    observer.observe(target, config);
}

