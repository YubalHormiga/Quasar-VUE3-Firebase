<script setup>
import { api } from "../boot/axios";
import { ref, onMounted, watch } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
const datos = ref([]);

// Observador para guardar en localStorage cuando datos cambia
watch(datos, () => {
  guardarLocalStorage("dato1");
  guardarLocalStorage("dato10");
  guardarLocalStorage("chicas");
});

// Función para guardar en localStorage
const guardarLocalStorage = (key) => {
  $q.localStorage.set(key, JSON.stringify(datos.value));
};

// Función para obtener datos del localStorage
const getDatos = (key) => {
  const value = $q.localStorage.getItem(key);
  // Usa 'value' según tus necesidades
  console.log(`Valor obtenido de local storage para ${key}:`, value);
  return value;
};

// Lógica para obtener datos al cargar el componente
onMounted(async () => {
  // Obtener datos de "dato1" y asignarlos a datos.value
  const datosStorage = $q.localStorage.getItem("dato1");
  if (datosStorage) {
    datos.value = JSON.parse(datosStorage);
  }

  // Luego, llamar a las funciones para "dato10" y "chicas"
  try {
    await obtenerDiez();
    await obtenerChicas();
  } catch (error) {
    console.error('Error al obtener datos adicionales:', error);
  }
});

// Función para obtener 1 dato
const obtener = async () => {
  try {
    const { data } = await api.get("?results=1");
    datos.value = data.results;
    guardarLocalStorage("dato1");
    console.log(data.results)
  } catch (error) {
    $q.notify({
      // Manejar error
      color: "negative",
      message: "Error al guarda",
      icon: "report_problem",
    });
  }
};

// Función para obtener 10 datos
const obtenerDiez = async () => {
  try {
    const { data } = await api.get("", { params: { results: 10 } });
    datos.value = data.results;
    guardarLocalStorage("dato10");
    getDatos("dato10");
  } catch (error) {
    // Manejar error
    $q.notify({
      // Manejar error
      color: "negative",
      message: "Error al guarda",
      icon: "report_problem",
    });
  }
};

// Función para obtener datos de chicas
const obtenerChicas = async () => {
  try {
    const { data } = await api.get("", {
      params: { results: 10, gender: "female" },
    });
    datos.value = data.results;
    guardarLocalStorage("chicas");
    getDatos("chicas");
  } catch (error) {
    // Manejar error
    $q.notify({
      // Manejar error
      color: "negative",
      message: "Error al guarda",
      icon: "report_problem",
    });
  }
};
console.log(datos.value)
</script>

<template>
  <h1>Local Storage</h1>
  <q-page padding>
    <div class="row">
      <q-btn
        color="white"
        text-color="black"
        label="Obtener"
        @click="obtener"
      />
      <q-btn
        color="white"
        text-color="red"
        label="Obtener 10"
        @click="obtenerDiez"
      />
      <q-btn
        color="white"
        text-color="blue"
        label="Obtener Chicas"
        @click="obtenerChicas"
      />
    </div>

    <div class="row q-gutter-md justify-around q-mt-lg">
      <q-card class="my-card col-2" v-for="(item, index) in datos" :key="index">
        <img :src="item.picture.medium" />
        <q-card-section>
          <div class="text-h6">{{ item.name.title }} {{ item.name.first }}</div>
        </q-card-section>
        <q-card-section> Email:{{ item.email }} </q-card-section>
        <q-card-section> Edad: {{ item.dob.age }} </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
<style scoped></style>
