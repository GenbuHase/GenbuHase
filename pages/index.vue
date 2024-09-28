<template>
  <div>
    <section class="hero min-h-svh">
      <div class="hero-overlay opacity-80"></div>
      
      <div class="hero-content flex flex-col gap-y-10 md:absolute md:right-20 text-white">
        <h1 class="brand-name text-2xl">Genbu Hase</h1>
        
        <nav class="grid grid-flow-col gap-5">
          <a href="https://github.com/GenbuHase" target="_blank">
            <img src="~/assets/icons/github-outlined.svg" />
          </a>

          <a href="https://twitter.com/GenbuHase" target="_blank">
            <img src="~/assets/icons/twitter-outlined.svg" />
          </a>

          <a href="https://www.instagram.com/genbuhase/" target="_blank">
            <img src="~/assets/icons/instagram-outlined.svg" />
          </a>
        </nav>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  .hero {
    background-image: url("~/assets/hero.jpg");
  }
</style>