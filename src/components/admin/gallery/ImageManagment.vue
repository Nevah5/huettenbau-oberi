<template>
  <div v-auto-animate class="mt-16">
    <h2 class="text-2xl font-bold border-b-2 border-black border-b-solid mb-2">
      Verwaltung Bilder
    </h2>
    <p class="mb-4">
      Dieser Abschnitt ist für das Verwalten der Bilder und Beschreibungen
      dieser.
    </p>
    <div v-if="!data" class="flex justify-start items-center">
      <font-awesome-icon
        icon="fa-solid fa-circle-notch"
        class="animate-spin mr-1"
      />
      <p>Daten werden geladen</p>
    </div>
    <div v-else>Bilder werden hier Verwaltet...</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const data = ref();
</script>
