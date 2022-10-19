<template>
  <nav class="my-8">
    <router-link
      to="/account/overview"
      class="rounded-md p-2 px-3 m-1 font-bold hover:bg-black-light relative"
      >Übersicht</router-link
    >
    <router-link
      to="/account/settings"
      class="rounded-md p-2 px-3 m-1 font-bold hover:bg-black-light relative"
      >Einstellungen</router-link
    >
    <router-link
      to="/account/security"
      class="rounded-md p-2 px-3 m-1 font-bold hover:bg-black-light relative"
      >Sicherheit</router-link
    >
  </nav>
</template>

<style lang="scss" scoped>
.router-link-active {
  background-color: var(--red);
  color: white;

  &::before {
    content: "";
    display: block;
    position: absolute;
    transform: translateX(-50%);
    top: 100%;
    left: 50%;
    border-top: 8px solid var(--red);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }
}
</style>
