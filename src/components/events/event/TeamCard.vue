<template>
  <a href="/" class="flex p-3 flex-col gap-5 text-primary hover:text-primary border border-slate-800 rounded transition hover:border-slate-500  items-center">
    <figure class="overflow-hidden flex h-18 p-2 items-center flex-nowrap">
      <img :src="team.src" :alt="team.name" class="h-12" />
    </figure>
    <div class="flex flex-col gap-2 text-center">
      <div class="leading-tight">{{ team.name }}</div>
      <div class="text-base-content text-sm">{{ team.type }}</div>
    </div>
  </a>
</template>
<script setup lang="ts">
const props = defineProps<{
  team: { name: string; id: number; src: string; type: string };
}>();
</script>

<style scoped lang="scss"></style>
