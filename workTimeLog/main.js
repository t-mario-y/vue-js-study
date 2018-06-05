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
      id        : null,
      date      : null,
      startTime : null,
      endTime   : null,
      workingTime  : null,
    },
    updateMode : 'insert',
  },
  watch : {
    'updateRecord.startTime' : function(){
      this.calcWorkTime();
    },
    'updateRecord.endTime' : function(){
      this.calcWorkTime();
    },
  },
  filters : {
    //秒数をHH:mmに変換(手動)
    showDuration : function(seconds){
      let hour = Math.floor(seconds / 3600);
      let minutes = Math.floor(seconds / 60) % 60;
      //hourを0埋め
      if(hour < 10){
        hour = `0${hour}`;
      }
      return `${hour}h${minutes}min`;
    },
  },
  created : function () {
    this.select();
  },
  methods : {
    startInsert(){
      this.initUpdateRecord();
      this.updateMode = 'insert';
      this.transPage('edit');
    },
    startUpdate(targetObj){
      this.updateRecord.id = targetObj.id;
      this.updateRecord.date = targetObj.date;
      this.updateRecord.startTime = targetObj.startTime;
      this.updateRecord.endTime = targetObj.endTime;
      this.calcWorkTime()
      this.updateMode = 'update';
      this.transPage('edit');
    },
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
      //date-fnsでフォーマットする
      return dateFns.format(date, 'YYYY/MM/DD');
    },
    //更新レコードの初期化
    initUpdateRecord(){
      this.updateRecord.date = dateFns.startOfToday();
      this.updateRecord.startTime = '09:30';
      this.updateRecord.endTime = '18:15';  
      this.calcWorkTime();
    },
    //開始時間/終了時間から勤務時間を算出してセットする
    calcWorkTime(){
      //dateFnsは日付部分を無視した時間差計算ができなかったのでmoment.jsを使う
      let _start = moment(this.updateRecord.startTime, 'HH:mm');
      let _end   = moment(this.updateRecord.endTime, 'HH:mm');
      this.updateRecord.workingTime = _end.diff(_start,'seconds') - 3600;
    },
    //Web APIへのアクセス
    select(){
      axios.get(API_URI + '/select')
      .then((response) => {
        this.workObjList = response.data;
        console.log(`Select succeeded in Vue.js.`);
      }).catch((error) => {
        console.log(error);
      })
    },
    executeInsert(){
      var target = this.updateRecord;
      axios.post(API_URI + '/insert', {
        'date'        : target.date, 
        'startTime'   : target.startTime,
        'endTime'     : target.endTime,
        'workingTime' : target.workingTime,
      }).then((response) =>{ 
        console.log(`Insert succeeded in Vue.js : ${response.data}`);
        //再表示
        this.select();
        this.transPage('list');
      })
    },
    executeUpdate(){
      var target = this.updateRecord;
      axios.patch(API_URI + '/update', {
        'id'          : target.id,
        'date'        : target.date, 
        'startTime'   : target.startTime,
        'endTime'     : target.endTime,
        'workingTime' : target.workingTime,
      }).then((response) =>{ 
        console.log(`Update succeeded in Vue.js : ${response.data}`);
        //再表示
        this.select();
        this.transPage('list');
      })
    },
    executeDelete(){
      //TODO 実装
    },
  },
});
