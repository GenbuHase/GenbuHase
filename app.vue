<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
  :root {
    font-family: "Zen Maru Gothic";
  }

  .material-icons {
    font-family: "Material Symbols Outlined";
  }

  .page-enter-active,
  .page-leave-active,
  .layout-enter-active,
  .layout-leave-active {
    @apply transition;
    @apply duration-300;
  }

  .page-enter-from,
  .page-leave-to,
  .layout-enter-from,
  .layout-leave-to {
    @apply blur-md;

    opacity: 0;
  }

  @for $i from 1 through 6 {
    .prose h#{$i} {
      @apply flex;
      @apply items-center;
      @apply gap-3;

      > .iconify {
        font-size: 1.25em;
      }
    }
  }

  .brand-name {
    @apply font-extrabold;
    @apply uppercase;
    
    letter-spacing: 0.333em;
    word-spacing: 0.25em;
  }
</style>

<script setup lang="ts">
  const route = useRoute();

  useSeoMeta({
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",

    title: "",
    author: "長谷 玄武 (Genbu Hase)",
    description: "Web Developer",
    keywords: "長谷 玄武, Genbu Hase, ポートフォリオ, Portfolio",

    ogType: "website",
    ogSiteName: "長谷 玄武 (Genbu Hase)",
    ogTitle: "",
    ogDescription: "Web Developer",
    ogUrl: "https://genbuhase.github.io/GenbuHase/",
    ogImage: "https://genbuhase.github.io/GenbuHase/hero1.jpg",
    twitterCard: "summary_large_image",
    twitterSite: "@GenbuHase"
  });

  useHead({
    title: () => route.meta.title ? `${route.meta.title}｜長谷 玄武 (Genbu Hase)` : "長谷 玄武 (Genbu Hase)",

    meta: [
      { property: "og:title", content: route.meta.title ? `${route.meta.title}｜長谷 玄武 (Genbu Hase)` : "長谷 玄武 (Genbu Hase)" }
    ]
  });
</script>