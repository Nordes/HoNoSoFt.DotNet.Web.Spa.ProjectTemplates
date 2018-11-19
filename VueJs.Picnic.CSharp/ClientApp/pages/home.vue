<template>
  <div>
    <page-title title=".Net Core 2.1 / SPA powered by VueJS and Picnic CSS" />
    <p>Welcome to your new single-page application, built with:</p>
    <ul>
      <li><a href="https://get.asp.net/">ASP.NET Core</a> and <a href="https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx">C#</a> for cross-platform server-side code</li>
      <li><a href="https://vuejs.org/">VueJs</a> for client-side code</li>
      <li><a href="https://picnicss.com/">Picnic CSS</a> for layout and styling</li>
      <li><a href="https://fontello.com">Fontello</a>, an icon library that plays really nice with others.</li>
      <li><a href="https://github.com/Nordes/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates/wiki/eslint-details">EsLint</a>, in order to keep the code look &amp; feel constant.</li>
    </ul>
    <p>To help you get started, we've also set up:</p>
    <ul>
      <li><strong>Client-side navigation</strong> using <a href="https://router.vuejs.org/">Vue-Router</a>. For example, click <em>Counter</em>
        then <em>Back</em> to return here. (Featuring, <a href="https://vuex.vuejs.org">Vuex</a>)</li>
      <li><strong>WebPack CLI integration</strong>. In development mode, there's no need to run <code>webpack ...</code>.
      It runs in the background automatically, so your client-side resources are dynamically built on demand and the
      page refreshes when you modify any ClientApp file.</li>
      <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled,
      and your <code>dotnet publish</code> configuration automatically invokes <code>webpack ... production</code> to produce minified,
      ahead-of-time compiled JavaScript files. Chunk also insure that any client cache will not fail you when loading your application.</li>
    </ul>
    <p>The <code>ClientApp</code> subdirectory is a standard NodeJs/VueJs application. If you open a command prompt in that
    directory, you can run any <code>npm</code> command (e.g., <code>npm run build</code>), or use <code>npm</code> to install extra packages
    into it.</p>

    <div class="one two-800">
      <article class="card">
        <header>Simple example of binding</header>
        <content>
          <strong>Hello, {{ msg }}!</strong>
        </content>
        <footer
          class="text-right"
          style="color: gray;"
        >
          {{ (new Date()).toLocaleString() }}
        </footer>
      </article>
    </div>
    <br>
    <p>If you want to know more about the author of this template, you can contact him through
      <a
        href="https://www.linkedin.com/in/nordes"
        data-tooltip="LinkedIn"
      ><icon icon="icon-linkedin" /></a><a
        href="https://twitter.com/nordes"
        data-tooltip="Twitter"
      ><icon icon="icon-twitter" /></a><a
        href="https://www.facebook.com/honosofthq/"
        data-tooltip="Facebook (HoNoSoFt)"
      ><icon icon="icon-facebook" /></a><a
        href="https://github.com/Nordes/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates"
        data-tooltip="GitHub"
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
