<template>
  <div v-if="isPhone" class="flex justify-start flex-col" v-auto-animate>
    <router-link
      v-if="!data.sub"
      @click="resetStates"
      :to="data.link!"
      class="w-full py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light cursor-pointer my-1"
      >{{ data.display }}</router-link
    >
    <a
      v-else
      :href="data.link!"
      @click="toggleState(data.id)"
      class="w-full py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light cursor-pointer my-1"
      target="_blank"
      >{{ data.display }}</a
    >
    <!-- Sub Links -->
    <div
      class="relative flex w-7/8 justify-start text-black flex-wrap items-center"
      v-if="isShown"
    >
      <router-link
        v-for="sub in data.sub"
        :key="sub.link"
        @click="resetStates"
        :to="sub.link!"
        class="p-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light cursor-pointer"
        >{{ sub.display }}</router-link
      >
      <div
        class="border-red border-b-2 w-full mx-4 mt-4 mb-2"
        v-if="isShown"
      ></div>
    </div>
  </div>
  <!-- For PC view in Navbar -->
  <div v-else-if="!isSub">
    <router-link
      v-if="!data.sub"
      @click="resetStates"
      :to="data.link!"
      class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
      >{{ data.display }}</router-link
    >
    <a
      v-else
      :href="data.link ? data.link : 'javascript:void(0)'"
      @click="toggleState(data.id)"
      class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light cursor-pointer"
      :target="data.link ? '_blank' : ''"
      >{{ data.display }}</a
    >
  </div>
  <!-- For subs in PC Navbar -->
  <div
    v-else-if="data.sub && isShown"
    class="hidden lg:flex flex-wrap justify-end"
  >
    <div v-for="sub in data.sub" :key="sub.link" class="w-fit mt-3 mb-2">
      <router-link
        @click="resetStates"
        :to="sub.link!"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light cursor-pointer"
        >{{ sub.display }}</router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavbarLink",
});
</script>

<script lang="ts" setup>
import { navbarItem } from "@/composables/navbar";
import { computed, defineEmits, defineProps, useAttrs, h } from "vue";

const attr = useAttrs();
const props = defineProps(["doc", "states"]);
const emit = defineEmits(["resetStates", "toggleState"]);
const isSub = attr.sub !== undefined;
const isPhone = attr.phone !== undefined;
const isShown = computed(() => {
  return props.states[props.doc.id] as boolean;
});
const data = computed(() => {
  return props.doc as navbarItem;
});

const toggleState = (state: string): void => {
  emit("toggleState", state);
};

const resetStates = (): void => {
  emit("resetStates");
};
</script>
