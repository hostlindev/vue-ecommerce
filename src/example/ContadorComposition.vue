<script setup lang="ts">
import { onMounted, ref } from "vue";

const count = ref(0);

function increment() {
  count.value += 1;
}

onMounted(() => {
  console.log("El valor inicial del contador es " + count.value);
});
</script>

<template>
  <p>Objetivo: Tienes que que llega a 20 clicks</p>

  <h1>Contador: {{ count }}</h1>
  <button @click="increment">Incrementar contador</button>

  <p v-if="count <= 10">Vamos tu puedes!</p>
  <p v-else>Ya te falta muy poco...</p>

  
</template>