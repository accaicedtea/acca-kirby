<template>
  <div class="menu-item d-flex justify-content-between border-bottom pb-3 mb-3">
    <div class="item-name">
      <div class="name fw-bold">{{ item.name }}</div>
      <div v-if="item.description" class="item-description text-muted fst-italic">{{ item.description }}</div>
      <div v-if="item.allergens" class="allergens d-flex gap-2 mt-2">
        <span v-for="allergen in item.allergens" :key="allergen" class="allergen-icon" :title="allergen">
          <font-awesome-icon :icon="['fas', allergenIcon(allergen)]" />
        </span>
      </div>
    </div>
    <div class="item-price fw-bold fs-5 text-end">{{ item.price }}</div>
  </div>
</template>

<script setup>

defineProps({
  item: Object,
});

const allergenIcon = (allergen) => {
  const icons = {
    'Glutine': 'bread-slice',
    'Latte': 'cheese',
    'Uova': 'egg',
    'Senape': 'mortar-pestle',
    'Pesce': 'fish',
    'Crostacei': 'shrimp',
    'Vegetariano': 'seedling',
    'Frutta a guscio': 'cookie',
  };
  return icons[allergen] || 'question-circle';
};

</script>

<style scoped>
.menu-item {
  border-bottom: 1px dashed #8b4513 !important;
}

.item-name .name {
  color: #e8d6b3;
  letter-spacing: 1px;
}

.item-description {
  font-size: 0.95rem;
  color: #c9a769 !important;
}

.item-price {
  color: #d2a35e;
  min-width: 80px;
}

.allergen-icon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(139, 69, 19, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border: 1px solid #8b4513;
  transition: all 0.2s ease-in-out;
}

.allergen-icon:hover {
  transform: scale(1.2);
  background: rgba(210, 163, 94, 0.3);
}

@media (max-width: 768px) {
  .menu-item {
    flex-direction: column;
  }

  .item-price {
    text-align: left;
    margin-top: 5px;
  }
}
</style>
