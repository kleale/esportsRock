<template>
  <div>
    <div class="hidden md:flex" v-if="!isCompact">
      <template v-for="(game, index) in games">
        <a href="" class="tooltip p-2 text-secondary hover:text-white" :data-tip="game.name">
          <component :is="game.logo" :fontControlled="false" class="w-5" />
        </a>
      </template>
    </div>
    <div class="dropdown" :class="isCompact ? '': 'md:hidden'">
      <div tabindex="0" role="button" class="text-secondary hover:text-primary btn btn-sm btn-ghost">
        <component :is="games[0].logo" :fontControlled="false" class="w-5" />
        <svg width="12px" height="12px" class="h-2 w-2 fill-current opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
      </div>
      <ul tabindex="0" class="dropdown-content z-[2] menu p-2 shadow bg-base-100 rounded-box w-22">
        <template v-for="(game, index) in games">
          <li>
            <a href="" class="tooltip p-2 text-secondary hover:text-white" :data-tip="game.name">
              <component :is="game.logo" :fontControlled="false" class="w-5" />
            </a>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  isCompact?: boolean;
}>();

import { Dota2, CS2, Hs, Lol, Ow, Pubg, Fortnite } from "@/assets/img/icons/";

const games = [
  {
    name: "DOTA2",
    href: "/dota-2",
    current: true,
    logo: Dota2,
  },
  {
    name: "CS2",
    href: "/",
    current: false,
    logo: CS2,
  },
  {
    name: "League of Legends",
    href: "/",
    current: false,
    logo: Lol,
  },
  {
    name: "Heartstone",
    href: "/",
    current: false,
    logo: Hs,
  },
  {
    name: "Overwatch",
    href: "/",
    current: false,
    logo: Ow,
  },
  {
    name: "Fortnite",
    href: "/",
    current: false,
    logo: Fortnite,
  },
  {
    name: "Pubg",
    href: "/",
    current: false,
    logo: Pubg,
  },
];
</script>
