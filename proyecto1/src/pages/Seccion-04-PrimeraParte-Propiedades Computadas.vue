<script setup>
import { ref, computed } from "vue";

//Varibles o propiedades
const tareas = ref([]);

const nuevaTarea = ref("");
//Métodos

const agregar = () => {
  tareas.value.push({ nombre: nuevaTarea.value, realizado: false });
  nuevaTarea.value = "";
};
const eliminar = (key) => {
  tareas.value.splice(key, 1);
};

//Propiedades Computadas
const tareasTerminadas = computed(() => {
  return tareas.value.filter((tarea) => tarea.realizado).length;
});
</script>
<template>
  <q-page>
    <h6>Reactividad con arreglos y v-for Primera Parte</h6>
    <q-input v-model="nuevaTarea" type="text" label="Tarea" />
    <q-btn color="primary" label="Añadir tarea" @click="agregar" />
    <p>{{ tareas }}</p>
    <ul>
      <li v-for="(tarea, index) in tareas" :key="index">
        -{{ tarea.nombre }} {{ tarea.realizado }} {{ index }}
        <q-btn
          color="primary"
          icon="check"
          label="Eliminar"
          @click="eliminar(index)"
        />
        <q-toggle v-model="tarea.realizado" color="green" />
      </li>
    </ul>
    <p>Tareas:{{ tareasTerminadas }}</p>
  </q-page>
</template>
<style scoped></style>
