<script setup lang="ts">
import { PropType } from "vue";
import type { CartDetail } from "../model/types";
defineProps({
  details: {
    type: Object as PropType<Array<CartDetail>>,
    required: true,
  },
});
</script>

<template>
  <v-card>
    <v-card-text>
      <v-card-title>Productos agregados al carrito:</v-card-title>
      <v-list>
        <v-list-item
          v-for="detail in details"
          :key="detail.productId"
          value="detail.productId"
        >
          <v-list-item-title>
            Product {{ detail.productId }} (Qty: {{ detail.quantity }})
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>