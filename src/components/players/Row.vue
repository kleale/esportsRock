<template>
  <tr class="text-sm border-b border-b-slate-800 odd:bg-slate-800 odd:bg-opacity-10 hover:bg-opacity-10 hover:bg-gray-700">
    <td scope="col" class="py-3 px-1 text-right"><!-- #2222--></td>
    <td scope="col" class="py-3 px-1"><a href="/" class="flex gap-2 text-primary" ><img :src="player.flag" :alt="player.name" class="w-4"/> {{ player.name }}</a></td>
    <td scope="col" class="py-3 px-1">{{ player.role }}</td>
    <td scope="col" class="py-3 px-1">{{ player.raiting }}</td>
    <td scope="col" class="py-3 px-1">{{ player.money }}</td>
    <td scope="col" class="py-3 px-1">{{ player.lastmatch }}</td>
    <td scope="col" class="py-3 px-1 text-center"><a href="/" class="text-primary tooltip" :data-tip="player.team"><img :src="player.teamIco" :alt="player.team" class="w-6"/></a></td>
  </tr>
</template>

<script setup lang="ts">
interface IPlayer {
  id: number;
  name: string;
  src: string;
  role: string;
  flag: string;
  raiting: string;
  money: string;
  lastmatch: string;
  team: string;
  teamIco: string;
}

const props = defineProps<{
  player: IPlayer;
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
