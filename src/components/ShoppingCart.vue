<script setup lang="ts">
import { computed } from "vue";
import { useCartStore } from "@/stores/cart";
import { RouterLink } from "vue-router";
import ShoppingCartItem from "./ShoppingCartItem.vue";

/* Computed */
const cartStore = useCartStore();

const details = computed(() => {
  return cartStore.details;
});
</script>

<template>
  <v-card>
    <v-card-title>Productos agregados al carrito:</v-card-title>
    <v-card-text>
      <v-list v-if="details.length > 0">
        <ShoppingCartItem
          v-for="detail in details"
          :key="detail.product.id"
          :detail="detail"
        />
      </v-list>
      <p v-else>
        Aún no has agregado proudctos a tu carrito de compras. Haz
        <RouterLink to="/">clic aquí</RouterLink> para ver los productos disponibles.
      </p>
    </v-card-text>
  </v-card>
</template>
