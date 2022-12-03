<script setup>
import HomeButton from "@/components/HomeButton.vue";
</script>

<template>
  <div class="container mt-20 p-2 lg:mt-4">
    <header class="mb-20 lg:mb-6">
      <div class="text-[2rem] bold">GUESS THE POKEMON</div>
      <span class="italic"> by its stats </span>
    </header>

    <main>
      <div class="button-container flex flex-col gap-8">
        <HomeButton text="1 PLAYER" subText="enjoy a solo run" filename="umbreon.png" />
        <HomeButton text="2 PLAYERS" subText="challenge a friend" filename="seviper.png" />
        <HomeButton text="HELP" subText="know more about the game" filename="murkrow.png" />
      </div>
    </main>
  </div>
</template>


