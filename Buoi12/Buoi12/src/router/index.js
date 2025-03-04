import { createWebHistory, createRouter } from 'vue-router'
import Detail from '@/page/Detail.vue'

const routes = [
  { path: '/detail/:id', component: Detail },
  // {
  //   path: '/:name',
  //   component: {

  //   }
  // }
]


// dinh nghia trong 1 file, muon su dung phair export ra
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;