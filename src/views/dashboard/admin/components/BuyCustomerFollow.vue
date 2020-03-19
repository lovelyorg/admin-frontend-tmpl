<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>买车客户跟进</span>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="customerLevel" label="客户级别" width="180"></el-table-column>
      <el-table-column prop="due" label="到期" width="180"></el-table-column>
      <el-table-column prop="expire" label="过期" width="180"></el-table-column>
      <el-table-column prop="future" label="将来" width="180"></el-table-column>
      <el-table-column prop="executedOfTheDay" label="当天已执行"></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import * as R from 'ramda'

export default {
  data() {
    return {
      tableData: [
        {
          customerLevel: 'H',
          due: 30,
          expire: 20,
          future: 10,
          executedOfTheDay: 10
        },
        {
          customerLevel: 'A',
          due: 30,
          expire: 20,
          future: 10,
          executedOfTheDay: 10
        },
        {
          customerLevel: 'B',
          due: 30,
          expire: 20,
          future: 10,
          executedOfTheDay: 10
        },
        {
          customerLevel: 'F0',
          due: 30,
          expire: 20,
          future: 10,
          executedOfTheDay: 10
        },
        {
          customerLevel: 'O',
          due: 30,
          expire: 20,
          future: 10,
          executedOfTheDay: 10
        }
      ]
    }
  },
  created() {
    const sumProp = R.curry((data, prop) =>
      R.compose(
        R.sum,
        R.map(R.prop(prop))
      )(data)
    )
    const sumPropTable = sumProp(this.tableData)

    this.tableData.push({
      customerLevel: '合计',
      due: sumPropTable('due'),
      expire: sumPropTable('expire'),
      future: sumPropTable('future'),
      executedOfTheDay: sumPropTable('executedOfTheDay')
    })
  }
}
</script>

<style lang="scss" scoped>
</style>