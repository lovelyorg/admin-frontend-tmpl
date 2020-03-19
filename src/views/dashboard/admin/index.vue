<template>
  <div class="dashboard-editor-container">
    <test-slot v-if="false" :child-prop="{name:'ou',cname:'欧'}">
      <template #head>{{ user.name }}</template>
      <template v-slot="{slotProp}">{{ slotProp.cname +' aaa' }}</template>
      <template #foot="slotprops">{{ slotprops.slotProp2.cname }}</template>
    </test-slot>
    <buy-customer-follow class="card" />
    <sale-customer-follow class="card" />
    <car-source-check-remind class="card" />
  </div>
</template>

<script>
import BuyCustomerFollow from './components/BuyCustomerFollow'
import SaleCustomerFollow from './components/SaleCustomerFollow'
import CarSourceCheckRemind from './components/CarSourceCheckRemind'
import testSlot from './components/testSlot'

export default {
  name: 'DashboardAdmin',
  components: {
    BuyCustomerFollow,
    SaleCustomerFollow,
    CarSourceCheckRemind,
    testSlot
  },
  data() {
    return { user: { name: 'Tom', cname: '汤姆' }}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  // padding: 20px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .card {
    margin: 0 0 20px 0;
  }
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
