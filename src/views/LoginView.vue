<template>
  <div class="w-full flex justify-center py-24">
    <div
      class="flex flex-col justify-center items-center border-red border-4 py-16 px-8 rounded-md"
    >
      <h1 class="text-xl font-bold">Login</h1>
      <form class="flex flex-col">
        <label class="mt-2" for="username">Username</label>
        <input
          class="border-black border-2 rounded"
          type="text"
          id="username"
        />
        <label class="mt-2" for="password">Password</label>
        <input
          class="border-black border-2 rounded"
          type="password"
          id="password"
        />
        <input
          class="mt-4 bg-red text-white font-bold py-2 rounded-md cursor-pointer"
          type="submit"
          value="Überprüfen"
        />
      </form>
    </div>
  </div>
</template>
