<template>
  <nav aria-label="Page navigation example pt-2">
    <ul class="inline-flex -space-x-px text-sm">
      <li>
        <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
      </li>
      <li>
        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
      </li>
      <li>
        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
      </li>
      <li>
        <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
      </li>
      <li>
        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
      </li>
      <li>
        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
      </li>
      <li>
        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
      </li>
    </ul>
  </nav>

  <!-- <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm pt-2" aria-label="Pagination">
    <a href="#" class=" inline-flex items-center rounded-full px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-white">
      <span class="sr-only">Previous</span>
      <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
    </a> 
    <a href="#" aria-current="page" class=" z-10 inline-flex items-center bg-lime-50 px-4 py-2 text-sm font-medium text-lime-600 hover:text-white
            rounded-full dark:bg-gray-700 dark:text-gray-400 ">1</a>
    <a href="#"
      class="rounded-full  inline-flex items-center text-center  px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:dark:bg-gray-600 hover:text-white">2</a>
    <a href="#"
      class="rounded-full items-center px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:dark:bg-gray-600 hover:text-white">3</a>
    <span class="rounded-full inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700">...</span>
    <a href="#"
      class="rounded-full items-center px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:dark:bg-gray-600 hover:text-white">8</a>
    <a href="#"
      class="rounded-full inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:dark:bg-gray-600 hover:text-white">9</a>
    <a href="#"
      class="rounded-full inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:dark:bg-gray-600 hover:text-white">10</a>
    <a href="#"
      class="rounded-full inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:dark:bg-gray-600 hover:text-white">
      <span class="sr-only">Next</span>
      <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
    </a>
  </nav> -->
</template>
  
<script setup>
import { ref } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'

const pages = [1, 3, 4, 5, 6, 7]

const selected = ref(pages[1])
</script>