//5-1.スクリプトからmountする
const vm = new Vue({
//  el: "#myApp",
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
  mounted(){
    console.log("now Vue Instance is mounted.");
  },
  template: `
  <div>
    <li v-for="friend in vueFriends">
      {{friend.first}}
    </li>
  </div>
  `,
});

// consoleで
// vm.$mount("#myApp")
// を実行すると、mounted()が走りマウントされる。