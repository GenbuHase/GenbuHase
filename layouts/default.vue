<template>
  <section class="text-base-content bg-[#f4b3c2]">
    <header class="fixed inset-x-0 top-0 z-50 text-white">
      <div class="drawer drawer-end">
        <input id="sidebar-status" class="drawer-toggle" type="checkbox" />

        <div class="drawer-content flex flex-col">
          <nav class="navbar p-6 lg:px-8">
            <div class="flex-1">
              <NuxtLink to="/" class="brand-name -m-1.5 p-1.5">Genbu Hase</NuxtLink>
            </div>

            <div class="hidden lg:flex lg:gap-x-20">
              <NuxtLink to="/" class="font-bold">Home</NuxtLink>
              <NuxtLink to="/profile" class="font-bold">Profile</NuxtLink>
              <NuxtLink to="/history" class="font-bold">History</NuxtLink>
              <NuxtLink to="/projects" class="font-bold">Projects</NuxtLink>
            </div>

            <div class="flex-none lg:hidden">
              <label class="btn btn-square btn-ghost" for="sidebar-status" aria-label="Open Sidebar">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </label>
            </div>
          </nav>
        </div>

        <div class="drawer-side text-base-content">
          <label class="drawer-overlay" for="sidebar-status" aria-label="Close Sidebar" />

          <ul class="menu menu-lg w-full sm:max-w-sm min-h-full p-6 bg-white sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
              <div />

              <label class="btn btn-square btn-ghost" for="sidebar-status" aria-label="Close Sidebar">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </label>
            </div>

            <div class="mt-6">
              <li><NuxtLink to="/" class="text-base font-bold">Home</NuxtLink></li>
              <li><NuxtLink to="/profile" class="text-base font-bold">Profile</NuxtLink></li>
              <li><NuxtLink to="/history" class="text-base font-bold">History</NuxtLink></li>
              <li><NuxtLink to="/projects" class="text-base font-bold">Projects</NuxtLink></li>
            </div>
          </ul>
        </div>
      </div>
    </header>

    <slot />

    <footer class="footer px-10 py-4 bg-base-200 text-base-content border-base-300 border-t">
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
  </section>
</template>

<style lang="scss" scoped>
</style>

<script setup lang="ts">
</script>