import { createRouter, createWebHistory, createWebHashHistory } from "vue-router"
import HomeView from '../pages/HomeView.vue'
import LoginView from "../pages/LoginView.vue"
import MatchView from '../pages/MatchView.vue'
import NewsListView from '../pages/NewsListView.vue'
import NewsPageView from '../pages/NewsPageView.vue'
import PageNotFound from '../pages/PageNotFound.vue'
import External from '../pages/External.vue'
import MatchesView from '../pages/MatchesView.vue'
import GameView from '../pages/GameView.vue'
import TourView from '../pages/TourView.vue'
import ToursView from '../pages/ToursView.vue'
import StreamsView from '../pages/StreamsView.vue'
import TeamsView from '../pages/TeamsView.vue'
import TeamView from '../pages/TeamView.vue'
import PlayersView from '../pages/PlayersView.vue'
import PlayerView from '../pages/PlayerView.vue'
import BetsView from '../pages/BetsView.vue'

console.log(import.meta.env.BASE_URL)

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    //history: createWebHistory(import.meta.env.PROD ? '/esportsRock/' : '/'),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/matches',
            name: 'matches',
            component: MatchesView
        },
        {
            path: '/match',
            name: 'match',
            component: MatchView
        },
        {
            path: '/game',
            name: 'game',
            component: GameView
        },
        {
            path: '/tours',
            name: 'tours',
            component: ToursView
        },
        {
            path: '/tour',
            name: 'tour',
            component: TourView
        },
        {
            path: '/players',
            name: 'players',
            component: PlayersView
        },
        {
            path: '/player',
            name: 'player',
            component: PlayerView
        },
        {
            path: '/teams',
            name: 'teams',
            component: TeamsView
        },
        {
            path: '/team',
            name: 'team',
            component: TeamView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/news',
            name: 'news',
            component: NewsListView
        },
        {
            path: '/newspage',
            name: 'newspage',
            component: NewsPageView
        },
        {
            path: '/streams',
            name: 'streams',
            component: StreamsView
        },
        {
            path: '/bets',
            name: 'bets',
            component: BetsView
        },
        {
            path: '/external',
            name: 'external',
            component: External
        },
        { path: '/:pathMatch(.*)*', name: 'not-found', component: PageNotFound },
    ]
})

export default router