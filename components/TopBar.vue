<template>
  <v-app-bar app clipped-left>
    <v-app-bar-nav-icon @click="$emit('open-drawer')"></v-app-bar-nav-icon>

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
    <v-text-field
      v-model="search"
      label="Search"
      class="mt-4"
    ></v-text-field>
    <v-select
      :items="$store.getters.sortStatisticsKeys"
      item-text="label"
      label="Standard"
      class="mt-4"
    ></v-select>
  </v-app-bar>
</template>

<script>
    export default {
        name: "TopBar",
      computed: {
        search: {
          get(){
            return this.$store.state.search;
          },
          set(value){
            this.$store.commit('SET_SEARCH', value);
          }
        },
        sort: {
          get(){
            return this.$store.state.sort;
          },
          set(value){
            this.$store.commit('SET_SORT', value);
          }
        }
      }
    }
</script>

<style scoped>

</style>
