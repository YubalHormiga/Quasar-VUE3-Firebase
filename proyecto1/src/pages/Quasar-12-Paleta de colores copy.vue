<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
    <p>
      <q-btn to="/quasar-11" class="prymary" label="OK" />
      <q-btn class="bg-red-5" label="uno" />
      <q-btn class="bg-pink-4" label="dos" />
      <q-btn class="bg-amber-11" label="tres" />
    </p>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="accent" />
    </q-page-sticky>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
