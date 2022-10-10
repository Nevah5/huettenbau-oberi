<template>
  <a
    class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light cursor-pointer"
    >{{ d.display }}</a
  >
</template>

<script lang="ts">
import { navbarItem } from "@/vue/navbar";

export default {
  name: "NavbarLink",
  props: ["doc"],
  setup(props: any) {
    return {
      d: props.doc as navbarItem,
    };
  },
};
</script>
