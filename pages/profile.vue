<template>
  <main class="flex place-content-center pt-[96px] lg:pt-[72px]">
    <article id="profile" class="prose max-w-3xl p-12">
      <h1>
        <Icon name="mdi:person-outline" />
        Profile
      </h1>

      <p>
        東京都板橋区生まれ、東京都板橋区育ちのいたばしっ子。
        小学3年生より独学でプログラミングをはじめ、現在もサービスやプロダクトの開発を行っている。
        大学では特別支援教育を専攻し、幼稚園・小学校・中学校・高等学校・特別支援学校の教員免許を取得する見込み。
      </p>

      <section>
        <h2>
          <Icon name="mdi:gear-outline" />
          Skills
        </h2>

        <section>
          <img alt="My GitHub Stats" src="https://github-readme-stats.vercel.app/api?username=GenbuHase&show_icons=true" />
          <img alt="My Top Languages" src="https://github-readme-stats.vercel.app/api/top-langs/?username=GenbuHase&layout=donut" />
          <img alt="My GitHub Trophy" src="https://github-profile-trophy.vercel.app/?username=GenbuHase&theme=flat&margin-w=4&margin-h=4&column=7" />
        </section>

        <section>
          <h3>Primary</h3>
          <img src="https://skillicons.dev/icons?theme=dark&perline=10&i=html,css,sass,js,ts,nodejs,npm,deno,vue,nuxtjs,vuetify,react,redux,nextjs,jquery,express,tailwind,gulp,firebase,regex,vercel,heroku" />
        </section>

        <section>
          <h3>Secondary</h3>
          <img src="https://skillicons.dev/icons?theme=dark&perline=10&i=java,c,cs,cpp,py,bash,php,pug,p5js,threejs,webpack,mongodb,netlify,figma" />
        </section>
      </section>

      <section>
        <h2>
          <Icon name="mdi:certificate-outline" />
          Certifications
        </h2>

        <table class="table table-lg">
          <thead>
            <tr>
              <th>取得時期</th>
              <th>資格名</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>2016/02</td>
              <td>日本漢字能力検定 準2級を取得</td>
            </tr>

            <tr>
              <td>2016/11</td>
              <td>実用英語技能検定 2級を取得</td>
            </tr>

            <tr>
              <td>2018/12</td>
              <td>語彙・読解力検定 2級を取得</td>
            </tr>

            <tr>
              <td>2020/11</td>
              <td>実用英語技能検定 2級を再取得 (2198点)</td>
            </tr>

            <tr>
              <td>2022/02</td>
              <td>TOEIC Listening & Reading Test 770点を取得</td>
            </tr>

            <tr>
              <td>2025/03</td>
              <td>小学校教諭一種免許状を取得見込み</td>
            </tr>

            <tr>
              <td>2025/03</td>
              <td>中学校教諭一種免許状(英語)を取得見込み</td>
            </tr>

            <tr>
              <td>2025/03</td>
              <td>高等学校教諭一種免許状(英語)を取得見込み</td>
            </tr>

            <tr>
              <td>2025/03</td>
              <td>特別支援学校教諭一種免許状を取得見込み</td>
            </tr>

            <tr>
              <td>2025/03</td>
              <td>幼稚園教諭二種免許状を取得見込み</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>
          <Icon name="mdi:contact-outline" />
          Contacts
        </h2>

        <section>
          <h3>
            <Icon name="mdi:twitter" />
            Twitter (Currently 𝕏)
          </h3>

          <ul>
            <li><a href="https://twitter.com/GenbuHase" target="_blank">長谷 玄武 / Genbu Hase (@GenbuHase)</a></li>
            <li><a href="https://twitter.com/GenInAnywhere" target="_blank">どっかのげんちゃん。 (@GenInAnywhere)</a></li>
            <li><a href="https://twitter.com/SU_Mentsuyu" target="_blank">めんつゆ。 (@SU_Mentsuyu)</a></li>
          </ul>
        </section>

        <section>
          <h3>
            <Icon name="mdi:instagram" />
            Instagram
          </h3>

          <ul>
            <li><a href="https://www.instagram.com/genbuhase" target="_blank">長谷 玄武 / Genbu Hase (@genbuhase)</a></li>
            <li><a href="https://www.instagram.com/programmergenboo" target="_blank">どっかのげんちゃん。 (@programmergenboo)</a></li>
          </ul>
        </section>
      </section>
    </article>
  </main>
</template>

<style lang="scss" scoped>
</style>

<script setup lang="ts">
</script>