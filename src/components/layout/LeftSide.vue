<template>
    <aside id="default-sidebar" class="W transition-transform -translate-x-full sm:translate-x-0 hidden md:flex" aria-label="Sidenav">
        <div class="LeftSide overflow-y-auto px-3 h-ful">
            <!-- header -->
            <LeftSideHeader>Navigate</LeftSideHeader>
            <LeftSideMenu />
            <LeftSideHeader>News</LeftSideHeader>

            <template v-for="(item, index) in news.slice(0,5)">
                <NewsRow type="dark" :data="item" />
            </template>

        </div>
    </aside>

</template>

<script setup>
import LeftSideHeader from '../common/LeftSideHeader.vue';
import LeftSideMenu from '../common/LeftSideMenu.vue';
import news from '@/assets/dumb/news.json'
import NewsRow from '../news/NewsRow.vue';

</script>

<style scoped>
.LeftSide .title{
    color: #fff;
}
</style>