<template>
  <div class="d-flex flex-column align-items-center justify-content-center bg-brown text-warning rustic-404 min-vh-100 w-100">
    <h1 class="display-1 fw-bold rustic-shadow">404</h1>
    <h2 class="mb-3 fw-bold rustic-title">Oops! Pagina non trovata</h2>
    <p class="mb-4 rustic-desc">
      Sembra che tu abbia imboccato una stradina di campagna...<br>
      Torna al <span class="fst-italic">Vecchio Torchio</span>!
    </p>
    <router-link to="/" class="btn btn-outline-warning px-4 py-2 fw-bold rustic-btn">
      Torna alla Home
    </router-link>
  </div>
</template>

<style scoped>
.bg-brown {
  background: #3a2916;
  border: 4px solid #d2a35e;
  box-shadow: 0 0 30px #2c1a0d;
}
.rustic-404 {
  font-family: 'Cinzel', serif;
  border-radius: 12px;
  min-height: 100vh;
  width: 100vw;
}
.rustic-shadow {
  text-shadow: 2px 2px 0 #2c1a0d, 0 0 10px #8b5c2a;
  color: #e8d6b3;
}
.rustic-title {
  letter-spacing: 2px;
  color: #e8d6b3;
  text-shadow: 1px 1px 0 #8b5c2a;
}
.rustic-desc {
  font-size: 1.2rem;
  color: #d2a35e;
  text-align: center;
}
.rustic-btn {
  border-width: 2px;
  border-color: #d2a35e !important;
  color: #e8d6b3 !important;
  background: #3a2916;
}
.rustic-btn:hover {
  background: #d2a35e;
  color: #3a2916 !important;
}
</style>