<template>
<div id="form">
  <h2>購入理由をエレベーターピッチ風に書いてみましょう!</h2>
  {{evp_template.temp1}}
  <textarea
    class="tweetBox"
    placeholder="購買動機を入力してね"
    name="why"
    maxlength="140"
    required
    v-on:keyup="GetTweet(value)"
    cols="40"
    rows="2">
  </textarea>
  {{evp_template.temp2}}<br>
  {{evp_template.temp3}}
  <textarea
    class="tweetBox"
    placeholder="どんな問題が解決できるか入力してね"
    name="whatOrWhy"
    maxlength="140"
    required
    v-on:keyup="GetTweet(value)"
    cols="40"
    rows="2">
  </textarea>
  {{evp_template.temp4}}
  <textarea
    class="tweetBox"
    placeholder="どのようにして解決できそうか入力してね"
    name="how"
    maxlength="140"
    required
    v-on:keyup="GetTweet(value)"
    cols="40"
    rows="2">
  </textarea>
  {{evp_template.temp5}}
  <!--
  {{evp_template.temp6}}
  <select
    class="tweetBox"
    name="replace"
    size="2"
    v-on:keyup="GetTweet(value)"
    >
      <option value="できます">できます</option>
      <option value="できません">できません</option>
  </select>
  {{evp_template.temp7}}
  -->
  <div id="TWEET">
    <a
      class="button"
      href="https://twitter.com/intent/tweet?hashtags=buyBye&text="
      target="_blank"
      >
      Tweet
    </a>

  </div>
</div>
</template>

<script>
export default {
  name: 'form',
  data: function() {
    return {
      evp_template: {
          temp1: "この商品は、",
          temp2: "を解決する事を目的に買います。",
          temp3: "これがあると",
          temp4: "を",
          temp5: "して問題を解決できます。",
          temp6: "これは、今の私の所持品では代替",
          temp7: "。"
      }

    }
  },
  methods: {
    GetTweet(str,code){
      var target = document.getElementById("form");
      var evp_box = document.getElementsByClassName("tweetBox");
      var queryStr = location.search;
      var queryArr = queryStr.split('=');
      var url = encodeURI(queryArr[1]); 
      console.log(evp_box);
      var text_all = "";
      var text_all = this.evp_template.temp1 + evp_box[0].value + this.evp_template.temp2 + this.evp_template.temp3 + evp_box[1].value
                     + this.evp_template.temp4 + evp_box[2].value + this.evp_template.temp5 + url;
      var input_data = text_all.replace(/\r?\n/g, '%0D%0A');
      TWEET.innerHTML = '<a class="button" href="https://twitter.com/intent/tweet?hashtags=buyBye&text=' + input_data + '" target="_blank">Tweet</a>'
    }
  }
}
</script>

<style lang="scss">
.tweetBox {
    border: 2px solid #00aced ;
    border-radius: 0.67em;
    padding: 0.5em;
    background-color: snow;
    width: 50em;
    height: 60px;
    font-size: 1em;
    line-height: 1.2;
}
#TWEET {
  width:150px;
  height:30px;
  line-height:30px;
  text-align:center;

  background-color: #55acee;
  border: 2px solid #55acee;
  border-radius: 20px;
  color: #fff;
  padding:4px 32px;
  -webkit-transition: all .3s;
  transition: all .3s;
}
#TWEET:hover {
  background-color: #fff;
  color: #55acee;
}
.error { color: red; }
</style>
