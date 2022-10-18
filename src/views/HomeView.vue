<template>
  <HomeSlider />
</template>

<script lang="ts" setup>
import HomeSlider from "@/components/HomeSlider.vue";

import { loggedInUser } from "@/composables/account";
console.log(loggedInUser());
</script>
