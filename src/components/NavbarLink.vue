<template>
  <router-link
    v-if="isSiteLinkWithoutSubs(data)"
    @click="resetStates"
    :to="data.link!"
    class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
    >{{ data.display }}</router-link
  >
  <a
    v-else
    :href="data.link!"
    @click="data.sub ? toggleState('infos') : null"
    class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light cursor-pointer"
    >{{ data.display }}</a
  >
</template>

<script lang="ts">
import { navbarItem } from "@/vue/navbar";
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavbarLink",
  props: ["doc"],
  emits: ["resetStates", "toggleState"],
  setup(props: any, { emit }: any) {
    const isSiteLinkWithoutSubs = (data: navbarItem): boolean => {
      if (!data.sub && !data.isExternal) return true;
      return false;
    };

    const toggleState = (state: string): void => {
      emit("toggleState", state);
    };

    const resetStates = (): void => {
      emit("resetStates", true);
    };

    return {
      data: props.doc as navbarItem,
      isSiteLinkWithoutSubs,
      resetStates,
      toggleState,
    };
  },
});
</script>
