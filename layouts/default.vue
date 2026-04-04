<template>
  <section>
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