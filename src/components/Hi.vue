<template>

</template>
  <div>
    <h2>{{msg}}</h2>
    <router-view></router-view>
</div>
<script>
    export default {
        name: "Hi",
      data(){
          return{
            msg:'I am Hi page.'
          }
      }
    }
</script>

<style scoped>

</style>
