<template>
  <div id="app">
    <h3>eleme组件，axios异步请求</h3>
    <ButtonAxios></ButtonAxios>
  </div>
</template>
<script>
import ButtonAxios from './components/Button.vue'
export default {
  name: 'app',
  components: {
    ButtonAxios
  }
}
</script>
