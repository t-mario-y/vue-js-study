//Expressでローカルに建てたAPIサーバ越しにアクセスする。
//データのリフレッシュはfetch()で行っているが、たぶんwatch()などでいい感じに実装できそうだ。
const API_URI = 'http://localhost:3000/samples';

const vm = new Vue({
  el: '#myApp',
  data:{
    recordList: [], //データの格納場所。宣言時は空
    updateRecord: { //作成/更新レコード
      id        : '',
      ISBN      : 'ISBN',
      musician  : 'musician',
      albumTitle: 'album title',
    }
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
    create(){
      axios.post(API_URI + '/airTable/create', {
        'ISBN'      : this.updateRecord.ISBN,
        'musician'  : this.updateRecord.musician,
        'albumTitle': this.updateRecord.albumTitle,
      }).then((response) =>{
        console.log(`Create succeeded in Vue.js : ${response.data}`);
        //再表示
        //本来であれば、予めitemオブジェクトを生成しておいてそれをajaxに投げ、
        //APIでの更新が成功したのであればdataにitemを追加する、という方法がよさそうだ。
        this.fetch();
      })
    },
    update(){
      //TODO 選択したレコードのIDをセットして送る必要がある
      var target = this.recordList[0];
      axios.patch(API_URI + '/airTable/update', {
        'id'        : target.id,
        'ISBN'      : this.updateRecord.ISBN,
        'musician'  : this.updateRecord.musician,
        'albumTitle': this.updateRecord.albumTitle,
      }).then((response) =>{
        console.log(`Update succeeded in Vue.js : ${response.data}`);
        //再表示
        this.fetch();
      })
    },
  },
});
