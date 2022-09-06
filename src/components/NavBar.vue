<template>
  <nav>
    <div class="actions">
      <span>DE | EN</span>
      <input type="text" placeholder="Search" />
      <div>User</div>
    </div>
    <div class="bottom">
      <router-link to="/" class="logo"></router-link>
      <ul>
        <li>Hauptseite</li>
        <li>Kontakt</li>
        <li>Unterstützung</li>
        <li>Mehr</li>
      </ul>
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
nav {
  & > .actions {
    display: flex;
    justify-content: flex-end;
  }
  & > .bottom {
    display: flex;
    justify-content: flex-start;

    a.logo {
      display: block;
      width: 300px;
    }
    ul {
      list-style-type: none;
      display: flex;
      justify-content: flex-start;
    }
  }
}
</style>
