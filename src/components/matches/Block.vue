<template>
  <CommonBlocklayout header="Best matches of the day">
    <template v-slot:header-extra>
      <a class="tooltip p-1 text-secondary hover:text-white hover:cursor-pointer" data-tip="Refresh">
        <ArrowPathIcon class="w-6" filled :fontControlled="false" />
      </a>
      <div class="divider divider-horizontal m-0 h-6 self-center"></div>
      <a @click="setActiveScoreMode()" :class="activeScoreMode ? 'text-white' : ''" class="tooltip p-1 text-secondary hover:text-white hover:cursor-pointer" data-tip="Show the score">
        <ScoreIcon class="w-6" filled :fontControlled="false" />
      </a>
      <div class="divider divider-horizontal m-0 h-6 self-center"></div>
      <CommonGamelinks />
    </template>
    <template v-for="(match, index) in matches">
      <MatchesRow :match="match" />
    </template>
    <div class="flex justify-start p-2">
      <CommonPagination />
    </div>
  </CommonBlocklayout>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { ArrowPathIcon } from "@heroicons/vue/24/outline";
import { ScoreIcon } from "../icons";
import { D2Icon, CS2Icon, LOLIcon, PubgIcon, FortniteIcon } from "../icons";
import matches from "../../assets/dumb/matches.json"

const activeScoreMode = ref(false);
const setActiveScoreMode = () => {
  activeScoreMode.value = !activeScoreMode.value;
};
</script>
<style scoped></style>
