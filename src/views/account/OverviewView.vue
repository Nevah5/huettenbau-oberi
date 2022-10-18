<template>
  <button
    class="text-white font-bold bg-red rounded-md py-2 px-4"
    @click="logout"
  >
    Logout
  </button>
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
