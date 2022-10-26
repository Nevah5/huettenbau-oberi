<template>
  <div v-auto-animate>
    <h2 class="text-2xl font-bold border-b-2 border-black border-b-solid mb-2">
      Verwaltung Galerien
    </h2>
    <p class="mb-4">
      Hier kannst du Galerien hinzufügen. Das löschen kann man nur direkt über
      die Datenbank, es sollten ja keine Unfälle passieren. Heisst so viel wie,
      keiner sollte etwas ausversehen löschen.
    </p>
    <div v-if="!data" class="flex justify-start items-center">
      <font-awesome-icon
        icon="fa-solid fa-circle-notch"
        class="animate-spin mr-1"
      />
      <p>Daten werden geladen</p>
    </div>
    <div v-else>
      <div class="flex justify-start items-center gap-2">
        <p class="w-[130px] font-bold">ID (Jahr)</p>
        <p class="w-[200px] font-bold">Thema</p>
        <p class="w-[350px] font-bold">Erstellt von</p>
      </div>
      <div
        v-for="gallery in data"
        :key="gallery.id"
        class="flex justify-start items-center gap-2"
      >
        <p class="w-[130px]">{{ gallery.id }}</p>
        <p class="w-[200px]">{{ gallery.theme }}</p>
        <p class="w-[350px]">{{ gallery.createdUid }}</p>
      </div>
      <div class="mt-8 flex justify-start items-center gap-2">
        <input
          type="text"
          class="w-[130px] appearance-none border-solid border-black border-2 rounded-md px-4 py-2"
          placeholder="ID (Jahr)"
        />
        <input
          type="text"
          class="w-[200px] appearance-none border-solid border-black border-2 rounded-md px-4 py-2"
          placeholder="Thema"
        />
        <button
          type="button"
          class="rounded-md px-4 py-2 bg-red font-bold text-white border-2 border-solid border-red"
        >
          <font-awesome-icon icon="fa-solid fa-plus" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getGalleries, Gallery } from "@/composables/gallery";
import { onMounted, ref } from "vue";

const data = ref<Gallery[]>();

onMounted(() => {
  getGalleries().then((d) => (data.value = d!));
});
</script>
