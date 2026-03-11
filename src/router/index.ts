import { createRouter, createWebHistory } from 'vue-router'
import AchievementsView from '../views/AchievementsView.vue'
import AchievementDetail from '../views/AchievementDetail.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'Achievements',
      component: AchievementsView,
    },
    {
      path: '/achievement/:id',
      name: 'AchievementDetail',
      component: AchievementDetail,
    },
  ],
})

export default router
