//REST APIで Fetchしてみる
//https://qiita.com/matsuoshi/items/7c19e7dcf404b7d921d6
//const fetchURI = 'https://holidays-jp.github.io/api/v1/date.json';
//↑データがカタマリでしか取れない(ループできない)ので変えました。
const fetchURI = 'https://api.github.com/repos/vueJs/vue/issues?state=open';
const vm = new Vue({
  el: "#myApp",
  data:{
    fetchDataList: [] //データの格納場所。宣言時は空
  },
  mounted() {
    console.log("now Vue Instance is mounted.");
    fetch(fetchURI)
      .then(response => response.json())
      .then((data) => {
        this.fetchDataList = data;
      })
  },
  template: `
  <div>
    <li v-for="item in fetchDataList">
      <h4>{{item.id}}:{{item.title}}</h4>
    </li>
  </div>
  `,
});
