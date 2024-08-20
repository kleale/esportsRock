<template>
    <div class="max-w-6xl bg-white rounded-lg">
        <div class="p-4">
            <Bnr1050 />
            <Breadcrumbs />
            <Header />
            <div class="pt-3">
                <StreamBlockFull />
            </div>
            <div class="grid grow grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1380px]">
                <div class="col-span-1 lg:col-span-8">
                    <!--content-->


                    <BlockLayout header="Match">
                        <template v-slot:header-extra>
                            <div class="flex flex-1 items-center">
                                <div class="flex mr-2">
                                    <img class="h-7" src="../assets/none/tourNoLogo.svg" alt="tourName" />
                                </div>
                                <h3 class="text-sm md:text-l font-bold text-white grow pl-1 flex-col">
                                    <span class="flex">IEM Dallas 2022</span>
                                    <span class="flex">$15 000</span>
                                </h3>
                            </div>
                            <div class="flex gap-1">
                                <button class="btn btn-sm rounded btn-primary">MAP 1</button>
                                <button class="btn btn-sm rounded btn-outline">MAP 2</button>
                                <button class="btn btn-sm rounded btn-outline">MAP 3</button>
                            </div>
                        </template>
                        <div class="p-3">
                            <VideoResults />
                            <Stats />
                        </div>
                    </BlockLayout>

                    <DataTable />

                </div>

                <div class="col-span-1 lg:col-span-4">
                    <MatchesMatchPlayersBlock />

                    <B330 />

                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import Bnr1050 from '@/components/banners/Bnr1050.vue';
import B330 from '@/components/banners/B330.vue';
import StreamBlockFull from '@/components/matches/stream/StreamBlockFull.vue';
import Breadcrumbs from '@/components/common/Breadcrumbs.vue';
import MatchesBlock from '@/components/matches/MatchesBlock.vue';
import FilterBlock from '@/components/common/FilterBlock.vue';
import Header from '@/components/matches/match/Header.vue';
import DataTable from '@/components/matches/match/DataTable.vue';
import BlockLayout from '@/components/common/BlockLayout.vue';
import Stats from '@/components/matches/match/Stats.vue';
import VideoResults from '@/components/matches/match/VideoResults.vue';
</script>

<style scoped></style>