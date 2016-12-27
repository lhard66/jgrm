import Home from './components/Home.vue'
import News from './components/News.vue'
import Hello from './components/Hello.vue'
import IT from './components/NewsType/ITNews.vue'
import Sport from './components/NewsType/SportNews.vue'

export default {
  routes: [
    { path: '/home', component: Home }, {
      path: '/news',
      component: News,
      children: [
        { path: 'it/:num', component: IT },
        { path: 'sport', component: Sport }
      ]
    },
    { path: '/hello', component: Hello },
    { path: '*', redirect: '/hello' }
  ]
}
