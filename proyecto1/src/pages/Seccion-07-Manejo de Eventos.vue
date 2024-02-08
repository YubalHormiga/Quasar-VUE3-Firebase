<script setup>
import { ref } from "vue";

const contador = ref(0);
const incrementar = () => {
  contador.value++;
};
</script>

<template>
  <h6>Manejo de Eventos</h6>
  <div class="q-pa-lg">
    <p>{{ contador }}</p>
    <q-btn color="primary" label="Contador+1 en linea" @click="contador++" />
    <q-btn
      color="primary"
      label="Incrementar+1 en función"
      @click="incrementar"
      class=""
    />
  </div>
  <q-input @keyup.a="incrementar" label="Incrementar con teclado" />
</template>
<style scoped></style>
