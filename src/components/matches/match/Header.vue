<template>
  <div>
    <div class="rounded border-t border-gray-200">
      <MatchesRow :match="matches[1]"/>
    </div>
    <div class="flex flex-col justify-center p-4 bg-gray-100 border-t border-gray-200">
      <h1 class="text-lg font-bold text-center mb-3">Матч Astralis vs The Mongolz на BBD 2024 Winter</h1>
      <div class="flex text-primary pt-1">
        <div class="flex flex-1 text-xs items-center gap-2">
          <a href="/" class="flex gap-1" v-for="(player, index) in players">
            <img class="tooltip w-3" :src="`https://escorenews.com/media/flags/2${index}.svg`" data-tip="Босния и Герцеговина" />
            <span>{{ player.nik }}</span>
          </a>
        </div>
        <div class="flex flex-1 text-xs items-center gap-2 justify-end">
          <a href="/" class="flex gap-1" v-for="(player, index) in players">
            <img class="tooltip w-3" :src="`https://escorenews.com/media/flags/2${index}.svg`" data-tip="Босния и Герцеговина" />
            <span>{{ player.nik }}</span>
          </a>
        </div>
      </div>
    </div>

    <div class="stage overflow-x-auto overflow-y-hidden tabs tabs-bordered bg-gray-200 border-t border-gray-200" role="tablist">
      <a class="tab" role="tab" href="/"><span>Турнир</span></a>
      <a class="tab" role="tab" href="/"><span>America</span></a>
      <a class="tab" role="tab" href="/"><span>Western Europe</span></a>
      <a class="tab" role="tab" href="/"><span>Eastern Europe</span></a>
      <a class="tab tab-active" role="tab" href="/"><span>China &amp; SEA</span></a>
      <a class="tab" role="tab" href="/"><span>MENA</span></a>
      <a class="tab" role="tab" href="/"><span>Group Stage</span></a>
      <a class="tab" role="tab" href="/"><span>Playoff</span></a>
    </div>
  </div>
</template>

<script setup lang="ts">

import matches from "../../../assets/dumb/matches.json"
import players from "../../../assets/dumb/players.json"
import MatchesRow from "../MatchesRow.vue"

</script>

<style lang="scss" scoped>
.tab.tab-active:not(.tab-disabled):not([disabled]),
.tab:is(input:checked) {
    color: black
}
</style>
