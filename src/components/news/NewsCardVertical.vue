<template>
  <div class="newsCard">
    <a href="#/newspage" class="transition shadow-xl hover:opacity-80">
      <img :src="data.src" alt="news" style="width: 100%" class="rounded" />
    </a>
    <div class="py-5 px-4">
      <div class="flex justify-between text-gray-500 pb-2 text-sm">
        {{ data.date }} {{ data.time }}
        <span class="uppercase text-[#9BD100]">{{ data.game }}</span>
      </div>
      <a href="#" class="transition hover:opacity-80">
        <h5 class="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">{{ data.title }}</h5>
      </a>
      <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">{{ data.description }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: { title: string, description?: string, id: number, src: string, game: any, isImg?: boolean, date?: string, time?: string }
}>()
</script>
