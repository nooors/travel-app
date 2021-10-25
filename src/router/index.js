import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/details/:slug',
    name: 'DestinationDetails',
    props: true,
    component: () => import(/* webpackChunkName: "panama" */ '../views/DestinationDetails.vue'),
    children: [
      {
        path: ":experienceSlug",// /details/:slug/:experienceSlug as a children don't need to specify entire route
        name: "experienceDetails",
        props: true,
        components: () => 
        import(/* webpackChunkName: "ExperienceDetails" */ "../views/ExperienceDetails.vue")
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
