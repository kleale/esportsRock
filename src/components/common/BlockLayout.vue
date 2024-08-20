<template>
  <div>
    <div class="flex flex-row items-center p-2 rounded-t-md border-x border-t border-gray-200 ">
      <h3 class="text-l font-bold grow pl-2">{{ header }}</h3>
      <div class="flex flex-row items-center content-center">
        <slot name="header-extra" />
      </div>
    </div>
    <div class="border border-gray-200 rounded-b-md">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  header: string;
}>();
</script>
<style scoped lang="scss">
</style>
