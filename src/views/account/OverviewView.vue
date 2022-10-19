<template>
  <section class="w-full px-4 sm:w-9/12 sm:px-0 xl:w-1/2">
    <div class="mb-8 text-black">
      <h2 class="text-xl font-bold mb-2">Profil</h2>
      <div class="w-full bg-black h-[2px] block mb-2"></div>
      <div
        class="flex justify-start sm:flex-row mt-4 flex-wrap w-full flex-col"
      >
        <div
          class="flex flex-col justify-start items-center w-fit sm:w-1/3 mb-4 sm:mb-0"
        >
          <img
            :class="'rounded-full h-32 w-32'"
            :src="(user!.photoURL as string)"
          />
          <span class="w-fit font-bold">Avatar</span>
        </div>
        <div class="flex flex-col justify-start items-start sm:w-2/3 w-full">
          <div class="mb-4 w-full">
            <label for="displayName" class="font-bold">Anzeige Name</label>
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
          <div class="mb-4 w-full">
            <label for="email" class="font-bold">Email Adresse</label>
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
    <div class="mb-8">
      <h2 class="text-xl font-bold text-black mb-2">Account</h2>
      <div class="w-full bg-black h-[2px] block mb-2"></div>
      <p class="text-black mb-2">
        Hier kannst du verschidene Aktionen mit deinem Account durchführen. Du
        solltest aber mit <b>VORSICHT</b> vorgehen, da diese meist nicht
        wiederherstellbar sind.
      </p>
      <button
        class="text-white font-bold bg-red rounded-md border-2 border-red py-2 px-4 mr-2"
        @click="logout"
      >
        Logout
      </button>
      <button
        class="text-red font-bold bg-white border-red border-2 rounded-md py-2 px-4 mr-2 hover:bg-red hover:text-white"
      >
        DEAKTIVIEREN
      </button>
      <button
        class="text-red font-bold bg-white border-red border-2 rounded-md py-2 px-4 mr-2 hover:bg-red hover:text-white"
      >
        LÖSCHEN
      </button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { logoutUser, loggedInUser } from "@/composables/account";

const user = loggedInUser();
const router = useRouter();

const logout = () => {
  logoutUser()
    .then(() => {
      router.push("/");
    })
    .catch((e) => {
      console.log(e);
    });
};
</script>
