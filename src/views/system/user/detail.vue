<template>
  <el-dialog :visible.sync="mVisible" :title="{add:'新增',edit:'编辑','view':'查看'}[mode]" width="460px">
    <el-form
      ref="form"
      :model="form"
      :rules="rules"
      label-position="left"
      label-width="80px"
      style="padding:0 0 0 20px"
    >
      <el-row>
        <el-col>
          <el-form-item label="登录账号" prop="account">
            <el-input v-model="form.account"></el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="姓名" prop="name" required>
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="部门">
            <el-input v-model="form.dept"></el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="角色">
            <el-input v-model="form.role"></el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="手机号">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="mVisible=false">取消</el-button>
      <el-button type="primary" @click="save()">提交</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { userAdd, userUpdate } from '@/api/user'

export default {
  components: {},
  props: {
    visible: Boolean,
    form: {
      type: Object,
      default: () => {
        return {}
      }
    },
    mode: { type: String, default: 'view' }
  },
  data() {
    return {
      rules: {
        account: [{ required: true, message: '请输入账号', trigger: 'blur' }]
      }
    }
  },
  computed: {
    mVisible: {
      get() {
        return this.visible
      },
      set(m) {
        this.$emit('update:visible', m)
      }
    }
  },
  watch: {},
  created() {},
  methods: {
    async save() {
      const validate = await this.$refs.form.validate()
      if (!validate) return
      if (this.mode === 'add') {
        await userAdd(this.form)
      } else if (this.mode === 'edit') {
        console.log(this.form)
        await userUpdate(this.form)
      }
      this.$message.success('操作成功')
      this.mVisible = false
      this.$emit('change')
    }
  }
}
</script>
