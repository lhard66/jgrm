import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from '../config/router.config.js'

//声明路由实例 
const router=new VueRouter({
	routes
});
//注意：下面的use不能少，否则会报错。
Vue.use(router);

new Vue({
	router,
    el: '#app',
    render: h => h(App)    
})
