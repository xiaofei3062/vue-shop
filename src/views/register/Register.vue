<template>
  <div class="register">
    <!-- 标题栏 -->
    <nav-bar class="login-nav">
      <div slot="center">注册</div>
    </nav-bar>
    <div :class="{error:!formData.username}" class="login-item">
      <label for="username">用户名：</label>
      <input id="username" placeholder="请输入用户名" type="text" v-model.trim="formData.username">
    </div>
    <div :class="{error:!formData.password}" class="login-item">
      <label for="password">密码：</label>
      <input id="password" placeholder="请输入密码" type="password" v-model.trim="formData.password">
    </div>
    <div :class="{error:!formData.phone}" class="login-item">
      <label for="phone">手机号：</label>
      <input id="phone" placeholder="请输入手机号" type="text" v-model.trim="formData.phone">
    </div>
    <div :class="{error:!formData.mail}" class="login-item">
      <label for="mail">邮箱：</label>
      <input id="mail" placeholder="请输入邮箱" type="text" v-model.trim="formData.mail">
    </div>
    <div :class="{error:!formData.qq}" class="login-item">
      <label for="qq">QQ号：</label>
      <input id="qq" placeholder="请输入QQ号" type="text" v-model.trim="formData.qq">
    </div>
    <div class="login-btn">
      <div class="login-btn">
        <van-button @click="goRegister" class="login-btn-login" type="info">点击注册</van-button>
        <van-button @click="goLogin" class="login-btn-register" plain type="info">前往登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";

  export default {
    name: "Register",
    data() {
      return {
        formData: {
          username: "",
          password: "",
          phone: "",
          mail: "",
          qq: ""
        }
      };
    },
    methods: {
      // 注册
      goRegister() {
        if (!this.formData.username) {
          this.$notify({
            type: "danger",
            message: "用户名不能为空"
          });
        } else if (!this.formData.password) {
          this.$notify({
            type: "danger",
            message: "密码不能为空"
          });
        } else if (!this.formData.phone) {
          this.$notify({
            type: "danger",
            message: "手机号不能为空"
          });
        } else if (!this.formData.mail) {
          this.$notify({
            type: "danger",
            message: "邮箱不能为空"
          });
        } else if (!this.formData.qq) {
          this.$notify({
            type: "danger",
            message: "QQ号不能为空"
          });
        } else {
          this.$axios.post("http://121.42.13.36/serve/register.php", this.$qs.stringify(this.formData)).then(res => {
            console.log(res);
            if (res.data.state === "Success") {
              this.$notify({
                type: "success",
                message: "恭喜您,注册成功,正在跳转至登录页"
              });
              setTimeout(() => {
                this.$router.push("/login");
              }, 3000);
            }
          }).catch(err => {
            console.log(err);
          });
        }
      },
      // 登录
      goLogin() {
        this.$router.push("/login");
      }
    },
    components: { NavBar }
  };
</script>

<style scoped>
  @import "../../assets/css/base.css";

  .register {
    width: 100%;
    color: #333333;
  }

  .login-nav {
    background-color: var(--color-tint);
    color: white;
  }

  .login-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 340px;
    margin: 30px auto;
  }

  .login-item label {
    display: block;
    font-size: 16px;
    width: 70px;
  }

  .login-item input {
    display: block;
    width: 270px;
    height: 36px;
    line-height: 36px;
    outline: none;
    background: none;
    border: 1px solid #cccccc;
    border-radius: 5px;
    padding-left: 10px;
    font-size: 14px;
  }

  .login-item input:focus {
    border: 1px solid #4098ef;
  }

  .login-item.error input:focus {
    border: 1px solid red;
  }

  .login-item input::placeholder {
    color: #999999;
  }

  .login-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 340px;
    margin: 0 auto;
  }
</style>
