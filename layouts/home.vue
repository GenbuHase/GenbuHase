<template>
  <section class="text-base-content bg-[#f4b3c2] dark:bg-base-300 transition-colors duration-500">
    <Header class="text-white" />
    
    <!-- https://github.com/nuxt/nuxt/issues/24632 -->
    <div>
      <slot />
    </div>
  </section>
</template>

<style lang="scss" scoped>
</style>

<script setup lang="ts">
</script>