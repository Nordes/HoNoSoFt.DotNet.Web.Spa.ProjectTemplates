<template>
  <div>
    <page-title :title="$t('about.title')" />
    <!-- Usually you don't necessarily want to generate the full text/html from the language. -->
    <!-- this will add a XSS vulnerability! CREF: https://kazupon.github.io/vue-i18n/guide/formatting.html#html-formatting -->
    <div v-html="$t('about.message')"></div>
  </div>
</template>
