<template>
    <div class="max-w-6xl bg-white rounded-lg">
        <div class="p-4">
            <Bnr1050 />
            <Breadcrumbs />

            <div class="grid grow grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1380px]">
                <div class="col-span-1 lg:col-span-8">
                    <div class="relative flex pb-5 items-center grow">
                        <h1 class="flex-shrink mr-4 font-black text-md text-black uppercase">Articles</h1>
                        <div class="flex-grow border-t border-gray-300"></div>
                    </div>
                    <div class="last:border-0">
                        <NewsRow :data="item" v-for="(item, index) in news.slice(0, 20)" />
                    </div>

                    <div class="relative flex py-2 items-center grow">
                        <div class="flex-grow border-t border-gray-300"></div>
                        <h1 class="flex-shrink mx-4">
                            <Pagination />
                        </h1>
                        <div class="flex-grow border-t border-gray-300"></div>
                    </div> 
                </div>

                <div class="col-span-1 lg:col-span-4">
                    <FilterBlock />
                    <UpcomingMatches />
                    <B330 />
                     
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Bnr1050 from '../components/banners/Bnr1050.vue';
import B330 from '../components/banners/B330.vue';
import Breadcrumbs from '@/components/common/Breadcrumbs.vue';
import UpcomingMatches from '@/components/blocks/UpcomingMatches.vue';
import FilterBlock from '@/components/common/FilterBlock.vue';
import NewsRow from '../components/news/NewsRow.vue';
import news from '../assets/dumb/news.json'
import Pagination from '@/components/common/Pagination.vue';


</script>

<style scoped></style>