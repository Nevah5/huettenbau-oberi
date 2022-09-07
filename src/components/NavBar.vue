<template>
  <nav class="bar">
    <div class="bottom">
      <router-link to="/" class="logo"></router-link>
      <nav>
        <router-link to="/">Hauptseite</router-link>
        <router-link to="/">Kontakt</router-link>
        <router-link to="/">Unterstützung</router-link>
        <router-link to="/">Mehr</router-link>
        <router-link to="/">Login</router-link>
      </nav>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
});
</script>

<style lang="scss" scoped>
$color: #f91313;
nav.bar {
  padding: 15px 15px 10px;
  border-top: 7px solid $color;
  border-bottom: dashed 1px $color;

  & > .actions {
    display: flex;
    justify-content: flex-end;

    div.langs {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & > * {
        margin: 0 5px;
      }
    }
  }
  & > .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a.logo {
      display: block;
      width: 300px;
    }
    nav {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0;
      margin: 0 10px;

      & > a {
        text-decoration: none;
        color: #3a3a3a;
        font-weight: 1000;
        padding: 7px 14px;

        &:last-child {
          background-color: $color;
          color: white;
        }
      }
    }
  }
}
</style>
