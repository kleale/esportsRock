<template>
  <div class="max-w-6xl bg-white rounded-lg">
    <div class="p-4">

      <Bnr1050 />
      <div class="relative flex py-2 items-center grow">
        <h1 class="flex-shrink mr-4 font-black text-l text-black uppercase">Новости CS:GO</h1>
        <div class="flex-grow border-t border-gray-300"></div>
      </div>

      <div>

        <div class="grid grow grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1380px]">
          <div class="col-span-1 lg:col-span-8">


            <OtherArticles />
            <SignUpBlock />
          </div>

          <div class="col-span-1 lg:col-span-4">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Bnr1050 from '../components/banners/Bnr1050.vue';
import SignUpBlock from '../components/blocks/SignUpBlock.vue';
import OtherArticles from '@/components/blocks/OtherArticles.vue';
</script>

<style scoped></style>