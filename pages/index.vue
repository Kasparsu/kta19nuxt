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
    this.$axios.$get('https://api.covid19api.com/summary').then((data) => {
      console.log(data);
      this.countries = data.Countries;
    });
  },
  data(){
    return {
      countries: []
    }
  },
  methods: {

  }
}
</script>
<style scoped>

</style>
