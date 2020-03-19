<template>
  <div class="app-container">
    <el-form ref="listQuery" :model="listQuery" class="el-form__label-float">
      <el-row :gutter="10">
        <el-col :lg="6" :md="6" :sm="6" :xl="6" :xs="12">
          <el-form-item label="账号/姓名/电话" prop="name">
            <el-input
              v-model="listQuery.name"
              class="filter-item"
              clearable
              @keyup.enter.native="handleFilter"
            />
          </el-form-item>
        </el-col>
        <el-col :lg="6" :md="6" :sm="6" :xl="6" :xs="12">
          <opButtons @query="handleFilter" @reset="$refs['listQuery'].resetFields()" />
        </el-col>
      </el-row>
    </el-form>

    <el-table v-loading="listLoading" :data="list" fit highlight-current-row>
      <el-table-column align="center" type="index" label="序号" width="60"></el-table-column>
      <el-table-column align="center" label="登录账号" min-width="110px">
        <template v-slot="{row}">
          <base-link @click="dialogCarView=true;carId=row.id">{{ row.account }}</base-link>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="name" label="姓名" min-width="110px"></el-table-column>
      <el-table-column align="center" prop="dept" label="部门" min-width="110px"></el-table-column>
      <el-table-column align="center" prop="role" label="角色" min-width="110px"></el-table-column>
      <el-table-column align="center" prop="phone" label="手机号" min-width="110px"></el-table-column>
      <el-table-column align="center" prop="account" label="录入人" min-width="110px"></el-table-column>
      <el-table-column align="center" fixed="right" label="操作" width="92">
        <template v-slot="{row}">
          <base-link size="smaller" @click="detailMode='edit';detailForm=row;detailVisible=true;">编辑</base-link>
          <base-link size="smaller" @click="handleDelete(row)">删除</base-link>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :limit.sync="listQuery.limit"
      :page.sync="listQuery.page"
      :total="total"
      @pagination="getList"
    />

    <detail
      v-if="detailVisible"
      :visible.sync="detailVisible"
      :mode="detailMode"
      :form="detailForm"
      @change="getList"
    />
  </div>
</template>

<script>
import detail from './detail'

import { users, userDel } from '@/api/user'

export default {
  components: { detail },
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
        name: null
      },
      detailVisible: false,
      detailForm: null,
      detailMode: null
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      this.listLoading = true
      const response = await users(this.listQuery)
      this.list = response.data.items
      this.total = response.data.total
      this.listLoading = false
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    async handleDelete(row) {
      await userDel(row.id)
      this.$message.success('操作成功')
      this.handleFilter()
    }
  }
}
</script>
