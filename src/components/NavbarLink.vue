<template>
  <div v-if="isPhone" class="flex justify-start flex-col">
    <router-link
      v-if="!data.sub && !data.isExternal"
      @click="resetStates"
      :to="data.link!"
      class="w-full py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light cursor-pointer my-1"
      >{{ data.display }}</router-link
    >
    <a
      v-else
      :href="data.link!"
      @click="data.sub ? toggleState(data.id) : null"
      class="w-full py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light cursor-pointer my-1"
      target="_blank"
      >{{ data.display }}</a
    >
    <div
      class="relative flex w-7/8 justify-start text-black flex-wrap items-center"
      v-auto-animate
    >
      <div v-for="sub in data.sub" :key="sub.link">
        <router-link
          v-if="!sub.isExternal && isShown"
          @click="resetStates"
          :to="sub.link!"
          class="p-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light cursor-pointer"
          >{{ sub.display }}</router-link
        >
        <a
          v-else-if="isShown"
          :href="sub.link!"
          @click="resetStates"
          class="p-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light cursor-pointer"
          target="_blank"
          >{{ sub.display }}</a
        >
      </div>
      <div
        class="border-red border-b-2 w-full mx-4 mt-4 mb-2"
        v-if="isShown"
      ></div>
    </div>
  </div>
  <div v-else-if="!isSub">
    <router-link
      v-if="!data.sub && !data.isExternal"
      @click="resetStates"
      :to="data.link!"
      class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
      >{{ data.display }}</router-link
    >
    <a
      v-else
      :href="data.link!"
      @click="data.sub ? toggleState(data.id) : null"
      class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light cursor-pointer"
      target="_blank"
      >{{ data.display }}</a
    >
  </div>
  <div
    v-else-if="data.sub && isShown"
    class="hidden lg:flex flex-wrap justify-end"
  >
    <div v-for="sub in data.sub" :key="sub.link" class="w-fit mt-3 mb-2">
      <router-link
        v-if="!sub.isExternal"
        @click="resetStates"
        :to="sub.link!"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light cursor-pointer"
        >{{ sub.display }}</router-link
      >
      <a
        v-else
        :href="sub.link!"
        @click="toggleState(data.id)"
        target="_blank"
        class="mt-3 mb-2 py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light cursor-pointer"
        >{{ sub.display }}</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { navbarItem } from "@/composables/navbar";
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "NavbarLink",
  props: ["doc", "states"],
  emits: ["resetStates", "toggleState"],
  setup(props, ctx) {
    const isSub = ctx.attrs.sub !== undefined;
    const isPhone = ctx.attrs.phone !== undefined;
    const isShown = computed(() => {
      return props.states[props.doc.id] as boolean;
    });
    const data = computed(() => {
      return props.doc as navbarItem;
    });

    const toggleState = (state: string): void => {
      ctx.emit("toggleState", state);
    };

    const resetStates = (): void => {
      ctx.emit("resetStates");
    };

    return {
      data,
      isShown,
      resetStates,
      toggleState,
      isPhone,
      isSub,
    };
  },
});
</script>
