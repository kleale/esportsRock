<template>
  <div>
    <div v-for="(match, index) in matches" class="rounded border-t border-slate-700">
      <MatchesRow :match="match"/>
    </div>
    <div class="flex flex-col justify-center p-4 bg-[#172429] border-t border-slate-700">
      <h1 class="text-lg font-bold text-center text-white mb-3">Матч Astralis vs The Mongolz на BBD 2024 Winter</h1>
      <div class="flex text-primary pt-1">
        <div class="flex flex-1 text-xs items-center gap-3">
          <a href="/" class="flex gap-1" v-for="(player, index) in players">
            <img class="tooltip w-4" :src="`https://escorenews.com/media/flags/2${index}.svg`" data-tip="Босния и Герцеговина" />
            <span>{{ player.nik }}</span>
          </a>
        </div>
        <div class="flex flex-1 text-xs items-center gap-3 justify-end">
          <a href="/" class="flex gap-1" v-for="(player, index) in players">
            <img class="tooltip w-4" :src="`https://escorenews.com/media/flags/2${index}.svg`" data-tip="Босния и Герцеговина" />
            <span>{{ player.nik }}</span>
          </a>
        </div>
      </div>
    </div>

    <div class="stage overflow-x-auto tabs tabs-bordered bg-[#172429] border-t border-slate-700" role="tablist">
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


</script>

<style lang="scss" scoped>
.tab.tab-active:not(.tab-disabled):not([disabled]),
.tab:is(input:checked) {
    color: oklch(0.81085 0.062849 208.923)
}
</style>
