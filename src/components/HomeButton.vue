<script setup>
const props = defineProps({
  text: String,
  subText: String,
  filename: String,
});

function getImageUrl() {
  return new URL(`../assets/img/${props.filename}`, import.meta.url);
}

function getImageDescription() {
  let DotIndex = props.filename.indexOf(".");
  let PokemonName = props.filename.slice(0, DotIndex);
  return PokemonName + " icon";
}
</script>

<template>
  <button class="text-left text-xl bg-dark-custom text-white pt-12 px-1 text-lg rounded-md relative">
    <img :src="getImageUrl()" :alt="getImageDescription()" />
    <div class="text-[1.3rem]">
      <div class="btn-main-text">{{ text }}</div>
      <span class="italic"> {{ subText }}</span>
    </div>
  </button>
</template>

<style scoped>
.btn-main-text {
  margin-bottom: -15px;
}

.italic {
  margin-top: -15px;
  opacity: 0.85;
  font-size: 0.8rem;
  margin-top: -10px;
}

img {
  position: absolute;
  top: -2rem;
  right: -0.4rem;
  width: 5.5rem;
}
</style>
