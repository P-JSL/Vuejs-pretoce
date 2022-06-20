<template>
  <div>
    <header>
      <div class="navbar navbar-default">
        <div class="navbar-header">
          <h1><router-link to="{name : 'iMain'}">{{sitename}}</router-link></h1> <!--iMain 경로-->
        </div>
      </div>
      <div class="nav navbar-nav navbar-right cart">
        <router-link active-class="active" class="btn btn-default btn-lg" tag="button" to="{name : 'Form'}">
          <span class="glyphicon glyphicon-shopping-cart">
            {{cartItemCount}}
          </span>
          체크아웃
        </router-link>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header.vue",
  data(){
    return {
        sitename : "Vue.js 애완용품샵",
      }
    },
  props : ['cartItemCount'],
  methods: {
    showCheckout(){
      this.$router.push({name:'Form'});
    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
  color:black;
}
</style>
