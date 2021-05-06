<template>
  <div>
      <v-row>
        <v-col v-for="country in countries" :key="country.ID" cols="2">
          <country :country="country"/>
        </v-col>
      </v-row>
  </div>
</template>

<script>

export default {
  created() {
    this.$store.dispatch('getCountries');
  },
  data(){
    return {

    }
  },
  methods: {

  },
  computed: {
    countries(){
      return this.$store.getters.filteredCountries;
    }
  }
}
</script>
<style scoped>

</style>
