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
import { Dota2, CS2, Hs, Lol, Ow, Pubg, Fortnite } from "@/assets/img/icons/";
const matches = [{ id: 0, t1: "Astralis", t1Icon: "/img/none/teamNoLogo.svg", t2: "The Mongolz", t2Icon: "https://escorenews.com/media/logo/_60/t5270.webp", game: Dota2, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: true, map: 1, event_id: 1, eventName: "ESEA Open Season 47", eIcon: "/img/none/tourNoLogo.svg", type: "BO3" }];

const players = [
  { id: 0, nik: "TECHIES", name: "Vitaliy Vorotnikov", ava: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg", role: "", hero: "Copy", heroImg: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/arc_warden.png" },
  { id: 1, nik: "Banana WannaCoffe", name: "Vitaliy Vorotnikov", ava: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg", role: "", hero: "LINA", heroImg: "https://escorenews.com/media/game/hero/582/_256/25.png" },
  { id: 2, nik: "Denz", name: "Vitaliy Vorotnikov", ava: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg", role: "", hero: "LINA", heroImg: "https://escorenews.com/media/game/hero/582/_256/25.png" },
  { id: 3, nik: "Amputator3000", name: "Vitaliy Vorotnikov", ava: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg", role: "", hero: "LINA", heroImg: "https://escorenews.com/media/game/hero/582/_256/25.png" },
  { id: 4, nik: "VinDisel", name: "Vitaliy Vorotnikov", ava: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg", role: "", hero: "LINA", heroImg: "https://escorenews.com/media/game/hero/582/_256/25.png" },
];
</script>

<style lang="scss" scoped>
.tab.tab-active:not(.tab-disabled):not([disabled]),
.tab:is(input:checked) {
    color: oklch(0.81085 0.062849 208.923)
}
</style>
