<script setup>
import { computed } from 'vue'

import { userAchievements } from '@/data/userAchievements'

const props = defineProps({
  acitem: Object,
})

const userAchievement = computed(() =>
  userAchievements.find((item) => item.achievementId === props.acitem.id),
)
</script>

<template>
  <div>
    <p>{{ userAchinement?.unlocked ? '解除済み' : '未解除' }}</p>
  </div>
</template>
