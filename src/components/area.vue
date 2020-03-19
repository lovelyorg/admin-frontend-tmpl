<template>
  <InfiniteLinkagePanel :tab-titles="['省','市','区']" :data="area" />
</template>
<script>
import InfiniteLinkagePanel from './InfiniteLinkagePanel'
import area from './area.json'

export default {
  name: '',
  components: { InfiniteLinkagePanel },
  props: {},
  data() {
    return { area }
  },
  mounted() {},
  methods: {}
}
</script>
