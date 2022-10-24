<template>
  <p v-if="!data" class="flex justify-start items-center">
    <font-awesome-icon
      icon="fa-solid fa-circle-notch"
      class="animate-spin h-[20px] p-3"
    />
    Daten werden geladen...
  </p>
  <div v-else v-auto-animate>
    <div
      class="flex flex-row gap-3 justify-start flex-nowrap"
      v-if="data.length !== 0"
    >
      <p class="text-sm w-[300px]">Externer Link</p>
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
        <button
          class="rounded-md bg-red font-bold text-white px-4 py-2"
          @click="deleteLink(item)"
        >
          <font-awesome-icon icon="fa-solid fa-trash" />
        </button>
        <button
          class="flex justify-center items-center gap-2 rounded-md bg-red font-bold text-white px-4 py-2"
          @click="updateLink(item)"
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
    <form
      class="flex justify-start items-center gap-2"
      @submit.prevent="addLink"
    >
      <input
        type="text"
        class="border-2 border-black border-solid px-4 py-2 rounded-md"
        placeholder="External Link hier"
        v-model.trim="linkToAdd"
      />
      <button
        type="submit"
        class="flex justify-start items-center gap-2 border-red border-solid border-2 bg-red font-bold text-white px-4 py-2 rounded-md"
      >
        <font-awesome-icon
          icon="fa-solid fa-circle-notch"
          class="animate-spin"
          v-if="isLoading"
        />
        <p>Hinzufügen</p>
      </button>
      <p class="text-red font-bold" v-if="errorMessage">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import {
  getExternalLinks,
  externalLink,
  updateExternalLink,
  deleteExternalLink,
  addExternalLink,
} from "@/composables/externalLinks";
import { onMounted, ref } from "vue";

const data = ref<externalLink[]>();
const isLoading = ref<boolean>();
const linkToAdd = ref<string>();
const errorMessage = ref<string>();

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

const updateLink = (newLink: externalLink): void => {
  updateExternalLink(newLink).catch((e) => {
    console.log(e);
  });
};

const deleteLink = (link: externalLink): void => {
  deleteExternalLink(link).then(() => {
    data.value = data.value?.filter((l: externalLink) => {
      return l.id !== link.id;
    });
  });
};

const addLink = (): void => {
  if (linkToAdd.value === "" || linkToAdd.value === undefined) return;
  errorMessage.value = "";
  isLoading.value = true;
  addExternalLink(linkToAdd.value)
    .then((newLink) => {
      data.value?.push(newLink as externalLink);
      isLoading.value = false;
      linkToAdd.value = "";
    })
    .catch((e) => {
      console.log(e);
      errorMessage.value = "Etwas ist schief gelaufen!";
    });
};
</script>
