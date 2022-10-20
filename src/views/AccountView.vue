<template>
  <main class="w-full flex flex-col justify-start items-center">
    <AccountNav />
    <router-view v-slot="{ Component }">
      <transition name="slide">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script lang="ts" setup>
import AccountNav from "@/components/account/AccountNav.vue";
</script>

<style lang="scss" scoped>
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 500ms ease-in-out;
}
</style>
