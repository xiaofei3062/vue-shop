<template>
  <div class="login">
    <!-- 标题栏 -->
    <nav-bar class="login-nav">
      <div slot="center">登录</div>
    </nav-bar>
    <div :class="{error:!formData.username}" class="login-item">
      <label for="username">用户名：</label>
      <input id="username" placeholder="请输入用户名" type="text" v-model.trim="formData.username">
    </div>
    <div :class="{error:!formData.password}" class="login-item">
      <label for="password">密码：</label>
      <input id="password" placeholder="请输入密码" type="password" v-model.trim="formData.password">
    </div>
    <div class="login-btn">
      <van-button @click="goLogin" class="login-btn-login" type="info">点击登录</van-button>
      <van-button @click="goRegister" class="login-btn-register" plain type="info">立即注册</van-button>
    </div>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";

  export default {
    name: "Login",
    data() {
      return {
        formData: {
          username: "",
          password: ""
        }
      };
    },
    methods: {
      // 登录
      goLogin() {
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
        } else {
          this.$axios.post("http://121.42.13.36/serve/login.php", this.$qs.stringify(this.formData)).then(res => {
            if (res.data.state === "Success") {
              let obj = {
                username: res.data.username,
                phone: res.data.phone
              };
              this.$notify({
                type: "success",
                message: "恭喜您登录成功"
              });
              localStorage.setItem("shop_login", JSON.stringify(obj));
              setTimeout(() => {
                this.$router.push("/profile");
              }, 3000);
            } else {
              this.$notify({
                type: "danger",
                message: "用户名或密码错误"
              });
            }
          }).catch(err => {
            console.log(err);
          });
        }
      },
      // 注册
      goRegister() {
        this.$router.push("/register");
      }
    },
    components: { NavBar }
  };
</script>

<style scoped>
  @import "../../assets/css/base.css";

  .login {
    width: 100%;
    color: #333333;
    font-size: 14px;
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
    justify-content: space-between;
    width: 340px;
    margin: 0 auto;
  }
</style>
