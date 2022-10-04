<template>
  <div
    class="sticky flex items-center justify-center flex-col bg-white top-0 w-full border-t-8 border-solid border-red shadow-navbar z-50"
  >
    <div class="flex items-center justify-between w-full h-fit px-4 my-4">
      <router-link to="/" class="logo w-64"></router-link>
      <nav class="hidden md:flex justify-end items-center text-black">
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
      </nav>
      <font-awesome-icon
        icon="fas fa-bars"
        class="md:hidden h-6 p-3 hover:bg-black-light rounded-md cursor-pointer"
        @click="navbarState = !navbarState"
      />
    </div>
    <!-- <nav
      v-if="navbarState"
      class="md:hidden bg-white border-red border-solid border-y-2 p-4 w-full"
    >
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
    </nav> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Data {
  navbarState: boolean;
}

export default defineComponent({
  name: "NavBar",
  data(): Data {
    return {
      navbarState: false,
    };
  },
});
</script>
