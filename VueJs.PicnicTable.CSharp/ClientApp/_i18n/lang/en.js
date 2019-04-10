const messages = {
  route: {
    home: 'Home',
    counter: 'Counter',
    fetchData: 'Fetch-data',
    extraStuff: 'Extra Stuff',
    about: 'About',
    error404: 'Error: Page not found'
  },
  cookieConsent: {
    message: 'This website is using cookies.',
    moreDetails: 'More details can be found here',
    accept: 'I accept'
  },
  navMenu: {
    title: 'VueJs Core',
    lang: {
      en: 'En',
      fr: 'Fr',
      ja: '日本語'
    }
  },
  '404': {
    title: 'Error 404 - Not Found',
    message: 'Not Found'
  },
  home: {
    title: '.Net Core 2.2 / SPA powered by VueJS and Picnic CSS',
    welcome: 'Welcome to your new single-page application, built with:',
    welcomeHtml: `
    <li><a href="https://get.asp.net/">ASP.NET Core</a> and <a href="https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx">C#</a> for cross-platform server-side code</li>
    <li><a href="https://vuejs.org/">VueJs</a> for client-side code</li>
    <li><a href="https://picnicss.com/">Picnic CSS</a> for layout and styling</li>
    <li><a href="https://fontello.com">Fontello</a>, an icon library that plays really nice with others. You can also use alternative library like FontAwesome if you prefer.</li>
    <li><a href="https://github.com/Nordes/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates/wiki/eslint-details">EsLint</a>, in order to keep the code look uniform.</li>
    `,
    alsoSetup: 'To help you get started, we\'ve also added:',
    alsoHtml: `
    <li><a href="https://kazupon.github.io/vue-i18n/guide/started.html">Vue-i18n</a> for internationalization</li>
    <li><a href="https://baianat.github.io/vee-validate">Vee-Validate</a> for forms validation</li>
    <li><a href="https://router.vuejs.org">Vue-Router</a> for SPA navigation.</li>
    <li><a href="https://vuex.vuejs.org">Vuex</a> for state management within the application</li>
    <li><a href="https://webpack.js.org">WebPack</a> to help you build faster your UX. In development mode, there's no need to run <code>webpack {...}</code>.
    You simply need to use <code>dotnet run</code> and let the magic happen.</li>
    <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled,
    and your <code>dotnet publish</code> configuration automatically invokes <code>webpack ... production</code> to produce minified,
    ahead-of-time compiled JavaScript files. Chunk also insure that any client cache will not fail you when loading your application.</li>
    `,
    npmDetailHtml: `The <code>ClientApp</code> subdirectory is a standard NodeJs/VueJs application. If you open a command prompt in that
    directory, you can run any <code>npm</code> command (e.g., <code>npm run build</code>), or use <code>npm</code> to install extra packages
    into it.`,
    binding: {
      title: 'Simple example of binding',
      hello: 'Hello {msg}!'
    },
    footer: 'If you want to know more about the author of this template, you can contact him through'
  },
  about: {
    title: 'About',
    message: `<h4>Hi,</h4>
    <p>This template is brought to you by <a href="https://www.honosoft.com">HoNoSoFt</a>. We hope 
    that you'll have fun working with this template. We also have a <a href="https://blog.honosoft.com">blog</a> 
    where you'll find plenty of interesting stuff. However, you will have to use the google translate if you 
    don't speak French ;).</p>
    <p>More details about this template can be found at the Github repository 
    <a href="https://www.nuget.org/packages/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates/">https://www.nuget.org/packages/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates/</a>.
    There's also a wiki available for more details about what is included in the template.</p>
    <p>Best regards,</p>
    <p><a href="https://www.linkedin.com/in/nordes">Nordès Ménard-Lamarre</a> (<a href="https://www.honosoft.com/">HoNoSoFt</a>)</p>
    <br>
    <p class="flex center">The license is MIT, enjoy!</p>`
  },
  counter: {
    title: 'Counter',
    welcome: 'This is a simple example of an VueJs page component.',
    currentCount: 'Current count (Vuex): ',
    count: 'Not started | {count} tick | {count} ticks',
    autoCount: 'Auto count: ',
    btnIncrement: 'Increment',
    btnReset: 'Reset'
  },
  message: {
    hello: 'Hello world'
  }
}

export default messages
