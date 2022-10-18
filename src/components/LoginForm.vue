<template>
  <section class="flex justify-center items-center h-screen">
    <form
      @submit.prevent="submit"
      class="w-full md:w-2/3 lg:w-5/12 flex flex-col justify-center items-center p-8 md:p-16 text-black rounded drop-shadow-xl md:shadow-2xl"
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
        <font-awesome-icon icon="fa-solid fa-unlock" class="mr-2" />Einloggen
      </button>
      <div
        class="w-full flex items-center my-4 before:flex-1 before:border-t before:border-black before:mt-0.5 after:flex-1 after:border-t after:border-black after:mt-0.5"
      >
        <p class="text-center font-semibold mx-4 mb-0 font-bold">ODER</p>
      </div>
      <button class="w-full bg-[#0055e6] rounded text-white font-bold p-2">
        <font-awesome-icon icon="fa-brands fa-google" class="mr-2" />Google
      </button>
    </form>
  </section>
</template>

<script setup lang="ts">
const submit = () => {
  console.log("Submit");
};
</script>
