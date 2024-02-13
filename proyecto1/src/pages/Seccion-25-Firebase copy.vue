<script setup>
import { ref, onMounted } from "vue";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../boot/firebase";
import { useQuasar } from "quasar";

const $q = useQuasar();

const titulo = ref("");
const descripcion = ref("");
const precio = ref(0);
const productos = ref([]);
const productoEditando = ref(null);
const showEditModal = ref(false);

onMounted(() => {
  obtenerProductosDeFirebase();
});

const guardarProducto = async () => {
  try {
    const nuevoProducto = {
      titulo: titulo.value,
      descripcion: descripcion.value,
      precio: precio.value,
    };

    const docRef = await addDoc(collection(db, "data"), nuevoProducto);

    const nuevoProductoConId = {
      ...nuevoProducto,
      id: docRef.id,
    };

    productos.value.push(nuevoProductoConId);

    titulo.value = "";
    descripcion.value = "";
    precio.value = 0;
  } catch (error) {
    console.error("Error al guardar el producto en Firebase:", error);
    $q.notify({
      color: "negative",
      message: "Error al guardar el producto",
      icon: "report_problem",
    });
  }
};

const eliminarProducto = async (productoConId) => {
  await deleteDoc(doc(db, "data", productoConId));
  productos.value = productos.value.filter(
    (producto) => producto.id !== productoConId
  );
};

const abrirModalEdicion = (producto) => {
  productoEditando.value = JSON.parse(JSON.stringify(producto));
  showEditModal.value = true;
};

const guardarEdicion = async () => {
  try {
    await updateDoc(doc(db, "data", productoEditando.value.id), {
      titulo: productoEditando.value.titulo,
      descripcion: productoEditando.value.descripcion,
      precio: productoEditando.value.precio,
    });

    const index = productos.value.findIndex(
      (producto) => producto.id === productoEditando.value.id
    );

    if (index !== -1) {
      productos.value[index] = {
        ...productoEditando.value,
      };
    }

    showEditModal.value = false;
  } catch (error) {
    console.error("Error al guardar la edición en Firebase:", error);
    $q.notify({
      color: "negative",
      message: "Error al guardar la edición",
      icon: "report_problem",
    });
  }
};

const limpiarProductos = () => {
  productos.value = [];
};

const obtenerProductosDeFirebase = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "data"));
    productos.value = [];
    querySnapshot.forEach((doc) => {
      const productoConId = {
        ...doc.data(),
        id: doc.id,
      };
      productos.value.push(productoConId);
    });
  } catch (error) {
    console.error("Error al obtener productos de Firebase:", error);
  }
};
</script>
<template>
  <q-page padding>
    <q-form @submit="guardarProducto">
      <q-input v-model="titulo" label="Título" />
      <q-input v-model="descripcion" label="Descripción" />
      <q-input v-model="precio" label="Precio" type="number" />

      <q-btn type="submit" label="Guardar" color="primary" />
    </q-form>

    <q-separator />

    <q-page-sticky position="bottom-right">
      <q-btn
        @click="obtenerProductosDeFirebase"
        icon="cloud_download"
        label="Cargar Productos"
        color="positive"
      />
    </q-page-sticky>

    <q-page-sticky position="bottom-left">
      <q-btn
        @click="limpiarProductos"
        icon="clear"
        label="Limpiar Productos"
        color="negative"
      />
    </q-page-sticky>

    <q-separator />

    <q-page-container>
      <q row class="q-gutter-md">
        <q col v-for="(producto, index) in productos" :key="index" cols="4">
          <q-card>
            <q-card-section>
              <div class="text-h6">{{ producto.titulo }}</div>
              <div>{{ producto.descripcion }}</div>
              <div>Precio: {{ producto.precio }}</div>
            </q-card-section>
            <q-btn
              @click="eliminarProducto(producto.id)"
              icon="delete"
              label="Eliminar"
              color="negative"
            />
            <q-btn
              @click="abrirModalEdicion(producto)"
              icon="edit"
              label="Editar"
              color="positive"
            />
          </q-card>
        </q>
      </q>
    </q-page-container>

    <!-- Modal de Edición -->
    <q-dialog v-model="showEditModal">
      <q-card>
        <q-card-section>
          <q-form @submit="guardarEdicion">
            <q-input v-model="productoEditando.titulo" label="Título" />
            <q-input
              v-model="productoEditando.descripcion"
              label="Descripción"
            />
            <q-input
              v-model="productoEditando.precio"
              label="Precio"
              type="number"
            />

            <q-btn type="submit" label="Guardar Edición" color="primary" />
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>
