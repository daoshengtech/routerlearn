import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/params'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component:Hello

    },{
      // path: '/',
      // name: 'Hi',
      // component:Hi,
      // children:[
      //   {path: '/',name:'Hello/Hi',component:Hi},
      //   {path: 'hi1',name:'hi1',component:Hi1},
      //   {path: 'hi2',name:'hi2',component:Hi2}
      // ]
      path: '/params/:newsId(\\d+)/:newsTitle',
      component:Params
    },{
      path:'/goParams/:newsId(\\d+)/:newsTitle',
      redirect:'/params/:newsId(\\d+)/:newsTitle'

    },{
      path: '/hi1',
      component: Hi1,
      alias:'/jspang'
    },{
      path:'*',
      component:Error
    },{
      path:'/params/:newsId(\\d+)/:newsTitle',
      component:Params,
      beforeEnter:(to,from,next)=> {
        console.log('我进入了params模板');
        console.log(to);
        console.log(from);
        next();
      },
    }
]
})
