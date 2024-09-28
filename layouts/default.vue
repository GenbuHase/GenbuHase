<template>
  <div class="">
    <header class="absolute inset-x-0 top-0 z-50 text-neutral-content">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <NuxtLink to="/" class="brand-name -m-1.5 p-1.5 text-white">Genbu Hase</NuxtLink>
        </div>

        <div class="hidden lg:flex lg:gap-x-20">
          <NuxtLink to="/" class="font-semibold leading-6">Home</NuxtLink>
          <NuxtLink to="/profile" class="font-semibold leading-6">Profile</NuxtLink>
          <NuxtLink to="/history" class="font-semibold leading-6">History</NuxtLink>
          <NuxtLink to="/projects" class="font-semibold leading-6">Projects</NuxtLink>
        </div>

        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5" @click="openMenu">
            <span class="sr-only">Open main menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>

      <!-- Mobile menu, show/hide based on menu open state. -->
      <div ref="menu" class="menu lg:hidden" role="dialog" aria-modal="true" v-if="Menu_isOpened">
        <!-- Background backdrop, show/hide based on slide-over state. -->
        <div class="fixed inset-0 z-50"></div>

        <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <div />

            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="closeMenu">
              <span class="sr-only">Close menu</span>

              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <NuxtLink to="/" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</NuxtLink>
                <NuxtLink to="/profile" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Profile</NuxtLink>
                <NuxtLink to="/history" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">History</NuxtLink>
                <NuxtLink to="/projects" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Projects</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <slot />

    <footer class="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
      <aside class="grid-flow-col items-center">
        <p>
          Copyright &copy; 2024 <a class="link" href="/">長谷 玄武 (Genbu Hase)</a><br>
          All Rights Reserved.
        </p>
      </aside>
      
      <nav class="grid grid-flow-col gap-4 place-self-center md:justify-self-end">
        <a href="https://github.com/GenbuHase" target="_blank">
          <img src="~/assets/icons/github.svg" />
        </a>

        <a href="https://twitter.com/GenbuHase" target="_blank">
          <img src="~/assets/icons/twitter.svg" />
        </a>

        <a href="https://www.instagram.com/genbuhase/" target="_blank">
          <img src="~/assets/icons/instagram.svg" />
        </a>
      </nav>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
  .menu {
    @apply transition;
    @apply duration-200;
    @apply ease-out;
    @apply opacity-0;

    &.open {
      @apply transition;
      @apply duration-150;
      @apply ease-in; 
      @apply opacity-100;
    }
  }
</style>

<script setup lang="ts">
  import { ref } from "vue";

  const menu = ref();
  const Menu_isOpened = ref(false);

  function openMenu () {
    Menu_isOpened.value = true;
    setTimeout(() => menu.value.classList.add("open"));
  }

  function closeMenu () {
    menu.value.classList.remove("open");
    setTimeout(() => Menu_isOpened.value = false, 150);
  }
</script>