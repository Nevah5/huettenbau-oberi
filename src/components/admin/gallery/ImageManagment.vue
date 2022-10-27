<template>
  <div v-auto-animate class="mt-16">
    <h2 class="text-2xl font-bold border-b-2 border-black border-b-solid mb-2">
      Verwaltung Bilder
    </h2>
    <p class="mb-4">
      Dieser Abschnitt ist für das Verwalten der Bilder und Beschreibungen
      dieser.<br />Klicke auf die Gallery die du verwalten möchtest:
    </p>
    <div v-if="!galleryData" class="flex justify-start items-center">
      <font-awesome-icon
        icon="fa-solid fa-circle-notch"
        class="animate-spin mr-1"
      />
      <p>Daten werden geladen</p>
    </div>
    <div v-else>
      <div class="flex justify-start items-center gap-2">
        <p
          v-for="(gallery, i) in galleryData"
          :key="gallery.id"
          class="rounded-md p-2 px-3 font-bold hover:bg-black-light relative w-fit cursor-pointer"
          :id="selectedGallery === i ? 'selected' : ''"
          @click="selectedGallery = i"
        >
          {{ gallery.id }}
        </p>
      </div>
      <div class="mt-6">
        <div
          v-if="isStoreDataLoading === true"
          class="flex justify-start items-center gap-2"
        >
          <font-awesome-icon
            icon="fa-solid fa-circle-notch"
            class="animate-spin"
          />
          <p>Dateien werden geladen</p>
        </div>
        <div v-else-if="isStoreDataLoading === false">
          <p>Dateien werden hier angezeigt.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getGalleries, Gallery } from "@/composables/gallery";
import { ref, onMounted, watch } from "vue";

const galleryData = ref<Gallery[]>();
const selectedGallery = ref<number>();
const isStoreDataLoading = ref<boolean>();

onMounted(() => {
  getGalleries().then((d) => {
    galleryData.value = d!;
  });
});

let timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
  return;
});

watch(selectedGallery, () => {
  clearTimeout(timeout);
  isStoreDataLoading.value = true;
  timeout = setTimeout(() => {
    isStoreDataLoading.value = false;
  }, 1000);
});
</script>

<style lang="scss" scoped>
#selected {
  background-color: var(--red);
  color: white;
}
</style>
