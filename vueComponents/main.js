/**
 * Vue.component()を使ったコンポーネント化
 * かなり難しいが大事な考え方なので勉強すること
 */
Vue.component('friend-comp',{
  props: ['friend'],
  filters: {
    fullName(val){
      return `${val.first} ${val.last}`
    }
  },
  methods: {
     incrementAge(friend){
       friend.age += 1;
     },
     decrementAge(friend){
      friend.age -= 1;
    }
  },
  template: `
    <div>
      <h4>{{friend|fullName}}, {{friend.age}} years old.</h4>
      <div>
        <span>First Name:</span><input v-model="friend.first"/>
        <span>Last Name:</span><input v-model="friend.last"/>
      </div>
      <span>age:</span>
      <button v-on:click="incrementAge(friend)">+</button>
      <button v-on:click="decrementAge(friend)">-</button>
    </div>
  `
});
const vm = new Vue({
  el: "#myApp",
  data:{
      vueFriends: [
      {
        first: 'Bobby',
        last : 'Anderson',
        age  : 25.
      },
      {
        first: 'Mary',
        last : 'Serra',
        age  : 23,
      },
    ],
  },
})