<template>
  <div class="profile-list">
    <div class="profile-list-item">
      <img alt="" src="../../../assets/img/profile/message.png">
      <span>我的消息</span>
    </div>
    <div class="profile-list-item">
      <img alt="" src="../../../assets/img/profile/jifen.png">
      <span>积分商城</span>
    </div>
    <div class="profile-list-item">
      <img alt="" src="../../../assets/img/profile/vip.png">
      <span>会员卡</span>
    </div>
    <div class="line"></div>
    <div class="profile-list-item">
      <img alt="" src="../../../assets/img/profile/gouwuche.png">
      <span>我的购物车</span>
    </div>
    <div class="profile-list-item">
      <img alt="" src="../../../assets/img/profile/download.png">
      <span>下载购物APP</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "profileList"
  };
</script>

<style scoped>
  .profile-list {
    width: 100%;
  }

  .profile-list-item {
    display: flex;
    align-items: center;
    height: 45px;
    padding-left: 20px;
  }

  .profile-list-item img {
    margin-right: 10px;
    width: 24px;
    height: 24px;
  }

  .profile-list-item span {
    width: 100%;
    line-height: 45px;
    font-size: 15px;
    color: #333333;
    border-bottom: 1px solid #eeeeee;
  }

  .profile-list-item span:nth-of-type(3) {
    border-bottom: 0;
  }

  .line {
    width: 100%;
    height: 10px;
    background-color: #eeeeee;
  }
</style>
