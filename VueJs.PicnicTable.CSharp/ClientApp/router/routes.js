import Home from 'pages/home'
import CounterExample from 'pages/counter-example'
import FetchData from 'pages/fetch-data'
import ExtraStuff from 'pages/extra-stuff'
import About from 'pages/about'
import NotFound404 from 'pages/404'

// Order matter since there's the language optional tag. That's why home is the
// latest with the catch{all}.
export const routes = [
  { name: '404', path: '/404', component: NotFound404, meta: { order: null, i18n: 'route.error404' } },
  { name: 'counter', path: '/:lang?/counter', component: CounterExample, meta: { order: 2, i18n: 'route.counter', icon: 'icon-counter' } },
  { name: 'fetch-data', path: '/:lang?/fetch-data', component: FetchData, meta: { order: 3, i18n: 'route.fetchData', icon: 'icon-list-bullet' } },
  { name: 'extra-stuff', path: '/:lang?/extra-stuff', component: ExtraStuff, meta: { order: 4, i18n: 'route.extraStuff', icon: 'icon-list-bullet' } },
  { name: 'about', path: '/:lang?/about', component: About, meta: { order: 5, i18n: 'route.about', icon: 'icon-about' } },
  { name: 'home', path: '/:lang?', component: Home, meta: { order: 1, i18n: 'route.home', icon: 'icon-home' } },
  { name: 'catchAll', path: '*', redirect: '/404', meta: { order: null } }
]
