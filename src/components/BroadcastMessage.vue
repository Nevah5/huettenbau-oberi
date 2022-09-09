<template>
  <div
    class="flex justify-between items-center max-w mx-8 my-4 px-8 py-4 border-red border-4 bg-white rounded-md text-black font-bold"
  >
    <p class="w-fit">Dies ist eine Broadcase Message!</p>
    <button
      type="button"
      class="flex rounded-md p-2 hover:bg-black-light focus:outline-none focus:ring-2 focus:ring-black"
    >
      <span class="sr-only">Dismiss</span>
      <!-- Heroicon name: outline/x-mark -->
      <svg
        class="h-6 w-6 text-black"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BroadcastMessage",
});
</script>
