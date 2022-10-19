<template>
  <div class="mb-8">
    <h2 class="text-xl font-bold text-black mb-2">Account Sicherheit</h2>
    <div class="w-full bg-black h-[2px] block mb-2"></div>
    <p class="text-black mb-2" v-if="!hasPasswordLogin()">
      Da dein Account noch kein Passwort hat, kannst du dieses hier setzen.
      Diese Aktion schaltet das login mit Email und Passwort an.
    </p>
    <!-- Current Password -->
    <div class="mb-4 w-full">
      <label for="currentPW" class="font-bold" v-if="hasPasswordLogin()"
        >Aktuelles Passwort</label
      >
      <input
        v-if="hasPasswordLogin()"
        type="password"
        id="currentPW"
        class="appearance-none border-black border-2 border-solid rounded-md px-4 py-2 mt-1 w-full mb-2"
      />
      <label for="newPW" class="font-bold">Neues Passwort</label>
      <input
        type="password"
        id="newPW"
        class="appearance-none border-black border-2 border-solid rounded-md px-4 py-2 mt-1 w-full mb-2"
      />
      <label for="repeatNewPW" class="font-bold"
        >Neues Passwort wiederholen</label
      >
      <input
        type="password"
        id="repeatNewPW"
        class="appearance-none border-black border-2 border-solid rounded-md px-4 py-2 mt-1 w-full mb-2"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { hasPasswordLogin } from "@/composables/account";
</script>
