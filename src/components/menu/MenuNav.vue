<template>
  <nav class="nav nav-pills flex-nowrap overflow-auto sticky-top bg-dark py-2 px-2">
    <a v-for="link in navLinks" :key="link.id" :href="link.target"
       class="nav-link fw-bold text-uppercase d-flex align-items-center px-3"
       :class="{ active: activeCategory === link.id }">
      <font-awesome-icon :icon="['fas', link.icon.replace('fa-', '')]" class="me-2" />
      {{ link.text }}
    </a>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { navLinks as navigationLinks } from '../../data/menuData.js';

defineProps({
  activeCategory: String
});

const navLinks = ref(navigationLinks);
</script>

<style scoped>
.nav {
  background: #3a2916 !important;
}
.nav-link {
  color: #fff !important;
  font-family: 'Cinzel', serif;
  letter-spacing: 1px;
  text-shadow: none;
}
.nav-link.active, .nav-link:focus, .nav-link:hover {
  background-color: #2c1a0d !important;
  color: #fff !important;
  border: none;
  box-shadow: none;
}
</style>
