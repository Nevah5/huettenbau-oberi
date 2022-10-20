<template>
  <main class="w-full flex flex-row justify-between items-start">
    <AdminNav />
    <router-view v-slot="{ Component }">
      <transition name="admin" mode="out-in">
        <component v-if="Component" :is="Component" />
        <WelcomeInfo v-else />
      </transition>
    </router-view>
  </main>
</template>

<script lang="ts" setup>
import AdminNav from "@/components/admin/AdminNav.vue";
import WelcomeInfo from "@/components/admin/WelcomeInfo.vue";
</script>

<style lang="scss" scoped>
.admin-enter-from,
.admin-leave-to {
  opacity: 0;
}

.admin-enter-active,
.admin-leave-active {
  transition: opacity 300ms ease-in-out;
}
</style>
