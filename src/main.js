import './style.css'
import { home } from './pages/home.js'
import { about } from './pages/about.js'
import { contact } from './pages/contact.js'
import { admin } from './pages/admin.js'

const routes = {
  '/': home,
  '/about': about,
  '/contact': contact,
  '/admin': admin,
}

function render() {
  const path = location.hash.slice(1) || '/'
  const page = routes[path] || home
  document.getElementById('app').innerHTML = page()

  document.querySelectorAll('[data-link]').forEach((a) => {
    const active = a.getAttribute('href') === '#' + path
    a.classList.toggle('text-sky-400', active)
    a.classList.toggle('font-semibold', active)
    a.classList.toggle('hover:text-sky-300', !active)
  })
}

window.addEventListener('hashchange', render)
window.addEventListener('DOMContentLoaded', render)
render()