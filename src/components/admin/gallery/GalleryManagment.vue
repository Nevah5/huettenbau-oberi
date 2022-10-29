<template>
  <h2 class="text-2xl font-bold border-b-2 border-black border-b-solid mb-2">
    Verwaltung Galerien
  </h2>
  <p class="mb-4">
    Hier kannst du Galerien hinzufügen. Das löschen kann man nur direkt über die
    Datenbank, es sollten ja keine Unfälle passieren. Heisst so viel wie, keiner
    sollte etwas ausversehen löschen.
  </p>
  <div v-if="!data" class="flex justify-start items-center">
    <font-awesome-icon
      icon="fa-solid fa-circle-notch"
      class="animate-spin mr-1"
    />
    <p>Daten werden geladen</p>
  </div>
  <div v-else>
    <div class="flex justify-start items-center gap-2">
      <p class="w-[130px] font-bold">ID (Jahr)</p>
      <p class="w-[200px] font-bold">Thema</p>
      <p class="w-[350px] font-bold">Erstellt von</p>
    </div>
    <div
      v-for="gallery in data"
      :key="gallery.id"
      class="flex justify-start items-center gap-2"
    >
      <p class="w-[130px]">{{ gallery.id }}</p>
      <p class="w-[200px]">{{ gallery.theme }}</p>
      <p class="w-[350px]">{{ gallery.createdUid }}</p>
    </div>
    <form
      class="mt-8 flex justify-start items-center gap-2"
      @submit.prevent="add"
    >
      <input
        type="text"
        v-model.trim="inputData.id"
        class="w-[130px] appearance-none border-solid border-black border-2 rounded-md px-4 py-2"
        placeholder="ID (Jahr)"
      />
      <input
        type="text"
        v-model.trim="inputData.theme"
        class="w-[200px] appearance-none border-solid border-black border-2 rounded-md px-4 py-2"
        placeholder="Thema"
      />
      <button
        type="submit"
        class="rounded-md px-4 py-2 bg-red font-bold text-white border-2 border-solid border-red"
      >
        <font-awesome-icon icon="fa-solid fa-plus" />
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { loggedInUser } from "@/composables/account";
import { getGalleries, Gallery, addGallery } from "@/composables/gallery";
import { User } from "@firebase/auth";
import { onMounted, ref } from "vue";

const user: User = loggedInUser()!;
const data = ref<Gallery[]>();
const inputData = ref<Gallery>({
  id: "",
  theme: "",
  createdUid: "",
});

onMounted(() => {
  getGalleries().then((d) => (data.value = d!));
});

const add = () => {
  inputData.value.createdUid = user.uid!;
  addGallery(inputData.value);

  if (!data.value?.find((obj) => obj.id === inputData.value.id)) {
    data.value?.push(inputData.value);
  } else {
    let data_keys = Object.keys(data.value);
    for (let i = 0; i < data_keys.length; i++) {
      if (data.value[i].id === inputData.value.id) {
        data.value[i] = { ...inputData.value };
      }
    }
  }
  inputData.value = {
    id: "",
    theme: "",
    createdUid: "",
  };
};
</script>
