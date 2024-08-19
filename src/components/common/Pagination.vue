<template>
  <nav aria-label="Page navigation">
    <ul class="inline-flex -space-x-px text-xs">
      <!-- <li>
        <a href="#" class="flex items-center justify-center px-2 h-7 ms-0 leading-tight text-gray-500 bg-gray-100 rounded-s-lg hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
      </li> -->
      <li>
        <a href="#" class="flex items-center justify-center px-2 h-7 leading-tight text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-s-md hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
      </li>
      <li>
        <a href="#" class="flex items-center justify-center px-2 h-7 leading-tight text-gray-500 bg-gray-100 hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
      </li>
      <li>
        <a href="#" aria-current="page" class="flex items-center justify-center px-2 h-7 text-black  bg-gray-200 hover:bg-gray-200 hover:text-black dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
      </li>
      <li>
        <a href="#" class="flex items-center justify-center px-2 h-7 leading-tight text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-e-md hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
      </li>
      <!-- <li>
        <a href="#" class="flex items-center justify-center px-2 h-7 leading-tight text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-e-md hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
      </li> -->
      <!-- <li>
        <a href="#" class="flex items-center justify-center px-2 h-7 leading-tight text-gray-500 bg-gray-100 rounded-e-lg hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
      </li> -->
    </ul>
  </nav>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'

const props = defineProps<{
  size?: string
}>();

const pages = [1, 3, 4, 5, 6, 7]

const selected = ref(pages[1])
</script>