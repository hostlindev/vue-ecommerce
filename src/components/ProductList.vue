<script setup lang="ts">
import { ref } from "vue";
import type { CartDetail, Product } from "../model/types";
import ProductCard from "./ProductCard.vue";


const products = ref<Array<Product>>([
  {
    id: 1,
    name: "Silla",
    price: 56,
  },
  {
    id: 2,
    name: "Monitor",
    price: 450,
  },
  {
    id: 3,
    name: "Microfono",
    price: 120,
  },
]);
const details = ref<Array<CartDetail>>([]);

function onAddProduct(productId: number) {
  const detailFound = details.value.find(
    (detail) => detail.productId === productId
  );

  if (detailFound) {
    detailFound.quantity += 1;
  } else {
    details.value.push({
      productId,
      quantity: 1,
    });
  }
}
</script>

<template>
  <v-row>
    <v-col cols="12" md="4" sm="6" v-for="product in products" :key="product.id">
      <ProductCard :product="product" @addProduct="onAddProduct(product.id)" />
    </v-col>
  </v-row>
</template>