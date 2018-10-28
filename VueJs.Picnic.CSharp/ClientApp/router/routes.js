import Home from 'pages/home'
import CounterExample from 'pages/counter-example'
import FetchData from 'pages/fetch-data'
import About from 'pages/about'
import PageNotFound from 'pages/page-not-found'

export const routes = [
  { showMenu: false, name: '404', path: '/404', component: PageNotFound },
  { showMenu: true, name: 'home', path: '/', component: Home, display: 'Home', icon: 'icon-home' },
  { showMenu: true, name: 'counter', path: '/counter', component: CounterExample, display: 'Counter', icon: 'icon-counter' },
  { showMenu: true, name: 'fetch-data', path: '/fetch-data', component: FetchData, display: 'Fetch data', icon: 'icon-list-bullet' },
  { showMenu: true, name: 'about', path: '/about', component: About, display: 'About', icon: 'icon-about' },
  { showMenu: false, name: 'catchAll', path: '*', redirect: '/404' }
]
