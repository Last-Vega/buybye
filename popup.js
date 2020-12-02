
$(function () {
    console.log("popupスクリプト");
    const htmlPath = './index.html?url=' + location.href;
    const htmlURL = chrome.extension.getURL(htmlPath);
    $("#go-to-form").click(function(){
        window.open(htmlURL);
      });
});