<template>
  <div>
    <div class="flex flex-row items-center gap-7 py-4 px-10 bg-[#172429] border-t border-slate-700 rounded">
      <img src="https://escorenews.com/media/event/e8623.webp" class="w-20" />
      <div class="flex flex-col flex-1 gap-1">
        <h1 class="text-lg font-bold text-white">BetBoom DACHA 2024 Winter</h1>
        <div class="text-sm">Dota 2 • February 5 • $1,000,000</div>
        <div>
          <ul class="menu menu-xs menu-horizontal m-0 p-0 -ml-2">
            <li><a class="text-primary">Matches</a></li>
            <li><a class="text-primary">Teams</a></li>
            <li><a class="text-primary">Players</a></li>
            <li><a class="text-primary">News</a></li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col items-end text-sm gap-3">
        <div class="flex items-center gap-3">
          Dubai
          <img src="https://escorenews.com/media/flags/97.svg" class="w-6" title="UAE" />
        </div>
        <div class="flex gap-2 items-center">
          Tier: -
          <div class="tooltip cursor-pointer hover:text-primary" data-tip="About events ranking">
            <IconInfo class="w-5" filled />
          </div>
        </div>
      </div>
    </div>

    <div class="stage overflow-x-auto tabs tabs-bordered bg-[#172429] border-t border-slate-700" role="tablist">
      <a class="tab tab-active" role="tab" href="/"><span>Турнир</span></a>
      <a class="tab" role="tab" href="/"><span>America</span></a>
      <a class="tab" role="tab" href="/"><span>Western Europe</span></a>
      <a class="tab" role="tab" href="/"><span>Eastern Europe</span></a>
      <a class="tab" role="tab" href="/"><span>China &amp; SEA</span></a>
      <a class="tab" role="tab" href="/"><span>MENA</span></a>
      <a class="tab" role="tab" href="/"><span>Group Stage</span></a>
      <a class="tab" role="tab" href="/"><span>Playoff</span></a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Dota2, CS2, Hs, Lol, Ow, Pubg, Fortnite, IconInfo } from "@/assets/img/icons/";

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
  color: oklch(0.81085 0.062849 208.923);
}
</style>
