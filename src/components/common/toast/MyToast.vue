<template>
  <div class="my-toast" v-show="isShow">
    <span>{{message}}</span>
  </div>
</template>

<script>
  export default {
    name: "MyToast",
    data() {
      return {
        message: "",
        isShow: false
      };
    },
    methods: {
      toastShow(message, duration = 3000) {
        this.isShow = true;
        this.message = message;
        setTimeout(() => {
          this.isShow = false;
          this.message = "";
        }, duration);
      }
    }
  };
</script>

<style scoped>
  .my-toast {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.75);
    padding: 8px 15px;
    color: white;
    font-size: 16px;
  }
</style>
