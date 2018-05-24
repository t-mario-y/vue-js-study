//WEB APIで Fetchする
//IE11に対応させるなら、axiosが必要
//const fetchURI = 'https://api.github.com/repos/vueJs/vue/issues?state=open';
//AirTableというサービスをREST APIとして動かしている。API KEYはGitHubには上げないこと。
const fetchURI = "https://api.airtable.com/v0/appLuomWcZr2mn0fL/cdData?api_key=[API_KEY]";

const vm = new Vue({
  el: "#myApp",
  data:{
    fetchDataList: [] //データの格納場所。宣言時は空
  },
  created : function () {
    fetch(fetchURI)
      .then(response => response.json())
      .then((data) => {
        this.fetchDataList = data.records;
      })
  },
  methods : {
    updateMusician( id , musicianName ){ //'recVEAmKNl5X1pgwr',"Bobby Mcferrin_updated!"
      //TODO:これはNode.jsの記法なのでアプリ側では通りません。(requireでエラーになる。)
      //Fetch APIか、axios で GET/PUT/POST/PATCH/DELETE の記法を調査します。
      let Airtable = require('airtable');
      let base = new Airtable({apiKey: 'key5p6IkMIZ5aE4pc'}).base('appLuomWcZr2mn0fL');
      base('cdData').update(id , {
        "musician": musicianName
      }, function(err, record) {
        if (err) { console.error(err); return; }
        console.log(record.get('ISBN'));
      });
    }
  },
});
