import type { EventsCard } from '#build/components';
<template>
  <CommonBlocklayout header="Live events">
    <template v-slot:header-extra>
      <CommonGamelinks />
    </template>
    <div class="flex flex-col gap-5 bg-base-100">
      <div class="flex flex-row gap-5 p-5">
        <div class="carousel rounded">
          <template v-for="(event, index) in events">
            <div class="carousel-item md:w-[260px]">
              <EventsCard :data="event" />
            </div>
          </template>
        </div>
      </div>
    </div>
  </CommonBlocklayout>
  <!-- <div class="flex justify-center">
    <CommonPagination />
  </div> -->
</template>

<script setup lang="ts">
import { Dota2, CS2, Hs, Lol, Ow, Pubg, Fortnite } from "@/assets/icons";

const events = [
  {
    id: 0,
    name: "ESL One Birmingham 2024",
    game: Dota2,
    price: "$100K",
    date: "April 22, 2024",
    time: "11:34",
    isLive: true,
    eIcon: "https://escorenews.com/media/event/_120/e8564.webp",
    src: "https://escorenews.com/media/tournament/_300/e8564.webp",
  },
  {
    id: 1,
    name: "DreamLeague Season 22",
    game: Dota2,
    price: "$1M",
    date: "February 13, 2024",
    time: "11:34",
    isLive: false,
    eIcon: "https://escorenews.com/media/event/_120/e8562.webp",
    src: "https://escorenews.com/media/tournament/_300/e8562.webp",
  },
  {
    id: 2,
    name: "ESB Liga 2024 Tour 2",
    game: Dota2,
    price: "$500K",
    date: "January 13, 2024",
    time: "11:34",
    isLive: false,
    eIcon: "https://escorenews.com/media/event/_120/e8659.webp",
    src: "https://escorenews.com/media/tournament/_300/e8659.webp",
  },
  {
    id: 3,
    name: "Winline Insight Season 4",
    game: Lol,
    price: "$10K",
    date: "10 ноября - 24 декабря 2023",
    time: "11:34",
    isLive: false,
    eIcon: "https://escorenews.com/media/event/_120/e8527.webp",
    src: "https://escorenews.com/media/tournament/_300/e8527.webp",
  },
];
</script>

<style scoped lang="scss">
.carousel {
  gap: 25px;

  .carousel-item {
  }
}
</style>
