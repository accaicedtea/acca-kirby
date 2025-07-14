import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Menu from '../views/Menu.vue';
import Programma from '../views/Programma.vue';
import Compleanni from '../views/Compleanni.vue';
import Contattaci from '../views/Contattaci.vue';
import ChiSiamo from '../views/ChiSiamo.vue';
import NotFound from '../views/404.vue';
import Privacy from '../views/Privacy.vue';

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