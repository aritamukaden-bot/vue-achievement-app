<template>
  <div>
    <ul>
      <router-link :to="`/achievement/${acitem.id}`">
        {{ acitem.name }}
      </router-link>
    </ul>
  </div>
</template>
<script setup>
defineProps({
  acitem: Object,
})
</script>
