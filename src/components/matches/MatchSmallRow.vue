<template>
  <div :class="match.isLive ? 'isLive' : ''" class="text-xs flex odd:bg-gray-100 last:border-0 hover:bg-opacity-10 
    hover:bg-gray-700">
    <div class="flex grow items-center">
      <div class="flex flex-col items-start w-[30px] pl-2 gap-1">
        <component :is="getIcon(match.game)" :fontControlled="false" class="w-3" />
        <div>{{ match.time }}</div>
      </div>

      <div class="flex grow relative">

        <a href="#/match" class="flex grow flex-1 items-center gap-2 flex-row-reverse ">
          <span class="h-5 w-[20px] items-center"> <img class="h-5" :src="match.t1Icon" :alt="match.t1" /></span>
          <span class="flex text-ellipsis overflow-hidden w-fit text-right"> {{ match.t1 }}</span>
        </a>

        <div class="flex flex-col justify-center items-center h-14 w-[45px]">
          <div class="badge badge-error badge-xs badge-outline cursor-pointer" v-if="match.isLive && !isScore"
            @click="onShowScore">sc</div>
          <div class=" font-bold text-red-400" v-if="match.isLive && isScore" @click="onShowScore">{{ match.score }}
          </div>
          <div class=" font-bold" v-if="!match.isLive && !isScore">{{ match.score }}</div>
        </div>

        <div class="flex grow flex-1 items-center flex-row gap-2 text-left">
          <a href="#/match" class="flex">
            <img class="h-5 max-w-full" :src="match.t2Icon" :alt="match.t2" />
          </a>
          <a href="#/match" class="flex text-ellipsis overflow-hidden w-fit"> {{ match.t2 }} </a>

        </div>
      </div>







      <div class="flex items-center w-[30px] justify-end gap-2 pr-1">
        <!-- <div class="flex flex-col items-end" v-if="match.isLive">
          <div class="flex gap-1 text-red-400 items-center">
            <ClockIcon class="h-3" filled />
            <div class="">{{ match.time }}</div>
          </div>
          <div>
            <span class="bg-red-400 text-gray-900  font-semibold mt-0.5 px-1 rounded" v-if="match.isLive">MAP{{
              match.map }}</span>
          </div>
        </div>
        <div class=" text-right text-secondary" v-if="!match.isLive">
          {{ match.date }}
          {{ match.time }}
        </div> -->
        <div>
          <a href="/" class="tooltip w-6 flex justify-center" :data-tip="match.eventName">
            <img class="h-5 max-w-full" :src="match.eIcon" :alt="match.eventName" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { D2Icon, LOLIcon, CS2Icon, FortniteIcon, PubgIcon } from "../icons";

const props = defineProps<{
  match: IMatch;
}>();

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

.isLive {
  background-color: #daff84;
}
</style>
