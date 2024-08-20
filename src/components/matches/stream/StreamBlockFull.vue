import type { MatchesStreamPlayer } from '#build/components'; import type { MatchesStreamItem } from '#build/components';
<template>
  <div class="grid grid-cols-12 gap-5 pb-2">
    <div class="col-span-12 md:col-span-8 bg-gray-100 rounded">
      <Player />
    </div>
    <div class="col-span-12 md:col-span-4 gap-5">
      <div class="flex flex-col gap-2 max-h-[400px] overflow-y-auto scroll pl-2">
        <template v-for="(stream, index) in streams">
          <StreamItem :stream="stream" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Dota2, CS2, Hs, Lol, Ow, Pubg, Fortnite } from "@/assets/icons";
import Player from "./Player.vue";
import StreamItem from "./StreamItem.vue";

const streams = [
  { id: 0, isActive: true, streamSrc: "https://static-cdn.jtvnw.net/jtv_user_pictures/86203c57-555c-40be-b412-6bbba5a16027-profile_image-70x70.png", name: "ENG Talon vs Mansion Army Geniuses I Summer Tour", views: "11923", t1: "Astralis", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "The Mongolz", t2Icon: "https://escorenews.com/media/logo/_60/t5270.webp", game: Dota2, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: true, map: 1, event_id: 1, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8382.webp", type: "BO3" },
  { id: 1, isActive: false, streamSrc: "https://static-cdn.jtvnw.net/jtv_user_pictures/0de8d424-622c-40b7-94f4-edc925bf26b8-profile_image-70x70.jpg", name: "(RU) Talon Esports vs Army Geniuses | DPC SEA 2023...", views: "11923+1", t1: "Dota Geniuses", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "Flawless Goblins", t2Icon: "https://escorenews.com/media/logo/_60/t56255.webp", game: CS2, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 2, event_id: 2, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8401.webp", type: "BO3" },
  { id: 2, isActive: false, streamSrc: "https://static-cdn.jtvnw.net/jtv_user_pictures/31692eb4-a9d7-4f7a-82b2-10927196a891-profile_image-70x70.png", name: "Джейсон Стэтхэм на 45% тренирует в доту | пати с ", views: "4741", t1: "Astralis", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "The Mongolz", t2Icon: "https://escorenews.com/media/logo/_60/t5270.webp", game: Lol, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 1, event_id: 1, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e7632.webp", type: "BO3" },
  { id: 3, isActive: false, streamSrc: "https://static-cdn.jtvnw.net/jtv_user_pictures/ee48f3be-d8a3-4fcf-a47b-d2cf4b4f03df-profile_image-70x70.png", name: "Team Liquid vs OG | DPC WEU 2023 Tour 3: Division I | Ca", views: "2783", t1: "Dota Geniuses", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "Flawless Goblins", t2Icon: "https://escorenews.com/media/logo/_60/t56255.webp", game: Fortnite, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 2, event_id: 2, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8382.webp", type: "BO3" },
  { id: 4, isActive: false, streamSrc: "https://static-cdn.jtvnw.net/jtv_user_pictures/1e4db248-0933-43bc-a19f-dca928687508-profile_image-70x70.png", name: "DOTA 2 [RU] Team Liquid vs OG [bo3] DPC WEU  2023 Tour", views: "1330", t1: "Astralis", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "The Mongolz", t2Icon: "https://escorenews.com/media/logo/_60/t5270.webp", game: Dota2, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 1, event_id: 1, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8382.webp", type: "BO3" },
  { id: 5, isActive: false, streamSrc: "https://static-cdn.jtvnw.net/jtv_user_pictures/b880d4ea-9d95-4ffc-a1f3-00eb1cb332ae-profile_image-70x70.png", name: "ВЕЛИЧАЙШАЯ ЛЕГЕНДА ДОТА3", views: "541", t1: "Dota Geniuses", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "Flawless Goblins", t2Icon: "https://escorenews.com/media/logo/_60/t56255.webp", game: CS2, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 2, event_id: 2, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8401.webp", type: "BO3" },
  { id: 3, isActive: false, streamSrc: "https://static-cdn.jtvnw.net/jtv_user_pictures/ee48f3be-d8a3-4fcf-a47b-d2cf4b4f03df-profile_image-70x70.png", name: "Team Liquid vs OG | DPC WEU 2023 Tour 3: Division I | Ca", views: "2783", t1: "Dota Geniuses", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "Flawless Goblins", t2Icon: "https://escorenews.com/media/logo/_60/t56255.webp", game: Fortnite, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 2, event_id: 2, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8382.webp", type: "BO3" },
  { id: 4, isActive: false, streamSrc: "https://static-cdn.jtvnw.net/jtv_user_pictures/1e4db248-0933-43bc-a19f-dca928687508-profile_image-70x70.png", name: "DOTA 2 [RU] Team Liquid vs OG [bo3] DPC WEU  2023 Tour", views: "1330", t1: "Astralis", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "The Mongolz", t2Icon: "https://escorenews.com/media/logo/_60/t5270.webp", game: Dota2, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 1, event_id: 1, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8382.webp", type: "BO3" },
  { id: 5, isActive: false, streamSrc: "https://static-cdn.jtvnw.net/jtv_user_pictures/b880d4ea-9d95-4ffc-a1f3-00eb1cb332ae-profile_image-70x70.png", name: "ВЕЛИЧАЙШАЯ ЛЕГЕНДА ДОТА3", views: "541", t1: "Dota Geniuses", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "Flawless Goblins", t2Icon: "https://escorenews.com/media/logo/_60/t56255.webp", game: CS2, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 2, event_id: 2, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8401.webp", type: "BO3" },
];
</script>

<style scoped></style>
