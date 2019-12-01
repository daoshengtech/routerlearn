<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <button @click="goback">后退</button>
      <button @click="gogo">前进</button>
      <button @click="goHome">回到首页</button>
    </div>
    <router-link to="/">Home</router-link>
    <router-link to="/params/198/jspang is very good">params</router-link>
    <router-link  to="/jspang">jspang</router-link>
    <router-link to="/bbbbbb">我是瞎写的</router-link>
    <!--    <transition name="fade" mode="out-in">-->
<!--      <router-view ></router-view>-->
<!--    </transition>-->

<!--      <router-view name="left" style="float:left;width:50%;height: 300px;background: #0C0C0C; "><router-view/>-->
<!--        <router-view name="right" style="float:left;width:50%;height: 300px;background: #0C0C0C;"><router-view/>-->

    <div>
      <router-link to="/">首页</router-link>|
      <router-link to="/Hi">Hi页面</router-link>|
      <router-link :to="{name:'hi1',params:{username:'JSPang',id:'888'}}">Hi页面1</router-link>|
      <router-link to="/Hi/Hi2">Hi页面2</router-link>
    </div>
    <p>{{$route.name}}</p>


  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goback() {
      this.$router.go(-1);
    },

      gogo() {
        this.$router.go(1);
      },
    goHome() {
      this.$router.push('/');
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
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
