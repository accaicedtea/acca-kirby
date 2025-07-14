<template>
  <div class="menu-container">
    <MenuHeader />
    <MenuNav @select-category="handleSelectCategory" />
    <div class="divider"></div>
    <MenuCategory v-for="category in filteredCategories" :key="category.id" :category="category" />
    <div class="divider"></div>
    <AllergenKey />
    <MenuFooter />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import MenuHeader from '../components/menu/MenuHeader.vue';
import MenuNav from '../components/menu/MenuNav.vue';
import MenuCategory from '../components/menu/MenuCategory.vue';
import AllergenKey from '../components/menu/AllergenKey.vue';
import MenuFooter from '../components/menu/MenuFooter.vue';

const selectedCategory = ref('all');

const categories = ref([
  {
    id: 'panini',
    title: 'Panini Rustici',
    icon: 'fa-hamburger',
    items: [
      { name: 'TITTY', description: 'Burger di manzo, frittatina, bacon, provola, maionese, ketchup, iceberg', price: '€15,00', allergens: ['Glutine', 'Latte', 'Uova', 'Senape'] },
    ],
    note: 'AGGIUNGI SALSE: maionese, ketchup, senape, BBQ, guacamole, salsa yogurt, tabasco, salsa piccante'
  },
  {
    id: 'pizze',
    title: 'Pizze del Forno',
    icon: 'fa-pizza-slice',
    items: [
    ]
  },
  {
    id: 'insalate',
    title: 'Insalate Maxi',
    icon: 'fa-leaf',
    items: [
        { name: 'TIPRETENDO', description: 'Lattuga iceberg, rughetta, radicchio, tonno, fior di latte, uovo sodo, pomodoro', price: '€13,50', allergens: ['Pesce', 'Latte', 'Uova'] },
        { name: 'ALBACHIARA', description: 'Rughetta, polpa di granchio, gamberetti, arancio', price: '€14,00', allergens: ['Crostacei', 'Pesce'] },
        { name: 'SOLITUDINE', description: 'Lattuga iceberg, rughetta, radicchio, mais, carote, pomodoro', price: '€12,00', allergens: ['Vegetariano'] },
        { name: 'FARFALLINA', description: 'Rughetta, gamberetti, salsa rosa', price: '€13,50', allergens: ['Crostacei'] },
        { name: 'REWIND', description: 'Lattuga iceberg, wurstel, olive nere, uovo sodo, fontina, mais', price: '€12,50', allergens: ['Latte', 'Uova'] },
        { name: "O'PACHINO 'NNAMURATO'", description: 'Lattuga iceberg, rughetta, pomodori ciliegino, bufala, olive nere', price: '€13,00', allergens: ['Latte'] },
        { name: 'BEACH ON THE BEACH', description: 'Lattuga iceberg, gamberetti, pomodori ciliegino, mais', price: '€13,50', allergens: ['Crostacei'] },
        { name: 'VUOTO A PERDERE', description: 'Rughetta, bresaola, parmigiano', price: '€12,00', allergens: ['Latte'] },
        { name: 'DICICHE', description: 'Lattuga iceberg, tonno, pomodori ciliegino, fior di latte, olive nere', price: '€13,50', allergens: ['Pesce', 'Latte'] },
        { name: 'TRAP', description: 'Lattuga iceberg, pomodori ciliegino, mais, tonno, noci', price: '€14,00', allergens: ['Pesce', 'Frutta a guscio'] }
    ]
  },
  {
    id: 'piadine',
    title: 'Piadine Artigianali',
    icon: 'fa-bread-slice',
    items: [
        { name: 'MOZZARELLA FIOR DI LATTE, CRUDO E RUGHETTA', price: '€8,50', allergens: ['Glutine', 'Latte'] },
        { name: 'POMODORO E MOZZARELLA FIOR DI LATTE', price: '€8,00', allergens: ['Glutine', 'Latte'] },
        { name: 'BRESAOLA, RUGHETTA E PARMIGIANO', price: '€9,00', allergens: ['Glutine', 'Latte'] },
        { name: 'STRACCHINO E CRUDO', price: '€8,50', allergens: ['Glutine', 'Latte'] },
        { name: 'STRACCHINO COTTO E RUGHETTA', price: '€8,50', allergens: ['Glutine', 'Latte'] },
        { name: 'STRACCHINO CRUDO E RUGHETTA', price: '€8,50', allergens: ['Glutine', 'Latte'] },
        { name: 'MOZZARELLA FIOR DI LATTE E CRUDO', price: '€8,50', allergens: ['Glutine', 'Latte'] },
        { name: 'MOZZARELLA FIOR DI LATTE E COTTO', price: '€8,50', allergens: ['Glutine', 'Latte'] }
    ]
  },
  {
    id: 'bruschette',
    title: 'Bruschette & Bruschettoni',
    icon: 'fa-apple-alt',
    items: []
  },
  {
    id: 'antipasti',
    title: 'Antipasti della Casa',
    icon: 'fa-utensils',
    items: []
  },
  {
    id: 'menufissi',
    title: 'Menu Fissi',
    icon: 'fa-utensil-spoon',
    isSpecial: true,
    items: [
        {
            name: 'MENU PIZZA',
            description: '<p>FRITTO MISTO - supplì, oliva ascolana, mozzarellina</p><p>1 BRUSCHETTA AL POMODORO</p><p>1 PIZZA A SCELTA dal menu</p><p>1 BEVANDA MEDIA 50 cl (bibita alla spina, calice di vino o birra alla spina)</p>',
            note: 'Ogni variazione sulla pizza + € 2,00',
            price: '€24,90'
        },
        {
            name: 'MENU KIDS',
            note: 'Valido per bambini fino a 10 anni - ogni piatto include bevanda',
            subItems: [
                { name: '140$ WURSTEL E PATATINE', price: '€8,50' },
                { name: '1407 HAMBURGER AL PIATTO E PATATINE', price: '€9,00' },
                { name: '1408 PANINO CON HAMBURGER, FORMAGGIO E PATATINE', price: '€9,50' },
            ]
        }
    ]
  }
]);

const filteredCategories = computed(() => {
  if (selectedCategory.value === 'all') {
    return categories.value;
  }
  return categories.value.filter(category => category.id === selectedCategory.value);
});

function handleSelectCategory(categoryId) {
  selectedCategory.value = categoryId;
}
</script>

<style scoped>
.menu-container {
  font-family: 'Playfair Display', serif;
  background: url('../assets/image2.png') repeat;
  backdrop-filter: blur(12px) brightness(1.55);
  -webkit-backdrop-filter: blur(12px) brightness(1.55);
  color: #e8d6b3;
  padding: 20px;
  position: relative;
}

.menu-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(29, 18, 8, 0.85);
  z-index: 1;
}

.menu-container > * {
  position: relative;
  z-index: 2;
}

.divider {
  height: 5px;
  background: linear-gradient(90deg, transparent, #8b4513, transparent);
  margin: 40px 0;
  border: 0;
  border-top: 2px solid #d2a35e;
  border-bottom: 2px solid #d2a35e;
}
</style>