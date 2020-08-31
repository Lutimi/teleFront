import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Empresas from '../components/Empresas.vue'
import Horarios from '../components/Horarios.vue'
import Locals from '../components/Locals.vue'
import Servicios from '../components/Servicios.vue'
import Reservas from '../components/Reservas.vue'
import Categorias from '../components/Categorias.vue'
import Vehiculoes from '../components/Vehiculoes.vue'
import Marcas from '../components/Marcas.vue'
import Modeloes from '../components/Modeloes.vue'
import Promociones from '../components/Promociones.vue'
import Conductores from '../components/Conductores.vue'
import ReservarAhora from '../views/ReservarAhora.vue'
import FAQ from '../views/FAQ.vue'
import Afiliados from '../views/Afiliados.vue'
import Promocion from '../views/Promociones.vue'
import Registrar from '../views/Registrar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/afiliados',
    name: 'afiliados',
    component: Afiliados
  },
  {
    path: '/registro',
    name: 'registrar',
    component: Registrar
  },
  {
    path: '/promocion',
    name: 'promocion',
    component: Promocion
  },
  {
    path: '/reservaahora',
    name: 'reservaahora',
    component: ReservarAhora
  },
  {
    path: '/faq',
    name: 'faq',
    component: FAQ
  },
  {
    path: '/empresas',
    name: 'empresas',
    component: Empresas
  },
  {
    path: '/horarios',
    name: 'horarios',
    component: Horarios
  },
  {
    path: '/locales',
    name: 'locales',
    component: Locals
  },
  {
    path: '/servicios',
    name: 'servicios',
    component: Servicios
  },
  {
    path: '/reservas',
    name: 'reservas',
    component: Reservas
  },
  {
    path: '/promociones',
    name: 'promociones',
    component: Promociones
  },
  {
    path: '/categorias',
    name: 'categorias',
    component: Categorias
  },
  {
    path: '/conductores',
    name: 'conductores',
    component: Conductores
  },
  {
    path: '/vehiculos',
    name: 'vehiculos',
    component: Vehiculoes
  },
  {
    path: '/marcas',
    name: 'marcas',
    component: Marcas
  },
  {
    path: '/modelos',
    name: 'modelos',
    component: Modeloes
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
