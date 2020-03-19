<template>
  <el-form ref="form" :model="form" :inline="true" label-width="126px">
    <el-row>
      <el-col :span="8">
        <el-form-item label="客户姓名">
          <customer-select :customerid="customerInfo.id" @change="customerChangeHandler" />
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="客户电话">
          <el-input v-model="customerInfo.tel" disabled></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="车辆使用性质">
          <el-select v-model="form.region" placeholder="请选择" :disabled="disabled"></el-select>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8">
        <el-form-item label="车辆品牌车型车系">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="1" value="shanghai"></el-option>
            <el-option label="2" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="车辆颜色">
          <el-select v-model="form.region" placeholder="请选择"></el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="车辆里程表现">
          <el-input v-model="form.name">
            <template slot="append">万公里</template>
          </el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8">
        <el-form-item label="车辆VIN码">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="车牌号">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="登记证书">
          <el-select v-model="form.region" placeholder="请选择"></el-select>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8">
        <el-form-item label="上传文件">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="行驶本">
          <el-select v-model="form.region" placeholder="请选择"></el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="过户次数">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8">
        <el-form-item label="初次上牌日期">
          <el-date-picker v-model="form.date1" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="最后变更登记日期">
          <el-date-picker v-model="form.date1" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="系统评估价">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8">
        <el-form-item label="车辆出售方式">
          <el-select v-model="form.region" placeholder="请选择"></el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="车辆进购价格">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="保质到期日期">
          <el-date-picker v-model="form.date1" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8">
        <el-form-item label="交强险到期日期">
          <el-date-picker v-model="form.date1" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="商业险到期日期">
          <el-date-picker v-model="form.date1" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="年检有效日期">
          <el-date-picker v-model="form.date1" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8">
        <el-form-item label="车辆预售价格">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="新车含税价格">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="车辆所在地">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <el-form-item label="车辆评定情况">
          <el-input v-model="form.desc" type="textarea" style="width:800px;"></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <el-form-item label="车辆认证标准">
          <el-radio-group v-model="form.resourceaa">
            <el-radio label="无认证"></el-radio>
            <el-radio label="畅行认证"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <el-form-item label="质保类型">
          <el-radio-group v-model="form.resource">
            <el-radio label="无质保"></el-radio>
            <el-radio label="厂家质保"></el-radio>
            <el-radio label="延长质保"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>
    </el-row>

    <el-form-item v-if="!disabled">
      <el-button type="primary" @click="onSubmit">保存</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  props: {
    openMode: { type: String, default: null }
  },
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      customerInfo: { id: '', tel: '' }
    }
  },
  computed: {
    disabled: function() {
      return !!(this.openMode && this.openMode === 'view')
    }
  },
  methods: {
    customerChangeHandler(value) {
      console.log(value)
      this.customerInfo = value
    },
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style scoped>
.el-input,
.el-date-editor.el-input,
.el-date-editor.el-input__inner,
.el-input--default {
  width: 200px;
}
.el-form-item__label {
  font-size: 13px;
}
</style>