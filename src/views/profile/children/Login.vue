<template>
  <div class="login">
    <van-uploader :after-read="afterRead">
      <div class="user-pic">
        <van-image :src="defaultPic" class="user-pic-img" fit="cover" round></van-image>
      </div>
    </van-uploader>
    <div @click="curLogin?'':goLogin()" class="user-info">
      <p v-if="curLogin">{{username}}</p>
      <p v-else>登录/注册</p>
      <div class="phone-num">
        <img alt="" class="icon-phone" src="../../../assets/img/profile/phone.png">
        <p v-if="curLogin">{{phone}}</p>
        <p v-else>暂未绑定手机号</p>
      </div>
    </div>
    <div class="profile-arrow-right">
      <img alt="" src="../../../assets/img/profile/arrow_right.png">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        defaultPic: require("../../../assets/img/profile/user.png")
      };
    },
    props: {
      curLogin: {
        type: Boolean,
        default() {
          return false;
        }
      },
      username: {
        type: String,
        default() {
          return "";
        }
      },
      phone: {
        type: String,
        default() {
          return "";
        }
      }
    },
    methods: {
      goLogin() {
        this.$emit("goLogin");
      },
      // 更换头像
      afterRead(file) {
        console.log(file);
        this.defaultPic = file.content;
        localStorage.setItem("user_pic", JSON.stringify(this.defaultPic));
      }
    }
  };
</script>

<style scoped>
  @import "../../../assets/css/base.css";

  .login {
    width: 100%;
    height: 90px;
    background-color: var(--color-tint);
    display: flex;
    align-items: center;
    padding: 0 20px;
    position: relative;
  }

  .user-pic {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .user-pic .user-pic-img {
    display: block;
    width: 60px;
    height: 60px;
  }

  .user-info {
    color: white;
    font-size: 16px;
    margin-left: 20px;
  }

  .user-info p:last-child {
    margin-left: 3px;
  }

  .user-info .phone-num {
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-top: 8px;
  }

  .icon-phone {
    display: inline-block;
    width: 16px;
    height: 16px;
  }

  .profile-arrow-right {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 10px;
  }

  .profile-arrow-right img {
    display: inline-block;
    width: 20px;
    height: 20px;
  }
</style>
