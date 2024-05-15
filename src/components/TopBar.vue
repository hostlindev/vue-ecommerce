<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useCartStore } from "@/stores/cart";
import { computed } from "vue";

const cartStore = useCartStore();

const itemsCount = computed(() => {
  return cartStore.cartItemsCount;
});
</script>

<template>
  <!-- Navegación -->
  <v-app-bar flat>
    <v-container class="mx-auto d-flex align-center justify-center">
      <v-avatar class="me-4" size="32">
        <v-img
          src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/64/80/64/648064ee-46cf-f396-32f9-a7b5329418df/artwork.jpg/400x400bb.webp"
        ></v-img>
      </v-avatar>

      <!-- Botones para navegar -->
      <RouterLink to="/" custom v-slot="{ navigate }">
        <v-btn
          prepend-icon="mdi-home"
          :active="$route.name === 'home'"
          variant="text"
          @click="navigate"
        >
          Home
        </v-btn>
      </RouterLink>
      <RouterLink to="/cart" custom v-slot="{ navigate }">
        <v-badge color="red" :model-value="itemsCount > 0" :content="itemsCount">
          <v-btn
            prepend-icon="mdi-cart"
            :active="$route.name === 'cart'"
            variant="text"
            @click="navigate"
          >
            Cart
          </v-btn>
        </v-badge>
      </RouterLink>
      <RouterLink to="/about" custom v-slot="{ navigate }">
        <v-btn
          prepend-icon="mdi-information"
          :active="$route.name === 'about'"
          variant="text"
          @click="navigate"
        >
          About
        </v-btn>
      </RouterLink>

      <v-spacer></v-spacer>

      <!-- <v-responsive max-width="160">
          <v-text-field density="compact" label="Search" rounded="lg" variant="solo-filled" flat hide-details
            single-line></v-text-field>
        </v-responsive> -->
    </v-container>
  </v-app-bar>
</template>
