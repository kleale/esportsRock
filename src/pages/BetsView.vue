<template>
    <div class="max-w-6xl bg-white rounded-lg">
      <div class="p-4">
  
        <Bnr1050 />

        <div class="relative flex py-2 items-center grow">
          <h1 class="flex-shrink mr-4 font-black text-l text-black uppercase">Bets CS:GO</h1>
          <div class="flex-grow border-t border-gray-300"></div>
        </div>
  
        <div>
         
  
          <div class="grid grow grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1380px]">
            <div class="col-span-1 lg:col-span-8">
               
                
              <div class="last:border-0 pb-6">
                <NewsRow :data="item" v-for="(item, index) in news.slice(2, 5)" />
              </div>
              <SignUpBlock />
            </div>
  
            <div class="col-span-1 lg:col-span-4">
              
              <B330/>
             
              
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
  import NewsRow from '../components/news/NewsRow.vue';
  import NewsCardVertical from '../components/news/NewsCardVertical.vue';
  import NewsCardHorizantal from '../components/news/NewsCardHorizantal.vue';
  import news from '../assets/dumb/news.json'
  import events from '../assets/dumb/events.json'
  import matches from '../assets/dumb/matches.json'
  import SignUpBlock from '../components/blocks/SignUpBlock.vue';
  import Textblocksmall from '../components/blocks/Textblocksmall.vue';
  import SmallRow from '../components/events/SmallRow.vue';
  import MatchSmallRow from '../components/matches/MatchSmallRow.vue';
  import B330 from '../components/banners/B330.vue';
  
  </script>
  
  <style scoped></style>