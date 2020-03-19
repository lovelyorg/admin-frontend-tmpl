<template>
  <div class="app-container">
    <el-form ref="listQuery" :model="listQuery" class="el-form__label-float">
      <el-row :gutter="10">
        <el-col :lg="6" :md="6" :sm="6" :xl="6" :xs="12">
          <el-form-item label="车源编码/车架号" prop="vin">
            <el-input
              v-model="listQuery.vin"
              class="filter-item"
              clearable
              @keyup.enter.native="handleFilter"
            />
          </el-form-item>
        </el-col>
        <el-col :lg="6" :md="6" :sm="6" :xl="6" :xs="12">
          <el-form-item label="车辆品牌车型车系" prop="type">
            <el-select v-model="listQuery.type" class="filter-item" clearable>
              <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :lg="6" :md="6" :sm="6" :xl="6" :xs="12">
          <el-form-item label="车辆来源" prop="source">
            <el-select v-model="listQuery.source" class="filter-item" clearable>
              <el-option
                v-for="item in carSource"
                :key="item.key"
                :label="item.display_name"
                :value="item.key"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :lg="6" :md="6" :sm="6" :xl="6" :xs="12">
          <el-form-item label="审核状态" prop="auditStatus">
            <el-select v-model="listQuery.auditStatus" class="filter-item" clearable>
              <el-option
                v-for="item in auditStatus"
                :key="item.key"
                :label="item.display_name"
                :value="item.key"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :lg="6" :md="6" :sm="6" :xl="6" :xs="12">
          <el-form-item label="地区" prop="area">
            <XsArea @done="getArea" />
            <!-- <InfiniteLinkagePanel /> -->
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <opButtons @query="getList" @reset="$refs['listQuery'].resetFields()" />

    <el-table
      :key="1"
      v-loading="listLoading"
      :data="list"
      fit
      highlight-current-row
      style="width: 100%;"
    >
      <el-table-column align="center" label="ID" prop="id" width="60">
        <template v-slot="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="车源编码" min-width="150px">
        <template v-slot="{row}">
          <base-link @click="dialogCarView=true;carId=row.id">{{ row.code }}</base-link>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="vno" label="车架号" min-width="150px"></el-table-column>
      <el-table-column align="center" prop="origin" label="车辆来源" min-width="110px" />
      <el-table-column align="center" prop="type" label="车辆品牌车型车系" min-width="220px"></el-table-column>
      <el-table-column align="center" prop="age" label="车龄" min-width="110px"></el-table-column>
      <el-table-column align="center" prop="mile" label="行驶里程" min-width="110px"></el-table-column>
      <el-table-column align="center" prop="price" label="车辆售价" min-width="110px"></el-table-column>
      <el-table-column align="center" prop="entryPerson" label="录入人" min-width="110px"></el-table-column>
      <el-table-column class-name="status-col" label="审核状态" min-width="100">
        <template v-slot="{row}">
          <el-tag :type="row.audit | statusFilter">{{ row.audit }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" class-name="small-padding fixed-width" label="操作" width="80">
        <template v-slot="{row}">
          <base-link size="mini" @click="handleAuditStatus(row)">审核</base-link>
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
import { fetchCarSourceList } from '@/api/car'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import carDetail from '@/views/car/car-detail/index'
import XsArea from '@/components/area'

const carSource = [
  { key: 'CN', display_name: '收购' },
  { key: 'US', display_name: '寄售' }
]

export default {
  name: 'ComplexTable',
  components: { Pagination, carDetail, XsArea },
  filters: {
    statusFilter(status) {
      const auditStatusMap = [
        { status: '审核已通过', class: 'success' },
        { status: '待审核', class: 'info' },
        { status: '驳回', class: 'danger' }
      ]
      return auditStatusMap.find(m => m.status === status)['class']
    }
  },
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
        vin: null,
        type: null,
        source: null,
        auditStatus: null
      },
      importanceOptions: ['东风风神 E70 2018款超享版'],
      carSource,
      auditStatus: [
        { key: 'CN', display_name: '待审核' },
        { key: 'US', display_name: '审核已通过' },
        { key: 'JP', display_name: '驳回' }
      ],
      auditForm: {
        id: undefined,
        result: null,
        desc: ''
      },
      rules: {
        desc: [{ required: true, message: '请填写不通过理由', trigger: 'blur' }]
      },
      dialogAudit: false,
      dialogCarView: false,
      carId: ''
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchCarSourceList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        this.listLoading = false
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleAuditStatus(row) {
      this.dialogAudit = true
    },
    updateAudit() {
      this.$refs['auditForm'].validate(valid => {
        if (valid) {
          this.$message({
            message: '操作成功',
            type: 'success'
          })
          this.dialogAudit = false
        } else {
          console.log('error submit!!')
        }
      })
    },
    getArea(a, b, c) {
      console.log(a, b, c)
    }
  }
}
</script>
