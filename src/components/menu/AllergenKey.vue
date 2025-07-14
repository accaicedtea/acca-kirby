<template>
  <div class="allergen-key" id="allergeni">
    <h3>Legenda Allergeni</h3>
    <div class="allergen-list">
      <div v-for="allergen in allergens" :key="allergen.name" class="allergen-item">
        <div class="allergen-icon-lg">
          <font-awesome-icon :icon="allergen.icon" />
        </div>
        <div>{{ allergen.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { allergens } from '../../data/menuData.js';

// Map the allergen info to include FontAwesome icons

</script>

<style scoped>
.allergen-key {
  padding: 2rem;
  background-color: #39260c;
  text-align: center;
  font-family: 'Playfair Display', serif;
}

.allergen-key h3 {
  font-family: 'Cinzel', serif;
  font-weight: 700;
  color: #d1b793;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.allergen-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
  justify-items: center;
}

.allergen-item {
  background-color: #4a351a;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #d1b793;
  width: 100%;
  aspect-ratio: 1 / 1; /* Rende l'elemento quadrato */
  transition: all 0.3s ease;
}

.allergen-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.allergen-icon-lg {
  width: 50px;
  height: 50px;
  background-color: #6b5230;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.75rem;
  font-size: 1.5rem;
  color: #d1b793;
}

.allergen-item div:last-child {
  font-size: 0.9rem;
}
</style>
