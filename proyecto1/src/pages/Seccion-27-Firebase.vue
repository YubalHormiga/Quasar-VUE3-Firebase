<script setup>
import { ref } from 'vue';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { useRouter } from 'vue-router';

const auth = getAuth();
const provider = new GoogleAuthProvider();
const router = useRouter();
const email = ref('');
const password = ref('');

const signUpWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider);
    // No redirigir aquí, solo mostrar mensaje de registro exitoso si lo deseas
  } catch (error) {
    console.error('Error al iniciar sesión con Google:', error.message);
  }
};

const signUpWithEmailPassword = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    // Mostrar mensaje de registro exitoso si lo deseas
  } catch (error) {
    console.error('Error al registrar con correo y contraseña:', error.message);
  }
};

const signInWithEmailPassword = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    // Si la autenticación es exitosa, redirige al usuario a la página de inicio
    router.push('/inicio');
    // Mostrar mensaje de inicio de sesión exitoso si lo deseas
  } catch (error) {
    console.error('Error al iniciar sesión con correo y contraseña:', error.message);
  }
};

const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider);
    // Si la autenticación es exitosa, redirige al usuario a la página de inicio
    router.push('/inicio');
    // No redirigir aquí, solo mostrar mensaje de inicio de sesión exitoso si lo deseas
  } catch (error) {
    console.error('Error al iniciar sesión con Google:', error.message);
  }
};

</script>

<template>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="display: flex; justify-content: space-around;">
      <!-- Sección de Registro con Google -->
      <div>
        <h2>Registrarse con Google</h2>
        <button @click="signUpWithGoogle">Registrarse con Google</button>
      </div>

      <!-- Sección de Registro con Correo y Contraseña -->
      <div>
        <h2>Registrarse con Correo y Contraseña</h2>
        <q-form @submit="signUpWithEmailPassword">
          <q-input v-model="email" label="Correo Electrónico" />
          <q-input v-model="password" label="Contraseña" type="password" />
          <q-btn label="Registrarse" type="submit" />
        </q-form>
      </div>

      <!-- Sección de Inicio de Sesión con Correo y Contraseña -->
      <div>
        <h2>Iniciar Sesión con Correo y Contraseña</h2>
        <q-form @submit="signInWithEmailPassword">
          <q-input v-model="email" label="Correo Electrónico" />
          <q-input v-model="password" label="Contraseña" type="password" />
          <q-btn label="Iniciar Sesión" type="submit" />
        </q-form>
      </div>

      <!-- Sección de Inicio de Sesión con Google -->
      <div>
        <h2>Iniciar Sesión con Google</h2>
        <button @click="signInWithGoogle">Iniciar Sesión con Google</button>
      </div>
    </div>
  </div>
</template>



