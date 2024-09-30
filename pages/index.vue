<template>
  <div class="bg-current">
    <aside ref="hero" :class='["hero", `hero-${currentHeroImage}`, "min-h-svh"]'>
      <div class="hero-overlay opacity-80"></div>
      
      <div class="hero-content flex flex-col gap-y-8 md:absolute md:right-20 text-white">
        <div class="flex gap-x-4 text-3xl">
          <button @click="prevHeroImage">
            <span class="material-icons">keyboard_arrow_left</span>
          </button>

          <h1 class="brand-name text-2xl">Genbu Hase</h1>

          <button @click="nextHeroImage">
            <span class="material-icons">keyboard_arrow_right</span>
          </button>
        </div>
        
        <nav class="grid grid-flow-col gap-5">
          <a href="https://github.com/GenbuHase" target="_blank">
            <img src="~/assets/icons/github-outlined.svg" />
          </a>

          <a href="https://twitter.com/GenbuHase" target="_blank">
            <img src="~/assets/icons/twitter-outlined.svg" />
          </a>

          <a href="https://www.instagram.com/genbuhase/" target="_blank">
            <img src="~/assets/icons/instagram-outlined.svg" />
          </a>
        </nav>
      </div>
    </aside>
  </div>
</template>

<style lang="scss" scoped>
  .hero {
    @apply transition-opacity;
    @apply ease-out;
    @apply duration-300;

    &.changing {
      opacity: 0;
    }

    &-1 {
      background-image: url("~/assets/hero1.jpg");
      background-position: center center;
    }

    &-2 {
      background-image: url("~/assets/hero2.jpg");
      background-position: center 25%;
    }

    &-3 {
      background-image: url("~/assets/hero3.jpg");
      background-position: center 25%;
    }
  }
</style>

<script setup lang="ts">
  import { ref } from "vue";

  const HEROIMAGE_MAX_SIZE = 3;

  const hero = ref();
  const currentHeroImage = ref(1);

  function nextHeroImage () {
    setTimeout(() => hero.value.classList.add("changing"));
    setTimeout(() => currentHeroImage.value >= HEROIMAGE_MAX_SIZE ? currentHeroImage.value = 1 : currentHeroImage.value++, 500);
  }

  function prevHeroImage () {
    setTimeout(() => hero.value.classList.add("changing"));
    setTimeout(() => currentHeroImage.value <= 1 ? currentHeroImage.value = HEROIMAGE_MAX_SIZE : currentHeroImage.value--, 500);
  }

  function changeHeroImage (id: number) {
    setTimeout(() => hero.value.classList.add("changing"));
    setTimeout(() => currentHeroImage.value = id, 500);
  }
</script>