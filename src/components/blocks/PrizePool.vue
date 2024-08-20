<template>
  <div class="relative flex items-center grow py-3 px-3  border border-gray-300 border-b-0 rounded-t-md mt-6">
    <h1 class="flex-shrink mr-4 font-black text-sm text-black">Prize pool of current Events</h1>
  </div>
  <div class="border border-gray-300 rounded-b-md mb-6">
    <template v-for="(event, index) in events">
      <SmallRow :event="event" />
    </template>
  </div>
</template>

<script setup lang="ts">
import SmallRow from '../../components/events/SmallRow.vue';
import events from '../../assets/dumb/events.json'
</script>