<template>
  <NavBarVue />
  <router-view />
</template>

<script lang="ts" setup>
import { watchEffect, ref } from "vue";
import { useRoute } from "vue-router";
import NavBarVue from "./components/NavBar.vue";

const route = useRoute();

watchEffect(() => {
  if (route.meta.title)
    document.title = `${route.meta.title} - Hüttenbau Oberi`;
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
