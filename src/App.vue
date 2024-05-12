<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav></nav>
    </div>
  </header>

  <v-app>
    <!-- Navegación -->
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-center">
        <v-avatar class="me-4" color="grey-darken-1" size="32"></v-avatar>

        <!-- Botones para navegar -->
        <RouterLink to="/" custom v-slot="{ navigate }">
          <v-btn variant="text" @click="navigate"> Home </v-btn>
        </RouterLink>
        <RouterLink to="/cart" custom v-slot="{ navigate }">
          <v-btn variant="text" @click="navigate"> Cart </v-btn>
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

    <!-- Paginas de la app -->
    <v-main>
      <v-container fluid>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>
