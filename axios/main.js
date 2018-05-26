//WEB APIでアクセスする。
//const fetchURI = 'https://api.github.com/repos/vueJs/vue/issues?state=open';
//AirTableというサービスをREST APIとして動かしている。API KEYはGitHubには上げないこと。
const fetchURI = "https://api.airtable.com/v0/appLuomWcZr2mn0fL/cdData?api_key=[API_KEY]";

const vm = new Vue({
  el: "#myApp",
  data:{
    fetchDataList: [] //データの格納場所。宣言時は空
  },
  created : function () {
    axios.get(fetchURI)
      .then((response) => {
        console.log(response);
        this.fetchDataList = response.data.records;
      })
    },
  methods : {
    update(){
      //Fetch APIか、axios で GET/PUT/POST/PATCH/DELETE の記法を調査します。
    },
    create(){
      //TODO: Authorizeが通らない。
      //POST https://api.airtable.com/v0/appLuomWcZr2mn0fL/cdData 401 (Unauthorized)
      let params = new URLSearchParams();
      params.append('headers',
        {'Authorization': 'Bearer [API_KEY]'}
      );
      params.append('data',
        {
          "fields": {
            "ISBN": "B000024FDQ(NEW)",
            "musician": "Bobby Mcferrin(NEW)",
            "albumTitle": "Cirlcle Song(NEW)"
          }
        });

      axios.post('https://api.airtable.com/v0/appLuomWcZr2mn0fL/cdData', params)
        .then((response) =>{
          console.log(resnponse);
       })
    }
  },
});
