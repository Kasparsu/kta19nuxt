<template>
  <v-app id="inspire">
    <top-bar></top-bar>

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
import TopBar from "../components/TopBar";
export default {
  components: {TopBar},
  data(){
    return {
      drawer: true
    }
  }
}
</script>
