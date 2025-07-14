<template>
  <Title
    :image="slice1"
    title="Compleanni"
    alt="Compleanni"
    height="220px"
    :brightness="0.6"
    letterSpacing="2px"
    textShadow="0 2px 16px #000"
  />


  <!-- Sezione Menù Rustico -->
  <section class="container-fluid py-5 menu-rustic">
    <div class="row">
      <div class="col-12 mb-5">
        <h2 class="text-uppercase fw-bold mb-4">Menù Compleanni</h2>
      </div>
      <div class="col-md-6 mb-4">
        <div class="p-4 rounded" style="background: rgba(58,41,22,0.95); border: 2px solid #d2a35e;">
          <h3 class="fw-bold mb-3">MENU PIZZA 23€</h3>
          <ul class="fs-5 mb-0">
            <li>Fritti Misti <span class="fs-6 text-warning">(supplì, oliva ascolana, mozzarellina)</span></li>
            <li>1 Bruschetta al pomodoro</li>
            <li>1 pizza a scelta presente sul menu</li>
            <li>1 bevanda a scelta (birra alla spina, bibita alla spina, calice di vino)</li>
          </ul>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="p-4 rounded" style="background: rgba(58,41,22,0.95); border: 2px solid #d2a35e;">
          <h3 class="fw-bold mb-3">MENU DOPO CENA 15€</h3>
          <ul class="fs-5 mb-0">
            <li>A partire da 8 persone</li>
            <li>1 consumazione alcolica o analcolica a persona</li>
            <li>Acqua a centro tavola (1 bt ogni 4 persone)</li>
            <li>5 Tipi di stuzzichini <span class="fs-6 text-warning">(pistacchi, olive verdi, arachidi, tortillas, taralli)</span></li>
            <li>Patatine Fritte centro tavola (3 porzioni)</li>
            <li>1 bottiglia a scelta <span class="fs-6 text-warning">(spumante, brachetto, prosecco)</span></li>
            <li>Servizio torta</li>
          </ul>
          <div class="text-warning mt-2 fs-6">* Si può adeguare per più persone</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Title from '../components/Title.vue';
import slice1 from '../assets/slide1.jpg';
// Sostituisci i percorsi delle immagini con quelli reali del tuo progetto
</script>

<style scoped>
.bg-brown {
  background: #3a2916 !important;
}
.menu-rustic {
  background: #3a2916 url('../assets/chalkboard.png') repeat;
  border: 2px solid #d2a35e;
  border-radius: 12px;
}
.menu-rustic h3,
.menu-rustic h2 {
  color: #d2a35e;
}
.menu-rustic ul {
  color: #e8d6b3;
}
.menu-rustic .text-warning {
  color: #d2a35e !important;
}
.divider-brown {
  background: #3a2916;
  height: 120px;
}
.divider-brown-bar {
  height: 48px; width: 6px; background: #fff; border-radius: 3px;
}
.divider-brown-bar2 {
  width: 80px; height: 6px; background: #d2a35e; border-radius: 3px; margin-left: 32px;
}
</style>