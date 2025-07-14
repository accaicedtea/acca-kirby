<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top shadow-none" style="backdrop-filter: blur(4px);">
    <div class="container-fluid">
      <a class="navbar-brand animate__animated animate__fadeInLeft" href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Kirby's Garden">
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
            <router-link class="nav-link animate__animated animate__fadeInDown" to="/" exact exact-active-class="active" @click="closeNavbar" style="animation-delay: 0.1s;">Home</router-link>
          </li>
          <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Scopri il nostro menu">
            <router-link class="nav-link animate__animated animate__fadeInDown" to="/menu" exact exact-active-class="active" @click="closeNavbar" style="animation-delay: 0.2s;">Menu</router-link>
          </li>
          <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Programma eventi">
            <router-link class="nav-link animate__animated animate__fadeInDown" to="/programma" exact exact-active-class="active" @click="closeNavbar" style="animation-delay: 0.3s;">Programma</router-link>
          </li>
          <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Festeggia con noi">
            <router-link class="nav-link animate__animated animate__fadeInDown" to="/compleanni" exact exact-active-class="active" @click="closeNavbar" style="animation-delay: 0.4s;">Compleanni</router-link>
          </li>
          <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Mettiti in contatto">
            <router-link class="nav-link animate__animated animate__fadeInDown" to="/contattaci" exact exact-active-class="active" @click="closeNavbar" style="animation-delay: 0.5s;">Contattaci</router-link>
          </li>
          <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="La nostra storia">
            <router-link class="nav-link animate__animated animate__fadeInDown" to="/chi-siamo" exact exact-active-class="active" @click="closeNavbar" style="animation-delay: 0.6s;">Chi siamo</router-link>
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

/* Navbar base styles */
.navbar {
  background: rgba(0,0,0,0.2) !important;
  box-shadow: none !important;
  transition: all 0.3s ease;
}

.navbar:hover {
  background: rgba(0,0,0,0.4) !important;
}

/* Logo animations */
.logo-hover {
  transition: transform 0.3s ease, filter 0.3s ease;
}

.logo-hover:hover {
  transform: scale(1.1) rotate(5deg);
  filter: brightness(1.2);
}

/* Navigation links */
.nav-link, .navbar-brand {
  color: #fff !important;
  text-shadow: 0 1px 4px rgba(0,0,0,0.7);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-link {
  position: relative;
  z-index: 1;
  transform-origin: center;
}

/* Hover effects with scale animation */
.nav-link:hover {
  color: #ffc107 !important;
  transform: scale(1.05) translateY(-2px);
  text-shadow: 0 2px 8px rgba(255, 193, 7, 0.5);
}

/* Active and focus states */
.nav-link.active,
.nav-link:focus {
  color: #ffc107 !important;
  background: rgba(42,0,0,0.8) !important;
  border-radius: 5px;
  transform: scale(1.02);
}

/* Sliding underline effect */
.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 50%;
  background: linear-gradient(90deg, #ffc107, #ff8c00);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 80%;
}

.nav-link.active::after {
  width: 90%;
  background: linear-gradient(90deg, #ffc107, #ffeb3b);
}

/* Pulse animation for active links */
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

/* Mobile responsive animations */
@media (max-width: 991.98px) {
  .nav-link {
    text-align: center;
    margin: 5px 0;
    border-radius: 25px;
    padding: 10px 20px;
    background: rgba(0,0,0,0.3);
    backdrop-filter: blur(10px);
  }
  
  .nav-link:hover {
    background: rgba(255, 193, 7, 0.2);
    transform: scale(1.02);
  }
}

/* Staggered animation for mobile menu */
.navbar-collapse.show .nav-item {
  animation: slideInFromLeft 0.5s ease forwards;
}

.navbar-collapse.show .nav-item:nth-child(1) { animation-delay: 0.1s; }
.navbar-collapse.show .nav-item:nth-child(2) { animation-delay: 0.2s; }
.navbar-collapse.show .nav-item:nth-child(3) { animation-delay: 0.3s; }
.navbar-collapse.show .nav-item:nth-child(4) { animation-delay: 0.4s; }
.navbar-collapse.show .nav-item:nth-child(5) { animation-delay: 0.5s; }
.navbar-collapse.show .nav-item:nth-child(6) { animation-delay: 0.6s; }

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Navbar brand hover effect */
.navbar-brand:hover {
  transform: scale(1.05);
  text-shadow: 0 2px 8px rgba(255, 193, 7, 0.5);
}

/* Smooth transitions for all elements */
* {
  transition: all 0.3s ease;
}
</style>