<template>

</template>
  <div>
    <h2>{{msg}}</h2>
    <P>newsId:{{$route.params.newsId}}</P>
    <P>newsTitle:{{$route.params.Title}}</P>
    <router-view></router-view>
</div>
<script>
    export default {
      name: 'params',
      data () {
        return {
          msg: 'params page'
        }
      },
      beforeRouteEnter:(to,from,next)=>{
        console.log("准备进入路由模板");
        next();
      },
      beforeRouteLeave: (to, from, next) => {
        console.log("准备离开路由模板");
        next();
      }
    }
</script>

<style scoped>

</style>
