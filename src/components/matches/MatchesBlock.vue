<template>
  <BlockLayout header="Best matches of the day">
    <template v-slot:header-extra>
      <a class="tooltip p-1  hover:cursor-pointer" data-tip="Refresh">
        <ArrowPathIcon class="w-6" filled :fontControlled="false" />
      </a>
      <div class="divider divider-horizontal m-0 h-6 self-center"></div>
      <a @click="setActiveScoreMode()" :class="activeScoreMode ? 'text-red' : ''" class="tooltip p-1 hover:cursor-pointer" data-tip="Show the score">
        <ScoreIcon class="w-6" filled :fontControlled="false" />
      </a>
      <!-- <div class="divider divider-horizontal m-0 h-6 self-center"></div> -->
      <!-- <Gamelinks /> -->
    </template>
    <template v-for="(match, index) in matches">
      <MatchesRow :match="match" />
    </template>
    <div class="flex justify-start p-2">
      <Pagination />
    </div>
  </BlockLayout>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { ArrowPathIcon } from "@heroicons/vue/24/outline";
import { ScoreIcon } from "../icons";
import matches from "../../assets/dumb/matches.json"
import BlockLayout from '../common/BlockLayout.vue';
import Gamelinks from '../common/Gamelinks.vue';
import MatchesRow from './MatchesRow.vue';
import Pagination from '../common/Pagination.vue';

const activeScoreMode = ref(false);
const setActiveScoreMode = () => {
  activeScoreMode.value = !activeScoreMode.value;
};
</script>
<style scoped></style>
