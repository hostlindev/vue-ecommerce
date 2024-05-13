<script setup lang="ts">
import { ref } from "vue";
import type { Product } from "../model/types";
import ProductCard from "./ProductCard.vue";

const products = ref([
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
] as Product[]);
</script>

<template>
  <v-row>
    <v-col cols="12" md="4" sm="6" v-for="product in products" :key="product.id">
      <ProductCard :product="product" />
    </v-col>
  </v-row>
</template>
