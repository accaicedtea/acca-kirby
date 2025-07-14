<template>
  <div class="category mb-5" :id="category.id">
    <h2 class="category-title text-center mb-4"><font-awesome-icon :icon="['fas', category.icon.replace('fa-', '')]" /> {{ category.title }}</h2>
    
    <div v-if="category.isSpecial">
        <div v-for="(item, index) in category.items" :key="index" class="menu-highlight mb-4">
            <div class="name text-center h4">{{ item.name }}</div>
            <div class="item-description" v-html="item.description"></div>
            <div v-if="item.note" class="menu-note mt-3">{{ item.note }}</div>
            <div v-if="item.price" class="item-price text-center h5 mt-3">{{ item.price }}</div>
            <div v-if="item.subItems" class="menu-items mt-3">
                <MenuItem v-for="(subItem, subIndex) in item.subItems" :key="subIndex" :item="subItem" />
            </div>
        </div>
    </div>

    <div v-else class="menu-items">
      <MenuItem v-for="(item, index) in category.items" :key="index" :item="item" />
    </div>

    <div v-if="category.note" class="sauces-note mt-4 p-3">
      <strong>{{ category.note }}</strong>
    </div>
  </div>
</template>

<script setup>
import MenuItem from './MenuItem.vue';

defineProps({
  category: Object,
});
</script>

<style scoped>
.category {
  padding: 20px;
  background: rgba(45, 29, 15, 0.6);
  border: 2px solid #8b4513;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.category-title {
  font-family: 'Cinzel', serif;
  font-size: 2rem;
  color: #d2a35e;
  padding-bottom: 10px;
  border-bottom: 3px double #8b4513;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.sauces-note {
  font-style: italic;
  background: rgba(139, 69, 19, 0.2);
  border-left: 4px solid #8b4513;
  color: #c9a769;
}

.menu-highlight {
    background: rgba(210, 163, 94, 0.1);
    padding: 15px;
    border: 1px solid #8b4513;
    border-radius: 5px;
}

.menu-highlight .name {
    font-size: 1.2rem;
    color: #d2a35e;
    margin-bottom: 10px;
}

.menu-note {
    background: rgba(139, 69, 19, 0.2);
    padding: 10px;
    border-radius: 5px;
    font-size: 0.9rem;
    border-left: 3px solid #d2a35e;
}
</style>
