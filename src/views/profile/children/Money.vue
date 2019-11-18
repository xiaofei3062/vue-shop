<template>
  <div class="money">
    <div class="money-item">
      <p>0.00<span>元</span></p>
      <p>我的余额</p>
    </div>
    <div class="money-item">
      <p>0<span>个</span></p>
      <p>我的优惠</p>
    </div>
    <div class="money-item">
      <p>0<span>分</span></p>
      <p>我的积分</p>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
  export default {
    name: "Money"
  };
</script>

<style scoped>
  .money {
    width: 100%;
    display: flex;
  }

  .money .money-item {
    flex: 1;
    height: 85px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .money .money-item:nth-of-type(1), .money .money-item:nth-of-type(2) {
    border-right: 1px solid #eeeeee;
  }

  .money .money-item p:first-child {
    font-size: 24px;
    font-weight: 700;
    color: #ff5f3e;
    margin-bottom: 3px;
  }

  .money .money-item p:first-child span {
    font-size: 14px;
    color: #666666;
    font-weight: normal;
    margin-left: 3px;
  }

  .money .money-item p:last-child {
    font-size: 14px;
    color: #666666;
  }
</style>
