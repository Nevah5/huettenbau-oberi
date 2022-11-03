<template>
  <main v-if="notFound">
    <div
      class="w-full max-h-[400px] h-[1/3] min-h-[200px] bg-black-light px-16 py-8"
    >
      <h1 placeholder-loading class="text-[40px] font-bold">
        Diese Galerie wurde nicht gefunden!
      </h1>
    </div>
  </main>
  <main v-else-if="isLoading">
    <div
      class="w-full max-h-[400px] h-[1/3] min-h-[200px] bg-black-light px-16 py-8"
    >
      <h5 class="text-sm">Thema</h5>
      <h1
        class="loading-placeholder h-[40px] w-[520px] overflow-hidden relative bg-black rounded-md"
      ></h1>
    </div>
    <div class="flex flex-wrap justify-center">
      <figure
        v-for="image in (galleryImages as GalleryImage[])"
        :key="image.name"
        class="w-[400px] h-[240px] m-8"
      >
        <div
          class="block h-[200px] w-full bg-black loading-placeholder overflow-hidden relative rounded-md"
        ></div>
        <caption
          class="block w-[120px] h-[30px] loading-placeholder overflow-hidden relative rounded-md bg-black"
        ></caption>
      </figure>
    </div>
  </main>
  <main v-else class="text-black">
    <div
      class="w-full max-h-[400px] h-[1/3] min-h-[200px] bg-black-light px-16 py-8"
    >
      <h5 class="text-sm">Thema</h5>
      <h1 placeholder-loading class="text-[40px] font-bold">
        {{ galleryData?.theme }} - {{ route.params.id }}
      </h1>
    </div>
    <div class="flex flex-wrap justify-center">
      <figure
        v-for="image in (galleryImages as GalleryImage[])"
        :key="image.name"
        class="w-[400px] m-8"
      >
        <img
          :src="image.url"
          :alt="image.name"
          class="h-[200px] w-full rounded-md"
        />
        <caption>
          {{
            image.name
          }}
        </caption>
      </figure>
    </div>
  </main>
</template>

<script lang="ts" setup>
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

<style lang="scss" scoped>
.loading-placeholder::after {
  content: " ";
  box-shadow: 0 0 50px 9px rgba(254, 254, 254);
  position: absolute;
  top: 0;
  left: -100%;
  height: 100%;
  animation: load 1s infinite;
}
@keyframes load {
  0% {
    left: -100%;
  }
  100% {
    left: 150%;
  }
}
</style>
