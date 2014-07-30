if (window.location.pathname.indexOf('/my') === 0) {

    rename('title', 'text', dict.my_title);

    translate_topPanel();
    translate_userInfo();
    translate_leftPanel();
    translate_search();
    translate_setupPlugin();
    translate_toolbar();
    translate_fileListHistory();
    translate_column();
    translate_safe();
    translate_loadingMask();

    var target = document.getElementsByTagName('body')[0];
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            //            console.log(mutation.type);
//                console.log(mutation.target);
//                console.log(mutation.addedNodes);
            //            console.log(mutation.removedNodes);

            if (mutation.addedNodes[0].id === 'loadingMask') {
                translate_loadingMask();
            }
            if (mutation.addedNodes[0].id === 'dropOverlay') {
                translate_dropOverlay();
            }
            if (mutation.target.classList.contains('toolbar')) {
                translate_toolbar();
            }
            if (mutation.target.id === 'crumb') {
                translate_crumb();
            }
            if (mutation.target.classList.contains('path-item')) {
                translate_crumb();
            }
            if (mutation.target.id === 'fileListHead') {
                translate_column();
            }
            if (mutation.addedNodes[0].id === 'sfile-openSfile') {
                translate_column();
            }
            if (mutation.addedNodes[0].id === 'list') {
                translate_copyBox();
            }
            if (mutation.addedNodes[0].id === 'x-yp-1') {
                translate_x_yp_1();
            }
            if (mutation.addedNodes[0].id === 'x-yp-2') {
                translate_x_yp_2();
            }
            if (mutation.addedNodes[0].id === 'x-yp-3') {
                translate_x_yp_3();
            }
            if (mutation.addedNodes[0].id === 'x-yp-4') {
                translate_x_yp_4();
            }
            translate_toolbar();
            translate_crumb();
            translate_column();
            translate_loadingMask();
            if (mutation.addedNodes.length) {
                var i;
                for (i = 0; i < mutation.addedNodes.length; i++) {
                    if (mutation.addedNodes[i].classList.contains('file-list-head')) {
                        translate_column();
                    }
                    if (mutation.addedNodes[i].classList.contains('page-nav')) {
                        translate_pageNav();
                    }
                }
            }
            if (mutation.addedNodes[0].classList.contains('panel')) {
                if (mutation.addedNodes[0].getElementsByClassName('upload-toolbar').length) {
                    translate_PanelUpload(mutation.addedNodes[0].id);
                    create_observerPanel(mutation.addedNodes[0], translate_PanelUpload);
                }
                if (mutation.addedNodes[0].getElementsByClassName('offdl-dia').length) {
                    translate_PanelOffdl(mutation.addedNodes[0].id);
                    create_observerPanel(mutation.addedNodes[0], translate_PanelOffdl);
                }
                if (mutation.addedNodes[0].getElementsByClassName('offdl-dia-create').length) {
                    translate_PanelOffdlCreate(mutation.addedNodes[0].id);
                }
                if (mutation.addedNodes[0].getElementsByClassName('fileBox').length) {
                    translate_PanelFileBox(mutation.addedNodes[0].id);
                    create_observerPanel(mutation.addedNodes[0], translate_PanelFileBox);
                }
                if (mutation.addedNodes[0].getElementsByClassName('sina').length) {
                    translate_PanelLottery(mutation.addedNodes[0].id);
                }
            }
            if (mutation.addedNodes[0].classList.contains('mc-player')) {
                mutation.addedNodes[0].id = 'mc-player_';
                translate_McPlayer();
                create_observerPanel(mutation.addedNodes[0], translate_McPlayer);
            }
        });
    });
    var config = {
        attributes   : false,
        childList    : true,
        characterData: false,
        subtree      : true
    };
    observer.observe(target, config);
}

