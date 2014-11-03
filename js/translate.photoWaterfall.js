function translate_photoWaterfall() {

	var separator = '-';

	var nodes = document.querySelectorAll('.waterfall-toolbar .toolbar-title');
	if (nodes) {
		var text;
		for (var i=0; i<nodes.length; i++) {
			if (nodes[i].classList.contains('translated')) continue;
			text = nodes[i].textContent;
			for (ch in dict.toolbarPhoto_date) {
				text = text.replace(ch, separator);
			}
			if (text.charAt(text.length-1) === separator) {
				text = text.slice(0, -1);
			}
			nodes[i].classList.add('translated');
			nodes[i].textContent = text;
		}
	}

	var nodesCount = document.querySelectorAll('.waterfall-toolbar .toolbar-count');
	if (nodes) {
		var textCount;
		for (var j=0; j<nodesCount.length; j++) {
			if (nodesCount[j].classList.contains('translated')) continue;
			textCount = nodesCount[j].textContent;
			textCount = textCount.replace('张', dict.toolbarPhoto_count);
			nodesCount[j].classList.add('translated');
			nodesCount[j].textContent = textCount;
		}
	}

	rename('.waterfall-toolbar .chkall', 'text', dict.toolbarPhoto_chkall);
}

