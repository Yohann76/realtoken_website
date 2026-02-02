<script setup>
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
</script>

<template>
  <Navigation />
  <main class="app-main">
    <RouterView />
  </main>
</template>

<style>
/* Styles globaux */
</style>
