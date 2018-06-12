<template>
  <div class="update">
      <div class="column column-33">
        <span>日付</span><input v-model="updateRecord.date" />
        <!--TODO vue-routerでは、直接vmを読むことができない。 -->
      </div>
<!--
    <div class="row">
      <div class="column column-33">
        <span>日付</span><input v-model="updateRecord.date" />
      </div>
      <div class="column column-33">
        <span>出勤時間</span>
        <select v-model="updateRecord.startTime">
          <option value="09:00">09:00</option><option value="09:15">09:15</option><option value="09:30">09:30</option><option value="09:45">09:45</option>
          <option value="10:00">10:00</option><option value="10:15">10:15</option><option value="10:30">10:30</option><option value="10:45">10:45</option>
        </select>
      </div>
      <div class="column column-33">
        <span>退勤時間</span><select v-model="updateRecord.endTime">
        <option value="17:00">17:00</option><option value="17:15">17:15</option><option value="17:30">17:30</option><option value="17:45">17:45</option>
        <option value="18:00">18:00</option><option value="18:15">18:15</option><option value="18:30">18:30</option><option value="18:45">18:45</option>
        <option value="19:00">19:00</option><option value="19:15">19:15</option><option value="19:30">19:30</option><option value="19:45">19:45</option>
        <option value="20:00">20:00</option><option value="20:15">20:15</option><option value="20:30">20:30</option><option value="20:45">20:45</option>
        <option value="21:00">21:00</option><option value="21:15">21:15</option><option value="21:30">21:30</option><option value="21:45">21:45</option>
        <option value="22:00">22:00</option><option value="22:15">22:15</option><option value="22:30">22:30</option><option value="22:45">22:45</option>
      </select>
      </div>
    </div>
    
    <div>勤務時間:{{updateRecord.workingTime|showDuration}}</div>
    <span v-if="updateMode === 'insert'">
      <button v-on:click="executeInsert">登録</button>
    </span>
    <span v-else>
      <button v-on:click="executeUpdate">更新</button>
      <button v-on:click="executeDelete">削除</button>
    </span>
    -->
    <button v-on:click="transPage('list')">一覧画面へ</button>
  </div>
</template>