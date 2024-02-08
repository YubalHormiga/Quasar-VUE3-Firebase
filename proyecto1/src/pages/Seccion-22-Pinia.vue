<script setup>
import { useCounterStore } from '../stores/counter.js';
const store = useCounterStore();


</script>

<template>
  <div>
    <h1>{{ store.name }}</h1>
    <q-btn color="primary" label="Increment" @click="store.increment" />
    <q-btn color="primary" label="Doble" @click="store.doble" />
    <h3>{{ store.count }}</h3>
  </div>
</template>

