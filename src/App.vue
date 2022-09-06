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
* {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #3a3a3a;
}

div.logo,
a.logo {
  background-image: url("@/assets/logo.png");
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  aspect-ratio: 471 / 60;
}
</style>
