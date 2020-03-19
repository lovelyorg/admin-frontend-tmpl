<template>
  <el-link
    type="primary"
    :style="{ fontSize: size }"
    :underline="false"
    class="link-type"
    @click="$emit('click')"
  >
    <slot></slot>
  </el-link>
</template>
<script>
export default {
  props: {
    size: { type: String, default: 'unset' }
  }
}
</script>
<style scoped lang="scss">
.link-type + .link-type {
  margin-left: 10px;
}
</style>