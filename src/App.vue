<script setup lang="ts">
import Footer from "./components/layout/Footer.vue";
import NavBar from "./components/layout/NavBar.vue";
import Branding from "./components/layout/Branding.vue";
import BnrCatFish from "./components/layout/BnrCatFish.vue";
import LeftSide from "./components/layout/LeftSide.vue";
</script>

<template>
  <!-- <Branding /> -->
  <BnrCatFish />

  <div class="max-w-6xl relative flex flex-col app-bg">
    <div class="app-bg-corner">
      <NavBar />
      <div class="grid grid-cols-1 md:grid-cols-10 gap-4 px-3 py-2 max-w-6xl">
        <div class="col-span-1 md:col-span-3">
          
          <LeftSide/>

        </div>
        <div class="col-span-2 md:col-span-7">
          <RouterView />
        </div>
      </div>
      <div class="p-3 max-w-6xl">
        <Footer/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-bg {
  background-image: url("./assets/bg.png");
  background-repeat: repeat-x;
  background-color: #333537;
}

.app-bg-corner {
  background-image: url("./assets/bgcorner.png");
  background-repeat: no-repeat;
}
</style>
