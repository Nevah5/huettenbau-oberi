<template>
  <div class="w-full flex flex-col justify-center items-center p-8 text-black">
    <h2 class="font-bold text-3xl mt-16">Keinen Zugriff.</h2>
    <p>
      Sorry, aber du hast keine Rechte um auf {{ params.get("path") }}
      zugreiffen können.
    </p>
  </div>
</template>

<script setup lang="ts">
const params = new URLSearchParams(window.location.search);
</script>
