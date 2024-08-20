<template>
  <div class="max-w-6xl bg-white rounded-lg">
    <div class="p-4">
      <Bnr1050 />
      <Breadcrumbs />
      <div class="relative flex py-2 items-center grow">
        <h1 class="flex-shrink mr-4 font-black text-l text-black uppercase">Matches Dota2</h1>
        <div class="flex-grow border-t border-gray-300"></div>
      </div>
      <StreamBlockFull />
      <div class="grid grow grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1380px]">
        <div class="col-span-1 lg:col-span-8">

          <!--content-->

          <MatchesBlock />
        </div>

        <div class="col-span-1 lg:col-span-4">
          <FilterBlock/>
          <B330 />
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import Bnr1050 from '@/components/banners/Bnr1050.vue';
import B330 from '@/components/banners/B330.vue';
import StreamBlockFull from '@/components/matches/stream/StreamBlockFull.vue';
import Breadcrumbs from '@/components/common/Breadcrumbs.vue';
import MatchesBlock from '@/components/matches/MatchesBlock.vue';
import FilterBlock from '@/components/common/FilterBlock.vue';
</script>

<style scoped></style>