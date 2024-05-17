<script setup lang="ts">
import { ref } from "vue";
import type { Product } from "../model/types";
import ProductCard from "./ProductCard.vue";

const products = ref([
  {
    id: 1,
    name: "Silla Gamer",
    price: 1250.99,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adam_Nudd-Homeyer_4_Slat_Tappan_Side_Chair_ca_2010s_-present.jpg/800px-Adam_Nudd-Homeyer_4_Slat_Tappan_Side_Chair_ca_2010s_-present.jpg"
  },
  {
    id: 2,
    name: "Monitor Clasico 8k",
    price: 3500.89,
    image: "https://images.milenio.com/fb5zz4XUWDoY5TA4shio3_hZuV0=/942x532/uploads/media/2019/08/09/la-promocion-esta-disponible-hasta_0_21_800_498.jpg"
  },
  {
    id: 3,
    name: "Microfono Universal",
    price: 10000.99,
    image: "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/4f43b91e-796b-4c9f-ad44-5b642b7a72a8.763f764ab09410a3a15797e1dedc7f93.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
  },
  {
    id: 4,
    name: "Teclado Simple",
    price: 0.99,
    image: "https://www.neoteo.com/wp-content/uploads/2013/07/105AE.jpg"
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
