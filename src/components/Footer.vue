<template>
  <footer class="text-white py-4 mt-auto">
    <div class="container">
      <!-- Sezione Contatti e Mappa -->
      <div class="row text-center mb-4">
        <div class="col-12">
          <p class="mb-2"><strong>Il Vecchio Torchio S.r.l.</strong></p>
          <p v-for="link in contactLinks" :key="link.text" class="mb-2">
            <a :href="link.href" :target="link.target" :rel="link.rel" class="footer-link">
              <i :class="link.iconClass"></i>{{ link.text }}
            </a>
          </p>
        </div>
      </div>

      <!-- Divisore -->
      <hr class="footer-divider">

      <!-- Sezione Copyright e Social -->
      <div class="d-flex flex-column flex-sm-row justify-content-between align-items-center">
        <div class="text-center text-sm-start mb-3 mb-sm-0">
            <p class="mb-1 small">
                P.IVA: 12345678901 | Capitale Sociale: € 10.000,00 i.v. | 
                <router-link to="/privacy" class="footer-link small">Privacy Policy</router-link>
            </p>
            <p class="mb-0 small">&copy; {{ new Date().getFullYear() }} Il Vecchio Torchio. Tutti i diritti riservati.</p>
        </div>
        <div class="social-icons text-center text-sm-end">
          <a v-for="(social, index) in socialLinks" :key="social.ariaLabel" :href="social.href" class="social-icon" :class="{ 'me-3': index < socialLinks.length - 1 }" :aria-label="social.ariaLabel">
            <i :class="social.iconClass"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const contactLinks = ref([
  {
    href: 'https://www.google.com/maps/search/?api=1&query=Via+Roma+123,+Marino',
    iconClass: 'bi bi-geo-alt-fill me-2',
    text: 'Via Roma, 123 - 00040, Marino (RM)',
    target: '_blank',
    rel: 'noopener'
  },
  {
    href: 'tel:0693543044',
    iconClass: 'bi bi-telephone-fill me-2',
    text: '06-93543044',
    target: null,
    rel: null
  }
]);

const socialLinks = ref([
  { href: '#', ariaLabel: 'Twitter', iconClass: 'bi bi-twitter' },
  { href: '#', ariaLabel: 'Instagram', iconClass: 'bi bi-instagram' },
  { href: '#', ariaLabel: 'Facebook', iconClass: 'bi bi-facebook' }
]);
</script>

<style scoped>
footer {
  background-color: #20140a; /* Marrone scuro del tema */
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  padding-top: 2.5rem !important;
  padding-bottom: 2.5rem !important;
}

.footer-divider {
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin: 1.5rem 0;
}

footer p {
  margin-bottom: 0.5rem;
}

footer strong {
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-link:hover {
  color: #fff;
}

.social-icons a {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
  text-decoration: none;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #bfa76f; /* Oro/Giallo del tema */
}

.small {
    font-size: 0.8rem;
}
</style>
