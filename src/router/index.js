import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MovieInfoPage from '../views/MovieInfoPage.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path:'/:searchRecap/:id/',
    name: 'MovieInfoPage',
    component: MovieInfoPage
    
  
   
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
