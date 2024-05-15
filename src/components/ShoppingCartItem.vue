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

const subTotal = computed(() => {
  return props.detail.product.price * props.detail.quantity;
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
  <tr>
    <td>
      <v-avatar>
        <v-img :lazy-src="productImageUrl" :src="productImageUrl"></v-img>
      </v-avatar>
      {{ detail.product.name }}
    </td>
    <td>
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
    </td>
    <td>${{ detail.product.price }}</td>
    <td>${{ subTotal }}</td>
    <td>
      <v-btn
        size="x-small"
        variant="plain"
        icon="mdi-trash-can"
        @click="deleteProduct(detail.product.id)"
      ></v-btn>
    </td>
  </tr>
</template>
