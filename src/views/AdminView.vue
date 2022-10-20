<template>
  <main class="w-full flex flex-col justify-start items-center">
    <AdminNav />
    <router-view v-slot="{ Component }">
      <transition name="settings" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script lang="ts" setup>
import AdminNav from "@/components/admin/AdminNav.vue";
</script>

<style lang="scss" scoped>
.settings-enter-from,
.settings-leave-to {
  opacity: 0;
}

.settings-enter-active,
.settings-leave-active {
  transition: opacity 300ms ease-in-out;
}
</style>
