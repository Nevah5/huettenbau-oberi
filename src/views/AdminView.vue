<template>
  <main class="w-full flex flex-row justify-between items-start">
    <AdminNav />
    <router-view v-slot="{ Component }">
      <transition name="admin" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script lang="ts" setup>
import AdminNav from "@/components/admin/AdminNav.vue";
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
