<template>
  <NavBarVue />
  <div class="w-full h-[84px]"></div>
  <router-view />
</template>

<script lang="ts">
import { watchEffect } from "vue";
import { useRoute } from "vue-router";
import NavBarVue from "./components/NavBar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { NavBarVue },
  setup() {
    const route = useRoute();

    watchEffect(() => {
      if (route.meta.title)
        document.title = `${route.meta.title} - Hüttenbau Oberi`;
    });
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
