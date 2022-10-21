<template>
  <div>
    <h2 class="text-2xl font-bold border-b-2 border-black border-b-solid mb-2">
      Verwaltung Navigation
    </h2>
    <p class="mb-4">
      Auf dieser Seite kannst du die Navigationsleiste oben verwalten.<br />
      Zurzeit kann keine Hauptlinks hinzufügen oder entfernen, da das Responsive
      Design fix in die Seite integriert wurde, daher melde dich bei Änderungen
      gleich bei Noah.
    </p>
    <div>
      <div class="flex flex-row gap-5 justify-start flex-nowrap">
        <p class="text-sm w-[50px]">Nr.</p>
        <p class="text-sm w-[200px]">Anzeigetext</p>
        <p class="text-sm w-[400px]">Link</p>
      </div>
      <div class="mb-2" v-for="item in (data as navbarItem[])" :key="item.id">
        <div class="flex flex-row gap-5 justify-start flex-nowrap">
          <input
            type="text"
            :value="item.order"
            class="appearance-none w-[50px] h-[50px] border-black border-2 text-center rounded-md font-bold"
          />
          <input
            type="text"
            :value="item.display"
            class="appearance-none w-[200px] h-[50px] border-black border-2 p-2 rounded-md font-bold"
          />
          <input
            type="text"
            v-if="!item.sub"
            :value="item.link"
            class="appearance-none w-[400px] h-[50px] border-black border-2 p-2 rounded-md font-bold"
          />
        </div>
        <div
          class="border-l-black border-l-2 p-2 ml-2 mt-2 flex flex-row justify-start flex-nowrap gap-3"
          v-for="sub in item.sub"
          :key="sub.display"
        >
          <input
            type="text"
            :value="sub.order"
            class="appearance-none w-[50px] h-[50px] border-black border-2 text-center rounded-md font-bold"
          />
          <input
            type="text"
            :value="sub.display"
            class="appearance-none w-[200px] h-[50px] border-black border-2 p-2 rounded-md font-bold"
          />
          <input
            type="text"
            :value="sub.link"
            class="appearance-none w-[330px] h-[50px] border-black border-2 p-2 rounded-md font-bold"
          />
          <button class="rounded-md bg-red font-bold text-white px-4 py-2">
            <font-awesome-icon icon="fa-solid fa-trash" />
          </button>
        </div>
        <div
          class="border-l-black border-l-2 p-2 m-2 flex flex-row justify-start flex-nowrap gap-3"
        >
          <button
            class="rounded-md bg-red font-bold text-white px-4 py-2"
            v-if="item.sub"
          >
            <font-awesome-icon icon="fa-solid fa-plus" />
            Link hinzufügen
          </button>
        </div>
      </div>
      <div class="flex flex-row justify-start gap-3 mt-8">
        <button class="rounded-md bg-red font-bold text-white px-4 py-2">
          Speichern
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getNavbarData, navbarItem } from "@/composables/navbar";
import { onMounted, ref } from "vue";

const data = ref();

onMounted(async () => {
  data.value = await getNavbarData();
});
</script>
