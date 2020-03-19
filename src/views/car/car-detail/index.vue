<template>
  <div class="app-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="车辆基本信息" name="tab-1">
        <base-info :open-mode="openMode" />
        <remarks />
      </el-tab-pane>
      <el-tab-pane label="车辆基本图" name="tab-2">
        <car-picture />
      </el-tab-pane>
      <el-tab-pane label="车辆更多图" name="tab-3">
        <car-picture />
      </el-tab-pane>
      <el-tab-pane label="车况报告" name="tab-4">
        <car-condition />
      </el-tab-pane>
      <el-tab-pane label="外观内饰" name="tab-5">
        <outsideAndInside />
      </el-tab-pane>
      <el-tab-pane label="维保记录" name="tab-6"></el-tab-pane>
      <el-tab-pane v-if="openMode!=='add'" label="审核记录" name="tab-7">
        <audit-record />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import remarks from './components/remarks'
import baseInfo from './components/baseInfo'
import carPicture from './components/carPicture'
import carCondition from './components/carCondition'
import outsideAndInside from './components/outsideAndInside'
import auditRecord from './components/auditRecord'

export default {
  components: {
    remarks,
    baseInfo,
    carPicture,
    carCondition,
    outsideAndInside,
    auditRecord
  },
  props: {
    carId: { type: String, default: null },
    openMode: { type: String, default: 'add' } // add edit view
  },
  data() {
    return {
      activeName: 'tab-1'
    }
  },
  mounted: function() {
    console.log('id', this.carId, this.openMode)
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 12px;
}

.danger {
  color: #f56c6c;
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