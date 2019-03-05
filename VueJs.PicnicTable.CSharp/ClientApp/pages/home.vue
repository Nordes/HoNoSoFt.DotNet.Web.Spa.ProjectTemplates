<template>
  <div>
    <page-title :title="$t('home.title')" />
    <p>{{ $t('home.welcome') }}</p>
    <ul v-html="$t('home.welcomeHtml')">
    </ul>
    <p>{{ $t('home.alsoSetup') }}</p>
    <ul v-html="$t('home.alsoHtml')">
    </ul>
    <p v-html="$t('home.npmDetailHtml')"></p>

    <div class="flex one two-800 center">
      <article class="card">
        <header>{{ $t('home.binding.title') }}</header>
        <content>
          <strong>{{ $t('home.binding.hello', {msg: msg}) }}</strong>
        </content>
        <footer
          class="text-right"
          style="color: gray;"
        >
          <!-- here we could be using the format from i18n, or momentJs, the one you prefer -->
          <!-- for i18n => https://kazupon.github.io/vue-i18n/guide/datetime.html -->
          <!-- momentJs => https://momentjs.com/docs/ -->
          {{ (new Date()).toLocaleString() }}
        </footer>
      </article>
    </div>
    <br>
    <p>{{ $t('home.footer') }}
      <a
        href="https://www.linkedin.com/in/nordes"
      ><icon icon="icon-linkedin" /></a><a
        href="https://twitter.com/nordes"
      ><icon icon="icon-twitter" /></a><a
        href="https://www.facebook.com/honosofthq/"
      ><icon icon="icon-facebook" /></a><a
        href="https://github.com/Nordes/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates"
      ><icon icon="icon-github" /></a></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'world'
    }
  }
}
</script>
