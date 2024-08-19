<template>
  <div :class="match.isLive ? 'isLive' : '' " class="flex border-b border-b-slate-800 odd:bg-slate-800 odd:bg-opacity-10 last:border-0 hover:bg-opacity-10 hover:bg-gray-700">
    <div class="flex grow items-center">
      <div class="flex items-start md:items-center py-1 pl-2 md:pl-4 w-[30px] md:w-36 flex-col md:flex-row text-secondary">
        <component :is="match.game" :fontControlled="false" class="w-4 md:w-5" />
      </div>
      <div class="flex grow gap-1 md:gap-5 relative md:px-1">
        <div class="flex grow flex-1 items-center gap-2 md:gap-5 flex-row-reverse md:flex-row-reverse md:items-center md:justify-start">
          <a href="#" class="flex h-6 w-6">
            <img class="h-6 max-w-full" :src="match.t1Icon" :alt="match.t1" />
          </a>
          <a href="#" class="flex text-xs md:text-base  leading-4 text-ellipsis overflow-hidden md:w-fit text-right"> {{ match.t1 }}</a>
        </div>
        <div class="flex flex-col justify-center items-center px-1 bg-slate-800 bg-opacity-20 h-14 w-[60px] md:w-20 md:h-14 md:px-2">
            <div class="badge badge-error badge-outline cursor-pointer text-xs md:text-sm" v-if="match.isLive && !isScore" @click="onShowScore">score</div>
            <div class="text-sm font-bold text-red-400" v-if="match.isLive && isScore" @click="onShowScore">{{ match.score }}</div>
            <div class="text-sm font-bold" v-if="!match.isLive && !isScore">{{ match.score }}</div>
        </div>
        <div class="flex grow flex-1 items-center flex-row gap-2 md:gap-5 md:flex-row text-left">
          <a href="#" class="flex h-6 w-6">
            <img class="h-6 max-w-full" :src="match.t2Icon" :alt="match.t2" />
          </a>
          <a href="#" class="flex text-xs md:text-base leading-4 text-ellipsis overflow-hidden md:w-fit"> {{ match.t2 }} </a>
        </div>
      </div>
      <div class="flex items-center w-[80px] md:w-[170px] justify-end gap-2 md:gap-4 pr-1 md:pr-3">
        <div class="flex md:gap-3 flex-col md:flex-row items-end" v-if="match.isLive">
            <div class="flex gap-1 text-xs md:text-sm text-red-400 items-center">
                <ClockIcon class="h-3" filled />
                <div class="text-xs md:text-sm">{{ match.time }}</div>
            </div>
          <div>
            <span class="bg-red-400 text-gray-900 text-xs font-semibold mt-0.5 px-1 rounded" v-if="match.isLive">MAP{{ match.map }}</span>
          </div>
        </div>
        <div class="text-xs md:text-sm text-right text-secondary" v-if="!match.isLive">
          {{ match.date }}
          {{ match.time }}
        </div>
        <div>
        <a href="/" class="tooltip w-6 md:w-7 flex justify-center" :data-tip="match.eventName">
          <img class="h-5 md:h-6 max-w-full" :src="match.eIcon" :alt="match.eventName" />
        </a>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ClockIcon } from "@heroicons/vue/24/outline";

const isScore = ref(false)
const onShowScore = () => {
    isScore.value = !isScore.value
}
interface IMatch {
  id: number;
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
  eventId: number;
  eventName: string;
  eIcon: string;
  type: string;
}
const props = defineProps<{
  match: IMatch;
}>();
</script>
<style scoped lang="scss">
.bg-odd {
  background-color: #23232b;
}
.isLive{
  background-color: #daff84;
}
</style>
