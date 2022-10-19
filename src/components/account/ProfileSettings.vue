<template>
  <div class="mb-8 text-black">
    <!-- Title -->
    <h2 class="text-xl font-bold mb-2">Profil</h2>
    <!-- Line -->
    <div class="w-full bg-black h-[2px] block mb-2"></div>
    <!-- Content -->
    <div class="flex justify-start sm:flex-row mt-4 flex-wrap w-full flex-col">
      <!-- Avatar -->
      <div
        class="flex flex-col justify-start items-center w-fit sm:w-1/3 mb-4 sm:mb-0"
      >
        <img
          :class="'rounded-full h-32 w-32'"
          :src="(user!.photoURL as string)"
        />
        <span class="w-fit font-bold">Avatar</span>
      </div>
      <!-- Data -->
      <div class="flex flex-col justify-start items-start sm:w-2/3 w-full">
        <!-- Display Name -->
        <div class="mb-4 w-full">
          <div class="flex justify-between">
            <label for="displayName" class="font-bold">Anzeige Name</label>
            <p
              v-if="!editStates.displayName"
              @click="editStates.displayName = true"
              class="text-red underline cursor-pointer"
            >
              Ändern
            </p>
          </div>
          <input
            v-if="!editStates.displayName"
            type="text"
            id="displayName"
            class="appearance-none bg-black-light border-black border-2 border-solid rounded-md px-4 py-2 mt-1 w-full"
            disabled
            :value="(user!.displayName as string)"
          />
          <form
            @submit.prevent="editDisplayName"
            v-else
            class="w-full flex flex-col justify-center items-start"
          >
            <input
              type="text"
              id="displayName"
              class="appearance-none border-black border-2 border-solid rounded-md px-4 py-2 mt-1 w-full"
              v-model="displayName"
            />
            <p
              class="text-red font-bold w-full"
              v-if="errorMessage.displayName"
            >
              {{ errorMessage.displayName }}
            </p>
            <div class="mt-2 flex justify-start gap-1">
              <button
                @click="
                  editStates.displayName = false;
                  displayName = user!.displayName;
                  editLoading.displayName = false;
                "
                class="rounded-md border-red border-2 border-solid text-red font-bold px-4 py-2"
                type="button"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="rounded-md bg-red text-white font-bold px-4 py-2"
              >
                <font-awesome-icon
                  v-if="editLoading.displayName"
                  icon="fa-solid fa-circle-notch"
                  class="animate-spin mr-1"
                />
                Save
              </button>
            </div>
          </form>
        </div>
        <!-- Email -->
        <div class="mb-4 w-full">
          <div class="flex justify-between">
            <label for="email" class="font-bold">Email Adresse</label>
            <p
              v-if="!editStates.email"
              @click="editStates.email = true"
              class="text-red underline cursor-pointer"
            >
              Ändern
            </p>
          </div>
          <input
            v-if="!editStates.email"
            type="text"
            id="email"
            class="appearance-none bg-black-light border-black border-2 border-solid rounded-md px-4 py-2 mt-1 w-full"
            disabled
            :value="(user!.email as string)"
          />
          <form
            @submit.prevent="editEmail"
            v-else
            class="w-full flex flex-col justify-center items-start"
          >
            <input
              type="email"
              id="email"
              class="appearance-none border-black border-2 border-solid rounded-md px-4 py-2 mt-1 w-full"
              v-model="email"
            />
            <p class="text-red font-bold w-full" v-if="errorMessage.email">
              {{ errorMessage.email }}
            </p>
            <div class="mt-2 flex justify-start gap-1">
              <button
                @click="
                  editStates.email = false;
                  email = user!.email;
                  editLoading.email = false;
                "
                class="rounded-md border-red border-2 border-solid text-red font-bold px-4 py-2"
                type="button"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="rounded-md bg-red text-white font-bold px-4 py-2"
              >
                <font-awesome-icon
                  v-if="editLoading.email"
                  icon="fa-solid fa-circle-notch"
                  class="animate-spin mr-1"
                />
                Save
              </button>
            </div>
          </form>
        </div>
        <!-- User ID -->
        <div class="mb-4 w-full">
          <label for="uid" class="font-bold">User ID</label>
          <input
            type="text"
            id="uid"
            class="appearance-none bg-black-light border-black border-2 border-solid rounded-md px-4 py-2 mt-1 w-full"
            disabled
            :value="(user!.uid as string)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  loggedInUser,
  changeDisplayName,
  changeEmail,
} from "@/composables/account";
import { ref } from "vue";

const user = loggedInUser();
const editStates = ref({
  displayName: false,
  email: false,
});
const editLoading = ref({
  displayName: false,
  email: false,
});
const errorMessage = ref({
  displayName: "",
  email: "",
});
const displayName = ref(user!.displayName);
const email = ref(user!.email);

const editDisplayName = () => {
  editLoading.value.displayName = true;
  errorMessage.value.displayName = "";

  changeDisplayName(displayName.value as string)
    .then(() => {
      editLoading.value.displayName = false;
      editStates.value.displayName = false;
    })
    .catch(() => {
      editLoading.value.displayName = false;
      errorMessage.value.displayName = "Etwas ist schief gelaufen!";
    });
};
const editEmail = () => {
  editLoading.value.email = true;
  errorMessage.value.email = "";

  changeEmail(email.value as string)
    .then(() => {
      editLoading.value.email = false;
      editStates.value.email = false;
    })
    .catch((errorMsg: string) => {
      editLoading.value.email = false;
      errorMessage.value.email = errorMsg;
    });
};
</script>
