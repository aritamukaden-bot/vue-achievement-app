<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { acitems } from '@/data/acitems'
import { userAchievements as defaultAchievements } from '@/data/userAchievements'
import AchievementCard from '@/components/AchievementCard.vue'

const route = useRoute()
const id = Number(route.params.id)

const acitem = acitems.find((item) => item.id === id)

/* localStorage から読み込む */
const savedAchievements = localStorage.getItem('achievements')
const achievements = savedAchievements ? JSON.parse(savedAchievements) : defaultAchievements

/*上はidの引き渡し*/
const userAchievement = achievements.find((item) => item.achievementId === id)
const date = ref(userAchievement ? userAchievement.date : '')
const memo = ref(userAchievement ? userAchievement.memo : '')
const something = ref(userAchievement ? userAchievement.photo : '')

function handleImage(event) {
  const file = event.target.files[0]
  const reader = new FileReader()
  reader.onload = function () {
    something.value = reader.result
  }
  reader.readAsDataURL(file)
}

function saveAchievement() {
  userAchievement.date = date.value
  userAchievement.memo = memo.value
  userAchievement.photo = something.value
  userAchievement.unlocked = true

  localStorage.setItem('achievements', JSON.stringify(achievements))
  alert('実績解除：' + acitem.name)
}
</script>
<template>
  <div>
    <h1>詳細画面</h1>
    <h2>{{ acitem?.name }}</h2>
    <input type="date" v-model="date" />
    <img :src="something" />
    <input type="file" accept="image/*" @change="handleImage" />
    <input type="text" v-model="memo" />
    <button @click="saveAchievement">保存</button>
  </div>
  <AchievementCard :achievement="acitem" />
</template>
