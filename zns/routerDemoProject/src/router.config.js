import Home from './components/Home.vue'
import News from './components/News.vue'
import Hello from './components/Hello.vue'

export default {
  routes: [
    { path: '/home', component: Home },
    { path: '/news', component: News },
    { path: '/hello', component: Hello }
  ]
}
