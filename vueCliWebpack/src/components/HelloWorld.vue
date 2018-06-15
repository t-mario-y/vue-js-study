<template>
  <v-app class="helloWorld">
    <v-navigation-drawer persistent v-model="drawer" enable-resize-watcher app><!-- ナビバー -->
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app><!-- ヘッダはv-contentの外側に書く -->
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>勤務時間ログ</v-toolbar-title>
      <v-fab-transition>
        <v-btn v-show="!hidden" color="green" dark absolute fixed bottom right fab>
          <v-icon>add</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-toolbar>
      <main>
        <v-content>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-card>
                <v-list two-line subheader>
                  <v-list-tile v-for="item in items" :key="item.id" avatar>
                    <v-list-tile-content>
                      <v-list-tile-title>{{item.date|showDate}}</v-list-tile-title>
                      <v-list-tile-sub-title>{{item.startTime}} ~ {{item.endTime}} / {{item.workingTime|showDuration}}</v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                      <v-btn icon ripple>
                        <v-icon color="grey lighten-1">info</v-icon>
                      </v-btn>
                    </v-list-tile-action>
                  </v-list-tile>
                </v-list> 
              </v-card>
            </v-flex>
          </v-layout>
        </v-content>
      </main>
  </v-app>
</template>
<script>
import axios from 'axios';
const API_URI = 'https://work-time-log-api.herokuapp.com/workTimeLog';
export default {
  name: 'HelloWorld',
  data: () => ({
    drawer: false,
    msg: "Hello, Vuetify.",
    items: []
  }),
  props: {
    source: String
  },
  mounted(){
    this.execSelect();  
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
    showDate : function(dateString){
      return `${dateString.slice(0,4)}年${dateString.slice(5,7)}月${dateString.slice(8,10)}日`;
    }
  },
  methods:{
    //Web APIへのアクセス。execXXX
    execSelect(){
      axios.get(API_URI + '/select')
      .then((response) => {
        this.items = response.data;
        console.log(`Select succeeded in Vue.js.`);
      }).catch((error) => {
        console.log(error);
      })
    },
  }
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>