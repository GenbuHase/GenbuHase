<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
  /**
   * ##################################################
   * # 共通クラス設定
   * ##################################################
   */
  .text {
    @apply text-gray-700;
    @apply dark:text-gray-300;
  }

  .background {
    @apply bg-[#f4b3c2];
    @apply dark:bg-gray-900;
  }

  .color-animation {
    @apply transition-colors;
    @apply duration-500;
  }



  /**
   * ##################################################
   * # ページ設定
   * ##################################################
   */
  :root {
    font-family: "Zen Maru Gothic";
  }

  .material-icons {
    font-family: "Material Symbols Outlined";
  }

  body {
    @apply background;
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



  /**
   * ##################################################
   * # コンポーネント設定
   * ##################################################
   */
  .brand-name {
    @apply font-extrabold;
    @apply uppercase;

    letter-spacing: 0.333em;
    word-spacing: 0.25em;
  }

  .header {
    @apply text-black;
    @apply dark:text-white;

    @apply background;
    @apply color-animation;
  }

  .footer {
    @apply text;

    @apply bg-gray-100;
    @apply dark:bg-gray-800;

    @apply border-gray-50;
    @apply dark:border-gray-700;

    @apply color-animation;
  }

  main {
    @apply text;
    @apply background;
    @apply color-animation;
  }

  .prose {
    @apply text;

    a {
      @apply text;
    }
  }

  @for $i from 1 through 6 {
    .prose h#{$i} {
      @apply flex;
      @apply items-center;
      @apply gap-3;

      @apply text-black;
      @apply dark:text-white;

      > .iconify {
        @apply -ml-2;

        font-size: 1.25em;
      }
    }
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