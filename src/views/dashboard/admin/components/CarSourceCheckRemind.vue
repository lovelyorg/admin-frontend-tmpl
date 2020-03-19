<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>车源审核提醒</span>
    </div>
    <div v-for="item in list" :key="item.id" class="text item">{{ item.msg }}</div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, msg: '检测师益达上传了车辆信息，请及时进行审核。' },
        { id: 2, msg: '检测师益达上传了车辆信息，请及时进行审核。' },
        { id: 3, msg: '检测师益达上传了车辆信息，请及时进行审核。' },
        { id: 4, msg: '检测师益达上传了车辆信息，请及时进行审核。' },
        { id: 5, msg: '检测师益达上传了车辆信息，请及时进行审核。' },
        { id: 6, msg: '检测师益达上传了车辆信息，请及时进行审核。' },
        { id: 7, msg: '检测师益达上传了车辆信息，请及时进行审核。' }
      ]
    }
  },
  created() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}
</style>
