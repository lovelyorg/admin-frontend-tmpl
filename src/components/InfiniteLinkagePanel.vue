<template>
  <el-tabs v-model="tabName" type="border-card" :stretch="true" class="card">
    <el-tab-pane
      v-for="(tabTitle,tabIndex) in tabTitles"
      :key="tabIndex"
      :label="tabTitle"
      :name="'tab-'+tabIndex"
    >
      <el-row>
        <el-col v-for="(node,index) in nodesList[tabIndex]" :key="index" :span="spans[tabIndex]">
          <base-link
            size="mini"
            :class="[nodeList[tabIndex] && node.id==nodeList[tabIndex].id? activeClass:deActiveClass]"
            @click="setNode(node,tabIndex)"
          >{{ node.name }}</base-link>
        </el-col>
      </el-row>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  props: {
    tabTitles: { type: Array, required: true },
    data: { type: Array, required: true }
  },
  data() {
    return {
      nodesList: [],
      nodeList: [],
      tabName: 'tab-0',
      activeClass: 'activeClass',
      deActiveClass: 'deActiveClass'
    }
  },
  computed: {
    spans() {
      return this.nodesList.map(nodes => {
        const strLen = Math.max(
          ...nodes.map(node => node.name.replace(/[^\x00-\xff]/g, '--').length)
        )
        const tabWidth = 368
        const fontSize = 12
        const strSize = strLen * (fontSize / 2)
        const strWithPaddingSize = strSize + 20
        return Math.round((strWithPaddingSize / tabWidth) * 24)
      })
    }
  },
  mounted() {
    this.nodesList.push(this.data)
  },
  methods: {
    setNode(node, tabIndex) {
      this.nodeList = this.nodeList.slice(0, tabIndex)
      this.nodeList[tabIndex] = node
      if (node.child && node.child.length) {
        this.tabName = 'tab-' + (tabIndex + 1)
        this.nodesList = this.nodesList.slice(0, tabIndex + 1)
        this.nodesList[tabIndex + 1] = node.child
      } else {
        this.$emit('done', this.nodeList)
        // console.log(this.nodeList)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.card {
  width: 400px;
  position: absolute;
  z-index: 999;
}

.card /deep/ .is-active {
  border-bottom: 2px solid;
}

.activeClass {
  color: #409eff;
  font-weight: bold;
}

.deActiveClass {
  color: #666;
}
</style>