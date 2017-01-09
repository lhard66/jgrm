<template>
  <div class="loading-box">
    {{msg}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'Loading...:)'
    }
  }
}
</script>
<style>
.loading-box {
  color: red;
  font-size: 40px;
  text-shadow: 2px 2px 5px #000;
}
</style>
