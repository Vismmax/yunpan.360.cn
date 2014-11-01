function rename_arrs(sel, objDict) {

	if (sel == null) return;

	var rn = function(el) {
		var text = el.textContent;
		if (text) {
			for (var word in objDict) {
				var st = word.toString();
				var rt = objDict[word];
				text = text.replace(st, rt);
			}
			el.textContent = text;
		}
	};

	if (typeof(sel) == 'string') {
		var nodes;
		if (nodes = document.querySelectorAll(sel)) {
			for (var i = 0; i < nodes.length; i++) {
				rn(nodes[i]);
			}
		}
	}

	if (typeof (sel) == 'object') {
		for (var j=0; j<sel.length; j++) {
			rn(sel[j]);
		}
	}

}

