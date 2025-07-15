<template>
  
      <Title
    :image=slide1
    title="Programma"
    alt="Programma"
    height="220px"
    :brightness="0.6"
    letterSpacing="2px"
    textShadow="0 2px 16px #000"
  />
  <div class="programma-container w-100 d-flex flex-column align-items-center justify-content-center" style="padding:0; margin:0;">
    <img
      :src=evento
      alt="Programma Luglio 2025"
      class="programma-img img-fluid shadow rounded"
      style="width:100vw; max-width:100vw; display:block; margin:0 auto;"
      loading="lazy"
      decoding="async"
      fetchpriority="low"
    />
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue';
import Title from '../components/Title.vue';

const instance = getCurrentInstance();
const { slide1, evento } = instance.appContext.config.globalProperties.$images;
</script>

<style scoped>

.programma-container {
  background: #20140a;
  border-radius: 0;
  box-shadow: none;
  width: 100vw;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.programma-img {
  width: 100vw;
  max-width: 100vw;
  height: auto;
  aspect-ratio: 7/10;
  object-fit: contain;
  background: #2d1c0e;
  border: 4px solid #a67c52;
  box-shadow: 0 2px 16px 0 rgba(60, 40, 20, 0.18);
  display: block;
  margin: 0 auto;
}
</style>