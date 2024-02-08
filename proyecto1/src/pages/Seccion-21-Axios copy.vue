<script setup>
import { api } from "../boot/axios";
import { ref } from "vue";
import { useQuasar } from 'quasar';

const datos = ref([]);
const $q = useQuasar();

const obtener = async () => {
  try {
    const { data } = await api.get("?results=1");
    datos.value = data.results;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    $q.notify({
      color: 'negative',
      position: 'top',
      message: 'Error al obtener datos',
      icon: 'report_problem',
    });
  }
};

const obtenerDiez = async () => {
  try {
    const { data } = await api.get("", { params: { results: 10 } });
    datos.value = data.results;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    $q.notify({
      color: 'negative',
      position: 'top',
      message: 'Error al obtener datos',
      icon: 'report_problem',
    });
  }
};

const obtenerChicas = async () => {
  try {
    const { data } = await api.get("", {
      params: { results: 10, gender: "female"},
    });
    console.log(data.results);
    datos.value = data.results;
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
};
</script>

<template>
  <h1>Axios</h1>
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
        <q-card-section>
         Edad: {{ item.dob.age }}
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
<style scoped></style>
