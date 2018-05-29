//Expressでローカルに建てたAPIサーバ越しにアクセスする。
//データのリフレッシュはfetch()で行っているが、たぶんwatch()などでいい感じに実装できそうだ。
const API_URI = "http://localhost:3000/samples";

const vm = new Vue({
  el: "#myApp",
  data:{
    recordList: [] //データの格納場所。宣言時は空
  },
  created : function () {
    this.fetch();
  },
  methods : {
    fetch(){
      axios.get(API_URI + '/airTable/fetch')
      .then((response) => {
        this.recordList = response.data;
      })
    },
    update(){
      //Fetch APIか、axios で GET/PUT/POST/PATCH/DELETE の記法を調査します。
    },
    create(){
      axios.post(API_URI + '/airTable/create', {
        "ISBN"      : "B000024FDQ(client)",
        "musician"  : "Bobby Mcferrin(client)",
        "albumTitle": "Cirlcle Song(client)"
      })
        .then((response) =>{
          console.log(`create succeeded in Vue.js : ${response.data}`);
          //再表示
          this.fetch();
       })
    }
  },
});
