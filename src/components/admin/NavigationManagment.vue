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
      <p class="text-sm w-[50px]">Nr.</p>
      <p class="text-sm w-[200px]">Anzeigetext</p>
      <p class="text-sm w-[400px]">Link</p>
    </div>
    <div
      class="mb-2"
      v-for="(item, itemIndex) in (data as navbarItem[])"
      :key="item.id"
    >
      <div class="flex flex-row gap-3 justify-start flex-nowrap">
        <input
          type="text"
          v-model.trim="data[itemIndex].order"
          class="appearance-none w-[50px] h-[50px] border-black border-2 text-center rounded-md font-bold"
        />
        <input
          type="text"
          v-model.trim="data[itemIndex].display"
          class="appearance-none w-[200px] h-[50px] border-black border-2 p-2 rounded-md font-bold"
        />
        <input
          type="text"
          v-if="!data[itemIndex].sub"
          v-model.trim="data[itemIndex].link"
          class="appearance-none w-[400px] h-[50px] border-black border-2 p-2 rounded-md font-bold"
        />
        <button
          class="flex justify-start items-center gap-2 rounded-md bg-red font-bold text-white px-4 py-2"
          @click="saveNavSection(item.id)"
        >
          <font-awesome-icon icon="fa-solid fa-floppy-disk" />
          <p>Speichern</p>
        </button>
      </div>
      <div v-if="item.sub">
        <div
          class="border-l-black border-l-2 p-2 pl-4 ml-2 mt-2 flex flex-row justify-start flex-nowrap gap-3"
          v-for="(sub, subIndex) in data[itemIndex].sub"
          :key="sub.display"
        >
          <input
            type="text"
            v-model.trim="sub.order"
            class="appearance-none w-[50px] h-[50px] border-black border-2 text-center rounded-md font-bold"
          />
          <input
            type="text"
            v-model.trim="sub.display"
            class="appearance-none w-[200px] h-[50px] border-black border-2 p-2 rounded-md font-bold"
          />
          <input
            type="text"
            v-model.trim="sub.link"
            class="appearance-none w-[330px] h-[50px] border-black border-2 p-2 rounded-md font-bold"
          />
          <button
            class="rounded-md bg-red font-bold text-white px-4 py-2"
            @click="removeSubLink(item.id, subIndex)"
          >
            <font-awesome-icon icon="fa-solid fa-trash" />
          </button>
        </div>
        <div
          class="border-l-black border-l-2 p-2 m-2 flex flex-row justify-start flex-nowrap gap-3"
        >
          <button
            class="rounded-md bg-red font-bold text-white px-4 py-2"
            v-if="item.sub"
            @click="addSubLink(item.id)"
          >
            <font-awesome-icon icon="fa-solid fa-plus" />
            Link hinzufügen
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getNavbarData, navbarItem, navbarSub } from "@/composables/navbar";
import { onMounted, ref } from "vue";

const data = ref();

onMounted(async () => {
  data.value = await getNavbarData();
});

const addSubLink = (docId: string) => {
  let nav: navbarItem = data.value.find((obj: navbarItem) => obj.id === docId);
  nav.sub?.push({
    order: 0,
    display: "New Link",
    link: "/path/to/site",
  });
};

const removeSubLink = (docId: string, subIndex: number) => {
  let nav: navbarItem = data.value.find((obj: navbarItem) => obj.id === docId);
  nav.sub?.splice(subIndex, 1);
};

const saveNavSection = (docId: string) => {
  let nav: navbarItem = data.value.find((obj: navbarItem) => obj.id === docId);
  console.log("To be updated on Firestore:", nav);
};
</script>
