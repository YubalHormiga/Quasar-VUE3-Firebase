<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

const card = ref(false);
const stars = ref(3);
const alert = ref(false);

function iniciar(position) {
  $q.notify("Hola");
  $q.notify({
    message: "Jim pinged you.",
    color: "purple",
    // icon: "fa-solid fa-exclamation",
    avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
    position,
  });
}
function cambiarDark() {
  $q.dark.set($q.dark.isActive ? false : true);
}
</script>

<template>
  <h5>Modal, Notify y Dark</h5>
  <q-btn color="primary" icon="lightbulb"  @click="cambiarDark" />
  <div class="q-pa-md q-gutter-sm">
    <div>
      <q-img
        src="https://cdn.quasar.dev/img/chicken-salad.jpg"
        @click="card = true"
        height="200px"
        width="300px"
      />
    </div>
    <q-dialog v-model="card">
      <q-card class="my-card">
        <q-img
          src="https://cdn.quasar.dev/img/chicken-salad.jpg"
          @click="card = true"
        />

        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%)"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">Cafe Basilico</div>
            <div
              class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
            >
              <q-icon name="place" />
              250 ft
            </div>
          </div>

          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">$・Italian, Cafe</div>
          <div class="text-caption text-grey">
            Small plates, salads & sandwiches in an intimate setting.
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn v-close-popup flat color="primary" label="Reserve" />
          <q-btn v-close-popup flat color="primary" round icon="event" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>

  <q-btn label="Alert" color="primary" @click="alert = true" />
  <q-dialog v-model="alert">
    <q-card>
      <q-card-section>
        <div class="text-h6">Alert</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
        perferendis totam, ea at omnis vel numquam exercitationem aut, natus
        minima, porro labore.
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <div class="q-pa-md">
    <q-btn
      color="purple"
      @click="iniciar('bottom-right')"
      label="Show Notification"
    />
  </div>
</template>
<style scoped></style>
