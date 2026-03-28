<script setup>
import Achievementstatus from '@/components/Achievementstatus.component.vue'

import Achievement from '@/components/Achievement.component.vue'

const props = defineProps({
  acitem: Object,
})
</script>

<template>
  <div class="Achievementcard">
    <Achievement :acitem="props.acitem" />
    <Achievementstatus :acitem="props.acitem" />
  </div>
</template>

<style>
.Achievementcard {
  background: white;
  width: 100%;
}
</style>
