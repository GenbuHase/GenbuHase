<template>
  <button class="btn btn-ghost btn-circle" @click="toggleTheme" aria-label="Toggle Theme">
    <ClientOnly>
      <Transition name="rotate" mode="out-in">
        <Icon v-if="isDark" name="heroicons:moon-20-solid" class="w-6 h-6" />
        <Icon v-else name="heroicons:sun-20-solid" class="w-6 h-6" />
      </Transition>
    </ClientOnly>
  </button>
</template>

<style scoped>
  .rotate-enter-active,
  .rotate-leave-active {
    transition: all 0.25s ease-in-out;
  }

  .rotate-enter-from {
    opacity: 0;
    transform: rotate(-90deg) scale(0.5);
  }

  .rotate-leave-to {
    opacity: 0;
    transform: rotate(90deg) scale(0.5);
  }
</style>

<script setup lang="ts">
  const colorMode = useColorMode();

  const isDark = computed(() => colorMode.value === "dark");

  function toggleTheme () {
    colorMode.preference = isDark.value ? "light" : "dark";
  }
</script>
