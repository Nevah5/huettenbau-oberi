<template>
  <div class="mb-8 text-black">
    <!-- Title -->
    <h2 class="text-xl font-bold mb-2">
      Profil{{ isGoogleAccount() ? " [" : ""
      }}<font-awesome-icon
        icon="fa-brands fa-google"
        v-if="isGoogleAccount()"
      />{{ isGoogleAccount() ? " Google]" : "" }}
    </h2>
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
            <a href="#edit=displayName" class="text-red underline">Ändern</a>
          </div>
          <div class="flex justify-center items-center">
            <input
              type="text"
              id="displayName"
              class="appearance-none bg-black-light border-black border-2 border-solid rounded-md px-4 py-2 mt-1 w-full"
              disabled
              :value="(user!.displayName as string)"
            />
          </div>
        </div>
        <!-- Email -->
        <div class="mb-4 w-full">
          <div class="flex justify-between">
            <label for="email" class="font-bold">Email Adresse</label>
            <a
              href="#edit=email"
              class="text-red underline"
              v-if="!isGoogleAccount()"
              >Ändern</a
            >
          </div>
          <div class="flex justify-center items-center">
            <input
              type="text"
              id="email"
              class="appearance-none bg-black-light border-black border-2 border-solid rounded-md px-4 py-2 mt-1 w-full"
              disabled
              :value="(user!.email as string)"
            />
          </div>
        </div>
        <!-- User ID -->
        <div class="mb-4 w-full">
          <label for="uid" class="font-bold">User ID</label>
          <div class="flex justify-center items-center">
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
  </div>
</template>

<script setup lang="ts">
import { loggedInUser, isGoogleAccount } from "@/composables/account";

const user = loggedInUser();
</script>
