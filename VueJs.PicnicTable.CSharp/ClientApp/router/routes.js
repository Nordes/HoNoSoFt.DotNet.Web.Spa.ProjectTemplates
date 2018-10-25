import Home from 'pages/home'
import CounterExample from 'pages/counter-example'
import FetchData from 'pages/fetch-data'
import ExtraStuff from 'pages/extra-stuff'
import About from 'pages/about'

export const routes = [
  { name: 'home', path: '/', component: Home, display: 'Home', icon: 'icon-home' },
  { name: 'counter', path: '/counter', component: CounterExample, display: 'Counter', icon: 'icon-counter' },
  { name: 'fetch-data', path: '/fetch-data', component: FetchData, display: 'Fetch data', icon: 'icon-list-bullet' },
  { name: 'extra-stuff', path: '/extra-stuff', component: ExtraStuff, display: 'Extra stuff', icon: 'icon-list-bullet' },
  { name: 'about', path: '/about', component: About, display: 'About', icon: 'icon-about' }
]
