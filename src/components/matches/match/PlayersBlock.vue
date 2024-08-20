<template>
  <div class="flex flex-col w-full border border-slate-800 rounded">
    <div class="flex w-full justify-between items-center border-b border-slate-800 py-2 px-2 bg-block">
      <div class="flex items-center gap-3">
        <a href="#" class="flex h-7 w-7">
          <img class="h-7 w-7" src="../assets/none/teamNoLogo.svg" alt="teamName" />
        </a>
        <a href="#" class="flex text-right text-base font-bold text-red-400 leading-4"> Moon Team </a>
      </div>
      <div class="flex items-center flex-row-reverse gap-3">
        <a href="#" class="flex h-7 w-7">
          <img class="h-7 w-7" src="../assets/none/teamNoLogo.svg" alt="teamName" />
        </a>
        <a href="#" class="flex text-right text-base text-accent leading-4 font-bold"> Dota Geniuses </a>
      </div>
    </div>
    <!-- -->
    <div v-for="item in items" :key="item.id" class="flex w-full justify-between items-center border-b border-slate-800 py-2 px-2 last:border-0">
      <div class="flex items-center gap-2 py-0.5 relative">
        <img class="w-7 shadow-md" src="../assets/none/heroNoLogo.svg" alt="heroName" />
        <div class="flex w-2 h-2 items-center bg-accent rounded-full"></div>
        <a href="#" class="flex text-sm leading-none">{{ item.name1 }}</a>
        <div class="border border-accent text-[9px] px-0.5 rounded-sm text-accent font-bold leading-3 h-[14px]">3</div>
        <div class="w-[100px] rounded-full h-0.5 absolute bottom-[-7px]">
          <div class="bg-yellow-600 h-0.5 rounded-full" style="width: 35%"></div>
        </div>
      </div>
      <div class="flex items-center gap-2 py-0.5 flex-row-reverse relative">
        <img class="w-7 shadow-md" src="/img/none/heroNoLogo.svg" alt="heroName" />
        <div class="flex w-2 h-2 items-center bg-base-content rounded-full"></div>
        <a href="#" class="flex text-sm text-right leading-none">{{ item.name2 }}</a>
        <div class="border border-accent text-[9px] px-0.5 rounded-sm text-accent font-bold leading-3 h-[14px]">3</div>
        <div class="w-[100px] rounded-full h-0.5 absolute bottom-[-7px] flex flex-row-reverse">
          <div class="bg-yellow-600 h-0.5 rounded-full" style="width: 25%"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const items = ref([
  { id: "0", name1: "kiki", name2: "Banana WannaCoffe" },
  { id: "1", name1: "Denz", name2: "suPerDuper" },
  { id: "2", name1: "Broudi", name2: "Taburet" },
  { id: "3", name1: "Vasek", name2: "Pikollo" },
  { id: "4", name1: "VinDisel", name2: "Amputator3000" },
]);
</script>
<style scoped>
.bg-block {
  background: rgb(49, 49, 54);
  background: radial-gradient(ellipse at 10% 10%, rgb(42 42 47) 0%, rgb(27 27 33) 100%);
}
</style>
