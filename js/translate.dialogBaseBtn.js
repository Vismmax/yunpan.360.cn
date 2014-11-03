function translate_dialogBaseBtn(el) {

	rename(el.querySelector('.ui-dialog-buttonset .ui-button-blue .ui-button-text'), 'text', dict.dialogBtnOk);
	rename(el.querySelector('.ui-dialog-buttonset .ui-button-gray .ui-button-text'), 'text', dict.dialogBtnCancel);
}

