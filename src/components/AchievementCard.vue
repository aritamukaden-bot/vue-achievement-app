<script setup>
import { useRoute } from 'vue-router'
import { acitems } from '@/data/acitems'
import { userAchievements } from '@/data/userAchievements'

const route = useRoute()
const id = Number(route.params.id)

const acitem = acitems.find((item) => item.id === id)

const userAchievement = userAchievements.find((item) => item.achievementId === id)
</script>

<template>
  <div>
    <p>{{ userAchievement?.unlocked ? '解除済み' : '未解除' }}</p>
  </div>
</template>
