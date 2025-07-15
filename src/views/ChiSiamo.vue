<template>
  <Title
    :image="slide1"
    title="Chi Siamo"
    alt="Chi Siamo"
    height="220px"
    :brightness="0.6"
    letterSpacing="2px"
    textShadow="0 2px 16px #000"
  />

  <section class="container-fluid py-5 bg-white">
    <div class="row align-items-center">
      <div class="col-lg-6 mb-4 mb-lg-0 border-end" style="border-color: #bfa76f !important;">
        <h2 class="text-uppercase fw-bold mb-4" style="color: #bfa76f; letter-spacing:2px;">CHI SIAMO</h2>
        <p class="text-secondary fs-5">
        Il Ristorante Kirby's Garden si trova nei pressi del palaghiaccio di Marino.<br>
        Facile da raggiungere da
          diverse zone di Roma come l’Eur, San Giovanni, Garbatella, Testaccio e della provincia tra Albano, Castel
          Gandolfo, Ciampino e Ariccia.
          <br>
          Si tratta di un locale molto ampio in stile irish pub,
          in grado di offrire sia servizi di ristorazione che
          d’intrattenimento serale.
          Si possono trovare ottimi primi piatti della cucina tipica romana, secondi di carne come bistecche, tagliate e
          spiedini, panini, dolci e dessert ma anche deliziose pizze cotte nel forno a legna.</p>
      </div>
      <div class="col-lg-6 d-flex gap-3 justify-content-lg-end justify-content-center">
        <div class="d-flex flex-column align-items-center w-100">
          <img :src="slide2" alt="Cocktail Kirby's" class="img-fluid rounded border border-2 mb-3"
        style="max-width:320px; max-height:320px; border-color:#bfa76f; background:#eee;" />
          <img :src="slide3" alt="Locale Kirby's" class="img-fluid rounded border border-2"
        style="max-width:320px; max-height:320px; border-color:#bfa76f; background:#eee;" />
        </div>
      </div>
    </div>
  </section>
  <!-- Divisore personalizzato -->
  <div class="w-100 d-flex justify-content-center align-items-center" style="background: #222; height: 120px;">
    <div style="height: 48px; width: 6px; background: #fff; border-radius: 3px;"></div>
    <div style="width: 80px; height: 6px; background: #bfa76f; border-radius: 3px; margin-left: 32px;"></div>
  </div>
  <section class="container-fluid py-5 bg-white">
    <div class="row">
      <div class="col-12 mb-4">
        <h2 class="text-uppercase fw-bold mb-4" style="color: #bfa76f; letter-spacing:2px;">RECENSIONI</h2>
        <p class="text-secondary fs-5">
          Ecco cosa dicono i nostri clienti!
        </p>
      </div>
      <div class="col-md-4 mb-4">
        <div class="border rounded p-4 h-100 shadow-sm">
          <div class="mb-2">
            <span class="text-warning">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          </div>
          <p class="mb-2">Locale accogliente e personale gentilissimo. Ho mangiato una carbonara spettacolare! Tornerò sicuramente.</p>
          <div class="fw-bold">- Marco R.</div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="border rounded p-4 h-100 shadow-sm">
          <div class="mb-2">
            <span class="text-warning">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
          <p class="mb-2">Ottima selezione di birre e pizze cotte alla perfezione. Atmosfera rilassante, consigliato!</p>
          <div class="fw-bold">- Giulia S.</div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="border rounded p-4 h-100 shadow-sm">
          <div class="mb-2">
            <span class="text-warning">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          </div>
          <p class="mb-2">Servizio veloce e piatti abbondanti. I dolci sono una vera delizia!</p>
          <div class="fw-bold">- Lorenzo P.</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { getCurrentInstance } from 'vue';
import Title from '../components/Title.vue';

const instance = getCurrentInstance();
const { slide1, slide2, slide3 } = instance.appContext.config.globalProperties.$images;
</script>

<style scoped>
.object-fit-cover {
  object-fit: cover;
}
</style>