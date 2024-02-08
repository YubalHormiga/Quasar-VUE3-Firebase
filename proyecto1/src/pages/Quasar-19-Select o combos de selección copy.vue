<script setup>
import {ref} from 'vue'
const model = ref(null)
const options = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];
</script>

<template>
  <h5>Select o combos de selección</h5>
  <div class="q-pa-md" style="max-width: 300px">
    <div class="q-gutter-md">
      <q-select v-model="model" :options="options" label="Standard" />

      <q-select filled v-model="model" :options="options" label="Filled" />
    </div>
  </div>
  <q-select clearable color="orange" standout="bg-primary text-white" bottom-slots v-model="model" :options="options" label="Label" counter>
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
        <template v-slot:append>
          <q-icon name="favorite" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>
      </q-select>
</template>
<style scoped></style>
