<template>
<div id="form">
  <textarea
    id="tweetBox"
    placeholder="There are good reasons why I'll buy this product."
    name="tweet_box"
    maxlength="140"
    required
    v-on:keyup="GetTweet(value)"
    cols="40"
    rows="8">
  </textarea>
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

  methods: {
    GetTweet(str,code){
      var target = document.getElementById("form");
      var text_all = document.getElementById("tweetBox");
      var input_data = text_all.value.replace(/\r?\n/g, '%0D%0A');
      TWEET.innerHTML = '<a class="button" href="https://twitter.com/intent/tweet?hashtags=buyBye&text=' + input_data + '" target="_blank">Tweet</a>'
    }
  }
}
</script>

<style lang="scss">
#tweetBox {
    border: 2px solid #00aced ;
    border-radius: 0.67em;
    padding: 0.5em;
    background-color: snow;
    width: 50em;
    height: 120px;
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
