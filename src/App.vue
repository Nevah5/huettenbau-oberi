<template>
  <NavBarVue />
  <router-view v-slot="{ Component }">
    <transition name="site" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts" setup>
import { watchEffect } from "vue";
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
<style lang="scss" scoped>
.site-enter-from,
.site-leave-to {
  opacity: 0;
}

.site-enter-active,
.site-leave-active {
  transition: opacity 300ms ease-in-out;
}
</style>
