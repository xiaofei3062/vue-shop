<template>
  <div class="back-top">
    <img alt="" src="@/assets/img/common/top.png" />
  </div>
</template>

<script>
export default {
  name: "BackTop"
};
</script>

<style scoped>
.back-top {
  position: fixed;
  z-index: 10;
  right: 20px;
  bottom: 70px;
}

.back-top img {
  width: 50px;
  height: 50px;
}
</style>
