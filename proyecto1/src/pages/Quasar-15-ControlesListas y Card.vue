<script setup>
import { ref } from "vue";

const expanded = ref(false);
</script>
<template>
  <h6>Controles: Listas y Card</h6>
  <q-list style="max-width: 350px">
    <q-item>
      <q-item-section>
        <q-item-label>Single line item</q-item-label>
        <q-item-label caption lines="2"
          >Secondary line text. Lorem ipsum dolor sit amet, consectetur
          adipiscit elit.</q-item-label
        >
      </q-item-section>

      <q-item-section side top>
        <q-item-label caption>5 min ago</q-item-label>
        <q-icon name="star" color="yellow" />
      </q-item-section>
    </q-item>

    <q-separator spaced inset />

    <q-item>
      <q-item-section>
        <q-item-label>Single line item</q-item-label>
        <q-item-label caption
          >Secondary line text. Lorem ipsum dolor sit amet, consectetur
          adipiscit elit.</q-item-label
        >
      </q-item-section>

      <q-item-section side top>
        <q-item-label caption>Voted!</q-item-label>
      </q-item-section>
    </q-item>

    <q-separator spaced inset />

    <q-item>
      <q-item-section>
        <q-item-label>Single line item</q-item-label>
        <q-item-label caption
          >Secondary line text. Lorem ipsum dolor sit amet, consectetur
          adipiscit elit.</q-item-label
        >
      </q-item-section>

      <q-item-section side top>
        <q-badge color="teal" label="10k" />
      </q-item-section>
    </q-item>

    <q-separator spaced inset />

    <q-item>
      <q-item-section>
        <q-item-label>Single line item</q-item-label>
        <q-item-label caption
          >Secondary line text. Lorem ipsum dolor sit amet, consectetur
          adipiscit elit.</q-item-label
        >
      </q-item-section>

      <q-item-section side top>
        <q-item-label caption>2 min ago</q-item-label>
        <div class="text-orange">
          <q-icon name="star" />
          <q-icon name="star" />
          <q-icon name="star" />
        </div>
      </q-item-section>
    </q-item>

    <q-separator spaced inset />

    <q-item>
      <q-item-section>
        <q-item-label>Single line item</q-item-label>
        <q-item-label caption
          >Secondary line text. Lorem ipsum dolor sit amet, consectetur
          adipiscit elit.</q-item-label
        >
      </q-item-section>

      <q-item-section side top>
        <q-item-label caption>meta</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
  <q-card class="my-card bg-purple text-white">
    <q-card-section>
      <div class="text-h6">Our Changing Planet</div>
      <div class="text-subtitle2">by John Doe</div>
    </q-card-section>

    <q-card-actions>
      <q-btn flat>Action 1</q-btn>
      <q-btn flat>Action 2</q-btn>
    </q-card-actions>
  </q-card>
  <q-separator spaced inset />

  <q-card class="my-card bg-purple text-white">
    <img src="https://cdn.quasar.dev/img/mountains.jpg" />

    <q-card-section>
      <div class="text-h6">Our Changing Planet</div>
      <div class="text-subtitle2">by John Doe</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ lorem }}
    </q-card-section>
    <q-card-actions align="around">
      <q-btn flat>Action 1</q-btn>
      <q-btn flat>Action 2</q-btn>
    </q-card-actions>
  </q-card>

  <q-separator spaced inset />
  <div class="q-pa-md" style="max-width: 350px">
    <q-toggle v-model="expanded" label="Expanded" class="q-mb-md" />

    <q-expansion-item
      v-model="expanded"
      icon="perm_identity"
      label="Account settings"
      caption="John Doe"
    >
      <q-card>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius
          reprehenderit eos corrupti commodi magni quaerat ex numquam, dolorum
          officiis modi facere maiores architecto suscipit iste eveniet
          doloribus ullam aliquid.
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
  <q-separator spaced inset />

</template>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
