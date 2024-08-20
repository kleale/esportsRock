<template>
  <div class="relative flex py-4 items-center grow mt-5">
    <h1 class="flex-shrink mr-4 font-black text-md text-black uppercase">Other Articles</h1>
    <div class="flex-grow border-t border-gray-300"></div>
  </div>
  <div class="last:border-0 pb-6">
    <NewsRow :data="item" v-for="(item, index) in news.slice(2, 5)" />
  </div>
</template>

<script setup lang="ts">
import NewsRow from '../../components/news/NewsRow.vue';
import news from '../../assets/dumb/news.json'
</script>