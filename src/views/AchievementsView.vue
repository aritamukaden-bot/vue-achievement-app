<template>
  <div>
    <h1>実績一覧</h1>
    <Achievementcard
      v-for="acitem in acitems"
      :key="acitem.id"
      :acitem="acitem"
      class="Achievementcard"
    />
  </div>
</template>

<script setup lang="ts">
import { acitems } from '@/data/acitems'
import Achievementcard from '@/components/Achievementcard.component.vue'
</script>

<style>
.Achievementcard {
}
</style>
