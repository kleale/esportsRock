<template>
  <div class="relative flex items-center grow py-3 px-3 border border-b-0 border-gray-300 rounded-t-md">
    <h1 class="flex-shrink mr-4 font-black text-sm text-black">Upcoming matches</h1>
  </div>
  <div class="border border-gray-300 rounded-b-md mb-6">
    <template v-for="(match, index) in matches.slice(0, 10)">
      <MatchSmallRow :match="match" />
    </template>
    <div class="relative flex items-center grow py-2">
      <div class="flex-grow"></div>
      <h1 class="flex-shrink mx-4">
        <Pagination size="small" />
      </h1>
      <div class="flex-grow"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Pagination from '../../components/common/Pagination.vue';
import matches from '../../assets/dumb/matches.json'
import MatchSmallRow from '../../components/matches/MatchSmallRow.vue';
</script>