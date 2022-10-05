<template>
  <div
    class="sticky flex items-center justify-center flex-col bg-white top-0 w-full border-t-8 border-solid border-red shadow-navbar z-50 p-4"
  >
    <div class="flex items-center justify-between w-full">
      <router-link to="/" class="logo w-64"></router-link>
      <nav class="hidden md:flex justify-end items-center text-black">
        <router-link
          to="/"
          class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
          >Startseite</router-link
        >
        <a
          @click="galleryState = !galleryState"
          class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light cursor-pointer"
          >Galerie</a
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
    <div class="w-full flex justify-end text-black flex-wrap" v-auto-animate>
      <router-link
        v-if="galleryState"
        to="/gallery/2019"
        @click="galleryState = false"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light mt-4"
        >2009</router-link
      >
      <router-link
        v-if="galleryState"
        to="/gallery/2010"
        @click="galleryState = false"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light mt-4"
        >2010</router-link
      >
      <router-link
        v-if="galleryState"
        to="/gallery/2011"
        @click="galleryState = false"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light mt-4"
        >2011</router-link
      >
      <router-link
        v-if="galleryState"
        to="/gallery/2012"
        @click="galleryState = false"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light mt-4"
        >2012</router-link
      >
      <router-link
        v-if="galleryState"
        to="/gallery/2013"
        @click="galleryState = false"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light mt-4"
        >2013</router-link
      >
      <router-link
        v-if="galleryState"
        to="/gallery/2014"
        @click="galleryState = false"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light mt-4"
        >2014</router-link
      >
      <router-link
        v-if="galleryState"
        to="/gallery/2015"
        @click="galleryState = false"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light mt-4"
        >2015</router-link
      >
      <router-link
        v-if="galleryState"
        to="/gallery/2016"
        @click="galleryState = false"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light mt-4"
        >2016</router-link
      >
      <router-link
        v-if="galleryState"
        to="/gallery/2017"
        @click="galleryState = false"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light mt-4"
        >2017</router-link
      >
      <router-link
        v-if="galleryState"
        to="/gallery/2018"
        @click="galleryState = false"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light mt-4"
        >2018</router-link
      >
      <router-link
        v-if="galleryState"
        to="/gallery/2019"
        @click="galleryState = false"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light mt-4"
        >2019</router-link
      >
      <router-link
        v-if="galleryState"
        to="/gallery/2020"
        @click="galleryState = false"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light mt-4"
        >2020</router-link
      >
      <router-link
        v-if="galleryState"
        to="/gallery/2021"
        @click="galleryState = false"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light mt-4"
        >2021</router-link
      >
      <router-link
        v-if="galleryState"
        to="/gallery/2022"
        @click="galleryState = false"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light mt-4"
        >2022</router-link
      >
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
  galleryState: boolean;
}

export default defineComponent({
  name: "NavBar",
  data(): Data {
    return {
      navbarState: false,
      galleryState: false,
    };
  },
});
</script>
