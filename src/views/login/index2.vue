<template>
  <div
    :style="{backgroundImage:'url(' + backgroundImg + ')'}"
    class="login-container"
    @keyup.enter.native="handleLogin"
  >
    <div class="login-weaper animated bounceInDown">
      <div class="login-left">
        <div class="login-time">{{ time }}</div>
        <img
          alt
          class="img"
          src="@/assets/logo.png"
        />
        <p class="title">DCMS二手车业务管理系统</p>
      </div>
      <div class="login-border">
        <div class="login-main">
          <h4 class="login-title">用户登录</h4>
          <AccountLogin></AccountLogin>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AccountLogin from './components/AccountLogin'
import backgroundImg from '@/assets/cloud.jpg'

export default {
  name: 'Login',
  components: {
    AccountLogin
  },
  props: [],
  data() {
    return {
      time: '',
      activeName: 'user',
      backgroundImg
    }
  },
  watch: {},
  created() {
    this.getTime()
    setInterval(() => {
      this.getTime()
    }, 1000)
  },
  mounted() {},
  methods: {
    getTime() {
      this.time = new Date()
    }
  }
}
</script>

<style lang="scss">
.login-container {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  // background: url(/cloud.jpg) 0 bottom repeat-x #049ec4;
  background: 0 bottom repeat-x #049ec4;
  animation: animate-cloud 20s linear infinite;
}
.login-weaper {
  margin: 0 auto;
  width: 1000px;
  box-shadow: -4px 5px 10px rgba(0, 0, 0, 0.4);
  .el-input-group__append {
    border: none;
  }
}

.login-left,
.login-border {
  position: relative;
  min-height: 500px;
  align-items: center;
  display: flex;
}
.login-left {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  justify-content: center;
  flex-direction: column;
  background-color: #409eff;
  color: #fff;
  float: left;
  width: 50%;
  position: relative;
}
.login-left .img {
  width: 140px;
}
.login-time {
  position: absolute;
  left: 25px;
  top: 25px;
  width: 100%;
  color: #fff;
  font-weight: 200;
  opacity: 0.9;
  font-size: 18px;
  overflow: hidden;
}
.login-left .title {
  margin-top: 60px;
  text-align: center;
  color: #fff;
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 25px;
}

.login-border {
  border-left: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #fff;
  background-color: #fff;
  width: 50%;
  float: left;
  box-sizing: border-box;
}
.login-main {
  margin: 0 auto;
  width: 65%;
  box-sizing: border-box;
}
.login-main > h3 {
  margin-bottom: 20px;
}
.login-main > p {
  color: #76838f;
}
.login-title {
  color: #333;
  margin-bottom: 40px;
  font-weight: 500;
  font-size: 22px;
  text-align: center;
  letter-spacing: 4px;
}
.login-menu {
  margin-top: 40px;
  width: 100%;
  text-align: center;
  a {
    color: #999;
    font-size: 12px;
    margin: 0px 8px;
  }
}
.login-submit {
  width: 100%;
  height: 45px;
  border: 1px solid #409eff;
  background: none;
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 300;
  color: #409eff;
  cursor: pointer;
  margin-top: 30px;
  font-family: "neo";
  transition: 0.25s;
}
.login-form {
  margin: 10px 0;
  i {
    color: #333;
  }
  .el-form-item__content {
    width: 100%;
  }
  .el-form-item {
    margin-bottom: 12px;
  }
  .el-input {
    input {
      padding-bottom: 10px;
      text-indent: 5px;
      background: transparent;
      border: none;
      border-radius: 0;
      color: #333;
      border-bottom: 1px solid rgb(235, 237, 242);
    }
    .el-input__prefix {
      i {
        padding: 0 5px;
        font-size: 16px !important;
      }
    }
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
  height: 38px;
  background-color: #fdfdfd;
  border: 1px solid #f0f0f0;
  color: #333;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 5px;
  line-height: 38px;
  text-indent: 5px;
  text-align: center;
}

.background {
  // z-index: -999;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
}

@-webkit-keyframes animate-cloud {
  from {
    background-position: 600px 100%;
  }
  to {
    background-position: 0 100%;
  }
}
@-moz-keyframes animate-cloud {
  from {
    background-position: 600px 100%;
  }
  to {
    background-position: 0 100%;
  }
}
@-ms-keyframes animate-cloud {
  from {
    background-position: 600px 100%;
  }
  to {
    background-position: 0 100%;
  }
}
@-o-keyframes animate-cloud {
  from {
    background-position: 600px 100%;
  }
  to {
    background-position: 0 100%;
  }
}
</style>
