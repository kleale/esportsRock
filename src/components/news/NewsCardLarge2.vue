<template>
  <a href="#/newspage" class=" hover:text-primary relative transition image-full bg-base-100">
    <figure><img :src="data.src" alt="news" class="opacity-25" style="width: 100%" /></figure>
    <div class="justify-end p-6 pb-0 absolute bottom-0">
      <div class="flex flex-col gap-2">
        <div><span class="bg-[#DDBE9A] text-gray-900 text-xs font-semibold px-1 rounded uppercase">Interview</span></div>
        <h3 class="card-title grow  text-lg leading-5">{{data.name}}</h3>
        <!-- <p>Click the button to listen on Spotiwhy app.</p> -->
        <div class="flex items-end content-end justify-end -mr-6">
          <!-- <component :is="data.game" :fontControlled="false" class="w-6" /> -->
          <div class="readmore">READ</div>
        </div>
      </div>
    </div>
  </a>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: {name:string, id:number, src:string, game:any, isImg?: boolean, date?: string}
}>()
</script>
<style scoped>
.readmore{
  background: url('~/assets/img/newsreadmore.svg') 0% 100% no-repeat;
  padding: 8px 15px 8px 118px;

  color: #000;
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
</style>
