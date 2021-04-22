<template>
  <v-app id="inspire">
   <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
    >
      <!--  -->
    </v-navigation-drawer>
    <v-main>
      <v-content>
        <v-container>
          <nuxt />
        </v-container>
      </v-content>
    </v-main>
  </v-app>

</template>

<script>
export default {
  data(){
    return {
      drawer: true
    }
  }
}
</script>
