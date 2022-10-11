<template>
  <router-link
    v-if="isSiteLinkWithoutSubs(data)"
    :to="data.link!"
    class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
    >{{ data.display }}</router-link
  >
  <a
    v-else
    :href="data.link!"
    class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light cursor-pointer"
    >{{ data.display }}</a
  >
</template>

<script lang="ts">
import { defineEmits } from "vue";
import { navbarItem } from "@/vue/navbar";

export default {
  name: "NavbarLink",
  props: ["doc"],
  setup(props: any) {
    const isSiteLinkWithoutSubs = (data: navbarItem): boolean => {
      if (!data.sub && !data.isExternal) return true;
      return false;
    };

    return {
      data: props.doc as navbarItem,
      isSiteLinkWithoutSubs,
    };
  },
};
</script>
