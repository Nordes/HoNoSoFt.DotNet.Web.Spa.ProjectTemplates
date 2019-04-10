import Home from 'pages/home'
import CounterExample from 'pages/counter-example'
import FetchData from 'pages/fetch-data'
import About from 'pages/about'
import NotFound404 from 'pages/404'

export const routes = [
  { name: '404', path: '/404', component: NotFound404, meta: { showMenu: false, display: 'Error' } },
  { name: 'home', path: '/', component: Home, meta: { showMenu: true, display: 'Home', icon: 'icon-home' } },
  { name: 'counter', path: '/counter', component: CounterExample, meta: { showMenu: true, display: 'Counter', icon: 'icon-counter' } },
  { name: 'fetch-data', path: '/fetch-data', component: FetchData, meta: { showMenu: true, display: 'Fetch data', icon: 'icon-list-bullet' } },
  { name: 'about', path: '/about', component: About, meta: { showMenu: true, display: 'About', icon: 'icon-about' } },
  { name: 'catchAll', path: '*', redirect: '/404', meta: { showMenu: false } }
]
