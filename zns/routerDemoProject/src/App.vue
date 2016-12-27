<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <ul>
      <li>
        <router-link to="/home">主页</router-link>
      </li>
      <li>
        <router-link to="/news">新闻</router-link>
      </li>
      <li>
        <router-link to="/hello">欢迎</router-link>
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
