<template>
  <el-card
    :class="'el-card-shrink ' + clazz"
    shadow="hover"
  >
    <div
      slot="header"
      class="clearfix"
      style="cursor:pointer;"
      @click="toggle"
    >
      <span :class="'header-title clickable ' + titleClass">{{ title }}</span>
      <div
        v-if="collapsible"
        class="pull-right el-card-shrink-button"
      >
        <i
          v-if="visible"
          class="el-icon-caret-bottom"
        ></i>
        <i
          v-else
          class="el-icon-caret-right"
        ></i>
        <i></i>
      </div>
      <div
        class="pull-right"
        @click.stop
      >
        <slot name="options"></slot>
      </div>
    </div>
    <el-collapse-transition>
      <div
        v-show="visible"
        :style="bodyStyle"
        class="el-card-shrink-body"
      >
        <slot></slot>
      </div>
    </el-collapse-transition>
  </el-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '卡片标题'
    },
    clazz: {
      type: String,
      default: ''
    },
    titleClass: {
      type: String,
      default: ''
    },
    cardBodyVisible: {
      type: Boolean,
      default: true
    },
    collapsible: {
      type: Boolean,
      default: true
    },
    bodyStyle: {
      type: Object,
      default() {
        return {
          padding: '20px'
        }
      }
    }
  },
  data() {
    return {
      visible: this.cardBodyVisible,
      timestamp: +new Date()
    }
  },
  watch: {
    cardBodyVisible: {
      handler(newValue, oldValue) {
        this.visible = newValue
      }
    }
  },
  methods: {
    toggle() {
      if (!this.collapsible) return
      if (+new Date() - this.timestamp < 500) return
      this.timestamp = +new Date()
      this.visible = !this.visible
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.pull-right {
  float: right;
}
</style>
