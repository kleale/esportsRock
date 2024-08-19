<template>
  <div class="transition flex flex-row gap-6 mb-6">
    <a href="#" class="lg:w-48 w-36 transition hover:opacity-80">
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
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: { title: string, description?: string, id: number, src: string, game: any, isImg?: boolean, date?: string, time?: string }
}>()
</script>
