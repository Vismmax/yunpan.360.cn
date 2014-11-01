function translate_dynamic() {
	var frame = document.getElementById('mainFrame');
	if (frame.src.indexOf('dynamic') >= 0) {

		frame.onload = function() {
			console.log('load');

			var doc = frame.contentDocument;

			var observer = new MutationObserver(function(mutations) {
				var arrNodes = doc.querySelectorAll('.list-list .desc span');
				rename_arrs(arrNodes, dict.dynamic_objDict);
			});
			var config = {
				attributes: false,
				childList: true,
				characterData: false,
				subtree: false
			};
			observer.observe(doc.querySelector('.list-list'), config);

			rename(doc.querySelector('.nav-tablist span'), 'text', dict.dynamic_tabAll);
			rename(doc.querySelector('.nav-tablist span[data-type="file"]'), 'text', dict.dynamic_tabFile);
			rename(doc.querySelector('.nav-tablist span[data-type="share"]'), 'text', dict.dynamic_tabShare);
			rename(doc.querySelector('.nav-tablist~.y-btn-blue .label'), 'text', dict.dynamic_btnBlue);
			rename(doc.querySelector('.nav-tablist~.y-btn-gray .label'), 'text', dict.dynamic_btnGray);
			rename(doc.querySelector('.loading-tip'), 'text', dict.dynamic_loadingTip);
			rename(doc.querySelector('.limit-tip'), 'text', dict.dynamic_limitTip);
			var arrNodes = doc.querySelectorAll('.list-list .desc span');
			if (arrNodes) rename_arrs(arrNodes, dict.dynamic_objDict);
		};
	}
}

