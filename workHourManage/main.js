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
      date      : '',
      startTime : '',
      endTime   : '',
      workingTime  : '',
    }
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
    //dateオブジェクトのHH:mmを返す
    showTime : function(date){
      return dateFns.format(date, 'HH:mm');
    },
  },
  created : function () {
    this.select();
//    this.initUpdateRecord();
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
      //date-fnsでフォーマットする
      return dateFns.format(date, 'YYYY/MM/DD');
    },
    //更新レコードの初期化
    initUpdateRecord(){
      let _today     = dateFns.startOfToday();
      let _startTime = dateFns.setMinutes(dateFns.setHours(_today, 9), 30);
      let _endTime   = dateFns.setMinutes(dateFns.setHours(_today, 15), 15);

      this.updateRecord.date = _today;
      this.updateRecord.startTime = _today;
      this.updateRecord.endTime = _endTime;  
      this.calcWorkTime();
    },
    //開始時間/終了時間から勤務時間を算出してセットする
    calcWorkTime(){
      //TODO Date型どうしで比較可能にする。そのためには、時間入力(timepicker)で内部的に日付を持たせる必要がある。
      let _start = dateFns.format(this.updateRecord.startTime, 'HH:mm');
      let _end   = dateFns.format(this.updateRecord.endTime, 'HH:mm');
      this.updateRecord.workingTime = dateFns.differenceInSeconds(_end, _start )- 3600;
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
    insert(){
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
      })
    },
    update(){
      var target = this.updateRecord;
      axios.patch(API_URI + '/update', {
        'date'        : target.date, 
        'startTime'   : target.startTime,
        'endTime'     : target.endTime,
        'workingTime' : target.workingTime,
      }).then((response) =>{ 
        console.log(`Update succeeded in Vue.js : ${response.data}`);
        //再表示
        this.select();
      })
    },
  },
});
