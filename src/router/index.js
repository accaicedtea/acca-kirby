import { createRouter, createWebHistory } from 'vue-router';

// Code splitting automatico per ogni route
const Home = () =>
    import ('../views/Home.vue');
const Menu = () =>
    import ('../views/Menu.vue');
const Programma = () =>
    import ('../views/Programma.vue');
const Compleanni = () =>
    import ('../views/Compleanni.vue');
const Contattaci = () =>
    import ('../views/Contattaci.vue');
const ChiSiamo = () =>
    import ('../views/ChiSiamo.vue');
const NotFound = () =>
    import ('../views/404.vue');
const Privacy = () =>
    import ('../views/Privacy.vue');

const routes = [
    { path: '/', component: Home },
    { path: '/menu', component: Menu },
    { path: '/programma', component: Programma },
    { path: '/compleanni', component: Compleanni },
    { path: '/contattaci', component: Contattaci },
    { path: '/chi-siamo', component: ChiSiamo },
    { path: '/privacy', component: Privacy },
    { path: '/:pathMatch(.*)*', component: NotFound }
];

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
});

export default router;