<template>
  <div class="container-fluid py-3">
    <!-- Sezione Carousel -->
    <section id="home-carousel" class="mb-4">
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img :src="slide1" class="d-block w-100" alt="Slide 1">
            <div class="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
              <h1 class="display-4 fw-bold text-warning mb-4">KIRBY'S</h1>
              <div class="d-flex gap-3">
                <a href="https://www.thefork.it/ristorante/krystal-r39106"  target="_blank" class="btn btn-warning btn-lg fw-bold px-4 py-2">
                  <i class="fas fa-calendar-check me-2"></i>PRENOTA CON THE FORK
                </a>
                <a href="tel:+390612345678" class="btn btn-outline-warning btn-lg fw-bold px-4 py-2">
                  <i class="fas fa-phone me-2"></i>CHIAMA
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="slide2" class="d-block w-100" alt="Slide 2">
            <div class="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
              <h2 class="display-5 fw-bold text-warning mb-3">Guarda le tue partite di calcio</h2>
              <p class="lead text-light">Vivi l'emozione del calcio nel nostro ambiente unico</p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="slide3" class="d-block w-100" alt="Slide 3">
            <div class="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
              <h2 class="display-5 fw-bold text-warning mb-3">Scopri di più</h2>
              <button class="btn btn-warning btn-lg fw-bold px-4 py-2">
                <i class="fas fa-arrow-right me-2"></i>ESPLORA
              </button>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>

    <!-- Sezione Video -->
    <section id="video-section" class="row g-3 align-items-stretch">
      <div class="col-12 col-lg-8 mb-3 mb-lg-0">
        <div class="ratio ratio-16x9 rounded-3 shadow border border-2 border-warning bg-dark">
          <iframe :src="videoLinks[0].src" :title="videoLinks[0].title" allowfullscreen></iframe>
        </div>
      </div>
      <div class="col-12 col-lg-4 d-flex flex-column gap-3">
        <div class="ratio ratio-16x9 rounded-3 shadow border border-2 border-warning bg-dark">
          <iframe :src="videoLinks[1].src" :title="videoLinks[1].title" allowfullscreen></iframe>
        </div>
        <div class="ratio ratio-16x9 rounded-3 shadow border border-2 border-warning bg-dark">
          <iframe :src="videoLinks[2].src" :title="videoLinks[2].title" allowfullscreen></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const videoLinks = [
  {
    src: '',
    title: "KIRBY'S GARDEN Marino (Roma)"
  },
  {
    src: '',
    title: "KIRBY'S GARDEN Marino (Roma) 2"
  },
  {
    src: '',
    title: "KIRBY'S GARDEN Marino (Roma) 3"
  }
];
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
</script>

<style scoped>
/* Video section: sfondo rustico e padding coerente */
.ratio {
  background: #2d1c0e;
}

.shadow {
  box-shadow: 0 4px 24px 0 rgba(60, 40, 20, 0.25);
}

.container-fluid {
  background: #20140a;
}
</style>