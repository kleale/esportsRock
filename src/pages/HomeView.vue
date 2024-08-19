<template>
  <div class="max-w-6xl bg-white rounded-lg">
    <div class="p-4">

      <Bnr1050 />
      <div class="relative flex py-2 items-center grow">
        <h1 class="flex-shrink mr-4 font-black text-l text-black uppercase">Новости CS:GO</h1>
        <div class="flex-grow border-t border-gray-300"></div>
      </div>

      <div>
        <div class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <template v-for="(item, index) in news.slice(0, 4)">
            <NewsCardVertical :data="item" />
          </template>
        </div>

        <div class="grid grow grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1380px]">
          <div class="col-span-1 lg:col-span-8">
            <div class="relative flex py-2 items-center grow">
              <h1 class="flex-shrink mr-4 font-black text-xl text-black uppercase">TOP ESPORTS NEWS</h1>
              <div class="flex-grow border-t border-gray-300"></div>
            </div>
            <div>
              <template v-for="(item, index) in news.slice(0, 10)">
                <NewsCardHorizantal :data="item" />
              </template>
            </div>
            <div class="relative flex py-2 items-center grow">
              <div class="flex-grow border-t border-gray-300"></div>
              <h1 class="flex-shrink mx-4">
                <Pagination />
              </h1>
              <div class="flex-grow border-t border-gray-300"></div>
            </div>
            <div class="relative flex py-4 items-center grow mt-5">
              <h1 class="flex-shrink mr-4 font-black text-md text-black uppercase">Other Articles</h1>
              <div class="flex-grow border-t border-gray-300"></div>
            </div>
            <div class="last:border-0 pb-6">
              <NewsRow :data="item" v-for="(item, index) in news.slice(2, 5)" />
            </div>
            <SignUpBlock />
          </div>

          <div class="col-span-1 lg:col-span-4">
            <div class="relative flex items-center grow py-3 px-3  border border-gray-300 rounded-t-md">
              <h1 class="flex-shrink mr-4 font-black text-sm text-black">Upcoming matches</h1>
            </div>
            <div class="border border-gray-300 rounded-b-md mb-6">

              <template v-for="(match, index) in matches.slice(0, 10)">
                <MatchSmallRow :match="match" />
              </template>

              <div class="relative flex items-center grow py-2">
                <div class="flex-grow"></div>
                <h1 class="flex-shrink mx-4">
                  <Pagination size="small" />
                </h1>
                <div class="flex-grow"></div>
              </div>
            </div>
            <B330/>
            <div class="relative flex items-center grow py-3 px-3  border border-gray-300 border-b-0 rounded-t-md mt-6">
              <h1 class="flex-shrink mr-4 font-black text-sm text-black">Prize pool of current Events</h1>
            </div>
            <div class="border border-gray-300 rounded-b-md mb-6">
              <template v-for="(event, index) in events">
                <SmallRow :event="event" />
              </template>
            </div>
            <Textblocksmall>
              <template v-slot:header-extra>
                Stream and video, teams and players, statistics and analytics
              </template>
              You can find all Dota 2 and CS:GO matches, watch streams and videos, look for detailed statistics on the
              teams,
              players and games, make predictions for the games and sell subscriptions for them. Follow Esports!
            </Textblocksmall>
          </div>
        </div>
      </div>

      <!-- <h4 class="mb-2 mt-5 text-m font-extrabold text-gray-900 dark:text-white md:text-l">
        30 января
      </h4>
      <div v-for="item in news" :key="item.id">
        <router-link to="/newspage"
          class="text-xs flex items-center  font-normal leading-1 p-3 hover:bg-[#ffffff05] border-b border-gray-700 hover:dark:text-gray-100"
          href="#">
          <span class="">{{ item.time }}</span> <span class="font-bold ml-2 mr-2 text-apple">{{
            item.game
          }}</span>
          <span v-if="item.type === 'ex'"
            class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Эксклюзив</span>
          <span v-if="item.type === 'video'"
            class="bg-lime-100 text-lime-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-lime-900 dark:text-lime-300">видео</span>
          <span v-if="item.type === 'int'"
            class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">интервью</span>
          {{ item.title }}
        </router-link>
      </div> -->
      <!-- <Pagination /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import Pagination from '../components/common/Pagination.vue';
import Bnr1050 from '../components/banners/Bnr1050.vue';
import NewsRow from '../components/news/NewsRow.vue';
import NewsCardVertical from '../components/news/NewsCardVertical.vue';
import NewsCardHorizantal from '../components/news/NewsCardHorizantal.vue';
import news from '../assets/dumb/news.json'
import events from '../assets/dumb/events.json'
import matches from '../assets/dumb/matches.json'
import SignUpBlock from '../components/common/SignUpBlock.vue';
import Textblocksmall from '../components/common/Textblocksmall.vue';
import SmallRow from '../components/events/SmallRow.vue';
import MatchSmallRow from '../components/matches/MatchSmallRow.vue';
import B330 from '../components/banners/B330.vue';

</script>

<style scoped></style>