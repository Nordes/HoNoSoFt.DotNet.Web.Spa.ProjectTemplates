import Home from 'pages/home'
import CounterExample from 'pages/counter-example'
import FetchData from 'pages/fetch-data'
import ExtraStuff from 'pages/extra-stuff'
import About from 'pages/about'
import PageNotFound from 'pages/page-not-found'

export const routes = [
  { showMenu: false, name: '404', path: '/404', component: PageNotFound },
  { showMenu: true, name: 'home', path: '/:lang?', component: Home, display: 'Home', i18n: 'route.home', icon: 'icon-home' },
  { showMenu: true, name: 'counter', path: '/:lang?/counter', component: CounterExample, i18n: 'route.counter', icon: 'icon-counter' },
  { showMenu: true, name: 'fetch-data', path: '/:lang?/fetch-data', component: FetchData, i18n: 'route.fetchData', icon: 'icon-list-bullet' },
  { showMenu: true, name: 'extra-stuff', path: '/:lang?/extra-stuff', component: ExtraStuff, i18n: 'route.extraStuff', icon: 'icon-list-bullet' },
  { showMenu: true, name: 'about', path: '/:lang?/about', component: About, i18n: 'route.about', icon: 'icon-about' },
  { showMenu: false, name: 'catchAll', path: '*', redirect: '/404' }
]
