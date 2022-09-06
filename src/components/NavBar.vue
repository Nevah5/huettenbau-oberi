<template>
  <nav class="bar">
    <div class="actions">
      <span>DE | EN</span>
      <input type="text" placeholder="Search" />
      <div>User</div>
    </div>
    <div class="bottom">
      <router-link to="/" class="logo"></router-link>
      <nav>
        <router-link to="/">Hauptseite</router-link>
        <router-link to="/">Kontakt</router-link>
        <router-link to="/">Unterstützung</router-link>
        <router-link to="/">Mehr</router-link>
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
nav.bar {
  padding: 15px 15px 0;

  & > .actions {
    display: flex;
    justify-content: flex-end;
  }
  & > .bottom {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

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
        margin: 0 10px;
        padding-bottom: 3px;
        border-bottom: solid transparent 2px;
        text-decoration: none;
        color: #3a3a3a;
        font-weight: 1000;

        &:hover {
          border-bottom-color: #3a3a3a;
        }
      }
    }
  }
}
</style>
