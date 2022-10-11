<template>
  <div v-if="isPhone" class="flex justify-end flex-col">
    <router-link
      v-if="!data.sub && !data.isExternal"
      @click="resetStates"
      :to="data.link!"
      class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light cursor-pointer my-1"
      >{{ data.display }}</router-link
    >
    <a
      v-else
      :href="data.link!"
      @click="data.sub ? toggleState(data.id) : null"
      class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light cursor-pointer my-1"
      target="_blank"
      >{{ data.display }}</a
    >
    <div
      class="flex w-7/8 justify-start text-black flex-wrap border-red border-l-2 pl-4 ml-4"
      v-auto-animate
      v-for="sub in data.sub"
      :key="sub.link"
    >
      <router-link
        v-if="!sub.isExternal && isShown"
        @click="resetStates"
        :to="sub.link!"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light cursor-pointer"
        >{{ sub.display }}</router-link
      >
      <a
        v-else-if="isShown"
        :href="sub.link!"
        @click="resetStates"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light cursor-pointer"
        target="_blank"
        >{{ sub.display }}</a
      >
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
  <div class="mt-3 mb-2" v-else-if="data.sub && isShown">
    <div v-for="sub in data.sub" :key="sub.link">
      <router-link
        v-if="!sub.isExternal"
        @click="resetStates"
        :to="sub.link!"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
        >{{ sub.display }}</router-link
      >
      <a
        v-else
        :href="sub.link!"
        @click="toggleState(data.id)"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light cursor-pointer"
        target="_blank"
        >{{ sub.display }}</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { navbarItem } from "@/vue/navbar";
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
