// Redirect HTTP to HTTPS (escluso localhost)
/*if (location.protocol === 'http:' && location.hostname !== 'localhost') {
    location.href = location.href.replace('http:', 'https:');
}
*/
import { createApp } from 'vue'

// Import Bootstrap CSS minificato
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHamburger, faPizzaSlice, faLeaf, faBreadSlice, faAppleAlt, faUtensils, faUtensilSpoon, faBeer, faAllergies, faWheatAwn, faShrimp, faEgg, faFish, faSeedling, faCheese, faTree, faCarrot, faCircleDot, faWineBottle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

// Precarico tutte le immagini principali
import slide1 from './assets/slide1.webp';
import slide2 from './assets/slide2.webp';
import slide3 from './assets/slide3.webp';
import evento from './assets/70x100_luglio_2025_2-min(1).webp';

library.add(faHamburger, faPizzaSlice, faLeaf, faBreadSlice, faAppleAlt, faUtensils, faUtensilSpoon, faBeer, faAllergies, faWheatAwn, faShrimp, faEgg, faFish, faSeedling, faCheese, faTree, faCarrot, faCircleDot, faWineBottle, faQuestionCircle);

const app = createApp(App);

// Rendo le immagini disponibili globalmente
app.config.globalProperties.$images = {
    slide1,
    slide2,
    slide3,
    evento
};

app.component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')