<template>
  <div>
    <h1>Iniciada la sesión</h1>
    <button @click="doSignOut">Cerrar Sesión</button>
  </div>
</template>

<script setup>
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const auth = getAuth();
const router = useRouter();

const doSignOut = async () => {
  try {
    await signOut(auth);
    router.push('/');
  } catch (error) {
    console.error('Error al cerrar sesión:', error.message);
  }
};
</script>





