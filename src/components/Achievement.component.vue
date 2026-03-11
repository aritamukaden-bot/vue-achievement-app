<template>
  <div>
    <ul>
      <li v-for="acitem in acitems" :key="acitem.id">
        <router-link :to="`/achievement/${acitem.id}`">
          {{ acitem.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { acitems } from '@/data/acitems.ts'
</script>
