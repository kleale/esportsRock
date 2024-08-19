<template>
  <div :class="event.isLive ? 'isLive' : ''" class="flex border-b border-b-slate-800 odd:bg-slate-800 odd:bg-opacity-10 last:border-0 hover:bg-opacity-10 hover:bg-gray-700">
    <a href="#" class="flex grow items-center gap-5 h-10 text-primary">
      <div class="flex items-start md:items-center pl-4 w-[35px] text-secondary">
        <component :is="event.game" :fontControlled="false" class="w-4 md:w-5" />
      </div>
      <div class="flex-1 flex items-center gap-2">
        <div class="text-sm hover:underline line-clamp-1">
          {{ event.name }}
        </div>
        <span class="text-xs text-slate-500">
          {{ event.price }}
        </span>
      </div>
      <div class="text-xs text-right text-secondary w-20 line-clamp-2">
        {{ event.date }}
        {{ event.time }}
      </div>
      <div  class="pr-3">
        <span href="/" class="tooltip w-5 md:w-5 flex justify-center" :data-tip="event.name">
          <img class="h-5 md:h-5 max-w-full" :src="event.eIcon" :alt="event.name" />
        </span>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
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
  background-color: #172429;
}
</style>
