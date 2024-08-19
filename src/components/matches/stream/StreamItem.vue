<template>
  <div :class="stream.isActive ? 'isActive bg-[#172429] shadow-cyan-950' : ''" 
    class="flex flex-row items-center gap-3 bg-neutral rounded cursor-pointer transition-all shadow hover:bg-[#172429] hover:shadow-slate-950">
    <picture class="rounded relative overflow-hidden h-12 min-w-fit">
      <span class="absolute bg-black text-[10px] text-primary text-center rounded-full block leading-3 h-4 w-4 top-1 left-1">en</span>
      <source :srcset="stream.streamSrc" type="image/webp" />
      <img class="h-12 w-12 rounded" loading="lazy" :src="stream.streamSrc" alt="aferaTV" />
    </picture>
    <div class="flex flex-col flex-1 gap-1 content-center text-xs text-white">
      <div class="line-clamp-1">{{ stream.name }}</div>
      <div class="flex gap-1 items-center content-center"><IconEye class="text-primary" filled /> {{ stream.views }}</div>
    </div>
    <div class="flex flex-col content-center text-base-content text-lg pr-2">
      <!-- <IconCircledashed class="text-base-content text-lg" filled /> -->
      <component :is="stream.isActive ? IconCirclecheck : IconCircledashed" :fontControlled="false" filled class="w-6" :class="stream.isActive ? 'text-primary' : ''"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {IconCirclecheck, IconCircledashed, IconEye} from "@/assets/img/icons/";

interface IStream {
  id: number;
  isActive: boolean;
  streamSrc: string;
  name: string;
  views: string;
  t1: string;
  t1Icon: string;
  t2: string;
  t2Icon: string;
  game: string;
  gameId: string;
  score: string;
  date: string;
  time: string;
  isLive: boolean;
  map: number;
  event_id: number;
  eventName: string;
  eIcon: string;
  type: string;
}
const props = defineProps<{
  stream: IStream;
}>();
</script>

<style scoped lang="scss">
.isActive {
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: -7px;
    display: block;
    height: 100%;
    width: 5px;
    border-radius: 5px;
    background: #91cdd7;
  }
}
</style>
