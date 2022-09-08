<template>
  <BroadcastMessage />
  <h3 class="font-bold">CONTENT CONTENT CONTENT CONTENT</h3>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BroadcastMessage from "@/components/BroadcastMessage.vue";

export default defineComponent({
  name: "HomeView",
  components: { BroadcastMessage },
});
</script>
