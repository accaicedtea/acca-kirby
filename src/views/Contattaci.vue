<template>
    <Title
    :image="slice1"
    title="Contattaci"
    alt="Contattaci"
    height="220px"
    :brightness="0.6"
    letterSpacing="2px"
    textShadow="0 2px 16px #000"
  />
  <section class="container-fluid py-5 bg-gray">
    <div class="text-center mb-4">
      <h2 class="fw-bold text-uppercase" style="color:#bfa76f; letter-spacing:2px; font-size:2rem;">Scrivici per informazioni</h2>
    </div>
    <form class="mx-auto col-lg-6 col-md-8 col-sm-10 col-12 p-4 rounded shadow">
      <div class="mb-4">
        <input type="text" class="form-control form-control-lg bg-transparent text-white border-secondary" id="name"
          placeholder="Nome..." required style="border-width:2px;" />
      </div>
      <div class="mb-4">
        <input type="email" class="form-control form-control-lg bg-transparent text-white border-secondary" id="email"
          placeholder="Email..." required style="border-width:2px;" />
      </div>
      <div class="mb-4">
        <input type="text" class="form-control form-control-lg bg-transparent text-white border-secondary" id="subject"
          placeholder="Oggetto..." required style="border-width:2px;" />
      </div>
      <div class="mb-4">
        <textarea class="form-control form-control-lg bg-transparent text-white border-secondary" id="message" rows="4"
          placeholder="Messaggio..." required style="border-width:2px;"></textarea>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-light px-5 py-2 fw-bold">Invia</button>
      </div>
    </form>
  </section>
  <!-- Divisore personalizzato -->
  <div class="w-100 d-flex justify-content-center align-items-center" style="background: #222; height: 120px;">
    <div style="height: 48px; width: 6px; background: #fff; border-radius: 3px;"></div>
    <div style="width: 80px; height: 6px; background: #bfa76f; border-radius: 3px; margin-left: 32px;"></div>
  </div>

  <!-- Sezione contatti in stile icone grandi e testo centrato -->
  <section class="container-fluid py-5">
    <div class="row text-center justify-content-center">
      <div class="col-md-4 mb-4">
        <div>
          <i class="bi bi-geo-alt-fill" style="font-size: 64px; color: #bfa76f;"></i>
          <h4 class="mt-3 mb-2 text-uppercase letter-spacing-1" style="letter-spacing: 2px;">Dove siamo</h4>
          <p class="mb-1 fs-5">
            <a href="https://www.google.com/maps/search/?api=1&query=Via+dei+mille+8,+Marino" target="_blank" rel="noopener" style="color: #337ab7; text-decoration: none;">
              Via dei mille 8
            </a>
          </p>
          <p class="mb-0 fs-5">Marino (100 mt dal Palaghiaccio)</p>
          <div class="mt-3 rounded shadow overflow-hidden" style="height:220px;">
            <iframe
              src="https://www.google.com/maps?q=Via+dei+mille+8,+Marino&output=embed"
              width="100%"
              height="220"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Mappa Google"
            ></iframe>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div>
          <i class="bi bi-phone" style="font-size: 64px; color: #bfa76f;"></i>
          <h4 class="mt-3 mb-2 text-uppercase letter-spacing-1" style="letter-spacing: 2px;">Telefono</h4>
          <p class="mb-0 fs-5">
            <a href="tel:0693543044" style="color: #337ab7; text-decoration: none;">06-93543044 dalle 17:30</a>
          </p>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div>
          <i class="bi bi-envelope" style="font-size: 64px; color: #bfa76f;"></i>
          <h4 class="mt-3 mb-2 text-uppercase letter-spacing-1" style="letter-spacing: 2px;">Email</h4>
          <p class="mb-0 fs-5">
            <a href="mailto:info@azienda.it" style="color: #337ab7; text-decoration: none;">info@azienda.it</a>
          </p>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup>
import Title from '../components/Title.vue';
import slice1 from '../assets/slide1.jpg';
</script>
