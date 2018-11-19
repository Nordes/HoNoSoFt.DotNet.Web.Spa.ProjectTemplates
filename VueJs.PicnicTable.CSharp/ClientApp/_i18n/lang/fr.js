const messages = {
  route: {
    home: 'Accueil',
    counter: 'Compteur',
    fetchData: 'Appel API',
    extraStuff: 'Chose Extra',
    about: 'À Propos'
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
    title: 'Erreur 404 - Page non trouvée',
    message: 'Page non trouvée'
  },
  home: {
    title: '.Net Core 2.1 / SPA alimenté par VueJS et Picnic CSS',
    welcome: 'Bienvenu sur votre nouvelle monopage applicative, construite avec:',
    welcomeHtml: `
    <li><a href="https://get.asp.net/">ASP.NET Core</a> et <a href="https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx">C#</a> pour du code serveur multi-plateforme</li>
    <li><a href="https://vuejs.org/">VueJs</a> pour le code client</li>
    <li><a href="https://picnicss.com/">Picnic CSS</a> pour le layout (UX/UI)</li>
    <li><a href="https://fontello.com">Fontello</a>, une librairie d'icones qui fonctionne bien avec les autres. Vous pouvez aussi utiliser des alternatives tel que FontAwesome.</li>
    <li><a href="https://github.com/Nordes/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates/wiki/eslint-details">EsLint</a> afin d'avoir une conformité dans votre code.</li>
    `,
    alsoSetup: 'Pour vous aider à démarrer, vous trouverez aussi ajouté au projet:',
    alsoHtml: `
    <li><a href="https://kazupon.github.io/vue-i18n/guide/started.html">Vue-i18n</a> pour l'internationalisation</li>
    <li><a href="https://baianat.github.io/vee-validate">Vee-Validate</a> pour la validation de formulaire</li>
    <li><a href="https://router.vuejs.org">Vue-Router</a> pour la navigation SPA (monopage)</li>
    <li><a href="https://vuex.vuejs.org">Vuex</a> pour gérer l'état de votre application</li>
    <li><a href="https://webpack.js.org">WebPack</a> pour vous aider à bâtir plus rapidement votre UX. En mode de developpement, il n'y aucun besoin d'exécuter <code>webpack {...}</code>.
    Vous pouvez tout simplement utiliser <code>dotnet run</code> et ainsi laisser la magie faire son oeuvre.</li>
    <li><strong>Build pour la production efficace</strong>. En mode production, les outils de developpement sont désactivés,
    et la commande <code>dotnet publish</code> invoque automatiquement la configuration de production et ainsi crée les fichiers minifiés.
    Les Chunk assure aussi de ne pas avoir de surprise au niveau client (cache).</li>
    `,
    npmDetailHtml: `L'application UX/UI se retrouve sous le répertoire <code>ClientApp</code> et se trouve à être une application standard NodeJs/VueJs. Si vous ouvre votre invite de commande dans le répertoire, 
    vous pouvez exécuter toutes les commandes <code>npm</code> (e.g., <code>npm run build</code>), ou encore utiliser <code>npm</code> pour installer des packages extra.`,
    binding: {
      title: 'Exemple simple pour du binding',
      hello: 'Bonjour {msg}!'
    },
    footer: 'Si vous voulez en savoir plus sur l\'auteur de ce template, vous pouvez le contacter par'
  },
  about: {
    title: 'À Propos',
    message: `<h4>Bonjour,</h4>
    <p>Ce template à été mis à votre disposition par <a href="https://www.honosoft.com">HoNoSoFt</a>. Nous espérons 
    que vous aurez du plaisir à travailler à l'aide de ce template. Nous avons aussi un <a href="https://blog.honosoft.com">blog</a> 
    ou vous y trouver pleins d'information intéressante (Fr, En).</p>
    <p>Plus de détails sur ce template peut être trouvé sur GitHub 
    <a href="https://www.nuget.org/packages/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates/">https://www.nuget.org/packages/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates/</a>.
    Il y a aussi un Wiki qui vous est a disposition afin d'obtenir plus d'information sur ce qui est inclus dans ce template.</p>
    <p>Best regards,</p>
    <p><a href="https://www.linkedin.com/in/nordes">Nordès Ménard-Lamarre</a> (<a href="https://www.honosoft.com/">HoNoSoFt</a>)</p>
    <br>
    <p class="flex center">La license est sous MIT, aillez du plaisir!</p>`
  },
  counter: {
    title: 'Compteur',
    welcome: 'Ceci est un exemple de page VueJS avec Vuex.',
    currentCount: 'Compteur (Vuex): ',
    count: 'Pas démarré | {count} tick | {count} ticks',
    autoCount: 'Compteur automatique: ',
    btnIncrement: 'Incrément',
    btnReset: 'Redémarrer'
  },
  message: {
    hello: 'bonjour monde'
  }
}

export default messages
