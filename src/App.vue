<script setup lang="ts">
import Footer from "./components/layout/Footer.vue";
import NavBar from "./components/layout/NavBar.vue";
import Branding from "./components/layout/Branding.vue";
import BnrCatFish from "./components/layout/BnrCatFish.vue";
import LeftSide from "./components/layout/LeftSide.vue";
import SidePanel from "./components/layout/SidePanel.vue";
</script>

<template>
  <Branding /> 
  <BnrCatFish />
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
      <div class="max-w-[1380px] relative flex flex-col app-bg">
        <div class="app-bg-corner flex flex-col">
          <NavBar />
          <main id="main" class="grid grid-cols-1 md:grid-cols-12 gap-4 px-3 py-2 max-w-[1380px] grow">
            <div id="LeftSide" class="col-span-1 md:col-span-3">
              <LeftSide />
            </div>
            <div id="RouterView" class="col-span-2 md:col-span-9">
              <RouterView />
            </div>
          </main>
          <div class="p-3 max-w-[1380px]">
            <Footer />
          </div>
        </div>
      </div>

    </div>
    <div class="drawer-side">
      <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      
      <SidePanel />
    </div>
  </div>
</template>

<style scoped>
.app-bg {
  background-image: url("@/assets/img/bg.png");
  background-repeat: repeat-x;
  background-color: #333537;
}

.app-bg-corner {
  background-image: url("@/assets/img/bgcorner.png");
  background-repeat: no-repeat;
}
</style>
