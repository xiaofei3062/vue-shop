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
  bottom: 70px;
  right: 20px;
  z-index: 10;
}

.back-top img {
  width: 50px;
  height: 50px;
}
</style>
