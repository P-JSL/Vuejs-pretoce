<template>
  <div id="app">
    <router-view/>
    <h1>{{header}}</h1>
    <h1>{{welcome}}</h1>
    <h1>{{counter}}</h1>
    <button @click="increment">나를눌러줘</button>
  </div>
</template>

<script>

import Vuex from "vuex";

const store = new Vuex.Store({
  state : {
    msg : 'Hello World',
    count : 0
  },
  mutations : {
    increment(state){
      state.count++;
    }
  }
})
export default {
  name: 'App',
  data(){
    return {
      header : 'Vuex app'
    }
  },
  computed : {
    welcome(){
      return store.state.msg  // msg 상태 반환
    },
    counter(){
      return store.state.count; // counter 상태 반환
    }
  },
  methods : {
    increment(){
      store.commit('increment') // Vuex increment 뮤테이션 트리거
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
