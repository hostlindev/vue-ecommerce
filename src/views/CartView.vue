<script setup lang="ts">
import ShoppingCart from "@/components/cart/ShoppingCart.vue";
import SummaryCart from "@/components/cart/SummaryCart.vue";
</script>

<template>
  <v-row>
    <v-col cols="8">
      <ShoppingCart />
    </v-col>
    <v-col cols="4">
      <SummaryCart />
    </v-col>
  </v-row>
</template>
