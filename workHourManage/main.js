//勤怠時間を携帯webからログ取れるアプリを作る
//画面切り替えは特にrouterは使わない。
const API_URI = 'http://localhost:3000/samples/airTable/work';

const vm = new Vue({
  el: '#myApp',
  components: {
  	vuejsDatepicker,
  },
  data:{
    currentPage: 'list',
    workObjList: [], //データの格納場所。宣言時は空
    updateRecord: { //作成/更新レコード
      date      : new Date(),
      startTime : '9:30',
      endTime   : '18:00',
      workHour  : 27900, //秒単位
    }
  },
  watch : {
    'updateRecord.startTime' : function(){
      //TODO
      this.updateRecord.workHour = 44000;
    },
    'updateRecord.endTime' : function(){
      //TODO
      this.updateRecord.workHour = 55000;
    },

  },
  created : function () {
    this.select();
  },
  methods : {
    //ページ遷移
    transPage(pageKind){
      this.currentPage = pageKind;
    },
    //ページ判定
    decidePage(pageKind){
      return this.currentPage === pageKind;
    },
    //日付表示
    customFormatter(date) {
      //TODO カスタムで定義して戻す
      //VueJsの汎用ライブラリがないか探す
      return date.getFullYear() + "/" + (date.getMonth()+1) + "/" +date.getDate();
    },
    select(){
      axios.get(API_URI + '/select')
      .then((response) => {
        this.workObjList = response.data;
        console.log(`Select succeeded in Vue.js.`);
      }).catch((error) => {
        console.log(error);
      })
    },
    insert(){
      axios.post(API_URI + '/insert', {
        'date'      : target.date, 
        'startTime' : target.startTime,
        'endTime'   : target.endTime,
        'workHour'  : target.workHour,
      }).then((response) =>{ 
        console.log(`Insert succeeded in Vue.js : ${response.data}`);
        //再表示
        this.select();
      })
    },
    update(){
      var target = this.updateRecord;
      axios.patch(API_URI + '/update', {
        'date'      : target.date, 
        'startTime' : target.startTime,
        'endTime'   : target.endTime,
        'workHour'  : target.workHour,
      }).then((response) =>{ 
        console.log(`Update succeeded in Vue.js : ${response.data}`);
        //再表示
        this.select();
      })
    },
  },
});
