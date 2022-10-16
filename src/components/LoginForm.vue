<template>
  <section class="flex justify-center items-center h-screen">
    <form
      @submit.prevent="submit"
      class="w-5/12 border-red border-dashed border-2 flex flex-col justify-center items-center p-4"
    >
      <router-link to="/" class="logo w-3/4 mb-4"></router-link>
      <h2 class="font-bold text-black text-xl mb-4">Logge dich hier ein:</h2>
      <input
        type="text"
        placeholder="Email"
        class="border-red border-solid border-2 rounded w-full"
      />
      <button
        type="submit"
        class="w-full bg-red rounded text-white font-bold p-2 mt-4"
      >
        Submit
      </button>
    </form>
  </section>
</template>

<script setup lang="ts">
const submit = () => {
  console.log("Submit");
};
</script>
