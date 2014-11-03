function translate_photoLeftPanel() {

	rename('#leftPanel .all-photo .title', 'text', dict.leftPanel_allPhoto, 1);
	rename('#leftPanel .private-album .title', 'text', dict.leftPanel_privateAlbum, 1);
	rename('#leftPanel .share-album .title', 'text', dict.leftPanel_shareAlbum, 1);

}

