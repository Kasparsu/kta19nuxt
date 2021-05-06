<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">
          {{country.Country}}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>



    <v-list class="transparent">
      <v-list-item
        v-for="key in $store.getters.fullStatisticsKeys"
        :key="key.key"
      >
        <v-list-item-title>{{ key.label }}</v-list-item-title>

        <v-list-item-subtitle class="text-right">
          {{ country[key.key] }}
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn text>
        Full Report
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
    export default {
        name: "Country",
      props:['country'],
      data () {
        return {

        }
      },
    }
</script>

<style scoped>

</style>
