<template>
  <section class="flex justify-center items-center h-screen">
    <form
      @submit.prevent="submit"
      class="w-5/12 flex flex-col justify-center items-center p-16 text-black rounded drop-shadow-xl shadow-2xl"
    >
      <router-link to="/" class="logo w-3/4 mb-4"></router-link>
      <h2 class="font-bold text-xl mb-4">Logge dich hier ein:</h2>
      <input
        type="text"
        placeholder="Email"
        class="appearance-none block border-red border-solid border-2 rounded w-full px-4 py-2 mb-2"
      />
      <input
        type="password"
        placeholder="Passwort"
        class="appearance-none block border-red border-solid border-2 rounded w-full px-4 py-2 mb-2"
      />
      <button
        type="submit"
        class="w-full bg-red rounded text-white font-bold p-2 mt-2"
      >
        Einloggen
      </button>
    </form>
  </section>
</template>

<script setup lang="ts">
const submit = () => {
  console.log("Submit");
};
</script>
