<template>
  <!-- Vinculaciones de Entrada de Formulario -->
  <div>
    <!-- Uso Básico - Texto -->
    <p>El mensaje es: {{ mensaje }}</p>
    <q-input v-model="mensaje" placeholder="edítame" />

    <!-- Texto Multilínea -->
    <span>El mensaje multilineal es:</span>
    <q-input
      v-model="mensaje"
      type="textarea"
      placeholder="añade varias líneas"
    />

    <!-- Casilla de Verificación - Única -->
    <q-checkbox v-model="marcado" label="{{ marcado.toString() }}" />

    <!-- Casilla de Verificación - Múltiple -->
    <div>Nombres Marcados: {{ nombresMarcados }}</div>
    <q-checkbox v-model="nombresMarcados" label="Jack" value="Jack" />
    <q-checkbox v-model="nombresMarcados" label="John" value="John" />
    <q-checkbox v-model="nombresMarcados" label="Mike" value="Mike" />

    <!-- Radio -->
    <div>Elegido: {{ elegido }}</div>
    <q-radio v-model="elegido" val="Uno" label="Uno" />
    <q-radio v-model="elegido" val="Dos" label="Dos" />

    <!-- Selección Simple -->
    <div>Seleccionado: {{ seleccionado }}</div>
    <q-select
      v-model="seleccionado"
      :options="opciones"
      label="Por favor, selecciona uno"
    />

    <!-- Selección Múltiple -->
    <div>Seleccionado: {{ seleccionado }}</div>
    <q-select v-model="seleccionado" :options="opciones" multiple />

    <!-- Selección con Opciones Dinámicas -->
    <q-select
      v-model="seleccionado"
      :options="opciones"
      label-field="texto"
      value-field="valor"
    />
    <div>Seleccionado: {{ seleccionado }}</div>

    <!-- Casilla de Verificación con Valores Dinámicos -->
    <q-checkbox
      v-model="alternar"
      :true-value="valorVerdadero"
      :false-value="valorFalso"
    />

    <!-- Radio con Valores Dinámicos -->
    <q-radio v-model="eleccion" :val="primero" />
    <q-radio v-model="eleccion" :val="segundo" />

    <!-- Selección con Valor de Objeto Literal -->
    <q-select
      v-model="seleccionado"
      :options="[{ numero: 123, texto: '123' }]"
      label-field="texto"
      value-field="numero"
    />

    <!-- Modificadores -->
    <q-input v-model.lazy="mensajeDiferido" />
    <!-- Modificador lazy -->
    <q-input v-model.number="edad" />
    <!-- Modificador number -->
    <q-input v-model.trim="mensaje" />
    <!-- Modificador trim -->
  </div>
</template>

<script setup>
import { ref } from "vue";

const mensaje = ref("");
const marcado = ref(false);
const nombresMarcados = ref([]);
const elegido = ref("");
const seleccionado = ref("");
const opciones = ref([
  { texto: "Uno", valor: "A" },
  { texto: "Dos", valor: "B" },
  { texto: "Tres", valor: "C" },
]);
const alternar = ref(false);
const valorVerdadero = ref("sí");
const valorFalso = ref("no");
const eleccion = ref("");
const primero = ref("Primero");
const segundo = ref("Segundo");
const mensajeDiferido = ref("");
const edad = ref(0);

// Resto de las variables y funciones
</script>
