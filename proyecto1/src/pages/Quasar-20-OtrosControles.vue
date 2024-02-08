<script setup>
import { ref } from "vue";
const slide = ref(1);
</script>

<template>
  <h5>Otros Controles</h5>
  <q-parallax src="https://cdn.quasar.dev/img/parallax2.jpg">
    <h1 class="text-white">Basic</h1>
  </q-parallax>
  <div :style="{ height: '200px' }"></div>
  <div class="q-pa-md">
    <q-carousel animated v-model="slide" arrows navigation infinite>
      <q-carousel-slide
        :name="1"
        img-src="https://cdn.quasar.dev/img/mountains.jpg"
      />
      <q-carousel-slide
        :name="2"
        img-src="https://cdn.quasar.dev/img/parallax1.jpg"
      />
      <q-carousel-slide
        :name="3"
        img-src="https://cdn.quasar.dev/img/parallax2.jpg"
      />
      <q-carousel-slide
        :name="4"
        img-src="https://cdn.quasar.dev/img/quasar.jpg"
      />
    </q-carousel>
    <q-avatar>
      <img src="../assets/yubal.png" />
    </q-avatar>
  </div>
  <div class="q-pa-md q-gutter-md">
    <div class="row justify-between"></div>
  </div>
</template>

<style scoped></style>
