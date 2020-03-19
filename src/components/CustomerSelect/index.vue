<template>
  <el-select v-model="value" placeholder="请选择" filterable clearable :filter-method="customerFilter" @change="customerChangeHandler">
    <el-option v-for="(item,index) in filteredCustomers" :key="index" :label="item.name" :value="item.id">
      <span style="float: left">{{ item.name }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.tel }}</span>
    </el-option>
  </el-select>
</template>
<script>
import { fetchCustomerListForSelect } from '@/api/customer'

export default {
  props: {
    customerid: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      value: '',
      customers: [],
      filteredCustomers: []
    }
  },
  created() {},
  mounted() {
    fetchCustomerListForSelect().then(response => {
      console.log(response)
      this.customers = response.data.items

      this.filteredCustomers = this.customers

      if (this.customerid) {
        this.customerChangeHandler(this.customerid)
        this.value = this.customerid
      }
    })
    this.filteredCustomers = this.customers
  },
  methods: {
    customerFilter(input) {
      this.value = input
      this.filteredCustomers = this.customers.filter(
        m => m.name.includes(input) || m.tel.includes(input)
      )
    },
    customerChangeHandler(id) {
      if (!id) this.filteredCustomers = this.customers

      const customerInfo = Object.assign(
        {},
        this.customers.find(m => m.id === id)
      )
      this.$emit('change', customerInfo)
    }
  }
}
</script>