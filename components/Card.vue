<template>
  <a class="card sm:card-side bg-base-100 not-prose" :href="url" target="_blank">
    <figure class="sm:max-w-[25%]">
      <img class="w-full h-full" :src="image" v-if="image" />
    </figure>

    <div class="card-body max-sm:p-6 gap-1">
      <span class="card-title max-ml:text-lg">{{ title }}</span>
      <p class="max-ml:text-xs text-sm break-all">{{ url }}</p>
      <p class="mt-6 text-sm">{{ description }}</p>
    </div>
  </a>
</template>

<style lang="scss" scoped>
</style>

<script setup lang="ts">
  const props = defineProps<{
    title: string,
    description?: string,
    url?: string,
    image?: string
  }>();
</script>