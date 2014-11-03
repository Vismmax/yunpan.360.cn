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

        runAsync(translate_loadingMask);
        runAsync(translate_dropOverlay);
        runAsync(translate_toolbar);
        runAsync(translate_crumb);
        runAsync(translate_column);
        runAsync(translate_copyBox);
        runAsync(translate_x_yp_1);
        runAsync(translate_x_yp_2);
        runAsync(translate_x_yp_3);
        runAsync(translate_x_yp_4);
        runAsync(translate_pageNav);
        runAsync(translate_search);
        runAsync(translate_dynamic);
        
        mutations.forEach(function (mutation) {

            if (mutation.addedNodes.length) {
                var addedNoda = mutation.addedNodes[0];

            //if (addedNoda.id === 'loadingMask') {
                //    translate_loadingMask();
                //}
                //if (addedNoda.id === 'dropOverlay') {
                //    translate_dropOverlay();
                //}
                //if (mutation.target.classList.contains('toolbar')) {
                //    translate_toolbar();
                //}
                //if (mutation.target.id === 'crumb') {
                //    translate_crumb();
                //}
                //if (mutation.target.classList.contains('path-item')) {
                //    translate_crumb();
                //}
                //if (mutation.target.id === 'fileListHead') {
                //    translate_column();
                //}
                //if (addedNoda.id === 'sfile-openSfile') {
                //    translate_column();
                //}
                //if (addedNoda.id === 'list') {
                //    translate_copyBox();
                //}
                //if (addedNoda.id === 'x-yp-1') {
                //    translate_x_yp_1();
                //}
                //if (addedNoda.id === 'x-yp-2') {
                //    translate_x_yp_2();
                //}
                //if (addedNoda.id === 'x-yp-3') {
                //    translate_x_yp_3();
                //}
                //if (addedNoda.id === 'x-yp-4') {
                //    translate_x_yp_4();
                //}
                //translate_toolbar();
                //translate_crumb();
                //translate_column();
                //translate_loadingMask();
                //if (mutation.addedNodes.length) {
                //    var i;
                //    for (i = 0; i < mutation.addedNodes.length; i++) {
                //        if (mutation.addedNodes[i].classList.contains('file-list-head')) {
                //            translate_column();
                //        }
                //        if (mutation.addedNodes[i].classList.contains('page-nav')) {
                //            translate_pageNav();
                //        }
                //    }
                //}

                if (addedNoda.classList.contains('panel')) {

                    if (addedNoda.getElementsByClassName('upload-toolbar').length) {
                        translate_PanelUpload(addedNoda);
                        create_observerPanel(addedNoda, translate_PanelUpload);
                    }

                    if (addedNoda.getElementsByClassName('fileBox').length) {
                        translate_PanelFileBox(addedNoda.id);
                        create_observerPanel(addedNoda, translate_PanelFileBox);
                    }

                    if (addedNoda.getElementsByClassName('sina').length) {
                        translate_PanelLottery(addedNoda.id);
                    }
                }

                if (addedNoda.classList.contains('ui-dialog')) {

                    if (addedNoda.getElementsByClassName('offdl-dia').length) {
                        translate_dialogOffdl(addedNoda);
                        create_observerPanel(addedNoda, translate_dialogOffdl);
                    }

                    if (addedNoda.getElementsByClassName('offdl-dia-create').length) {
                        translate_dialogOffdlCreate(addedNoda);
                    }

                    if (addedNoda.getElementsByClassName('fileBox').length) {
                        translate_PanelFileBox(addedNoda.id);
                        create_observerPanel(addedNoda, translate_PanelFileBox);
                    }

                    if (addedNoda.getElementsByClassName('ui-dialog-title').length) {
                        if (addedNoda.querySelector('.ui-dialog-title').textContent == '删除') {
                            translate_dialogDel(addedNoda);
                        }
                    }
                }

                if (addedNoda.classList.contains('mc-player')) {
                    translate_McPlayer(addedNoda);
                    create_observerPanel(addedNoda, translate_McPlayer);
                }
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

