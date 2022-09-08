<template>
  <nav
    class="flex content-center justify-between w-full border-t-8 border-solid border-red shadow-navbar pl-4 pr-16"
  >
    <div class="my-4 flex justify-end content-center text-black">
      <router-link to="/contact" class="py-2.5 px-4 font-bold"
        >Kontakt</router-link
      >
      <router-link
        to="/login"
        class="py-2.5 px-4 bg-red text-white font-bold rounded-md"
        >Login</router-link
      >
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
});
</script>
