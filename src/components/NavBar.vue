<template>
  <div
    class="absolute flex items-center justify-center flex-col bg-white top-0 w-full border-t-8 border-solid border-red shadow-navbar z-50 p-4 text-black"
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
          v-if="!loggedInUser()"
          @click="resetStates"
          to="/login"
          class="py-2.5 px-3 mx-1 bg-red text-white font-bold rounded-md h-fit hover:bg-red-dark"
          >Login</router-link
        >
        <router-link
          v-else
          @click="resetStates"
          to="/account"
          class="py-2.5 px-3 mx-1 bg-red text-white font-bold rounded-md h-fit hover:bg-red-dark"
          >Account</router-link
        >
      </nav>
      <font-awesome-icon
        icon="fas fa-bars"
        v-if="navbarData"
        class="lg:hidden p-3 hover:bg-black-light rounded-md cursor-pointer h-[20px]"
        @click="toggleNavbar"
      />
      <div class="flex justify-end gap-2 items-center" v-if="!navbarData">
        <font-awesome-icon
          icon="fa-solid fa-circle-notch"
          class="animate-spin h-[20px] p-3"
        />
        <p class="text-black font-bold hidden lg:inline-block">
          Daten werden geladen...
        </p>
      </div>
    </div>
    <!-- Sub (PC) -->
    <div v-auto-animate class="w-full text-black">
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
          v-if="!loggedInUser()"
          @click="resetStates(true)"
          to="/login"
          class="py-2.5 px-3 mx-1 bg-red text-white font-bold rounded-md h-fit hover:bg-red-dark my-1 mt-6"
          >Login</router-link
        >
        <router-link
          v-else
          @click="resetStates(true)"
          to="/account"
          class="py-2.5 px-3 mx-1 bg-red text-white font-bold rounded-md h-fit hover:bg-red-dark my-1 mt-6"
          >Account</router-link
        >
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavBar",
});
</script>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { loggedInUser } from "@/composables/account";
import { getNavbarData } from "@/composables/navbar";
import NavbarLink from "@/components/NavbarLink.vue";

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
</script>
