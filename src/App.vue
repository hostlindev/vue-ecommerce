<script setup lang="ts">
import { RouterView } from "vue-router";
import TopBar from "@/components/TopBar.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav></nav>
    </div>
  </header>

  <v-app>
    <!-- Navegador -->
    <TopBar />
    <!-- Paginas de la app -->
    <v-main>
      <v-container fluid>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>
