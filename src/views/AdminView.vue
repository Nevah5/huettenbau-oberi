<template>
  <main class="w-full flex flex-row justify-start items-start" v-if="admins">
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
import { getAdminUsers } from "@/composables/config";
import { loggedInUser } from "@/composables/account";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const admins = ref();

onMounted(async () => {
  let data = await getAdminUsers();
  if (data) {
    let adminUsers: string[] = [];
    data.users?.forEach((user: string) => {
      adminUsers.push(user);
    });
    admins.value = adminUsers;
  }
  let user = loggedInUser();
  if (user) {
    if (!(admins.value as string[]).includes(user.uid))
      return router.push("/nopermissions?path=%2Fadmin");
  }
});
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
