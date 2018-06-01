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
    workObjList: [
      {
        date      : '2018-01-01',
        startTime : '9:00',
        endTime   : '18:00',
        workHour  : 7.75,
      },
      {
        date      : '2018-03-01',
        startTime : '9:30',
        endTime   : '20:00',
        workHour  : 7.75,
      }
    ], //データの格納場所。宣言時は空
    updateRecord: { //作成/更新レコード
      date      : new Date(),
      startTime : '9:30',
      endTime   : '18:00',
      workHour  : 7.75,
    }
  },
  created : function () {
    //this.select();
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
      return '2000/11/22';
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
        //本来であれば、予めitemオブジェクトを生成しておいてそれをajaxに投げ、
        //APIでの更新が成功したのであればdataにitemを追加する、という方法がよさそうだ。
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
