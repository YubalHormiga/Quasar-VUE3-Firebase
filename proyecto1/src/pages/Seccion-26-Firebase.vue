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
import {
  ref as refStorage,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from "firebase/storage";
import { db, storage } from "../boot/firebase";
import { useQuasar } from "quasar";

const $q = useQuasar();

const nuevoAnuncio = ref({
  titulo: "",
  descripcion: "",
  precio: 0.0,
});

const anuncios = ref([]);
const imagenFile = ref(null);
const imagenURL = ref("");

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

const subirImagen = async () => {
  try {
    if (imagenFile.value) {
      const storageRef = refStorage(storage, `imagenes/${imagenFile.value.name}`);

      // Si imagenURL ya está configurada, eliminar la imagen anterior
      if (nuevoAnuncio.value.imagenURL) {
        const prevStorageRef = refStorage(storage, nuevoAnuncio.value.imagenURL);
        await deleteObject(prevStorageRef);
      }

      await uploadBytes(storageRef, imagenFile.value);
      nuevoAnuncio.value.imagenURL = await getDownloadURL(storageRef);
    }
  } catch (error) {
    console.error("Error al subir la imagen: ", error);
  }
};

const getImagenSeleccionadaUrl = () => {
  return imagenFile.value ? URL.createObjectURL(imagenFile.value) : "";
};

const guardarAnuncio = async () => {
  try {
    await subirImagen();

    if (nuevoAnuncio.value.id) {
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

      limpiarInputs();
    } else {
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
    limpiarInputs();
    imagenFile.value = null;
  } catch (e) {
    console.error("Error al guardar el anuncio: ", e);
    $q.notify({
      type: "negative",
      message: "Error al guardar el anuncio",
    });
  }
};
const eliminarProducto = async (id, imagenURL) => {
  try {
    // Eliminar documento en la base de datos
    await deleteDoc(doc(db, "anuncios", id));

    // Eliminar imagen del storage si existe una URL asociada
    if (imagenURL) {
      // Construir la referencia al storage usando la URL directamente
      const storageRef = refStorage(storage, imagenURL);

      // Eliminar el objeto
      await deleteObject(storageRef);
    }

    $q.notify({
      type: "positive",
      message: "Anuncio eliminado exitosamente",
    });
  } catch (error) {
    console.error("Error al eliminar el anuncio: ", error);
    $q.notify({
      type: "negative",
      message: "Error al eliminar el anuncio",
    });
  }
};




const editarProducto = (anuncio) => {
  nuevoAnuncio.value = { ...anuncio };
  mostrarModal.value = true;
};
</script>

<template>
  <q-page padding class="row">
    <q-form @submit="guardarAnuncio" class="col-6">
      <!-- Formulario de entrada -->
      <q-input v-model="nuevoAnuncio.titulo" label="Título" />
      <q-input v-model="nuevoAnuncio.descripcion" label="Descripción" />
      <q-input v-model="nuevoAnuncio.precio" label="Precio" type="number" />
      <q-file
        dense
        outlined
        clearable
        v-model="imagenFile"
        label="Seleccionar imagen"
        label-color="primary"
        accept=".jpg, jpeg, image/*"
        @update:model-value="getImagenSeleccionadaUrl"
      />

      <img
        v-if="imagenFile"
        :src="getImagenSeleccionadaUrl()"
        alt="Imagen seleccionada"
      />
      <q-btn type="submit" label="Guardar" color="primary" />
    </q-form>

    <q-page-container class="">
      <q row class="q-gutter-md">
        <!-- Lista de anuncios -->
        <q col v-for="(anuncio, index) in anuncios" :key="index" cols="4">
          <q-card>
            <q-card-section>
              <div class="text-h6">{{ anuncio.titulo }}</div>
              <div>{{ anuncio.descripcion }}</div>
              <div>Precio: {{ anuncio.precio }}</div>
              <img
                v-if="anuncio.imagenURL"
                :src="anuncio.imagenURL"
                alt="Imagen almacenada"
              />
            </q-card-section>

            <q-btn
              @click="eliminarProducto(anuncio.id, anuncio.imagenURL)"
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

    <q-dialog v-model="mostrarModal">
      <q-card>
        <q-card-section>
          <q-form @submit="guardarAnuncio">
            <!-- Formulario en el modal -->
            <q-input v-model="nuevoAnuncio.titulo" label="Título" />
            <q-input v-model="nuevoAnuncio.descripcion" label="Descripción" />
            <q-input
              v-model="nuevoAnuncio.precio"
              label="Precio"
              type="number"
            />
            <q-file
              dense
              outlined
              clearable
              v-model="imagenFile"
              label="Seleccionar imagen"
              label-color="primary"
              accept=".jpg, jpeg, image/*"
              @update:model-value="getImagenSeleccionadaUrl"
              class="q-mx-md"
            />

            <img
              v-if="imagenFile"
              :src="getImagenSeleccionadaUrl()"
              alt="Imagen seleccionada"
            />
            <q-btn type="submit" label="Guardar" color="primary" />
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>
