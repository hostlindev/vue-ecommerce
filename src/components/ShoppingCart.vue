<script setup lang="ts">
import { computed } from "vue";
import { useCartStore } from "@/stores/cart";
import { RouterLink } from "vue-router";

/* Computed */
const cartStore = useCartStore();

const details = computed(() => {
  return cartStore.details;
});

/* Functions */
// Incrementar la cantidad de productos agregado al carrito por productId
const incrementQuantity = (productId: number) => {
  cartStore.increment(productId);
};

// Decrementar la cantidad de productos agregado al carrito por productId
const decrementQuantity = (productId: number) => {
  cartStore.decrement(productId);
};

// Eliminar producto del carrito de tiene por productId
const deleteProduct = (productId: number) => {
  cartStore.deleteProduct(productId);
};
</script>

<template>
  <v-card>
    <v-card-title>Productos agregados al carrito:</v-card-title>
    <v-card-text>
      <v-list v-if="details.length > 0">
        <v-list-item
          v-for="detail in details"
          :key="detail.product.id"
          value="detail.product.id"
        >
          <v-list-item-title>
            {{ detail.product.name }}
            <v-btn
              size="x-small"
              variant="plain"
              icon="mdi-minus"
              @click="decrementQuantity(detail.product.id)"
            ></v-btn>
            {{ detail.quantity }}
            <v-btn
              size="x-small"
              variant="plain"
              icon="mdi-plus"
              @click="incrementQuantity(detail.product.id)"
            ></v-btn>
            <v-btn
              size="x-small"
              variant="plain"
              icon="mdi-trash-can"
              @click="deleteProduct(detail.product.id)"
            ></v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <p v-else>
        Aún no has agregado proudctos a tu carrito de compras. Haz
        <RouterLink to="/">clic aquí</RouterLink> para ver los productos disponibles.
      </p>
    </v-card-text>
  </v-card>
</template>
