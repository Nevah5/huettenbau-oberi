<template>
  <section class="w-full px-4 sm:w-9/12 sm:px-0 xl:w-1/2">
    <div class="mb-8">
      <h2 class="text-xl font-bold text-black mb-2">Account</h2>
      <div class="w-full bg-black h-[2px] block mb-2"></div>
      <p class="text-black mb-2">
        Hier kannst du verschidene Aktionen mit deinem Account durchführen. Du
        solltest aber mit <b>VORSICHT</b> vorgehen, da diese meist nicht
        wiederherstellbar sind.
      </p>
      <button
        class="text-white font-bold bg-red rounded-md border-2 border-red py-2 px-4 mr-2"
        @click="logout"
      >
        Logout
      </button>
      <button
        class="text-red font-bold bg-white border-red border-2 rounded-md py-2 px-4 mr-2 hover:bg-red hover:text-white"
      >
        DEAKTIVIEREN
      </button>
      <button
        class="text-red font-bold bg-white border-red border-2 rounded-md py-2 px-4 mr-2 hover:bg-red hover:text-white"
      >
        LÖSCHEN
      </button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { logoutUser } from "@/composables/account";

const router = useRouter();

const logout = () => {
  logoutUser()
    .then(() => {
      router.push("/");
    })
    .catch((e) => {
      console.log(e);
    });
};
</script>
