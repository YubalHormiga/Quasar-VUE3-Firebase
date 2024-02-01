<script setup>
import { onMounted, onUnmounted, onUpdated, ref } from "vue";

const tareas = ref([])
onMounted(() => console.log("OnMounted"));
onUnmounted(() => console.log("onUnmounted"));
onUpdated(() => console.log("onUpdated"));
</script>

<template>
  <h6>Ciclo de Vida</h6>
  <q-btn to="/" label="Ir a Inicio" />
  <q-btn
    color="primary"
    label="Agregar Tarea"
    @click="tareas.push('Nueva Tarea')"
  />
  {{ tareas }}
</template>
<style scoped></style>
