<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore();
</script>

<template>
  <v-card>
    <v-card-title>Resumen de la compra</v-card-title>
    <v-card-subtitle>${{ cartStore.totalAmount }}</v-card-subtitle>
    <v-card-text>
      <p></p>
      <v-btn small block color="primary">realizar pedido</v-btn>
    </v-card-text>
  </v-card>
</template>
