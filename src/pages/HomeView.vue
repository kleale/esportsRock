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
            
            <OtherArticles />
            <SignUpBlock />
          </div>

          <div class="col-span-1 lg:col-span-4">
            <UpcomingMatches />
            <B330/>
            <PrizePool />
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
    </div>
  </div>
</template>

<script setup lang="ts">
import Pagination from '../components/common/Pagination.vue';
import Bnr1050 from '../components/banners/Bnr1050.vue';
import NewsCardVertical from '../components/news/NewsCardVertical.vue';
import NewsCardHorizantal from '../components/news/NewsCardHorizantal.vue';
import news from '../assets/dumb/news.json'
import SignUpBlock from '../components/blocks/SignUpBlock.vue';
import Textblocksmall from '../components/blocks/Textblocksmall.vue';
import B330 from '../components/banners/B330.vue';
import OtherArticles from '@/components/blocks/OtherArticles.vue';
import UpcomingMatches from '@/components/blocks/UpcomingMatches.vue';
import PrizePool from '@/components/blocks/PrizePool.vue';

</script>

<style scoped></style>