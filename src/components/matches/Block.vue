<template>
  <CommonBlocklayout header="Best matches of the day">
    <template v-slot:header-extra>
      <a class="tooltip p-1 text-secondary hover:text-white hover:cursor-pointer" data-tip="Refresh">
        <IconRefresh class="w-6" filled :fontControlled="false" />
      </a>
      <div class="divider divider-horizontal m-0 h-6 self-center"></div>
      <a @click="setActiveScoreMode()" :class="activeScoreMode ? 'text-white' : ''" class="tooltip p-1 text-secondary hover:text-white hover:cursor-pointer" data-tip="Show the score">
        <IconScore class="w-6" filled :fontControlled="false" />
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
import { IconRefresh, IconScore } from "@/assets/img/icons/";
import { Dota2, CS2, Hs, Lol, Ow, Pubg, Fortnite } from "@/assets/img/icons/";

const matches = [
  { id: 0, t1: "Astralis", t1Icon: "/img/none/teamNoLogo.svg", t2: "The Mongolz", t2Icon: "https://escorenews.com/media/logo/_60/t5270.webp", game: Dota2, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: true, map: 1, event_id: 1, eventName: "ESEA Open Season 47", eIcon: "/img/none/tourNoLogo.svg", type: "BO3" },
  { id: 1, t1: "Dota Geniuses", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "Flawless Goblins", t2Icon: "https://escorenews.com/media/logo/_60/t56255.webp", game: CS2, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 2, event_id: 2, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8401.webp", type: "BO3" },
  { id: 2, t1: "Astralis", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "The Mongolz", t2Icon: "https://escorenews.com/media/logo/_60/t5270.webp", game: Lol, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 1, event_id: 1, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e7632.webp", type: "BO3" },
  { id: 3, t1: "Dota Geniuses", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "Flawless Goblins", t2Icon: "https://escorenews.com/media/logo/_60/t56255.webp", game: Fortnite, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 2, event_id: 2, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8382.webp", type: "BO3" },
  { id: 4, t1: "Astralis", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "The Mongolz", t2Icon: "https://escorenews.com/media/logo/_60/t5270.webp", game: Dota2, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 1, event_id: 1, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8382.webp", type: "BO3" },
  { id: 5, t1: "Dota Geniuses", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "Flawless Goblins", t2Icon: "https://escorenews.com/media/logo/_60/t56255.webp", game: CS2, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 2, event_id: 2, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8401.webp", type: "BO3" },
  { id: 6, t1: "Astralis", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "The Mongolz", t2Icon: "https://escorenews.com/media/logo/_60/t5270.webp", game: Lol, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 1, event_id: 1, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e7632.webp", type: "BO3" },
  { id: 7, t1: "Dota Geniuses", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "Flawless Goblins", t2Icon: "https://escorenews.com/media/logo/_60/t56255.webp", game: Fortnite, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 2, event_id: 2, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8382.webp", type: "BO3" },
  { id: 8, t1: "Astralis", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "The Mongolz", t2Icon: "https://escorenews.com/media/logo/_60/t5270.webp", game: Dota2, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 1, event_id: 1, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8382.webp", type: "BO3" },
  { id: 9, t1: "Dota Geniuses", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "Flawless Goblins", t2Icon: "https://escorenews.com/media/logo/_60/t56255.webp", game: CS2, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 2, event_id: 2, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8401.webp", type: "BO3" },
  { id: 10, t1: "Astralis", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "The Mongolz", t2Icon: "https://escorenews.com/media/logo/_60/t5270.webp", game: Lol, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 1, event_id: 1, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e7632.webp", type: "BO3" },
  { id: 11, t1: "Dota Geniuses", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "Flawless Goblins", t2Icon: "https://escorenews.com/media/logo/_60/t56255.webp", game: Fortnite, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 2, event_id: 2, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8382.webp", type: "BO3" },
  { id: 12, t1: "Astralis", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "The Mongolz", t2Icon: "https://escorenews.com/media/logo/_60/t5270.webp", game: Dota2, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 1, event_id: 1, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8382.webp", type: "BO3" },
  { id: 14, t1: "Dota Geniuses", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "Flawless Goblins", t2Icon: "https://escorenews.com/media/logo/_60/t56255.webp", game: CS2, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 2, event_id: 2, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8401.webp", type: "BO3" },
  { id: 14, t1: "Astralis", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "The Mongolz", t2Icon: "https://escorenews.com/media/logo/_60/t5270.webp", game: Lol, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 1, event_id: 1, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e7632.webp", type: "BO3" },
  { id: 15, t1: "Dota Geniuses", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "Flawless Goblins", t2Icon: "https://escorenews.com/media/logo/_60/t56255.webp", game: Fortnite, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 2, event_id: 2, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8382.webp", type: "BO3" },
];

const activeScoreMode = ref(false);
const setActiveScoreMode = () => {
  activeScoreMode.value = !activeScoreMode.value;
};
</script>
<style scoped></style>
