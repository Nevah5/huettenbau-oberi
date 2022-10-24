<template>
  <section class="flex justify-center items-center h-full pt-16 md:p-16">
    <h1 class="text-2xl" v-if="isValidLink">
      <font-awesome-icon
        icon="fa-solid fa-circle-notch"
        class="animate-spin mr-2"
      />
      Umleiten
    </h1>
    <h1 class="text-2xl font-bold" v-if="!isValidLink">
      <font-awesome-icon icon="fa-solid fa-triangle-exclamation mr-2" />
      Dieser Link is ungültig
    </h1>
  </section>
</template>

<script setup lang="ts">
import { isExternalLinkValid } from "@/composables/externalLinks";
import { ref, onMounted } from "vue";

const isValidLink = ref<boolean>(true);
const params = new URLSearchParams(window.location.search);

onMounted(() => {
  isExternalLinkValid(params.get("url")!, params.get("code")!)
    .then((isValid) => {
      if (isValid) {
        window.location.href = decodeURIComponent(params.get("url")!);
        return;
      }
      isValidLink.value = false;
    })
    .catch((e) => {
      console.log(e);
    });
});
</script>
