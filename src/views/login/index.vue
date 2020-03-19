<template>
  <div style="height:100%">
    <div class="background" :style="{backgroundImage:'url(' + backgroundImg + ')'}"></div>
    <div class="login-container pull-height" @keyup.enter.native="handleLogin">
      <div class="login-border animated fadeInRight">
        <div class="login-main">
          <!-- <img src="@/assets/logo-login.jpg" style="width: 64px;height: 64px;" /> -->
          <h2 class="login-title">后台管理系统</h2>
          <AccountLogin></AccountLogin>
          <div v-if="tipsVisible" role="alert" class="el-alert el-alert--warning">
            <i class="el-alert__icon el-icon-warning"></i>
            <div class="el-alert__content">
              <span class="el-alert__title">
                推荐使用谷歌浏览器访问本系统！
                <a :href="chromeDownloadUrl" target="_blank" style="color:#00a0e9">点击下载</a>
              </span>
              <i class="el-alert__closebtn el-icon-close" @click="tipsVisible=false"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AccountLogin from './components/AccountLogin'
import backgroundImg from '@/assets/login-background.jpg'

export default {
  name: 'Login',
  components: {
    AccountLogin
  },
  data() {
    return {
      tipsVisible: false,
      activeTabName: 'accountLoginPane',
      chromeDownloadUrl: '',
      backgroundImg
    }
  },
  computed: {},
  mounted() {
    this.tipsVisible = true
    // 增加XP系统版本下载
    const userAgent = navigator.userAgent
    if (!userAgent.includes('Windows')) return
    let chromeVersion = '69.0.3497.81_chrome64_stable_windows_installer'
    if (userAgent.includes('Windows NT 5.1')) {
      chromeVersion = '49.0.2623.112_chrome_installer.exe'
    } else if (!userAgent.includes('Win64')) {
      chromeVersion = '69.0.3497.81_chrome32_stable_windows_installer'
    }
    this.chromeDownloadUrl = `https://www.google.cn/intl/zh-CN/chrome/?_=${chromeVersion}`
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  height: 100%;
}
.background {
  z-index: -999;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
}
.login-border {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 40px 30px 25px 30px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.2);
  width: 400px;
}
.login-main {
  border-radius: 3px;
  box-sizing: border-box;
  background-color: #fff;
  h2 {
    margin-top: 15px;
    margin-bottom: 30px;
    color: #aace38;
    font-weight: bold;
    letter-spacing: 5px;
  }
  p {
    color: #76838f;
  }
}
.login-title {
  margin: 0 0 20px;
  text-align: center;
  color: #409eff;
  letter-spacing: 2px;
  font-size: 23px;
}
.login-form {
  margin: 10px 0;
  .el-form-item__content {
    width: 270px;
  }
  .el-form-item {
    margin-bottom: 12px;
  }
  .el-input {
    input {
      text-indent: 5px;
      border-color: #dcdcdc;
      border-radius: 3px;
    }
    .el-input__prefix {
      top: 2px;
      left: 7px;
      i {
        padding: 0 5px;
        font-size: 16px !important;
      }
    }
  }
  .login-submit {
    margin-top: 20px;
    width: 100% !important;
    border-radius: 28px;
  }
}
.login-code {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 0 0 10px;
}
.login-code-img {
  margin-top: 2px;
  width: 100px;
  height: 32px;
  background-color: #fdfdfd;
  border: 1px solid #f0f0f0;
  color: #333;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 5px;
  line-height: 32px;
  text-indent: 5px;
  text-align: center;
}
</style>
