<template>
  <main class="w-full flex flex-col justify-start items-center">
    <AccountNav />
    <router-view />
  </main>
</template>

<script lang="ts" setup>
import AccountNav from "@/components/account/AccountNav.vue";
</script>
