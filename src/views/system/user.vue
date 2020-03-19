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
          <base-link size="smaller" @click="handleAuditStatus(row)">编辑</base-link>
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

    <el-dialog :visible.sync="dialogAudit" title="审核">
      <el-form
        ref="auditForm"
        :model="auditForm"
        :rules="rules"
        label-position="left"
        label-width="100px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item label="是否通过" prop="type">
          <el-radio-group v-model="auditForm.result">
            <el-radio :label="1">通过</el-radio>
            <el-radio :label="0">不通过</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-if="auditForm.result===0" label="不通过理由" prop="desc">
          <el-input v-model="auditForm.desc" type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAudit = false">取消</el-button>
        <el-button type="primary" @click="updateAudit()">提交</el-button>
      </div>
    </el-dialog>

    <el-dialog v-if="dialogCarView" :visible.sync="dialogCarView" title="车辆详情" width="1200px">
      <car-detail
        :car-id="carId"
        open-mode="view"
        style="height: 600px;padding: 0 10px;overflow: auto;"
      />
    </el-dialog>
  </div>
</template>

<script>
import { getUsers, delUsers } from '@/api/user'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import carDetail from '@/views/car/car-detail/index'

export default {
  components: { Pagination, carDetail },
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
      auditForm: {
        id: undefined,
        result: null,
        desc: ''
      },
      rules: {
        desc: [{ required: true, message: '请填写不通过理由', trigger: 'blur' }]
      },
      dialogAudit: false,
      dialogCarView: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      this.listLoading = true
      const response = await getUsers(this.listQuery)
      this.list = response.data.items
      this.total = response.data.total
      this.listLoading = false
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    async handleDelete(row) {
      await delUsers(row.id)
      // this.$message.success('操作成功')
      this.$message({
        message: '操作成功',
        type: 'error',
        duration: 0
      })
      // this.$message.info('操作成功')
      // this.$message.warning('操作成功')
      this.handleFilter()
    },
    handleAuditStatus(row) {
      this.dialogAudit = true
    },
    updateAudit() {
      this.$refs['auditForm'].validate(valid => {
        if (valid) {
          this.$message.success('操作成功')
          this.dialogAudit = false
        } else {
          console.log('error submit!!')
        }
      })
    }
  }
}
</script>
