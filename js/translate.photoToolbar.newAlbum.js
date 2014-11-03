function translate_photoToolbar_newAlbum() {
	var menus = document.querySelectorAll('.ui-menu-with-icon');
	if (menus) {
		for (var i = 0; i < menus.length; i++) {
			if (menus[i].textContent.indexOf('新建个人相册') >= 0) {
				var elMenu = menus[i].querySelector('.ui-menu-item .text');
				rename(elMenu, 'text', dict.toolbarPhoto_newAlbum);
			}
			if (menus[i].textContent.indexOf(dict.toolbarPhoto_newAlbum) >= 0) {
				var elInput = menus[i].querySelector('.create-album-input');
				rename(elInput, 'placeholder', dict.toolbarPhoto_newAlbumName);
			}
		}
	}
}

