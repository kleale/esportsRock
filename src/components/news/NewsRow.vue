<template>
  <a href="#/newspage"
    class="flex lg:flex-row flex-col gap-3 py-4 text-black transition border-b border-gray-300 last:border-0 hover:opacity-80 first:pt-0">
    <div v-if="data.isImg">
      <div class="relative">
        <figure class="rounded">
          <img :src="data.src" alt="news" class="rounded shadow-xl lg:max-w-[105px] max-w-full" />
        </figure>
        <div v-if="data.isImg" class="opacity-95 font-light absolute time text-xs text-white">
          <span>{{ data.date }} {{ data.time }}</span>
        </div>
      </div>
    </div>
    <div class="flex flex-row flex-1 grow">
      <div :class="'flex flex-col flex-1 grow' && type == 'dark' && 'text-white'">
        <h3 class="text-xs leading-relaxed">
          <span class="font-bold opacity-75 mr-2" v-if="!data.isImg">{{ data.date }} {{ data.time }}</span> <span
            v-if="!data.type">&nbsp;•&nbsp;</span>
          <span v-if="data.type === 'ex'"
            class="bg-yellow-100 text-yellow-800 text-xs font-medium  px-1  rounded dark:bg-yellow-900 dark:text-yellow-300">EX</span>
          <span v-if="data.type === 'video'"
            class="bg-lime-100 text-lime-800 text-xs font-medium  px-1   rounded dark:bg-lime-900 dark:text-lime-300">VID</span>
          <span v-if="data.type === 'int'"
            class="bg-purple-100 text-purple-800 text-xs font-medium  px-1   rounded dark:bg-purple-900 dark:text-purple-300">INT</span>
          <span class="title mr-1 ml-2">{{ data.title }} {{ type }}</span> &bullet;
          <span class="uppercase text-lime-500 ml-1">{{ data.game }}</span>
        </h3>
      </div>
    </div>
  </a>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: { title: string; id: number; src: string; game: any; isImg?: boolean; date: string; time?: string; type?: string };
  type?: string
}>();
</script>
<style scoped lang="scss">
.time {
  bottom: -5px;
  padding: 5px 12px;

  background: linear-gradient(180deg, #1E1E1E 0%, #2F322D 100%);
  mix-blend-mode: normal;
  border-radius: 0px 5px 0px 0px;
  z-index: 2;

}
</style>
