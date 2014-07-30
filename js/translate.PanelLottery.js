function translate_PanelLottery(id) {
    id = '#' + id;
    rename(id + ' .content0 h2+p', 'text', dict.PanelLottery_content0_p1, 0);
    rename(id + ' .content0 h2+p', 'text', dict.PanelLottery_content0_p2, 2);
    rename(id + ' .content0 p+p', 'text', dict.PanelLottery_stars);
    rename('#lotteryRecords', 'text', dict.PanelLottery_lotteryRecords);
    rename(id + ' .sina', 'text', dict.PanelLottery_sina);
    rename(id + ' .tencent', 'text', dict.PanelLottery_tencent);
    rename(id + ' .content1 p', 'text', dict.PanelLottery_content1_p1);
    rename(id + ' .content1 p+p', 'text', dict.PanelLottery_content1_p2);
    rename(id + ' .content2 p', 'text', dict.PanelLottery_content2_p1);
    rename(id + ' .content2 p+p', 'text', dict.PanelLottery_content2_p2);
    rename(id + ' .close-link span', 'text', dict.BasePanel_closeLink);
    document.querySelector(id + ' .sina').style.left = '68px';
    document.querySelector(id + ' .tencent').style.right = '30px';
}

