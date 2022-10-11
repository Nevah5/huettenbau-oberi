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
          @reset-states="resetStates(true)"
        />
        <router-link
          @click="resetStates"
          to="/login"
          class="py-2.5 px-3 mx-1 bg-red text-white font-bold rounded-md h-fit hover:bg-red-dark"
          >Login</router-link
        >
      </nav>
      <font-awesome-icon
        icon="fas fa-bars"
        v-if="navbarData"
        class="lg:hidden p-3 hover:bg-black-light rounded-md cursor-pointer h-[20px]"
        @click="toggleNavbar"
      />
    </div>
    <!-- Sub (PC) -->
    <div v-auto-animate class="w-full">
      <NavbarLink
        v-for="doc in navbarData"
        :key="doc.id"
        :doc="doc"
        :states="navbarStates"
        sub
        @toggle-state="toggleState"
        @reset-states="resetStates(true)"
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
          @reset-states="resetStates(true)"
        />
        <router-link
          @click="resetStates(true)"
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
    const resetStates = (resetNavbarState?: boolean): void => {
      navbarStates.value = {};
      if (resetNavbarState) navbarState.value = false;
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
