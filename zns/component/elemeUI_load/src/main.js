import Vue from 'vue'
import { Button, Select } from 'element-ui'
import App from './App.vue'

//方式一：
// Vue.component(Button.name,Button)
// Vue.component(Select.name,Select)
//方式二：
Vue.use(Button)
Vue.use(Select)

new Vue({
  el: '#app',
  render: h => h(App)
})
