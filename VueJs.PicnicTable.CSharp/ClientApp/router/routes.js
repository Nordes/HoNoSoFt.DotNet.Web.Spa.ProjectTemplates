import Home from 'pages/home'
import CounterExample from 'pages/counter-example'
import FetchData from 'pages/fetch-data'
import ExtraStuff from 'pages/extra-stuff'
import About from 'pages/about'
import NotFound404 from 'pages/404'

// Order matter since there's the language optional tag. That's why home is the
// latest with the catch{all}.
export const routes = [
  { name: '404', path: '/404', component: NotFound404, meta: { order: null } },
  { name: 'counter', path: '/:lang?/counter', component: CounterExample, i18n: 'route.counter', icon: 'icon-counter', meta: { order: 2 } },
  { name: 'fetch-data', path: '/:lang?/fetch-data', component: FetchData, i18n: 'route.fetchData', icon: 'icon-list-bullet', meta: { order: 3 } },
  { name: 'extra-stuff', path: '/:lang?/extra-stuff', component: ExtraStuff, i18n: 'route.extraStuff', icon: 'icon-list-bullet', meta: { order: 4 } },
  { name: 'about', path: '/:lang?/about', component: About, i18n: 'route.about', icon: 'icon-about', meta: { order: 5 } },
  { name: 'home', path: '/:lang?', component: Home, display: 'Home', i18n: 'route.home', icon: 'icon-home', meta: { order: 1 } },
  { name: 'catchAll', path: '*', redirect: '/404', meta: { order: null } }
]
