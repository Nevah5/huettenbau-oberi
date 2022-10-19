<template>
  <NavBarVue />
  <div v-if="navSpacerEnabled" class="w-full h-[84px]"></div>
  <router-view />
</template>

<script lang="ts" setup>
import { watchEffect, ref } from "vue";
import { useRoute } from "vue-router";
import NavBarVue from "./components/NavBar.vue";

const route = useRoute();
const navSpacerEnabled = ref(true);

watchEffect(() => {
  if (route.meta.title)
    document.title = `${route.meta.title} - Hüttenbau Oberi`;
  if (route.meta.isNavSpacerEnabled === false) {
    navSpacerEnabled.value = false;
  } else {
    navSpacerEnabled.value = true;
  }
});
</script>

<style src="./assets/tailwind.css" />
<style lang="scss">
* {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 0;
}
</style>
