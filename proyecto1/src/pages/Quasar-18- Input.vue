<script setup>
import { ref } from "vue";
const text = ref("");

const date = ref(null);
const dateNumber = ref(10);
const enviarFormulario = () => {
  // Convertir la fecha al formato "dd/mm/yyyy"
  const formattedDate = date.value ? formatDate(date.value) : "";

  // Convertir la fecha a un número (puede ser el timestamp)
  const numericDate = date.value ? new Date(date.value).getTime() : null;

  console.log("Enviar");
  console.log("Fecha formateada:", formattedDate);
  console.log("Fecha numérica:", numericDate);
  console.log("Fecha v-movel.number", dateNumber.value);

  // Aquí puedes hacer más cosas con los valores convertidos si es necesario
};

// Función para formatear la fecha como "dd/mm/yyyy"
const formatDate = (inputDate) => {
  const dateObj = new Date(inputDate);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1; // Los meses en JavaScript son de 0 a 11
  const year = dateObj.getFullYear();

  // Añadir un cero al principio si es menor a 10
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  return `${formattedDay}/${formattedMonth}/${year}`;
};
</script>

<template>
  <h5>Input: {{ text }}</h5>
  <div class="row justify-evenly">
    <div class="col-12 col-md-6 q-pa-md">
      <q-input
        color="grey-3"
        bg-color="blue-3"
        label-color="orange"
        v-model="text"
        label="Label"
      >
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-input>
    </div>

    <div class="col-12 col-md-5 q-pa-md">
      <q-input
        color="teal"
        v-model="text"
        label="Label"
        placeholder="Placeholder"
      >
        <template v-slot:prepend>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
          </q-avatar>
        </template>
      </q-input>
    </div>
  </div>
  <div class="row q-ml-xl">
    <q-btn color="primary" label="Enviar" @click="enviarFormulario" />
  </div>
  <div class="row">
    <div class="col-12 col-md-4 q-pa-md">
      <q-input bottom-slots v-model="text" label="Label" counter maxlength="12">
        <template v-slot:before>
          <q-icon name="event" />
        </template>
        <template v-slot:hint> Field hint </template>
        <template v-slot:append>
          <q-btn round dense flat icon="add" />
        </template>
      </q-input>
    </div>
  </div>
  <div class="row">
    <div class="col-12 col-md-6">
      <q-input v-model="date" filled type="date" hint="Native date" />

      <p>{{ date }}</p>
    </div>
  </div>
  <div class="q-pa-md">
    <q-input
      v-model.number="dateNumber"
      type="number"
      filled
      style="max-width: 200px"
    />
  </div>
</template>
<style scoped></style>
