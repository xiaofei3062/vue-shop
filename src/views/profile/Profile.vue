<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <div slot="center">小码哥商城</div>
    </nav-bar>
    <scroll class="scroll-height">
      <login />
      <money />
      <div class="line"></div>
      <profile-list />
    </scroll>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Login from "./children/Login";
import Money from "./children/Money";
import ProfileList from "./children/profileList";
import Scroll from "@/components/common/scroll/Scroll";

export default {
  name: "Profile",
  components: { Scroll, ProfileList, Money, Login, NavBar }
};
</script>

<style scoped>
.profile {
  width: 100%;
  height: 100%;
}

.nav-bar {
  font-weight: 600;
  color: white;
  background-color: #ff8198;
}

.line {
  width: 100%;
  height: 10px;
  background-color: #eeeeee;
}

.scroll-height {
  position: absolute;
  top: 44px;
  right: 0;
  bottom: 50px;
  left: 0;
  overflow: hidden;
}
</style>
