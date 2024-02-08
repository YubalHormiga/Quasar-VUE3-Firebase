<script setup>
import { ref } from "vue";
const objeto = ref({ nombre: "Yubal", apellido: "Hormiga" });
const mostrar = ref(false);
</script>

<template>
  <h6>Condicional</h6>

  <p v-if="mostrar">Nombre: {{ objeto.nombre }}</p>
  <p v-if="mostrar">Apellido: {{ objeto.apellido }}</p>
  <q-toggle v-model="mostrar" color="green" />
</template>
<style scoped></style>
