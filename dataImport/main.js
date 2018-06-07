//WEB APIで Fetchする
//IE11に対応させるなら、axiosが必要
//const fetchURI = 'https://api.github.com/repos/vueJs/vue/issues?state=open';
//AirTableからAPIでデータを取得している。API KEYはGitHubには上げないこと。
const fetchURI = "https://api.airtable.com/v0/appLuomWcZr2mn0fL/cdData?api_key=[API_KEY]";

const vm = new Vue({
  el: "#myApp",
  data: {
    recordList: [] //データの格納場所。宣言時は空
  },
  created: function () {
    fetch(fetchURI)
      .then(response => response.json())
      .then((data) => {
        this.recordList = data.records;
      })
  },
});
