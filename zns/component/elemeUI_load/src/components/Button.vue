<template>
  <div id="btnaxios">
    <el-button>默认按钮</el-button>
    <el-button type="primary" @click="getData">主要按钮</el-button>
    <el-button type="text">文字按钮</el-button>
    <p>{{msg}}</p>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'btnaxios',
  data() {
    return {
      msg: '暂无数据'
    }
  },
  methods: {
    getData() {
      var vm = this;
      axios.get('data.json', {
          params: {
            ID: 123
          }
        })
        .then(function(response) {
          var obj = response.data;

          vm.msg = '姓名：' + obj.name + '，年龄：' + obj.age + '，性别：' + obj.gender;
          console.log(obj.name);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
}
</script>
