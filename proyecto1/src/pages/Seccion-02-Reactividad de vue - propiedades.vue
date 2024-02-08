<script setup>
import { ref } from "vue";

//Varibles o propiedades

const nombre = ref("Libreta");

const direccion = ref({
  ciudad: "Barcelona",
  pais: "España",
});

//Métodos
const modificar = () => {
  nombre.value = "Ahora soy Andres";
  direccion.value.continente = "Europa";
};
</script>
<template>
  <q-page>
    <h6>Propiedades Reactivas en Vue3</h6>
    <h6>{{ nombre }}</h6>
    <q-input v-model="nombre" type="text" label="Nombre" />
    <q-btn color="primary" label="Modificar" @click="modificar" />
    <h6>{{ direccion.ciudad }}</h6>
    <h6>{{ direccion.pais }}</h6>
    <h6>{{ direccion.continente }}</h6>
  </q-page>
</template>
<style scoped></style>
