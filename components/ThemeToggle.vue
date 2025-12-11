<template>
  <button class="btn btn-ghost btn-circle" @click="toggleTheme" aria-label="Toggle Theme">
    <Icon v-if="isDark" name="heroicons:moon-20-solid" class="w-6 h-6" />
    <Icon v-else name="heroicons:sun-20-solid" class="w-6 h-6" />
  </button>
</template>

<script setup lang="ts">
  const colorMode = useColorMode();

  const isDark = computed(() => colorMode.value === "dark");

  function toggleTheme () {
    colorMode.preference = isDark.value ? "light" : "dark";
  }
</script>
