function translate_column() {
    rename('#fileListHead .column-name .file-sort', 'text', dict.column_name);
    rename('#fileListHead .column-size .file-sort', 'text', dict.column_size);
    rename('#fileListHead .column-time .file-sort', 'text', dict.column_time);
    rename('#fileListHead .column-code', 'text', dict.column_code);
    rename('#fileListHead .column-hit', 'text', dict.column_hit);

    rename('.file-list-head .column-name span', 'text', dict.column_name);
    rename('.file-list-head .column-size span', 'text', dict.column_size);
    rename('.file-list-head .column-time span', 'text', dict.column_time);
    rename('.file-list-head .column-path span', 'text', dict.column_path);
}

function translate_fileListHistory() {
    rename('.column-hisversionid span', 'text', dict.fileListHistory_columnHisversionid);
    rename('.column-hissize span', 'text', dict.fileListHistory_columnHissize);
    rename('.column-histime span', 'text', dict.fileListHistory_columnHistime);
}

