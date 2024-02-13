<script setup>
import { ref, onMounted } from "vue";

import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../boot/firebase";
import { useQuasar } from "quasar";

const $q = useQuasar();

const nuevoAnuncio = ref({
  titulo: "",
  descripcion: "",
  precio: 0.0,
  imagenURL: "",
});

const anuncios = ref([]);
const mostrarModal = ref(false);

const cargarAnuncios = () => {
  const anunciosCollection = collection(db, "anuncios");

  onSnapshot(anunciosCollection, (snapshot) => {
    anuncios.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });
};
const limpiarInputs = () => {
  // Reinicia los campos de nuevoAnuncio
  nuevoAnuncio.value = {
    titulo: "",
    descripcion: "",
    precio: 0.0,
    imagenURL: "",
  };
};
onMounted(() => {
  cargarAnuncios();
});

const guardarAnuncio = async () => {
  try {
    if (nuevoAnuncio.value.id) {
      // Si tiene un ID, entonces es una edición
      await updateDoc(doc(db, "anuncios", nuevoAnuncio.value.id), {
        titulo: nuevoAnuncio.value.titulo,
        descripcion: nuevoAnuncio.value.descripcion,
        precio: nuevoAnuncio.value.precio,
        imagenURL: nuevoAnuncio.value.imagenURL,
      });

      $q.notify({
        type: "positive",
        message: "Anuncio actualizado exitosamente",
      });

      // Reinicia los campos de nuevoAnuncio
      limpiarInputs();
    } else {
      // Si no tiene un ID, entonces es un nuevo anuncio
      const docRef = await addDoc(
        collection(db, "anuncios"),
        nuevoAnuncio.value
      );
      console.log("Documento guardado con ID: ", docRef.id);

      $q.notify({
        type: "positive",
        message: "Anuncio creado exitosamente",
      });
    }
    mostrarModal.value = false;
    // Reinicia los campos de nuevoAnuncio
    limpiarInputs();
  } catch (e) {
    console.error("Error al guardar el anuncio: ", e);
    $q.notify({
      type: "negative",
      message: "Error al guardar el anuncio",
    });
  }
};

const eliminarProducto = async (id) => {
  await deleteDoc(doc(db, "anuncios", id));
};

const editarProducto = (anuncio) => {
  // Copia los datos del anuncio para editar en el objeto nuevoAnuncio
  console.log(anuncio)
  nuevoAnuncio.value = { ...anuncio };
  mostrarModal.value = true;
};
</script>

<template>
  <q-page padding>
    <q-form @submit="guardarAnuncio">
      <q-input v-model="nuevoAnuncio.titulo" label="Título" />
      <q-input v-model="nuevoAnuncio.descripcion" label="Descripción" />
      <q-input v-model="nuevoAnuncio.precio" label="Precio" type="number" />

      <q-btn type="submit" label="Guardar" color="primary" />
    </q-form>

    <q-page-container>
      <q row class="q-gutter-md">
        <q col v-for="(anuncio, index) in anuncios" :key="index" cols="4">
          <q-card>
            <q-card-section>
              <div class="text-h6">{{ anuncio.titulo }}</div>
              <div>{{ anuncio.descripcion }}</div>
              <div>Precio: {{ anuncio.precio }}</div>
            </q-card-section>
            <q-btn
              @click="eliminarProducto(anuncio.id)"
              icon="delete"
              label="Eliminar"
              color="negative"
            />
            <q-btn
              @click="editarProducto(anuncio)"
              icon="edit"
              label="Editar"
              color="positive"
            />
          </q-card>
        </q>
      </q>
    </q-page-container>
    <!-- Modal -->
    <q-dialog v-model="mostrarModal">
      <q-card>
        <q-card-section>
          <q-form @submit="guardarAnuncio">
            <q-input v-model="nuevoAnuncio.titulo" label="Título" />
            <q-input v-model="nuevoAnuncio.descripcion" label="Descripción" />
            <q-input
              v-model="nuevoAnuncio.precio"
              label="Precio"
              type="number"
            />

            <q-btn type="submit" label="Guardar" color="primary" />
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>
