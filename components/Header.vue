<template>
  <header class="fixed inset-x-0 top-0 z-50 text-gray-900 dark:text-white">
    <div class="drawer drawer-end">
      <input ref="sidebarStatus" id="sidebar-status" class="drawer-toggle" type="checkbox" />

      <div class="drawer-content flex flex-col">
        <nav class="navbar p-6 lg:px-8">
          <div class="flex-1">
            <NuxtLink to="/" class="brand-name -m-1.5 p-1.5" aria-label="A Link for Top-Page">Genbu Hase</NuxtLink>
          </div>

          <div class="hidden lg:flex lg:gap-x-20">
            <NuxtLink to="/" class="font-bold" aria-label="A Link for Top-Page">Home</NuxtLink>
            <NuxtLink to="/profile" class="font-bold" aria-label="A Link for Profile-Page">Profile</NuxtLink>
            <NuxtLink to="/history" class="font-bold" aria-label="A Link for History-Page">History</NuxtLink>
            <NuxtLink to="/projects" class="font-bold" aria-label="A Link for Projects-Page">Projects</NuxtLink>
          </div>

          <ThemeToggle class="lg:ml-10" />

          <div class="flex-none ml-4 lg:hidden">
            <label class="btn btn-ghost btn-circle" for="sidebar-status" aria-label="Open Sidebar">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </label>
          </div>
        </nav>
      </div>

      <div class="drawer-side text-base-content">
        <label class="drawer-overlay" for="sidebar-status" aria-label="Close Sidebar" />

        <ul class="menu menu-lg w-full sm:max-w-sm min-h-full p-6 bg-base-100 sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <div />

            <label class="btn btn-square btn-ghost" for="sidebar-status" aria-label="Close Sidebar">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </label>
          </div>

          <div class="mt-6">
            <li><NuxtLink class="text-base font-bold" to="/" @click="closeSidebar" aria-label="A Link for Top-Page">Home</NuxtLink></li>
            <li><NuxtLink class="text-base font-bold" to="/profile" @click="closeSidebar" aria-label="A Link for Profile-Page">Profile</NuxtLink></li>
            <li><NuxtLink class="text-base font-bold" to="/history" @click="closeSidebar" aria-label="A Link for History-Page">History</NuxtLink></li>
            <li><NuxtLink class="text-base font-bold" to="/projects" @click="closeSidebar" aria-label="A Link for Projects-Page">Projects</NuxtLink></li>
          </div>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
</style>

<script setup lang="ts">
  import { ref } from "vue";

  const sidebarStatus = ref();

  function closeSidebar () {
    sidebarStatus.value.checked = false;
  }
</script>