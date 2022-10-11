<template>
  <div v-if="!isSub">
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavbarLink",
  props: ["doc", "isShown"],
  emits: ["resetStates", "toggleState"],
  setup(props, ctx) {
    const isSub = ctx.attrs.sub !== undefined;

    const toggleState = (state: string): void => {
      ctx.emit("toggleState", state);
    };

    const resetStates = (): void => {
      ctx.emit("resetStates");
    };

    return {
      data: props.doc as navbarItem,
      resetStates,
      toggleState,
      isSub,
    };
  },
});
</script>
