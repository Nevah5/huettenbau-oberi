<template>
  <h2 class="text-2xl font-bold border-b-2 border-black border-b-solid mb-2">
    Verwaltung Banner
  </h2>
  <p class="mb-4">Hier kannst du die Banner der Galerien verwalten.</p>
  <div v-auto-animate>
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
          @click="selectGallery(i)"
        >
          {{ gallery.id }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getGalleries, Gallery } from "@/composables/gallery";
import { ref, onMounted, watch } from "vue";

const galleryData = ref<Gallery[]>();
const selectedGallery = ref<number>();

onMounted(() => {
  getGalleries().then((d) => {
    galleryData.value = d!;
  });
});

watch(selectedGallery, () => {
  if (selectedGallery.value === null || selectedGallery.value === undefined)
    return;
});

const selectGallery = (index: number) => {
  selectedGallery.value = index;
};
</script>

<style lang="scss" scoped>
#selected {
  background-color: var(--red);
  color: white;
}
</style>
