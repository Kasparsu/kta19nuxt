<template>
  <v-app-bar app clipped-left>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>Application</v-toolbar-title>
    <v-toolbar-items>
      <v-btn to="/" text>
        <span>Home</span>
      </v-btn>
      <v-btn to="/inspire" text>
        <span>Inspire</span>
      </v-btn>
      <v-btn to="/about" text>
        <span>About</span>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
    export default {
        name: "TopBar"
    }
</script>

<style scoped>

</style>
