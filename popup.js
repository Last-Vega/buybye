var tabUrl = "";
chrome.tabs.getSelected(tab=>{  // 現在のタブを取得
    tabUrl = tab.url;    // tab.titleには現在開いているタブのページタイトルが、tab.urlにはURLが格納されている。

});

$(function () {
    console.log("popupスクリプト");
    // var htmlPath = 'http://127.0.0.1:8080/'
    var htmlPath = 'https://bloodcurdling-cemetery-16965.herokuapp.com/'
    /*const htmlURL = chrome.extension.getURL(htmlPath);:*/
    $("#go-to-form").click(function(){
        var formUrl = 'will/' + tabUrl;
        htmlPath += formUrl
        window.open(htmlPath);
      });
      $("#goToQuestion").click(function(){
          var formUrl = 'question/' + tabUrl;
          htmlPath += formUrl
          window.open(htmlPath);
        });
});
