<template>
  <div>
    <h2 class="text-2xl font-bold border-b-2 border-black border-b-solid mb-2">
      External Links
    </h2>
    <p class="mb-4">
      Um auf eine externe Seite weiterleiten zu können, musst du hier einen
      Externen Link erstellen.<br />
      Externe Links funktionieren wie folgt:<br />
      Man wird automatisch weitergeleitet wenn man den Link besucht. Dazu wird
      die externe Seite url encoded als Parameter weitergegeben. (Beispiel:
      https://huettenbau-oberi.ch/link?site=https%3A%2F%2Fgoogle.com)<br />
      Um aber "böse Menschen" abzuhalten unsere Seite als "Umhang" zu verwenden
      und böse links zu verwenden (Beispiel:
      https://huettenbau-oberi.ch/link?site=http%3A%2F%2Fganz-boeser-link.darknet),
      wird noch ein weiterer Verifizierungsparameter mitgegeben. Bei Abfrage des
      Links wird dieser in der Datenbank, zusammen mit dem externen Link,
      überprüft. Wenn beide übereinstimmen erfolgt die Weiterleitung. Dies sieht
      so aus:<br />
      <a
        href="https://huettenbau-oberi.ch?link=https://google.com&code=7ddf32e17a6ac5ce04a8ecbf782ca509"
        class="underline text-red"
      >
        https://huettenbau-oberi.ch?link=https://google.com&code=7ddf32e17a6ac5ce04a8ecbf782ca509
      </a>
    </p>
    <ExternalLinkManagment />
  </div>
</template>

<script lang="ts" setup>
import ExternalLinkManagment from "@/components/admin/ExternalLinkManagment.vue";
</script>
