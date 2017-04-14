// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';

import './common/stylus/icon.styl';

Vue.config.productionTip = false;
//导入VueRouter
Vue.use(VueRouter);
Vue.use(VueResource);


/* eslint-disable no-new */
//let app = Vue.extend(App);

//定义路由
const routes = [
  {path:'/',component:goods},//默认显示内容
  {path:'/goods',component:goods},
  {path:'/ratings',component:ratings},
  {path:'/seller',component:seller}
]

//实例化router
const router = new VueRouter({
  routes,
  linkActiveClass:'active'
});

//创建和挂载根实例
const app = new Vue({
  router:router,
  render:h => h(App) //App 是挂载的App.vue组件
}).$mount('#app');  //render函数让我们通过JavaScript编程方式初始化一个模板
                   //h对应一个createElement的函数，将APP组件传入，来渲染组件