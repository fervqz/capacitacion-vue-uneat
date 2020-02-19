import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/recipe-search',
    name: 'RecipeSearch',
    component: () => import('../views/RecipeSearch.vue')
  },
  {
    path: '/advanced-recipe-search',
    name: 'AdvancedRecipeSearch',
    component: () => import('../views/AdvancedRecipeSearch.vue')
  },
  {
    path: '/text-extractor',
    name: 'TextExtractor',
    component: () => import('../views/TextExtractor.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
