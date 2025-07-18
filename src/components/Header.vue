<template>
  <nav class="navbar navbar-expand-lg navbar-dark sticky-top shadow-none">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Kirby's Garden">
      <img :src=logo alt="Kirby's Garden Logo" width="50" height="50" class="d-inline-block align-text-top logo-hover">
      
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
          <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Vai alla home">
            <router-link class="nav-link" to="/" exact exact-active-class="active" @click="closeNavbar">Home</router-link>
          </li>
          <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Scopri il nostro menu">
            <router-link class="nav-link" to="/menu" exact exact-active-class="active" @click="closeNavbar">Menu</router-link>
          </li>
          <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Programma eventi">
            <router-link class="nav-link" to="/programma" exact exact-active-class="active" @click="closeNavbar">Programma</router-link>
          </li>
          <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Festeggia con noi">
            <router-link class="nav-link" to="/compleanni" exact exact-active-class="active" @click="closeNavbar">Compleanni</router-link>
          </li>
          <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Mettiti in contatto">
            <router-link class="nav-link" to="/contattaci" exact exact-active-class="active" @click="closeNavbar">Contattaci</router-link>
          </li>
          <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="La nostra storia">
            <router-link class="nav-link" to="/chi-siamo" exact exact-active-class="active" @click="closeNavbar">Chi siamo</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Collapse, Tooltip } from 'bootstrap';
import logo from '../assets/image2.png';

const navbarNavRef = ref(null);
let bsCollapse = null;
let tooltips = [];

onMounted(() => {
  if (navbarNavRef.value) {
    bsCollapse = new Collapse(navbarNavRef.value, { toggle: false });
  }
  
  // Initialize tooltips
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltips = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));
});

onUnmounted(() => {
  if (bsCollapse) {
    bsCollapse.dispose();
  }
  
  // Dispose tooltips
  tooltips.forEach(tooltip => tooltip.dispose());
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

/* Navbar base styles - Background con image2.png */
.navbar {
  background: black;
}

/* Logo animations - Ottimizzato per GPU */
.logo-hover {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  transform: translateZ(0.3);
}

.logo-hover:hover {
  transform: scale(1.1) rotate(5deg) translateZ(0);
  filter: brightness(1.2);
}

/* Navigation links - Ottimizzato per performance */
.nav-link, .navbar-brand {
  color: #fff !important;
  text-shadow: 0 1px 4px rgba(0,0,0,0.7);
  transition: color 0.2s ease, transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  will-change: transform;
  transform: translateZ(0);
}

.nav-link {
  position: relative;
  z-index: 1;
  transform-origin: center;
}

/* Hover effects ottimizzati - Solo transform e color */
.nav-link:hover {
  color: #ffc107 !important;
  transform: scale(1.05) translateY(-2px) translateZ(0);
  text-shadow: 0 2px 8px rgba(255, 193, 7, 0.5);
}

/* Active states ottimizzati */
.nav-link.active,
.nav-link:focus {
  color: #ffc107 !important;
  background: rgba(42,0,0,0.8) !important;
  border-radius: 10px; 
  transform: scale(1.02) translateZ(0);
}

/* Sliding underline effect - Ottimizzato */
.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 50%;
  background: linear-gradient(90deg, #ffc107, #ff8c00);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(-50%) translateZ(0);
  will-change: width;
}

.nav-link:hover::after {
  width: 80%;
}

.nav-link.active::after {
  width: 90%;
  background: linear-gradient(90deg, #ffc107, #ffeb3b);
}

/* Pulse animation ottimizzata - Solo opacity e box-shadow */
.nav-link.active {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 193, 7, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 193, 7, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 193, 7, 0);
  }
}

/* Mobile responsive animations - Ottimizzato */
@media (max-width: 991.98px) {
  .navbar-collapse {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.95);
    backdrop-filter: blur(15px);
    border-radius: 0 0 15px 15px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    z-index: 1050;
    padding: 15px 0;
    margin-top: 1px;
  }
  
  .nav-link {
    text-align: center;
    margin: 5px 0;
    border-radius: 25px;
    padding: 10px 20px;
    background: rgba(0,0,0,0.3);
    backdrop-filter: blur(10px);
    transform: translateZ(0);
    will-change: transform;
  }
  
  .nav-link:hover {
    background: rgba(255, 193, 7, 0.2);
    transform: scale(1.02) translateZ(0);
  }
}




</style>