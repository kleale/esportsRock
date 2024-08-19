<template>
  <div :class="event.isLive ? 'isLive' : ''"
    class="flex border-b odd:bg-gray-100 last:border-0 hover:bg-gray-200">
    <a href="#" class="flex grow items-center gap-1 h-10">
      <div class="flex-1 flex items-start gap-1 pl-2">
        <div class="text-xs hover:underline line-clamp-1">
           {{ event.name }}
        </div>
        <span v-if="event.isLive" class="bg-red-100 text-red-800 text-xs font-medium px-1 rounded dark:bg-red-900 dark:text-red-300">live</span>
      </div>
      <div class="text-xs text-right line-clamp-2">
        {{ event.price }} <br>
        {{ event.date }}
      </div>
      <div class="px-1">
        <span href="/" class="tooltip w-5 md:w-5 flex justify-center" :data-tip="event.name">
          <img class="h-5 md:h-5 max-w-full" :src="event.eIcon" :alt="event.name" />
        </span>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isScore = ref(false);
const onShowScore = () => {
  isScore.value = !isScore.value;
};

interface IEvent {
  id: number;
  name: string;
  game: string;
  price: string;
  date: string;
  time: string;
  isLive: boolean;
  eIcon: string;
  src: string;
}

const props = defineProps<{
  event: IEvent;
}>();
</script>
<style scoped lang="scss">
.bg-odd {
  background-color: #23232b;
}

.isLive {
  background-color: #daff84;
}
</style>
