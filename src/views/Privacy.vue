<template>
<
  <div class="container-fluid py-5">
    <div class="container privacy-container  p-4 p-md-5 rounded shadow">
      <h1 class="display-5 fw-bold text-center mb-4">Informativa sulla Privacy</h1>
      <p class="lead text-center mb-5">
        La tua privacy è importante per noi. In questa pagina ti spieghiamo quali dati trattiamo, perché e come li proteggiamo.
      </p>

      <hr class="my-5">

      <h2 class="h4 fw-bold mb-3">Nessuna raccolta di dati personali</h2>
      <p>
        Vogliamo essere chiari e trasparenti: <strong>questo sito web non raccoglie, memorizza o tratta alcun dato personale degli utenti.</strong>
      </p>
      <p>
        Non utilizziamo cookie di profilazione, sistemi di tracciamento, né richiediamo la registrazione o l'inserimento di informazioni personali per navigare il sito. L'unica interazione possibile che prevede l'invio di dati è tramite il modulo di contatto, le cui informazioni vengono utilizzate al solo scopo di rispondere alle tue richieste.
      </p>

      <h2 class="h4 fw-bold mt-5 mb-3">Modulo di Contatto</h2>
      <p>
        Quando utilizzi il nostro modulo di contatto, i dati che inserisci (come nome ed email) vengono inviati direttamente alla nostra casella di posta elettronica. Utilizziamo queste informazioni esclusivamente per poterti rispondere. Non vengono memorizzate in alcun database sul sito, non vengono cedute a terzi e non verranno mai utilizzate per scopi di marketing senza il tuo esplicito consenso.
      </p>

      <h2 class="h4 fw-bold mt-5 mb-3">Dati di Navigazione Anonimi</h2>
      <p>
        Come tutti i siti web, il server su cui siamo ospitati potrebbe registrare informazioni anonime sulla navigazione (log di sistema), come l'indirizzo IP (in forma anonima), il tipo di browser e l'orario di accesso. Questi dati vengono utilizzati solo a fini statistici e per garantire la sicurezza del sito, e non sono in alcun modo collegati alla tua identità.
      </p>

      <h2 class="h4 fw-bold mt-5 mb-3">I tuoi diritti</h2>
      <p>
        Anche se non raccogliamo dati, hai sempre il diritto di essere informato. Per qualsiasi domanda o dubbio riguardo alla nostra politica sulla privacy, non esitare a contattarci.
      </p>

      <p class="text-center fst-italic mt-5">
        Questa informativa è stata aggiornata il 14 Luglio 2025.
      </p>
    </div>
  </div>
</template>

<script setup>
// Nessuna logica necessaria per questa pagina statica
</script>

<style scoped>
.container-fluid {
  background-color: #20140a; /* Sfondo scuro del tema */
}

.privacy-container {
  background-color: #2d1c0e; /* Sfondo leggermente più chiaro per il box */
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid #a67c52;
}

h1, h2 {
  color: #d1b793; /* Colore oro per i titoli */
  font-family: 'Cinzel', serif;
}

hr {
  border-top: 1px solid rgba(166, 124, 82, 0.3);
}

strong {
  color: #fff;
}
</style>
