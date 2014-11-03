function translate_dialogDel(el) {
	translate_dialogTitlebar(el, dict.dialogDel_title);
	rename(el.querySelector('.ui-dia-msg-text p:first-child'), 'text', dict.dialogDel_msg1, 0);
	rename(el.querySelector('.ui-dia-msg-text p:first-child'), 'text', dict.dialogDel_msg2, 1);
	rename(el.querySelector('.ui-dia-msg-text .info'), 'text', dict.dialogDel_msgInfo);
	translate_dialogBaseBtn(el);
}

