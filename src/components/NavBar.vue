<template>
  <nav
    class="sticky flex items-center justify-center flex-col bg-white top-0 w-full border-t-8 border-solid border-red shadow-navbar px-4 h-24 z-50"
  >
    <div class="flex items-center justify-between w-full h-fit">
      <router-link to="/" class="logo w-64"></router-link>
      <div class="hidden md:flex justify-end items-center text-black">
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
      <font-awesome-icon
        icon="fas fa-bars"
        class="md:hidden h-6 p-3 hover:bg-black-light rounded-md cursor-pointer"
        @click="navbarState = true"
      />
    </div>
    <nav
      v-if="navbarState"
      class="absolute top-full right-0 bg-white flex items-end justify-center flex-col w-full h-fit border-red border-solid border-y-2 p-4"
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
    </nav>
  </nav>
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
