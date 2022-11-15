<template>
  <div>
    <h2 class="text-2xl font-bold border-b-2 border-black border-b-solid mb-2">
      Administratoren
    </h2>
    <p class="mb-4">
      Auf dieser Seite kannst du die Administrationsbenutzer verwalten, die auf
      den Admin Bereich Zugriff haben.
    </p>
    <h3>Benutzer IDs:</h3>
    <div v-auto-animate>
      <div
        v-for="admin in admins"
        :key="admin"
        class="flex justify-start items-center gap-2 mb-1"
        v-auto-animate
      >
        <p>{{ adminUsernames[admin] }} - {{ admin }}</p>
        <p v-if="admin === user!.uid" class="text-red font-bold">[You]</p>
        <p
          v-else
          type="button"
          class="underline text-red cursor-pointer"
          @click="removeAdminUser(admin)"
        >
          Delete
        </p>
      </div>
    </div>
    <p v-if="errorMessage" class="text-red font-bold">
      {{ errorMessage }}
    </p>
    <form
      class="flex justify-start items-center gap-2 mt-6"
      @submit.prevent="addAdminUser"
    >
      <input
        type="text"
        v-model.trim="inputAddUid"
        class="appearance-none border-black border-solid border-2 rounded-md px-4 py-2"
        placeholder="uid"
      />
      <button
        type="submit"
        class="bg-red font-bold text-white rounded-md px-4 py-2 border-red border-2"
      >
        Hinzufügen
      </button>
      <p class="text-red font-bold" v-if="errorMessageAddUser">
        {{ errorMessageAddUser }}
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { getUserdata, loggedInUser, Userdata } from "@/composables/account";
import {
  getAdminUsers,
  updateAdminUsers,
  adminConfig,
} from "@/composables/config";
import { User } from "@firebase/auth";
import { onMounted, ref } from "vue";

const admins = ref<string[]>([]);
const adminUsernames = ref<{ [index: string]: string }>({});
const user = ref<User>();
const errorMessage = ref("");
const inputAddUid = ref("");
const errorMessageAddUser = ref("");

onMounted(async () => {
  user.value = loggedInUser()!;
  let data: adminConfig | void = await getAdminUsers();
  if (data) {
    let adminUsers: string[] = [];
    for (let i = 0; i < data.users!.length; i++) {
      adminUsers.push(data.users![i]!);
      if (adminUsernames.value[data.users![i]!] === undefined) {
        let udata: Userdata | void = await getUserdata(data.users![i]!);
        adminUsernames.value[data.users![i]!] = udata!.displayName;
      }
    }
    admins.value = adminUsers;
  }
});

const removeAdminUser = (uid: string): void => {
  admins.value = admins.value.filter((adminUid: string) => {
    return adminUid !== uid;
  });
  updateAdminUsers({ users: admins.value }).catch(() => {
    errorMessage.value = "Etwas ist schief gelaufen!";
  });
};

const addAdminUser = (): void => {
  errorMessageAddUser.value = "";
  if (inputAddUid.value === "" || inputAddUid.value === undefined) return;
  if (admins.value.includes(inputAddUid.value)) {
    errorMessageAddUser.value = "This user is already an Admin user.";
    return;
  }
  admins.value.push(inputAddUid.value);
  inputAddUid.value = "";
  updateAdminUsers({ users: admins.value }).catch(() => {
    errorMessageAddUser.value = "Etwas ist schief gelaufen!";
  });
};
</script>
