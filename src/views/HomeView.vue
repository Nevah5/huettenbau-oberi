<template>
  <HomeSlider />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeSlider from "@/components/HomeSlider.vue";

export default defineComponent({
  name: "HomeView",
  components: { HomeSlider },
});
</script>
