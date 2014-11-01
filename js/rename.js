function rename(sel, attr, text, nn) {
    nn = nn || 0;

    if (sel == null) return;

    var rn = function(el) {
        switch (attr) {
            case 'text':
                var ch = el.childNodes;
                for (var j = nn; j < ch.length; j++) {
                    if (ch[j].nodeName === '#text') {
                        ch[j].textContent = text;
                        break;
                    }
                }
                break;
            case 'title':
                el.title = text;
                break;
            case 'placeholder':
                el.placeholder = text;
                break;
            case 'value':
                el.value = text;
                break;
            default:
                break;
        }
    };

    if (typeof(sel) == 'string') {
        var noda;
        if (noda = document.querySelectorAll(sel)) {
            for (var i = 0; i < noda.length; i++) {
                rn(noda[i]);
            }
        }
    }

    if (typeof(sel) == 'object') {
        rn(sel);
    }
}

