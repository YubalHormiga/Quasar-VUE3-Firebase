<script setup></script>

<template>
  <q-page>
    <h5>Crando Web Apps</h5>
    <q-expansion-item
      label="Agregar"
      icon="note_add"
      expand-icon-class="text-white"
      header-class="bg-primary text-white"
    >
      <q-card class="my-card">
        <img v-if="imagenFile" :src="imageURL" />
        <q-file
          dense
          outlined
          v-model="imagenFile"
          label="Seleccionar Imagen"
          label-color="primary"
          accept=".jpg, image/*"
          @update:model-value="generarURL"
          class="q-mx-md"
        />

        <q-card-section>
          <q-input
            v-model="nuevoAnuncio.titulo"
            label="Titulo"
            label-color="primary"
            dense
            outlined
            :rules="[(val) => !!val || 'Campor requerido']"
            ref="tituloRef"
          />
          <q-input
            v-model="nuevoAnuncio.descripcion"
            type="textarea"
            label="Descripcion"
            label-color="primary"
            dense
            outlined
            :rules="[(val) => !!val || 'Campor requerido']"
            ref="descripcionRef"
          />
          <q-input
            outlined
            bottom-slots
            v-model="nuevoAnuncio.precio"
            label="Precio"
            label-color="primary"
            dense
            :rules="[(val) => val > 0 || 'Debe ser mayor a cero']"
            ref="descripcionRef"
          >
            <template v-slot:prepend>
              <q-icon name="attach_money" color="primary" />
            </template>
          </q-input>
        </q-card-section>



<q-card-actions align="right">
<q-btn
:disable="!validarFormulario"


/>
</q-card-actions>


      </q-card>
    </q-expansion-item>
  </q-page>
</template>
