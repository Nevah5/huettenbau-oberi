<template>
  <h2
    class="text-2xl font-bold border-b-2 border-black border-b-solid mb-2 mt-16"
  >
    Verwaltung Bilder
  </h2>
  <p class="mb-4">
    Dieser Abschnitt ist für das Verwalten der Bilder und Beschreibungen
    dieser.<br />Klicke auf die Galerie die du verwalten möchtest:
  </p>
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
        <div
          v-else-if="
            isStoreDataLoading === false &&
            !errorMessage &&
            storageData?.length === 0
          "
        >
          <h4 class="text-black">Diese Galerie hat noch keine Daten.</h4>
        </div>
        <div v-else-if="isStoreDataLoading === false && !errorMessage">
          <div class="flex justify-start gap-2">
            <p class="w-[100px]">Nr.</p>
            <p class="w-[600px]">Dateiname</p>
          </div>
          <div
            v-for="(data) in (storageData as GalleryImage[])"
            :key="data.fullPath"
            class="flex justify-start items-center gap-2 w-fit"
          >
            <p class="w-[100px]">ID</p>
            <a
              :href="data.url"
              class="underline text-red w-fit"
              target="_blank"
              >{{ data.name }}</a
            >
          </div>
        </div>
        <p v-else-if="errorMessage" class="font-bold text-red">
          {{ errorMessage }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  getGalleries,
  Gallery,
  GalleryImage,
  getGalleryImages,
} from "@/composables/gallery";
import { ref, onMounted, watch } from "vue";

const galleryData = ref<Gallery[]>();
const storageData = ref<GalleryImage[]>();
const selectedGallery = ref<number>();
const isStoreDataLoading = ref<boolean>();
const errorMessage = ref<string>();

onMounted(() => {
  getGalleries().then((d) => {
    galleryData.value = d!;
  });
});

watch(selectedGallery, () => {
  if (
    selectedGallery.value === null ||
    selectedGallery.value === undefined ||
    galleryData.value === null ||
    galleryData.value === undefined
  )
    return;
  isStoreDataLoading.value = true;
  let gallerySelected: Gallery | undefined = galleryData.value.at(
    selectedGallery.value
  );
  if (gallerySelected === undefined) return;
  getGalleryImages(gallerySelected.id!).then((value) => {
    isStoreDataLoading.value = false;
    storageData.value = value as GalleryImage[];
  });
});

const selectGallery = (index: number) => {
  if (isStoreDataLoading.value === true) return;
  selectedGallery.value = index;
};
</script>

<style lang="scss" scoped>
#selected {
  background-color: var(--red);
  color: white;
}
</style>
