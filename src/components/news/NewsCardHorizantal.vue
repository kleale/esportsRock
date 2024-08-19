<template>
  <div class="transition flex lg:flex-row flex-col gap-6 mb-6">
    <a href="#" class="lg:w-48 w-full transition hover:opacity-80">
      <picture class="figure flex justify-center bg-base-100 shadow-xl overflow-hidden rounded border border-slate-700">
        <img :src="data.src" alt="news" style="width: 100%" class="rounded" />
      </picture>
    </a>
    <div class="flex grow flex-col flex-1">
      <div class="flex justify-between text-gray-500 pb-1 text-sm">
        {{ data.date }} {{ data.time }}
        <span class="uppercase text-[#9BD100]">{{ data.game }}</span>
      </div>
      <a href="#">
        <h5 class="mb-1 text-l font-bold leading-tight text-gray-900 dark:text-white">{{ data.title }}</h5>
      </a>
      <p class="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">{{ data.description }}</p>
      <!-- <div class="pl-5 flex items-end content-end text-base-content">
        <component :is="data.game" :fontControlled="false" class="w-6" />
      </div> -->
      <!-- <a href="#"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </a> -->
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: { title: string, description?: string, id: number, src: string, game: any, isImg?: boolean, date?: string, time?: string }
}>()
</script>
