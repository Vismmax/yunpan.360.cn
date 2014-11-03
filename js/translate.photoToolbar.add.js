function translate_photoToolbar_add() {
	if (document.getElementById('menu-add')) return;
	var menus = document.querySelectorAll('.ui-menu');
	if (menus) {
		for (var i = 0; i < menus.length; i++) {
			if (menus[i].textContent == '从本地上传添加已有照片') {
				menus[i].id = 'menu-add';
				var items = menus[i].querySelectorAll('.ui-menu-item .text');
				rename(items[0], 'text', dict.toolbarPhoto_add0);
				rename(items[1], 'text', dict.toolbarPhoto_add1);
			}
		}
	}
}

