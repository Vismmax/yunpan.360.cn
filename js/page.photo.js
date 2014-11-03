if (window.location.hostname.indexOf('photo') === 0) {

	rename('title', 'text', dict.my_title);

	translate_topPanel();
	translate_userInfo();
	translate_photoLeftPanel();
	translate_photoToolbar();
	translate_photoCrumb();

	var target = document.getElementsByTagName('body')[0];
	var observer = new MutationObserver(function (mutations) {

		runAsync(translate_photoCrumb);
		runAsync(translate_photoToolbar_timeline);
		runAsync(translate_photoToolbar_newAlbum);
		runAsync(translate_photoToolbar_add);
		runAsync(translate_photoToolbar_more);
		runAsync(translate_photoWaterfall);

		rename('.upload-btn', 'title', dict.toolbarPhoto_tbUploadBtn);
		rename('.waterfall-preloading', 'text', dict.toolbarPhoto_load);
		rename('.mod-imgthumb-createalbum .input-text', 'placeholder', dict.toolbarPhoto_newAlbumName);

	});
	var config = {
		attributes   : false,
		childList    : true,
		characterData: false,
		subtree      : true
	};
	observer.observe(target, config);
}

