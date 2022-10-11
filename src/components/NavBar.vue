<template>
  <div
    class="absolute flex items-center justify-center flex-col bg-white top-0 w-full border-t-8 border-solid border-red shadow-navbar z-50 p-4"
  >
    <!-- Main Navbar -->
    <div class="flex items-center justify-between w-full">
      <router-link to="/" class="logo w-64"></router-link>
      <nav
        class="hidden lg:flex justify-end items-center text-black"
        v-if="navbarData"
      >
        <NavbarLink v-for="doc in navbarData" :key="doc.id" :doc="doc" />
        <router-link
          @click="resetStates()"
          to="/"
          class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
          >Startseite</router-link
        >
        <a
          @click="toggleState('infos')"
          class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light cursor-pointer"
          >Infos</a
        >
        <a
          @click="toggleState('gallery')"
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
          @click="toggleState('more')"
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
        v-if="navbarStates['infos']"
        to="/infos/infoblatt"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
        >Infoblatt</router-link
      >
      <router-link
        v-if="navbarStates['infos']"
        to="/infos/dachverband"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
        >Dachverband</router-link
      >
      <router-link
        v-if="navbarStates['infos']"
        to="/infos/lager"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
        >Lager</router-link
      >
      <router-link
        v-if="navbarStates['infos']"
        to="/infos/team"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
        >Team</router-link
      >
      <router-link
        v-if="navbarStates['infos']"
        to="/infos/verein"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
        >Verein</router-link
      >
      <router-link
        v-if="navbarStates['infos']"
        to="/infos/standort"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
        >Standort</router-link
      >
      <router-link
        v-if="navbarStates['infos']"
        to="/infos/sponsoren"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
        >Sponsoren</router-link
      >
      <router-link
        v-if="navbarStates['infos']"
        to="/infos/links"
        @click="resetStates()"
        class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
        >Links</router-link
      >
    </div>
    <!-- Navbar Navigation (Phone) -->
    <div class="lg:hidden w-full" v-auto-animate>
      <div v-if="navbarStates" class="w-full h-[2px] my-4 bg-red"></div>
      <nav v-if="navbarStates" class="flex justify-end flex-col">
        <router-link
          @click="resetStates()"
          to="/"
          class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light my-1"
          >Startseite</router-link
        >
        <a
          @click="toggleState('infos')"
          class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light cursor-pointer"
          >Infos</a
        >
        <!-- Infos -->
        <div
          class="flex w-7/8 justify-start text-black flex-wrap pl-4 border-red border-l-2 ml-4"
          v-auto-animate
        >
          <router-link
            v-if="navbarStates['infos']"
            to="/infos/infoblatt"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >Infoblatt</router-link
          >
          <router-link
            v-if="navbarStates['infos']"
            to="/infos/dachverband"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >Dachverband</router-link
          >
          <router-link
            v-if="navbarStates['infos']"
            to="/infos/lager"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >Lager</router-link
          >
          <router-link
            v-if="navbarStates['infos']"
            to="/infos/team"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >Team</router-link
          >
          <router-link
            v-if="navbarStates['infos']"
            to="/infos/verein"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >Verein</router-link
          >
          <router-link
            v-if="navbarStates['infos']"
            to="/infos/standort"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >Standort</router-link
          >
          <router-link
            v-if="navbarStates['infos']"
            to="/infos/sponsoren"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >Sponsoren</router-link
          >
          <router-link
            v-if="navbarStates['infos']"
            to="/infos/links"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >Links</router-link
          >
        </div>
        <a
          @click="toggleState('gallery')"
          class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light cursor-pointer my-1"
          >Gallerie</a
        >
        <router-link
          @click="resetStates()"
          to="/kontakt"
          class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light my-1"
          >Kontakt</router-link
        >
        <a
          @click="toggleState('more')"
          class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light cursor-pointer my-1"
          >Mehr</a
        >
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
import { ref, onMounted } from "vue";
import { getNavbarData } from "@/vue/navbar";
import NavbarLink from "@/components/NavbarLink.vue";

export default {
  name: "NavBar",
  components: { NavbarLink },
  setup() {
    const navbarData = ref();
    onMounted(async () => {
      navbarData.value = await getNavbarData();
    });

    type navbarStatesIndex = "navbar" | "infos" | "gallery" | "more";
    interface defaultnavbarStatesInterface {
      navbar: boolean;
      infos: boolean;
      gallery: boolean;
      more: boolean;
    }
    const defaultnavbarStates: defaultnavbarStatesInterface = {
      navbar: false,
      infos: false,
      gallery: false,
      more: false,
    };
    const navbarStates = ref(defaultnavbarStates);

    /**
     * Resets all states for the navigation
     * @param resetNavbar default true
     */
    const resetStates = (resetNavbar?: boolean): void => {
      let newStateNavbar = false;
      if (resetNavbar === false) newStateNavbar = true;
      navbarStates.value = defaultnavbarStates;
      navbarStates.value["navbar"] = newStateNavbar;
    };
    /**
     * toggles the state of a navigation and disables all the others
     * @param state a string state
     */
    const toggleState = (state: navbarStatesIndex): void => {
      let newState = !navbarStates.value[state];

      resetStates(false);

      navbarStates.value[state] = newState;
    };
    /**
     * toggles the navbar
     */
    const toggleNavbar = (): void => {
      resetStates(false);
      navbarStates.value["navbar"] = !navbarStates.value["navbar"];
    };

    return {
      navbarStates,
      toggleState,
      toggleNavbar,
      resetStates,
      navbarData,
    };
  },
};
</script>
