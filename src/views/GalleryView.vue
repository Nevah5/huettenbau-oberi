<template>
  <main v-if="isLoading">
    <div
      class="w-full max-h-[400px] h-[1/3] min-h-[200px] bg-black-light px-16 py-8"
    >
      <h5 class="text-sm">Thema</h5>
      <h1
        class="loading-placeholder h-[40px] w-[520px] overflow-hidden relative bg-black rounded-md"
      ></h1>
    </div>
  </main>
  <main v-else class="text-black">
    <div
      class="w-full max-h-[400px] h-[1/3] min-h-[200px] bg-black-light px-16 py-8"
    >
      <h5 class="text-sm">Thema</h5>
      <h1 placeholder-loading class="text-[40px] font-bold">
        {{ galleryData?.theme }} - {{ id }}
      </h1>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { getGalleryImages, getGallery, Gallery } from "@/composables/gallery";
import { onMounted, ref } from "vue";

const path = window.location.pathname;
const id = path.split("/")[path.split("/").length - 1];
const isLoading = ref<boolean>(true);
const galleryData = ref<Gallery>();

onMounted(async () => {
  await getGallery(id).then((gallery) => {
    galleryData.value = gallery!;
  });
  getGalleryImages(id).then((data) => {
    isLoading.value = false;
  });
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
