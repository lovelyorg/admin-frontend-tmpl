<template>
  <div class="block">
    <div class="radio">
      <el-radio-group v-model="reverse">
        <el-radio :label="true">倒序</el-radio>
        <el-radio :label="false">正序</el-radio>
      </el-radio-group>
    </div>
    <el-timeline :reverse="reverse">
      <el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp">{{ activity.content }}</el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reverse: true,
      activities: [
        {
          content: '创建成功',
          timestamp: '2018-04-11'
        },
        {
          content: '通过审核',
          timestamp: '2018-04-13'
        }
      ]
    }
  }
}
</script>

<style scoped>
.radio {
  margin: 0 0 30px 36px;
}
</style>