<template>
  <div class="login">
    <div class="user-pic">
      <van-image :src="defaultPic" class="user-pic-img" fit="cover" round />
    </div>
    <div class="user-info">
      <p>登录/注册</p>
      <div class="phone-num">
        <img alt="" class="icon-phone" src="@/assets/img/profile/phone.png" />
        <p>暂未绑定手机号</p>
      </div>
    </div>
    <div class="profile-arrow-right">
      <img alt="" src="@/assets/img/profile/arrow_right.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      defaultPic: require("@/assets/img/profile/user.png")
    };
  }
};
</script>

<style scoped>
.login {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
  padding: 0 20px;
  background-color: #ff8198;
}

.user-pic {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
}

.user-pic .user-pic-img {
  display: block;
  width: 60px;
  height: 60px;
}

.user-info {
  font-size: 16px;
  margin-left: 20px;
  color: white;
}

.user-info p:last-child {
  margin-left: 3px;
}

.user-info .phone-num {
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-top: 8px;
}

.icon-phone {
  display: inline-block;
  width: 16px;
  height: 16px;
}

.profile-arrow-right {
  position: absolute;
  right: 10px;
  width: 20px;
  height: 20px;
}

.profile-arrow-right img {
  display: inline-block;
  width: 20px;
  height: 20px;
}
</style>
