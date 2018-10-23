import Home from 'pages/home'
import CounterExample from 'pages/counter-example'
import FetchData from 'pages/fetch-data'
import About from 'pages/about'

export const routes = [
  { name: 'home', path: '/', component: Home, display: 'Home' },
  { name: 'counter', path: '/counter', component: CounterExample, display: 'Counter', icon: 'graduation-cap' },
  { name: 'fetch-data', path: '/fetch-data', component: FetchData, display: 'Fetch data', icon: 'list' },
  { name: 'about', path: '/about', component: About, display: 'About', icon: 'question' }
]
