function translate_photoToolbar_more() {
	var menus = document.querySelectorAll('.ui-menu');
	if (menus) {
		for (var i = 0; i < menus.length; i++) {
			if (menus[i].textContent == '批量管理删除此相册') {
				var items = menus[i].querySelectorAll('.ui-menu-item .text');
				rename(items[0], 'text', dict.toolbarPhoto_more0);
				rename(items[1], 'text', dict.toolbarPhoto_more1);
			}
		}
	}
}

