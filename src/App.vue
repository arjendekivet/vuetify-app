<template>
  <v-app :theme="theme">
    <v-btn @click="toggleTheme">toggle theme</v-btn>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const theme = ref('light')

    return {
      theme,
      toggleTheme: () => theme.value = theme.value === 'light' ? 'dark' : 'light'
    }
  }
}
</script>
