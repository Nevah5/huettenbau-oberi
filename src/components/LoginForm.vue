<template>
  <section class="flex justify-center items-center h-screen">
    <form @submit.prevent="submit">
      <button type="submit">Submit</button>
    </form>
  </section>
</template>

<script setup lang="ts">
const submit = () => {
  console.log("Submit");
};
</script>
