<template>
    <div class="max-w-6xl bg-white rounded-lg" >
        <div class="flex flex-col w-full">
        <div class="flex flex-col md:flex-row items-center p-3 border-b  ">
            <h1 class="text-l font-bold text-gray-900  grow pl-1 w-full md:pb-0">Новости CS:GO</h1>
        </div>
        <div class="p-4">
            <h4 class="mb-2 text-m font-extrabold text-gray-900 dark:text-white md:text-l">
            1 февраля
            </h4>
            <div v-for="item in items" :key="item.id">
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
            </div>

            <h4 class="mb-2 mt-5 text-m font-extrabold text-gray-900 dark:text-white md:text-l">
            30 января
            </h4>
            <div v-for="item in items" :key="item.id">
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
            </div>
            <Pagination />
        </div>
        </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import NewsBlock from '../components/matchesList/NewsBlock.vue';
  import { ref } from 'vue'
  import Pagination from '../components/matchesList/Pagination.vue';
  const items = ref([
    { id: '0', time: "12:00", date: "", game: "CS:GO", type: "video", title: "Менеджер проектов StarLadder: «Miracle получил визу, но не полетел в Китай из-за личных обстоятельств»" },
    { id: '1', time: "12:00", date: "", game: "CS:GO", type: "ex", title: "ESL отключил интервью buster в середине речи — вместо него появилась студия аналитики" },
    { id: '2', time: "12:00", date: "", game: "Dota2", type: "", title: "Buster дебютировал за Cloud9 с победы на IEM Katowice 2023" },
    { id: '3', time: "12:00", date: "", game: "Dota2", type: "int", title: "Npl сыграл за NAVI Junior — его рейтинг составил 0,92" },
    { id: '4', time: "12:00", date: "", game: "Dota2", type: "", title: "M0NESY стал самым быстрым снайпером, s1mple — лучший клатчер BLAST Premier Spring Groups 2023" },
    { id: '5', time: "12:00", date: "", game: "Dota2", type: "", title: "Tenderlybae впервые сняла маску в новом клипе «Ломай»" },
    { id: '6', time: "12:00", date: "", game: "Dota2", type: "", title: "Ax1Le о камбэках Cloud9: «Никогда не хочется уезжать с пустыми руками»" },
  ])
  </script>
  
  <style scoped>
  
  </style>