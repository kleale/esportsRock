<template>
    <div class="max-w-6xl bg-white rounded-lg">
        <div class="p-4">
            <Bnr1050 />
            <Breadcrumbs />

            <div class="grid grow grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1380px]">
                <div class="col-span-1 lg:col-span-8">
                    <article
                        class="prose prose-sm prose-img:rounded-md prose-headings:text-2xl prose-headings:mb-1  max-w-none">
                        <img src="https://escorenews.com/media/news/n59166.webp">
                        <div class="flex justify-between items-center text-gray-500 pb-2 text-xs gap-3">
                            <div>
                                <span>Games and Esports Articles </span>
                                |
                                <span>January 09, 16:31</span>
                            </div>
                            <span
                                class="uppercase bg-[#9BD100] text-xs font-semibold leading-relaxed rounded-md px-2 text-black">Dota2</span>
                        </div>

                        <h1>Pure~ reveals his is "not in CIS" amidst rumors of him joining Tundra</h1>
                        <author class="text-xs">Dmitrii Barabanov</author>
                        <p>GT (game-tournaments.com) – eSports project about the most popular PC games. At this
                            point of time Dota 2 and CS:GO are the main verticals presented on the site. Other
                            games should be coming soon.</p>


                        <p><a href="/">BetBoom Team</a> inactive carry <a href="/">Ivan "Pure~" Moskalenko</a>
                            mentioned he would play for a non-EEU Dota 2 team next season. On a recent stream,
                            he said he "is not in CIS, of course." It sounded like a deliberate mistake to hype
                            up his transfer, but could be a slip of the tongue as well.</p>
                        <blockquote class="blockquote">
                            <p>Who are the strongest CIS players? Guys, name me the strongest players in the CIS
                                aside from <a href="/">Spirit</a>. <a href="/">Dyrachyo</a> is the first one,
                                he's right on the spot. Then me, of course. Well, I'm no longer in the CIS, of
                                course... Oh, shit... Then Gleb [<a href="/">Kiyotaka</a>], Romanych [<a
                                    href="/">RAMZES</a>], Vetal [<a href="/">Save-</a>], everyone is there. And
                                everyone is ranked 500, and I'm ranked 100. And now, I'll turn off the stream so
                                that there is no VOD left.</p>
                            <footer class="blockquote-footer">Ivan "Pure~" Moskalenko</footer>
                        </blockquote>
                        <p>Rumor has it Pure~ might end up in <a href="/">Tundra Esports</a>, initially reported
                            by the editor of Metaratings.ru. On January 8, Tundra revealed <a
                                href="/">MinD_ContRoL</a>'s addition. If the information about the Russian turns
                            out true, he will play in his original carry role.</p>
                        <p>Pure~ spent most of last year in offlane, as they swapped positions with <a
                                href="/">Nightfall</a> after <a href="/">Berlin Major.</a> He went inactive on
                            December 24. The official reason was to take care of his health and have a break
                            from professional Dota. BetBoom Team hasn't revealed his replacement yet.</p>
                    </article>

                    <div class="tags px-2 pt-5 text-xs">
                        <CursorArrowRippleIcon class="inline-flex w-5 me-2" />
                        <sapn>Source: </sapn>
                        <a href="/" target="_blank">https://escorenews.com/</a>
                    </div>

                    <div class="tags px-2">
                        <TagIcon class="inline-flex w-5" />
                        <a class="badge badge-sm inline-flex m-1 hover:badge-primary" href="/">The Berlin
                            Major 2023</a>
                        <a class="badge badge-sm inline-flex m-1 hover:badge-primary" href="/">Tundra</a>
                        <a class="badge badge-sm inline-flex m-1 hover:badge-primary" href="/">BB</a>
                        <a class="badge badge-sm inline-flex m-1 hover:badge-primary" href="/">Pure~</a>
                    </div>

                    <OtherArticles />
                    <SignUpBlock />
                </div>

                <div class="col-span-1 lg:col-span-4">
                    <FilterBlock />
                    <UpcomingMatches />
                    <B330 />
                    <PrizePool />
                    <Textblocksmall>
                        <template v-slot:header-extra>
                            Stream and video, teams and players, statistics and analytics
                        </template>
                        You can find all Dota 2 and CS:GO matches, watch streams and videos, look for detailed
                        statistics on the
                        teams,
                        players and games, make predictions for the games and sell subscriptions for them. Follow
                        Esports!
                    </Textblocksmall>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Bnr1050 from '../components/banners/Bnr1050.vue';
import SignUpBlock from '../components/blocks/SignUpBlock.vue';
import Textblocksmall from '../components/blocks/Textblocksmall.vue';
import B330 from '../components/banners/B330.vue';
import Breadcrumbs from '@/components/common/Breadcrumbs.vue';
import OtherArticles from '@/components/blocks/OtherArticles.vue';
import UpcomingMatches from '@/components/blocks/UpcomingMatches.vue';
import PrizePool from '@/components/blocks/PrizePool.vue';
import { CursorArrowRippleIcon, TagIcon } from '@heroicons/vue/24/outline';
import FilterBlock from '@/components/common/FilterBlock.vue';

</script>

<style scoped></style>