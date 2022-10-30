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
          <form
            class="my-6 flex justify-center items-start flex-col gap-2 w-fit"
            @submit.prevent="uploadImages"
          >
            <label class="block">
              <span class="sr-only">Choose profile photo</span>
              <input
                type="file"
                class="block w-full text-sm text-black file:mr-4 file:py-2 file:px-4 file:rounded-md file:cursor-pointer hover:file:text-white file:border-0 file:text-sm file:font-semibold file:bg-black-light file:text-red hover:file:bg-red"
                multiple
              />
            </label>
            <div class="flex justify-start items-start gap-2 h-[60px]">
              <button
                type="submit"
                class="py-2 px-4 bg-red text-white font-bold rounded-md"
              >
                Upload
              </button>
              <div
                v-if="uploadPercentage && uploadPercentage <= 100"
                class="text-black flex flex-col justify-center items-start"
              >
                <p class="text-black">Lädt hoch...</p>
                <div class="w-[400px] bg-black-light h-[20px]">
                  <div
                    class="bg-red flex justify-center items-center h-full text-white font-bold"
                    :style="'width:' + (400 / 100) * uploadPercentage + 'px'"
                  >
                    {{ uploadPercentage }}%
                  </div>
                </div>
              </div>
              <p v-else-if="uploadPercentage" class="text-black">Fertig!</p>
            </div>
          </form>
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
const uploadPercentage = ref<number>();

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
const uploadImages = () => {
  uploadPercentage.value = 0;
  const interval = setInterval(() => {
    uploadPercentage.value = uploadPercentage.value! + 1;
    if (uploadPercentage.value === 100) clearInterval(interval);
  }, 50);
};
</script>

<style lang="scss" scoped>
#selected {
  background-color: var(--red);
  color: white;
}
</style>
