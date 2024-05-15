<script setup lang="ts">
import { computed, PropType } from "vue";
import type { CartDetail } from "../model/types";
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();

const props = defineProps({
  detail: {
    type: Object as PropType<CartDetail>,
    required: true,
  },
});

const productImageUrl = computed(() => {
  return (
    props.detail.product.image ?? "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
  );
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
  <v-list-item value="detail.product.id">
    <v-avatar>
      <v-img :lazy-src="productImageUrl" :src="productImageUrl"></v-img>
    </v-avatar>
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
</template>
