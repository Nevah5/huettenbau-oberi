<template>
  <div
    class="sticky flex items-center justify-center flex-col bg-white top-0 w-full border-t-8 border-solid border-red shadow-navbar z-50 p-4"
  >
    <!-- Main Navbar -->
    <div class="flex items-center justify-between w-full">
      <router-link to="/" class="logo w-64"></router-link>
      <nav class="hidden md:flex justify-end items-center text-black">
        <router-link
          @click="resetStates()"
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
          @click="resetStates()"
          to="/kontakt"
          class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
          >Kontakt</router-link
        >
        <router-link
          @click="resetStates()"
          to="/mehr"
          class="py-2.5 px-3 font-bold rounded-md h-fit hover:bg-black-light"
          >Mehr</router-link
        >
        <router-link
          @click="resetStates()"
          to="/login"
          class="py-2.5 px-3 mx-1 bg-red text-white font-bold rounded-md h-fit hover:bg-red-dark"
          >Login</router-link
        >
      </nav>
      <font-awesome-icon
        icon="fas fa-bars"
        class="md:hidden h-6 p-3 hover:bg-black-light rounded-md cursor-pointer"
        @click="toggleNavbar()"
      />
    </div>
    <!-- Gallery (PC) -->
    <div
      class="hidden md:flex w-full justify-end text-black flex-wrap"
      v-auto-animate
    >
      <router-link
        v-if="galleryState"
        to="/gallerie/2019"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light mt-4"
        >2009</router-link
      >
      <router-link
        v-if="galleryState"
        to="/gallerie/2010"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light mt-4"
        >2010</router-link
      >
      <router-link
        v-if="galleryState"
        to="/gallerie/2011"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light mt-4"
        >2011</router-link
      >
      <router-link
        v-if="galleryState"
        to="/gallerie/2012"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light mt-4"
        >2012</router-link
      >
      <router-link
        v-if="galleryState"
        to="/gallerie/2013"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light mt-4"
        >2013</router-link
      >
      <router-link
        v-if="galleryState"
        to="/gallerie/2014"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light mt-4"
        >2014</router-link
      >
      <router-link
        v-if="galleryState"
        to="/gallerie/2015"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light mt-4"
        >2015</router-link
      >
      <router-link
        v-if="galleryState"
        to="/gallerie/2016"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light mt-4"
        >2016</router-link
      >
      <router-link
        v-if="galleryState"
        to="/gallerie/2017"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light mt-4"
        >2017</router-link
      >
      <router-link
        v-if="galleryState"
        to="/gallerie/2018"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light mt-4"
        >2018</router-link
      >
      <router-link
        v-if="galleryState"
        to="/gallerie/2019"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light mt-4"
        >2019</router-link
      >
      <router-link
        v-if="galleryState"
        to="/gallerie/2020"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light mt-4"
        >2020</router-link
      >
      <router-link
        v-if="galleryState"
        to="/gallerie/2021"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light mt-4"
        >2021</router-link
      >
      <router-link
        v-if="galleryState"
        to="/gallerie/2022"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light mt-4"
        >2022</router-link
      >
    </div>
    <!-- Navbar Navigation (Phone) -->
    <div class="md:hidden w-full" v-auto-animate>
      <div v-if="navbarState" class="w-full h-[2px] my-4 bg-red"></div>
      <nav v-if="navbarState" class="flex justify-end flex-col">
        <router-link
          @click="resetStates()"
          to="/"
          class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light my-1"
          >Startseite</router-link
        >
        <a
          @click="galleryState = !galleryState"
          class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light cursor-pointer my-1"
          >Galerie</a
        >
        <!-- Gallery -->
        <div
          class="flex w-7/8 justify-start text-black flex-wrap pl-4 border-red border-l-2 ml-4"
          v-auto-animate
        >
          <router-link
            v-if="galleryState"
            to="/gallerie/2019"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >2009</router-link
          >
          <router-link
            v-if="galleryState"
            to="/gallerie/2010"
            @click="resetStates()"
            class="py-2.5 px-3 mr-1 font-bold rounded-md h-fit hover:bg-black-light"
            >2010</router-link
          >
          <router-link
            v-if="galleryState"
            to="/gallerie/2011"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >2011</router-link
          >
          <router-link
            v-if="galleryState"
            to="/gallerie/2012"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >2012</router-link
          >
          <router-link
            v-if="galleryState"
            to="/gallerie/2013"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >2013</router-link
          >
          <router-link
            v-if="galleryState"
            to="/gallerie/2014"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >2014</router-link
          >
          <router-link
            v-if="galleryState"
            to="/gallerie/2015"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >2015</router-link
          >
          <router-link
            v-if="galleryState"
            to="/gallerie/2016"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >2016</router-link
          >
          <router-link
            v-if="galleryState"
            to="/gallerie/2017"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >2017</router-link
          >
          <router-link
            v-if="galleryState"
            to="/gallerie/2018"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >2018</router-link
          >
          <router-link
            v-if="galleryState"
            to="/gallerie/2019"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >2019</router-link
          >
          <router-link
            v-if="galleryState"
            to="/gallerie/2020"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >2020</router-link
          >
          <router-link
            v-if="galleryState"
            to="/gallerie/2021"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >2021</router-link
          >
          <router-link
            v-if="galleryState"
            to="/gallerie/2022"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >2022</router-link
          >
        </div>
        <router-link
          @click="resetStates()"
          to="/kontakt"
          class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light my-1"
          >Kontakt</router-link
        >
        <router-link
          @click="resetStates()"
          to="/mehr"
          class="py-2.5 px-3 font-bold rounded-md h-fit hover:bg-black-light my-1"
          >Mehr</router-link
        >
        <router-link
          @click="resetStates()"
          to="/login"
          class="py-2.5 px-3 mx-1 bg-red text-white font-bold rounded-md h-fit hover:bg-red-dark my-1"
          >Login</router-link
        >
      </nav>
    </div>
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
  methods: {
    resetStates(): void {
      this.galleryState = false;
      this.navbarState = false;
    },
    toggleNavbar(): void {
      this.navbarState = !this.navbarState;
    },
  },
});
</script>
