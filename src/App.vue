<template>
  <NavBarVue />
  <div v-if="navSpacerEnabled" class="w-full h-[84px]"></div>
  <router-view />
</template>

<script lang="ts" setup>
import { watchEffect, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { auth } from "./firebase";
import NavBarVue from "./components/NavBar.vue";

const router = useRouter();
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

//when page is refreshed, to detect user login
auth.onAuthStateChanged((user) => {
  router.push(route.path);
});
</script>

<style src="./assets/tailwind.css" />
<style lang="scss">
:root {
  --red: #fa1414;
}

* {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 0;
}
</style>
