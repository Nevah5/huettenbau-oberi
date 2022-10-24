<template>
  <p v-if="!data" class="flex justify-start items-center">
    <font-awesome-icon
      icon="fa-solid fa-circle-notch"
      class="animate-spin h-[20px] p-3"
    />
    Daten werden geladen...
  </p>
  <div v-else>
    <div class="flex flex-row gap-3 justify-start flex-nowrap">
      <p class="text-sm w-[300px]">External Link</p>
      <p class="text-sm w-[400px]">Code</p>
    </div>
    <div
      class="mb-2 max-w-[900px]"
      v-for="(item, itemIndex) in data"
      :key="item.id"
    >
      <div class="flex flex-row gap-3 justify-start flex-nowrap">
        <input
          type="text"
          v-model.trim="data[itemIndex].link"
          class="appearance-none w-[300px] h-[50px] border-black border-2 p-2 rounded-md font-bold"
        />
        <input
          type="text"
          v-model.trim="data[itemIndex].code"
          class="appearance-none w-[400px] h-[50px] border-black border-2 p-2 rounded-md cursor-not-allowed"
          disabled
        />
        <button class="rounded-md bg-red font-bold text-white px-4 py-2">
          <font-awesome-icon icon="fa-solid fa-trash" />
        </button>
        <button
          class="flex justify-center items-center gap-2 rounded-md bg-red font-bold text-white px-4 py-2"
        >
          <font-awesome-icon icon="fa-solid fa-floppy-disk" />
          <p>Speichern</p>
        </button>
      </div>
      <div class="mt-2 ml-2 pl-2 border-l-2 border-l-red w-full">
        <a
          type="text"
          :href="getUrlOfLink(item.link, item.code)"
          class="appearance-none h-[50px] text-red underline rounded-md font-bold w-full"
          >{{ getUrlOfLink(item.link, item.code) }}</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getExternalLinks, link } from "@/composables/externalLinks";
import { onMounted, ref } from "vue";

const data = ref<link[]>();

onMounted(() => {
  getExternalLinks().then((d) => {
    data.value = d!;
  });
});

const getUrlOfLink = (link: string, code: string): string => {
  return `https://huettenbau-oberi.ch/link?url=${encodeURIComponent(
    link
  )}&code=${code}`;
};
</script>
