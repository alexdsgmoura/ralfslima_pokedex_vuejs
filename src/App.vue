<script setup lang="ts">

// Importação dos elementos vue-router
import { RouterLink, RouterView } from 'vue-router'

// Importação do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// Importar estilo
import './complements/styles.css'

// Importar componente de navegação
import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <!-- Barra de navegação -->
  <NavigationBar />

  <!-- Visualizar o conteúdo das páginas -->
  <RouterView />
</template>