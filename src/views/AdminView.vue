<template>
  <main class="w-full flex flex-row justify-start items-start">
    <AdminNav />
    <div class="m-8 text-black w-full">
      <router-view v-slot="{ Component }">
        <transition name="admin" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
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
