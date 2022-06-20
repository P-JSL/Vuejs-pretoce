<template>
  <div class="hello">
    {{msg}}
  </div>
</template>

<script>
export default {
  name:'hello',
  data(){
    return {
      msg : 'Vue.js앱에 오신걸 환영 합니다.'
    }
  }
}
</script>
<style scoped>
</style>