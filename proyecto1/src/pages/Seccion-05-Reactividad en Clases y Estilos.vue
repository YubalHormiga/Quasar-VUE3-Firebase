<script setup>
import { ref, computed } from "vue";

const isPrimary = ref(false);
const isDark = ref(false);
const colorFondo = ref("");

const estilo = computed(() => {
  return {
    "bg-dark": isDark.value,
    "text-red": isDark.value,
  };
});
</script>

<template>
  <h6>Reactividad en Clases y Estilos</h6>
  <q-toggle v-model="isPrimary" color="green" label="Is Primary" />
  <p class="q-pa-lg" :class="{ 'bg-primary': isPrimary }">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </p>

  <q-toggle v-model="isDark" color="blue" />
  <p :class="estilo">El fondo de otro color</p>

  <p :style="{ 'background-color': colorFondo }">Cambiando color del fondo</p>
  <q-color v-model="colorFondo" />
</template>
