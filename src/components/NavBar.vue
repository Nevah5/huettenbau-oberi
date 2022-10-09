<template>
  <div
    class="absolute flex items-center justify-center flex-col bg-white top-0 w-full border-t-8 border-solid border-red shadow-navbar z-50 p-4"
  >
    <!-- Main Navbar -->
    <div class="flex items-center justify-between w-full">
      <router-link to="/" class="logo w-64"></router-link>
      <nav class="hidden lg:flex justify-end items-center text-black">
        <router-link
          @click="resetStates()"
          to="/"
          class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
          >Startseite</router-link
        >
        <a
          @click="infoState = !infoState"
          class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light cursor-pointer"
          >Infos</a
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
        <a
          @click="mehrState = !mehrState"
          class="py-2.5 px-3 font-bold rounded-md h-fit hover:bg-black-light cursor-pointer"
          >Mehr</a
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
        class="lg:hidden p-3 hover:bg-black-light rounded-md cursor-pointer h-[20px]"
        @click="toggleNavbar()"
      />
    </div>
    <!-- Infos (PC) -->
    <div
      class="hidden lg:flex w-full justify-end text-black flex-wrap"
      v-auto-animate
    >
      <router-link
        v-if="infoState"
        to="/infos/infoblatt"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
        >Infoblatt</router-link
      >
      <router-link
        v-if="infoState"
        to="/infos/dachverband"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
        >Dachverband</router-link
      >
      <router-link
        v-if="infoState"
        to="/infos/lager"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
        >Lager</router-link
      >
      <router-link
        v-if="infoState"
        to="/infos/team"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
        >Team</router-link
      >
      <router-link
        v-if="infoState"
        to="/infos/verein"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
        >Verein</router-link
      >
      <router-link
        v-if="infoState"
        to="/infos/standort"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
        >Standort</router-link
      >
      <router-link
        v-if="infoState"
        to="/infos/sponsoren"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
        >Sponsoren</router-link
      >
      <router-link
        v-if="infoState"
        to="/infos/links"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
        >Links</router-link
      >
    </div>
    <!-- Gallery (PC) -->
    <div
      class="hidden lg:flex w-full justify-end text-black flex-wrap"
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
    <!-- More -->
    <div
      class="hidden lg:flex w-full justify-end text-black flex-wrap"
      v-auto-animate
    >
      <router-link
        v-if="mehrState"
        to="/mehr/goenner"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
        >Gönner werden</router-link
      >
      <router-link
        v-if="mehrState"
        to="/mehr/anmeldung"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
        >Anmeldung</router-link
      >
    </div>
    <!-- Navbar Navigation (Phone) -->
    <div class="lg:hidden w-full" v-auto-animate>
      <div v-if="navbarState" class="w-full h-[2px] my-4 bg-red"></div>
      <nav v-if="navbarState" class="flex justify-end flex-col">
        <router-link
          @click="resetStates()"
          to="/"
          class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light my-1"
          >Startseite</router-link
        >
        <a
          @click="infoState = !infoState"
          class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light cursor-pointer"
          >Infos</a
        >
        <!-- Infos -->
        <div
          class="flex w-7/8 justify-start text-black flex-wrap pl-4 border-red border-l-2 ml-4"
          v-auto-animate
        >
          <router-link
            v-if="infoState"
            to="/infos/infoblatt"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >Infoblatt</router-link
          >
          <router-link
            v-if="infoState"
            to="/infos/dachverband"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >Dachverband</router-link
          >
          <router-link
            v-if="infoState"
            to="/infos/lager"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >Lager</router-link
          >
          <router-link
            v-if="infoState"
            to="/infos/team"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >Team</router-link
          >
          <router-link
            v-if="infoState"
            to="/infos/verein"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >Verein</router-link
          >
          <router-link
            v-if="infoState"
            to="/infos/standort"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >Standort</router-link
          >
          <router-link
            v-if="infoState"
            to="/infos/sponsoren"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >Sponsoren</router-link
          >
          <router-link
            v-if="infoState"
            to="/infos/links"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >Links</router-link
          >
        </div>
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
        <a
          @click="mehrState = !mehrState"
          class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light cursor-pointer my-1"
          >Mehr</a
        >
        <!-- More -->
        <div
          class="flex w-7/8 justify-start text-black flex-wrap pl-4 border-red border-l-2 ml-4"
          v-auto-animate
        >
          <router-link
            v-if="mehrState"
            to="/mehr/goenner"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >Gönner werden</router-link
          >
          <router-link
            v-if="mehrState"
            to="/mehr/anmeldung"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >Anmeldung</router-link
          >
        </div>
        <router-link
          @click="resetStates()"
          to="/login"
          class="py-2.5 px-3 mx-1 bg-red text-white font-bold rounded-md h-fit hover:bg-red-dark my-1 mt-6"
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
  infoState: boolean;
  galleryState: boolean;
  mehrState: boolean;
}

export default defineComponent({
  name: "NavBar",
  data(): Data {
    return {
      navbarState: false,
      infoState: false,
      galleryState: false,
      mehrState: false,
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
