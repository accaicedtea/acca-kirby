<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top shadow-none" style="backdrop-filter: blur(4px);">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
      <img :src=logo alt="" width="50" height="50" class="d-inline-block align-text-top">
      Kirby's
    </a>
      <button
        class="navbar-toggler"
        type="button"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav" ref="navbarNavRef">
        <ul class="navbar-nav text-uppercase">
          <li class="nav-item">
            <router-link class="nav-link" to="/" exact exact-active-class="active" @click="closeNavbar">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/menu" exact exact-active-class="active" @click="closeNavbar">Menu</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/programma" exact exact-active-class="active" @click="closeNavbar">Programma</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/compleanni" exact exact-active-class="active" @click="closeNavbar">Compleanni</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contattaci" exact exact-active-class="active" @click="closeNavbar">Contattaci</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/chi-siamo" exact exact-active-class="active" @click="closeNavbar">Chi siamo</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Collapse } from 'bootstrap';
import logo from '../assets/image2.png';

const navbarNavRef = ref(null);
let bsCollapse = null;

onMounted(() => {
  if (navbarNavRef.value) {
    bsCollapse = new Collapse(navbarNavRef.value, { toggle: false });
  }
});

onUnmounted(() => {
  if (bsCollapse) {
    bsCollapse.dispose();
  }
});

const toggleNavbar = () => {
  if (bsCollapse) {
    bsCollapse.toggle();
  }
};

const closeNavbar = () => {
  if (bsCollapse && navbarNavRef.value.classList.contains('show')) {
    bsCollapse.hide();
  }
};
</script>

<style scoped>
/* Puoi aggiungere stili personalizzati qui */
.navbar {
  background: rgba(0,0,0,0.2) !important;
  box-shadow: none !important;
}
.nav-link, .navbar-brand {
  color: #fff !important;
  text-shadow: 0 1px 4px rgba(0,0,0,0.7);
}
.nav-link.active,
.nav-link:hover,
.nav-link:focus {
  color: #fff !important;
  background: rgba(42,0,0,0.8) !important;
}
.nav-link::before {
  background: rgba(42,0,0,0.8);
}

.nav-link {
  position: relative;
  transition: color 0.2s, background 0.2s;
  z-index: 1;
}
.nav-link.active,
.nav-link:hover,
.nav-link:focus {
  color: #fff !important;
  background: #2a0000 !important;
  border-radius: 0 0 0 0;
}

.nav-link.active::before,
.nav-link:hover::before,
.nav-link:focus::before {
  opacity: 1;
}

.nav-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #2a0000;
  opacity: 0;
  z-index: -1;
  transition: opacity 0.2s;
  border-radius: 0 0 0 0;
}
</style>