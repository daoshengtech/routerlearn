<template>

</template>
  <div>
    <h2>{{msg}}-{{$route.params.username}}-{{$route.params.id}}</h2>

</div>
<script>
    export default {
        name: "Hi1",
      data(){
          return{
            msg:'I am Hi1 page.'
          }
      }
    }
</script>

<style scoped>

</style>
