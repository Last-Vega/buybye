$(function () {
  console.log("コンテントスクリプト");
  const htmlPath = './index.html?url=' + location.href;
  const htmlURL = chrome.extension.getURL(htmlPath);

  $("#add-to-cart-button").click(function () {
    var flag = window.confirm('これを買う動機ちゃんとある?')
    if (flag) {
      window.open(htmlURL);
    }
    else {
      return false;
    }
  })

  $("#rcx-subscribe-submit-button-announce").click(function () {
    var flag = window.confirm('これを買う動機ちゃんとある?')
    if (flag) {
      window.open(htmlURL);
    }
    else {
      return false;
    }
  })

  //楽天
  $(".cart-button").click(function () {
    var flag = window.confirm('これを買う動機ちゃんとある?')
    if (flag) {
      window.open(htmlURL);
    }
    else {
      return false;
    }
  })

  //Yahoo shopping
  $(".elButton").click(function () {
    var flag = window.confirm('これを買う動機ちゃんとある?')
    if (flag) {
      window.open(htmlURL);
    }
    else {
      return false;
    }
  })
});
