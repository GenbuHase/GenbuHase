<template>
  <main class="flex place-content-center pt-[96px] lg:pt-[72px]">
    <article class="prose max-w-3xl p-12 sm:p-10">
      <h1>
        <Icon name="mdi:application-brackets-outline" />
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
          description="埼玉大学周辺のバスロケーションサービス「わかめナビ」を制作しました。"
          url="https://wakame-navi.vercel.app/"
          image="https://wakame-navi.vercel.app/assets/ogp_1200x600.png" />

        <Card
          title="Shuwardle"
          description="日本手話の指文字を用いた単語当てゲーム「Shuwardle」を制作しました。"
          url="https://genbuhase.github.io/Shuwardle/" />

        <Card
          title="AMeDAS Visualizers"
          description="気象庁の公開データを利用して、日本全国のアメダス観測所における現在の気象状況を地図上に可視化するWebアプリケーションを制作しました。"
          url="https://genbuhase.github.io/AMeDAS_Visualizer/" />

        <Card
          title="Auto Paginator"
          description="複数ページにわたるWebページを1枚に自動で連結し、スクロールだけで閲覧可能にするChrome拡張機能を制作しました。"
          url="https://github.com/GenbuHase/AutoPaginator/" />

        <Card
          title="Bouyomi Launcher"
          description="フリーソフト「棒読みちゃん」に自動読み上げさせるChrome拡張機能を制作しました。"
          url="https://github.com/GenbuHase/BouyomiLauncher/" />

        <Card
          title="Mastodon on Email (MoE)"
          description="Eメール機能を用いてMastodonへの投稿や通知の確認ができるアプリケーションを制作しました。"
          url="https://github.com/GenbuHase/MastodonOnEmail/" />

        <Card
          title="Article Editor"
          description="ブログ形式サイトのための記事編集アプリケーションを制作しました。"
          url="https://github.com/GenbuHase/ArticleEditor/" />
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