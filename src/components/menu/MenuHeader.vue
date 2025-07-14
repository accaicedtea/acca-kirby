<template>
  <div class="header text-center text-white p-5">
    <div class="beer-icon"><font-awesome-icon :icon="['fas', 'beer']"/></div>
    <h1 class="display-3">IL VECCHIO TORCHIO</h1>
    <p class="lead">Birre artigianali, panini rustici e specialità della casa in un'atmosfera autentica</p>
  </div>
</template>

<script setup>
</script>

<style scoped>

.header {
  background-color: #2c1a0d;
  font-family: 'Playfair Display', serif;
  position: relative;
  padding: 3rem 1rem;
  border-bottom: 3px solid #e8d6b3;
}

.header h1 {
  font-family: 'Rye', serif;
  color: #e8d6b3;
  font-size: 3rem;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 3px 3px 2px #2a1c08;
  margin-bottom: 1.5rem;
}

.header p {
  color: #d1b793;
  font-family: 'Cinzel', serif;
  font-size: 1.2rem;
  margin: 0.25rem 0;
  letter-spacing: 1px;
}

.beer-icon {
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 3rem;
  color: #d2a35e;
  opacity: 0.1;
  transform: rotate(-20deg);
}
</style>
