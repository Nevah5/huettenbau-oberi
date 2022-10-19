<template>
  <div class="mb-8">
    <h2 class="text-xl font-bold text-black mb-2">Account Sicherheit</h2>
    <div class="w-full bg-black h-[2px] block mb-2"></div>
    <p class="text-black mb-2" v-if="!hasPasswordLogin()">
      Da dein Account noch kein Passwort hat, kannst du dieses hier setzen.
      Diese Aktion schaltet das Login mit Email und Passwort an.
    </p>
    <!-- Current Password -->
    <form class="mb-4 w-full" @submit.prevent="funChangePassword">
      <label for="currentPW" class="font-bold" v-if="hasPasswordLogin()"
        >Aktuelles Passwort</label
      >
      <input
        v-if="hasPasswordLogin()"
        v-model="data.currentPassword"
        type="password"
        id="currentPW"
        class="appearance-none border-black border-2 border-solid rounded-md px-4 py-2 mt-1 w-full mb-2"
      />
      <label for="newPW" class="font-bold">Neues Passwort</label>
      <input
        v-model="data.newPassword"
        type="password"
        id="newPW"
        class="appearance-none border-black border-2 border-solid rounded-md px-4 py-2 mt-1 w-full mb-2"
      />
      <label for="repeatNewPW" class="font-bold"
        >Neues Passwort wiederholen</label
      >
      <input
        v-model="data.repeatNewPassword"
        type="password"
        id="repeatNewPW"
        class="appearance-none border-black border-2 border-solid rounded-md px-4 py-2 mt-1 w-full mb-2"
      />
      <p class="text-red font-bold mb-1" v-if="errMsg">{{ errMsg }}</p>
      <button
        v-if="hasPasswordLogin()"
        type="submit"
        class="rounded-md bg-red text-white font-bold px-4 py-2 mt-1"
      >
        <font-awesome-icon
          v-if="loading"
          icon="fa-solid fa-circle-notch"
          class="animate-spin mr-1"
        />
        Ändern
      </button>
      <button
        v-else
        type="submit"
        class="rounded-md bg-red text-white font-bold px-4 py-2 mt-1"
      >
        <font-awesome-icon
          v-if="loading"
          icon="fa-solid fa-circle-notch"
          class="animate-spin mr-1"
        />
        Setzen
      </button>
      <p class="text-black mt-1" v-if="successMsg">
        Dein Passwort wurde erfolgreich geändert.
      </p>
      <p class="text-black mt-1" v-if="successMsg2">
        Dein Passwort wurde erfolgreich gesetzt.
      </p>
    </form>
  </div>
</template>

<script lang="ts" setup>
import {
  hasPasswordLogin,
  changePassword,
  addPassword,
} from "@/composables/account";
import { ref } from "vue";

const loading = ref(false);
const data = ref({
  currentPassword: "",
  newPassword: "",
  repeatNewPassword: "",
});
const errMsg = ref("");
const successMsg = ref(false);
const successMsg2 = ref(false);

const funChangePassword = () => {
  loading.value = true;
  if (hasPasswordLogin())
    return changePassword(data.value.currentPassword, data.value.newPassword)
      .then(() => {
        loading.value = false;
        errMsg.value = "";
        data.value = {
          currentPassword: "",
          newPassword: "",
          repeatNewPassword: "",
        };
        successMsg.value = true;
        setTimeout(() => {
          successMsg.value = false;
        }, 5000);
      })
      .catch((errorMessage) => {
        loading.value = false;
        errMsg.value = errorMessage;
      });
  addPassword(data.value.newPassword)
    .then(() => {
      loading.value = false;
      errMsg.value = "";
      data.value = {
        currentPassword: "",
        newPassword: "",
        repeatNewPassword: "",
      };
      successMsg2.value = true;
      setTimeout(() => {
        successMsg2.value = false;
      }, 5000);
    })
    .catch((errorMessage) => {
      loading.value = false;
      errMsg.value = errorMessage;
    });
};
</script>
