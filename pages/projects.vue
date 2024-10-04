<template>
  <main class="flex place-content-center pt-[96px] lg:pt-[72px]">
    <article class="prose max-w-3xl p-12 sm:p-10">
      <h1>
        <Icon class="-ml-2" name="mdi:application-brackets-outline" />
        Projects
      </h1>

      <section class="flex flex-col gap-8">
        <Card
          title="ながたにさんの占い"
          description="新事業「ながたにさんの占い」のホームページを制作しました。"
          url="https://imagine.whereabouts.jp/"
          image="https://imagine.whereabouts.jp/assets/ogp_image.jpg" />

        <Card
          title="わかめナビ"
          description="埼玉大学周辺のバスロケーションサービス「わかめナビ」を制作しています。"
          url="https://wakame-navi.vercel.app/"
          image="https://wakame-navi.vercel.app/assets/ogp_1200x600.png" />

        <Card
          title="Shuwardle"
          description="日本手話の指文字を用いた単語当てゲーム「Shuwardle」を制作しました。"
          url="https://genbuhase.github.io/Shuwardle/" />
      </section>
    </article>
  </main>
</template>

<style lang="scss" scoped>
</style>

<script setup lang="ts">
  definePageMeta({
    title: "Projects"
  });
</script>