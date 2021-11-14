<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="logo" class="my-3" contain height="200" />
        <v-btn flat color="secondary">Secondary</v-btn>

        <v-btn flat color="error">Error</v-btn>
        <v-avatar color="teal" size="84">AK</v-avatar>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-btn flat color="secondary" @click="router.push({ name: 'table' })">Go to Table</v-btn>
    </v-row>
  </v-container>
</template>

<script setup>
import logo from '../assets/logo.svg'
import router from '@/router/routes'
</script>
