//Fetch APIでAirTableのデータを取得している。API KEYはGitHubには上げないこと。
//ES6のimport/exportを使いたいが、エラーになる。
const fetchURI = "https://api.airtable.com/v0/appLuomWcZr2mn0fL/cdData?api_key=" + AIRTABLE_API_KEY;

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
