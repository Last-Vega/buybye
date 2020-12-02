var tabUrl = "";
chrome.tabs.getSelected(tab=>{  // 現在のタブを取得
    tabUrl = tab.url;    // tab.titleには現在開いているタブのページタイトルが、tab.urlにはURLが格納されている。

});

$(function () {
    console.log("popupスクリプト");
    const htmlPath = 'https://bloodcurdling-cemetery-16965.herokuapp.com/will/' + tabUrl;
    /*const htmlURL = chrome.extension.getURL(htmlPath);:*/
    $("#go-to-form").click(function(){
        window.open(htmlPath);
      });
});