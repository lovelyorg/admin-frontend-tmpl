<template>
  <el-row style="margin: 1.5px 0;">
    <el-col>
      <query @click="$emit('query')" />
      <reset @click="$emit('reset')" />
      <slot></slot>
    </el-col>
  </el-row>
</template>

<script>
import query from './query'
import reset from './reset'

export default {
  components: { query, reset }
}
</script>