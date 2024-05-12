<script setup lang="ts">
import type { PropType } from "vue";
import type { Product } from "../model/types";
defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true,
  },
});
const emit = defineEmits(["addProduct"]);

function onAddButtonClick() {
  emit("addProduct");
}
</script>

<template>
  <v-card>
    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>
    <v-card-title>
      <p>{{ product.name }}</p>
    </v-card-title>
    <v-card-text>
      <p class="mb-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita dignissimos saepe corrupti voluptates eaque.
        Necessitatibus eius consequatur atque dolorum voluptatibus. Ullam tempora voluptatibus officiis sunt, amet
        voluptatem ipsam eligendi consequuntur!
      </p>
      <v-chip> $ {{ product.price }} </v-chip>
    </v-card-text>
    <v-card-actions>
      <v-btn variant="flat" block color="primary" @click="onAddButtonClick">
        <v-icon>
          mdi-cart
        </v-icon>
        add cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>