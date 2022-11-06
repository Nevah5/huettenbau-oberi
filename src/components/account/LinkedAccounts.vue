<template>
  <div class="mb-8 text-black">
    <h2 class="text-xl font-bold mb-2">Verknüpfte Accounts</h2>
    <div class="w-full bg-black h-[2px] block mb-2"></div>
    <!-- Google -->
    <div class="p-8 flex justify-start items-center gap-4">
      <font-awesome-icon icon="fa-brands fa-google" class="h-[50px]" />
      <p v-if="data.google">{{ data.google }}</p>
      <button
        v-if="!data.google"
        class="text-black border-black border-2 border-solid rounded-md px-2 py-1 text-sm font-bold hover:bg-black hover:text-white"
        @click="funLinkGoogleAccount"
      >
        Verlinken
      </button>
      <button
        v-else-if="hasPasswordLogin()"
        class="text-black border-black border-2 border-solid rounded-md px-2 py-1 text-sm font-bold hover:bg-black hover:text-white"
        @click="funUnlinkGoogleAccount"
      >
        Aufheben
      </button>
      <p class="text-red font-bold" v-if="errors.google">{{ errors.google }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  loggedInUser,
  linkGoogleAccount,
  hasPasswordLogin,
  unlinkGoogleAccount,
} from "@/composables/account";
import { ref, onMounted } from "vue";

onMounted(() => {
  getLinkedProviderData();
});

const data = ref({
  google: "",
});
const errors = ref({
  google: "",
});

const getLinkedProviderData = () => {
  const user = loggedInUser();
  data.value = {
    google: "",
  };
  data.value.google = user!.providerData.find(
    (obj) => obj.providerId === "google.com"
  )?.email as string;
};

const funLinkGoogleAccount = () => {
  linkGoogleAccount()
    .then(() => {
      errors.value.google = "";
      getLinkedProviderData();
    })
    .catch((e) => {
      errors.value.google = e;
    });
};

const funUnlinkGoogleAccount = () => {
  unlinkGoogleAccount()
    .then(() => {
      errors.value.google = "";
      getLinkedProviderData();
    })
    .catch((e) => {
      errors.value.google = e;
    });
};
</script>
