<template>
  <div>
    <div class="flex flex-row items-center gap-7 py-6 px-6 bg-[#172429] border-t border-slate-700 rounded">
      <picture class="w-56">
        <source srcset="https://game-tournaments.com/media/logo/p2888.webp" type="image/webp" />
        <source srcset="https://game-tournaments.com/media/logo/p2888.png" />
        <img src="https://game-tournaments.com/media/logo/p2888.webp" class="w-fit border border-slate-700 rounded" />
      </picture>

      <div class="flex flex-col self-start flex-1">
        <div class="flex flex-row gap-4 items-center">
          <div class="flex flex-row flex-1 items-end gap-3">
            <h1 class="text-[22px] font-bold text-white flex flex-col">RAMZES666 <small class="font-normal text-base-content text-base">Roman Kushnarev</small></h1>
            <div class="flex gap-1 text-sm items-center"><img src="https://game-tournaments.com/media/flags/3.svg" class="w-3.5" /> Russian Federation</div>
          </div>

          <a href="/">
            <picture>
              <source srcset="https://game-tournaments.com/media/logo/_60/t12950.webp" type="image/webp" />
              <source srcset="https://game-tournaments.com/media/logo/_60/t12950.png" />
              <img src="https://game-tournaments.com/media/logo/p2888.webp" class="w-10" />
            </picture>
          </a>

          <div class="flex flex-col content-center items-center border border-slate-700 rounded px-2 py-0.5">
            <div class="text-xs">raiting:</div>
            <div class="text-[26px] font-bold text-primary">681</div>
          </div>
        </div>

        <div class="text-xs mt-2"><label>This user has also played as:</label> Pk, pQ H, RAMZES666, RAMZES666 / Roman Kushnar, remember me, sexydog, STALIANER, STALIANER666, tehniquepavel, terrorblade, v, W-k, Welcome to Chilladelphia</div>

        <table class="mt-3 table-fixed text-xs text-left text-base-content">
          <tbody>
            <tr>
              <th class="w-36">Top places</th>
              <td>
                <div class="flex gap-1">
                  <span class="badge badge-sm badge-warning pl1">5</span>
                  <span class="badge badge-sm badge-secondary pl2">3</span>
                  <span class="badge badge-sm badge-outline pl3">1</span>
                </div>
              </td>
            </tr>
            <!-- <tr>
              <th>Name</th>
              <td>Joshua H. Maraño</td>
            </tr> -->
            <tr>
              <th>Age</th>
              <td>22 years</td>
            </tr>
            <!-- <tr>
              <th>Country</th>
              <td>Philippines <img class="flag float-right" src="/media/flags/29.svg" /></td>
            </tr> -->
            <tr>
              <th>Team</th>
              <td>
                <a href="/">Geek</a>
              </td>
            </tr>
            <tr>
              <th>Role</th>
              <td>Offlane <IconInfo filled class="tooltip cursor-pointer hover:text-primary" data-tip="Offlane=57%, Mid=42%" /></td>
            </tr>
            <tr>
              <th>Earned</th>
              <td class="scm" data-value="$34869">$34K</td>
            </tr>
            <tr>
              <th>Matches played</th>
              <td>56 / <span class="text-secondary">298</span> <IconInfo filled class="tooltip cursor-pointer hover:text-primary" data-tip="Last Year / All Time" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Dota2, CS2, Hs, Lol, Ow, Pubg, Fortnite, IconInfo } from "@/assets/icons";

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
