const vm = new Vue({
  el: "#myApp",
  //templateは"単一の要素"しか返せないので、divなりで囲む。
  //"Component template should contain exactly one root element.
  template: `
    <div>
      <div v-for="friend in vueFriends">
        <h4>{{friend|fullName}}, {{friend.age}} years old.</h4>
        <div class="row">
          <div class="column column-50">
            <span>First Name:</span><input v-model="friend.first"/>
          </div>
          <div class="column column-50">
            <span>Last Name:</span><input v-model="friend.last"/>
          </div>
        </div>
        <span>age:</span>
        <button v-on:click="incrementAge(friend)">PLUS</button>
        <button v-on:click="decrementAge(friend)">MINUS</button>
      </div>
    </div>
  `,
  //dataプロパティには{{}}記法でアクセスできる。
  data: {
    vueFriends: [
      {
        first: 'Bobby',
        last: 'Anderson',
        age: 25.
      },
      {
        first: 'Mary',
        last: 'Serra',
        age: 23,
      },
    ],
  },
  //filtersを掛けることでJSONデータからシンプルに記述できる
  //computedの使い所がわからない
  filters: {
    fullName(val) {
      return `${val.first} ${val.last}`
    }
  },
  //methodsを定義
  methods: {
    incrementAge(friend) {
      friend.age += 1;
    },
    decrementAge(friend) {
      friend.age -= 1;
    }
  }
})