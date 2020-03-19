<template>
  <el-form ref="loginForm" class="login-form" status-icon :rules="loginRules" :model="loginForm" label-width="0">
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" size="large" placeholder="请输入用户名" @keyup.enter.native="handleLogin">
        <svg-icon slot="prefix" icon-class="user" />
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="loginForm.password" :type="passwordType" size="large" placeholder="请输入密码" @keyup.enter.native="handleLogin">
        <i slot="suffix" class="el-icon-view el-input__icon" @click="showPassword"></i>
        <svg-icon slot="prefix" icon-class="password" />
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        class="login-submit"
        style="width:100%;padding:15px 10px"
        :loading="isLanding"
        @click.native.prevent="handleLogin"
      >{{ isLanding ? '正在登录...' : '登 录' }}</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { removeToken } from '../../../utils/auth'

export default {
  name: 'Userlogin',
  data() {
    const validateCode = (rule, value, callback) => {
      if (this.code.value !== value) {
        this.loginForm.code = ''
        callback(new Error('请输入正确的验证码'))
      } else {
        callback()
      }
    }
    return {
      isLanding: false,
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      code: {
        src: '',
        value: '',
        len: 4,
        type: 'text'
      },
      loginRules: {
        username: [
          {
            required: true,
            trigger: 'blur',
            message: '请输入用户名' /*, validator: validateUsername*/
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 4, max: 4, message: '验证码长度为4位', trigger: 'blur' },
          { required: true, trigger: 'blur', validator: validateCode }
        ]
      },
      passwordType: 'password'
    }
  },
  methods: {
    showPassword() {
      this.passwordType === 'text'
        ? (this.passwordType = 'password')
        : (this.passwordType = 'text')
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.isLanding = true
          this.$store
            .dispatch('user/login', this.loginForm)
            .then(res => {
              this.isLanding = false
              this.$router.push({ path: '/' })
            })
            .catch(error => {
              removeToken()
              this.isLanding = false
              console.log(error)
            })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.el-input /deep/ .el-input__prefix {
  top: 2px;
  left: 7px;
}
</style>

