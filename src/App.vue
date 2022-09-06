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
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
