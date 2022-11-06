<template>
  <main v-if="notFound">
    <div
      class="w-full max-h-[400px] h-[1/3] min-h-[200px] bg-black-light px-16 py-8"
    >
      <h1 class="text-[40px] font-bold text-black">
        Diese Galerie wurde nicht gefunden!
      </h1>
    </div>
  </main>
  <!-- <main v-else-if="true"> -->
  <main v-else-if="isLoading">
    <div
      class="w-full max-h-[400px] h-[1/3] min-h-[200px] bg-black-light px-16 py-8"
    >
      <h5 class="text-sm">Thema</h5>
      <h1
        placeholder-animation
        class="h-[40px] w-[520px] overflow-hidden relative bg-black-medium rounded-md"
      ></h1>
    </div>
    <div class="flex flex-wrap justify-center">
      <ImageCard :is-loading="true" />
      <ImageCard :is-loading="true" />
      <ImageCard :is-loading="true" />
      <ImageCard :is-loading="true" />
      <ImageCard :is-loading="true" />
    </div>
  </main>
  <main v-else class="text-black">
    <div
      class="w-full max-h-[400px] h-[1/3] min-h-[200px] bg-black-light px-16 py-8"
    >
      <h5 class="text-sm">Thema</h5>
      <h1 class="text-[40px] font-bold">
        {{ galleryData?.theme }} - {{ route.params.id }}
      </h1>
    </div>
    <div class="flex flex-wrap justify-center">
      <ImageCard
        v-for="image, imgIndex in (galleryImages as GalleryImage[])"
        :key="imgIndex"
        :is-loading="false"
        :data="image"
      />
    </div>
  </main>
</template>

<script lang="ts" setup>
import ImageCard from "@/components/gallery/ImageCard.vue";
import {
  getGalleryImages,
  getGallery,
  Gallery,
  GalleryImage,
} from "@/composables/gallery";
import { onMounted, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

const notFound = ref<boolean>(false);
const isLoading = ref<boolean>(true);
const galleryData = ref<Gallery>();
const galleryImages = ref<GalleryImage[]>();
const route = useRoute();

const loadData = async (id: string | string[]) => {
  let idComputed = "";
  if (id.length === 1) {
    idComputed = id[0];
  } else if (typeof id === "string") {
    idComputed = id;
  }
  isLoading.value = true;
  await getGallery(idComputed).then((gallery) => {
    galleryData.value = gallery!;
  });
  if (galleryData.value === undefined) {
    notFound.value = true;
    return;
  }
  getGalleryImages(idComputed).then((imgs) => {
    galleryImages.value = imgs as GalleryImage[];
    isLoading.value = false;
  });
};
watchEffect(() => {
  loadData(route.params.id);
});

onMounted(() => {
  loadData(route.params.id);
});
</script>
