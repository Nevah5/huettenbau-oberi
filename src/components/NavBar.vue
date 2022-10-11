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
        <NavbarLink
          v-for="doc in navbarData"
          :key="doc.id"
          :doc="doc"
          :states="navbarStates"
          @toggle-state="toggleState"
          @reset-states="resetStates()"
        />
        <router-link
          @click="resetStates()"
          to="/login"
          class="py-2.5 px-3 mx-1 bg-red text-white font-bold rounded-md h-fit hover:bg-red-dark"
          >Login</router-link
        >
      </nav>
      <font-awesome-icon
        icon="fas fa-bars"
        v-if="navbarData"
        class="lg:hidden p-3 hover:bg-black-light rounded-md cursor-pointer h-[20px]"
        @click="toggleNavbar()"
      />
    </div>
    <!-- Sub (PC) -->
    <div
      class="hidden lg:flex w-full justify-end text-black flex-wrap"
      v-auto-animate
    >
      <NavbarLink
        v-for="doc in navbarData"
        :key="doc.id"
        :doc="doc"
        :states="navbarStates"
        sub
        @toggle-state="toggleState"
        @reset-states="resetStates()"
      />
    </div>
    <!-- Navbar Navigation (Phone) -->
    <div class="lg:hidden w-full" v-if="navbarData" v-auto-animate>
      <div v-if="navbarState" class="w-full h-[2px] my-4 bg-red"></div>
      <nav v-if="navbarState" class="flex justify-end flex-col">
        <NavbarLink
          v-for="doc in navbarData"
          :key="doc.id"
          :doc="doc"
          :states="navbarStates"
          phone
          @toggle-state="toggleState"
          @reset-states="resetStates()"
        />
        <!-- Infos -->
        <!-- <div
          class="flex w-7/8 justify-start text-black flex-wrap pl-4 border-red border-l-2 ml-4"
          v-auto-animate
        >
          <router-link
            v-if="navbarStates.infos"
            to="/infos/infoblatt"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >Infoblatt</router-link
          >
          <router-link
            v-if="navbarStates.infos"
            to="/infos/dachverband"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >Dachverband</router-link
          >
          <router-link
            v-if="navbarStates.infos"
            to="/infos/lager"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >Lager</router-link
          >
          <router-link
            v-if="navbarStates.infos"
            to="/infos/team"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >Team</router-link
          >
          <router-link
            v-if="navbarStates.infos"
            to="/infos/verein"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >Verein</router-link
          >
          <router-link
            v-if="navbarStates.infos"
            to="/infos/standort"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >Standort</router-link
          >
          <router-link
            v-if="navbarStates.infos"
            to="/infos/sponsoren"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >Sponsoren</router-link
          >
          <router-link
            v-if="navbarStates.infos"
            to="/infos/links"
            @click="resetStates()"
            class="py-2.5 px-3 mx-1 font-bold rounded-md h-fit hover:bg-black-light"
            >Links</router-link
          >
        </div> -->
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
  components: { NavbarLink },
  setup() {
    const navbarData = ref();
    onMounted(async () => {
      navbarData.value = await getNavbarData();
    });

    const navbarState = ref(false);

    const defaultNavbarStates: { [key: string]: boolean } = {};
    const navbarStates = ref(defaultNavbarStates);

    /**
     * Resets all states for the navigation
     * @param resetNavbar default true
     */
    const resetStates = (): void => {
      navbarStates.value = {};
    };
    /**
     * toggles the state of a navigation and disables all the others
     * @param state a string state
     */
    const toggleState = (state: string): void => {
      let newState = !navbarStates.value[state];

      resetStates();

      navbarStates.value[state] = newState;
    };
    /**
     * toggles the navbar
     */
    const toggleNavbar = (): void => {
      resetStates();
      navbarState.value = !navbarState.value;
    };

    return {
      navbarStates,
      navbarState,
      toggleState,
      toggleNavbar,
      resetStates,
      navbarData,
    };
  },
});
</script>
