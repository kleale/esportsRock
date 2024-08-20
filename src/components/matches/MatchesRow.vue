<template>
  <div :class="match.isLive ? 'isLive' : ''" class="text-xs flex odd:bg-gray-100 last:border-0 hover:bg-opacity-10 
  hover:bg-gray-700">
  <div class="flex grow items-center">
      <div class="flex flex-col items-start w-[30px] pl-2 gap-1 text-gray-500">
        <component :is="getIcon(match.game)" :fontControlled="false" class="w-5" />
      </div>

      <div class="flex grow relative">
        <div class="flex grow flex-1 items-center gap-2 md:gap-5 flex-row-reverse md:flex-row-reverse md:items-center md:justify-start">
          <a href="#/match" class="flex h-6 w-6">
            <img class="h-6 max-w-full" :src="match.t1Icon" :alt="match.t1" />
          </a>
          <a href="#" class="flex text-sm text-ellipsis overflow-hidden md:w-fit text-right hover:underline hover:black"> {{ match.t1 }}</a>
        </div>

        <div class="flex flex-col justify-center items-center px-1 h-14 w-[60px] ">
            <div class="badge badge-error badge-sm badge-outline cursor-pointer text-xs" v-if="match.isLive && !isScore" @click="onShowScore">score</div>
            <div class="text-sm font-bold text-red-400" v-if="match.isLive && isScore" @click="onShowScore">{{ match.score }}</div>
            <div class="text-sm font-bold" v-if="!match.isLive && !isScore">{{ match.score }}</div>
        </div>

        <div class="flex grow flex-1 items-center flex-row gap-2 text-left">
          <a href="#/match" class="flex h-6 w-6">
            <img class="h-6 max-w-full" :src="match.t2Icon" :alt="match.t2" />
          </a>
          <a href="#" class="flex text-sm text-ellipsis overflow-hidden md:w-fit hover:underline hover:black"> {{ match.t2 }} </a>
        </div>

      </div>

      <div class="flex items-center w-[100px] justify-end gap-2 pr-1">
        <div class="flex gap-1 flex-col items-end" v-if="match.isLive">
            <div class="flex gap-1 text-xs text-red-400 items-center">
                <ClockIcon class="h-3" />
                <div class="text-xs">{{ match.time }}</div>
            </div>
          <div>
            <span class="bg-red-400 text-gray-100 text-xs font-semibold px-1 rounded" v-if="match.isLive">MAP{{ match.map }}</span>
          </div>
        </div>
        <div class="text-xs text-right" v-if="!match.isLive">
          {{ match.date }}
          {{ match.time }}
        </div>
        <div>
        <a href="#/match" class="tooltip w-6 md:w-7 flex justify-center" :data-tip="match.eventName">
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
import { D2Icon, LOLIcon, CS2Icon, FortniteIcon, PubgIcon } from "../icons";

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

const getIcon = (game: string) => {
  switch (game) {
    case "Dota2": return D2Icon;
    case "CS2": return LOLIcon;
    case "Lol": return CS2Icon;
    case "Fortnite": return FortniteIcon;
    case "Pubg": return PubgIcon
  }
  return D2Icon
}
</script>
<style scoped lang="scss">
.bg-odd {
  background-color: #23232b;
}
.isLive{
  background-color: #daff84;
}
</style>
