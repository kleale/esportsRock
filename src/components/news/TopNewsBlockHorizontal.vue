<template>
    <div class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <template v-for="(item, index) in news.slice(0, 4)">
            <NewsCardVertical :data="item" />
        </template>
    </div>
</template>

<script setup lang="ts">
import NewsCardVertical from '../../components/news/NewsCardVertical.vue';
import news from '../../assets/dumb/news.json'

</script>
<style scoped lang="scss"></style>