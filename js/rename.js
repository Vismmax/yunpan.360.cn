function rename(sel, attr, text, nn) {
    var noda;
    nn = nn || 0;
    if (noda = document.querySelectorAll(sel)) {
        for (var i = 0; i < noda.length; i++) {
            switch (attr) {
                case 'text':
                    var ch = noda[i].childNodes;
                    for (var j = nn; j < ch.length; j++) {
                        if (ch[j].nodeName === '#text') {
                            ch[j].textContent = text;
                            break;
                        }
                    }
                    break;
                case 'title':
                    noda[i].title = text;
                    break;
                case 'placeholder':
                    noda[i].placeholder = text;
                    break;
                case 'value':
                    noda[i].value = text;
                    break;
                default:
                    break;
            }
        }
    }
}

