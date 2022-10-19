<template>
  <section class="w-full px-4 sm:w-9/12 sm:px-0 xl:w-1/2">
    <div class="mb-8">
      <h2 class="text-xl font-bold text-black mb-2">Aktionen</h2>
      <div class="w-full bg-black h-[2px] block mb-2"></div>
      <p class="text-black mb-2">Möchtest du dich ausloggen? Kein Problem.</p>
      <button
        class="text-white font-bold bg-red rounded-md py-2 px-4"
        @click="logout"
      >
        Logout
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
