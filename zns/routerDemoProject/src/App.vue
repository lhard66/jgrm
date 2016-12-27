<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <ul>
      <li>
        <a href="#/home">主页</a>
      </li>
      <li>
        <a href="#/news">新闻</a>
      </li>
      <li>
        <a href="#/hello">欢迎</a>
      </li>
    </ul>
    <div>
      <transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">

      <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'welcome to vue world.'
    }
  }
}
</script>

<style>

</style>
