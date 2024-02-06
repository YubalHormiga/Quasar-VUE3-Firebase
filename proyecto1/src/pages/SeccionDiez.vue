<!-- App.vue (Padre) -->
<script setup>
import { ref } from "vue";
import ButtonCounter from "../components/ButtonCounter.vue";
const posts = ref([
  { id: 1, title: "Mi experiencia con Vue" },
  { id: 2, title: "Blogging con Vue" },
  { id: 3, title: "Por qué Vue es divertido" },
]);
</script>

<template>
  <div>
    <h1>Aquí hay un componente hijo:</h1>
    <ButtonCounter v-for="(post, index) in posts" :key="index" :post="post" />
  </div>
</template>
<style scoped lang="css">
h1 {
  background-color: blue;
  padding: 10px;
}
</style>
