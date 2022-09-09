<template>
  <nav
    class="sticky bg-white top-0 flex items-center justify-between w-full border-t-8 border-solid border-red shadow-navbar px-4"
  >
    <router-link to="/" class="logo w-64 my-4"></router-link>
    <div class="hidden my-4 md:flex justify-end items-center text-black">
      <router-link
        to="/"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
        >Startseite</router-link
      >
      <router-link
        to="/unterstuetzen"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
        >Galerie</router-link
      >
      <router-link
        to="/contact"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
        >Kontakt</router-link
      >
      <router-link
        to="/more"
        class="py-2.5 px-3 font-bold rounded-md h-fit hover:bg-black-light"
        >Mehr</router-link
      >
      <router-link
        to="/login"
        class="py-2.5 px-3 mx-1 bg-red text-white font-bold rounded-md h-fit hover:bg-red-dark"
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
