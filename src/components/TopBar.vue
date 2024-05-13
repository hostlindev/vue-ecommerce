<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useCartStore } from "@/stores/cart";
import { computed } from "vue";

const itemsCount = computed(() => {
  const cartStore = useCartStore();
  return cartStore.cartItemsCount;
});
</script>

<template>
  <!-- Navegación -->
  <v-app-bar flat>
    <v-container class="mx-auto d-flex align-center justify-center">
      <v-avatar class="me-4" color="grey-darken-1" size="32"></v-avatar>

      <!-- Botones para navegar -->
      <RouterLink to="/" custom v-slot="{ navigate }">
        <v-btn variant="text" @click="navigate"> Home </v-btn>
      </RouterLink>
      <RouterLink to="/cart" custom v-slot="{ navigate }">
        <v-badge color="red" :model-value="itemsCount > 0" :content="itemsCount">
          <v-btn variant="text" @click="navigate"> Cart </v-btn>
        </v-badge>
      </RouterLink>
      <RouterLink to="/about" custom v-slot="{ navigate }">
        <v-btn variant="text" @click="navigate"> About </v-btn>
      </RouterLink>

      <v-spacer></v-spacer>

      <!-- <v-responsive max-width="160">
          <v-text-field density="compact" label="Search" rounded="lg" variant="solo-filled" flat hide-details
            single-line></v-text-field>
        </v-responsive> -->
    </v-container>
  </v-app-bar>
</template>
