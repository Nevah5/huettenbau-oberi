<template>
  <nav>
    <div class="actions">
      <span>DE | EN</span>
      <input type="text" placeholder="Search" />
      <div>User</div>
    </div>
    <div class="bottom">
      <h1>Hüttenbau-Oberi</h1>
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
  div.actions {
    display: flex;
    justify-content: flex-end;
  }
  div.bottom {
    display: flex;
    justify-content: flex-start;

    ul {
      list-style-type: none;
      display: flex;
      justify-content: flex-start;
    }
  }
}
</style>
