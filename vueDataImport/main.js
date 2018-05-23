//REST APIで Fetchしてみる
//https://qiita.com/matsuoshi/items/7c19e7dcf404b7d921d6
//const fetchURI = 'https://holidays-jp.github.io/api/v1/date.json';
//↑データがカタマリでしか取れない(ループできない)ので変えました。

//試しにIE11で動かす
const fetchURI = 'https://api.github.com/repos/vueJs/vue/issues?state=open';
const vm = new Vue({
  el: "#myApp",
  data:{
    fetchDataList: [] //データの格納場所。宣言時は空
  },
  created : function () {
    fetch(fetchURI)
      .then(response => response.json())
      .then((data) => {
        this.fetchDataList = data;
      })
  },
});
