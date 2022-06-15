<template>
  <!-- 注册内容 -->
  <div class="register">
    <h3>
      注册新用户
      <span class="go"
        >我有账号，去 <a href="login.html" target="_blank">登陆</a>
      </span>
    </h3>
    <div class="content">
      <label>手机号:</label>
      <input type="text" placeholder="请输入你的手机号" v-model="phone" />
      <!-- <span class="error-msg">手机格式不正确</span> -->
    </div>
    <div class="content">
      <label>验证码:</label>
      <input type="text" placeholder="请输入验证码" v-model="code" />
      <button
        style="position: absolute; height: 30px; margin-top: 3px"
        @click="getPassCode(phone)"
      >
        获取验证码
      </button>
      <!-- <span class="error-msg">错误提示信息</span> -->
    </div>
    <div class="content">
      <label>登录密码:</label>
      <input
        type="password"
        placeholder="请输入你的登录密码"
        v-model="password"
      />
      <span class="error-msg">错误提示信息</span>
    </div>
    <div class="content">
      <label>确认密码:</label>
      <input
        type="password"
        placeholder="请输入确认密码"
        v-model="passwordCheck"
      />
      <span class="error-msg">错误提示信息</span>
    </div>
    <div class="controls">
      <input name="m1" type="checkbox" :checked="agree" @click="changeCheck" />
      <span>同意协议并注册《尚品汇用户协议》</span>
      <span class="error-msg">错误提示信息</span>
    </div>
    <div class="btn">
      <button @click="Register">完成注册</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      // 手机号
      phone: "",
      // 验证码
      code: "",
      // 密码
      password: "",
      // 验证密码
      passwordCheck: "",
      // 是否同意协议,
      agree: true,
    };
  },
  methods: {
    async getPassCode(phone) {
      if (phone.length < 1) {
        console.log("手机号不能为空");
        return;
      } else {
        await this.$store.dispatch("getPassCode", phone);
        this.code = this.$store.state.Register.code;
      }
    },
    async Register() {
      if (false) {
        alert("手机格式不正确");
        return;
      } else if (this.password != this.passwordCheck) {
        alert("密码不一致");
        return;
      } else if (!this.agree) {
        alert("请同意该请求条款");
        return;
      } else {
        let params = {
          phone: this.phone,
          password: this.password,
          code: this.code,
        };

        try {
          let result = await this.$store.dispatch("registerUser", params);
          if (result != 200) {
            alert("该手机号已被注册");
          } else {
            this.$router.push({ name: "login" });
          }
        } catch (err) {
          console.log(err);
        }
      }
    },
    changeCheck() {
      this.agree = this.agree == true ? false : true;
    },
  },
};
</script>

<style lang="less" scoped>
.register {
  width: 1200px;
  height: 445px;
  border: 1px solid rgb(223, 223, 223);
  margin: 0 auto;

  h3 {
    background: #ececec;
    margin: 0;
    padding: 6px 15px;
    color: #333;
    border-bottom: 1px solid #dfdfdf;
    font-size: 20.04px;
    line-height: 30.06px;

    span {
      font-size: 14px;
      float: right;

      a {
        color: #e1251b;
      }
    }
  }

  div:nth-of-type(1) {
    margin-top: 40px;
  }

  .content {
    margin-bottom: 18px;
    position: relative;

    label {
      font-size: 14px;
      width: 96px;
      text-align: right;
      display: inline-block;
    }

    input {
      width: 270px;
      height: 38px;
      padding-left: 8px;
      box-sizing: border-box;
      margin-left: 5px;
      outline: none;
      border: 1px solid #999;
    }

    img {
      vertical-align: sub;
    }

    .error-msg {
      position: absolute;
      top: 100%;
      left: 515px;
      color: red;
    }
  }

  .controls {
    text-align: center;
    position: relative;

    input {
      vertical-align: middle;
    }

    .error-msg {
      position: absolute;
      top: 100%;
      left: 515px;
      color: red;
    }
  }

  .btn {
    text-align: center;
    line-height: 36px;
    margin: 17px 0 0 55px;

    button {
      outline: none;
      width: 270px;
      height: 36px;
      background: #e1251b;
      color: #fff !important;
      display: inline-block;
      font-size: 16px;
    }
  }
}

.copyright {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  line-height: 24px;

  ul {
    li {
      display: inline-block;
      border-right: 1px solid #e4e4e4;
      padding: 0 20px;
      margin: 15px 0;
    }
  }
}
</style>