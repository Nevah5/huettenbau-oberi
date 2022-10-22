<template>
  <div>
    <h2 class="text-2xl font-bold border-b-2 border-black border-b-solid mb-2">
      Verwaltung Zugriff
    </h2>
    <p class="mb-4">
      Auf dieser Seite kannst du die Administrationsbenutzer verwalten, die auf
      den Admin bereich Zugriff haben.
    </p>
    <h3>Benutzer:</h3>
    <p v-for="admin in admins" :key="admin">{{ admin }}</p>
  </div>
</template>

<script setup lang="ts">
import { getAdminUsers } from "@/composables/config";
import { onMounted, ref } from "vue";

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
});
</script>
