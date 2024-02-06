<!-- ButtonCounter.vue -->
<script setup>
import { ref } from 'vue'

const count = ref(0)
const props = defineProps(['post'])
</script>

<template>
  <button @click="count++">Me has clickeado {{ count }} veces.</button>
  {{ post.title }}
</template>
