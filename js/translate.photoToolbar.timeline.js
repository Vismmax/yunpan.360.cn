function translate_photoToolbar_timeline() {

	var timelineMenu = document.getElementById('timeline-menu');
	if (!timelineMenu) {
		var menus = document.querySelectorAll('.ui-menu-with-icon');
		if (menus) {
			for (var i = 0; i < menus.length; i++) {
				if (menus[i].textContent == '最近上传按年分组按月分组按天分组') {
					timelineMenu = menus[i];
					timelineMenu.id = 'timeline-menu';
				}
			}
		}
	}

	if (timelineMenu) {
		var menuItems = timelineMenu.querySelectorAll('.ui-menu-item .text');
		if (menuItems) {
			rename(menuItems[0], 'text', dict.toolbarPhoto_timeline0);
			rename(menuItems[1], 'text', dict.toolbarPhoto_timeline1);
			rename(menuItems[2], 'text', dict.toolbarPhoto_timeline2);
			rename(menuItems[3], 'text', dict.toolbarPhoto_timeline3);
		}
	}
}

