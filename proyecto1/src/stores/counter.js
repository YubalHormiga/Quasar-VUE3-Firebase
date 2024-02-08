import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const name = ref('Eduardo');

  function increment() {
    count.value++;
  }

  function doble() {
    count.value = count.value * 2;
  }

  return { count, name, increment, doble };
});

