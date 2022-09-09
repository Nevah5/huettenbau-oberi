<template>
  <NavBarVue />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBarVue from "./components/NavBar.vue";

export default defineComponent({
  components: {
    NavBarVue,
  },
  watch: {
    $route: {
      immediate: true,
      handler(to): void {
        if (to.meta.title)
          document.title = `${to.meta.title} - Hüttenbau Oberi`;
      },
    },
  },
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
