<template>
  <section class="text-base-content bg-[#f4b3c2] dark:bg-base-300 transition-colors duration-500">
    <Header />

    <!-- https://github.com/nuxt/nuxt/issues/24632 -->
    <div>
      <slot />
    </div>

    <Footer />
  </section>
</template>

<style lang="scss" scoped>
</style>

<script setup lang="ts">
</script>