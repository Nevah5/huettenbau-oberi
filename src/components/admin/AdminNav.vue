<template>
  <nav class="my-8 flex flex-col justify-center items-end">
    <router-link
      to="/admin/permissions"
      class="rounded-md p-2 px-3 m-1 font-bold hover:bg-black-light relative w-full text-center"
      >Zugriff Verwaltung</router-link
    >
    <router-link
      to="/admin/navigation"
      class="rounded-md p-2 px-3 m-1 font-bold hover:bg-black-light relative w-full text-center"
      >Navigation</router-link
    >
    <router-link
      to="/admin/gallery"
      class="rounded-md p-2 px-3 m-1 font-bold hover:bg-black-light relative w-full text-center"
      >Gallerie Verwaltung</router-link
    >
    <router-link
      to="/admin/external-links"
      class="rounded-md p-2 px-3 m-1 font-bold hover:bg-black-light relative w-full text-center"
      >Externe Links</router-link
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
    transform: translateY(-50%);
    top: 50%;
    left: 100%;
    border-left: 8px solid var(--red);
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
  }
}
</style>
