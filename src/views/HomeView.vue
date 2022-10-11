<template>
  <HomeSlider />
</template>

<script lang="ts">
import HomeSlider from "@/components/HomeSlider.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: { HomeSlider },
});
</script>
