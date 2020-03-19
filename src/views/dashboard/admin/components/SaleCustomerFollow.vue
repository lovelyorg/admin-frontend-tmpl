<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>卖车客户跟进</span>
    </div>
    <div v-for="item in list" :key="item.id" class="text item">{{ item.msg }}</div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: '1',
          msg: '电话尾号为0092的客户在前台提交了卖车，请及时与客户联系。'
        },
        {
          id: '2',
          msg: '电话尾号为0092的客户在前台提交了卖车，请及时与客户联系。'
        },
        {
          id: '3',
          msg: '电话尾号为0092的客户在前台提交了卖车，请及时与客户联系。'
        },
        {
          id: '4',
          msg: '电话尾号为0092的客户在前台提交了卖车，请及时与客户联系。'
        },
        {
          id: '5',
          msg: '电话尾号为0092的客户在前台提交了卖车，请及时与客户联系。'
        },
        {
          id: '6',
          msg: '电话尾号为0092的客户在前台提交了卖车，请及时与客户联系。'
        },
        {
          id: '7',
          msg: '电话尾号为0092的客户在前台提交了卖车，请及时与客户联系。'
        },
        {
          id: '8',
          msg: '电话尾号为0092的客户在前台提交了卖车，请及时与客户联系。'
        }
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
