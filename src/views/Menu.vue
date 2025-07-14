<template>
  <div class="menu-container">
    <MenuHeader />
    <MenuNav @select-category="handleSelectCategory" />
    <div class="divider"></div>
    <MenuCategory v-for="category in filteredCategories" :key="category.id" :category="category" />
    <div class="divider"></div>
    <AllergenKey />
    <MenuFooter />
    
    <!-- Bottone Torna Su - Sticky Bottom -->
    <button class="sticky-top" @click="scrollToTop" aria-label="Torna su">
      <i class="fas fa-arrow-up"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import MenuHeader from '../components/menu/MenuHeader.vue';
import MenuNav from '../components/menu/MenuNav.vue';
import MenuCategory from '../components/menu/MenuCategory.vue';
import AllergenKey from '../components/menu/AllergenKey.vue';
import MenuFooter from '../components/menu/MenuFooter.vue';
import { menuCategories, ALLERGENS, navLinks } from '../data/menuData.js';

const selectedCategory = ref('all');
const categories = ref(menuCategories);

const filteredCategories = computed(() => {
  if (selectedCategory.value === 'all') {
    return categories.value;
  }
  return categories.value.filter(category => category.id === selectedCategory.value);
});

function handleSelectCategory(categoryId) {
  selectedCategory.value = categoryId;
}

function scrollToTop() {
  window.scrollTo({ 
    top: 0, 
    behavior: 'smooth' 
  });
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

/* Bottone Torna Su - Sticky Bottom */
.scroll-top-btn {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1000;
  background: linear-gradient(135deg, #8b4513, #d2a35e);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0.9;
}

.scroll-top-btn:hover {
  background: linear-gradient(135deg, #d2a35e, #ffd700);
  transform: scale(1.1) translateY(-3px);
  box-shadow: 0 6px 25px rgba(210, 163, 94, 0.4);
  opacity: 1;
}

.scroll-top-btn:active {
  transform: scale(0.95);
}

@media (max-width: 768px) {
  .scroll-top-btn {
    width: 50px;
    height: 50px;
    right: 15px;
    bottom: 15px;
    font-size: 1.2rem;
  }
}
</style>